import Link from "next/link";
import {MainLayout} from "../components/Layout/MainLayout";

export default function Index() {
    return (
      <MainLayout title='Home'>
        <h1>Hello Next.js</h1>
        <p><Link href={'/about'}><a>About</a></Link></p>
        <p><Link href={'/posts'}><a>Posts</a></Link></p>
      </MainLayout>
    );
};