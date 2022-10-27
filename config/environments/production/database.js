module.exports = {
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'strapi-hook-bookshelf',
      settings: {
        client: 'postgres',
        host: 'ec2-23-23-181-251.compute-1.amazonaws.com',
        port: 5432,
        database: 'ddmvg10s931pec',
        username: 'uoahdqefznrtrd',
        password: 'f1f5e332f3580fc9c34e95226cf84136884ccbb94e74ec7fd4f23143f2a513ae',
        ssl: {
          rejectUnauthorized: false,
        },
      },
      options: {
        ssl: true,
      },
    },
  },
};


// module.exports = {
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         host: 'cluster0.zspyk.mongodb.net',
//         port: 27017,
//         database: 'restaurant',
//         username: 'someuser',
//         password: 'someuser',
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// };
 

// module.exports = {
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         uri: 'mongodb+srv://someuser:someuser@cluster0.zspyk.mongodb.net/restaurant?retryWrites=true&w=majority'
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// };