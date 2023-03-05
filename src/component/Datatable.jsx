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

export default function Datatable(props) {
  const {
    headers = [],
    data = [],
    keys = [],
    hasActions = false,
    actions = [],
  } = props;
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
          {data.map((row) => (
            <StyledTableRow key={generateKey(5)}>
              {keys.map((e) => (
                <StyledTableCell key={generateKey(5)} align="center">
                  {row[e]}
                </StyledTableCell>
              ))}
              {hasActions && (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
