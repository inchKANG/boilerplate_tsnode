import app from "./app";
import yargs from 'yargs';

const argv: any = yargs.argv;
const PORT = argv.port||4444;

const handleAppStart = ()=>{
console.log(`Listening on port ${PORT}`)
}

app.listen(PORT, handleAppStart);
