const ROUTE = 'http://localhost:3000/shortn';

const shortenerAdapter = async (url) => {
    try{
        let result = await fetch(ROUTE, {
            method:'post',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({url})
        }).then(res => res.json());
        
        if(!result.url) throw Error({error:'Invalid Url'});
        return result
    }catch(e){
        console.log(e)
        if(e.message == 'Invalid Url') return e
        return {error:'No Internet Connection'}
    }
    
}

export default shortenerAdapter