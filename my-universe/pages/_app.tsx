import '../styles/global.sass'
import { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import wrapper from '../reducers'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default wrapper.withRedux(MyApp)
