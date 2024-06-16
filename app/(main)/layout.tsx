import Header from "@/components/header/Header";

type Props = {
  children: React.ReactNode
}

const MainLayout = ({children}: Props) => {
  return ( 
    <>
      <Header/>
      <main className="mt-[64px]">{children}</main>
    </>
   );
}
 
export default MainLayout;