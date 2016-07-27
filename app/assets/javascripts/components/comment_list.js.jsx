var CommentList = React.createClass( {
  componentDidMount: function() {
    Store.addChangeListner( this._onChange);
  },
  componentWillUnmount: function() {
    Store.removeChangeListner( this._onChange );
  },
  render: function( ) {
    console.log( 'rendering...');
    return (
      <div>
        { Store.comments().map( function( comment ) {
          // we can use this way {... comment} to remove the rendundancy
          // in stating the comment attributes but we just live it like
          // this so that it makes more clear for the user.
          return <Comment key= {comment.id} rank={comment.rank} body={comment.body} author={comment.author} />
        } ) }
      </div>
    )
  },
  _onChange: function(){
    this.forceUpdate();
  }
} )
