import { useEffect, useState } from "react"
import axios from "axios"

export default function App() {

  const [files, setFiles] = useState([])
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [uploadFile, setUploadFile] = useState(null)

  const API = "http://localhost:5001"

  const loadFiles = async () => {
    const res = await axios.get(API + "/files")
    setFiles(res.data)
  }

  useEffect(() => {
    loadFiles()
  }, [])

  const createFile = async () => {
    await axios.post(API + "/create", { name, content })
    loadFiles()
  }

  const deleteFile = async (name) => {
    await axios.delete(API + "/delete/" + name)
    loadFiles()
  }

  const renameFile = async (oldName) => {
    const newName = prompt("New name")
    await axios.post(API + "/rename", { oldName, newName })
    loadFiles()
  }

  const upload = async () => {
    const formData = new FormData()
    formData.append("file", uploadFile)

    await axios.post(API + "/upload", formData)
    loadFiles()
  }

  return (
    <div className="max-w-3xl mx-auto p-10">

      <h1 className="text-3xl font-bold mb-6">
        Node File Manager
      </h1>

      <input
        placeholder="file name"
        className="border p-2 w-full mb-2"
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="file content"
        className="border p-2 w-full mb-4"
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={createFile}
        className="bg-blue-500 text-white px-4 py-2 mb-6"
      >
        Create File
      </button>

      <div className="mb-6">

        <input
          type="file"
          onChange={(e) => setUploadFile(e.target.files[0])}
        />

        <button
          onClick={upload}
          className="bg-green-500 text-white px-4 py-2 ml-2"
        >
          Upload
        </button>

      </div>

      <h2 className="text-xl mb-3">
        Files
      </h2>

      {files.map((file) => (
        <div
          key={file.name}
          className="flex justify-between border p-3 mb-2"
        >
          <div>
            <p>{file.name}</p>
            <p className="text-sm text-gray-500">
              {file.size} bytes
            </p>
          </div>

          <div className="flex gap-2">

            <button
              onClick={() => renameFile(file.name)}
              className="bg-yellow-400 px-3"
            >
              Rename
            </button>

            <button
              onClick={() => deleteFile(file.name)}
              className="bg-red-500 text-white px-3"
            >
              Delete
            </button>

            <a
              href={`http://localhost:5001/download/${file.name}`}
              className="bg-gray-700 text-white px-3 flex items-center"
            >
              Download
            </a>

          </div>
        </div>
      ))}

    </div>
  )
}
