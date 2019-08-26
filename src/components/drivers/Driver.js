import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withTranslation } from "react-i18next";
import BookmarkLink from "../bookmarks/bookmarkLink";

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const Driver = props => {
  const classes = useStyles();
  const { driver, t } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={driver.photo}
        title={t("Image title")}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {driver.name}
        </Typography>
        <Typography>
          {driver.country}
        </Typography>
      </CardContent>
      <CardActions>
        <BookmarkLink url={`/driver/${driver.id}`} />
      </CardActions>
    </Card>);
};

Driver.prototypes = {
  driver: PropTypes.object.isRequired
};

export default withTranslation()(Driver);
