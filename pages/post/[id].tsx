import {NextPage, NextPageContext} from "next";
import Link from "next/link";
import {Post} from "../../interfaces/post";
import {MainLayout} from "../../components/Layout/MainLayout";

interface Props {
  post: Post
}

const Post: NextPage<Props> = ({post}) => {
  const {title, content} = post;

  return (
    <MainLayout>
      <h1>{title}</h1>
      <hr/>
      <p>{content}</p>
      <Link href={'/posts'}><a>Back to all posts</a></Link>
    </MainLayout>
  );
};

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string
  }
}

Post.getInitialProps = async (ctx: PostNextPageContext) => {
  const {query} = ctx;
  const response = await fetch(`http://localhost:4200/posts/${query.id}`)
  const post = await response.json();


  return {
    post: post
  }
}

export default Post