'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    designation: DataTypes.STRING,
    salary: DataTypes.INTEGER
  }, {});
  Employee.associate = function(models) {
    Employee.belongsTo(models.Company,{
      foreignKey: 'companyId',
      onDelete: 'CASCADE',
    });
  };
  return Employee;
};