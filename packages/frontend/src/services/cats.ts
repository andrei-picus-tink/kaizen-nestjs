export type Cat = { id: number; name: string };

export interface CatsService {
  fetchCats: () => Promise<Cat[]>;
  postCat: () => Promise<Response>;
}

const API_PATH = process.env.NEXT_PUBLIC_API_PATH || "http://localhost:3001";

export const catsService: CatsService = {
  fetchCats: () =>
    fetch(`${API_PATH}/cat`, {
      credentials: "include",
    }).then((r) => {
      if (!r.ok) {
        return Promise.reject(new Error(r.statusText));
      }
      return r.json();
    }),

  postCat: () =>
    fetch(`${API_PATH}/cat`, {
      method: "post",
      credentials: "include",
      body: JSON.stringify({ name: "bibby" }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (!r.ok) {
        return Promise.reject(new Error(r.statusText));
      }
      return r.json();
    }),
};
