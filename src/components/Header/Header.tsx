import React from 'react'
import { withStyles } from '@material-ui/core'

import styles from './styles'
import { type Props } from './types'

const Header = ({ children, classes }: Props) => {
  return <header className={classes.root}>{children}</header>
}

export default withStyles(styles)(Header)
