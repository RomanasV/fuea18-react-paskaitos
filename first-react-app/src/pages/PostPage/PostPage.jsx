import { useEffect, useState } from "react"
import { useParams } from "react-router"

function PostPage() {
    let { postId } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        //     .then(res => res.json())
        //     .then(data => setPost(data))

        const fetchPost = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            const data = await res.json()
            setPost(data)
        }

        fetchPost()
    }, [postId])

    if (!post) {
        return <p>Loading post...</p>
    }

    return (
        <div>
            <h1>{post.id}. {post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export default PostPage