import { InferGetStaticPropsType, NextPage } from "next";
import BlogCard from "../components/BlogCard";

interface PostApiResponse {
  postInfo: {
    map(arg0: (post: any) => JSX.Element): import("react").ReactNode;
    title: string;
    slug: string;
    meta: string;
  };
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Blogs: NextPage<Props> = ({ posts }) => {
  return (
    <div className="max-w-3xl mx-auto p-5 space-y-5">
      {posts.map((post) => (
        <BlogCard title={post.title} desc={post.meta} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const { postInfo }: PostApiResponse = await fetch(
    "http://localhost:3000/api/posts"
  ).then((data) => data.json());

  return {
    props: { posts: postInfo },
  };
};

export default Blogs;
