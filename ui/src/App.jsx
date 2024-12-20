import MediaPlayer from './components/MediaPlayer';
import StaffTeam from './components/StaffTeam';

function Loading() {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://dynorp.eu/images/loading/loading.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/75"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-10 text-white">
          <img className="h-64" src='https://dynorp.eu/images/utils/logo.png' alt="Logo"/>
        </div>
        <div className="absolute z-10 bottom-5 right-5 flex flex-col gap-4 p-4">
          <StaffTeam />
          <MediaPlayer />
        </div>
      </div>
    </>
  );
}

export default Loading;
