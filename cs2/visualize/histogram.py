# coding: utf-8
# Histograms
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

# Import matplotlib.pyplot as plt and randint from random</h2>
import matplotlib.pyplot as plt
from random import randint

# <h2>Create your data</h2>
scores = []
for i in range(0, 30):
    scores.append(randint(50, 100))

# Calculate mean and standard deviation

# Returns mean, rounded to nearest hundreth decimal place
def get_mean(nums):
    if(len(nums) == 0):
        return 0
    else:
        total = 0
        for num in nums:
            total += num
        return round(total / len(nums), 2)

# Returns standard deviation, rounded to nearest hundred decimal place
def get_sd(nums):
    mean = get_mean(nums)
    total = 0
    for num in nums:
        total += (num - mean) ** 2
    variance = total / (len(nums) - 1)
    return round(variance ** 0.5, 2)

mean = get_mean(scores)
sd = get_sd(scores)

# Setup your graphic
x_range = list(range(50, 100, 10))
y_range = list(range(0, len(scores)))
plt.rc("axes", axisbelow=True)
plt.figure(1)
plt.xticks(x_range)
plt.yticks(y_range)
plt.grid(axis="y")
plt.title('Distribution of Exam Scores\nmean = {} sd = {}'.format(mean, sd))
plt.xlabel("Scores")
plt.ylabel("Frequency")

# Draw the histogram.
plt.hist(scores, bins="auto", edgecolor="black")

# Show the figure.
plt.show()
