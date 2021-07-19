import Storage from "../utils/Storage.js";

const redirect = (req, res) => {
    let code = req.url.replace(/\//, '');
    let linkObject = Storage.read(code);

    if(linkObject){
        res.redirect(linkObject.originalUrl);
        Storage.updateCount(code);
    }else res.status(404).send('Not found');
}

export default redirect