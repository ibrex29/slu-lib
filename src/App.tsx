import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
import Home from './pages/Home';
import Layout from './component/layout';
// import About from './pages/About';
// import Library from './pages/Library';
// import Discussions from './pages/Discussions';
// import Message from './pages/Message';
// import NewArrivals from './pages/NewArrivals';
// import TopStories from './pages/TopStories';
// import ContactUs from './pages/ContactUs';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/library" element={<Library />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/message" element={<Message />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/top-stories" element={<TopStories />} />
          <Route path="/contact-us" element={<ContactUs />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
