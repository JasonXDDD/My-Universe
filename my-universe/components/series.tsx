import React from 'react'
import Link from 'next/link'
import styles from '../styles/series.module.sass'

interface SeriesProps {
  name: string
  code: string[]
  id: number
  doSelect: () => void
}

interface SeriesState {}

export class Series extends React.PureComponent<SeriesProps, SeriesState> {
  render () {
    return (
      // <Link href={`/${this.props.id}`} passHref>
      <div className={styles.series} onClick={this.props.doSelect}>
        <h3>{this.props.name}</h3>
        <p>{this.props.code.join(', ')}</p>
      </div>
      // </Link>
    )
  }
}
