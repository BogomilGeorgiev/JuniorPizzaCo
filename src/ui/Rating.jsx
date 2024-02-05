import { Rating } from 'flowbite-react';

function RatingComponent({ r, size }) {
  return (
    <Rating size={size}>
      <Rating.Star filled={r >= 1 ? true : false} />
      <Rating.Star filled={r >= 2 ? true : false} />
      <Rating.Star filled={r >= 3 ? true : false} />
      <Rating.Star filled={r >= 4 ? true : false} />
      <Rating.Star filled={r >= 5 ? true : false} />
    </Rating>
  );
}

export default RatingComponent;
