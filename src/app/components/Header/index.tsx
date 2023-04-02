import ColorMode from './ColorMode'
import Logo from './Logo'

const Header = () => (
  <div className="flex justify-between items-center">
    <Logo />
    <ColorMode />
  </div>
)

export default Header
