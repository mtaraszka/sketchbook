import './App.css';
import AppRoutes from './routes';
import { setAuthToken } from './utils';

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
