import turtle
from random import randint

t = turtle.Turtle()
t.shape("turtle")
wn = turtle.Screen()


# Functions reduce redundancy! Write once, call forever!
def setup_turtle(x, y, color, size):
    t.setheading(0)
    t.penup()
    t.setposition(x, y)
    t.pencolor(color)
    t.pensize(size)
    t.pendown()


# Draw a square! Easy!
def draw_square(x, y, length, color, pen_size):
    setup_turtle(x, y, color, pen_size)
    for i in range(0, 4):
        t.forward(length)
        t.left(90)


# Draw a triangle! Easy!
def draw_triangle(x, y, length, color, pen_size):
    setup_turtle(x, y, color, pen_size)
    for i in range(0, 3):
        t.forward(length)
        t.left(120)


# This draws a bunch of stuff!
def run():
    draw_square(-50, 0, 40, "red", 30)
    draw_square(50, 0, 40, "green", 10)
    draw_triangle(-100, 0, 40, "orange", 10)
    draw_triangle(100, 0, 40, "blue", 5)
    turtle.done()


# More advanced!
def another_run():
    t.speed(10)
    screen_width, screen_height = wn.screensize()
    t.penup()
    t.setposition(screen_width * -1, screen_height)
    t.pendown()
    next_line = screen_height
    t.setheading(60)
    while t.ycor() > screen_height * - 1:
        if t.xcor() >= screen_width - 20:
            t.penup()
            next_line -= 20
            t.setposition(screen_width * -1, next_line)
            t.pendown()
        t.forward(100)
        t.right(120)
        t.forward(100)
        t.left(120)
    turtle.done()


# This is madness! Madness? This. Is. Pythoooooon!!!! Yaaaarrghhh!!!
def screensaver():
    wn.colormode(255)
    t.speed(100)
    t.hideturtle()
    for i in range(0, 50):
        screen_width, screen_height = wn.screensize()
        rand_x = randint(screen_width * -1, screen_width)
        rand_y = randint(screen_height * - 1, screen_height)
        rand_length = randint(50, 200)
        rand_pen_size = randint(2, 5)
        rand_red, rand_green, rand_blue = randint(0, 200), randint(0, 200), randint(0, 200)
        rand_change = randint(0, 10)
        rand_behavior = randint(0, 1)
        while rand_length > 0:
            if rand_behavior == 0:
                draw_square(rand_x, rand_y, rand_length, (rand_red, rand_green, rand_blue), rand_pen_size)
            else:
                draw_triangle(rand_x, rand_y, rand_length, (rand_red, rand_green, rand_blue), rand_pen_size)
            rand_length -= 10
            if rand_behavior == 0:
                rand_x += rand_change
                rand_y -= rand_change
            else:
                rand_x -= rand_change
                rand_y += rand_change
    turtle.done()


# Run your programs by un-commenting the lines below!
# run()
# another_run()
screensaver()
