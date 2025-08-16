import { Link } from "react-router-dom";

export function Button({
  children,
  disabled,
  to,
  type,
  soldOut,
  onClick,
  cartSize,
}) {
  const base = ` text-sm inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors 
  duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2
  disabled:cursor-not-allowed`;

  const styles = {
    primary: base + ` px-4 py-3 md:px-6 md:py-4`,
    small: base + ` px-4 py-2 md:px-5 md:py-2.5 text-xs`,
    secondary: `text-sm inline-block rounded-full bg-transparent hover:text-stone-800 focus:ring-stone-200  font-semibold uppercase tracking-wide text-stone-800 transition-colors 
    duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring  focus:ring-offset-2 focus:stone-800
    disabled:cursor-not-allowed border-2 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5`,
    round: `rounded-full border-2 border-yellow-400 w-4 disabled:cursor-not-allowed ${
      soldOut === false && "hover:bg-yellow-100 transition-colors duration-300"
    }`,
    round1: `rounded-full border-2 border-yellow-400 w-4 hover:bg-yellow-100 transition-colors duration-300`,
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (soldOut) {
    return (
      <button disabled={soldOut} className={styles[type]}>
        {children}
      </button>
    );
  }

  if (soldOut === false) {
    return (
      <button onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
}
