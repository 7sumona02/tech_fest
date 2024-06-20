import React from 'react'

const Page = ({params}: {params: {eventId: string}}) => {
  return (
    <div>Event Details {params.eventId}</div>
  )
}

export default Page