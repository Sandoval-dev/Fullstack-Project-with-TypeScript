'use client'
import React, { useEffect, useState } from 'react'

const MountedClient = ({children}: {children : React.ReactNode}) => {
  
    const [mounted, setMounted] = useState(false)

    useEffect(()=> {
      setMounted(true)
    },[])

    if (!mounted) {
        return null
    }

  
    return (
    <div>{children}</div>
  )
}

export default MountedClient