const fs = require("fs")
fs.readFile("medium/dummy.txt", "UTF-8", (err, data) => {
    if (err) console.log(err)
    else {
        console.log(data)
        let arr = data.split(" ")
        let stri = arr.filter((ele) => {
            return (ele != "");
        }).join(" ");
        fs.writeFile("medium/dummy.txt", stri,
            (err) => {
                if (err) console.log(err)
            })
    }
}
)