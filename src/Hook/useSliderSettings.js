import { useState } from 'react';

function useSliderSettings() {
  const [sliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: false,
  });

  return {
    sliderSettings,
  };
}

export default useSliderSettings;
