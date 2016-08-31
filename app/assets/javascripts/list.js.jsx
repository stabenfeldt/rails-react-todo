// Based on react-sortable from http://webcloud.se/sortable-list-component-react-js/

$(()=>{


var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];
var todos;
var placeholder = document.createElement("li");
placeholder.className = "placeholder";

var List = React.createClass({
  getInitialState: function() {
    return {data: []};
  },

  fetchTodos: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getDefaultProps: function() {
    // var user_id = $('#user-info').data('id');
    // url= "http://hse.orwapp.com/api/scores?user_id=" + user_id;
    // return { url: url }
    var url = '/todos.json';
  },
  componentDidMount: function() {
    this.fetchTodos();
    // setInterval(this.fetchTodos, 2000);
  },

  dragStart: function(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';

    // Firefox requires calling dataTransfer.setData
    // for the drag to properly work
    e.dataTransfer.setData("text/html", e.currentTarget);
  },

  dragEnd: function(e) {
    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);

    // Update state
    var data = this.state.data;
    var from = Number(this.dragged.dataset.id);
    var to = Number(this.over.dataset.id);
    if(from < to) to--;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
    console.log("State is ", this.state);

    if(this.nodePlacement == "after") to++

  },

  dragOver: function(e) {
    e.preventDefault();
    this.dragged.style.display = "none";
    if(e.target.className == "placeholder") return;
    this.over = e.target;
    e.target.parentNode.insertBefore(placeholder, e.target);

    var relY = e.clientY - this.over.offsetTop;
    var height = this.over.offsetHeight / 2;
    var parent = e.target.parentNode;

    if(relY > height) {
      this.nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    }
    else if(relY < height) {
      this.nodePlacement = "before"
      parent.insertBefore(placeholder, e.target);
    }
  },


  render: function() {
    console.log("Got list: ", this.state.data);
    return <ul id="drag-n-drop" onDragOver={this.dragOver}>
      {this.state.data.map(function(item, i) {
        return (
          <li
            data-id={i}
            key={i}
            draggable="true"
            onDragEnd={this.dragEnd}
            onDragStart={this.dragStart}
          >
            {item.text}
          </li>
        )
    }, this)}
  </ul>
  }
});

var mountpoint = document.getElementById('example');
if ( mountpoint ) {
  ReactDOM.render( <List data={todos} />, document.getElementById('example'));
}

});
