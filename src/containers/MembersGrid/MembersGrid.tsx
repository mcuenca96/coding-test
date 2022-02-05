import * as React from 'react'
import fetch from 'isomorphic-fetch'

import MembersGridComponent from '../../components/MembersGrid'

const MembersGrid = () => {
  React.useEffect(() => {
    fetch('http://localhost:5000/api/v1/members').then(async response => {
      const data = await response.json()
      console.log(response)
    })
  }, [])

  return <MembersGridComponent />
}
export default MembersGrid
