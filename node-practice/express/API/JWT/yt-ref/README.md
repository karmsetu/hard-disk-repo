```bash
cd D:\hard-disk-repos\node-practice\express\API\JWT\yt-ref
npm i express jsonwebtoken dotenv
npm i --save-dev nodemon
```
## you can create `ACCESS_KEY` by using the following code:
```bash
node
require('crypto').randombytes(64).toString('hex')
```

## error01 (`undefined` token)
```js
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
```
or alternatively
```js
Object.entries(theObj)
```
[fix01-ref](https://stackoverflow.com/questions/10334267/javascript-get-object-key-name)
