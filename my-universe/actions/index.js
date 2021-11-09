import actionType from '../actions/actionType'


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

const fetchData = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/series')
  if (res.ok) {
    return await res.json()
  }
  return []
}

export const initSeries = () => {
  return async (dispatch) => {
    const data = await fetchData()
    console.log(data)
    dispatch(updateSeries(data))
  }
}