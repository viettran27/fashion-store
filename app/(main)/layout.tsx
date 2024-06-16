import Header from '@/components/header/header'

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="mt-[70px]">{children}</main>
    </>
  )
}

export default MainLayout
