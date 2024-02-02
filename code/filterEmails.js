const emails=["xavier@google.com", "beng@syniti.com", "valerio@syniti.com",".comhotmail@", "badaddress", "alexhiggins@snooker.com"]

async function filterEmails(emails){
    const res=await fetch("")
    const emails=res.json()
   
    const result=emails.filter(elm => {
        if(elm.includes("@") && elm.includes(".com") && elm.indexOf("@")<elm.indexOf(".com")){
            return elm
        }
    })

    result.sort()
    console.log(result)