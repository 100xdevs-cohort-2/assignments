function counter(start){
    let count=start;
    setTimeout(() => {
        console.log("Cohort - "+count+" wait");
        if (count==5){
            console.log("Thank you !");
        }
        else{
            counter(++count)
        }
    }, 1000);
}
counter(1)