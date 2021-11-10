import actionType from '../actions/actionType'
import * as _ from 'lodash'

const init = {
  series: [],
  select: false,
  cards: []
}

const selectSeries = (series = [], seriesName) => {
  return _.find(series, (o) => o.series === seriesName) || false
}

const series = (state = init, action) => {
  let tmpState = _.cloneDeep(state)

  switch (action.type) {
    case actionType.SERIES.UPDATE:
      tmpState.series = action.series
      return tmpState

    case actionType.SERIES.SELECT:
      tmpState.select = selectSeries(tmpState.series, action.name)
      return tmpState

    case actionType.SERIES.CARD:
      tmpState.cards = action.cards
      return tmpState

    default:
      return state
  }
}

export default series