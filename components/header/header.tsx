import MaxWidthContent from '../max-width-content'
import HeaderLogo from './header-logo'
import Navigation from './navigation'
import HeaderAction from './header-action'

const Header = ({ className }: { className?: string }) => {
  return (
    <nav className="bg-white sticky z-50 top-0 w-full min-h-[64px]">
      <MaxWidthContent className="py-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <HeaderLogo />
          <Navigation />
        </div>
        <div className="flex-1 flex items-center gap-4 justify-end ml-8">
          <HeaderAction />
        </div>
      </MaxWidthContent>
    </nav>
  )
}

export default Header
