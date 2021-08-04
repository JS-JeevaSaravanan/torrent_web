
import { ReactVideo } from "reactjs-media";

const VedioPlayer = () => {

    return (
        <div>
            <ReactVideo
                src="https://www.example.com/url_to_video.mp4"
                poster="https://www.example.com/poster.png"
                primaryColor="red"
                // other props
            />
        </div>
    );
};

export default VedioPlayer;
