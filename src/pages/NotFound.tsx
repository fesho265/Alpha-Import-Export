import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // If no language prefix, redirect to /en
    if (!location.pathname.match(/^\/(en|ar)/)) {
      navigate("/en", { replace: true });
    }
  }, [location.pathname, navigate]);

  const getHomePath = () => {
    const match = location.pathname.match(/^\/(en|ar)/);
    const lang = match?.[1] || "en";
    return `/${lang}`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href={getHomePath()} className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
