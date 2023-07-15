function VideoPlayer({ videoUrl } : any) {
  return (
    <div>
      <video controls autoPlay loop muted >
        <source src={videoUrl} type="video/mp4"  />
      </video>
    </div>
  );
}

export default VideoPlayer;
