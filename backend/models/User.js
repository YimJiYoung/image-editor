module.exports = (sequelize, DataType) => sequelize.define('user', {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataType.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataType.STRING,
    allowNull: true,
  },
  loginType: {
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'local',
  },
});
