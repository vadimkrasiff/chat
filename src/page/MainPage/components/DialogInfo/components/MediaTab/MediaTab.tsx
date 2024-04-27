import styles from "./MediaTab.module.scss";
import { Image, Video } from "ui-kit";
import ReactPlayer from "react-player";
import video from "./../../../../../../../../../Videos/123.mp4";

const MediaTab = () => {
  const media: any[] = [
    {
      photo:
        "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    },
    {
      photo:
        "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
      video: video,
    },
    {
      photo:
        "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
      video: "https://youtu.be/cz30-BTYsdg",
    },
    {
      photo:
        "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
    },
    {
      photo:
        "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    },
    {
      photo:
        "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
    },
    {
      photo:
        "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    },
    {
      photo:
        "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
    },
    {
      photo:
        "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    },
    {
      photo:
        "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
    },
    {
      photo:
        "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    },
    {
      photo:
        "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
    },
    {
      photo:
        "https://static-cse.canva.com/blob/847132/paulskorupskas7KLaxLbSXAunsplash2.jpg",
    },
    {
      photo:
        "https://mimigram.ru/wp-content/uploads/2020/07/%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-%D1%84%D0%BE%D1%82%D0%BE.jpeg",
    },
  ];

  return (
    <div className={styles.mediaContainer}>
      <div className={styles.mediaWrapper}>
        <Image.PreviewGroup
          preview={{
            imageRender: (imageNode, { current }) => {
              if (media[current].video) {
                return (
                  <ReactPlayer muted controls url={media[current].video} />
                );
              }
              return imageNode;
            },
          }}
        >
          {media.map((item, index) => (
            <Image
              key={`image-${index}`}
              className={styles.image}
              src={item.photo}
            />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default MediaTab;
