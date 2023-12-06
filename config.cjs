require('dotenv').config();

module.exports = {
  userMYQL: process.env.USERMYSQL,
  passwordMYSQL: process.env.PASSWORDMYSQL,
  hostMYSQL: process.env.HOSTMYSQL,
  dbMYSQL: process.env.DBMYSQL,
  portMYSQL: process.env.PORTMYSQL,
};
