module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
  });

  Blog.associate = function(models) {
    // Define association here
    Blog.belongsTo(models.User, {
      as: 'user',          // Alias for the association
      foreignKey: 'userId', // Foreign key in the Blog model
    });
  };

  return Blog;
};