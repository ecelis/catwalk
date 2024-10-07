import React from "react";
import Container from "react-bootstrap/Container";
import { Score } from "../types";

type DashboardProps = {
  scores: Score[];
};

const Dashboard = ({ scores }: DashboardProps) => {
  return (
    <Container>{scores.length > 0 ? <p>si hay</p> : <p>no hay</p>}</Container>
  );
};

export default Dashboard;
