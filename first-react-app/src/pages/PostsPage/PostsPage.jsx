import { useEffect, useState } from "react"
import { Link } from "react-router"

function PostsPage() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => res.json())
        //     .then(data => {
        //         setPosts(data)
        //     })

        const fetchData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            setPosts(data)
        }

        fetchData()
    }, [])

    return (
        <div>
            {posts.length === 0 ? (
                <p>Loading posts...</p>
            ) : (
                <>
                    <h1>Posts:</h1>

                    <ul>
                        {posts.map(post => (
                            <li key={post.id}>
                                <Link to={`/api-project/posts/${post.id}`}>{post.id}. {post.title}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}

        </div>
    )
}

export default PostsPage