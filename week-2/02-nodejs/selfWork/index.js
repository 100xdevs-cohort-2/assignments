const express = require('express');
app = express();
function sum(n){
    let ans = 0;
    for(let i=1;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}
app.get('/',(req, res) => {
    let n = req.query.n;
    n = sum(n);
    res.status(200).send("The sum is: "+n);
})
app.listen(3000);