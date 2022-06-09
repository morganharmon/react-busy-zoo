export default function OpenClose({ zooIsOpen }) {
  return (
    <div>
      {
        zooIsOpen
          ? <img src='/images/open-sign.jpg' />
          : <img src='/images/closed-sign.jpg' />
      }
    </div>
  );
}