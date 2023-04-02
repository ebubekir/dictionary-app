'use client'

import { useContext } from 'react'
import { AppContext } from './context'
import LoadingSkeleton from './LoadingSkeleton'
import WordHeader from './WordHeader'
import Meanings from './Meanings'

const WordArea = () => {
  const { isLoading } = useContext(AppContext)

  if (isLoading) {
    return <LoadingSkeleton />
  }
  if (!isLoading) {
    return (
      <>
        <WordHeader />
        <Meanings />
      </>
    )
  }

  return null
}

export default WordArea
