import Channel from "./Channel";
import useFetch from "./Youtube";

function App() {
  const API_KEY = "AIzaSyDecTcmOhcLQcYTC1SUG_MCGWJZxV2ipGA"
  const { data, isPending, error } = useFetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCO5r_jGIMqxydC9boIsHTRw&maxResults=10&order=date&key=" + API_KEY);
  return (
    <div className="App">
      { isPending && <p>Loading...</p> }
      { error && <p>Error: {error.message}</p> }
      { data && <Channel key={data.items[0].snippet.channelId} channel = {data} /> }
      {console.log(data)}
    </div>
  );
}

export default App;