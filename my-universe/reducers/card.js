import actionType from '../actions/actionType'
import * as _ from 'lodash'

// const cardState = {
//   cards: [{cardId: '...'}] // card storage with card objects
//   seriesCard: ['id'] // seriesCard Id from ajax
// }


const updateCards = (state = [], newlist = []) => {
  let res = _.cloneDeep(state)

  newList.forEach((card) => {
    let idx = _.findIndex(res, (o) => o.cardId === card.cardId)
    if (idx !== -1) {
      res[idx] = card
    }
    else res.push(card)
  })

  return res
}

const cards = (state = [], action) => {
  switch (action.type) {
    case actionType.CARD.UPDATE:
      return updateSeries(state, action.cards)

    case actionType.CARD.UPDATE_SERIES:
      return action.cards.map(e => e.cardId) || []

    default:
      return state
  }
}

export default cards