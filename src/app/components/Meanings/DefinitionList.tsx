import Definition from './Definition'
import SubText from './SubText'
import { DefinitionType } from './types'

interface Props {
  definitions: Array<DefinitionType>
  synonyms?: Array<string>
  antonyms?: Array<string>
}

const DefinitionList = ({ definitions, synonyms = [], antonyms = [] }: Props) => (
  <div>
    <h3 className="text-gray-500 text-xl font-medium">Meaning</h3>
    <ol className="list-disc pl-8 marker:text-violet-400 space-y-2 mt-2 ">
      {definitions.map((item, idx) => (
        <Definition key={idx} definition={item.definition} />
      ))}
    </ol>
    {synonyms?.length > 0 && <SubText text="Synonyms" words={synonyms} />}
    {antonyms?.length > 0 && <SubText text="Antonyms" words={antonyms} />}
  </div>
)

export default DefinitionList
