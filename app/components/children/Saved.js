var React = require("react");

var Saved = React.createClass({

  getInitialState: function() {
    return { displayResults: [] }
  },
  componentDidMount: function() {
    this.props.getArticle();
  },
  componentWillReceiveProps: function(nextProps) {
    var displayResults = [];
    if (nextProps.savedArticles.length === 0) {
      displayResults.push(
        <div className="well" key="0">
          <h4 className="text-center">No saved articles.</h4>
        </div>
      );
    }
    else {
      displayResults = nextProps.savedArticles.map(function(res, i) {
        return (
          <div className="well" key={i} id={res._id}>
            <a href={res.url}><h4 className="title">{res.title}</h4></a>
            <button className="btn btn-default save-button" type="button" onClick={this.handleClick.bind(this, res)}>
              <i className="fa fa-trash-o" aria-hidden="true"></i> Remove
            </button>
            <button className="btn btn-default comment-button" type="button" value="true">
              <i className="fa fa-commenting-o" aria-hidden="true"></i> Comment
            </button> 
            <p className="summary">{res.summary}</p>
          </div>
        );
      }, this)
    }
    this.setState({ displayResults: displayResults });
  },
  handleClick: function(result) {
    this.props.deleteArticle(result);
  },
  render: function() {
    return (
      <div className="col-md-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-bookmark" aria-hidden="true"></i> Saved Articles</strong></h3>
          </div>
          <div className="panel-body">
            {this.state.displayResults}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Saved;