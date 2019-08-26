import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing(17),
    overflowX: 'auto',
    margin: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

export default function BookmarkTable(props) {
  const classes = useStyles();
  const { bookmarks } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>My Bookmarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookmarks.map(row => (
            <TableRow key={row.name}>
              <TableCell align="left"><Link to={row.url} >{row.url}</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
