interface Props {
  text: string
  words: Array<string>
}

const SubText = ({ text, words }: Props) => (
  <div className="flex space-x-6 mt-4">
    <p className="text-gray-400 text-xl">{text}</p>
    <span className="text-violet-400 text-xl font-bold">{words.join(', ')}</span>
  </div>
)

export default SubText
