import { NextPage } from "next";

interface Props {}

const Blogs: NextPage<Props> = () => {
  return (
    <div className="bg-green-100 max-w-3xl mx-auto p-5 rounded">
      <div className="bg-green-100 p-2">
        <h1 className="text-3xl text-gray-900 font-semibold">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
          recusandae magni accusantium assumenda iure suscipit animi voluptate,
          ipsa nemo officiis nihil iusto nisi explicabo consequuntur ex ratione
          officia sit inventore repellendus illo? Nemo, inventore aliquid? Harum
          quo illum iste, doloribus maiores architecto nobis asperiores eum
          excepturi eius porro esse consequatur.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
