import * as React from 'react'
import { withStyles } from '@material-ui/core'
import MUIButton from '@material-ui/core/Button'

import { type Props } from './types'
import styles from './styles'

const Button = ({ onClick, children, classes }: Props) => (
  <MUIButton onClick={onClick} className={classes.root}>
    {children}
  </MUIButton>
)

export default withStyles(styles)(Button)
