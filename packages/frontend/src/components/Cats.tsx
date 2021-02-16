import React from "react";
import { CatsProps } from "./CatsContainer";

export const Cats = ({ cats, loading, error, createCat }: CatsProps) => (
  <ul>
    {loading && <span>Loading...</span>}
    {error && <span>{error}</span>}
    {cats?.map((cat) => (
      <li key={cat.id}>{cat.name}</li>
    ))}
    {cats && (
      <button type="button" onClick={createCat}>
        Create cat
      </button>
    )}
  </ul>
);
