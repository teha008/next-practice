import Nav from "./Nav";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <Head>
        <title>My Blog</title>
        <meta keyword="My Blog powered by Next js" />
        <meta contents="My Blog powered by Next js" />
      </Head>
      <div>{children}</div>
    </>
  );
}

export default Layout;
