import Video from "./Video";

const Channel = ({channel}) => {
  return (
    <div>
      <h1>{ channel.items[0].snippet.channelTitle }</h1>
      <div className="videos">
        {channel.items.map(item => (
          <Video key={item.id.videoId} video={item} />
        ))}
      </div>
    </div>
  );
}
 
export default Channel;