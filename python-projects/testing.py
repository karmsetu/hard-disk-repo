# score = 0  # Initialize the score before using it in the function

# def generateQ(Q, Ans):
#     global score  # Use the global keyword to access the global variable
#     answer = input(Q)
#     if answer.lower() == Ans.lower():
#         score += 1
#         print("Correct!")
#     else:
#         print("Incorrect")

# # Example usage:
# question = "What is the capital of France?"
# correct_answer = "Paris"

# generateQ(question, correct_answer)

# # Print the score after the function call
# print("Your score:", score)


from cryptography.fernet import Fernet
def write_key():
    key = Fernet.generate_key()
    with open("key.key", "wb") as key_file:
        key_file.write(key)

write_key()