
import { YoutubePlayer } from "reactjs-media";

const YouTubePlayer = () => {
    return (
        <div>
            <YoutubePlayer
                src="https://youtu.be/UZCO5k1Nu70" // Reqiured
                width={650}
                height={600}
            />
        </div>
    );
};

export default YouTubePlayer;