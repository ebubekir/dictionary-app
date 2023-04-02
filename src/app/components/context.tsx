'use client'

import React, { createContext, useMemo, useState } from 'react'
import words from 'random-words'
import useSWR from 'swr'
import axios from 'axios'

interface AppContextType {
  word: string
  setWord: Function
  data: any
  isLoading: any
  error: any
  mutate: any
}

interface Props {
  children: React.ReactNode
}

export const AppContext = createContext<AppContextType>({
  word: '',
  setWord: () => {},
  data: null,
  isLoading: false,
  error: null,
  mutate: null,
})

export const AppContextProvider = ({ children }: Props) => {
  const [word, setWord] = useState('')
  const { data, isLoading, mutate, error } = useSWR(
    ['https://api.dictionaryapi.dev/api/v2/entries/en/', word],
    (params: Array<string>) => {
      // eslint-disable-next-line prefer-const
      let [url, w] = params
      if (!w) {
        w = words({ exactly: 1, join: '' })
        setWord(w)
      }
      const REQUEST_URL: string = url + w
      return axios.get(REQUEST_URL).then((res) => res.data[0])
    },
  )

  console.log('data', data)

  const context = useMemo(
    () => ({
      word,
      setWord,
      data,
      isLoading,
      error,
      mutate,
    }),
    [word, isLoading],
  )

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}
