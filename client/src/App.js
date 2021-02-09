import "./App.css";
import React, { useState, useEffect } from "react";
import BreadCrumb from "./Components/BreadCrumb";
import axios from "axios";
import { Button, Paper } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  // use for loading animation
  const [wait, setWait] = useState(true);
  // keep info about directory but only the childs
  const [directory, setDirectory] = useState([]);
  // keep track of the link to communicate with backend
  const [link, setLink] = useState(`?${process.env.REACT_APP_ROOT || "root"}`);
  const url =
    `http://localhost:${process.env.REACT_APP_PORT || 3000}/path/` + link;

  useEffect(() => {
    axios(url).then((res) => {
      setWait(false);
      setDirectory(Object.keys(res.data));
    });
  }, [link, url]);

  const handleClick = (event) => {
    const newDirectory = event.target.textContent;

    //  set to show loading circle
    setWait(true);

    setLink(link + `&${newDirectory}`);
  };

  return (
    <div className="App">
      {/* "wait" prop is a way to disable breadcrumb and make it work smoothly.
          But it can be removed and would work completely fine without it */}
      <BreadCrumb
        data={link.replace("?", "").split("&")}
        wait={wait}
        setLink={setLink}
        setWait={setWait}
      />

      <Paper className={"container"} elevation={3}>
        {wait && <CircularProgress disableShrink className={"loading"} />}
        {!wait &&
          directory.map((folder) => {
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
