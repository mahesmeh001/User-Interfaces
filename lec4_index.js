fetch('https://cs571.org/s23/week2/api/cole',{
    method: "GET",
    headers: {
        "X-CS571-ID": "bid_ae72135627fb806737d1"
    }
})
    .then((response) => response.json())//implicit return
    .then((data) => {
        //fetch has already parsed data from JSON to JS object
        //do something with the data
        document.getElementById("name").innerHTML = data.name;


        let tab = '';
        for (const color of data.favColors){
            console.log(color);
            //
            tab+='<td> <div style="color:'+color+'; font-size: 250px">&#9632;</div> </td>'

        }

        document.getElementById("colors").innerHTML = tab;






        console.log(data);
    })
    .catch(error=>console.error(error))
;


