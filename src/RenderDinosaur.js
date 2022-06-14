export default function RenderDinosaur({ dinosaur }) {
  return (
    <div>
      {
        dinosaur === 'Tyrannosaurus Rex' && <img className='dino' src='/images/trex.png' />
      }
      {
        dinosaur === 'Spinosaurus' && <img className='dino' src='/images/spinosaurus.png' />
      }
      {
        dinosaur === 'Velociraptor' && <img className='dino' src='/images/velociraptor2.jpg' />
      }
      {
        dinosaur === 'Dilophosaurus' && <img className='dino' src='/images/dilophosaurus.jpg' />
      }
    </div>
  );
}