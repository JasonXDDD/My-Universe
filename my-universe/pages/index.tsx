import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Parallax } from 'react-scroll-parallax'

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.space}>Space</div>
      <Parallax y={[-120, 120]} x={[0, '80%']}>
        <img src="/vercel.svg" />
      </Parallax>
      <div className={styles.space}>Space</div>
    </div>
  )
}

export default Home
