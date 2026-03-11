import express from "express"
import fs from "fs/promises"
import path from "path"
import cors from "cors"
import multer from "multer"

const app = express()
app.use(express.json())
app.use(cors())

const FILE_DIR = "./files"

const storage = multer.diskStorage({
  destination: FILE_DIR,
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

// list files
app.get("/files", async (req, res) => {
  const files = await fs.readdir(FILE_DIR)

  const detailed = await Promise.all(
    files.map(async (file) => {
      const stat = await fs.stat(path.join(FILE_DIR, file))

      return {
        name: file,
        size: stat.size,
        isDirectory: stat.isDirectory()
      }
    })
  )

  res.json(detailed)
})

// read file
app.get("/file/:name", async (req, res) => {
  try {
    const data = await fs.readFile(
      path.join(FILE_DIR, req.params.name),
      "utf8"
    )

    res.json({ content: data })
  } catch {
    res.status(404).json({ error: "File not found" })
  }
})

// create file
app.post("/create", async (req, res) => {
  const { name, content } = req.body

  await fs.writeFile(
    path.join(FILE_DIR, name),
    content
  )

  res.json({ message: "File created" })
})

// append file
app.post("/append", async (req, res) => {
  const { name, content } = req.body

  await fs.appendFile(
    path.join(FILE_DIR, name),
    content
  )

  res.json({ message: "Content appended" })
})

// delete file
app.delete("/delete/:name", async (req, res) => {
  await fs.unlink(path.join(FILE_DIR, req.params.name))

  res.json({ message: "File deleted" })
})

// rename file
app.post("/rename", async (req, res) => {
  const { oldName, newName } = req.body

  await fs.rename(
    path.join(FILE_DIR, oldName),
    path.join(FILE_DIR, newName)
  )

  res.json({ message: "File renamed" })
})

// upload file
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded" })
})

// download file
app.get("/download/:name", (req, res) => {
  res.download(path.join(FILE_DIR, req.params.name))
})

app.listen(5001, () => {
  console.log("🚀 Server running on http://localhost:5001")
})
