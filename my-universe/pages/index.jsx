import { NextPage, GetStaticProps } from 'next'
import styles from '../styles/home.module.sass'
import { Parallax } from 'react-scroll-parallax'
import SeriesContainer from '../containers/seriesContainer'
import CardContainer from '../containers/cardContainer'
import { useState, useEffect } from 'react'
import wrapper from '../reducers'
import { initSeries } from '../actions/series'

export const getStaticProps = wrapper.getStaticProps(store => async () => {
  await store.dispatch(initSeries())
})

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
        <div className={styles.cardContainer}>
          <CardContainer />
        </div>
      </div>
    </div>
  )
}

export default Home