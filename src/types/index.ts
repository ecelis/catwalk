import { Instruments } from "./music";

type Score = {
  eScore: string | null;
  measure: {
    barNotes: number;
    noteCount: number;
  };
  tempo: number;
  bars?: string;
  instruments?: Instruments[];
};

export type { Score };
