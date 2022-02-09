import * as React from 'react'
import { withStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'

import MemberCard from '../MemberCard'
import { type Props } from './types'
import styles from './styles'

const MemberDetails = ({ open, onClose, member, classes }: Props) => (
  <Dialog open={open} onClose={onClose} className={classes.root}>
    <MemberCard member={member} showBio />
  </Dialog>
)

export default withStyles(styles)(MemberDetails)
