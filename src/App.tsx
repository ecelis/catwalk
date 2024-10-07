import React, { useEffect, useRef, useState } from "react";
import { Vex, Stave, StaveNote, Formatter } from "vexflow";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "./components/Navigation";

const VF = Vex.Flow;
console.log("VexFlow Build: " + JSON.stringify(VF.BUILD));
const notes = [
  new StaveNote({ keys: ["c/4"], duration: "q" }),
  new StaveNote({ keys: ["d/4"], duration: "q" }),
  new StaveNote({ keys: ["b/4"], duration: "qr" }),
  new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
];

const stave = new Stave(10, 0, 190);

function App() {
  const vfRef = useRef(null);

  useEffect(() => {
    if (vfRef) {
      console.log(vfRef);
      // const div: string | HTMLCanvasElement | HTMLDivElement = document.getElementById("vf") as HTMLDivElement;
      const renderer = new VF.Renderer(
        vfRef.current as unknown as HTMLDivElement,
        VF.Renderer.Backends.SVG
      );
      renderer.resize(200, 200);
      const context = renderer.getContext();
      context.setFont("Arial", 10);

      // Add a clef and time signature.
      stave.addClef("treble").addTimeSignature("4/4");

      // Connect it to the rendering context and draw!
      stave.setContext(context).draw();
      // Helper function to justify and draw a 4/4 voice.
      Formatter.FormatAndDraw(context, stave, notes);

      // TODO export
      // const doc = new jsPDF();
      // const svgElement = div.childNodes[0];
      // doc.svg(svgElement).then(() => doc.save("score.pdf"));

      // console.log("Saved score.pdf");
    }
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
      <Row>
        <Col>
          <main>
            <div id="vf" ref={vfRef}></div>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
