import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const LottieAnimation = ({ animationData }) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animationInstance.destroy(); // Clean up on unmount
    };
  }, [animationData]);

  return <div ref={animationContainer} />;
};

export default LottieAnimation;