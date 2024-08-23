
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import PasswordRecovery from '../Pages/PasswordRecovery'
import SignUp from '../Pages/SignUp'
import Accueil from '../Pages/Accueil'
import Oui from '../Pages/Oui'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
      <Route path="/password-recovery" element={<PasswordRecovery />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/accueil" element={<Accueil />} />
      <Route path="/oui" element={<Oui  />} />
      </Routes>
    </Router>
  );
}

export default App;
