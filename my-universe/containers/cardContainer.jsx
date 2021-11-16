import { useEffect, useState, Suspense, SuspenseList } from 'react'
import { initSeries, initSeriesCard } from '../actions/series'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from '../components/card'
import wrapper from '../reducers'

const windowLen = 10

const scrollHandler = (total, showPage, setShowPage) => {
  const cardsHeight = window.document.getElementById('all').offsetHeight
  const windowHeight = window.innerHeight
  const nowScroll = window.pageYOffset

  if (
    cardsHeight - nowScroll - windowHeight < 300 &&
    showPage * windowLen < total
  ) {
    setShowPage(s => s + 1)
    console.log('update! length')
  }
}

const CardContainer = () => {
  const [showPage, setShowPage] = useState(2)
  const cards = useSelector(state => state.series.cards)

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        scrollHandler(cards.length, showPage, setShowPage)
      },
      true
    )

    return () => {
      window.removeEventListener('scroll', scrollHandler, true)
    }
  })

  return (
    <SuspenseList revealOrder='forwards'>
      {cards.map((e, i) => (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Card
            isShow={i < showPage * windowLen}
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
        </Suspense>
      ))}
    </SuspenseList>
  )
}

export default CardContainer
