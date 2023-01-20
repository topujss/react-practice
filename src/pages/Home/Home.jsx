import React from 'react';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

export default function Home() {
  return (
    <>
      <section>
        <Header />
        <Title
          title="our Home page"
          subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
          divider={true}
        />
      </section>
    </>
  );
}
