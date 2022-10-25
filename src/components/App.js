import Layout from "./Layout";
import Home from "./Pages/Home";
import "../Styles/App.css";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Layout>
      {/* <Home/> */}
      <Signup/>
    </Layout>
  );
}

export default App;