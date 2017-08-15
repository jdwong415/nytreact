var React = require("react");

var Results = React.createClass({
  
  getInitialState: function() {
    return { displayResults: [] }
  },
  componentWillReceiveProps: function(nextProps) {
    var displayResults = [];
    if (nextProps.searchResults.length === 0) {
      displayResults.push(
        <div className="well" key="0">
          <h4 className="text-center">No results found.</h4>
        </div>
      );
    }
    else {
      displayResults = nextProps.searchResults.map(function(search, i) {
        return (
          <div className="well" key={i}>
            <a href={search.web_url}><h4 className="title">{search.headline.main}</h4></a>
            <button className="btn btn-default save-button" type="button" onClick={this.handleSave.bind(this, search)}>
              <i className="fa fa-bookmark" aria-hidden="true"></i> Save
            </button>
            <p className="summary">{search.snippet}</p>
          </div>
        );
      }, this);
    }
    this.setState({ displayResults: displayResults });
  },
  handleSave: function(result) {
    this.props.saveArticle(result);
  },
  render: function() {
    return (
      <div className="col-md-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-table" aria-hidden="true"></i> Results</strong></h3>
          </div>
          <div className="panel-body">
            {this.state.displayResults}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Results;
