import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import imageData from '../DB';
const Carousell = () => {
  const onChange = (index) => {
    console.log(`Slide changed to: ${index}`);
  };

  const onClickItem = (index) => {
    console.log(`Item clicked: ${index}`);
  };

  const onClickThumb = (index) => {
    console.log(`Thumbnail clicked: ${index}`);
  };
  return (
    <div>
    <Carousel  showStatus={false}  autoPlay={true}  interval={3000} infiniteLoop={true} showArrows={false} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
      {imageData.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
    </div>
  )
}

export default Carousell