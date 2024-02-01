from cryptography.fernet import Fernet
master_pwd = input("what is the master password?: ")

# def write_key():
#     key = fernet.generate_key()
#     with open("key.key", "wb") as key_file:
#         key_file.write(key)

def load_key():
    file = open("key.key", "rb") 
    key = file.read()
    file.close()
    return key

key = load_key() + master_pwd.encode()
fer = Fernet(key)

def view():
    with open('pwd.txt', 'r') as f: #r=read, w=write, a=add
        for line in f.readlines():
            data = line.rstrip()
            user, pwd = data.split("|")
            print(user,":",fer.decrypt(pwd.encode()).decode() )
    pass

def add():
    name = input("Account name: ")
    pwd = input("password: ")
    with open('pwd.txt', 'a') as f: #r=read, w=write, a=add
        f.write(name + "|" + fer.encrypt(pwd.encode()).decode() + "\n")
    pass
while True:
    mode = input("would you like to add a new password or view ones (view/add)")
    if mode.lower() == 'q':
        quit()
    if mode.lower() == "view":
        view()
        pass
    elif mode.lower() == "add":
        add()
        pass
    else:
        pass