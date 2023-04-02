'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useCallback, useContext } from 'react'
import { AppContext } from './context'

const SearchBar = () => {
  const searchInput = useCallback((inputElement: any) => {
    if (inputElement) {
      inputElement.focus()
    }
  }, [])

  const { setWord } = useContext(AppContext)

  return (
    <div className="relative">
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <MagnifyingGlassIcon className="w-8 h-8 text-violet-400" />
      </div>
      <input
        className="w-full bg-gray-200 px-2 py-3 rounded-md"
        type="text"
        placeholder="Type a word..."
        ref={searchInput}
        onKeyDown={({ key, currentTarget }) => {
          if (key === 'Enter') {
            setWord(currentTarget.value)
          }
        }}
      />
    </div>
  )
}

export default SearchBar
