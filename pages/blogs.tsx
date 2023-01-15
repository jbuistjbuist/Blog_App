import { NextPage } from "next";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

interface Props {}

const Blogs: NextPage<Props> = () => {
  const [posts, setPosts] = useState<
    { title: string; slug: string; meta: string }[]
  >([]);

  const fetchPosts = async () => {
    const res = await fetch ('/api/posts').then(data => data.json())
    setPosts(res.postInfo);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      { posts.map(post => <BlogCard title={post.title} desc={post.meta}/>)}
    </div>
  );
};

export default Blogs;
