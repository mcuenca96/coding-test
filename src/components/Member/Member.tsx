import * as React from 'react'
import { withStyles } from '@material-ui/core'

import MemberCard from '../MemberCard'
import MemberDetails from '../MemberDetails'
import { type Props } from './types'
import styles from './styles'

const Member = ({
  member,
  showMemberDetails,
  handleShowMemberDetails,
  handleClose,
  classes,
}: Props) => (
  <React.Fragment>
    <MemberCard
      member={member}
      handleClick={handleShowMemberDetails}
      classes={{ card: classes.root }}
    />
    <MemberDetails
      member={member}
      open={showMemberDetails}
      onClose={handleClose}
    />
  </React.Fragment>
)

export default withStyles(styles)(Member)
