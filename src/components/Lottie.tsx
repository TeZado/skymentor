"use client";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
// import Lottie from "lottie-react";
interface LottieAnimationProps {
  animationData: object; // Define the type for your animation data
}

const LottieAnimation = ({ animationData }: LottieAnimationProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    style: {
      width: '100%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default LottieAnimation;