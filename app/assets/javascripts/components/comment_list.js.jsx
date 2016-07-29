var CommentList = React.createClass( {
  componentDidMount: function() {
    commentStore.addChangeListner( this._onChange);
  },
  componentWillUnmount: function() {
    commentStore.removeChangeListner( this._onChange );
  },
  render: function( ) {
    console.log( 'rendering...');
    return (
      <div>
        { commentStore.comments().map( function( comment ) {
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
