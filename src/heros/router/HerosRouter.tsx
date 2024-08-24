import { Navigate, Route, Routes } from "react-router-dom"
import { DC, Hero, Marvel, Search } from "../pages"
import { Navbar } from "../../ui/components/Navbar"

export const HerosRouter = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/dc" element={<DC />} />
        <Route path="/hero/:id" element={<Hero />} />
        <Route path="/search/" element={<Search />} />

        <Route path='/*' element={<Navigate to={'marvel'} />} />
      </Routes>
    </>
  )
}
