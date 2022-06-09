import './App.css';
import { useState } from 'react';
import RenderRaptors from './renderRaptors.js';
import OpenClose from './OpenClose.js';
import DinosaurList from './DinosaurList.js';

function App() {
  const [zooIsOpen, setZooIsOpen] = useState(false);
  const [dinosaurs, setDinosaurs] = useState(['Tyrannosaurus Rex', 'Spinosaurus', 'Velociraptor', 'Dilophosaurus']);
  const [tRexSize, setTRexSize] = useState(25);
  const [velociraptorCount, setVelociraptorCount] = useState(4);

  return (
    <div className="App">
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
          <img src='/images/T-rex.jpg' style={{ height: `${tRexSize * 5}px` }} alt='T-rex' className='t-rex' />
        </div>
      </div>
      <OpenClose zooIsOpen={zooIsOpen} />
      <button onClick={() => setZooIsOpen(!zooIsOpen)}>Open/close zoo</button>
      <DinosaurList dinosaurs={dinosaurs} />
    </div>
  );
}

export default App;
