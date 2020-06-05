import React from "react";
import Link from 'next/link';
import Layout from "../components/Layout/Layout";

function Error() {
  return (
    <Layout className="ErrorPage" error>
      <div className="error-404">404</div>
      <div className="error-text">Page not Found</div>
      <Link href="/">
        <a>Go To Homepage</a>
      </Link>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
