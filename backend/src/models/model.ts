import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';
import { HasManyGetAssociationsMixin, HasManyAddAssociationMixin, HasManyHasAssociationMixin, Association, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin } from 'sequelize';

const sequelize = new Sequelize('mysql://root:root_password@localhost:3306/tcc');

export class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public email!: string;
    public password!: string; 

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

export class Company extends Model {
        public id!: number;
        public name!: string;
        public logo!: Blob | null;
        public address!: string;
        public city!: string;
        public province!: string;
        public country!: string;
        public zipcode!: string;
        public full_address!: string;
        public location!: string; 
        public industry!: string;
        public size!: string;
        public founded!: string | null;
        public description!: string | null;
        public email!: string;
        public tel!: string | null;
        public website!: string;
        public facebook!: string | null;
        public linkedin!: string | null;

        public readonly createdAt!: Date;
        public readonly updatedAt!: Date;

}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: new DataTypes.STRING(128)    
  },
  password: {
    type: new DataTypes.STRING(128)  
  }
}, {
  tableName: 'users',
  sequelize: sequelize, // this bit is important
});

Company.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  logo: {
    type: new DataTypes.BLOB,
    allowNull: true,
  },
  address: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  city: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  province: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  country: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  zipcode: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  full_address: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  location: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  industry: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  size: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  founded: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  description: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  email: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  tel: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  website: {
    type: new DataTypes.STRING(128),
    allowNull: false,
  },
  facebook: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  },
  linkedin: {
    type: new DataTypes.STRING(128),
    allowNull: true,
  }
}, {
  tableName: 'companies',
  sequelize: sequelize, // this bit is important
});
