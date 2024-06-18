import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
