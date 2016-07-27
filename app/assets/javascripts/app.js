var Constants = {
  CHANGE_EVENT: 'change',
  ADD_COMMENT: 'comments.add'
}

var Store = new _.extend( {}, EventEmitter.prototype, {
  _comments: [],
  addComment: function( comment ) {
    this._comments[comment.id] = comment;
  },
  comments: function( ) {
    return this._comments;
  },
  addChangeListner: function ( callback ) {
    this.on( Constants.CHANGE_EVENT, callback );
  },
  removeChangeListner: function ( callback ) {
    this.removeListner( Constants.CHANGE_EVENT, callback );
  },
  emitChange: function ( ) {
    this.emit( Constants.CHANGE_EVENT );
  }
});

var AppDispatcher = new FluxDispatcher();

AppDispatcher.register( function ( payload ) {
  var action = payload.actionType;
  switch( action ) {
    case Constants.ADD_COMMENT:
      Store.addComment( payload.comment );
      break;
    default:
      // NO-OPERATION
  }
} );