import { cache } from "react";

const DEFAULT_BLOGS_API_URL = "https://api.blog-manager.triostack.in/api/blogs";

function cleanString(value) {
  return typeof value === "string" ? value.trim() : "";
}

export const fetchBlogs = cache(async () => {
  const blogApiUrl = cleanString(process.env.BLOGS_API_URL) || DEFAULT_BLOGS_API_URL;
  const blogApiToken = cleanString(process.env.BLOG_API_TOKEN);

  if (!blogApiToken) {
    console.warn("BLOG_API_TOKEN is not configured. Returning an empty blog list.");
    return [];
  }

  try {
    const response = await fetch(blogApiUrl, {
      headers: {
        Authorization: `Bearer ${blogApiToken}`,
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.error(`Blog API error: ${response.status}`);
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Unable to fetch blogs:", error);
    return [];
  }
});
