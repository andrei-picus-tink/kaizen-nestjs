export type Cat = { id: number; name: string };

export interface CatsService {
  fetchCats: () => Promise<Cat[]>;
  postCat: () => Promise<Response>;
}

export const catsService: CatsService = {
  fetchCats: () =>
    fetch("http://localhost:3001/cats", {
      credentials: "include",
    }).then((r) => r.json()),

  postCat: () =>
    fetch("http://localhost:3001/cats", {
      method: "post",
      credentials: "include",
      body: JSON.stringify({ name: "bibby" }),
      headers: {
        "Content-Type": "application/json",
      },
    }),
};
