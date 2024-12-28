import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
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
  const posts = await getposts()
  console.log(posts, 'posts')
  return (
    <div className="font-inter"><Header title="Stories" /></div>
  );
}
