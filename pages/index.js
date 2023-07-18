import Head from "next/head";
import Blog from "./blog";
import 'react-toastify/dist/ReactToastify.css';

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="thapa technical" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"></meta>
          <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
      </Head>
      {/* <Header /> */}
      <Blog />
      
    </>
  );
};

export default index;
