import { useEffect, useState } from 'react'
import { initSeries, initSeriesCard } from '../actions/series'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../components/card'

const CardContainer = () => {
  const cards = useSelector(state => state.series.cards)
  const dispatch = useDispatch()

  return (
    <>
      {cards.map(e => (
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
        />
      ))}
    </>
  )
}

export default CardContainer
