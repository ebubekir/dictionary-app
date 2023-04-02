'use client'

import { LinkIcon } from '@heroicons/react/24/outline'
import { useContext } from 'react'
import { AppContext } from './context'

const SourceList = () => {
  const { data } = useContext(AppContext)
  const source = data.sourceUrls[0]

  return (
    <div className="pb-10">
      <div className="w-full h-[.1px] bg-gray-200 " />
      <div className="flex space-x-2 items-center">
        <div className="text-xl mt-4">Source</div>
      </div>
      <a className="underline cursor-pointer flex space-x-2 text-gray-400" href={source}>
        <span>{source}</span>
        <LinkIcon className="w-5 h-5" />
      </a>
    </div>
  )
}
export default SourceList
