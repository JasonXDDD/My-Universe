import styles from '../styles/home.module.sass'
import SeriesContainer from '../containers/seriesContainer'
import CardContainer from '../containers/cardContainer'
import { useState, useEffect } from 'react'
import wrapper from '../reducers'
import { initSeries, initSeriesCard, getSeries } from '../actions/series'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export const getStaticPaths = async () => {
  const res = await getSeries()
  return {
    paths: res.map(e => ({ params: { id: `${e.id}` } })),
    fallback: true,
  }
}

export const getStaticProps = wrapper.getStaticProps(
  store => async ({ params }) => {
    const res = await store.dispatch(initSeries())
    let targetSeries = res.filter(e => e.id === Number(params.id))
    if (targetSeries.length > 0) {
      await store.dispatch(initSeriesCard(targetSeries[0]))
    } else {
      return {
        redirect: {
          destination: '/1',
        },
      }
    }
  }
)

const Home = () => {
  const [serverUrl, setServerUrl] = useState('')
  useEffect(() => {
    setServerUrl(process.env.NEXT_PUBLIC_SERVER_URL || '')
  }, [serverUrl])

  return (
    <div>
      {/* <div>???????{serverUrl}</div> */}
      {/* <Parallax y={[-120, 120]} x={[0, '80%']}>
        <img src='/vercel.svg' />
      </Parallax> */}
      <div className={styles.content}>
        <div className={styles.seriesContainer}>
          <SeriesContainer />
        </div>
        <div id='all' className={styles.cardContainer}>
          <CardContainer />
        </div>
      </div>
    </div>
  )
}

export default Home
