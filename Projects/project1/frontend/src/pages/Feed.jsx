import axios from 'axios'
import { useEffect, useState } from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/posts').then((res) => {
            setPosts(res.data.posts)
        })
    }, [])

    return (
        <section className="feed">
            <div className="feed__container">
                <h1 className="feed__title">All Posts</h1>

                <div className="posts-grid">
                    {posts.map((post) => (
                        <div key={post._id} className="post-card">
                            <div className="post-image-wrapper">
                                <img src={post.image} alt="post" className="post-image" />
                            </div>

                            <p className="post-caption">{post.caption}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Feed
