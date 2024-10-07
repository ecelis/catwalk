import React, { useRef, useState } from "react";
import { Factory } from "vexflow";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "./components/Navigation";
import { DBConfig } from "./lib/db";
import { initDB } from "react-indexed-db-hook";
import BottomPanel from "./components/BottomPanel";
import PropertiesPanel from "./components/PropertiesPanel";
import ToolboxPanel from "./components/ToolboxPanel";
import StaffPaper from "./components/StaffPaper";

initDB(DBConfig);

function App() {
  const [vf, setVf] = useState<Factory | null>(null);
  const [currentEScore, setCurrentEScore] = useState<string>("");
  const vfRef = useRef<HTMLElement | null>(null);

  return (
    <Container fluid>
      <Navigation />
      <Row>
        <ToolboxPanel />
        <Col>
          <main ref={vfRef}>
            <StaffPaper
              vf={vf}
              setVf={setVf}
              eScore={currentEScore}
              measure={{ barNotes: 4, noteCount: 4 }}
              tempo={120}
            />
          </main>
        </Col>
        <PropertiesPanel ctx={{}} />
      </Row>
      <BottomPanel ctx={{}} />
    </Container>
  );
}

export default App;
