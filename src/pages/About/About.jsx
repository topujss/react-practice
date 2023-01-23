import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';

const colorsArray = [
  'from-rose-900',
  'to-pink-900',
  'from-fuchsia-900',
  'to-purple-500',
  'from-violet-900',
  'to-indigo-500',
  'from-blue-500',
  'to-sky-500',
  'from-cyan-500',
  'to-teal-500',
  'from-emerald-500',
  'to-green-500',
  'from-lime-500',
  'to-yellow-500',
  'from-amber-500',
  'to-orange-500',
  'from-red-500',
  'to-zinc-500',
];

// event handler system
export default function About() {
  // background state management
  const [bg, setbg] = useState('bg-purple-500');

  // background state management
  const [count, setCount] = useState(0);

  // to increment function
  const handleInc = () => {
    setCount(() => setCount(count >= 16 ? 0 : count + 1));
    setbg(colorsArray[count]);
  };

  // to decrement function
  const handleDec = () => {
    setCount(() => setCount(count <= 0 ? 16 : count - 1));
  };

  return (
    <>
      <section className={`w-screen h-screen bg-gradient-to-r ${bg}`}>
        <Header />
        <Title
          title="our About page"
          subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
          divider={true}
        />
        <div className="colors max-w-screen-xl mx-auto">
          <div className="counter text-center text-white">
            <h1 className={`text-7xl ${count === 16 ? 'text-black' : 'text-white'}`}>{count}</h1>
            <button className="bg-green-800 px-3 py-2 mr-5 mt-5" onClick={handleInc}>
              Plus
            </button>
            <button className="bg-red-800 px-3 py-2" onClick={handleDec}>
              Minus
            </button>
          </div>
          <button className="p-3 bg-slate-100" onClick={() => setbg('bg-red-500')}>
            Red
          </button>
          <button className="p-3 bg-slate-100 mx-3" onClick={() => setbg('bg-green-500')}>
            Green
          </button>
          <button className="p-3 bg-slate-100" onClick={() => setbg('bg-blue-500')}>
            Blue
          </button>
          <button className="p-3 bg-slate-100 mx-3" onClick={() => setbg('bg-cyan-500')}>
            Cyan
          </button>
          <button className="p-3 bg-slate-100" onClick={() => setbg('bg-purple-500')}>
            Purple
          </button>
        </div>
      </section>
    </>
  );
}
