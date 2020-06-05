import { getSeoData } from '../store/actions/seo';
import Layout from '../components/Layout/Layout';

const About = ({ meta }) => {
  return <Layout meta={meta}>
    <div>
      About
    </div>
  </Layout>
};

export async function getStaticProps() {
  const res = await getSeoData('esports-home-matches');
  const meta = await res.json();
  return {
    props: {
      meta: meta,
    }
  }
};

export default About;