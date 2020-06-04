import { useRouter } from 'next/router'
import Layout from '../../../../../components/Layout/Layout';

const Games = () => {
  const router = useRouter()
  const { gameid } = router.query
  return <Layout gameId={gameid} tabName='matches'>
    {console.log(router.query)}
      <div>
        Games
      </div>
  </Layout>
};

export default Games;