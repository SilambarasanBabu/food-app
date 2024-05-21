import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className=" bg-green-50 h-screen">
      <h1>Oops!!!</h1>
      <h2>Something went wrong top G</h2>
      <h3>{err.status}</h3>
    </div>
  );
};

export default Error;
