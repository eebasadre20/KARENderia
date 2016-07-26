var CommentList = React.createClass( {
  render: function( ) {
    return (
      <div>
        { JSON.parse(this.props.comments).map( function( comment ) {
          // we can use this way {... comment} to remove the rendundancy
          // in stating the comment attributes but we just live it like
          // this so that it makes more clear for the user.
          return <Comment key= {comment.id} rank={comment.rank} body={comment.body} author={comment.author} />
        } ) }
      </div>
    )
  }
} )
