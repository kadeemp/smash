# coding: utf-8
# Bar Charts
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

# Import matplotlib.pyplot as plt
import matplotlib.pyplot as plt

# Create your data: http://www.usclimatedata.com
low_avg_temps = (27, 28, 35, 44, 54, 63, 68, 66, 59, 48, 38, 29)
high_avg_temps = (42, 44, 53, 64, 75, 83, 87, 84, 78, 67, 55, 45)
month_labels = ("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

# Setup your graphic
bar_width = 0.35
x_range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
y_range = list(range(0, 95, 5))
plt.rc("axes", axisbelow=True)

# Draw a vertical bar chart
plt.figure(1)
plt.xticks(x_range,  month_labels)
plt.yticks(y_range)
plt.grid(axis="y")
plt.title('Washington, DC (1961-1990)\nAverage Monthly Temperatures (\N{DEGREE SIGN}F)')
plt.ylabel('Avg Temp (\N{DEGREE SIGN}F)')
plt.bar(x_range, low_avg_temps, width=bar_width, color="blue")
plt.show()

# Draw a horizontal bar chart
plt.figure(2)
plt.xticks(y_range)
plt.yticks(x_range,  month_labels)
plt.gca().invert_yaxis()
plt.grid(axis="x")
plt.title('Washington, DC (1961-1990)\nAverage Monthly Temperatures (\N{DEGREE SIGN}F)')
plt.xlabel('Avg Temp (\N{DEGREE SIGN}F)')
plt.barh(x_range, low_avg_temps, height=bar_width, color="blue")
plt.show()


# Draw two datasets side-by-side for comparison
plt.figure(3)
plt.xticks(x_range,  month_labels)
plt.yticks(y_range)
plt.grid(axis="y")
plt.title('Washington, DC (1961-1990)\nAverage Monthly Temperatures (\N{DEGREE SIGN}F)')
plt.ylabel('Avg Temp (\N{DEGREE SIGN}F)')
low_range = [x - bar_width / 2 for x in x_range]
high_range = [x + bar_width / 2 for x in x_range]
plt.bar(low_range, low_avg_temps, bar_width, color='blue', label='low')
plt.bar(high_range, high_avg_temps, bar_width, color='red', label='high')
plt.legend(loc="upper right").draggable()
plt.show()
