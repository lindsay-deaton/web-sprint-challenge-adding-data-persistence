// do not make changes to this file (except to optionally add seeds)
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: { afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done) },     
}

module.exports = {
  development: {
    ...sharedConfig,
    connection: {
      typeCast: (field, next) => {
    console.log('TypeCasting', field.type, field.length);
    if (field.type == 'TINY' && field.length == 1) {
        let value = field.string();
        return value ? (value == '1') : null;
    }
    return next();
      },
      filename: './data/lambda.db3'
    },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/test.db3' },
  },
};
