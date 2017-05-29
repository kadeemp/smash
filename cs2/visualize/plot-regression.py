# coding: utf-8
# Plots and Linear Regression
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

# Import libraries
import matplotlib.pyplot as plt
import numpy as np
from random import randint

# Create your data
temps = (14.2, 16.4, 11.9, 15.2, 18.5, 22.1, 19.4, 25.1, 23.4, 18.1, 22.6, 17.2) # in degrees Celsius
sales = (215, 325, 185, 332, 406, 522, 412, 614, 544, 421, 445, 408) # dollars

# Sort
temps, sales = zip(*sorted(zip(temps, sales)))

# Calculate the Pearson correlation coefficient (r)
r = round(np.corrcoef(temps, sales)[0][1], 2)

# Draw a scatter plot
plt.rc("axes", axisbelow=True)
plt.figure(1)
plt.axis([10, 26, 0, 700])
plt.grid(True)
plt.title("Ice Cream Sales ($) by Temperature (\N{DEGREE SIGN}C)\nr = {}".format(r))
plt.xlabel("Temperature (\N{DEGREE SIGN}C)")
plt.ylabel("Sales ($)")
plt.scatter(temps, sales, color="blue", marker=".", linewidth=5)
plt.show()

# Draw a line plot
plt.figure(2)
plt.axis([10, 26, 0, 700])
plt.grid(True)
plt.title("Ice Cream Sales ($) by Temperature (\N{DEGREE SIGN}C)\nr = {}".format(r))
plt.xlabel("Temperature (\N{DEGREE SIGN}C)")
plt.ylabel("Sales ($)")
plt.scatter(temps, sales, color="blue", marker=".", linewidth=5, zorder=1)
plt.plot(temps, sales, color="red", zorder=0)
plt.show()


# Draw multiple plots
temps_2 = [num + randint(-5, 5) for num in temps]
sales_2 = [num + randint(-50, 50) for num in sales]
temps_2, sales_2 = zip(*sorted(zip(temps_2, sales_2)))
r_2 = round(np.corrcoef(temps_2, sales_2)[0][1], 2)

plt.figure(3)
plt.axis([5, 31, -50, 750])
plt.grid(True)
plt.title("Yearly Ice Cream Sales ($) by Temperature (\N{DEGREE SIGN}C)\nYear 1 r = {}\nYear 2 r = {}".format(r, r_2))
plt.xlabel("Temperature (\N{DEGREE SIGN}C)")
plt.ylabel("Sales ($)")

plt.scatter(temps, sales, color="blue", marker=".", linewidth=5, zorder=1, label="Year 1")
plt.plot(temps, sales, color="red", zorder=0)

plt.scatter(temps_2, sales_2, color="green", marker="*", linewidth=3, zorder=1, label="Year 2")
plt.plot(temps_2, sales_2, color="orange", zorder=0)

plt.legend().draggable()
plt.show()


# Create a linear regression model
model = np.polyfit(temps, sales, deg=1)
x_range = temps
p = np.poly1d(model)
y_range = p(x_range)

plt.figure(4)
plt.axis([10, 26, 0, 700])
plt.grid(True)
plt.title("Ice Cream Sales ($) by Temperature (\N{DEGREE SIGN}C)\nr = {}".format(r))
plt.xlabel("Temperature (\N{DEGREE SIGN}C)")
plt.ylabel("Sales ($)")

plt.scatter(temps, sales, color="blue", marker=".", linewidth=5, zorder=0)

plt.plot(x_range, y_range, color="red", zorder=1)

plt.show()
