import Layout from './Layout';
import Home from './Pages/Home';
import '../Styles/App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from '../context/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
            <Route exact path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route exact path="/quiz/:id" element={<PrivateRoute><Quiz /></PrivateRoute>} />
            <Route exact path="/result/:id" element={<PrivateRoute><Result /></PrivateRoute>} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;