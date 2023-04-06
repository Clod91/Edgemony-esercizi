import { getAllIds, getPostData } from "@/utils/funcs";
import Layout from "@/components/layout";

export function Post(props) {
  const { title, body, reactions } = props.postData;
  return (
    <Layout>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>{reactions}</p>
    </Layout>
  );
}

export const getStaticPaths = () => {
  const paths = getAllIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
