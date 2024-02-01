"""
multiplayer game
1-6 die
if you get anything more than 1; you add that to your score of the game
if you get 1; your score is 0
n-times
when you wanna stop- you can decide
whoever scores the max score in shortest time, wins!
"""

import random

def roll():
    return random.randint(1,6) #give a random number between 1-6

while True:
    players = input("enter the number of players (1-4): ")
    if players.isdigit():
        players = int(players)
        if 2<= players <= 4:
            break
        else:
            print("number between 1-4")
    else:
        print("invalid, try again")

max_score = 50
player_score = [0 for i in range(players)]

while max(player_score) < max_score:
    for player_ind in range(players):
        print("player no.",player_ind+1,"turn has started")
        print("your current score is:", player_score[player_ind])
        current_score = 0
        while True:
            should_roll = input("would ypu like to roll [y]")
            if should_roll.lower() != 'y':
                break
            value = roll()
            if value == 1:
                current_score = 0
                print("you rolled a 1! turn done")
            else:
                print("you rolled a",value)
            print("your score is", current_score)

        player_score[player_ind] += current_score
        print("your total score is:", player_score[player_ind])

max_score = max(player_score)
winning_id = player_score.index(max_score)
print("player no.", winning_id,"won!")