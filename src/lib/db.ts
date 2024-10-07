export enum STORES {
  SCORE = "score",
}

const DB: string = "catwalk";

export const initDB = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const req: IDBOpenDBRequest = indexedDB.open(DB);
    let version: number = 1;
    let db: IDBDatabase;

    req.onupgradeneeded = () => {
      db = req.result;
      if (!db.objectStoreNames.contains(STORES.SCORE)) {
        console.log("Creating catwalk store");
        db.createObjectStore(STORES.SCORE, { keyPath: "id" });
      }
    };

    req.onsuccess = () => {
      db = req.result;
      version = db.version;
      console.log("Success initDB", version);
      resolve(true);
    };

    req.onerror = () => resolve(false);
  });
};
