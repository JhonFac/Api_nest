module.exports = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.ENV === 'development',
    logging: process.env.ENV === 'development',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js'],
    subscribers: ['dist/**/*.subscriber.js'],
    cli: {
        entitiesDir: 'src/entities',
        migrationsDir: 'src/migrations',
        subscribersDir: 'src/subscribers',
    },
    timezone: process.env.TZ,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
