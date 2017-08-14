var React = require("react");

var Results = React.createClass({
    render: function() {
      return (
        <div className="col-md-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa fa-table" aria-hidden="true"></i> Results</strong></h3>
            </div>
            <div className="panel-body">
              <div className="well">
                <a href="#"><h4 className="title">Title</h4></a>
                <button className="btn btn-default save-button" type="button" value="true">
                  <i className="fa fa-bookmark" aria-hidden="true"></i> Save
                </button>
                <p className="summary">Summary</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
});

module.exports = Results;
