/**React state management
 * Hook useState /> const [value, set(function)] = useState(initialValue);
 */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Shop from './pages/Shop/Shop';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Team from './pages/Team/Team';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:slug" element={<SingleProduct />} />
          <Route path="/team" element={<Team />} isLoggedIn={false} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
