import { WithStyles } from '@material-ui/core'

import { type Member } from '../../containers/MembersGrid'

export interface Props extends WithStyles {
  member: Member
  showMemberDetails: boolean 
  handleShowMemberDetails: () => void
  handleClose: () => void
}
