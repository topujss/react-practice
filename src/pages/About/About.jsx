import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

export default function About() {
  // event handler system
  const ClickMe = (e) => {
    console.log(e.target);
    alert('msg');
    prompt('tell me something');
  };

  return (
    <>
      <section>
        <Header />
        <Title
          title="our About page"
          subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
          divider={true}
        />
        <Link to="#" onClick={ClickMe}>
          Show about me
        </Link>
      </section>
    </>
  );
}
