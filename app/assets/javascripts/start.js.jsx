$(()=>{


var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];

var List = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },
  render: function() {
    return( <ul id="drag-n-drop">
      {this.props.data.map(function(item) {
        return <li key={item} >{item}</li>;
      })}
    </ul>)
  }
});

var mountpoint = document.getElementById('example');
if ( mountpoint ) {
  ReactDOM.render( <List data={colors} />, document.getElementById('example'));
}

});
