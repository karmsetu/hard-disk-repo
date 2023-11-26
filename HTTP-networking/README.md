# I.P
## I.Pv4
xxx.xxx.xxx.xxx
where xxx can be any no. b/w 0-256

## I.Pv6
xxx:xxx:xxx:xxx:xxx:xxx:xxx:xxx
where xxx can be any no. b/w 0-256


# URL
[url](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL)

# Subdomain
`api.boot.dev`
where `api` is a subdomain

# URI (Uniform Resource Identifier)

## promises 
[promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

# HTTP Headers
[headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers)

## XML
[xml](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<root>
    <id>1</id>
    <name>boi</name>
    <age>1</age>
</root>
```

# HTTP Methods

## Common METHOD Requests
### GET
```js
const getUser = await fetch(url, {
    method: 'GET',
    mode: 'CORS',
    headers: {
        'X-API-KEY': 'apiKEY'
    },
}) 
```
### POST
```js
const getUser = await fetch(url, {
    method: 'POST',
    mode: 'CORS',
    headers: {
        'Content-Type': 'application/json'
        'X-API-KEY': 'apiKEY'
    },
    body: JSON.stringify(DATA)
}) 
```
### PUT
```js
const getUser = await fetch(url, {
    method: 'PUT',
    mode: 'CORS',
    headers: {
        'Content-Type': 'application/json'
        'X-API-KEY': 'apiKEY'
    },
    body: JSON.stringify(DATA)
}) 
```
- idempotent
### DELETE
```js
const getUser = await fetch(url, {
    method: 'DELETE',
    mode: 'CORS'
}) 
```
## CRUD
- It is a convention
1. Create - POST
2. Read - GET
3. Update - PUT/PATCH
4. Delete - DELETE

## Status Codes
[status code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses)
1. Informational responses (100 – 199)
2. Successful responses (200 – 299)
3. Redirection messages (300 – 399)
4. Client error responses (400 – 499)
5. Server error responses (500 – 599)