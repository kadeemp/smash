# Figureate Numbers
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

from math import sqrt


def is_prime(n):
    if n == 2:
        return True
    if n == 1 or n % 2 == 0:
        return False
    for i in range(3, int(sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True


# Naive solution. Just generate triangular numbers up until n,
# checking if each one is n.
def is_triangular(n):
    i = 1
    add = 2
    while i <= n:
        if i == n:
            return True
        i += add
        add += 1
    return False


# Naive again. Just generate square numbers and check if n is one
# of them. Just like above, if you go past n, you should return False.
def is_square(n):
    i = 1
    add = 3
    while i <= n:
        if i == n:
            return True
        i += add
        add += 2
    return False



# Trial division again. First, we need to find all the prime factors of n.
# If you end up with more than 2 factors, n is automatically disqualified and you
# can "short-circuit" the function by simply returning "False" right away.
# To help us solve this we can just call "is_prime(n)" rather than rewriting
# all that code to see if a number is even prime or not.
# Trial division is fine for a small limit like 100, but is horrifically slow
# for very long numbers. 
def is_prime_oblong(n):
    if n == 1:
        return False
    num_factors, num_prime_factors = 0, 0
    i = 2
    while i < n:
        if n % i == 0: # is n divisible by i?
            num_factors += 1
            if num_factors > 2:
                return False # I should jump out immediately if I have more than 2 factors
            elif is_prime(i): # is i a prime number?
                num_prime_factors += 1
        i += 1
    return num_prime_factors == 2


# The run function. This tests all numbers from 1 to 100.
def run():
    limit = 100
    for i in range(1, limit + 1):
        info = str(i) + ": "
        if is_prime(i):
            info += "prime, "
        else:
            info += "composite, "
        if is_triangular(i):
            info += "triangular, "
        else:
            info += "not triangular, "
        if is_square(i):
            info += "square, "
        else:
            info += "not square, "
        if is_prime_oblong(i):
            info += "prime oblong"
        else:
            info += "not prime oblong"
        print(info)

# Call the run function below and watch the magic happen before your eyes!
run()
