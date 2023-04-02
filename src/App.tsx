import { Route, Routes, Navigate} from "react-router-dom"
import Home from "./components/Home"
import LoggedInPage from "./components/LoggedInPrage"

function App(){
  return <>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/LoggedInPage" element={<LoggedInPage />} />
  </Routes>
  </>
}
export default App
