import * as React from 'react'

import MemberComponent from '../../components/Member'

import { type Props } from './types'

const Member = ({ member }: Props) => {
  const [openDetails, setOpenDetails] = React.useState<boolean>(false)

  return (
    <MemberComponent
      member={member}
      showMemberDetails={openDetails}
      handleShowMemberDetails={() => setOpenDetails(!openDetails)}
      handleClose={() => setOpenDetails(false)}
    />
  )
}

export default Member
