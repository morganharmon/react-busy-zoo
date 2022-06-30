export default function ZooButton({ setZooIsOpen, zooIsOpen, useSound, jpark }) {
  const [play, { stop }] = useSound(jpark, { interrupt: true });
  return (
    <div>
      <button title='sign' onClick={zooIsOpen ? () => {stop(); setZooIsOpen(!zooIsOpen);} : () => {play(); setZooIsOpen(!zooIsOpen);}}>
      Open/close zoo
      </button>
    </div>
  );
}