import { useNavigate, useRouteError } from "react-router-dom";
import { LinkButton } from "./LinkButton";

function Error() {
  const navigate = useNavigate();
  const errorData = useRouteError();
  console.log(errorData);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorData.data || errorData.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
