//conceitos de imutabilidade

const user = {
  name: "Rafael",
  lastname: "Pedroza",
};

function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.lastname}`,
  };
}

const UserWithFullName = getUserWithFullName(user);
console.log(UserWithFullName, user);
