import * as React from 'react'
import { withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'

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
  <Card className={classes.root}>
    <CardActionArea onClick={handleShowMemberDetails}>
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
    </CardActionArea>
    <MemberDetails
      member={member}
      open={showMemberDetails}
      onClose={handleClose}
    />
  </Card>
)

export default withStyles(styles)(Member)
