import * as React from 'react'
import { withStyles } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

import { type Props } from './types'
import styles from './styles'

const MemberDetails = ({ open, onClose, member, classes }: Props) => (
  <Dialog open={open} onClose={onClose} className={classes.root}>
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar
            alt={member.name}
            src={typeof member.image === 'string' ? member.image : undefined}
          />
        }
        title={member.name}
      />
      <CardContent>
        <p>{member.age} years old</p>
      </CardContent>
    </Card>
  </Dialog>
)

export default withStyles(styles)(MemberDetails)
