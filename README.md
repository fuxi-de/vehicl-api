# simple-api
Basic CRUD backend using node js and mongodb

Install all dependecies via:
```
npm i
```

Install mongodb
https://docs.mongodb.com/manual/installation/

Create New Database with user authentication

```
mongo
use simple-api-dev
db.createUser({
 user: "admin",
 pwd: "password",
 roles: [{ role: "userAdmin", db: "simple-api-dev"}]
})
```

Run in development mode
```
npm run dev
```
