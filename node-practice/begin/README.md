# node practice

## Package.json [link](https://github.com/nodejs/nodejs.dev/blob/aa4239e87a5adc992fdb709c20aebb5f6da77f86/content/learn/node-js-package-manager/package-json.en.md)
If you work with JavaScript, or you've ever interacted with a JavaScript project, Node.js or a frontend project, you surely met the `package.json` file.

What's that for? What should you know about it, and what are some of the cool things you can do with it?

The `package.json` file is kind of a manifest for your project. It can do a lot of things, completely unrelated. It's a central repository of configuration for tools, for example. It's also where `npm` and `yarn` store the names and versions for all the installed packages.

## The file structure

Here's an example package.json file:

```json
{}
```

It's empty! There are no fixed requirements of what should be in a `package.json` file, for an application. The only requirement is that it respects the JSON format, otherwise it cannot be read by programs that try to access its properties programmatically.

If you're building a Node.js package that you want to distribute over `npm` things change radically, and you must have a set of properties that will help other people use it. We'll see more about this later on.

This is another package.json:

```json
{
  "name": "test-project"
}
```

It defines a `name` property, which tells the name of the app, or package, that's contained in the same folder where this file lives.

Here's a much more complex example, which was extracted from a sample Vue.js application:

```json
{
  "name": "test-project",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "main": "src/main.js",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "unit": "jest --config test/unit/jest.conf.js --coverage",
    "test": "npm run unit",
    "lint": "eslint --ext .js,.vue src test/unit",
    "build": "node build/build.js"
  },
  "dependencies": {
    "vue": "^2.5.2"
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    "babel-core": "^6.22.1",
    "babel-eslint": "^8.2.1",
    "babel-helper-vue-jsx-merge-props": "^2.0.3",
    "babel-jest": "^21.0.2",
    "babel-loader": "^7.1.1",
    "babel-plugin-dynamic-import-node": "^1.2.0",
    "babel-plugin-syntax-jsx": "^6.18.0",
    "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-plugin-transform-vue-jsx": "^3.5.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "chalk": "^2.0.1",
    "copy-webpack-plugin": "^4.0.1",
    "css-loader": "^0.28.0",
    "eslint": "^4.15.0",
    "eslint-config-airbnb-base": "^11.3.0",
    "eslint-friendly-formatter": "^3.0.0",
    "eslint-import-resolver-webpack": "^0.8.3",
    "eslint-loader": "^1.7.1",
    "eslint-plugin-import": "^2.7.0",
    "eslint-plugin-vue": "^4.0.0",
    "extract-text-webpack-plugin": "^3.0.0",
    "file-loader": "^1.1.4",
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.0.4",
    "jest-serializer-vue": "^0.3.0",
    "node-notifier": "^5.1.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    "portfinder": "^1.0.13",
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "postcss-url": "^7.2.1",
    "rimraf": "^2.6.0",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    "uglifyjs-webpack-plugin": "^1.1.1",
    "url-loader": "^0.5.8",
    "vue-jest": "^1.0.2",
    "vue-loader": "^13.3.0",
    "vue-style-loader": "^3.0.1",
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    "webpack-merge": "^4.1.0"
  },
  "engines": {
    "node": ">= 6.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": ["> 1%", "last 2 versions", "not ie <= 8"]
}
```

there are _lots_ of things going on here:

* `version` indicates the current version
* `name` sets the application/package name
* `description` is a brief description of the app/package
* `main` sets the entry point for the application
* `private` if set to `true` prevents the app/package to be accidentally published on `npm`
* `scripts` defines a set of node scripts you can run
* `dependencies` sets a list of `npm` packages installed as dependencies
* `devDependencies` sets a list of `npm` packages installed as development dependencies
* `engines` sets which versions of Node.js this package/app works on
* `browserslist` is used to tell which browsers (and their versions) you want to support

All those properties are used by either `npm` or other tools that we can use.

## Properties breakdown

This section describes the properties you can use in detail. We refer to "package" but the same thing applies to local applications which you do not use as packages.

