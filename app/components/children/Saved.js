var React = require("react");

var Saved = React.createClass({

  render: function() {
    return (
      <div className="col-md-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-bookmark-o" aria-hidden="true"></i> Saved Articles</strong></h3>
          </div>
          <div className="panel-body">
            <div className="well">
              <a href="#"><h4 className="title">Title</h4></a>
              <button className="btn btn-default save-button" type="button" value="true">
                <i className="fa fa-trash-o" aria-hidden="true"></i> Remove
              </button>
              <button className="btn btn-default comment-button" type="button" value="true">
                <i className="fa fa-commenting-o" aria-hidden="true"></i> Comment
              </button>
              <p className="summary">Summary</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Saved;