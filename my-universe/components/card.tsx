import React from 'react'
import Image from 'next/image'
import styles from '../styles/card.module.sass'
interface CardProps {
  cardId: string
  title: string
  cover: string
  cost: number
  level: number
  attack: number
  soul: number
  type: string
  rare: string
  isShow: boolean
}

interface CardState {}

export class Card extends React.PureComponent<CardProps, CardState> {
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
      <div className={`${styles.card} ${this.props.isShow ? '' : styles.hide}`}>
        <div className={styles.cover}>
          <Image
            src={this.props.cover}
            alt={this.props.title}
            layout='fill'
            objectFit='cover'
            priority
            // placeholder='blur'
          />
        </div>
        <div className={styles.cardContent}>
          <p>{this.props.title}</p>
          <small>{this.props.cardId}</small>
          <div className={styles.infoContainer}>
            {info.map(e => (
              <div key={e.name} className={styles.info}>
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
