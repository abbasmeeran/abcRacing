import React from "react";
import { connect } from "react-redux";
import * as bookmarkActions from "../../redux/actions/bookamrkActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import BookmarkList from "./BookmarkList";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class BookmarksPage extends React.Component {

  componentDidMount() {
    const { bookmarks, actions } = this.props;

    if (bookmarks.length === 0) {
      actions.loadBookmarks().catch(error => {
        alert("Loading bookmarks failed" + error);
      });
    }
  }

  handleDeleteBookmark = async bookmark => {
    toast.success("Bookmark deleted");
    try {
      await this.props.actions.deleteBookmark(bookmark);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        <h2>Bookmarks</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
            <>
              <BookmarkList
                onDeleteClick={this.handleDeleteBookmark}
                bookmarks={this.props.bookmarks}
              />
            </>
          )}
      </>
    );
  }
}

BookmarksPage.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    bookmarks: state.bookmarks,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadBookmarks: bindActionCreators(bookmarkActions.loadBookmarks, dispatch),
      deleteBookmark: bindActionCreators(bookmarkActions.deleteBookmark, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarksPage);
