
import './App.css'
import { AuthContextProvider } from './Context/AuthContext'
import AllRoutes from './Routes/AllRoutes'

function App() {
  return (
    <>
       <AuthContextProvider>
        <AllRoutes/>
        </AuthContextProvider>
    </>
  )
}

export default App
