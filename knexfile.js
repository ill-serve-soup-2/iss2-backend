module.exports = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./data/db.sqlite3",
		},
		useNullAsDefault: true,
		migrations: {
			directory: "./data/migrations",
			tableName: "dbmigrations",
		},
		seeds: { directory: "./data/seeds" },
	},

	staging: {
		client: "postgresql",
		connection: {
			database: "db",
			user: "username",
			password: "password",
		}, useNullAsDefault: true,
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "knex_migrations",
		},
	},

	production: {
		client: "postgresql",
		connection: 
		{database: "db",
		user: "username",
		password: "password", }, useNullAsDefault: true,

		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: "dbmigrations",
		},
	},
};
