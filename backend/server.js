const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//routers

const roleRouter = require('./routers/routes/role')
const createUserRouter = require("../backend/routers/routes/createUser")
const loginRouter = require("./routers/routes/login")
const createProductRouter = require("./routers/routes/createProduct")
const  createNewCommentRouter = require("./routers/routes/createComment")

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

app.use(roleRouter);
app.use(createUserRouter);
app.use(loginRouter);
app.use(createProductRouter);
app.use(createNewCommentRouter);

/////////////////////
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
