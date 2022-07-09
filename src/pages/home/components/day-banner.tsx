import { banner } from "@imgs";
import { Link } from "react-router-dom";

interface PropTypes {
  songInTrack: any;
  song: any;
  onPlayPress(id: string): void;
}

export default function DayBanner(props: PropTypes) {
  if (!props.song) {
    return null;
  }
  function createMarkup() {
    return { __html: props.song.lyrics[0].lyrics };
  }

  // return (
  //   div
  // )

  return (
    <div
      className="w-full my-5"
      style={{
        backgroundImage: `url(${banner})`,
        height: "310px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
        position: "relative",
        borderRadius: "7px",
        // background: "rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="mx-12 w-6/12">
        <div className="bannertext">
          <Link to={`/app/music/${props.song._id}`} className="">
            <p className="pt-12 pb-2 font-med font-bold tracking-wider uppercase text-xs">
              {props.song.author}
            </p>
            <h3 className="text-lg font-bold pb-3">{props.song.title}</h3>
            <div className="">
              <p
                className="text-xss  max-h-[70px] overflow-hidden truncate text-gray-700 tracking-wider font-bold leading-6 uppercase"
                dangerouslySetInnerHTML={createMarkup()}
              ></p>
            </div>
          </Link>

          <button
            onClick={() => props.onPlayPress(props.song._id)}
            className="my-4 bg-black rounded p-2 text-white uppercase font-med"
          >
            {props.songInTrack.id === props.song._id &&
            !props.songInTrack.isPause
              ? "Pause SONG"
              : "PLAY SONG"}
          </button>
        </div>
      </div>

      <div className="bg-error-800 rounded p-1 absolute top-0 right-0">
        <p className="text-white">Hymn of the day</p>
      </div>
    </div>
  );
}
