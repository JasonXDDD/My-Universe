import React from 'react'
import styles from '../styles/card.module.sass'
interface CardProps {
  title: string
  cover: string
  cost: number
  level: number
  attack: number
  soul: number
  type: string
  rare: string
}

interface CardState {}

export class Card extends React.Component<CardProps, CardState> {
  render () {
    const info = [
      { name: '類別', value: this.props.type },
      { name: '稀有', value: this.props.rare },
      { name: '等級', value: this.props.level },
      { name: '費用', value: this.props.cost },
      { name: '魂傷', value: this.props.soul },
      { name: '攻擊', value: this.props.attack },
    ]
    return (
      <div className={styles.card}>
        <div
          style={{
            backgroundImage: `url(${this.props.cover})`,
            backgroundPosition: 'center center',
          }}
          className={styles.cover}
        />

        <div className={styles.cardContent}>
          <p className=''>{this.props.title}</p>
          <div className={styles.infoContainer}>
            {info.map(e => (
              <div className={styles.info}>
                <span className={styles.infoTitle}>{e.name}</span>
                {e.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
