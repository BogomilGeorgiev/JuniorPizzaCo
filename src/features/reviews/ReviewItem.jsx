import RatingComponent from '../../ui/Rating';

function ReviewItem({ review }) {
  return (
    <li key={review.comment}>
      <div className="flex flex-col justify-center gap-3 border-double">
        <span className="border-4 border-double border-orange-400 pl-3 font-semibold">
          {review.user}
        </span>
        <p className="pt-6 text-sm italic sm:text-base">{review.comment}</p>
        <div className="flex justify-end gap-3 pb-2">
          <RatingComponent size="sm" r={Number(review.rating)} />
          <span>{review.rating}</span>
        </div>
      </div>
    </li>
  );
}

export default ReviewItem;
