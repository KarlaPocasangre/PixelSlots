const sequelize = require('./bd');
const User = require('./user');
const Score = require('./score');

User.hasOne(Score, { foreignKey: 'id_usuario' });
Score.belongsTo(User, { foreignKey: 'id_usuario' });

module.exports = {
  sequelize,
  User,
  Score
};
