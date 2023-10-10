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