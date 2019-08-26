import React from "react";
import { connect } from "react-redux";
import * as driversActions from "../../redux/actions/driverActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";
import { Container, Grid, withStyles } from "@material-ui/core";
import Driver from "./Driver";
import { withTranslation } from "react-i18next";

const styles = theme => ({
    cardGrid: {
        paddingTop: theme.spacing(16),
        paddingBottom: theme.spacing(8),
    },
});

class DriversPage extends React.Component {
    state = {
    };

    componentDidMount() {
        const { drivers, actions } = this.props;

        if (drivers.length === 0) {
            actions.loadDrivers().catch(error => {
                alert("Loading drivers failed" + error);
            });
        }
    }

    render() {
        const { classes, drivers } = this.props;
        return <React.Fragment>
            {this.props.loading ? (
                <Spinner />
            ) : (
                    <Container className={classes.cardGrid} maxWidth="md">
                        <Grid container spacing={4}>
                            {drivers.map(driver => (
                                <Grid item key={driver.id} xs={12} sm={6} md={4}>
                                    <Driver driver={driver} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                )}
        </React.Fragment>
    }
}

DriversPage.propTypes = {
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        drivers: state.drivers,
        loading: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadDrivers: bindActionCreators(driversActions.loadDrivers, dispatch),
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(withStyles(styles)(DriversPage)));
