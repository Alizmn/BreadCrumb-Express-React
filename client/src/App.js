import "./App.css";
import React, { useState, useEffect } from "react";
import BreadCrumb from "./Components/BreadCrumb";
import axios from "axios";
import { Button, Paper } from "@material-ui/core";

function App() {
  const [dir, setDir] = useState([]);
  const [history, setHistory] = useState(["root"]);
  const [url, setUrl] = useState("http://localhost:3000/path/");

  useEffect(() => {
    axios(url).then((res) => setDir(Object.keys(res.data)));
  }, [url]);

  const handleClick = (event) => {
    // console.log();
    const newDir = event.target.textContent;
    setHistory([...history, newDir]);
    url.includes("?") ? setUrl(url + `&${newDir}`) : setUrl(url + `?${newDir}`);
  };

  return (
    <div className="App">
      <BreadCrumb />
      <Paper className={"container"} elevation={3}>
        {dir.map((folder) => (
          <Button
            key={folder}
            onClick={(event) => handleClick(event)}
            disabled={folder.includes("THIS IS FILE : ")}
          >
            {folder}
          </Button>
        ))}
      </Paper>
    </div>
  );
}

export default App;
