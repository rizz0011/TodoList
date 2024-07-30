import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Calender } from "react-calender-custom-opt";
import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  Paper,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
  root: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  calendar: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #4CAF50",
    marginTop:'10px',
    borderRadius:'10px',
    
  },
  listItemText: {
    flexGrow: 1,
  },
  inputSection: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
});

function TodoList() {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleAdd = (e) => {
    if (!input) {
      alert("Please enter input field!");
      return;
    }
    e.preventDefault();
    setData([...data, input]);
    setInput("");
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleDone = (index) => {
    const newData = data.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setData(newData);
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        What's the Plan for Today?
      </Typography>
      <Typography variant="subtitle1" className={classes.header}>
        Add Your Plan Here
      </Typography>
      <div className={classes.calendar}>
        <Calender
          duration="month"
          direction="row"
          height={80}
          width={80}
          color="royalblue"
          background="skyblue"
        />
      </div>
      <div className={classes.inputSection}>
        <Stack direction="row" spacing={2}>
          <TextField
            value={input}
            onChange={handleChange}
            variant="outlined"
            size="small"
            placeholder="Enter your plan"
          />
          <Button variant="contained" color="primary" onClick={handleAdd}>
            Add
          </Button>
        </Stack>
      </div>
      <List >
        {data.map((item, index) => (
          <ListItem key={index} className={classes.listItem}>
            <Checkbox
              checked={item.done}
              onChange={() => handleDone(index)}
              color="primary"
            />
            <ListItemText
              primary={item}
              style={{ textDecoration: item.done ? "line-through" : "none" }}
              className={classes.listItemText}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleDelete(index)}
            >
              <DeleteIcon size="small" sx={{ color: "red" }} />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
