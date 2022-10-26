import Layout from "./Layout";
import Home from "./Pages/Home";
import "../Styles/App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Quiz from "./Pages/Quiz";
import Result from "./Pages/Result";

function App() {
  return (
    <Layout>
      {/* <Home/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Quiz/> */}
      <Result/>
    </Layout>
  );
}

export default App;