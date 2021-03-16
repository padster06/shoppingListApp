const { json } = require('express');
const express = require('express');
const app = express();
const PORT = 5000;
const { User } = require('./user.js');

let users = {
   testID: {
      id: 'testID',
      items: [
         { name: 'apple', count: 3, id: 1 },
         { name: 'pears', count: 6, id: 2 },
         { name: 'carrots', count: 5, id: 3 },
      ],
   },
};

app.use(express.json({ limit: '2mb' }));

app.post('/api/:id', (req, res) => {
   console.log(req);
});

app.get('/api/:id', (req, res) => {
   // const items = [
   //    { name: 'apple', count: 3, id: 1 },
   //    { name: 'pears', count: 6, id: 2 },
   //    { name: 'carrots', count: 5, id: 3 },
   // ];
   // const options = {
   //    items: items,
   //    connected: true,
   // };
   // res.status(200).send(options);
   // console.log(req.params.id);

   if (users[req.params.id]) {
      const options = {
         connection: 'ok',
         items: users[req.params.id].items,
         newUser: false,
         id: users[req.params.id].id,
         status: 200,
      };
      res.status(options.status).send(JSON.stringify(options));
   } else {
      let id = req.params.id;
      users[id] = new User(id);
      const options = {
         status: 200,
         items: users[id].items,
         newUser: true,
         id: id,
      };
      console.log(options);
      res.status(options.status).send(options);
   }
});

app.use(express.static('./client/build'));

app.listen(PORT, () => {
   console.log(`server listening on http://localhost:${PORT}`);
});
