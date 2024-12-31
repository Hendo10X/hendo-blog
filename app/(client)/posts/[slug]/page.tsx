import { FadeUp } from '@/app/components/Fadeup';
import Header from '@/app/components/Header';
import { client } from '@/sanity/lib/client';
import { PortableText } from 'next-sanity';
import Link from 'next/link';
import React from 'react';


interface Params {
    params: {
        slug: string;
    };
    searchParams: {
        [key: string]: string | string[] | undefined;
    };
}

async function getPosts(slug: string) {
    const query = `
    *[_type == "post" && slug.current == $slug] {
        title,
        slug,
        publishedAt,
        excerpt,
        _id,
        body,
        tags[] -> {
            _id,
            name,
            slug
        }
    }`;

    const posts = await client.fetch(query, { slug });
    return posts;
}

const page = async ({ params }: Params) => {
    console.log(params, 'page');
    const post = await getPosts(params?.slug);

    if (!post || post.length === 0) {
        console.error('No post found for the given slug.');
        return <div>Post not found</div>;
    }

    console.log(post, 'post');
    return (
        <div>
            <Header title={post[0]?.title || 'No Title'} />
            <FadeUp delay={0.1} duration={0.6}>
                <div>
                    <span className='font-jetBrains mt-2 text-sm'>
                        {new Date(post[0]?.publishedAt).toDateString()}
                    </span>
                    <div className='mt-4'>
                        {post[0]?.tags?.map((tag: any) => (
                            <Link key={tag._id} href={`/tag/${tag.slug.current}`}>
                                <span className='mt-2 mr-2 p-1 text-sm border rounded-md border-gray-300 font-jetbrains hover:bg-gray-200 dark:hover:text-black'>
                                    {tag.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                    <FadeUp delay={0.3} duration={1.6} >
                        <div className='mt-8 mb-8 text-justify prose-headings:my-5 prose-heading:text-3xl prose-p:mb-2 prose-p:mt-2 prose-p:leading-7 prose-li:list-disc prose-li:leading-7 prose-li:ml-4 tracking-tight'>
                            <PortableText value={post[0]?.body} />
                        </div>
                    </FadeUp>
                </div>
            </FadeUp>
        </div>
    );
};

export default page;
