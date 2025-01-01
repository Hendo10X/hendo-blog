import React from 'react'
import { Post } from '../utils/interface'
import Link from 'next/link'


interface Props {
    posts: Post
}

const Posts = ({ posts }: Props) => {
    return (
        <div className='mb-5'>
            <Link href={`/posts/${posts.slug.current}`}>
                <h2 className="mt-8 text-xl font-bold mb-2">{posts?.title}</h2>
                <p className='font-jetBrains text-sm mb-2'>{new Date(posts?.publishedAt).toDateString()}</p>
                <p className='font-jetBrains text-sm whitespace-normal text-[#969292] line-clamp-2'>{posts?.excerpt}</p>
            </Link>
            <div className='mt-2'>
                {posts?.tags?.map((tag) => (
                    <span key={tag?._id} className='mt-2 mr-2 p-1 text-sm border rounded-md border-gray-300 font-jetBrains hover:bg-gray-200 dark: hover:text-black cursor-pointer'>{tag?.name}</span>
                ))}
            </div>

        </div>
    )
}

export default Posts