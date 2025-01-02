import Header from "@/app/components/Header";
import Posts from "@/app/components/Posts";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";

async function getPostsByTag(tag: string) {
    const query = `*[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
        title,
        slug,
        publishedAt,
        excerpt,
        tags[]-> {
            _id,
            slug,
            name
        }
    }`;
    // Remove the separate params object since we're interpolating the tag directly
    const posts = await client.fetch(query);
    return posts;
}

export const revalidate = 60;

interface Params {
    params: {
        slug: string;
    };
}

const Page = async ({ params }: Params) => {
    const { slug } = params;
    const posts: Array<Post> = await getPostsByTag(slug);

    return (
        <div>
            <Header title={`#${slug}`} />
            <div>
                {posts?.length > 0
                    ? posts.map((post) => <Posts key={post._id} posts={post} />)
                    : <p>No posts found for this tag.</p>}
            </div>
        </div>
    );
};

export default Page;