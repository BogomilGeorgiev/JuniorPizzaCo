import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-orange-400 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' py-2 px-4 md:px-5 md:py-2.5 text-xs',
    round: base + ' py-1 px-2.5 md:px-3.5 md:py-2 text-sm',
    secondary:
      'px-4 py-2.5 text-sm md:px-6 text-stone-400 md:py-3.5 inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
