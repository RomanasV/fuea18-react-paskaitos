import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"

function PostPage() {
    let { postId } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        //     .then(res => res.json())
        //     .then(data => setPost(data))

        const fetchPost = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}?_expand=user&_embed=comments`)
            const data = await res.json()
            setPost(data)
        }

        fetchPost()
    }, [postId])

    if (!post) {
        return <p>Loading post...</p>
    }

    const { user, comments } = post
    const { name, id } = user

    return (
        <div>
            <h1>{post.id}. {post.title}</h1>
            <span>Author: <Link to={`/api-project/users/${id}`}>{name}</Link></span>
            <p>{post.body}</p>

            <div>
                <h2>Comments:</h2>

                <div>
                    {comments.map(comment => (
                        <div key={comment.id}>
                            <h3>{comment.name}</h3>
                            <span>Written by: {comment.email}</span>
                            <p>{comment.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostPage