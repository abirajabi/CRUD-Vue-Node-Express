module.exports = {
    HOST: "localhost",
    USER: "abinaufal71",
    PASSWORD: "suratnuh71",
    DB: "testdb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
}