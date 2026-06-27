# 📅 Day 6 - Express Response Object (`res`)

## 📌 Overview

Day 6 focused on understanding how an Express server sends responses back to the client.

Every request made by a client (browser, Postman, etc.) must receive **exactly one response** from the server. In this session, I learned different ways to send responses, HTTP status codes, and why sending multiple responses causes an error.

---

# 📚 Topics Covered

- What is the `res` (Response) object?
- `res.send()`
- `res.json()`
- `res.status()`
- `res.sendStatus()`
- Sending HTML responses
- Method Chaining
- HTTP Status Codes
- Why every request must receive exactly one response
- Middleware sending responses

---

# 🧠 Concepts Learned

## 1️⃣ Response Object (`res`)

The `res` object is used to send data from the server back to the client.

Request Flow:

```
Client
   │
   ▼
Request (req)
   │
   ▼
Express Server
   │
Processes Request
   │
   ▼
Response (res)
   │
   ▼
Client
```

---

## 2️⃣ `res.send()`

Used to send responses.

Example:

```javascript
app.get("/", (req, res) => {
    res.send("Hello World");
});
```

Can send:

- String
- Number
- Object
- HTML

---

## 3️⃣ `res.json()`

Used specifically for sending JSON data.

Example:

```javascript
app.get("/student", (req, res) => {
    res.json({
        name: "Komal",
        course: "Backend"
    });
});
```

---

## 4️⃣ `res.status()`

Used to send a custom HTTP status code.

Example:

```javascript
res.status(404).send("User Not Found");
```

---

## 5️⃣ Method Chaining

Instead of:

```javascript
res.status(200);
res.send("Success");
```

Use:

```javascript
res.status(200).send("Success");
```

---

## 6️⃣ `res.sendStatus()`

Shortcut for sending only the status code.

Example:

```javascript
res.sendStatus(404);
```

---

## 7️⃣ Sending HTML

```javascript
app.get("/", (req, res) => {
    res.send("<h1>Hello Backend</h1>");
});
```

---

# 🌐 Common HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 500 | Internal Server Error |

---

# 💡 Important Learnings

## Every request must receive exactly one response.

Correct:

```javascript
res.send("Hello");
```

Wrong:

```javascript
res.send("First");
res.send("Second");
```

Error:

```
Cannot set headers after they are sent to the client
```

---

## Middleware can also send responses.

Example:

```javascript
function checkLogin(req, res, next) {

    if (!loggedIn) {
        return res.send("Please Login First");
    }

    next();
}
```

If middleware sends a response, the route handler does not execute.

---

# ⚠️ Common Mistakes

❌ Forgetting to send a response

```javascript
app.get("/", (req, res) => {
    console.log("Hello");
});
```

Result:

- Terminal prints "Hello"
- Browser keeps loading because no response was sent.

---

❌ Sending multiple responses

```javascript
res.send("First");
res.send("Second");
```

This throws:

```
Cannot set headers after they are sent to the client
```

---

# 🛠 Practice Tasks Completed

- Created `/about` route using `res.send()`
- Created `/student` route using `res.json()`
- Created `/error` route with `404` status
- Created `/created` route with `201` status
- Sent HTML response using `res.send()`
- Built `logger` middleware
- Built a second middleware for practice
- Understood why missing `res.send()` keeps the browser loading
- Learned why only one response can be sent per request

---

# 🧩 Interview Questions

### What is the difference between `res.send()` and `res.json()`?

`res.send()` can send different types of data such as strings, objects, numbers, and HTML.

`res.json()` is specifically used for sending JSON responses.

---

### Why do we use `res.status()`?

To send the appropriate HTTP status code along with the response so the client knows whether the request was successful or failed.

---

### Can middleware send a response?

Yes.

If middleware sends a response, the request ends there and the route handler is not executed.

---

### Why does the browser keep loading if `res.send()` is not called?

Because the server never sends a response back to the client, leaving the request open.

---

# 🎯 Key Takeaways

- Every request must receive exactly one response.
- `res.send()` sends general responses.
- `res.json()` sends JSON responses.
- `res.status()` sets HTTP status codes.
- `res.sendStatus()` is a shortcut for sending status codes.
- Middleware can end the request by sending a response.
- `console.log()` prints to the terminal, while `res.send()` sends data to the client.
- Sending multiple responses for one request causes an error.

---

# 🚀 Next Topic

**Day 7 - REST APIs & CRUD Operations**

- REST API Fundamentals
- CRUD Operations
- GET
- POST
- PUT
- DELETE
- API Design
- Real-world API Flow