const { User } = require('../../db');

const isUserDetailsValid = async (userInfo) => {
  const resp = await User.findOne(userInfo);
  return resp !== null;
};

module.exports = { isUserDetailsValid };
