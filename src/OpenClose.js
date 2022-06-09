export default function OpenClose({ zooIsOpen }) {
  return (
    <div style={{ height: '500px' }}>
      {
        zooIsOpen
          ? <img className='gate' src='/images/open-sign.jpg' alt='Jurassic Park gates open' />
          : <img className='gate' src='/images/closed-sign.jpg' alt='JurassicPark gates closed' />
      }
    </div>
  );
}