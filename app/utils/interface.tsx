export interface Post {
    title: string;
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    body: string;
    tags: Array<Tag>;
    _id: string;
}

export interface Tag {
    postCount: string
    name: string;
    slug: { current: string };
    _id: string;
}