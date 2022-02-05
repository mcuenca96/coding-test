import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'

import styles from './styles'
import { type Props } from './types'

const MembersGrid = ({ classes }: Props) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={12} md={4}>
          1
        </Grid>
        <Grid item xs={12} md={4}>
          2
        </Grid>
        <Grid item xs={12} md={4}>
          3
        </Grid>
      </Grid>
    </div>
  )
}

export default withStyles(styles)(MembersGrid)
