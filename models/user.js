// models/user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  User.associate = function(models) {
    // Define association here
    User.hasMany(models.Blog, {
      as: 'blogs',        // Alias for the association
      foreignKey: 'userId', // Foreign key in the Blog model
    });
  };

  return User;
};
