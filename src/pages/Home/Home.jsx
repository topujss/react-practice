import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Model from '../../components/Modal/Modal';
import Title from '../../components/Title/Title';

export default function Home() {
  const [modal, setModal] = useState(false);

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
      </section>
    </>
  );
}
