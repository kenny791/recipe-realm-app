import app from './app.js'


//port number for the server to listen on
const port = process.env.PORT || 8080

app.listen(port, () => {console.log(`App running on port http://localhost:${port}`)})