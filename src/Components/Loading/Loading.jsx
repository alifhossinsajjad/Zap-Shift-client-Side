import Lottie from "lottie-react";
import loadingAnimation from "../../assets/json/Loading 40 _ Paperplane.json";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="max-w-sm relative">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          autoplay={true}
          style={{ width: 220, height: 220 }} 
        />
      </div>
    </div>
  );
};

export default Loading;
