import { NextPage } from "next";
import BlogCard from "../components/BlogCard";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      <BlogCard title="This is my blog" desc="This is my desc"/>
      <BlogCard title="This is my blog" desc="This is my desc"/>
      <BlogCard title="This is my blog" desc="This is my desc"/>
      <BlogCard title="This is my blog" desc="This is my desc"/>
    </div>
  );
};

export default Blogs;
