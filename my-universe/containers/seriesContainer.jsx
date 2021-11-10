import { useEffect, useState } from 'react'
import { initSeries, initSeriesCard } from '../actions/series'
import { useSelector, useDispatch } from 'react-redux'
import { Series } from '../components/series'

const SeriesContainer = () => {
  const [init, setInit] = useState(null)
  const series = useSelector(state => state.series.series)
  const select = useSelector(state => state.series.select)
  const dispatch = useDispatch()

  const doSelectSeries = series => {
    dispatch(initSeriesCard(series))
  }

  useEffect(() => {
    dispatch(initSeries())

    console.log('init')
  }, [init])

  return (
    <>
      {select ? select.series : ''}
      {series.map(e => (
        <Series
          key={e.series}
          name={e.series}
          code={e.code}
          onSeriesClick={() => doSelectSeries(e)}
        />
      ))}
    </>
  )
}

export default SeriesContainer
