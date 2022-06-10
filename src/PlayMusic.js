import useSound from 'use-sound';
import jpark from './jpark.wav';

export default function PlayMusic() {
  const [play, { stop }] = useSound(jpark);
  return (
    <div>
      <button onClick={play}>
      Play music
      </button>
      <button onClick={() => stop()}>
      Stop music
      </button>
    </div>
  );
}