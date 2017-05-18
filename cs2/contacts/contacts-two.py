# Phone Contacts App v2.0
# By: Lucy Hobson and Linus Hobson
# SMASH CS2 20XX

from random import randint

contacts = []


def check_number(number):
    digits = 0
    while number > 0:
        number //= 10
        digits += 1
    return digits == 10 and number > -1


def add_contact(firstname, lastname, number):
    if not firstname.isalpha():
        print("Invalid first name:", firstname)
    elif not lastname.isalpha():
        print("Invalid last name:", lastname)
    elif not check_number(number):
        print("Invalid number:", number, "\n")
    elif len(contacts) == 0:
        contacts.append((firstname, lastname, number))
        print("Contact added:", firstname, lastname, number, "\n")
    else:
        inserted, index = False, 0
        while not inserted and index < len(contacts):
            if firstname.lower() == contacts[index][0].lower() and lastname.lower() == contacts[index][1].lower():
                print("Contact already exists:", firstname, lastname, "\n")
                inserted = True
            elif firstname.lower() < contacts[index][0].lower():
                contacts.insert(index, (firstname, lastname, number))
                print("Contact added:", firstname, lastname, number, "\n")
                inserted = True
            index += 1
        if not inserted:
            contacts.append((firstname, lastname, number))
            print("Contact added:", firstname, lastname, number, "\n")


def remove_contact_name(firstname, lastname):
    if not firstname.isalpha():
        print("Invalid first name:", firstname)
    elif not lastname.isalpha():
        print("Invalid last name:", lastname)
    elif len(contacts) == 0:
        print("You have no contacts.\n")
    else:
        found, index = False, 0
        while not found and index < len(contacts):
            if firstname.lower() == contacts[index][0].lower() and lastname.lower() == contacts[index][1].lower():
                contacts.pop(index)
                found = True
                print("Contact removed:", firstname, lastname, "\n")
            index += 1
        if not found:
            print("Contact not found:",  firstname, lastname, "\n")


def print_contacts():
    if len(contacts) == 0:
        print("You have no contacts.", "\n")
    else:
        print("Your contacts:")
        for contact in contacts:
            print(" ", contact[0], contact[1], contact[2])
        print("")


def test_add_contact(num_tests):
    for i in range(0, num_tests):
        add_contact(randint(1000000000, 9999999999))
    print_contacts()


def run():
    running = True
    print("Phone Contacts (v2.0)")
    while running:
        print("Please choose a number.\n"
              "1: Add contact\n"
              "2: Remove contact\n"
              "3: View all contacts\n"
              "4: Quit")
        choice = input("> ")
        if choice == "1":
            print("Please enter a first name:")
            firstname = input("> ")
            print("Please enter a last name:")
            lastname = input("> ")
            print("Please enter a 10-digit phone number (no special characters or country codes):")
            number = int(input("> "))
            add_contact(firstname, lastname, number)
        elif choice == "2":
            if len(contacts) == 0:
                print("You have no contacts.\n")
            else:
                print("Please enter a first name:")
                firstname = input("> ")
                print("Please enter a last name:")
                lastname = input("> ")
                remove_contact_name(firstname, lastname)
        elif choice == "3":
            print_contacts()
        elif choice == "4":
            print("Goodbye!")
            running = False
        else:
            print("Invalid choice.\n")


run()
