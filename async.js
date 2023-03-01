const https = require("http")
const start = Date.now();
function doRequest(){

    https
    .request('http://www.nischay.live',(res)=>{
    res.on('data',()=>{});
    res.on('end',()=>{
        console.log(Date.now()-start);
    })
    })
    .end()
}
doRequest();

doRequest();

doRequest();

doRequest();
doRequest();
doRequest();
doRequest();