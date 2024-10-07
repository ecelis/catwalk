import React, { useEffect, useRef, useState } from "react";
import { Factory } from "vexflow";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navigation from "./components/Navigation";
import { DBConfig, DB } from "./lib/db";
import { initDB, useIndexedDB } from "react-indexed-db-hook";
import BottomPanel from "./components/BottomPanel";
import PropertiesPanel from "./components/PropertiesPanel";
import ToolboxPanel from "./components/ToolboxPanel";
import StaffPaper from "./components/StaffPaper";
import Dashboard from "./components/Dashboard";

initDB(DBConfig);

function App() {
  const [vf, setVf] = useState<Factory | null>(null);
  const [storedScores, setStoredScores] = useState<any[]>([]);
  const [currentEScore, setCurrentEScore] = useState<string>("");
  const vfRef = useRef<HTMLElement | null>(null);
  const db = useIndexedDB(DB);

  useEffect(() => {
    if (db) {
      console.log(db);
      getAll();
      // db.getAll().then((scores) => {
      //   setStoredScores(scores);
      // });
    }
  }, []);

  const getAll = async () => {
    setStoredScores(await db.getAll());
  };

  return (
    <Container fluid>
      <Navigation />
      <Row>
        <ToolboxPanel />
        <Col>
          <main ref={vfRef}>
            <Tabs defaultActiveKey="dashboard" id="dashboard" className="mb-3">
              <Tab eventKey="home" title="Home">
                <Dashboard scores={storedScores} />
              </Tab>
              <Tab eventKey="score" title="Score">
                <StaffPaper
                  vf={vf}
                  setVf={setVf}
                  eScore={currentEScore}
                  measure={{ barNotes: 4, noteCount: 4 }}
                  tempo={120}
                />
              </Tab>
            </Tabs>
          </main>
        </Col>
        <PropertiesPanel ctx={{}} />
      </Row>
      <BottomPanel ctx={{}} />
    </Container>
  );
}

export default App;
