import { BookOpenIcon, MoonIcon } from '@heroicons/react/24/outline'

const Header = () => (
  <div className="flex justify-between items-center">
    <div>
      <BookOpenIcon className="text-zink-900 w-12 h-12" />
    </div>
    <div>
      <MoonIcon className="text-zink-900 w-8 h-8" />
    </div>
  </div>
)

export default Header
