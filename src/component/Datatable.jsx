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
import { generateKey } from "../services/generateKey";
import { splitKey, deconstruct, manipulate } from "../services/datatable";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function (props) {
  const { headers = [], data = [], keys = [], actions = [] } = props;

  const hasActions = actions.length > 0;
  if (data.length == 0) {
    return (
      <>
        <h1>No Data</h1>
      </>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
              <StyledTableRow key={generateKey(5)}>
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
                {hasActions > 0 && (
                  <StyledTableCell align="center">
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined primary button group"
                    >
                      {actions.map((action) => (
                        <Button
                          key={generateKey(5)}
                          onClick={() => {
                            action.onClick(row["id"]);
                          }}
                        >
                          {action.title}
                        </Button>
                      ))}
                    </ButtonGroup>
                  </StyledTableCell>
                )}
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
