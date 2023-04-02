import { useContext } from 'react'
import { AppContext } from '../context'
import PartOfSpeech from './PartOfSpeech'

const PartOfSpeechList = () => {
  const { data } = useContext(AppContext)
  return (
    <div className="flex flex-col space-y-8">
      {data.meanings.map((item, idx) => (
        <PartOfSpeech key={idx} item={item} />
      ))}
    </div>
  )
}

export default PartOfSpeechList
