'use client'

import React, {useState} from 'react'

const Page = () => {
    const [test, setTest] = useState("second")
  return (
    <div>{test}</div>
  )
}

export default Page