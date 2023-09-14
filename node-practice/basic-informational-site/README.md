# mini-project
```js
var http = require('http')
var fs = require('fs');
var url = require('url');
const { error } = require('console');
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    
  })
  ```
  basic structure

```js
var URL = url.parse(req.url, true)
    console.log(URL)
    var fileName = `.${URL.pathname}`
    fs.readFile(fileName, (err, data)=> {
        if (err) {
            res.writeHead(404, {'content-Type': 'text/html'})
            return res.end(`boi`)
        }
        res.writeHead(200, {'content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
```

copied shamelessly from [link](https://www.youtube.com/watch?v=zJZMWoG-vnc)