export default function RenderDinosaur({ dinosaur }) {
  return (
    <div>
      {
        dinosaur === 'Tyrannosaurus Rex' && <img className='dino' alt='tyrannosaurus rex' src='/images/trex.png' />
      }
      {
        dinosaur === 'Spinosaurus' && <img className='dino' alt='spinosaurus' src='/images/spinosaurus.png' />
      }
      {
        dinosaur === 'Velociraptor' && <img className='dino' alt='velociraptor' src='/images/velociraptor2.jpg' />
      }
      {
        dinosaur === 'Dilophosaurus' && <img className='dino' alt='dilophosaurus' src='/images/dilophosaurus.jpg' />
      }
    </div>
  );
}