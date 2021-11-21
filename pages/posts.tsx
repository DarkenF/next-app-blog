import {MainLayout} from "../components/Layout/MainLayout";
import Link from "next/link";
import {Post} from "../interfaces/post";
import {NextPage} from "next";

interface Props {
  posts: Post[]
}

const Posts: NextPage<Props> = ({posts}) => {

  return (
    <MainLayout title='Posts'>
      <h1>Posts page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.title + post.id}>
            <Link href={`/post/${post.id}`} as={`/post/${post.id}`}><a>{post.title}</a></Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

Posts.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/posts')
  const posts = await response.json();

  return {
    posts
  }
}

export default Posts;