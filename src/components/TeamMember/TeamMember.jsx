import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from 'react-icons/fa';

export default function TeamMember({ team }) {
  const { name, skill, photo, social } = team;
  return (
    <>
      <div className="team-member hover:shadow-lg">
        <img className="rounded-full w-52 h-52 mx-auto object-cover" src={photo} alt="" />
        <div className="team-text p-5">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sky-200">{skill}</p>
          <div className="social">
            <ul className="flex items-center justify-center p-3 gap-2">
              <li>
                {social.fb && (
                  <a
                    href={social.fb}
                    className="inline-block p-2 mb-2 text-white bg-rose-500 font-medium text-base leading-tight rounded-full shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                  >
                    <FaFacebookF />
                  </a>
                )}
              </li>
              <li>
                {social.tw && (
                  <a
                    href={social.tw}
                    className="inline-block p-2 mb-2 text-white bg-rose-500 font-medium text-base leading-tight rounded-full shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                  >
                    <FaTwitter />
                  </a>
                )}
              </li>
              <li>
                {social.li && (
                  <a
                    href={social.li}
                    className="inline-block p-2 mb-2 text-white bg-rose-500 font-medium text-base leading-tight rounded-full shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </li>
              <li>
                {social.in && (
                  <a
                    href={social.in}
                    className="inline-block p-2 mb-2 text-white bg-rose-500 font-medium text-base leading-tight rounded-full shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                  >
                    <FaInstagram />
                  </a>
                )}
              </li>
              <li>
                {social.pi && (
                  <a
                    href={social.pi}
                    className="inline-block p-2 mb-2 text-white bg-rose-500 font-medium text-base leading-tight rounded-full shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                  >
                    <FaPinterestP />
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
