import { useState } from 'react';
import Counter from '../../components/Counter';
import Header from '../../components/Header/Header';

const Home = () => {

  return (
    <>
      <Header />

      <div className="max-w-screen-lg mx-auto ">
        <Counter />
      </div>
    </>
  );
};

export default Home;
