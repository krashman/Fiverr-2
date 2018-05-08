module.exports = {

  database: process.env.DATABASE || 'mongodb://FiverDB:FiverDB@ds111798.mlab.com:11798/todo',
  port: process.env.PORT || 3000,
  secret: process.env.SECRET || 'FiverDB',

}
