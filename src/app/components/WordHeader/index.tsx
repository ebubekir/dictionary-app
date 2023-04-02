import AudioPlayer from './AudioPlayer'
import Word from './Word'

const WordHeader = () => (
  <div className="flex justify-between items-center">
    <Word />
    <AudioPlayer />
  </div>
)

export default WordHeader
