import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import Posts from "../components/Posts";
async function getposts() {
  const query = `
    *[_type == "post"] {
      title,
        slug,
         publishedAt,
        excerpt,
    }
    `
  const data = await client.fetch(query)
  return data
}
export default async function Home() {
  const posts: Post[] = await getposts()
  console.log(posts, 'posts')
  return (
    <div className="font-inter"><Header title="Stories" />
      <div>
        {posts?.length > 0 && posts?.map((post) => (
          <Posts key={post?._id} posts={post} />
        ))}
      </div>
    </div>
  );
}
