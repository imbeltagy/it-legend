'use client';

import { cn } from '@/lib/utils/style';
import useBoolean from '@/lib/hooks/useBoolean';
import { memo, useRef, useState, useEffect } from 'react';

import { Iconify } from '../iconify';

interface VideoProps {
  videoUrl: string;
  isWide: boolean;
  onWideToggle: () => void;
}

const Video = memo(function ({ videoUrl, isWide, onWideToggle }: VideoProps) {
  const { value: isPlaying, toggle: toggleIsPlaying } = useBoolean(false);
  const { value: isMuted, toggle: toggleIsMuted, set: setIsMuted } = useBoolean(false);
  const { value: hasPlayedOnce, set: setHasPlayedOnce } = useBoolean(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { value: isFullScreen, set: setIsFullScreen } = useBoolean(false);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setHasPlayedOnce(true);
      }
      toggleIsPlaying();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const { width } = bounds;
      const percentage = x / width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (videoRef.current) {
      videoRef.current.volume = value;
    }
    setIsMuted(value === 0);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      if (isMuted) {
        videoRef.current.volume = volume;
      } else {
        videoRef.current.volume = 0;
      }
      toggleIsMuted();
    }
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  }, [videoRef.current?.duration]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleFullscreenChange = () => {
        if (document.fullscreenElement === container) {
          setIsFullScreen(true);
        } else {
          setIsFullScreen(false);
        }
      };

      document.addEventListener('fullscreenchange', handleFullscreenChange);
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="group relative flex overflow-hidden rounded-lg bg-black">
      <video
        ref={videoRef}
        poster="/videos/thumbnail.jpg"
        className={cn(
          'w-full cursor-pointer self-center',
          !isFullScreen && isWide ? 'aspect-[21/9]' : 'aspect-video',
          hasPlayedOnce ? 'object-contain' : 'object-cover'
        )}
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Center play button - only shown before first play */}
      {!hasPlayedOnce && (
        <button
          onClick={togglePlay}
          className="text-error absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white py-6 pr-5.5 pl-6.5 text-3xl transition-colors duration-200 hover:opacity-80 md:py-8 md:pr-7.5 md:pl-8.5 md:text-4xl"
        >
          <Iconify icon="solar:play-bold" />
        </button>
      )}

      {/* Controls - only shown after first play */}
      {hasPlayedOnce && (
        <div
          className={cn(
            'absolute right-0 bottom-0 left-0 bg-black/50 p-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100',
            !isPlaying && 'opacity-100'
          )}
        >
          {/* Progress bar */}
          <div
            className="mb-2 h-1 w-full cursor-pointer bg-gray-600 transition-all duration-200 hover:h-2"
            onClick={handleProgressClick}
          >
            <div className="bg-error h-full" style={{ width: `${progress}%` }} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Play/Pause button */}
              <button
                onClick={togglePlay}
                className="cursor-pointer p-2 text-white transition-colors duration-200 hover:text-gray-300"
              >
                {isPlaying ? (
                  <Iconify icon="mynaui:pause-solid" />
                ) : (
                  <Iconify icon="solar:play-bold" />
                )}
              </button>

              {/* Duration display */}
              <span className="text-sm text-white select-none">
                {formatTime(videoRef.current?.currentTime || 0)} / {formatTime(duration)}
              </span>
            </div>

            {/* Volume and view controls */}
            <div className="flex items-center gap-2">
              {/* Volume controls */}
              <div className="flex items-center">
                <button
                  onClick={toggleMute}
                  className="cursor-pointer p-2 text-2xl text-white transition-colors duration-200 hover:text-gray-300"
                >
                  {isMuted ? (
                    <Iconify icon="mingcute:volume-off-fill" />
                  ) : (
                    <Iconify icon="mingcute:volume-fill" />
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="[&::-webkit-slider-thumb]:bg-error [&::-moz-range-thumb]:bg-error w-20 cursor-pointer"
                />
              </div>

              {/* View controls */}
              <div className="flex items-center">
                {/* Wide toggle button - only shown when not in fullscreen */}
                {!isFullScreen && (
                  <button
                    onClick={onWideToggle}
                    className="cursor-pointer p-2 text-2xl text-white transition-colors duration-200 hover:text-gray-300 max-lg:hidden"
                    title={isWide ? 'Normal view' : 'Wide view'}
                  >
                    {isWide ? (
                      <Iconify icon="uil:shrink" />
                    ) : (
                      <Iconify icon="ri:expand-horizontal-fill" />
                    )}
                  </button>
                )}

                {/* Fullscreen button */}
                <button
                  onClick={toggleFullScreen}
                  className="cursor-pointer p-2 text-2xl text-white transition-colors duration-200 hover:text-gray-300"
                  title={isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
                >
                  {isFullScreen ? (
                    <Iconify icon="material-symbols:fullscreen-exit-rounded" />
                  ) : (
                    <Iconify icon="mingcute:fullscreen-fill" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default Video;
