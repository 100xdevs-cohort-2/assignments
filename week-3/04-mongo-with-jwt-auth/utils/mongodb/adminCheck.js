const { Admin } = require('../../db');

const isAdminDetailsValid = async (adminInfo) => {
  const resp = await Admin.findOne(adminInfo);
  return resp !== null;
};

module.exports = { isAdminDetailsValid };
