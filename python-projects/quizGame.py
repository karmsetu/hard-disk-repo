print("welcome to quiz!")

playing = input("Do you want to play?: ")
# name: tim
if playing != 'yes':
    quit()
    
score = 0
def generateQ(Q, Ans):
    global score
    answer = input(Q)
    if answer.lower() == Ans:
        score += 1
        print("correct!")
    else:
        print("incorrect")
print("let's play :)")

generateQ("what does CPU stands for? ", "central processing unit")
generateQ("what does GPU stands for? ", "graphics processing unit")
generateQ("what does PSU stands for? ", "power supply unit")
# answer = input("what does CPU stands for? ")
# if answer == "central processing unit":
#     print("correct")
# else: 
#     print("incorrect")

print("you got"+ str(score) + "questions correct")
print("you got"+ str((score/3)*100)+"%")