BlogLayout = React.createClass({
  render() {
    return <div>
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/postone">First post</a>
      </div>
      <h1> My Blog </h1>
      {this.props.content}
    </div>;
  }
});