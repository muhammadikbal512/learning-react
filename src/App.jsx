import Player from "./components/Player.jsx";
import TimerChallange from "./components/TimerChallange.jsx";

const challanges = [
  { id: 1, title: "Easy", targetTime: 1 },
  { id: 2, title: "Not Easy", targetTime: 5 },
  { id: 3, title: "Getting tough", targetTime: 10 },
  { id: 4, title: "Pros only", targetTime: 15 },
];

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {challanges.map((challange) => {
          return (
            <TimerChallange
              key={challange.id}
              title={challange.title}
              targetTime={challange.targetTime}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
