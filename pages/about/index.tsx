import Router from "next/router";
import {MainLayout} from "../../components/Layout/MainLayout";
import {NextPage} from "next";

interface Props {
  title: string
}

const About: NextPage<Props> = ({title}) => {
  const linkClickHandler = (url) => {
    Router.push(url);
  }

  return (
    <MainLayout title='About'>
      <h1>{title}</h1>

      <button onClick={() => linkClickHandler('/')}>Go back to Home</button>
      <button onClick={() => linkClickHandler('/posts')}>Go back to Posts</button>
    </MainLayout>
  );
};

About.getInitialProps = async () => {
  const response = await fetch('http://localhost:4200/about')
  const data = await response.json()

  return {
    title: data.title
  }
}

export default About;