import random

start = 1
end = 11
top_of_range = input("type a number")
if top_of_range.isdigit():
    top_of_range = int(top_of_range)
    if top_of_range <= 0:
        print("please type a number more than 0")
        quit()
else:
    print("type a number")
random_number = random.randint(0, top_of_range)
guesses = 0
while True:
    guesses += 1
    user_input = input("make a guess: ")
    if user_input.isdigit():
        user_input = int(user_input)
    else:
        print("please type a number")
        continue
    if user_input == random_number:
        print("You got it right!, in "+str(guesses)+ " guesses")
        break
    else:
        if user_input > random_number:
            print("warm")
        if user_input < random_number:
            print("cold")
        print("You got it wrong!")
# print(random.randrange(start, end))