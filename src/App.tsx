import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./pages/Contacts"
import Homepage from "./pages/Homepage"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/contacts' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
