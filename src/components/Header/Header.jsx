import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <section className="mb-5 shadow-sm">
        <header className="max-w-screen-xl mx-auto flex justify-between items-center py-5">
          <Link to="/" className="logo">
            <img className="w-52" src="https://download.blender.org/branding/blender_logo.png" alt="" />
          </Link>
          <nav>
            <ul className="flex gap-x-5 text-xl font-light">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/feature">Feature</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Service</NavLink>
              </li>
              <li>
                <NavLink to="/team">Team</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </section>
    </>
  );
}
