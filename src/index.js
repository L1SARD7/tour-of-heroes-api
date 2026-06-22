import { app } from "./app.js";
import { port } from "./config.js"
import { runDB } from "./db/db.js";


const startApi = async () => {
    try {
        await runDB()
        app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
    }
    catch {
        console.log('Something go wrong')
    }
}

startApi()



