import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center p-4">
      <h1 className="text-4xl m-2">404 - Page Not Found</h1>
      <p className="pt-4">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button onClick={() => navigate("/")} className="mt-4">
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
