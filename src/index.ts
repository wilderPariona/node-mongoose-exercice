import app from "./app";
import dbConnection from './config/config';

dbConnection(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));