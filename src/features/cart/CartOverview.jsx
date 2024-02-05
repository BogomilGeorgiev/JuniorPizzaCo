import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getTotalCartQuantity, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../helpers';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="flex items-center justify-between bg-stone-400
     px-4 py-4 text-sm uppercase sm:px-6 md:text-base"
    >
      <p className="space-x-4 font-semibold text-stone-800 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
