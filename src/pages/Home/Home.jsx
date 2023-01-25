import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Model from '../../components/Modal/Modal';
import Title from '../../components/Title/Title';

export default function Home() {
  const [modal, setModal] = useState(false);

  const [count, setCount] = useState(0);
  setTimeout(() => {}, 1000);

  const [age, setAge] = useState(0);
  const [year, setYear] = useState(null);

  const handleCheckAge = () => {
    const ageCal = new Date().getFullYear() - age;

    setYear(ageCal);
  };

  useEffect(() => {
    console.log(`Effect affecting`);
  }, [year]);

  return (
    <>
      <section className="text-center">
        <Header />
        <Title
          title="our Home page"
          subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
          divider={true}
        />

        {modal && (
          <Model className="" title="This is the home page" hide={setModal}>
            <>
              <h1>This is Modal header</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eum minima corporis consectetur
                quia sunt harum! Veritatis atque veniam maiores sequi tempora, voluptas laboriosam debitis aut
                doloremque necessitatibus laudantium iste?
              </p>
            </>
          </Model>
        )}
        <button
          className="p-3 bg-green-500 hover:bg-red-600 hover:text-white transition-all duration-300"
          onClick={() => setModal(true)}
        >
          Modal
        </button>
        <div className="counter mt-5">
          <h1 className="text-7xl">{count}</h1>
          <button
            className="p-3 bg-cyan-500 hover:bg-red-600 hover:text-white transition-all duration-300 mr-3"
            onClick={() => setCount(count + 1)}
          >
            Plus
          </button>
          <button
            className="p-3 bg-blue-500 hover:bg-red-600 hover:text-white transition-all duration-300"
            onClick={() => setCount(count - 1)}
          >
            Minus
          </button>
        </div>
        <hr className="border-red-500 border-2 my-10" />
        <div className="age-cal my-10">
          <input
            type="text"
            className="p-3 border-2 border-rose-400 text-rose-800 text-2xl"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Age in years please"
          />
          <button type="submit" className="p-3 bg-blue-500" onClick={handleCheckAge}>
            Submit
          </button>
          {year && <h1 className="mt-5 text-3xl">Your age is {year} years old.</h1>}
        </div>
      </section>
    </>
  );
}
