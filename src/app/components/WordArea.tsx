'use client'

import { useContext } from 'react'
import { AppContext } from './context'
import LoadingSkeleton from './LoadingSkeleton'
import WordHeader from './WordHeader'
import Meanings from './Meanings'
import SourceList from './SourceList'

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
        <SourceList />
      </>
    )
  }

  return null
}

export default WordArea
