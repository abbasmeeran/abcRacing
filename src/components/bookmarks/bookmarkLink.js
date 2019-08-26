import React from "react";
import { connect } from "react-redux";
import * as bookmarkActions from "../../redux/actions/bookamrkActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { withStyles } from '@material-ui/core/styles';
import { IconButton } from "@material-ui/core";

const useStyles = theme => ({
    icon: {
        margin: theme.spacing(1),
        fontSize: 32,
    },
});

class BookmarkLink extends React.Component {

    componentDidMount() {
    }

    saveBookmark = async () => {
        const { url } = this.props;
        const user = localStorage.getItem('user');
        toast.success("Bookmark saved");
        try {
            await this.props.actions.saveBookmark({ userId: user && user.Id, url });
        } catch (error) {
            toast.error("save failed. " + error.message, { autoClose: false });
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <IconButton
                color="inherit"
                aria-label="save bookmark"
                onClick={(e) => this.saveBookmark()}
                edge="start"
            >
                <BookmarkIcon className={classes.icon} />
            </IconButton>
        );
    }
}

BookmarkLink.propTypes = {
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        bookmark: state.bookmark,
        loading: state.apiCallsInProgress > 0
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            saveBookmark: bindActionCreators(bookmarkActions.saveBookmark, dispatch)
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(BookmarkLink));
