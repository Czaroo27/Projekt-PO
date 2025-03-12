const userRepository = require("../repositories/userRepository");

exports.getAllUsers = async () => {
  return await userRepository.getAllUsers();
};

exports.getUserById = async (id) => {
  return await userRepository.getUserById(id);
};

exports.createUser = async (data) => {
  const { firstname, lastname, birthYear, group } = data;

  if (!firstname || !lastname || !birthYear || !group) {
    console.log("Prosze wpisac wszystkie dane");
  }

  if (!["user", "premium", "admin"].includes(group)) {
    throw new Error("Niepoprawna grupa użytkownika");
  }

  const age = new Date().getFullYear() - birthYear;
  return userRepository.createUser({ firstName, lastName, age, group });
};

exports.updateUser = async (id, data) => {
  return await userRepository.updateUser(id, data);
};

exports.deleteUser = async (id, data) => {
  return await userRepository.deleteUser(id);
};
