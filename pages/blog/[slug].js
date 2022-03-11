import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { useState, useEffect } from "react";
import { serializers } from "../../helpers/Functions";

const BlogDetails = ({ title, body, mainImage }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: "j7y1lk5u",
      dataset: "production",
    });

    if (mainImage) {
      setImageUrl(imgBuilder.image(mainImage));
    }
  }, [mainImage]);

  return (
    <div>
      <head>
        <title>{title}</title>
      </head>

      <main>
        <div className="border-b-2 border-gray-200 mb-4 px-10 dark:bg-black dark:text-white">
          <h2 className="text-2xl font-bold text-center my-5">{title}</h2>
          {imageUrl && (
            <img
              width="350"
              height="200"
              className="my-20 m-auto"
              src={imageUrl}
            />
          )}
          <div>
            <BlockContent
              blocks={body}
              imageOptions={{ w: 320, h: 240 }}
              serializers={serializers}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = encodeURIComponent(
    `*[ _type == "post"]`
  );
  const myQuery = `https://j7y1lk5u.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;
  const res = await fetch(myQuery);
  const jsonData = await res.json();
  const blogData = jsonData.result;

  // map data to an array of path objects with params (id)
  const paths = blogData.map((blog) => {
    return {
      params: { slug: blog.slug.current },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const query = encodeURIComponent(
    `*[ _type == "post" && slug.current == "${slug}" ]`
  );
  const myQuery = `https://j7y1lk5u.api.sanity.io/v2021-10-21/data/query/production?query=${query}`;
  const res = await fetch(myQuery);
  const jsonData = await res.json();
  const blogData = jsonData.result[0];
  return {
    props: {
      title: blogData.title,
      body: blogData.body,
      mainImage: blogData.mainImage ? blogData.mainImage : "",
    },
  };
};

export default BlogDetails;
