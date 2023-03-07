import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { generateKey } from "../services/generateKey";
import { splitKey, deconstruct, manipulate } from "../services/datatable";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f8f9fa",
    color: "#212529",
    fontSize: "1.1rem",
    fontWeight: "bold",
    borderBottom: "none",
    borderTop: "none",
    padding: "1.5rem",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "1rem",
    borderBottom: "1px solid #dee2e6",
    padding: "1.2rem",
    textAlign: "center",
  },
}));

export default function (props) {
  const { headers = [], data = [], keys = [], actions = [] } = props;

  const hasActions = actions.length > 0;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2" sx={{ mb: 2 }} align="center">
        Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="cart table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <StyledTableCell key={generateKey(5)} align="center">
                  {header}
                </StyledTableCell>
              ))}
              {hasActions && (
                <StyledTableCell align="center">Actions</StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow key={row.id}>
                  {keys.map((e) => {
                    const { key, operation } = e;
                    const splitted = splitKey(key);
                    const hasOperation = operation;
                    let tempValue = row[key];

                    if (splitted.length > 1)
                      tempValue = deconstruct(splitted, row);

                    return (
                      <StyledTableCell key={generateKey(5)} align="center">
                        {hasOperation
                          ? manipulate(tempValue, row, hasOperation)
                          : tempValue}
                      </StyledTableCell>
                    );
                  })}

                  {hasActions && (
                    <StyledTableCell key={generateKey(5)} align="center">
                      <ButtonGroup
                        variant="contained"
                        aria-label="outlined primary button group"
                      >
                        {actions.map((action) => (
                          <Button
                            key={action.title}
                            onClick={() => {
                              action.onClick(row.id);
                            }}
                            variant={action.variant || "outlined"}
                            color={action.color || "primary"}
                          >
                            {action.title}
                          </Button>
                        ))}
                      </ButtonGroup>
                    </StyledTableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
