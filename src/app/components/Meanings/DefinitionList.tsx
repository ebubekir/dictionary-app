import Definition from './Definition'

interface DefinitionType {
  definition: string
  synonymus: Array<string>
  antonyms: Array<string>
}

interface Props {
  definitions: Array<DefinitionType>
}

const DefinitionList = ({ definitions }: Props) => (
  <div>
    <h3 className="text-gray-500 text-xl font-medium">Meaning</h3>
    <ol className="list-disc pl-8 marker:text-violet-400 space-y-2 mt-2 ">
      {definitions.map((item, idx) => (
        <Definition key={idx} definition={item.definition} />
      ))}
    </ol>
  </div>
)

export default DefinitionList
