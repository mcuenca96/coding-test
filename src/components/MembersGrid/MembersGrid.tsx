import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core'

import styles from './styles'
import { type Props } from './types'

const MembersGrid = ({
  members,
  loadMore,
  Member,
  MemberProps,
  classes,
}: Props) => {
  return members.length ? (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        alignItems="stretch"
      >
        {members.map(member => (
          <Grid
            item
            xs={12}
            md={4}
            key={member.id}
            className={classes.gridItem}
          >
            <Member member={member} {...MemberProps} />
          </Grid>
        ))}
      </Grid>
      {loadMore}
    </div>
  ) : null
}

export default withStyles(styles)(MembersGrid)
