import React from "react";
import { Factory } from "vexflow";

type Instruments = ("piano" | "guitar")[] | null;

type StaffPaperProps = {
  vf: Factory | null;
  setVf: React.Dispatch<React.SetStateAction<Factory | null>>;
  eScore: string | null;
  measure: {
    barNotes: number;
    noteCount: number;
  };
  tempo: number;
  bars?: string;
  instruments?: Instruments[];
};

export type { Instruments, StaffPaperProps };
