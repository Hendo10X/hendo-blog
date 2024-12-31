import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import Posts from "../components/Posts";
import { FadeUp } from "../components/Fadeup";
async function getposts() {
  const query = `
    *[_type == "post"] {
      title,
        slug,
         publishedAt,
        excerpt,
        _id,
        tags[] -> {
            _id,
            name,
            slug
  }
    }
    `
  const data = await client.fetch(query)
  return data
}

const revalidate = 60;
export default async function Home() {
  const posts: Post[] = await getposts()
  console.log(posts, 'posts')
  return (
    <FadeUp delay={1.3} duration={1.6}>
      <div className="font-inter"><Header title="Stories" />
        <div>
          {posts?.length > 0 && posts?.map((post) => (
            <Posts key={post?._id} posts={post} />
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
