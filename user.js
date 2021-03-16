class User {
   constructor(id) {
      this.id = id;
      this.items = [{ name: '', count: 0, id: 1 }];
   }
}

module.exports.User = User;
