import { useRouter } from 'next/router'
import Layout from '../../../../../components/Layout/Layout';

const Tournaments = () => {
  const router = useRouter()
  const { gameid, tournaments } = router.query
  return <Layout gameId={gameid} tabName='matches'>
      {tournaments.find(param => param === 'game') ? <div>Game</div> : <div>Tournament</div>}
  </Layout>
};

export default Tournaments;