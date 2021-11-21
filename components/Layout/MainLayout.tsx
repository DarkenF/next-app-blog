import React from 'react';
import Link from "next/link";
import classes from './MainLayout.module.scss'
import Head from "next/head";
// import {useRouter} from "next/router";

export const MainLayout = ({children, title = ''}) => {
  // const {pathname} = useRouter()
  // const title = pathname !== '/' ? pathname[1].toUpperCase() + pathname.replace('/', '').slice(1) : '';

  return (
    <>
      <Head>
        <title>{title ? `${title} |`: ''} Next App</title>
        <meta name="keywords" content="next,js,nextjs,react"/>
        <meta name="description" content="Next App posts"/>
        <meta charSet="utf-8"/>
      </Head>
      <nav className={classes.navigation}>
        <Link href={'/'}>
          <a className={classes.link}>Home</a>
        </Link>
        <Link href={'/about'}>
          <a className={classes.link}>About</a>
        </Link>
        <Link href={'/posts'}>
          <a className={classes.link}>Posts</a>
        </Link>
      </nav>
      <main className={classes.main}>
        {children}
      </main>
    </>
  );
};