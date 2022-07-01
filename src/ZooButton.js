export default function ZooButton({ setZooIsOpen, zooIsOpen, useSound, jpark, CustomButton }) {
  const [play, { stop }] = useSound(jpark, { interrupt: true });
  return (
    <div>
      <CustomButton title='sign' onClick={zooIsOpen ? () => {stop(); setZooIsOpen(!zooIsOpen);} : () => {play(); setZooIsOpen(!zooIsOpen);}}>
      Open/close zoo
      </CustomButton>
    </div>
  );
}