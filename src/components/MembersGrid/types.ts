import { WithStyles } from '@material-ui/core'
import { type Member } from '../../containers/MembersGrid'


export interface Props extends WithStyles {
  title?: string
  members: Member[]
  loadMore: JSX.Element
  Member: React.ComponentType<{
    member: Member,
    [key: string]: unknown
  }>
  MemberProps?: {[key: string] : unknown}
}
