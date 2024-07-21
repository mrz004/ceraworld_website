import "./VideoBackground.scss";

function VideoBackground({ src, children }) {
  return (
    <div className="video-bg-container">
      <video autoPlay muted loop className="w-full h-svh object-cover">
        <source src={src} type="video/mp4" />
      </video>
      {children && <div className="overlay text-gray-50">{children}</div>}
    </div>
  );
}

export default VideoBackground;
