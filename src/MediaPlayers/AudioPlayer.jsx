import { ReactAudio } from "reactjs-media";

const AudioPlayer = () => {
    return (
        <>
            <ReactAudio
                src="/audio.mp4"
                poster="/poster.png"
                //you can pass in other props
            />
        </>
    );
};

export default AudioPlayer;