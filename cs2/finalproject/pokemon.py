import sqlite3
import csv
import matplotlib.pyplot as plt
import numpy as np

conn = sqlite3.connect("pokemon.sqlite3")
cur = conn.cursor()

cur.execute("DROP TABLE IF EXISTS Pokemon")
cur.execute("CREATE TABLE Pokemon ("
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

file = open("Pokemon.csv")
csv_file = csv.reader(file)
for row in csv_file:
    cur.execute("INSERT INTO Pokemon VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", (row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8], row[9], row[10], row[11], row[12]))

conn.commit()


#Testing
cur.execute("SELECT hp FROM Pokemon WHERE name = 'Pikachu'")
for row in cur:
    print(row)


#Compute the median stats (hp, attack, defense, spatk, spdef, speed) for each generation
def getMedian(value, gen):
    a = []
    cur.execute("SELECT {} FROM Pokemon WHERE generation = {}".format(value, gen))
    for row in cur:
        a.append(row[0])
    return np.median(a)

h, a, d, spa, spd, spe = [], [], [], [], [], []

for i in range(1, 7):
    h.append(getMedian('hp', i))
    a.append(getMedian('attack', i))
    d.append(getMedian('defense', i))
    spa.append(getMedian('spatk', i))
    spd.append(getMedian('spdef', i))
    spe.append(getMedian('speed', i))

gens = [1, 2, 3, 4, 5, 6]

plt.figure(1)
hpLine, = plt.plot(gens, h, label="HP", marker="*")
attackLine, = plt.plot(gens, a, label="Attack", marker="o")
dLine, = plt.plot(gens, d, label="Defense", marker="s")
spaLine, = plt.plot(gens, spa, label="Sp. Attack", marker="D")
spdLine, = plt.plot(gens, spd, label="Sp. Defense", marker="p")
speLine, = plt.plot(gens, spe, label="Speed", marker="^")

#Set axis labels and such here
plt.xlabel("Generation")
plt.ylabel("Values")
plt.title("Median Pokemon Stats by Generation")
plt.legend(handles=[hpLine, attackLine, dLine, spaLine, spdLine, speLine]).draggable()

plt.show()

conn.close()
