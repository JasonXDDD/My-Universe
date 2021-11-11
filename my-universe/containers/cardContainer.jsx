import { useEffect, useState } from 'react'
import { initSeries, initSeriesCard } from '../actions/series'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../components/card'
import wrapper from '../reducers'

const CardContainer = () => {
  const cards = useSelector(state => state.series.cards)

  return (
    <>
      {cards
        .filter(e => e)
        .map((e, i) => (
          <Card
            key={e.cardId}
            title={e.title}
            cover={e.cover}
            cost={e.cost}
            level={e.level}
            attack={e.attack}
            soul={e.soul}
            type={e.type}
            rare={e.rare}
            cardId={e.cardId}
          />
        ))}
    </>
  )
}

export default CardContainer
