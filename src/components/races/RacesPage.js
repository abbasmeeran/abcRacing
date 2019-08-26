import React from "react";
import { connect } from "react-redux";
import * as racesActions from "../../redux/actions/racesActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";
import { Grid, withStyles } from "@material-ui/core";
import Race from "./Race";
import { withTranslation } from "react-i18next";

const styles = theme => ({
    cardGrid: {
        paddingTop: theme.spacing(16),
        paddingBottom: theme.spacing(8),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    }
});

class RacesPage extends React.Component {
    state = {
    };

    componentDidMount() {
        const { races, actions } = this.props;

        if (races.length === 0) {
            actions.loadRaces().catch(error => {
                alert("Loading races failed" + error);
            });
        }
    }

    render() {
        const { classes, races } = this.props;
        return <React.Fragment>
            {this.props.loading ? (
                <Spinner />
            ) : (
                    <Grid container spacing={4} className={classes.cardGrid}>
                        {races.map(race => (
                            <Race key={race.id} race={race} />
                        ))}
                    </Grid>
                )}
        </React.Fragment>;
    }
}

RacesPage.propTypes = {
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        races: state.races,
        loading: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadRaces: bindActionCreators(racesActions.loadRaces, dispatch),
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(withStyles(styles)(RacesPage)));
