import React, { useEffect, useRef, useState } from "react";
import { StaffPaperProps } from "../types/music";
import { Vex, EasyScore, System } from "vexflow";

const StaffPaper = ({
  vf,
  setVf,
  eScore,
  measure,
  tempo,
  ...instruments
}: StaffPaperProps) => {
  const vfRef = useRef<HTMLDivElement | null>(null);
  const [score, setScore] = useState<EasyScore | null>(null);
  const [system, setSystem] = useState<System | null>(null);

  useEffect(() => {
    if (vfRef && !vf) {
      setVf(
        new Vex.Flow.Factory({
          renderer: {
            elementId: "vf",
            width: 1200,
            height: 600,
            background: "grey",
          },
        })
      );
    }
    if (vf && (!score || !system)) {
      setScore(vf.EasyScore());
      setSystem(vf.System());
    }
    if (system && score) {
      system
        .addStave({
          voices: [
            score.voice(score.notes("C#5/q, B4, A4, G#4", { stem: "up" })),
            score.voice(score.notes("C#4/h, C#4", { stem: "down" })),
          ],
        })
        .addClef("treble")
        .addTimeSignature("4/4");
      vf?.draw();
    }
  }, [vf, score, setVf, system]);
  return <div id="vf"></div>;
};

export default StaffPaper;
