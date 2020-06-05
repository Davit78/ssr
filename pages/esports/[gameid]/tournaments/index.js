import { useRouter } from 'next/router'
import { getSeoData } from '../../../../store/actions/seo';
import Layout from '../../../../components/Layout/Layout';

const Tournaments = ({ meta }) => {
  const router = useRouter()
  const { gameid } = router.query
  return <Layout meta={meta} gameId={gameid} tabName='matches'>
      <div>
        Tournaments-{gameid}
      </div>
  </Layout>
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { gameid: "home" } },
      { params: { gameid: "live" } },
      { params: { gameid: "CounterStrike" } },
      { params: { gameid: "Dota2" } },
      { params: { gameid: "LeagueOfLegends" } },
      { params: { gameid: "Overwatch" } },
      { params: { gameid: "StarCraft2" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps() {
  const res = await getSeoData('esports-home-matches');
  const meta = await res.json();
  return {
    props: {
      meta: meta,
    }
  }
};

export default Tournaments;