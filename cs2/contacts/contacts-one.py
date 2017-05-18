# Phone Contacts App v1.0
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

#import libraries here
from random import randint


# declare global variables here
contacts_list = []


'''
Add a contact's phone number as an integer to your list while maintaining the numeric order of the list.
The number should be expressed with 10-digits (area code + local). Assume no country codes, parentheses, or
dashes/hyphens will appear.

First, the function should check if the number entered is a valid 10-digit phone number. If the number is not
exactly 10 digits, or if the number is negative, the function should print the message "invalid phone number"
and do nothing. Note that leading 0's are considered "blank", meaning 0234 is actually 3 digits. Essentially, a
valid phone number will within the range:

1,000,000,000 <= n <= 9,999,999,999 (commas added here for readability)

If the list already contains that contact's number, your function should *not* add that number to the list,
but instead print the message "contact already exists".

Don't forget: Your function should also maintain the numeric order of the list, keeping it sorted from
least to greatest. You can't simply say append(number), since that just places the number
at the end of the list. Instead, you'll need to use insert(index, number). And no, you may not use sort().
No cheating. ^_^

valid input: 1234567890
invalid input: 0000000001 (leading 0's do not count)
invalid input: 1234
invalid input: -1234567890
invalid input: 99999999999999999
-----------------
Hint for determining number of digits:
You can divide a number by 10 using the integer division operator "//", which truncates (cuts off) the last digit
of a number. How many times you need to truncate the last digit of a number until you reach 0 tells you how many
digits are in that number.
Example: How many digits are in the number 1234?
1234 // 10 = 123
123  // 10 = 12
12   // 10 = 1
1    // 10 = 0
Total operations: 4 (So 1234 is a 4-digit number)
-----------------
'''


# Helper function. Returns true if number is valid, false otherwise.
def check_number(number):
    digits = 0
    while number > 0:
        number //= 10
        digits += 1
    return digits == 10 and number > -1


def add_contact(number):
    if not check_number(number):
        print("Invalid number:", number, "\n")
    elif len(contacts_list) == 0:
        contacts_list.append(number)
        print("Contact added:", number, "\n")
    else:
        inserted, index = False, 0
        while not inserted and index < len(contacts_list):
            if number == contacts_list[index]:
                print("Contact already exists:", number, "\n")
                inserted = True
            elif number < contacts_list[index]:
                contacts_list.insert(index, number)
                print("Contact added:", number, "\n")
                inserted = True
            index += 1
        if not inserted:
            contacts_list.append(number)
            print("Contact added:", number, "\n")


# Removes a contact from the list, if that contact exists.
# A simpler way to do this would be to just use "remove()" but I want you to learn
# how to search through a list. ^_^
def remove_contact(number):
    if len(contacts_list) == 0:
        print("You have no contacts.\n")
    elif not check_number(number):
            print("Invalid number:", number, "\n")
    else:
        found, index = False, 0
        while not found and index < len(contacts_list):
            if contacts_list[index] == number:
                contacts_list.pop(index)
                found = True
                print("Contact removed:", number, "\n")
            index += 1
        if not found:
            print("Contact not found:",  number, "\n")

def print_contacts():
    if len(contacts_list) == 0:
        print("You have no contacts.", "\n")
    else:
        print("Your contacts:")
        for contact in contacts_list:
            print(" ", contact)
        print("")

# tests your program with valid entries
def tester(num_tests):
    for i in range(0, num_tests):
        add_contact(randint(1000000000, 9999999999))
    print_contacts()


'''
This runs your program by executing a loop that prompts the user for input.
When the program begins, the following is printed:

Welcome to the Phone Contacts App!
Please choose a number.
1: Add contact
2: Remove contact
3: View all contacts
4: Quit
>

The user enters a number representing what they wish to do. If they enter an invalid choice, you should ask them
(politely) to please enter a valid choice.
Then, you simply call the functions you wrote above and go right back to the "Please enter a number" menu.
The program ends when the user enters 4, at which you should print a goodbye message.
'''
def run():
    running = True
    print("Welcome to the Phone Contacts App!")
    while running:
        print("Please choose a number.\n"
              "1: Add contact\n"
              "2: Remove contact\n"
              "3: View all contacts\n"
              "4: Quit")
        choice = input("> ")
        if choice == "1":
            print("Please enter a 10-digit phone number (no special characters or country codes):")
            number = int(input("> "))
            add_contact(number)
        elif choice == "2":
            if len(contacts_list) == 0:
                print("You have no contacts.\n")
            else:
                print("Please enter a 10-digit phone number (no special characters or country codes):")
                number = int(input("> "))
                remove_contact(number)
        elif choice == "3":
            print_contacts()
        elif choice == "4":
            print("Goodbye!")
            running = False
        else:
            print("Invalid choice.\n")


# Run your program!
run()
