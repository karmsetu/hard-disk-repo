```
cd D:\hard-disk-repos\node-practice\express\superTest-module
npm i express 
npm i --save-dev nodemon supertest
npm install supertest --save-dev
```
- Use the supertest module to test Express routes/controllers.
- Describe how SuperTest handles our express application.
- Explain the functionality superagent provides to SuperTest.
- Describe what the done parameter is used for.
- Explain and have a firm understanding of .expect() method’s functionality.
- Have familiarity with supertest’s documentation and methods.

## error01
```bash
ReferenceError: test is not defined
    at Object.<anonymous> (D:\hard-disk-repos\node-practice\express\superTest-module\testApp.js:10:1)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
```
    :review git commit `fix01-supertest.js`
## fix01
the odin [ref](https://www.theodinproject.com/lessons/nodejs-testing-routes-and-controllers) is not reliable/updated, check out the npm-supertest [ref](https://www.npmjs.com/package/supertest)
## fix01.2
[node ref](https://nodejs.org/api/test.html)
tests need to be run blockqouted (•_•)
```
node --test testApp.js
```