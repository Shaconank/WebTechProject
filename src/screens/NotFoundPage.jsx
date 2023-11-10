import { useRouteError } from "react-router-dom";
import './NotFoundPage.css'
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container-error">
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, this page does not exist.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
  );
}
