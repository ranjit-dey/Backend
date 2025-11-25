import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

const myusername = process.env.username;
console.log(myusername);

console.log("Start the backend project");
