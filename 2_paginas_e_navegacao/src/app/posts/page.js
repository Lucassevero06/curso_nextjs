import Link from 'next/link';
import React from 'react'

const PostsPage = () => {

    const postsId = [1, 2, 3];


    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {postsId.map((id) => {
                    return <li key={id}>
                        <Link href={`/posts/${id}`}>Ver Post {id}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
    
}

export default PostsPage
