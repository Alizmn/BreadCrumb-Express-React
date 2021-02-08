import "./App.css";
import React, { useState, useEffect } from "react";
import BreadCrumb from "./Components/BreadCrumb";
import axios from "axios";
import { Button, Paper } from "@material-ui/core";

function App() {
  const [directory, setDirectory] = useState([]);
  const [history, setHistory] = useState(["root"]);
  const [link, setLink] = useState("");

  const url = "http://localhost:3000/path/" + link;

  useEffect(() => {
    axios(url).then((res) => setDirectory(Object.keys(res.data)));
  }, [link, history, url]);

  const handleClick = (event) => {
    const newDirectory = event.target.textContent;
    setHistory([...history, newDirectory]);
    link.includes("?")
      ? setLink(link + `&${newDirectory}`)
      : setLink(link + `?${newDirectory}`);
  };

  return (
    <div className="App">
      <BreadCrumb data={history} setHistory={setHistory} setLink={setLink} />

      <Paper className={"container"} elevation={3}>
        {directory.map((folder) => {
          return (
            <Button
              key={folder}
              onClick={(event) => handleClick(event)}
              disabled={folder.includes("THIS IS FILE : ")}
            >
              {folder}
            </Button>
          );
        })}
      </Paper>
    </div>
  );
}

export default App;
