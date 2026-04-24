import BlogClient from "./BlogClient";
import { fetchBlogs } from "@/lib/blogs";
import { slugify } from "@/lib/utils";

async function getBlogData(slug) {
  const blogs = await fetchBlogs();
  return blogs.find((post) => slugify(post.title || "") === slug) || null;
}

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const post = await getBlogData(slug);

  if (!post) {
    return {
      title: "Trio-CRM Blog | Insights & Solutions",
      description: "Explore the latest insights on CRM automation, sales growth, and enterprise solutions from Trio-CRM.",
    };
  }

  return {
    title: post.title,
    description: post.heading || post.content?.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.heading || post.content?.substring(0, 160),
      url: `https://triostack.in/blogs/${slug}`,
      type: "article",
      images: [
        {
          url: post.image || "/img.png",
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.heading || post.content?.substring(0, 160),
      images: [post.image || "/img.png"],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const blogs = await fetchBlogs();
  const post = blogs.find((item) => slugify(item.title || "") === slug) || null;
  const recentPosts = blogs
    .filter((item) => slugify(item.title || "") !== slug)
    .slice(0, 3);

  return <BlogClient slug={slug} initialPost={post} initialRecentPosts={recentPosts} />;
}
