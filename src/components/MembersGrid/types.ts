import { WithStyles } from '@material-ui/core'
import { type Member } from '../../containers/MembersGrid'

export interface Props extends WithStyles {
  title?: string
  members: Member[]
  loadMore: React.ReactElement<any> 
  Member: React.ComponentType<any>
  MemberProps?: {[key: string] : any}
}
