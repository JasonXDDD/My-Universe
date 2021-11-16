import { useEffect, useState } from 'react'
import { initSeries, initSeriesCard } from '../actions/series'
import { useSelector, useDispatch } from 'react-redux'
import { Series } from '../components/series'
import wrapper from '../reducers'

const SeriesContainer = () => {
  const dispatch = useDispatch()

  const series = useSelector(state => state.series.series)
  const select = useSelector(state => state.series.select)

  return (
    <>
      {select ? select.series : ''}
      {series.map(e => (
        <Series
          key={e.series}
          id={e.id}
          name={e.series}
          code={e.code}
          doSelect={() => {
            dispatch(initSeriesCard(e))
          }}
        />
      ))}
    </>
  )
}

export default SeriesContainer
