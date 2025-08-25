function VideoComponent() {
  return (
    <div>
      <h2>Это видео</h2>
      <video width="400" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Ваш браузер не поддерживает видео.
      </video>
    </div>
  );
}

export default VideoComponent;
