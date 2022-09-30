import { useRouter } from 'next/router'
import React from 'react'

const Docs = () => {
  const router = useRouter()
  const { params = [] } = router.query
  if (params.length === 2) {
    return (
      <h1>
        viewing docs for {params[0]} and {params[1]}
      </h1>
    )
  } else if (params.length === 1) {
    return <h1>Viewing docs for {params[0]}</h1>
  }
  return <h1>Docs Home Page</h1>
}

export default Docs
