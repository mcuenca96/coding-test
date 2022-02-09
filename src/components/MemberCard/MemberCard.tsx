import * as React from 'react'
import { withStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import PersonIcon from '@material-ui/icons/Person'

import { type Props } from './types'
import styles from './styles'

const MemberCard = ({ member, showBio, handleClick, classes }: Props) => (
  <Card className={classes.card}>
    <ConditionalCardActionArea
      conditional={!!handleClick}
      wrapper={(children: React.ReactNode) => (
        <CardActionArea onClick={handleClick}>{children}</CardActionArea>
      )}
    >
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
      <CardContent className={classes.cardContent}>
        {typeof member.age === 'number' && (
          <div className={classes.ageContainer}>
            <PersonIcon className={classes.icon} />
            <p>{member.age} years old</p>
          </div>
        )}
        {showBio && (
          <div className={classes.bioDescription}>
            <p>{member.bio}</p>
          </div>
        )}
      </CardContent>
    </ConditionalCardActionArea>
  </Card>
)

export default withStyles(styles)(MemberCard)

const ConditionalCardActionArea = ({
  conditional,
  wrapper,
  children,
}: {
  conditional: boolean
  wrapper: React.Component
  children: React.ReactNode
}) => (conditional ? wrapper(children) : children)
