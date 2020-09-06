module.exports = {
  hrPool_: {
    user: process.env.ORA_USER_MONITOR,
    password: process.env.ORA_PASSWORD_MONITOR,
    connectString: process.env.ORA_CONNECTIONSTRING_MONITOR,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  },

   hrPool: {
    user: process.env.ORA_USER_MONITOR = "RIPSS",
    password: process.env.ORA_PASSWORD_MONITOR = "yE91ijGeTL",
    connectString: process.env.ORA_CONNECTIONSTRING_MONITOR = "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=204.110.52.42)(PORT=1521))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=ORCL)))",
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};


