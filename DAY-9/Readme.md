# 🚀 Day 9 – Request Body (`req.body`) & `express.json()`

## 📚 Topics Covered

* Understanding why `POST` requests are used
* What an HTTP Request is
* Client → Server request flow
* Role of Node.js
* Role of Express
* `req` object
* `res` object
* `req.body`
* `express.json()` middleware
* Building POST APIs
* Debugging `req.body` issues

---

## 🧠 What I Learned

### Why use POST?

Instead of sending sensitive data like email and password through the URL, we send it inside the request body.

Example:

```json
{
  "email": "komal@gmail.com",
  "password": "123456"
}
```

---

### Complete Request Flow

```text
Frontend / Postman
        │
Creates HTTP Request
        │
        ▼
Node.js receives request
        │
Creates Request Object
        │
        ▼
Express
        │
Matches Route
Runs Middleware
        │
        ▼
express.json()
        │
Reads Raw JSON
Converts JSON → JavaScript Object
Stores it inside req.body
        │
        ▼
Route Handler
        │
Uses req.body
        │
        ▼
res.send() / res.json()
        │
        ▼
HTTP Response
        │
        ▼
Frontend / Postman
```

---

## 📌 Key Concepts

### `req`

Contains information sent by the client.

Useful properties:

* `req.body`
* `req.params`
* `req.query`
* `req.method`
* `req.url`
* `req.headers`

---

### `res`

Used to send data back to the client.

Examples:

```js
res.send("Hello");
```

```js
res.json({
  message: "Success"
});
```

---

### `express.json()`

```js
app.use(express.json());
```

Purpose:

* Reads raw JSON from the HTTP request
* Converts it into a JavaScript object
* Stores it inside `req.body`

Without this middleware:

```js
req.body
```

is

```js
undefined
```

---

## 🛠 APIs Built Today

### POST `/student`

Request

```json
{
  "name": "Komal"
}
```

Response

```text
Welcome Komal
```

---

### POST `/square`

Request

```json
{
  "number": 8
}
```

Response

```text
64
```

---

### POST `/movie`

Request

```json
{
  "title": "Interstellar"
}
```

Response

```text
Movie Added: Interstellar
```

---

### POST `/sum`

Request

```json
{
  "a": 20,
  "b": 10
}
```

Response

```text
30
```

---

## 🐞 Debugging Lesson

If `express.json()` is missing:

```js
req.body
```

becomes:

```js
undefined
```

Trying to access:

```js
req.body.city
```

results in:

```text
TypeError: Cannot read properties of undefined
```

---

## 💡 Biggest Takeaway

Today I learned that `req.body` is **not automatically available**.

The client sends JSON inside the HTTP request body.

`express.json()` reads that raw JSON, converts it into a JavaScript object, and stores it in `req.body`, allowing my route handler to use the data easily.

---

## 🎯 Skills Gained

* Understanding the HTTP request lifecycle
* Working with POST requests
* Reading data using `req.body`
* Using `express.json()`
* Building simple POST APIs
* Debugging missing middleware errors

---

✅ Day 9 Complete
