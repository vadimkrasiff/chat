import style from "./AudioMessage.module.scss";
import readedImage from "./../ChatListItem/assests/readed.svg";
import noReaded from "./../ChatListItem/assests/noReaded.svg";
import dayjs from "dayjs";
import { isEmpty } from "lodash";
import voiceSVG from "./assests/voice.svg";
import { Button } from "ui-kit";
import classNames from "classnames";

import {
  CaretRightOutlined,
  PauseCircleTwoTone,
  PlayCircleFilled,
  PlayCircleOutlined,
  PlayCircleTwoTone,
  PlaySquareOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";

interface MessageProps {
  message: any;
}

const AudioMessage = ({ message }: MessageProps) => {
  const { isMe, unread, attachments, created_at, audio } = message;
  const [isPlay, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<any>(null);

  const convertCurrentTime = (number: number) => {
    const mins = Math.floor(number / 60);
    const secs = Number((number % 60).toFixed());
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const togglePlay = () => {
    if (!isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    console.log(audioRef);
    audioRef.current.addEventListener(
      "playing",
      () => {
        setPlay(true);
      },
      false
    );
    audioRef.current.addEventListener(
      "ended",
      () => {
        setPlay(false);
        setProgress(0);
      },
      false
    );
    audioRef.current.addEventListener(
      "pause",
      () => {
        setPlay(false);
      },
      false
    );
    audioRef.current.addEventListener(
      "timeupdate",
      () => {
        const duration = audioRef.current.duration || 0;
        setCurrentTime(audioRef.current.currentTime);
        setProgress((audioRef.current.currentTime / duration) * 100);
      },
      false
    );
  }, []);

  return (
    <>
      <div className={isMe ? style.myMessage : style.theirMessage}>
        <audio src={"http://localhost:3000" + audio.url} ref={audioRef}></audio>
        <div className={style.messageBody}>
          <div
            className={style.audioProgress}
            style={{ width: `${progress}%` }}
          ></div>
          <div
            onClick={() => togglePlay()}
            className={classNames(style.buttonVoice, {
              [style.play]: isPlay,
            })}
          >
            {isPlay ? (
              <PauseCircleTwoTone
                twoToneColor={"#6184f8"}
                style={{ fontSize: 40 }}
              />
            ) : (
              <PlayCircleTwoTone
                twoToneColor={"#6184f8"}
                style={{ fontSize: 40 }}
              />
            )}
          </div>
          <img src={voiceSVG} alt="" />
          <span className={style.time}>{convertCurrentTime(currentTime)}</span>
          <div className={style.statusMessage}>
            {!isMe ? "" : <img src={!unread ? readedImage : noReaded} />}
            {dayjs(created_at).format("HH:mm")}
          </div>
        </div>
      </div>
    </>
  );
};

export default AudioMessage;
