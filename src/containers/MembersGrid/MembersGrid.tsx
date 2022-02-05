import * as React from 'react'
import fetch from 'isomorphic-fetch'

import MembersGridComponent from '../../components/MembersGrid'

import { type Props, type Member } from './types'

const MembersGrid = () => {
  const [page, setCurrentPage] = React.useState<number>(1)
  const [members, setMembers] = React.useState<Member[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:5000/api/v1/members/page/${page}`).then(
      async response => {
        const newMembers = await response.json()
        setMembers([...members, ...newMembers])
        setLoading(false)
      }
    )
  }, [page])

  console.log(members)

  return (
    <React.Fragment>
      <MembersGridComponent
        members={members}
        loadMore={() => setCurrentPage(page + 1)}
      />
      {loading && <p>THIS WILL BE A SPINNER</p>}
    </React.Fragment>
  )
}
export default MembersGrid
