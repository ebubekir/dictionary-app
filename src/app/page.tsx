import Header from '@/app/components/Header'
import WordTitle from '@/app/components/WordTitle'
import SearchBar from './components/SearchBar'

export default function Home() {
  return (
    <main className="w-1/2 m-auto mt-8 h-auto flex flex-col space-y-8">
      <Header />
      <SearchBar />
      <WordTitle />
    </main>
  )
}
