'use client'

import { useContext } from 'react'
import { AppContext } from '../context'

const Word = () => {
  const { word, data } = useContext(AppContext)
  return (
    <div className="flex flex-col space-y-2 w-4/5 ">
      <h1 className="text-6xl font-black text-ellipsiss overflow-hidden">{word}</h1>
      <p className="font-semibold text-violet-400 text-2xl">{data.phonetic}</p>
    </div>
  )
}
export default Word
