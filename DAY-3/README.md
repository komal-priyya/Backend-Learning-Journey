# Day 3 - Route Parameters & Query Parameters

## Topics Learned

* Route Parameters
* Query Parameters
* req.params
* req.query
* Dynamic Routes in Express

---

# Theory

## What are Route Parameters?

Route parameters allow us to capture values directly from the URL.

Example:

```http
GET /user/komal
```

Route:

```js
app.get("/user/:name", (req, res) => {
    res.send(req.params.name);
});
```

Output:

```text
komal
```

### Accessing Route Parameters

```js
req.params.name
req.params.id
```

---

## What are Query Parameters?

Query parameters allow us to send additional information through the URL.

Example:

```http
GET /search?name=komal
```

Route:

```js
app.get("/search", (req, res) => {
    res.send(req.query.name);
});
```

Output:

```text
komal
```

### Accessing Query Parameters

```js
req.query.name
req.query.id
```

---

# Route Parameters vs Query Parameters

| Route Parameters                         | Query Parameters             |
| ---------------------------------------- | ---------------------------- |
| `/user/101`                              | `/user?id=101`               |
| `req.params`                             | `req.query`                  |
| Used for identifying a specific resource | Used for filtering/searching |

---

# Practical Tasks

## Task 1

### Route Parameter

Route:

```js
app.get("/user/:name", (req, res) => {
    res.send(req.params.name);
});
```

Test URL:

```text
http://localhost:5000/user/komal
```

Expected Output:

```text
komal
```

---

## Task 2

### Product ID Route Parameter

Route:

```js
app.get("/product/:id", (req, res) => {
    res.send(req.params.id);
});
```

Test URL:

```text
http://localhost:5000/product/25
```

Expected Output:

```text
25
```

---

# Challenge 1

### Company Route

Route:

```js
app.get("/company/:companyName", (req, res) => {
    res.send(`Welcome to ${req.params.companyName}`);
});
```

Test URL:

```text
http://localhost:5000/company/openai
```

Expected Output:

```text
Welcome to openai
```

---

# Query Parameter Tasks

## Task 3

Route:

```js
app.get("/search", (req, res) => {
    res.send(req.query);
});
```

Test URL:

```text
http://localhost:5000/search?id=5
```

Expected Output:

```json
{
  "id": "5"
}
```

---

## Task 4

Route:

```js
app.get("/search", (req, res) => {
    res.send(req.query.name);
});
```

Test URL:

```text
http://localhost:5000/search?name=komal
```

Expected Output:

```text
komal
```

---

# Challenge 2

### Books API

Route:

```js
app.get("/books", (req, res) => {
    res.send(req.query.title);
});
```

Test URL:

```text
http://localhost:5000/books?title=atomic-habits
```

Expected Output:

```text
atomic-habits
```

---

# Mini Challenge

Route:

```js
app.get("/student/:id/:name", (req, res) => {
    res.send({
        id: req.params.id,
        name: req.params.name
    });
});
```

Test URL:

```text
http://localhost:5000/student/101/komal
```

Expected Output:

```json
{
  "id": "101",
  "name": "komal"
}
```

---

# What I Learned

* Route parameters make routes dynamic.
* Query parameters help filter or search data.
* `req.params` is used for values inside the route path.
* `req.query` is used for values after `?` in the URL.
* Express can capture and use URL data dynamically.

---

# Reflection

### Difference Between:

```text
/student/101
```

and

```text
/ student?id=101
```

* Route parameters identify a specific resource.
* Query parameters provide extra information for filtering or searching.

### When to Use req.params?

When data is part of the route path.

Example:

```text
/user/101
```

### When to Use req.query?

When data is passed after `?`.

Example:

```text
/search?name=komal
```

---

# Status

✅ Learned Route Parameters

✅ Learned Query Parameters

✅ Built Dynamic Routes

✅ Completed Tasks & Challenges

Ready for Day 4: Middleware
