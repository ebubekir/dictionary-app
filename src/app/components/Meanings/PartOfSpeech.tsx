import DefinitionList from './DefinitionList'

interface ItemType {
  partOfSpeech: string
  definitions: Array<string>
  synonyms: Array<string>
  antonyms: Array<string>
}

interface Props {
  item: ItemType
}

const PartOfSpeech = ({ item }: Props) => (
  <div className="flex flex-col space-y-4">
    <div className="flex items-center space-x-2">
      <div>
        <span className="italic font-bold text-2xl">{item.partOfSpeech}</span>
      </div>
      <div className="w-full h-[.1px] bg-gray-200 " />
    </div>
    <DefinitionList definitions={item.definitions} />
  </div>
)

export default PartOfSpeech
