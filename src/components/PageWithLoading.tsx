import { useEffect, useState } from "react";
import Loading from "../pages/Loading";

type Props = {
  background?: string;
  onLoad?: () => Promise<void>;
  children: React.ReactNode;
};

function PageWithLoading({ background, onLoad, children }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEverything = async () => {
      try {
        if (background) {
          await new Promise<void>((resolve) => {
            const img = new Image();
            img.src = background;
            img.onload = () => resolve();
          });
        }

        if (onLoad) {
          await onLoad();
        }
      } finally {
        setLoading(false);
      }
    };

    loadEverything();
  }, [background, onLoad]);

  if (loading) return <Loading />;

  return <>{children}</>;
}

export default PageWithLoading;
