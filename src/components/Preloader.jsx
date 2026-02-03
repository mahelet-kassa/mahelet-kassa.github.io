import React, { useEffect, useState } from 'react'

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div id="preloader" style={{ display: isLoading ? 'block' : 'none' }}>
      <div id="loader"></div>
    </div>
  )
}

export default Preloader

