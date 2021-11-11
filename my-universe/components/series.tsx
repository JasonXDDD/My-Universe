import React from 'react'
import Link from 'next/link'
import styles from '../styles/series.module.sass'

interface SeriesProps {
  name: string
  code: string[]
  id: number
}

interface SeriesState {}

export class Series extends React.Component<SeriesProps, SeriesState> {
  render () {
    return (
      <Link href={`/${this.props.id}`} passHref>
        <a className={styles.series}>
          <h3>{this.props.name}</h3>
          <p>{this.props.code.join(', ')}</p>
        </a>
      </Link>
    )
  }
}
