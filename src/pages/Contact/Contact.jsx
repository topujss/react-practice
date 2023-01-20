import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

export default function Contact() {
  return (
    <>
      <section>
        <Header />
        <Title
          title="our Contact page"
          subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
          divider={true}
        />
      </section>
    </>
  );
}
