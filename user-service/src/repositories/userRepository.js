let user = [];

exports.getUsers = () => {
  return users;
};

exports.getUserById = (id) => {
  return users.find((user) => user.id === id);
};

exports.createUser = (userData) => {
  const newUser = { id: newId++, ...userData };
  user.push(newUser);
  return newUser;
};

exports.updateUser = (id, updatedData) => {
  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) return null;

  users[userIndex] = { ...users[userIndex], ...updatedData };
  return users[userIndex];
};
exports.deleteUser = (id) => {
  const initialLength = users.length;
  users = users.filter((user) => user.id !== id);
  return users.length < initialLength;
};
