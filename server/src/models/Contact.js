const { Model, DataTypes } = require('sequelize');

class Contact extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      number: DataTypes.STRING,
    }, {
      sequelize,
    });
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
  }
}

module.exports = Contact;
