import Link from 'next/link'

const HeaderLogo = () => {
  return (
    <div className="hidden md:block">
      <Link href={'/'}>
        <div className="text-2xl font-bold">Shop VM</div>
      </Link>
    </div>
  )
}

export default HeaderLogo
