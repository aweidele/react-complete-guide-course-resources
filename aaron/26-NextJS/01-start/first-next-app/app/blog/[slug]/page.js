import Link from "next/link";

const BlogPost = async ({ params }) => {
  const { slug } = await params;
  return (
    <>
      <h1>Blog Post</h1>
      <p>
        <Link href="/blog">Back to blogs</Link>
      </p>
      <p>{slug}</p>
    </>
  );
};

export default BlogPost;