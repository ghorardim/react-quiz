import Layout from './Layout';
import Home from './Pages/Home';
import '../Styles/App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from '../context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/quiz" element={<Quiz />} />
            <Route exact path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;