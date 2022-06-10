import './App.css';
import { useState } from 'react';
import RenderRaptors from './RenderRaptors.js';
import OpenClose from './OpenClose.js';
import DinosaurList from './DinosaurList.js';
import useSound from 'use-sound';
import jpark from './jpark.wav';

function ZooButton({ setZooIsOpen, zooIsOpen }) {
  const [play, { stop }] = useSound(jpark, { interrupt: true });
  return (
    <div>
      <button onClick={zooIsOpen ? () => {stop(); setZooIsOpen(!zooIsOpen);} : () => {play(); setZooIsOpen(!zooIsOpen);}}>
      Open/close zoo
      </button>
    </div>
  );
}

function App() {
  const [zooIsOpen, setZooIsOpen] = useState(false);
  const [dinosaurs, setDinosaurs] = useState(['Tyrannosaurus Rex', 'Spinosaurus', 'Velociraptor', 'Dilophosaurus']);
  const [tRexSize, setTRexSize] = useState(25);
  const [velociraptorCount, setVelociraptorCount] = useState(4);
  
  return (
    <div className="App" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <div className='fight'>
        <div className='fighter'>
          <button onClick={() => setVelociraptorCount(velociraptorCount + 1)}>Add Velociraptor</button>
          <button onClick={() => setVelociraptorCount(velociraptorCount - 1)}>Subtract Velociraptor</button>
          <div>
            <RenderRaptors velociraptorCount={ velociraptorCount } />
          </div>
        </div>
        <div className='fighter'>
          <button onClick={() => setTRexSize(tRexSize + 10)}>Grow T-Rex</button>
          <button onClick={() => setTRexSize(tRexSize - 10)}>Shrink T-Rex</button>
          <img src='/images/T-rex.png' style={{ height: `${tRexSize * 5}px` }} alt='T-rex' className='t-rex' />
        </div>
      </div>
      <OpenClose zooIsOpen={zooIsOpen} />
      <ZooButton setZooIsOpen={setZooIsOpen} zooIsOpen={zooIsOpen} />
      <DinosaurList dinosaurs={dinosaurs} />
      <button onClick={() => setDinosaurs([...dinosaurs, 'Tyrannosaurus Rex']) }>Add T-Rex</button>
      <button onClick={() => setDinosaurs([...dinosaurs, 'Spinosaurus']) }>Add Spinosaurus</button>
      <button onClick={() => setDinosaurs([...dinosaurs, 'Velociraptor']) }>Add Velociraptor</button>
      <button onClick={() => setDinosaurs([...dinosaurs, 'Dilophosaurus']) }>Add Dilophosaurus</button>
    </div>
  );
}

export default App;
