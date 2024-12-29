import React from 'react'
import { Post } from '../utils/interface'
import Link from 'next/link'

interface Props {
    posts: Post
}

const Posts = ({ posts }: Props) => {
    return (
        <div>
            <Link href={`/posts/${posts.slug.current}`}>
                <h2 className="mt-8 text-xl font-bold mb-2">{posts?.title}</h2>
                <p className='font-jetBrains text-sm '>{posts?.publishedAt}</p>
                <p className='font-jetBrains text-sm whitespace-normal text-[#969292]'>{posts?.excerpt}</p>
            </Link>
        </div>
    )
}

export default Posts