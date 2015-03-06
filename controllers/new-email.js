MailBox.NewEmailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newMail = this.store.createRecord('email', {
        sender: this.get('sender'),
        subject: this.get('subject'),
        body: this.get('body'),
        date: new Date().toLocaleDateString()
      });
      newMail.save();
      this.transitionToRoute('emails');
    }
  }
});
