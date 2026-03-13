import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreatePost = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        console.log(formData)

        axios
            .post('http://localhost:3000/create-post', formData)
            .then(() => {
                navigate('/posts')
            })
            .catch((err) => {
                console.log(err)
                alert('Error creating post')
            })
    }
    return (
        <section className="create-post">
            <div className="create-post__container">
                <h1 className="create-post__title">Create Post</h1>

                <form className="create-post__form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Upload Image</label>
                        <input
                            className="form-input form-file"
                            type="file"
                            name="image"
                            accept="image/*"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Caption</label>
                        <input
                            className="form-input"
                            type="text"
                            name="caption"
                            placeholder="Write a caption..."
                            required
                        />
                    </div>

                    <button className="submit-btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default CreatePost
