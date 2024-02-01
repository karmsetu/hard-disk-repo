import random

player_wins = 0
computer_wins = 0
options = ["rock", "paper", "scissor"]
opt_dict = {
    "rock": "scissor",
    "paper": "rock",
    "scissor": "paper",

}
while True:
    user_input = input("type Rock/ Paper/ Scissor or Q to quit: ").lower()
    if user_input == "Q":
        quit()
    if user_input not in options:
        continue
    random_number = random.randint(0,2)
    print("""_____________________________
            | you chose | Computer chose|""")
    print(user_input,options[int(random_number)])
    if opt_dict[user_input] == options[int(random_number)]:
        print("you won !")
        player_wins += 1
        break
    elif opt_dict[options[int(random_number)]] == user_input:
        print("computer won !")
        computer_wins += 1
        break
    else:
        print("try again!")

