// // const express = require('express');
// // const dotenv = require('dotenv');
// // const cors = require('cors');
// // const connectDB = require('./config/db');

// // dotenv.config();

// // // Connect DB
// // connectDB();

// // const app = express();

// // // ✅ Middleware
// // app.use(cors()); // allow all origins (fixes your issue)
// // app.use(express.json());

// // // Routes
// // app.use('/api/auth', require('./routes/auth'));

// // // Test route
// // app.get('/', (req, res) => {
// //   res.send('Backend chal raha hai ✅');
// // });

// // // Server
// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on port ${PORT}`);
// // });

// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const connectDB = require('./config/db');

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors({
//   origin: 'http://localhost:5173',
//   credentials: true  // ✅ cookies allow karta hai
// }));
// app.use(express.json());
// app.use(cookieParser()); // ✅ cookies parse karta hai

// app.use('/api/auth', require('./routes/auth'));

// app.get('/', (req, res) => res.send('Backend chal raha hai ✅'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: 'https://auth-fronetnd-ufmv.vercel.app',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => res.send('Backend chal raha hai ✅'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));