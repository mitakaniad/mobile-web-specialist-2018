let URL="data/note.json";
fetch(URL)
    .then(function(response){
        if (response.status !== 200) { //HTTP Status
            console.log('There is a problem. Status Code: ' +
                response.status);
            return;
        }
        //return response.text()
        return response.json();
    })
    .then(text => {
        //let resultElem = document.getElementById('result');
        //resultElem.textContent = textElem;
        //console.log(text)

        console.log(text.title);
        console.log(text.location);
    })
    .catch(err => console.log(err));