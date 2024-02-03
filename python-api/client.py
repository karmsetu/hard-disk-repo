import requests

base_url = "http://127.0.0.1:5000/" 

# response = requests.get(base_url+"helloworld/tim/19")
# print(response.json())

# response = requests.put(base_url+"video/1", {"name":"vidBoi","views":20, "likes": 10})
response = requests.get(base_url+"video/2", {"name":"vidBoi","views":20, "likes": 10})
print(response.json())