import { useState, useEffect, useRef } from "react";
import { FaCirclePlay, FaCirclePause, FaForward, FaBackward } from "react-icons/fa6";
import { ImVolumeLow, ImVolumeMedium, ImVolumeMute2 } from "react-icons/im";
import songs from "../configs/songs.config.js";

function MediaPlayer() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [volume, setVolume] = useState(50);
    const [previousVolume, setPreviousVolume] = useState(68);
    const [isMuted, setIsMuted] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const audioRef = useRef(null);
    const currentSong = songs[currentSongIndex];

    useEffect(() => {
        if (isPlaying && audioRef.current) {
            audioRef.current.play();
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const playNextSong = () => {
        setCurrentSongIndex((prevIndex) => 
            prevIndex === songs.length - 1 ? 0 : prevIndex + 1
        );
    };

    const playPreviousSong = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        );
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value;
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100;
        }
    };

    const renderVolumeIcon = () => {
        if (isMuted || volume === 0) {
            return <ImVolumeMute2 className="text-lg cursor-pointer hover:text-secondary transition ease-in-out" onClick={toggleMute} />;
        } else if (volume > 0 && volume < 50) {
            return <ImVolumeLow className="text-lg cursor-pointer hover:text-secondary transition ease-in-out" onClick={toggleMute} />;
        } else {
            return <ImVolumeMedium className="text-lg cursor-pointer hover:text-secondary transition ease-in-out" onClick={toggleMute} />;
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, currentSongIndex]);

    const handleSongEnd = () => {
        if (songs.length === 1) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            playNextSong();
        }
    };

    const toggleMute = () => {
        if (isMuted) {
            setVolume(previousVolume);
            setIsMuted(false);
            if (audioRef.current) {
                audioRef.current.volume = previousVolume / 100;
            }
        } else {
            setPreviousVolume(volume);
            setVolume(0);
            setIsMuted(true);
            if (audioRef.current) {
                audioRef.current.volume = 0;
            }
        }
    };

    return (
        <div className="p-4 bg-bgMain/40 backdrop-blur-lg w-96 h-40 rounded-lg flex items-center shadow-lg text-white">
            <img
                src={currentSong.albumCover}
                alt="Album Cover"
                className="w-24 h-24 rounded-lg"
            />

            <div className="flex-1 ml-4">
                <div>
                    <h2 className="text-lg font-bold">{currentSong.title}</h2>
                    <p className="text-sm text-gray-300">{currentSong.artist}</p>
                </div>

                <div className="flex items-center mt-3 space-x-4">
                    <FaBackward className="text-2xl cursor-pointer hover:text-secondary transition ease-in-out" onClick={playPreviousSong} />
                    {isPlaying ? (
                        <FaCirclePause className="text-2xl cursor-pointer hover:text-secondary transition ease-in-out" onClick={togglePlayPause} />
                    ) : (
                        <FaCirclePlay className="text-2xl cursor-pointer hover:text-secondary transition ease-in-out" onClick={togglePlayPause} />
                    )}
                    <FaForward className="text-2xl cursor-pointer hover:text-secondary transition ease-in-out" onClick={playNextSong} />
                </div>

                <div className="flex items-center mt-3 space-x-2">
                    {renderVolumeIcon()}
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full h-1 appearance-none rounded-lg bg-gray-300"
                        style={{
                            background: `linear-gradient(to right, #A3CB38 ${volume}%, #ccc ${volume}%)`
                        }}
                    />
                </div>
            </div>

            <audio
                ref={audioRef}
                src={currentSong.audioSrc}
                onEnded={handleSongEnd}
                autoPlay
            />
        </div>
    );
}

export default MediaPlayer;
