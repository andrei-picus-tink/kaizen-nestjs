import React, { useState } from "react";
import { CatsProps } from "./CatsContainer";

export const Cats = ({ cats, loading, error, createCat }: CatsProps) => {
  const [createError, setCreateError] = useState<string | undefined>(undefined);
  const [createLoading, setCreateLoading] = useState(false);

  const handleCreate = async () => {
    setCreateLoading(true);

    try {
      await createCat();
    } catch (e) {
      setCreateError(e.message);
    } finally {
      setCreateLoading(false);
    }
  };

  return (
    <ul>
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {cats?.map((cat) => (
        <li key={cat.id}>{cat.name}</li>
      ))}
      {createError && <span>{createError}</span>}
      {cats && (
        <button type="button" onClick={handleCreate} disabled={createLoading}>
          Create cat
        </button>
      )}
    </ul>
  );
};
