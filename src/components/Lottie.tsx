'use client'
import { useEffect,useState, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieAnimationProps {
  animationData: object; // Define the type for your animation data
}

const LottieAnimation = ({ animationData }: LottieAnimationProps) => {
  const [isClient, setIsClient] = useState(false); // Track client-side rendering
  const animationContainer = useRef(null);

  useEffect(() => {
    setIsClient(true); // After the component mounts on the client side
  }, []);

  useEffect(() => {
    if (isClient && animationContainer.current) {
      const animationInstance = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        animationInstance.destroy(); // Clean up on unmount
      };
    }
  }, [animationData, isClient]);

  return <div ref={animationContainer} />;
};

export default LottieAnimation;








