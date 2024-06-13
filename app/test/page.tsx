'use client'

import React, {useState} from 'react'

const page = () => {
    const [test, setTest] = useState("second")
  return (
    <div>{test}</div>
  )
}

export default page