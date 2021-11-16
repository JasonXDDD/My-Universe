import '../styles/global.sass'
import { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax'
import wrapper from '../reducers'
import { SWRConfig } from 'swr'
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
      <SWRConfig
        value={{
          // refreshInterval: 3000,
          fetcher: (resource, init) =>
            fetch(resource, init).then(res => res.json()),
        }}
      >
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </SWRConfig>
    </>
  )
}

export default wrapper.withRedux(MyApp)
