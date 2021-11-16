import '../styles/global.sass'
import { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import wrapper from '../reducers'
import NextNProgress from 'nextjs-progressbar'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color='#32c9ff'
        startPosition={0.2}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
