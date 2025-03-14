import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthContext";
import { AppRouter } from "./routes/AppRouter";
import { ModalProvider } from "./shared/components/modal/context/ModalContext";

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
