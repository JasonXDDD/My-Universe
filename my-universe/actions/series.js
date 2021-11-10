import actionType from '../actions/actionType'
import fetchData, { api } from '../utils/server'


export const updateSeries = (series) => {
  return {
    type: actionType.SERIES.UPDATE,
    series
  }
}

export const selectSeries = (name) => {
  return {
    type: actionType.SERIES.SELECT,
    name
  }
}

export const updateSeriesCard = (cards) => {
  return {
    type: actionType.SERIES.CARD,
    cards
  }
}



export const initSeries = () => {
  return async (dispatch) => {
    const data = await getSeries()
    console.log(data)
    dispatch(updateSeries(data))
  }
}

export const initSeriesCard = (series) => {
  return async (dispatch) => {
    dispatch(selectSeries(series.series))
    const data = await getSeriesCard(series.code)
    console.log(data)
    dispatch(updateSeriesCard(data))
  }
}

// AJAX
const getSeries = async () => {
  const res = await fetchData(api.series)
  return res || []
}

const getSeriesCard = async (code) => {
  const res = await fetchData(api.card, {
    params: {
      series: code.join(';')
    }
  })
  return res || []
}