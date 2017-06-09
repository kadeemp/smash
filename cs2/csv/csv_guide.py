# coding: utf-8
# SQL Database Tables
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

# Import libraries<
import sqlite3
import csv
import matplotlib.pyplot as plt


# Insert the CSV data
conn = sqlite3.connect("oil.db")
cur = conn.cursor()
cur.execute("DROP TABLE IF EXISTS Accidents")
cur.execute("CREATE TABLE Accidents ("
           "id INTEGER PRIMARY KEY, "
           "year INTEGER, "
           "operatorID INTEGER, "
           "operatorName TEXT, "
           "state TEXT, "
           "pipelineLocation TEXT, "
           "pipelineType TEXT, "           
           "cause TEXT, "
           "liquidType TEXT, "
           "ignition INTEGER, "
           "explosion INTEGER, "
           "injuries INTEGER, "
           "deaths INTEGER, "
           "oilLoss REAL, "
           "costs INTEGER)")

file = open("oil pipeline accidents dataset.csv")
csv_file = csv.reader(file)
for row in csv_file:
    cur.execute("INSERT INTO Accidents VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
                (row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7],
                 row[8], row[9], row[10], row[11], row[12], row[13], row[14]))
conn.commit()

# Tests
cur.execute("SELECT state FROM Accidents LIMIT 10")
print(cur.fetchall())
cur.execute("SELECT COUNT(*) FROM Accidents")
print("Total number of records =", cur.fetchone()[0])


# Analyze the data
causes = []
cur.execute("SELECT DISTINCT cause FROM Accidents")
for row in cur:
    causes.append(row[0])
print(causes)
    
# Now we just need to know how many accidents there are per cause category.
accidents_per_cause = []
for c in causes:
    cur.execute("SELECT COUNT(*) FROM Accidents WHERE cause = ?", (c,));
    accidents_per_cause.append(cur.fetchone()[0])
print(accidents_per_cause)

# Bar Chart setup
bar_width = 0.35
x_range = list(range(0, len(causes), 1))
y_range = list(range(0, 1500, 100))
plt.rc("axes", axisbelow=True)

# Vertical Bar Chart
plt.figure(1)
plt.xticks(x_range, causes, rotation=90)
plt.yticks(y_range)
plt.grid(axis="y")
plt.title("USA oil pipeline incidents per cause category\n2010-2017")

plt.bar(x_range, accidents_per_cause, width=bar_width, color="blue")
plt.show()


# Horizontal Bar Chart
plt.figure(2)
plt.xticks(y_range, rotation=45)
plt.yticks(x_range, causes)
plt.grid(axis="x")
plt.title("USA oil pipeline incidents per cause category\n2010-2017")

# Draw the bar chart.
plt.barh(x_range, accidents_per_cause, height=bar_width, color="blue")

# Show the bar chart.
plt.show()


# Bonus: How to write from SQlite table to CSV (just for completeness sake)
with open("sql2csv.csv", "w", newline="") as file:
    cur.execute("SELECT * FROM Accidents")
    for row in cur:
        csv.writer(file).writerow(row)

# Close connection
conn.close()
