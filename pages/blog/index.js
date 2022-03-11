import Head from "next/head";
import Link from "next/link";

export const getServerSideProps = async () => {
  const query = encodeURIComponent(
    `*[ _type == "post" ]`
  );
  const myQuery = `https://j7y1lk5u.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;

  const res = await fetch(myQuery);
  const jsonData = await res.json();
  const blogData = jsonData.result;

  return {
    props: {
      blogs: blogData,
    },
  };
};

const Blog = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Xone | Blog</title>
      </Head>
      <div className="px-10">
        <p>Checkout the awesome list of content you can go through and learn</p>

        <div className="space-y-4 mt-10">
          {blogs &&
            blogs.map((item, index) => {
              return listBlogItem(item, index);
            })}
        </div>
      </div>
    </>
  );
};

const listBlogItem = (item, index) => {
  return (
    <div className="border border-gray-100 shadow hover:shadow-md hover:border-gray-200 rounded p-4">
      <Link href={"blog/" + item.slug.current} key={item._id}>
        <a>
          <h3 className="font-bold">{item.title}</h3>
        </a>
      </Link>
    </div>
  );
};

export default Blog;
