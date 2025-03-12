let user = [];

exports.getUsers = () => {
  return users;
};

exports.getUserById = (id) => {
  return users.find((user) => user.id === id);
};

exports.createUser = (userData) => {
  return;
};
