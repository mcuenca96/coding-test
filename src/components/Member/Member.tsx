import * as React from 'react'
import { withStyles } from '@material-ui/core'

import { type Props } from './types'
import styles from './styles'

const Member = ({ member, classes }: Props) => (
  <div className={classes.root}>
    <p>{member.name}</p>
  </div>
)

export default withStyles(styles)(Member)
