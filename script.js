const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            //console.log(request, request.responseText);
            callback(undefined, request.responseText)
            
        } else if(request.readyState === 4){
            //console.log('could not fetch the data');
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}


getTodos((err, data)=>{
    console.log("callback fired");
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
