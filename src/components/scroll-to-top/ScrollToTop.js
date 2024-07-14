import { useEffect } from "react";
import { NavigationType, useLocation, useNavigationType } from "react-router-dom";

function ScrollToTop() {
  const useBackButton = () => {
    const navType = useNavigationType();

    return navType === NavigationType.Pop;
  };

  const { pathname } = useLocation();
  const isPop =  useBackButton();
  const scrollToTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    scrollToTop();
  }, [pathname, isPop]);

  useEffect(() => {
    window.addEventListener("beforeunload", scrollToTop);

    return () => {
      window.removeEventListener("beforeunload", scrollToTop);
    }
  }, []);

  return null;
}

export default ScrollToTop;
