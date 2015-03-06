MailBox.Router.map(function() {
  this.resource('emails', {path: '/'});
  this.resource('email', {path: 'mail/:email_id'});
  this.resource('new-email');
});
