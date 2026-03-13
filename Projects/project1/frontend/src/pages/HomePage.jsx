import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <section className="homepage">
            <div className="homepage__container">
                <h1 className="homepage__title">Welcome to Mini Blogger</h1>

                <p className="homepage__description">
                    In this application you can post a blog by adding just one image
                    and one beautiful caption.
                </p>

                <div className="homepage__actions">
                    <Link className="homepage__btn primary-btn" to="/create-post">
                        Create Post
                    </Link>

                    <Link className="homepage__btn secondary-btn" to="/posts">
                        All Posts
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
