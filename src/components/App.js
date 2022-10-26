import Layout from "./Layout";
import Home from "./Pages/Home";
import "../Styles/App.css";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <Layout>
      {/* <Home/> */}
      {/* <Signup/> */}
      <Login/>
    </Layout>
  );
}

export default App;