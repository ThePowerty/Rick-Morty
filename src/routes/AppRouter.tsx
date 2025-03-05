import { ReactNode, useContext } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { CharactersContainer } from "../characters/CharactersContainer"
import { AuthContainer } from "../auth/AuthContainer"
import { AuthContext } from "../auth/context/AuthContext"

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { state } = useContext(AuthContext)

  return state.isAuthenticated ? <>{children}</> : <Navigate to="/" />;
}

export const AppRouter = () => (
  <Routes>
    <Route path="/*" element={<AuthContainer />} />
    <Route path="/characters" element={<PrivateRoute><CharactersContainer /></PrivateRoute>} />
  </Routes>
)