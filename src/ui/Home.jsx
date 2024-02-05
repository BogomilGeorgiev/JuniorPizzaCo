/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router';
import { useSelector } from 'react-redux';
import { getMenu } from '../services/apiRestaurant';
import CreateUser from '../features/user/CreateUser';
import CarouselComp from './Carousel';
import Button from './Button';

function Home() {
  const images = useLoaderData();
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16 sm:text-xl">
      <h1 className="mb-8 text-xl font-semibold md:text-2xl">
        The Best Pizza in Town
        <br />
        <span className="text-orange-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      <div
        className={
          username === '' ? '' : 'flex items-center justify-between gap-3'
        }
      >
        {username === '' ? (
          <CreateUser />
        ) : (
          <>
            <Button type="primary" to="/menu">
              Continue ordering, {username}
            </Button>
            <Button type="primary" to={'/reviews'}>
              Share your feedback
            </Button>
          </>
        )}
      </div>

      <CarouselComp images={images} />
    </div>
  );
}

export default Home;

export async function loader() {
  const data = await getMenu();
  const images = data.map((pizza) => pizza.imageUrl);
  return images;
}
