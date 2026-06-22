# Day 2 - HTTP Methods (GET, POST, PUT, DELETE)

## Goal

Learn how clients perform different actions on the same route using HTTP methods.


* Understand GET, POST, PUT, and DELETE.
* Create routes using different HTTP methods.
* Test APIs using Postman.
* Understand why backend APIs use different methods for different actions.

---

# Theory

## What are HTTP Methods?

HTTP methods tell the server what action the client wants to perform.

Example:

```http
GET /students
POST /students
PUT /students
DELETE /students
```

The route is the same (`/students`) but the action changes based on the HTTP method.

---

## GET

Used to fetch data from the server.

### Example

```http
GET /students
```

### Meaning

Give me all students.

### Real World Example

Checking your bank account balance.

---

## POST

Used to create new data.

### Example

```http
POST /students
```

### Meaning

Create a new student.

### Real World Example

Creating a new Instagram account.

---

## PUT

Used to update existing data.

### Example

```http
PUT /students
```

### Meaning

Update student information.

### Real World Example

Updating your profile picture.

---

## DELETE

Used to remove data.

### Example

```http
DELETE /students
```

### Meaning

Delete a student.

### Real World Example

Deleting a social media post.

---



# Tasks

## Task 1

Create:

```js
app.get("/products")
```

Return:

```text
ALL products
```

---

## Task 2

Create:

```js
app.post("/products")
```

Return:

```text
product created
```

---

## Task 3

Create:

```js
app.put("/products")
```

Return:

```text
products are updated
```

---

## Task 4

Create:

```js
app.delete("/products")
```

Return:

```text
product deleted
```

---

# Challenge

## Student API

Create the following routes:

### GET

```http
GET /students
```

Response:

```text
All students
```

### POST

```http
POST /students
```

Response:

```text
new student added
```

### PUT

```http
PUT /students
```

Response:

```text
student updated
```

### DELETE

```http
DELETE /students
```

Response:

```text
student deleted
```

---

# Postman Testing

## GET

```http
GET http://localhost:5000/students
```

Expected Response:

```text
All students
```

---

## POST

```http
POST http://localhost:5000/students
```

Expected Response:

```text
new student added
```

---

## PUT

```http
PUT http://localhost:5000/students
```

Expected Response:

```text
student updated
```

---

## DELETE

```http
DELETE http://localhost:5000/students
```

Expected Response:

```text
student deleted
```

---

# Key Learnings

* The same route can support multiple HTTP methods.
* GET is used to fetch data.
* POST is used to create data.
* PUT is used to update data.
* DELETE is used to remove data.
* Browsers mainly send GET requests.
* Postman is used to test all HTTP methods.

---

# Reflection Questions

1. Why do we need different HTTP methods?
2. What is the difference between GET and POST?
3. What is the difference between PUT and DELETE?
4. Why can't we properly test POST, PUT, and DELETE from the browser address bar?
5. Why do backend developers use Postman?

---

# Progress

✅ Learned HTTP Methods

✅ Built Product API

✅ Built Student API

✅ Tested APIs using Postman