Most of those properties are only used on [https://www.npmjs.com/](https://www.npmjs.com/), others by scripts that interact with your code, like `npm` or others.

### name

Sets the package name.

Example:

```json
"name": "test-project"
```

The name must be less than 214 characters, must not have spaces, it can only contain lowercase letters, hyphens (`-`) or underscores (`_`).

This is because when a package is published on `npm`, it gets its own URL based on this property.

If you published this package publicly on GitHub, a good value for this property is the GitHub repository name.

### author

Lists the package author name

Example:

```json
{
  "author": "Joe <joe@whatever.com> (https://whatever.com)"
}
```

Can also be used with this format:

```json
{
  "author": {
    "name": "Joe",
    "email": "joe@whatever.com",
    "url": "https://whatever.com"
  }
}
```

### contributors

As well as the author, the project can have one or more contributors. This property is an array that lists them.

Example:

```json
{
  "contributors": ["Joe <joe@whatever.com> (https://whatever.com)"]
}
```

Can also be used with this format:

```json
{
  "contributors": [
    {
      "name": "Joe",
      "email": "joe@whatever.com",
      "url": "https://whatever.com"
    }
  ]
}
```

### bugs

Links to the package issue tracker, most likely a GitHub issues page

Example:

```json
{
  "bugs": "https://github.com/whatever/package/issues"
}
```

### homepage

Sets the package homepage

Example:

```json
{
  "homepage": "https://whatever.com/package"
}
```

### version

Indicates the current version of the package.

Example:

```json
"version": "1.0.0"
```

This property follows the semantic versioning (semver) notation for versions, which means the version is always expressed with 3 numbers: `x.x.x`.

The first number is the major version, the second the minor version and the third is the patch version.

There is a meaning in these numbers: a release that only fixes bugs is a patch release, a release that introduces backward-compatible changes is a minor release, a major release can have breaking changes.

### license

Indicates the license of the package.

Example:

```json
"license": "MIT"
```

### keywords

This property contains an array of keywords that associate with what your package does.

Example:

```json
"keywords": [
  "email",
  "machine learning",
  "ai"
]
```

This helps people find your package when navigating similar packages, or when browsing the [https://www.npmjs.com/](https://www.npmjs.com/) website.

### description

This property contains a brief description of the package

Example:

```json
"description": "A package to work with strings"
```

This is especially useful if you decide to publish your package to `npm` so that people can find out what the package is about.

### repository

This property specifies where this package repository is located.

Example:

```json
"repository": "github:whatever/testing",
```

Notice the `github` prefix. There are other popular services baked in:

```json
"repository": "gitlab:whatever/testing",
```

```json
"repository": "bitbucket:whatever/testing",
```

You can explicitly set the version control system:

```json
"repository": {
  "type": "git",
  "url": "https://github.com/whatever/testing.git"
}
```

You can use different version control systems:

```json
"repository": {
  "type": "svn",
  "url": "..."
}
```

### main

Sets the entry point for the package.

When you import this package in an application, that's where the application will search for the module exports.

Example:

```json
"main": "src/main.js"
```

### private

if set to `true` prevents the app/package to be accidentally published on `npm`

Example:

```json
"private": true
```

### scripts

Defines a set of node scripts you can run

Example:

```json
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
```

These scripts are command line applications. You can run them by calling `npm run XXXX` or `yarn XXXX`, where `XXXX` is the command name. Example: `npm run dev`.

You can use any name you want for a command, and scripts can do literally anything you want.

### dependencies

Sets a list of `npm` packages installed as dependencies.

When you install a package using npm or yarn:

```bash
npm install <PACKAGENAME>
yarn add <PACKAGENAME>
```

that package is automatically inserted in this list.

Example:

```json
"dependencies": {
  "vue": "^2.5.2"
}
```

### devDependencies

Sets a list of `npm` packages installed as development dependencies.

They differ from `dependencies` because they are meant to be installed only on a development machine, not needed to run the code in production.

When you install a package using npm or yarn:

```bash
npm install --save-dev <PACKAGENAME>
yarn add --dev <PACKAGENAME>
```

that package is automatically inserted in this list.

Example:

```json
"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}
```

### engines

Sets which versions of Node.js and other commands this package/app work on

Example:

```json
"engines": {
  "node": ">= 6.0.0",
  "npm": ">= 3.0.0",
  "yarn": "^0.13.0"
}
```

### browserslist

Is used to tell which browsers (and their versions) you want to support. It's referenced by Babel, Autoprefixer, and other tools, to only add the polyfills and fallbacks needed to the browsers you target.

Example:

```json
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not ie <= 8"
]
```

This configuration means you want to support the last 2 major versions of all browsers with at least 1% of usage (from the [CanIUse.com](https://caniuse.com) stats), except IE8 and lower.

([see more](https://www.npmjs.com/package/browserslist))

### Command-specific properties

The `package.json` file can also host command-specific configuration, for example for Babel, ESLint, and more.

Each has a specific property, like `eslintConfig`, `babel` and others. Those are command-specific, and you can find how to use those in the respective command/project documentation.

## Package versions

You have seen in the description above version numbers like these: `~3.0.0` or `^0.13.0`. What do they mean, and which other version specifiers can you use?

That symbol specifies which updates your package accepts, from that dependency.

Given that using semver (semantic versioning) all versions have 3 digits, the first being the major release, the second the minor release and the third is the patch release, you have these "[Rules](/learn/semantic-versioning-using-npm/)".

You can combine most of the versions in ranges, like this: `1.0.0 || >=1.1.0 <1.2.0`, to either use 1.0.0 or one release from 1.1.0 up, but lower than 1.2.0.



## Start
```js
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

## What is recommended to learn before diving deep with Node.js?
- Lexical Structure
- Expressions
- Data Types
- Classes
- Variables
- Functions
- this operator
- Arrow Functions
- Loops
- Scopes
- Arrays
- Template Literals
- Strict Mode
- ECMAScript 2015 (ES6) and beyond
- Asynchronous programming and callbacks
- Timers
- Promises
- Async and Await
- Closures
- The Event Loop

## Differences between Node.js and the Browser
> In practice, this means that you can use both require() and import in Node.js, while you are limited to import in the browser.

## NPM Packages
> Furthermore, since npm 5, this command adds <package-name> to the package.json file dependencies. Before version 5, you needed to add the flag --save.

Often you'll see more flags added to this command:

- --save-dev installs and adds the entry to the package.json file devDependencies
- --no-save installs but does not add the entry to the package.json file dependencies
- --save-optional installs and adds the entry to the package.json file optionalDependencies
- --no-optional will prevent optional dependencies from being installed
Shorthands of the flags can also be used:

- -S: --save
- -D: --save-dev
- -O: --save-optional
The difference between devDependencies and dependencies is that the former contains development tools, like a testing library, while the latter is bundled with the app in production.


## ES6 Norms
> All ECMAScript 2015 (ES6) features are split into three groups for shipping, staged, and in progress features:

1. All shipping features, which V8 considers stable, are turned on by default on Node.js and do NOT require any kind of runtime flag.
2. Staged features, which are almost-completed features that are not considered stable by the V8 team, require a runtime flag: --harmony.
3. In progress features can be activated individually by their respective harmony flag, although this is highly discouraged unless for testing purposes. Note: these flags are exposed by V8 and will potentially change without any deprecation notice.


## ENV Files [env-doc](https://github.com/nodejs/nodejs.dev/blob/aa4239e87a5adc992fdb709c20aebb5f6da77f86/content/learn/command-line/node-environment-variables.en.md)
The `process` core module of Node.js provides the `env` property which hosts all the environment variables that were set at the moment the process was started.

The below code runs `app.js` and set `USER_ID` and `USER_KEY`.

```bash
USER_ID=239482 USER_KEY=foobar node app.js
```

That will pass the user `USER_ID` as **239482** and the `USER_KEY` as **foobar**. This is suitable for testing, however for production, you will probably be configuring some bash scripts to export variables.

> Note: `process` does not require a "require", it's automatically available.

Here is an example that accesses the `USER_ID` and `USER_KEY` environment variables, which we set in above code.

```js
process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
```

In the same way you can access any custom environment variable you set.

If you have multiple environment variables in your node project, you can also create an `.env` file in the root directory of your project, and then use the [dotenv](https://www.npmjs.com/package/dotenv) package to load them during runtime.

```bash
# .env file
USER_ID="239482"
USER_KEY="foobar"
NODE_ENV="development"
```

In your js file

```js
require('dotenv').config();

process.env.USER_ID; // "239482"
process.env.USER_KEY; // "foobar"
process.env.NODE_ENV; // "development"
```

> You can also run your js file with `node -r dotenv/config index.js` command if you don't want to import the package in your code.

## Perform a GET Request

There are many ways to perform an HTTP GET request in Node.js, depending on the abstraction level you want to use.

The simplest way to perform an HTTP request using Node.js is to use the [Axios library](https://github.com/axios/axios):

```js
const axios = require('axios');

axios
  .get('https://example.com/todos')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
```

However, Axios requires the use of a 3rd party library.

A GET request is possible just using the Node.js standard modules, although it's more verbose than the option above:

```js
const https = require('https');

const options = {
  hostname: 'example.com',
  port: 443,
  path: '/todos',
  method: 'GET',
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();
```

## Perform a POST Request

Similar to making an HTTP GET request, you can use the [Axios library](https://github.com/axios/axios) to perform a POST request:

```js
const axios = require('axios');

axios
  .post('https://whatever.com/todos', {
    todo: 'Buy the milk',
  })
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
  });
```

Or alternatively, use Node.js standard modules:

```js
const https = require('https');

const data = JSON.stringify({
  todo: 'Buy the milk',
});

const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
```

## PUT and DELETE

PUT and DELETE requests use the same POST request format - you just need to change the `options.method` value to the appropriate method.


## FS Module
The `fs` module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:

```js
const fs = require('fs');
```

Once you do so, you have access to all its methods, which include:

* `fs.access()`: check if the file exists and Node.js can access it with its permissions
* `fs.appendFile()`: append data to a file. If the file does not exist, it's created
* `fs.chmod()`: change the permissions of a file specified by the filename passed. Related: `fs.lchmod()`, `fs.fchmod()`
* `fs.chown()`: change the owner and group of a file specified by the filename passed. Related: `fs.fchown()`, `fs.lchown()`
* `fs.close()`: close a file descriptor
* `fs.copyFile()`: copies a file
* `fs.createReadStream()`: create a readable file stream
* `fs.createWriteStream()`: create a writable file stream
* `fs.link()`: create a new hard link to a file
* `fs.mkdir()`: create a new folder
* `fs.mkdtemp()`: create a temporary directory
* `fs.open()`: opens the file and returns a file descriptor to allow file manipulation
* `fs.readdir()`: read the contents of a directory
* `fs.readFile()`: read the content of a file. Related: `fs.read()`
* `fs.readlink()`: read the value of a symbolic link
* `fs.realpath()`: resolve relative file path pointers (`.`, `..`) to the full path
* `fs.rename()`: rename a file or folder
* `fs.rmdir()`: remove a folder
* `fs.stat()`: returns the status of the file identified by the filename passed. Related: `fs.fstat()`, `fs.lstat()`
* `fs.symlink()`: create a new symbolic link to a file
* `fs.truncate()`: truncate to the specified length the file identified by the filename passed. Related: `fs.ftruncate()`
* `fs.unlink()`: remove a file or a symbolic link
* `fs.unwatchFile()`: stop watching for changes on a file
* `fs.utimes()`: change the timestamp of the file identified by the filename passed. Related: `fs.futimes()`
* `fs.watchFile()`: start watching for changes on a file. Related: `fs.watch()`
* `fs.writeFile()`: write data to a file. Related: `fs.write()`

One peculiar thing about the `fs` module is that all the methods are asynchronous by default, but they can also work synchronously by appending `Sync`.

For example:

* `fs.rename()`
* `fs.renameSync()`
* `fs.write()`
* `fs.writeSync()`

This makes a huge difference in your application flow.

> Node.js 10 includes [experimental support](https://nodejs.org/api/fs.html#fs_fs_promises_api) for a promise based API

For example let's examine the `fs.rename()` method. The asynchronous API is used with a callback:

```js
const fs = require('fs');

fs.rename('before.json', 'after.json', err => {
  if (err) {
    return console.error(err);
  }

  // done
});
```

A synchronous API can be used like this, with a try/catch block to handle errors:

```js
const fs = require('fs');

try {
  fs.renameSync('before.json', 'after.json');
  // done
} catch (err) {
  console.error(err);
}
```

The key difference here is that the execution of your script will block in the second example, until the file operation succeeded.

You can use promise-based API provided by `fs/promises` module to avoid using callback-based API, which may cause [callback hell](http://callbackhell.com/). Here is an example:

```js
// Example: Read a file and change its content and read
// it again using callback-based API.
const fs = require('fs');

const fileName = '/Users/joe/test.txt';
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  const content = 'Some content!';
  fs.writeFile(fileName, content, err2 => {
    if (err2) {
      console.log(err2);
      return;
    }
    console.log('Wrote some content!');
    fs.readFile(fileName, 'utf8', (err3, data3) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log(data3);
    });
  });
});
```

The callback-based API may rise a callback hell when there are too many nested callbacks. We can simply use promise-based API to avoid it:

```js
// Example: Read a file and change its content and read
// it again using promise-based API.
const fs = require('fs/promises');

async function example() {
  const fileName = '/Users/joe/test.txt';
  try {
    const data = await fs.readFile(fileName, 'utf8');
    console.log(data);
    const content = 'Some content!';
    await fs.writeFile(fileName, content);
    console.log('Wrote some content!');
    const newData = await fs.readFile(fileName, 'utf8');
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}
example();
```


## fs-reading Files
The simplest way to read a file in Node.js is to use the `fs.readFile()` method, passing it the file path, encoding and a callback function that will be called with the file data (and the error):

```js
const fs = require('fs');

fs.readFile('/Users/joe/test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

Alternatively, you can use the synchronous version `fs.readFileSync()`:

```js
const fs = require('fs');

try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

You can also use the promise-based `fsPromises.readFile()` method offered by the `fs/promises` module:

```js
const fs = require('fs/promises');

async function example() {
  try {
    const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();
```

All three of `fs.readFile()`, `fs.readFileSync()` and `fsPromises.readFile()` read the full content of the file in memory before returning the data.

This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.

In this case, a better option is to read the file content using streams.

```js
const { error } = require('console')
const fs = require('fs')

fs.readFile('./Users/test.txt', (err, data)=> {
    if(err) error
    console.log(data)
})
```
it spits the output `<Buffer 73 6f 6d 65 20 43 6f 6e 74 65 6e 74>` as `utf-8` property is not used here



## difference between Global & Local packages
The main difference between local and global packages is this:

* **local packages** are installed in the directory where you run `npm install <package-name>`, and they are put in the `node_modules` folder under this directory
* **global packages** are all put in a single place in your system (exactly where depends on your setup), regardless of where you run `npm install -g <package-name>`

In your code you can only require local packages:

```js
require('package-name');
```

so when should you install in one way or another?

In general, **all packages should be installed locally**.

This makes sure you can have dozens of applications in your computer, all running a different version of each package if needed.

Updating a global package would make all your projects use the new release, and as you can imagine this might cause nightmares in terms of maintenance, as some packages might break compatibility with further dependencies, and so on.

All projects have their own local version of a package, even if this might appear like a waste of resources, it's minimal compared to the possible negative consequences.

A package **should be installed globally** when it provides an executable command that you run from the shell (CLI), and it's reused across projects.

You can also install executable commands locally and run them using npx, but some packages are just better installed globally.

Great examples of popular global packages which you might know are

* `npm`
* `vue-cli`
* `grunt-cli`
* `mocha`
* `react-native-cli`
* `gatsby-cli`
* `forever`
* `nodemon`

You probably have some packages installed globally already on your system. You can see them by running

```bash
npm list -g --depth 0
```

on your command line.


## EVent Emitter
If you worked with JavaScript in the browser, you know how much of the interaction of the user is handled through events: mouse clicks, keyboard button presses, reacting to mouse movements, and so on.

On the backend side, Node.js offers us the option to build a similar system using the [`events` module](https://nodejs.org/api/events.html).

This module, in particular, offers the `EventEmitter` class, which we'll use to handle our events.

You initialize that using

```js
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
```

This object exposes, among many others, the `on` and `emit` methods.

* `emit` is used to trigger an event
* `on` is used to add a callback function that's going to be executed when the event is triggered

For example, let's create a `start` event, and as a matter of providing a sample, we react to that by just logging to the console:

```js
eventEmitter.on('start', () => {
  console.log('started');
});
```

When we run

```js
eventEmitter.emit('start');
```

the event handler function is triggered, and we get the console log.

You can pass arguments to the event handler by passing them as additional arguments to `emit()`:

```js
eventEmitter.on('start', number => {
  console.log(`started ${number}`);
});

eventEmitter.emit('start', 23);
```

Multiple arguments:

```js
eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);
```

The EventEmitter object also exposes several other methods to interact with events, like

* `once()`: add a one-time listener
* `removeListener()` / `off()`: remove an event listener from an event
* `removeAllListeners()`: remove all listeners for an event

You can read all their details on the events module page at [https://nodejs.org/api/events.html](https://nodejs.org/api/events.html)

The `events` module provides us the EventEmitter class, which is key to working with events in Node.js.

```js
const EventEmitter = require('events');

const door = new EventEmitter();
```

The event listener has these in-built events:

* `newListener` when a listener is added
* `removeListener` when a listener is removed

Here's a detailed description of the most useful methods:

## `emitter.addListener()`

Alias for `emitter.on()`.

## `emitter.emit()`

Emits an event. It synchronously calls every event listener in the order they were registered.

```js
door.emit('slam'); // emitting the event "slam"
```

## `emitter.eventNames()`

Return an array of strings that represent the events registered on the current `EventEmitter` object:

```js
door.eventNames();
```

## `emitter.getMaxListeners()`

Get the maximum amount of listeners one can add to an `EventEmitter` object, which defaults to 10 but can be increased or lowered by using `setMaxListeners()`

```js
door.getMaxListeners();
```

## `emitter.listenerCount()`

Get the count of listeners of the event passed as parameter:

```js
door.listenerCount('open');
```

## `emitter.listeners()`

Gets an array of listeners of the event passed as parameter:

```js
door.listeners('open');
```

## `emitter.off()`

Alias for `emitter.removeListener()` added in Node.js 10

## `emitter.on()`

Adds a callback function that's called when an event is emitted.

Usage:

```js
door.on('open', () => {
  console.log('Door was opened');
});
```

## `emitter.once()`

Adds a callback function that's called when an event is emitted for the first time after registering this. This callback is only going to be called once, never again.

```js
const EventEmitter = require('events');

const ee = new EventEmitter();

ee.once('my-event', () => {
  // call callback function once
});
```

## `emitter.prependListener()`

When you add a listener using `on` or `addListener`, it's added last in the queue of listeners, and called last. Using `prependListener` it's added, and called, before other listeners.

## `emitter.prependOnceListener()`

When you add a listener using `once`, it's added last in the queue of listeners, and called last. Using `prependOnceListener` it's added, and called, before other listeners.

## `emitter.removeAllListeners()`

Removes all listeners of an `EventEmitter` object listening to a specific event:

```js
door.removeAllListeners('open');
```

## `emitter.removeListener()`

Remove a specific listener. You can do this by saving the callback function to a variable, when added, so you can reference it later:

```js
const doSomething = () => {};
door.on('open', doSomething);
door.removeListener('open', doSomething);
```

## `emitter.setMaxListeners()`

Sets the maximum amount of listeners one can add to an `EventEmitter` object, which defaults to 10 but can be increased or lowered.

```js
door.setMaxListeners(50);
```