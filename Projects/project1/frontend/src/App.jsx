import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
import HomePage from './pages/HomePage'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/posts" element={<Feed />} />
            </Routes>
        </Router>
    )
}

export default App
