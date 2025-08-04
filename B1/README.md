# **Basic Backend**

**Step 1** : Open a folder in terminal and VS Code

**Step 2** : type `npm init` 

**Step 3** : Enter details.

```json
{
  "name": "first-backend",
  "version": "1.0.0",
  "description": "Making first backend to deploy",
  "main": "index.js", // JS File to be created
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node",
    "backend"
  ],
  "author": "Ranjit Dey",
  "license": "ISC",
}
```
**Step 4** : create a `index.js` file 

**Step 5(optional)** : you can add a script to the `package.json` file to run the js `(index.js)` file
```json
{
  "name": "first-backend",
  "version": "1.0.0",
  "description": "Making first backend to deploy",
  "main": "index.js", // JS File to be created
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "node index.js" // script created
  },
  "keywords": [
    "node",
    "backend"
  ],
  "author": "Ranjit Dey",
  "license": "ISC",
}
```
**Step 6** : write some code to run the js file. you can run the js file in two ways now.
 - 1. `node index.js`
 - 2. `npm start`
 - 3. `npm run start`

 ---
 ## **Second Step**
 
 1. install express and dotenv
 ```bash
 npm install express dotenv
 ```
 2. create a `.env` file. and paste the below code It contains sensitive information. 

 ```JavaScript
 PORT = 4000
 ```

 2. Paste this code in `index.js`
 ```JavaScript
 const exp = require("express");
const app = exp();
require('dotenv').config();
// console.log(process.env);
// const PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Backend is running.\n');
})

app.listen(process.env.PORT, () => {
    console.log(`Backend is running on port: ${process.env.PORT}\n Click here: http://localhost:${process.env.PORT}`);
})
```

### Folder Structure
```bash
Backend
    |
    |- /node_modules
    |- .env
    |- index.js
    |- package-lock.json //automatically created
    |- package.json
```
