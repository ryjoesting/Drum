import './App.css';
import Drum from './Drum';
import { useEffect } from 'react'

const audioClips = [
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n' Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH",
  },
];

function App() {

  const playSoundByKey = (e) => {
    const soundClipObj = audioClips.find( (clip) => clip.keyTrigger === e.key.toUpperCase());
    if (!soundClipObj) {console.log('soundClipObj not found'); return;}
    document.getElementById(soundClipObj.keyTrigger).play().catch(console.error);
    document.getElementById('display').innerText = soundClipObj.description;
    document.getElementById('drum-' + soundClipObj.keyTrigger).focus();
  }

  useEffect( () => {
    document.addEventListener('keydown', playSoundByKey)
  } ,[]);

  return (
    <div className='container' id='drum-machine' onKeyDown={playSoundByKey}>
      <h1>Play the drum machine!</h1>
      <h3><em>Tap, or use keyboard</em></h3>
      <div className='drum-grid'>
        {audioClips.map( (clipObj) => (<Drum audioClipObj={clipObj} key={clipObj.keyTrigger}/>))}
      </div>
      <h2 id='display'></h2>
    </div>
  );
}

export default App;
