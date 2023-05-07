const server = require('./config/app');
const {dbConection} = require('./config/db');
PORT=3001;

dbConection.sync({force:true})
.then(()=>{
    server.listen(PORT,()=>{
        console.log(`server running in http://localhost:${PORT}` );
    });
})