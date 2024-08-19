const Sequelize = require('sequelize')

sequelize = new Sequelize('sqlite::memory:')

module.exports = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Required'
      }
    }
  },
  name: {
    type: Sequelize.STRING,
    validate: {
      len: {
        args: [0, 10],
        msg: 'Maximum length is 10'
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: {
        msg: 'Invalid email address'
      }
    }
  },
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: {
        args: 1,
        msg: 'Must between 1 and 100'
      },
      max: {
        args: 100,
        msg: 'Must between 1 and 100'
      }
    }
  },
  birthdate: {
    type: Sequelize.DATEONLY,
    validate: {
      isDate: {
        msg: 'Invalid date format'
      }
    }
  }
})