module.exports = (sequelize, DataType) => sequelize.define('project', {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  },
  name: {
    type: DataType.STRING(50),
    allowNull: false,
    unique: true,
  },
  imageUrl: {
    type: DataType.STRING,
    allowNull: false,
  },
});
