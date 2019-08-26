import React from "react";
import PropTypes from "prop-types";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, Hidden, Grid } from "@material-ui/core";
import { withTranslation, useTranslation } from "react-i18next";
import BookmarkLink from "../bookmarks/bookmarkLink";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  bookmark: {
    width: 160,
  }
}));

const Race = props => {
  const classes = useStyles();
  const { race } = props;
  const { t } = useTranslation();
  return (
    <Grid item key={race.heading} xs={12} md={6}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {race.heading}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {race.eventDate}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {race.location}
            </Typography>
            <BookmarkLink url={`/race/${race.id}`} className={classes.bookmark} />
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={race.photo}
            title={t('Race Image')}
          />
        </Hidden>
      </Card>
    </Grid>);
};

Race.prototypes = {
  race: PropTypes.object.isRequired
};

export default withTranslation()(Race);
