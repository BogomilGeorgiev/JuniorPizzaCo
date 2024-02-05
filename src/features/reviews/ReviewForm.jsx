import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../ui/Button';
import { getUsername } from '../user/userSlice';
import { addReview } from './reviewsSlice';

function ReviewForm() {
  const username = useSelector(getUsername);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      user: username,
      comment: '',
    },
  });

  function onSubmit(data) {
    dispatch(addReview(data));
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-10 my-20 px-10">
      <div className="mb-5 flex flex-col gap-2 pt-10 sm:flex-row sm:items-center">
        <label htmlFor="customer" className="sm:basis-40">
          First Name
        </label>
        <div className="grow">
          <input
            type="text"
            name="user"
            className="input w-full"
            defaultValue={username}
            {...register('user', { required: 'This field is required!' })}
          />
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label htmlFor="comment" className="sm:basis-40">
          Comment
        </label>
        <div className="grow">
          <input
            type="text"
            name="comment"
            className="input w-full"
            {...register('comment')}
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-row sm:gap-[3.3rem]">
          <label htmlFor="rating" className="mr-3 pt-2 text-center sm:mr-0">
            Select score
          </label>
          <select
            name="rating"
            {...register('rating')}
            className="rounded-full border border-none
    border-stone-200 bg-orange-200 px-4 py-1 text-sm
    transition-all duration-300  placeholder:text-stone-400  focus:outline-none
    focus:ring focus:ring-orange-400 md:px-6 md:py-3"
          >
            <option value={1}>1 😖</option>
            <option value={2}>2 😕</option>
            <option value={3}>3 🙂</option>
            <option value={4}>4 😋</option>
            <option value={5}>5 🫠</option>
          </select>
        </div>
        <Button type="small">Submit review</Button>
      </div>
    </form>
  );
}

export default ReviewForm;
