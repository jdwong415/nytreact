var React = require("react");
var router = require("react-router-dom");
var Link = router.Link;
var Route = router.Route;

var Search = require("./children/Search");
var Saved = require("./children/Saved");
var Results = require("./children/Results");

var keys = require("../../keys.js");
var apiKey = process.env.NYT_API || keys.nytApi.key;

var Main = React.createClass({
  getInitialState: function() {
    return { search: "", startYear: "", endYear: "", searchResult: [] }
  },
  componentDidUpdate: function(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      console.log("UPDATED");
      console.log(this.state.search);
      console.log(this.state.startYear);
      console.log(this.state.endYear);

      this.runSearch(this.state.search, this.state.startYear, this.state.endYear);
    }
    if (prevState.searchResult !== this.state.searchResult) {
      console.log(this.state.searchResult);
    }
  },
  runSearch: function(search, startYear, endYear) {
    var searchResult = [];
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': apiKey,
      'q': search,
      'begin_date': startYear + "0101",
      'end_date': endYear + "0101"
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).done(function(result) {
      for (var i = 0; i < 5; i++) {
        searchResult.push(result.response.docs[i]);
      }
      this.setState({ searchResult: searchResult });
    }.bind(this)).fail(function(err) {
      throw err;
    });
  },
  setVars: function(search, startYear, endYear) {
    this.setState({ search: search, startYear: startYear, endYear: endYear });
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron text-center">
              <h1><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>&nbsp;New York Times Search</strong></h1>
              <Link to="/"><button className="btn btn-default btn-lg link-button" type="button">
                <i className="fa fa-search" aria-hidden="true"></i> Search
              </button></Link>
              <Link to="/saved"><button className="btn btn-default btn-lg link-button" type="button">
                <i className="fa fa-bookmark" aria-hidden="true"></i> Saved Articles
              </button></Link>
            </div>
          </div>
        </div>
        <div className="row">
          <Route exact path="/" render={(props) => (<Search {...props} setVars={this.setVars} />)} />
          <Route path="/saved" component={Saved} />
        </div> 
        <div className="row">
          <Results />
        </div>
      </div>
    );
  }
});

module.exports = Main;