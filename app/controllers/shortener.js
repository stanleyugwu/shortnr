import Storage from "../utils/Storage.js";

const shortnerController = (req, res) => {
    let url = req.body.url;
    const urlRegex = /^(https?:\/\/)?[\d\w]+\.[\w]+(\/.*)*/;

    if(!urlRegex.test(url)){
        return res.status(400).send('Bad Request (Invalid Url)')
    }

    //generated code
    let code = Storage.write(url);
    
    if(code){
        res.status(200).send(JSON.stringify({url:code}))
    }else{
        res.status(400).send('Server Error')
    }
}

export default shortnerController