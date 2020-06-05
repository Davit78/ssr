import { withRouter } from 'next/router';
import { getSeoData } from '../store/actions/seo';
import Layout from '../components/Layout/Layout';

const Main = ({ meta }) => {
  return <Layout meta={meta}>
    <div>
      Home
    </div>
  </Layout>
};

export async function getStaticProps() {
  const res = await getSeoData('esports-home-matches');
  const meta = await res.json();
  return {
    props: {
      meta,
    }
  }
};

export default withRouter(Main);