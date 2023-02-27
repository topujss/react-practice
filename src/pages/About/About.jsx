import { useState } from 'react';
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
      <div className="section lazy-load">
        <h1 className="text-center text-2xl my-5">Lazy Load</h1>
        <div className="grid grid-cols-2 gap-5 place-items-center">
          <div className="col-span-1 place-self-center">
            <img className="w-full" src="https://source.unsplash.com/random" alt="img" />
            <h3>Random pic</h3>
            <p>
              Building Amsterdam’s North-South metro line was big trouble – a budget-blowing 15-year operation that
              involved carefully burrowing beneath the foundations of centuries-old architecture. For
              archaeologists tasked with sifting through soft mud to preserve any history disturbed by the massive
              engineering project, it was no easy feat either. Their potentially hazardous work took place inside
              concrete boxes pressurized to keep out deluges from the Dutch capital’s ubiquitous waterways. Today,
              the fruits of their subterranean labors can be seen at Rokin station, one of eight stops on the route
              and one that doubles up as an impressive underground archaeological museum, with nearly 10,000
              artifacts on display. The station, well worth visiting in its own right, is a testament not only to
              the rich heritage on which Amsterdam is built, but also to the engineers and archeologists who worked
              so hard to preserve it. The fruits of their labor are displayed in two glass cases positioned between
              the escalators, one case at either end of the station. On any given day, it’s not unusual to find a
              commuter going up and down the escalators, just to get a better look. Overrun Amsterdam targets sex
              <img className="w-full" src="https://source.unsplash.com/random" alt="img" />
              and drugs tourists with 'stay away' campaign A significant number of these artifacts were found in
              and around Rokin, a neighborhood that lies along the city’s main Amstel river that was at the heart
              of Amsterdam as it developed from the 13th century onwards. Waterways tend to become dumping grounds,
              accumulating objects over the centuries. The Amstel riverbed around Rokin was no different. “The
              sheer mass of material we unearthed during the construction of the North-South line was
              extraordinary,” says Peter Kranendonk, one of two senior archaeologists leading the excavations
              during the metro project. “The construction gave us a unique opportunity to excavate under the city
              up to a depth of 30 meters,” he adds. The oldest items found were mollusc shells dating to over
              115,000 years ago. The artifact displays at Rokin station are organized into various themes. In the
              north display, the focus is on objects related to food, science and technology, arms and armor,
              communication, games and recreation, personal artifacts and clothing; while the south display
              includes items from buildings and structures, interiors and accessories, transport, as well as craft
              and industry. All of these artifacts provide insights into Amsterdam’s glorious, and sometimes
              unknown past. “Some objects, like the 500-year-old coins, have a direct story behind them,” says
              Kranendonk. “On the basis of the finds, we can also say something about the use of an area,” he adds.
              Under pressure Archaeologists worked in pressurized concrete chambers. Archaeologists worked in
              pressurized concrete chambers. Monuments and Archaeology/City of Amsterdam In one spot at Rokin,
              unearthing a concentration of chopped animal bones pointed to the existence of a butchery nearby in
              the 17th and 18th century. At another spot, an abundance of furniture fittings confirmed the presence
              of a furniture maker’s shop in the 19th century. “Prior to the excavation of these artifacts, the
              city had an archaeological archive of only about 70,000 artifacts,” says Hoite Detmar, who served as
              <img className="w-full" src="https://source.unsplash.com/random" alt="img" />
              the director of the North-South metro project from 2016 till its completion. “We found 10 times as
              many during the construction of the North-South line.” Kranendonk elaborates on the rather
              unconventional excavation process behind these finds. “This was not a normal dig,” he says. “Usually,
              excavation is done before building. But in this case, the construction plans were already finalized.
              So we had to become part of the existing process. The civil engineering team were building and we
              were excavating.” For the archaeology team, working in the caissons was a novel experience. A caisson
              is a large watertight concrete chamber, open at the bottom, from which water is kept out by air
              pressure and in which construction work is carried out underground or underwater. Amsterdam has been
              collapsing for years. Now it's paying the price “It was an interesting experience but also a bit
              frightening,” says Kranendonk. “The deeper you go, the more compressed the air gets. It’s like deep
              sea diving,” To acclimatize to the caissons, teams had to spend time in a pressure chamber before
              entering and after exiting, otherwise they’d face risk of “the bends,” when gas bubbles form in the
              body, potentially leading to paralysis. About 700,000 artifacts were recovered beneath Amsterdam.
              About 700,000 artifacts were recovered beneath Amsterdam. Monuments and Archaeology/City of Amsterdam
              <img className="w-full" src="https://source.unsplash.com/random" alt="img" />
              To enable people to engage with the Rokin displays at leisure, an online database of nearly 20,000
              objects, Below the Surface, was created, providing information about every single item in the glass
              cases. “It’s a process of discovery in its own way,” says Kranendonk. A documentary about the
              excavation called “Amstel, Spiegel van de Stad” (Amstel, Mirror of the City) and a beautiful
              coffee-table book, “Amsterdam Stuff” were also created. “We knew we would be working in the city for
              a very long time and would inconvenience citizens a lot,” says Hoite Detmar. “This was one of the
              many ways we gave back to the city.” In addition to the two archaeological displays, the walls of
              Rokin station adjacent to the tracks are covered with stone mosaics by artists Daniel Dewar and
              Grégory Gicquel depicting 33 of the artifacts unearthed – a keyboard, a pike, a teapot, dice, a
              butterfly, among others. There is even a mosaic of a crocodile which represents a crocodile jaw that
              was unearthed, a rather unusual find for this part of the world. An engineering feat The new metro
              line had to burrow beneath ancient city foundations. The new metro line had to burrow beneath ancient
              city foundations. Monuments and Archaeology/City of Amsterdam Hailed as one of the most challenging
              infrastructure projects in the Netherlands, the North-South line was inaugurated in July 2018, with a
              lot of fanfare. The route is six miles long – of which 4.5 miles are underground – and runs under the
              historic city center, the Central train station, and the IJ, a water channel which separates the
              city’s north from its center. The line linked neighborhoods like the northern suburbs (previously
              unconnected by rail) to the city center, eliminating the need to take a ferry across the IJ or to
              drive through the IJ tunnel. It also halved the 30-minute travel time required to traverse the city
              from north to south. Right after the opening of the line, an estimated 120,000 commuters used it
              every day. However, the initial plans for the North-South line were not met with enthusiasm. Public
              resistance to this project was prompted by the traumatic experiences during construction of
              Amsterdam’s first metro, the East Line, in the 1970s. A large part of the Nieuwmarktbuurt
              neighborhood was demolished to make way for the project, leading to anger and riots in 1975. Artwork
              on Rokin station's walls represents objects found in its construction. Artwork on Rokin station's
              walls represents objects found in its construction. Anne Pinto-Rodrigues The construction of the
              North-South line began in 2003, one of its key objectives being to preserve the existing built
              environment. With this in mind, a specific route was chosen and several new construction techniques
              were used, including the deployment of a customized tunnel boring machine, which made it possible to
              dig deep in Amsterdam’s soft soil, without impacting structures above. 'We have nothing to hide' --
              Why Dutch people don't mind you peering into their homes However, public concerns about homes
              collapsing loomed over the project. In June 2008, work came to a grinding halt when four 17th-century
              buildings near Vijzelgracht station sank by about 25 centimeters (10 inches), rendering them
              uninhabitable. “Thankfully, no one was injured,” says Detmar. An independent assessment was conducted
              and work resumed in the summer of 2009. The heritage houses were also restored. The project was beset
              with many engineering challenges that led to the doubling of the construction budget from 1.4 to 3.1
              billion euros. The initial launch date of 2011 was also pushed back to 2018. Despite these
              challenges, the North-South line has functioned smoothly since launch. Detmar says he’s pleased with
              the appreciation the project has received to date, especially for the art at each of the eight
              stations on the new line. Rokin is the highlight. “When I travel to Rokin station, I see people
              really studying the archaeological exhibits,” he says. “I hope more people will take the metro to see
              this underground museum.”
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
