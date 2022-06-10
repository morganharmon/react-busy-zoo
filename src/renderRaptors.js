export default function RenderRaptors({ velociraptorCount }) {
  let raptors = [];
  for (let i = 0; i < velociraptorCount; i++) {
    raptors[i] = <img key={ i } src='/images/velociraptor.png' className='raptor' />;
  }
  return (
    raptors
  );
}