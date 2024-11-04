import React, { useState } from 'react';
import Nav from './components/Navigation/Nav';
import Footer from './components/Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Nav user={user} />
      <Outlet context={{ user, setUser }} /> 
      <Footer />
    </div>
  );
}

export default App;
