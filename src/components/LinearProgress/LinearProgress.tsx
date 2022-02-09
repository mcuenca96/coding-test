import * as React from 'react'
import MUILinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core'

import { type Props } from './types'
import styles from './styles'

const LinearProgress = ({ classes }: Props) => (
  <MUILinearProgress className={classes.root} />
)

export default withStyles(styles)(LinearProgress)
