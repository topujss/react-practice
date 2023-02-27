import './Team.scss';

import Title from '../../components/Title/Title';
import TeamMember from '../../components/TeamMember/TeamMember';
import { team } from '../../faker/team';
import Header from '../../components/Header/Header';

export default function Team({ isLoggedIn }) {
  if (isLoggedIn === true) {
    return (
      <>
        <Header />
        <section className="bg-teal-500 py-14">
          <Title
            title="our team"
            subTitle="Developers, also known as software developers or computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
            divider={true}
          />
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-4 grid-flow-col gap-x-4 my-10 text-center ">
              {team.map((item, index) => (
                <TeamMember team={item} key={index} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <section className="bg-teal-500 py-14">
          <Title title="Please Log In first!" subTitle="Login to see our team" divider={true} />
        </section>
      </>
    );
  }
}
