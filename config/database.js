module.exports = ({env}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        srv: env.bool('DATABASE_SRV', false),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'strapi_template'),
        username: env('DATABASE_USERNAME', 'strapi_template'),
        password: env('DATABASE_PASSWORD', 'testpassword'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'strapi_template'),
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
});
