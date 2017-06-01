# coding: utf-8
# SQL Database Tables
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

# Import sqlite3
import sqlite3


# Connect to a database, create a cursor
conn = sqlite3.connect("music.db")
cur = conn.cursor()


# Create a table
cur.execute("DROP TABLE IF EXISTS Musicians")
cur.execute("CREATE TABLE Musicians ("
            "artistId INTEGER PRIMARY KEY, "
            "name TEXT NOT NULL, "
            "genre TEXT, "
            "hometown TEXT)")


# Alter a table
cur.execute("ALTER TABLE Musicians ADD COLUMN numAlbums INTEGER")
cur.execute("DROP TABLE IF EXISTS Artists")
cur.execute("ALTER TABLE Musicians RENAME TO Artists")

# Insert some records
conn.execute("INSERT INTO "
             "Artists(name, genre, hometown, numAlbums) "
             "VALUES('Keebler Elf Lamar', 'Hip Hop', 'Compton', 3)")

conn.execute("INSERT INTO Artists VALUES(null, 'Beethoven', 'Classical', 'Germany', 9)")

conn.execute("INSERT INTO Artists VALUES(?, ?, ?, ?, ?)",
            (None, "IceJJFish", "????", "The Abyss", 1))

names = ["Tupac", "Bjork", "Debussy", "Coltrane"]
genres = ["Hip Hop", "Electronica", "Impressionism", "Jazz"]
hometowns = ["Harlem", "Iceland", "France", "Hamlet"]
albums = [5, 9, None, 45]

for i in range(0, len(names)):
    conn.execute("INSERT INTO Artists VALUES(?, ?, ?, ?, ?)",
                (None, names[i], genres[i], hometowns[i], albums[i]))


# Select all fields from all records
cur.execute("SELECT * FROM Artists")
data = cur.fetchone()
print(data)


cur.execute("SELECT * FROM Artists")
data = cur.fetchmany(2)
print(data)


cur.execute("SELECT * FROM Artists")
data = cur.fetchall()
print(data)


cur.execute("SELECT * FROM Artists")
for row in cur:
    print(row)


cur.execute("SELECT * FROM Artists")
data = cur.fetchmany(2)
for row in data:
    print(row[1])


# Select certain fields from all records
cur.execute("SELECT name FROM Artists")
for row in cur:
    print(row[0])


cur.execute("SELECT name, genre FROM Artists")
for row in cur:
    print(row[0], ":", row[1])


# Select with clauses
cur.execute("SELECT * FROM Artists WHERE name = 'Keebler Elf Lamar'")
print(cur.fetchone())


cur.execute("SELECT hometown FROM Artists WHERE artistId >= 2 AND artistID <= 5")
for row in cur:
    print(row[0])


cur.execute("SELECT * FROM Artists ORDER BY hometown")
for row in cur:
    print(row)


cur.execute("SELECT genre, numAlbums FROM Artists WHERE artistID > 3 ORDER BY numAlbums")
for row in cur:
    print(row[0], ":", row[1])


cur.execute("SELECT * FROM Artists LIMIT 3")
for row in cur:
    print(row)


# Update record data
cur.execute("UPDATE Artists SET name = 'Kendrick Lamar' WHERE name = 'Keebler Elf Lamar'")
cur.execute("SELECT * FROM Artists WHERE artistID = 1")
print(cur.fetchone())


cur.execute("UPDATE Artists SET genre = 'R&B', numAlbums = 2 WHERE name = 'IceJJFish'")
cur.execute("SELECT * FROM Artists WHERE artistId = 3")
print(cur.fetchone())


# Deleting records
cur.execute("DELETE FROM Artists WHERE name = 'Debussy'")
cur.execute("SELECT artistId, name FROM Artists")
for row in cur:
    print(row[0], ":", row[1])


cur.execute("DELETE FROM Artists")
cur.execute("SELECT * FROM Artists")
print(cur.fetchall())


# Committing transactions
conn.commit()


# Closing your connection to the database
conn.close()
