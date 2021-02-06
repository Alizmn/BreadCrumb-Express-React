import "./App.css";
import React, { useState, useEffect } from "react";
import BreadCrumb from "./Components/BreadCrumb";
import axios from "axios";
import { Button, Paper } from "@material-ui/core";

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/path").then((res) =>
      setState(Object.keys(res.data))
    );
  }, []);
  return (
    <div className="App">
      <BreadCrumb />
      <Paper className={"container"} elevation={3}>
        {state.map((key) => (
          <Button>{key}</Button>
        ))}
      </Paper>
    </div>
  );
}

export default App;
