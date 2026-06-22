import { app } from "./app.js";
import { port } from "./config.js"


const startApi = () => {
    try {
        app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
    });
    }
    catch {
        console.log('Something go wrong')
    }
}

startApi()



