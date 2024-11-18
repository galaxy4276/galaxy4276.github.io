import { useEffect, useState } from "react";

type Layout = "mobile" | "tablet";

export const useLayout = () => {
  const [layout, setLayout] = useState<Layout>("tablet");

  useEffect(() => {
    const resizeCallback = () => {
      if (window.innerWidth > 768) {
        setLayout("tablet");
      } else {
        setLayout("mobile");
      }
    };

    window.addEventListener("resize", resizeCallback);
    return () => window.removeEventListener("resize", resizeCallback);
  }, []);

  return layout;
}