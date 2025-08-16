import { useSelector } from "react-redux";

export function Username() {
  const userName = useSelector(function (state) {
    return state.user.userName;
  });

  if (!userName) {
    return null;
  }

  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}
