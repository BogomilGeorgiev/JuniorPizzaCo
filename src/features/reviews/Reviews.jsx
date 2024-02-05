import { useSelector } from 'react-redux';
import { getReviews } from './reviewsSlice';

import RatingComponent from '../../ui/Rating';
import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';
import LinkButton from '../../ui/LinkButton';

function Reviews() {
  const reviews = useSelector(getReviews);
  const avgRating =
    reviews.map((item) => Number(item.rating)).reduce((acc, r) => acc + r, 0) /
    reviews.length;

  return (
    <>
      <div className="ml-4 mt-5">
        <LinkButton to="-1">&larr; Go Back</LinkButton>
      </div>

      <ReviewForm />

      <div className="ml-4 mt-8 flex flex-col items-center justify-center gap-3">
        <p className="text mt-7 font-semibold">
          Our customers gave as an average rating of:{' '}
        </p>
        <span className="items-center font-semibold text-orange-500">
          {avgRating.toFixed(2)}
        </span>
        <RatingComponent size="md" r={avgRating} />
      </div>

      <div className="mb-8 overflow-scroll border-b-4 border-double border-orange-400 px-3 pb-6">
        <ul className="mt-20 divide-y divide-stone-300 px-2">
          {reviews.map((review) => (
            <ReviewItem review={review} key={review.comment} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Reviews;
