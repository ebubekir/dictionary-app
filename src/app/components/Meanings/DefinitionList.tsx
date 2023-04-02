import Definition from './Definition'

const DefinitionList = () => (
  <div>
    <h3 className="text-gray-500 text-xl font-medium">Meaning</h3>
    <ol className="list-disc pl-8 marker:text-violet-400 space-y-2 mt-2">
      <Definition />
    </ol>
  </div>
)

export default DefinitionList
