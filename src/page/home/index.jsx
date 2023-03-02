import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { Delete, Edit, Save } from "@mui/icons-material";

function CrudTable() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      type: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      type: "Admin",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      type: "Farmer",
    },
    {
      id: 4,
      name: "John Doe",
      email: "johndoe@example.com",
      type: "Farmer",
    },
    {
      id: 5,
      name: "Jane Smith",
      email: "janesmith@example.com",
      type: "Customer",
    },
    {
      id: 6,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      type: "Customer",
    },
    {
      id: 7,
      name: "Jane Smith",
      email: "janesmith@example.com",
      type: "Customer",
    },
    {
      id: 8,
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      type: "Customer",
    },
  ]);

  const [editableRowId, setEditableRowId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleEdit = (rowId) => {
    setEditableRowId(rowId);
    const rowToEdit = data.find((row) => row.id === rowId);
    setNewName(rowToEdit.name);
    setNewEmail(rowToEdit.email);
  };

  const handleSave = (rowId) => {
    const updatedData = data.map((row) => {
      if (row.id === rowId) {
        return { ...row, name: newName, email: newEmail, type: newType };
      }
      return row;
    });
    setData(updatedData);
    setEditableRowId(null);
  };

  const handleDelete = (rowId) => {
    const updatedData = data.filter((row) => row.id !== rowId);
    setData(updatedData);
  };

  return (
    <>
      <Button
        sx={{
          marginBottom: 2,
        }}
        variant="contained"
        onClick={() =>
          setData([...data, { id: data.length + 1, name: "", email: "" }])
        }
      >
        Add User
      </Button>
      <div style={{ height: "500px", overflow: "auto" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }}>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    {editableRowId === row.id ? (
                      <TextField
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                      />
                    ) : (
                      row.name
                    )}
                  </TableCell>
                  <TableCell>
                    {editableRowId === row.id ? (
                      <TextField
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                      />
                    ) : (
                      row.email
                    )}
                  </TableCell>
                  <TableCell>
                    {editableRowId === row.id ? (
                      <TextField
                        value={newType}
                        onChange={(e) => setNewEmail(e.target.value)}
                      />
                    ) : (
                      row.type
                    )}
                  </TableCell>
                  <TableCell>
                    {editableRowId === row.id ? (
                      <IconButton onClick={() => handleSave(row.id)}>
                        <Save />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => handleEdit(row.id)}>
                        <Edit />
                      </IconButton>
                    )}
                    <IconButton onClick={() => handleDelete(row.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default CrudTable;
