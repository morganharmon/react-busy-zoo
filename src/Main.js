import useSound from 'use-sound';
import jpark from './jpark.wav';
import CustomButton from './CustomButton.js';
import { useState } from 'react';
import OpenClose from './OpenClose.js';
import DinosaurList from './DinosaurList.js';
import ZooButton from './ZooButton.js';

export default function Main() {
  const [zooIsOpen, setZooIsOpen] = useState(false);
  const [dinosaurs, setDinosaurs] = useState(['Tyrannosaurus Rex', 'Spinosaurus', 'Velociraptor', 'Dilophosaurus']);
  const [tRexSize, setTRexSize] = useState(25);
  const [velociraptorSize, setVelociraptorSize] = useState(25);
  return (
    <div>
      <div className='fight'>
        <div className='fighter'>
          <CustomButton onClick={() => setVelociraptorSize(velociraptorSize + 10)}>Grow Velociraptor</CustomButton>
          <CustomButton onClick={() => setVelociraptorSize(velociraptorSize - 10)}>Shrink Velociraptor</CustomButton>
          <img src='/images/velociraptor.png' style={{ height: `${velociraptorSize * 5}px` }} alt='Velociraptor' className='velociraptor' />
          <div>
          </div>
        </div>
        <div className='fighter'>
          <CustomButton onClick={() => setTRexSize(tRexSize + 10)}>Grow T-Rex</CustomButton>
          <CustomButton onClick={() => setTRexSize(tRexSize - 10)}>Shrink T-Rex</CustomButton>
          <img src='/images/T-rex.png' style={{ height: `${tRexSize * 5}px` }} alt='T-rex' className='t-rex' />
        </div>
      </div>
      <OpenClose zooIsOpen={zooIsOpen} />
      <ZooButton CustomButton={CustomButton} setZooIsOpen={setZooIsOpen} zooIsOpen={zooIsOpen} useSound={ useSound } jpark={ jpark } />
      <DinosaurList dinosaurs={dinosaurs} />
      <CustomButton onClick={() => setDinosaurs([...dinosaurs, 'Tyrannosaurus Rex']) }>Add T-Rex</CustomButton>
      <CustomButton title="spinosaurus-button-el" onClick={() => setDinosaurs([...dinosaurs, 'Spinosaurus']) }>Add Spinosaurus</CustomButton>
      <CustomButton onClick={() => setDinosaurs([...dinosaurs, 'Velociraptor']) }>Add Velociraptor</CustomButton>
      <CustomButton onClick={() => setDinosaurs([...dinosaurs, 'Dilophosaurus']) }>Add Dilophosaurus</CustomButton>
    </div>
  );
}