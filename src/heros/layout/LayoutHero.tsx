import { FC } from "react";

type props = {
  title: string;
  children: React.ReactNode
}

export const LayoutHero:FC<props> = ({title, children}) => {
  return (
    <>
      <main className="flex h-full p-4">
        <div className="w-full">
          <div className="flex justify-center w-full">
            <div className="w-fit">
              <h1 className="text-2xl text-slate-600">{title}</h1>
              <hr className="w-full mt-2 mb-4 border-slate-600" />
            </div>
          </div>
          {children}
        </div>
      </main>
    </>
  )
}
