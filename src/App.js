import './App.css';
import { useState } from 'react';
import OpenClose from './OpenClose.js';
import DinosaurList from './DinosaurList.js';
import useSound from 'use-sound';
import jpark from './jpark.wav';
import ZooButton from './ZooButton.js';


function App() {
  const [zooIsOpen, setZooIsOpen] = useState(false);
  const [dinosaurs, setDinosaurs] = useState(['Tyrannosaurus Rex', 'Spinosaurus', 'Velociraptor', 'Dilophosaurus']);
  const [tRexSize, setTRexSize] = useState(25);
  const [velociraptorSize, setVelociraptorSize] = useState(25);
  
  return (
    <div className="App" style={{ backgroundImage: 'url(/images/background.jpg)' }}>
      <div className='fight'>
        <div className='fighter'>
          <button onClick={() => setVelociraptorSize(velociraptorSize + 10)}>Grow Velociraptor</button>
          <button onClick={() => setVelociraptorSize(velociraptorSize - 10)}>Shrink Velociraptor</button>
          <img src='/images/velociraptor.png' style={{ height: `${velociraptorSize * 5}px` }} alt='Velociraptor' className='velociraptor' />
          <div>
          </div>
        </div>
        <div className='fighter'>
          <button onClick={() => setTRexSize(tRexSize + 10)}>Grow T-Rex</button>
          <button onClick={() => setTRexSize(tRexSize - 10)}>Shrink T-Rex</button>
          <img src='/images/T-rex.png' style={{ height: `${tRexSize * 5}px` }} alt='T-rex' className='t-rex' />
        </div>
      </div>
      <OpenClose zooIsOpen={zooIsOpen} />
      <ZooButton setZooIsOpen={setZooIsOpen} zooIsOpen={zooIsOpen} useSound={ useSound } jpark={ jpark } />
      <DinosaurList dinosaurs={dinosaurs} />
      <button onClick={() => setDinosaurs([...dinosaurs, 'Tyrannosaurus Rex']) }>Add T-Rex</button>
      <button onClick={() => setDinosaurs([...dinosaurs, 'Spinosaurus']) }>Add Spinosaurus</button>
      <button onClick={() => setDinosaurs([...dinosaurs, 'Velociraptor']) }>Add Velociraptor</button>
      <button onClick={() => setDinosaurs([...dinosaurs, 'Dilophosaurus']) }>Add Dilophosaurus</button>
    </div>
  );
}

export default App;
