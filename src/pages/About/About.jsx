import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
import Title from '../../components/Title/Title';

const colorsArray = [
  'rose-900',
  'pink-900',
  'fuchsia-900',
  'purple-500',
  'violet-900',
  'indigo-500',
  'blue-500',
  'sky-500',
  'cyan-500',
  'teal-500',
  'emerald-500',
  'green-500',
  'lime-500',
  'yellow-500',
  'amber-500',
  'orange-500',
  'red-500',
  'zinc-500',
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
    setbg(colorsArray[count]);
  };

  // modal state management
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <section className={`w-screen h-screen ${bg}`}>
        <Header />
        <Title
          title="our About page"
          subTitle="Computer programmers, are responsible for developing, coding, installing, and maintaining software systems."
          divider={true}
        />
        <div className="colors max-w-screen-xl mx-auto">
          <div className="modal-btn text-center">
            {modalShow && (
              <Modal title="Ahmed topu" hide={setModalShow}>
                <>
                  <h1>Im right here</h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore doloremque eveniet nostrum
                    assumenda, sit quo voluptatem nobis officia. Est voluptas maiores illum enim praesentium ipsa?
                    Corrupti praesentium ex veniam modi.
                  </p>
                </>
              </Modal>
            )}
            <button className="p-3 bg-green-700" onClick={() => setModalShow(true)}>
              Modal
            </button>
          </div>
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
