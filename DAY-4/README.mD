# Day 4 - Express Middleware (Backend Learning)

## 📌 Topic: Middleware in Express.js

### 🔄 Request Flow
Browser → Request → Middleware → Route Handler → Response

---

## 📖 What is Middleware?

Middleware is a function in Express that runs before the route handler. It has access to:

- req (request)
- res (response)
- next (function to move forward)

---

## ⚙️ Why Middleware is Used?

Middleware is used for:

- Authentication (login check)
- Authorization (role check)
- Logging requests
- Validation of data
- Error handling

---

## 🚶 What is next()?

`next()` is a function provided by Express that:

👉 Passes control to the next middleware or route handler

If you don’t call `next()`:
- Request gets stuck
- No response is sent

---

## 🧠 Real-Life Example

Middleware is like a **security guard**:

- Checks identity
- Allows or blocks entry
- Then passes you forward

---

## 💡 Example Code

```js
function logger(req, res, next) {
  console.log("Request received");
  next();
}

app.use(logger);