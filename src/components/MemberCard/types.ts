import { WithStyles } from '@material-ui/core'
import { type Member } from '../../containers/MembersGrid'

export interface Props extends WithStyles {
  showBio?: boolean
  member: Member
  handleClick?: () => void
}
