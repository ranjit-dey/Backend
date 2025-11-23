# 📦 Simple Node.js Static File Server

This project is a **minimal static file server** built using **pure Node.js** (without Express).
It can serve HTML, CSS, JavaScript, JSON, Markdown, images, and more.

---

## 🚀 Features

* Serves **HTML files**
* Supports **CSS**, **JS**, **JSON**, **PNG images**, and **Markdown (.md)**
* Handles **root route** `/` by loading `index.html`
* Sends **404 error page** when a file is missing
* Uses Node’s built-in **http**, **fs**, and **path** modules

---

## 🧠 How It Works

### 1️⃣ Create the Web Server

The `http.createServer()` method creates a basic web server.
Every time a browser sends a request, the callback function runs.

### 2️⃣ Determine Which File to Serve

```js
const filePath = path.join(
  __dirname,
  req.url === '/' ? 'index.html' : req.url
)
```

* If the user visits `/`, we serve `index.html`.
* If the user requests `/style.css`, we serve `style.css`.

### 3️⃣ Detect the File Type (MIME)

```js
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.json': 'text/json',
  '.md': 'text/md'
}
```

This tells the browser **how to interpret** the file.

### 4️⃣ Read the File and Send It

```js
fs.readFile(filePath, (err, content) => {
```

If the file exists → send it 👍
If it doesn’t → return a **404 page**

---

## ▶️ How to Run

1. Install Node.js (if not installed)
2. Run the server:

```bash
node server.js
```

3. Open the browser and visit:

```
http://localhost:3000
```

---

## 💡 Use Cases

* Hosting a **simple portfolio**
* Testing **static websites** locally
* Serving HTML/CSS/JS without using Express
* Quick preview of Markdown or JSON files
* Learn how servers work under the hood

---

## 📝 Notes & Limitations

* Markdown (`.md`) files are served as **plain text**, not converted to HTML.
* No directory listing — you must access files directly.
* No caching or compression (simple, minimal server).
* For larger apps, consider frameworks like **Express** or static hosts like **Netlify**.
