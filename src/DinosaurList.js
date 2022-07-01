import RenderDinosaur from './RenderDinosaur.js';

export default function DinosaurList({ dinosaurs }) {
  return (
    <div className='dinoContainer'>
      {
        dinosaurs.map((dinosaur, i) => <RenderDinosaur key={ dinosaur + i } dinosaur = { dinosaur } />)
      }
    </div>
  );
}