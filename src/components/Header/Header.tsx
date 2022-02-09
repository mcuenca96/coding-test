import React from 'react'
import { withStyles } from '@material-ui/core'

import styles from './styles'
import { type Props } from './types'

const Header = ({ title, classes }: Props) => {
  return (
    <header className={classes.root}>
      <div className={classes.icon}>
        <h1>MS</h1>
      </div>
      <h1 className={classes.title}>{title || 'Members'}</h1>
    </header>
  )
}

export default withStyles(styles)(Header)
