import Header from '@/app/components/Header'
import { Tag } from '@/app/utils/interface'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
import React from 'react'

async function getAllTypes() {
    const query = `
        *[_type == "tag"] {
        name,
        slug,
        _id
}
    `
    const tags = await client.fetch(query)
    return tags

}

export const revalidate = 60

const page = async () => {
    const tags: Tag[] = await getAllTypes()
    console.log(tags, 'tags')
    return (
        <div>
            <Header title={'Tag'}>
            </Header>
            <div className='flex flex-wrap gap-2'>
                {tags?.length > 0 &&
                    tags?.map((tag) => (
                        <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                            <div className="mt-2 mr-2 p-1 text-sm border rounded-md border-gray-300 font-jetBrains hover:bg-gray-200 dark: hover:text-black cursor-pointer">
                                <span className='mr-1'>#</span>{tag.name}
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    )
}

export default page