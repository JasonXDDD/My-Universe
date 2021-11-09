import { NextPage } from 'next'
import styles from '../styles/home.module.sass'
import { Parallax } from 'react-scroll-parallax'
import Series from '../containers/series'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {
  const [serverUrl, setServerUrl] = useState('')
  useEffect(() => {
    setServerUrl(process.env.NEXT_PUBLIC_SERVER_URL || '')
  }, [serverUrl])

  return (
    <div>
      <div className={styles.space}>???????{serverUrl}</div>
      <Parallax y={[-120, 120]} x={[0, '80%']}>
        <img src='/vercel.svg' />
      </Parallax>
      <div className={styles.space}>
        <div className={styles.cardContainer}>
          <Series />
        </div>
      </div>
    </div>
  )
}

export default Home
