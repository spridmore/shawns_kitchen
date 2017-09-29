module.exports = {
  development: {
  url: 'postgres://postgres:password@localhost:5432/test_dev',
  dialect: 'postgres'
},
  production: {
  url: 'postgres://postgres:password@localhost:5432/test_prod',
  dialect: 'postgres'
},
  staging: {
  url: 'postgres://postgres:password@localhost:5432/test_staging',
  dialect: 'postgres'
},
    test: {
  url: 'postgres://postgres:password@localhost:5432/test_test',
  dialect: 'postgres'
}
};