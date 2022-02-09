import { WithStyles } from '@material-ui/core'


export interface Props extends WithStyles {
 onClick: () => void
 children: React.ReactNode
}
