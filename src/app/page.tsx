import Header from '@/app/components/Header'
import SearchBar from './components/SearchBar'
import WordArea from './components/WordArea'

export default function Home() {
  return (
    <main className="w-1/2 m-auto mt-8 h-auto flex flex-col space-y-10">
      <Header />
      <SearchBar />
      <WordArea />
    </main>
  )
}
