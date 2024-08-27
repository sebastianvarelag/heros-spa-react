
type props = {
  children: React.ReactNode
}

export const ButtonCard = ({children}: props) => {
  return (
    <>
      <button className="p-2 text-2xl text-white transition delay-200 border-2 border-transparent rounded-lg bg-slate-600 w-[150px] hover:bg-slate-400">{children}</button>
    </>
  )
}
