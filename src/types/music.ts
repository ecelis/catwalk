type Instruments = ("piano" | "guitar")[] | null;

type StaffPaperProps = {
  measure: {
    barNotes: number;
    noteCount: number;
  };
  tempo: number;
  bars?: string;
  instruments?: Instruments[];
};

export type { Instruments, StaffPaperProps };
