import Header from "@/app/components/Header";
import Posts from "@/app/components/Posts";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

async function getPostsByTag(tag: string) {
    const query = `
  *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
    slug,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

    const posts = await client.fetch(query);
    return posts;
}

export const revalidate = 60;

export async function generateMetadata({ params }: Params) {
    return {
        title: `#${params.slug}`,
        description: `Posts with the tag ${params.slug}`,
        openGraph: {
            title: `#${params.slug}`,
            description: `Posts with the tag ${params.slug}`,
            type: "website",
            locale: "en_NG",
            url: `https://next-cms-blog-ce.vercel.app/${params.slug}`,
            siteName: "Hendo",
        },
    };
}

interface Params {
    params: {
        slug: string;
    };
}

const page = async ({ params }: Params) => {
    const posts: Array<Post> = await getPostsByTag(params.slug);
    console.log(posts, "posts by tag");
    return (
        <div>
            <Header title={`#${params?.slug}`} />
            <div>
                {posts?.length > 0 &&
                    posts?.map((post) => <Posts key={post?._id} posts={post} />)}
            </div>
        </div>
    );
};

export default page;