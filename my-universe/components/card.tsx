import React from 'react'
import styles from '../styles/card.module.sass'
interface CardProps {
  title: string
  description: string
  cover?: string
  link?: string
  tag?: string[]
  onSeriesClick?: any
  isSelect: boolean
}

interface CardState {}

export class Card extends React.Component<CardProps, CardState> {
  render () {
    return (
      <div
        className={[styles.card, this.props.isSelect ? styles.active : ''].join(
          ' '
        )}
        onClick={() => this.props.onSeriesClick(this.props.title)}
      >
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    )
  }
}
