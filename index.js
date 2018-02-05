if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

const app = require('./server/server');

app.listen(4000, () => {
  console.log('Listening');
});