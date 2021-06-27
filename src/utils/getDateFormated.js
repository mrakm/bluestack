export const dateFormate=(d)=>{
    // let date;
    // if(d==undefined){
    //      date= new Date()
    //     return new Date(date.getMonth().toString()+"/"+date.getDate()+"/"+date.getFullYear()); 

    // }
    // date = new Date(d);
    // return new Date(date.getMonth().toString()+"/"+date.getDate()+"/"+date.getFullYear());    
    if(d==undefined){
        return Date.now()
    }
    return d;
}