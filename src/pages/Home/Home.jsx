import { useState } from 'react';
import Header from '../../components/Header/Header';
import ImgPrev from '../../components/ImgPrev/ImgPrev';

const Home = () => {
  const [name, setName] = useState('usa');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Header />

      <div className="max-w-screen-lg mx-auto ">
        <ImgPrev />
      </div>
    </>
  );
};

export default Home;
