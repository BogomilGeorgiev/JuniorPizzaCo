import { Carousel } from 'flowbite-react';

function CarouselComp({ images }) {
  return (
    <div className="h-56 sm:h-64 xl:h-60 2xl:h-60">
      <Carousel slideInterval={4000} className="mt-7">
        {images.map((image) => (
          <img className="" src={image} alt={'img'} key={image} />
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComp;
