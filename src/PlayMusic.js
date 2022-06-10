import useSound from 'use-sound';
import jpark from './jpark.wav';

export default function PlayMusic() {
  const [play] = useSound(jpark);
  return (
    <button onClick={play}>
      Play music
    </button>
  );
}