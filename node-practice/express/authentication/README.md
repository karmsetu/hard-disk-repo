```bash
npm install express express-session mongoose passport passport-local ejs
npm install bcryptjs
```

PassportJS uses what they call Strategies to authenticate users. They have over 500 of these strategies, but we’re going to focus on the most basic (and most common), the username-and-password, or what they call the LocalStrategy


```js
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      };
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password" });
      };
      return done(null, user);
    } catch(err) {
      return done(err);
    };
  })
);
```
This function is what will be called when we use the passport.authenticate() function later. Basically, it takes a username and password, tries to find the user in our DB, and then makes sure that the user’s password matches the given password. If all of that works out (there’s a user in the DB, and the passwords match) then it authenticates our user and moves on! We will not be calling this function directly, so you won’t have to supply the done function. This function acts a bit like a middleware and will be called for us when we ask passport to do the authentication later.


[ref](https://www.theodinproject.com/lessons/nodejs-authentication-basics)
[videoResource](https://www.youtube.com/playlist?list=PLYQSCk-qyTW2ewJ05f_GKHtTIzjynDgjK)

Storing hashed passwords:
Password hashes are the result of passing the user’s password through a one-way hash function, which maps variable sized inputs to fixed size pseudo-random outputs.

Edit your `app.post("/sign-up")` to use the bcrypt.hash function which works like this:
```js
bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
  // if err, do something
  // otherwise, store hashedPassword in DB
});
```

The second argument is the length of the “salt” to use in the hashing function; salting a password means adding extra random characters to it, the password plus the extra random characters are then fed into the hashing function. Salting is used to make a password hash output unique, even for users who use the same password, and to protect against rainbow table and dictionary attacks.

Usually, the salt gets stored in the database in the clear next to the hashed value, but in our case, there is no need to do so because the hashing algorithm that bcryptjs uses includes the salt automatically with the hash.

The hash function is somewhat slow, so all of the DB storage stuff needs to go inside the callback. Check to see if you’ve got this working by signing up a new user with a simple password, then go look at your DB entries to see how it’s being stored. If you’ve done it right, your password should have been transformed into a really long random string.

It’s important to note that how hashing works is beyond the scope of this lesson. To learn more about the subject consider reading This wikipedia article.

Comparing hashed passwords:
We will use the bcrypt.compare() function to validate the password input. The function compares the plain-text password in the request object to the hashed password.

Inside your LocalStrategy function we need to replace the user.password !== password expression with the bcrypt.compare() function.
```js
const match = await bcrypt.compare(password, user.password);
if (!match) {
  // passwords do not match!
  return done(null, false, { message: "Incorrect password" })
}
```