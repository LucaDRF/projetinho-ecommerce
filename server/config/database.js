require('dotenv').config();

module.exports = {
	dialect: 'postgres',
	host: process.env.DB_HOST,
    port: process.env.DB_PORT,
	username: process.env.DB_USER,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        created_at: 'created_at',
        updated_at: 'updated_at'
    }
};
