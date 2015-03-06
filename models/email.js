MailBox.Email = DS.Model.extend({
  sender: DS.attr(),
  subject: DS.attr(),
  date: DS.attr(),
  body: DS.attr(),
});

MailBox.Email.reopenClass({
  FIXTURES: [
  {
    id: 1,
    sender: 'Sadie',
    subject: 'Woof!',
    date: new Date().toLocaleDateString(),
    body: 'lorem ipsum sadie sadie'
  },
  {
    id: 2,
    sender: 'Becky',
    subject: 'Hello!',
    date: new Date().toLocaleDateString(),
    body: 'lorem ipsum sadie sadie'
  },
  {
    id: 3,
    sender: 'Epicodus',
    subject: 'Stuff',
    date: new Date().toLocaleDateString(),
    body: 'lorem ipsum sadie sadie'
  },
  {
    id: 4,
    sender: 'Mom',
    subject: 'Hello',
    date: new Date().toLocaleDateString(),
    body: 'lorem ipsum sadie sadie'
  },
  {
    id: 5,
    sender: 'Brother',
    subject: 'Hi Bro',
    date: new Date().toLocaleDateString(),
    body: 'lorem ipsum sadie sadie'
  },
  {
    id: 6,
    sender: 'Becky',
    subject: 'Dog Photos',
    date: new Date().toLocaleDateString(),
    body: 'lorem ipsum sadie sadie'
  }
]
});
