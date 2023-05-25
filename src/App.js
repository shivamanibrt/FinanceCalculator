import './App.css';

import { Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import { Home } from './Components/Home';
import { About } from './Components/About';

function App() {

  return (
    <div className="wrapper">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
