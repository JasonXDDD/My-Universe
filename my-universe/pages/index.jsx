import styles from '../styles/home.module.sass'
import { useState, useEffect, Suspense } from 'react'
import useSeries from '../data/use-series'
import useCard from '../data/use-card'
import { Series } from '../components/series'
import { Card } from '../components/card'
import { FixedSizeGrid as Grid } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

// export const getStaticProps = wrapper.getStaticProps(
//   store => async ({ params }) => {
//     const res = await store.dispatch(initSeries())
//     // let targetSeries = res.filter(e => e.id === Number(params.id))
//     // if (targetSeries.length > 0) {
//     //   await store.dispatch(initSeriesCard(targetSeries[0]))
//     // } else {
//     //   return {
//     //     redirect: {
//     //       destination: '/1',
//     //     },
//     //   }
//     // }
//   }
// )

const SeriesContainer = ({ doSeries }) => {
  const { data, mutate } = useSeries()

  return (data || []).map(e => (
    <Series
      key={e.series}
      id={e.id}
      name={e.series}
      code={e.code}
      doSelect={() => {
        doSeries(e)
      }}
    />
  ))
}

const COLUMN_NUM = 6

const CardItem = ({ columnIndex, data, rowIndex, style }) => {
  let id = rowIndex * COLUMN_NUM + columnIndex
  const item = data[id % data.length]

  if (id < data.length) {
    return (
      <div style={style}>
        <Suspense fallback={<div>Loading...</div>}>
          <Card
            isShow={true}
            key={item.cardId}
            title={item.title}
            cover={item.cover}
            cost={item.cost}
            level={item.level}
            attack={item.attack}
            soul={item.soul}
            type={item.type}
            rare={item.rare}
            cardId={item.cardId}
          />
        </Suspense>
      </div>
    )
  } else {
    return null
  }
}

const CardContainer = ({ series }) => {
  const { data } = useCard(series.code)
  return (
    <AutoSizer>
      {({ height, width }) => (
        <Grid
          columnCount={COLUMN_NUM}
          columnWidth={180}
          height={height}
          rowCount={Math.ceil(data.length / COLUMN_NUM)}
          rowHeight={380}
          width={width}
          itemData={data}
          // className={styles.cardContainer}
        >
          {CardItem}
        </Grid>
      )}
    </AutoSizer>
  )
}

const Home = () => {
  const [series, setSeries] = useState(false)

  return (
    <div>
      {/* <div>???????{serverUrl}</div> */}
      {/* <Parallax y={[-120, 120]} x={[0, '80%']}>
        <img src='/vercel.svg' />
      </Parallax> */}
      <div className={styles.content}>
        <div className={styles.seriesContainer}>
          <SeriesContainer doSeries={s => setSeries(s)} />
        </div>
        {/* <div id='all' className={styles.cardContainer}> */}
        <div style={{ flex: '1 1 auto', height: '100vh' }}>
          <CardContainer series={series} />
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Home
