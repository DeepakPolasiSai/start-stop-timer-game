import Player from './components/Player.jsx';
import TimerChallange from './components/TimerChallange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
    <TimerChallange title='EASY' timer='1'/>
    <TimerChallange title='NOT EASY' timer='5'/>
    <TimerChallange title='GETTING TOUGH' timer='10'/>
    <TimerChallange title='PROS ONLY' timer='15'/>
      </div>
    </>
  );
}

export default App;
