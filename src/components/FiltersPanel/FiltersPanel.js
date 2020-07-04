import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import RangeSlider from '../RangeSlider/RangeSlider';
import ProductsFilters from '../ProductsFilters/ProductsFilters';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

      <ProductsFilters
        minPriceSlider={props.minPriceSlider}
        maxPriceSlider={props.maxPriceSlider}
        renderManufacturers={props.renderManufacturers}
        search={props.search}
        selectManufacturer={props.selectManufacturer}
        sortItems={props.sortItems}
        setMaxPrice={props.setMaxPrice}
      />

    </div>
  );

  const anchorName = 'Фільтри';
  const anchorState = 'left';

  return (
    <div className="products-filters-button">
      <React.Fragment key={anchorState}>
        <Button onClick={toggleDrawer(anchorState, true)}>{anchorName}</Button>
        <Drawer anchor={anchorState} open={state[anchorState]} onClose={toggleDrawer(anchorState, false)}>
          {list(anchorState)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
