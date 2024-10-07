export enum STORES {
  SCORE = "score",
}

const DB: string = "catwalk";

export const DBConfig = {
  name: DB,
  version: 1,
  objectStoresMeta: [
    {
      store: STORES.SCORE,
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "title", keypath: "title", options: { unique: false } },
        { name: "author", keypath: "author", options: { unique: false } },
      ],
    },
  ],
};
