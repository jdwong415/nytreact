var React = require("react");

var Search = React.createClass({

  getInitialState: function() {
    return { search: "", startYear: "", endYear: "" };
  },
  handleChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },
  handleSubmit: function(event) {
    event.preventDefault();
    this.props.setVars(this.state.search, this.state.startYear, this.state.endYear);
    this.setState({ search: "", startYear: "", endYear: "" });
  },
  render: function() {
    return (
      <div className="col-md-12">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-list-alt" aria-hidden="true"></i> Search</strong></h3>
          </div>
          <div className="panel-body">
            <form role="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="topic">Topic:</label>
                <input
                  value={this.state.search}
                  type="text"
                  className="form-control"
                  id="search"
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>
                <input
                  value={this.state.startYear}
                  type="number"
                  className="form-control"
                  id="startYear"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input
                  value={this.state.endYear}
                  type="number"
                  className="form-control"
                  id="endYear"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Search;