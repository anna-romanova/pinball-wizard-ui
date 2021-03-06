import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }),
);

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <NavLink exact to="/">
            <ListItem button key={"Game of Thrones"}>
              {/* <ListItemIcon><InboxIcon /></ListItemIcon> */}
              <ListItemText primary={"Game of Thrones"}>
              </ListItemText>
            </ListItem>
          </NavLink>
          <NavLink exact to="/">
            <ListItem button key={"Lord of the Rings"}>
              {/* <ListItemIcon><MailIcon /></ListItemIcon> */}
              <ListItemText primary={"Lord of the Rings"}>
              </ListItemText>
            </ListItem>
          </NavLink>
        </List>
        <Divider />
        <List>
          <NavLink exact to="/users">
            <ListItem button key={"Users"}>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText primary={"Users"} />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </div>
  );
}
