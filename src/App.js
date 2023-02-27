/**React state management
 * Hook useState /> const [value, set(function)] = useState(initialValue);
 * never use / on nasted route
 */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import InnerMenu from './components/InnerMenu';
import Contact from './pages/Contact/Contact';
import Feature from './pages/Feature/Feature';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Shop from './pages/Shop/Shop';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Team from './pages/Team/Team';

export default function App() {
  const AboutLazy = React.lazy(() => import('./pages/About/About'));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />}>
            <Route
              index
              element={<InnerMenu url="https://www.edureka.co/blog/wp-content/uploads/2018/01/2-2.png" />}
            />
            <Route
              path="python"
              element={
                <InnerMenu url="https://cdn.activestate.com/wp-content/uploads/2021/12/python-coding-mistakes.jpg" />
              }
            />
            <Route
              path="ai"
              element={<InnerMenu url="https://nypost.com/wp-content/uploads/sites/2/2023/01/ai-robots-90.jpg" />}
            />
            <Route
              path="cpp"
              element={
                <InnerMenu url="https://www.techworm.net/programming/wp-content/uploads/2018/09/cpppp-490x490.png" />
              }
            />
            <Route
              path="javascript"
              element={
                <InnerMenu url="https://4.bp.blogspot.com/-s2EhTt57oeU/XHtQtO1QNLI/AAAAAAAANW8/KYkPQEZUyocSpA2RzqCcVt31imXPi63RACLcBGAs/s1600/Free%2BCourses%2Bto%2Blearn%2BJavaScript.jpg" />
              }
            />
          </Route>
          <Route
            path="/about"
            element={
              <React.Suspense fallback={`<h1>Loading...</h1>`}>
                <AboutLazy />
              </React.Suspense>
            }
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:slug" element={<SingleProduct />} />
          <Route path="/team" element={<Team />} isLoggedIn={true} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
