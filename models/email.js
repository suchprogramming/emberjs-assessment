MailBox.Email = DS.Model.extend({
  sender: DS.attr(),
  subject: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),
});
