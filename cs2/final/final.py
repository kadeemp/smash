# coding: utf-8
# Final Data Analysis Project Example
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

# Import libraries
import matplotlib.pyplot as plt
import numpy as np
import sqlite3 
import csv


# Create/Connect to a SQL database, and assign a "cursor"
conn = sqlite3.connect("mydatabase.sqlite3")
cur = conn.cursor()


# Create a table
cur.execute("DROP TABLE IF EXISTS Pokedex")
cur.execute("CREATE TABLE Pokedex ("
            "id INTEGER PRIMARY KEY, "
            "name TEXT, "
            "type1 TEXT, "
            "type2 TEXT, "
            "total INTEGER, "
            "hp INTEGER, "
            "attack INTEGER, "
            "defense INTEGER, "
            "spatk INTEGER, "
            "spdef INTEGER, "
            "speed INTEGER, "
            "generation INTEGER, "
            "legendary INTEGER)")


# Import CSV data into table
file = open("Pokemon.csv")
csv_file = csv.reader(file)
for row in csv_file:
    cur.execute("INSERT INTO Pokedex VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
                (row[0], row[1], row[2], row[3], row[4], row[5], row[6], 
                 row[7], row[8], row[9], row[10], row[11], row[12]))
    
conn.commit()


# Test your table
cur.execute("SELECT * FROM Pokedex LIMIT 10;")
for row in cur:
    print(row)


# Create a function to compute stuff for you
def get_mean(nums):
    if(len(nums) == 0):
        return 0
    else:
        total = 0
        for num in nums:
            total += num
        return round(total / len(nums), 2)


# Bring table data into program
cur.execute("SELECT hp FROM Pokedex LIMIT 5")
for row in cur:
    print(row)


# Looks like SELECT returns tuples. Just as we said before, records are just tuples.
cur.execute("SELECT hp FROM Pokedex WHERE name = 'Pikachu';")
data = cur.fetchone()[0] 
print(data)
print(type(data))


# Test your function
cur.execute("SELECT hp FROM Pokedex")
hp_data = []
for row in cur:
    hp_data.append(row[0])
hp_mean = get_mean(hp_data)
print("HP mean = ", hp_mean)


# I wonder... is the average HP for non-Legendary Pokemon less than that for Legendary Pokemon?
cur.execute("SELECT hp FROM Pokedex WHERE Legendary = 0")
nonlegendary_hp = []
for row in cur:
    nonlegendary_hp.append(row[0])
cur.execute("SELECT hp FROM Pokedex WHERE Legendary = 1")
legendary_hp = []
for row in cur:
    legendary_hp.append(row[0])
print("Non-Legendary HP mean =", get_mean(nonlegendary_hp))
print("Legendary HP mean =", get_mean(legendary_hp))


# Make a bar chart
nonlegendary_means = []
legendary_means = []

hp, attack, defense, spatk, spdef, speed = [], [], [], [], [], []
cur.execute("SELECT hp, attack, defense, spatk, spdef, speed FROM Pokedex WHERE Legendary = 0")
for row in cur:
    hp.append(row[0])
    attack.append(row[1])
    defense.append(row[2])
    spatk.append(row[3])
    spdef.append(row[4])
    speed.append(row[5])
nonlegendary_means.extend((get_mean(hp), get_mean(attack), 
                          get_mean(defense), get_mean(spatk), 
                          get_mean(spdef), get_mean(speed)))


hp, attack, defense, spatk, spdef, speed = [], [], [], [], [], []
cur.execute("SELECT hp, attack, defense, spatk, spdef, speed FROM Pokedex WHERE Legendary = 1")
for row in cur:
    hp.append(row[0])
    attack.append(row[1])
    defense.append(row[2])
    spatk.append(row[3])
    spdef.append(row[4])
    speed.append(row[5])
legendary_means.extend((get_mean(hp), get_mean(attack), 
                        get_mean(defense), get_mean(spatk), 
                        get_mean(spdef), get_mean(speed)))


