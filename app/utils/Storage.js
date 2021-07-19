import fs from 'fs';

const extractLinks = () => {
    var links = JSON.parse(fs.readFileSync('storage/links.json', 'utf-8'));
    return links
}

const storeLinks = (links) => {
    try{
        fs.writeFileSync('storage/links.json', JSON.stringify(links));
        return true
    }catch(e){
        return false
    }
}

export default {
    write(url){
        let links = extractLinks();
        let code = "xxxxxx".replace(/x/g,() => Math.floor(Math.random() * 16).toString(16));
        let date = Date.now();
        links[code] = {originalUrl:url, date,clicks:0}
        if(storeLinks(links)){
            return code
        }
        return false
    },

    read(code){
        let links = extractLinks();
        if(code in links){
            return links[code];
        }
        return false
    },

    updateCount(code){
        let links = extractLinks();
        if(code in links){
            links[code].clicks++
            return storeLinks(links);
        }
        return false
    }
}