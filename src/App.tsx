import './App.css';
import AppRoutes from './routes';
import { LoginProvider } from './store/user/provider';

function App() {
  return (
    <LoginProvider>
      <AppRoutes />
    </LoginProvider>
  );
}

export default App;
