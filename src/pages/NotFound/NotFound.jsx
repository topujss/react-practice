import { Link } from 'react-router-dom';
import Title from '../../components/Title/Title';

export default function NotFound() {
  return (
    <>
      <section className="w-screen h-full mt-64">
        <Title title="You have land into 404 page" divider={true} />
        <Link className="text-center block" to="/">
          Go back home
        </Link>
      </section>
    </>
  );
}
