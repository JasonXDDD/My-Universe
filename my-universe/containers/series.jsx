import { useEffect, useState } from 'react'
import { selectSeries, updateSeries, initSeries } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../components/card'

const Series = () => {
  const [init, setInit] = useState(null)
  const series = useSelector(state => state.series.series)
  const select = useSelector(state => state.series.select)
  const dispatch = useDispatch()

  const doSelectSeries = name => {
    dispatch(selectSeries(name))
  }

  useEffect(() => {
    dispatch(initSeries())

    console.log('init')
  }, [init])

  return (
    <>
      {select ? select.series : ''}
      {series.map(e => (
        <Card
          key={e.series}
          title={e.series}
          description={e.code.join(',')}
          cover='XXXXX'
          isSelect={e.series === select}
          onSeriesClick={doSelectSeries}
        />
      ))}
    </>
  )
}

export default Series
