import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/UserName';

function Header() {
  return (
    <header
      className="border-stone-00 flex items-center justify-between
     border-b bg-orange-500 px-4 py-3  uppercase sm:px-6"
    >
      <Link to="/" className="font-semibold tracking-widest">
        Junior&apos;s Pizza Co.
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
