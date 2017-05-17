# Figureate Numbers
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

import math


def is_prime(n):
    if n == 2:
        return True
    if n == 1 or n % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True


def is_triangular(n):
    i = 1
    add = 2
    while i <= n:
        if i == n:
            return True
        i += add
        add += 1
    return False

for i in range(1, 21):
    if is_triangular(i):
        print(i)
