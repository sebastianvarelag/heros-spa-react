
type props = {
  children: React.ReactNode
}

export const ButtonComponent = ({children}: props) => {
  return (
    <>
      <span className="my-4 p-2 text-sm text-white transition delay-200 border-2 border-transparent rounded-lg bg-slate-600 w-[150px] hover:bg-slate-400">{children}</span>
    </>
  )
}