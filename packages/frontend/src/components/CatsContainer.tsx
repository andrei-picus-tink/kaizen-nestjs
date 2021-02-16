import { ReactElement, useEffect, useState } from "react";
import { Cat, CatsService } from "../services/cats";

export type CatsProps = {
  loading: boolean;
  error?: string;
  cats?: Cat[];
  createCat: () => Promise<void>;
};

type Props = {
  service: CatsService;
  children: (props: CatsProps) => ReactElement;
};

export const CatsContainer = ({ children, service }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [cats, setCats] = useState<Cat[] | undefined>(undefined);

  const fetchData = async () => {
    setLoading(true);

    try {
      setCats(await service.fetchCats());
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createCat = async () => {
    await service.postCat();

    await fetchData();
  };

  return children({
    loading,
    cats,
    error,
    createCat,
  });
};
