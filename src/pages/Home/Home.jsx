import { useState } from 'react';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

const Home = () => {
  const [name, setName] = useState('usa');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Header />
      <Title
        title="our Home page"
        subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
        divider={true}
      />
      <div className="max-w-screen-lg mx-auto ">
        <div className="show">
          
        </div>
      </div>
    </>
  );
};

export default Home;