print("Nonlegendary means:", nonlegendary_means)
print("Legendary means:", legendary_means)


bar_width = 0.35
x_range = [0, 1, 2, 3, 4, 5]
y_range = list(range(0, 150, 10))
plt.rc("axes", axisbelow=True)


plt.figure(1)
plt.xticks(x_range,  ["HP", "Attack", "Defense", "Spatk", "Spdef", "Speed"])
plt.yticks(y_range)
plt.grid(axis="y")
plt.title("Pokemon Stat Averages")


nonlegendary_range = [x - bar_width / 2 for x in x_range]
legendary_range = [x + bar_width / 2 for x in x_range]


plt.bar(nonlegendary_range, nonlegendary_means, bar_width, color='blue', label='non-legendary')
plt.bar(legendary_range, legendary_means, bar_width, color='red', label='legendary')


plt.legend().draggable()


plt.show()


# Write and test another function
def get_sd(nums):
    mean = get_mean(nums)
    total = 0
    for num in nums:
        total += (num - mean) ** 2
    variance = total / (len(nums) - 1)
    return round(variance ** 0.5, 2)

hp_sd = get_sd(hp_data)
print("HP standard deviation =", hp_sd)


# Make a histogram
plt.figure(2)
plt.title("Distribution of Pokemon HP\nmean = {}, sd = {}".format(hp_mean, hp_sd))
plt.xlabel("HP")
plt.ylabel("Frequency")
plt.hist(hp_data, bins="auto", edgecolor="black")
plt.axis([min(hp_data), max(hp_data), 0, 130])
plt.xticks(list(range(0, max(hp_data), 20)))
plt.yticks(list(range(0, 130, 10)))
plt.grid(axis="y")
plt.show()


# This looks positively skewed
print(max(hp_data))


# Which Pokemon has 255 base HP?
cur.execute("SELECT name FROM Pokedex WHERE hp = 255")
print(cur.fetchone()[0])


# Make a scatter plot
cur.execute("SELECT defense,speed FROM Pokedex")
d_data, s_data = [], []
for row in cur:
    d_data.append(row[0])
    s_data.append(row[1])
plt.figure(3)
plt.xticks(list(range(0, 250, 20)))
plt.yticks(list(range(0, 250, 20)))
plt.grid(True)
plt.title("Pokemon Defense vs Speed")
plt.xlabel("Defense")
plt.ylabel("Speed")
plt.scatter(d_data, s_data)
plt.show()


# Find Pearson correlation coefficient (r) between two variables
correlation = round(np.corrcoef(d_data, s_data)[0][1], 2)
print("r =", correlation)


# Make another scatter plot
a_data = []
cur.execute("SELECT attack FROM Pokedex")
for row in cur:
    a_data.append(row[0])
plt.figure(4)
plt.xticks(list(range(0, 250, 20)))
plt.yticks(list(range(0, 250, 20)))
plt.grid(True)
plt.title("Pokemon HP vs Attack Power")
plt.xlabel("HP")
plt.ylabel("Attack Power")
plt.scatter(hp_data, a_data)
plt.show()


correlation = round(np.corrcoef(hp_data, a_data)[0][1], 2)
print("r =", correlation)


# Create a model
model = np.polyfit(hp_data, a_data, deg=1)
print(model)


# Plot the model onto the data
x_range = list(range(max(hp_data))) 
p = np.poly1d(model)               
y_range = p(x_range)                
plt.figure(5)
plt.xticks(list(range(0, 250, 20)))
plt.yticks(list(range(0, 250, 20)))
plt.grid(True)
plt.title("Pokemon HP vs Attack Power\nr = {}".format(correlation))
plt.xlabel("HP")
plt.ylabel("Attack Power")
plt.scatter(hp_data, a_data)
plt.plot(x_range, y_range, color="red") 
plt.show()


conn.close()
