import * as React from 'react'
import fetch from 'isomorphic-fetch'

import MembersGridComponent from '../../components/MembersGrid'
import LinearProgress from '../../components/LinearProgress'
import Button from '../../components/Button'
import Member from '../../containers/Member'

import { type Member as Member$Type } from './types'

const MembersGrid = () => {
  const [page, setCurrentPage] = React.useState<number>(1)
  const [members, setMembers] = React.useState<Member$Type[]>([])
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

  return (
    <React.Fragment>
      <MembersGridComponent
        members={members}
        Member={Member}
        loadMore={React.useMemo(
          () =>
            loading ? (
              <LinearProgress />
            ) : (
              <Button onClick={() => setCurrentPage(page + 1)}>
                Load more members
              </Button>
            ),
          [loading]
        )}
      />
    </React.Fragment>
  )
}
export default MembersGrid
