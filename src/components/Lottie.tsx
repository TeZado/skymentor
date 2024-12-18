import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

// Define the type for the animationData prop.
interface LottieAnimationProps {
  animationData: object; // or you can use 'Lottie.AnimationItem' if you want to be more specific
}

const LottieAnimation = ({ animationData }: LottieAnimationProps) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Type assertion: Ensure the container is not null
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current as Element, // Assert to 'Element'
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
