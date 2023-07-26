import app from './app';
import connectDB from './db/connect';

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  await connectDB(process.env.MONGO_URI);
  console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);
  console.log(`Server is listening on port ${port}...`)
})
