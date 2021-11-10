import React from 'react'
import styles from '../styles/series.module.sass'

interface SeriesProps {
  name: string
  code: string[]
  onSeriesClick: () => void
}

interface SeriesState {}

export class Series extends React.Component<SeriesProps, SeriesState> {
  render () {
    return (
      <div className={styles.series} onClick={this.props.onSeriesClick}>
        <h3>{this.props.name}</h3>
        <p>{this.props.code.join(', ')}</p>
      </div>
    )
  }
}
