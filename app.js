const Base_URL =
"https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/.json";

const dropdowns = document.querySelectorAll(".dropdown select");


for(let select of dropdowns){
    for(Currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = Currcode;
        newoption.value = Currcode;
        if(select.name === "from" && Currcode ==="USD"){
            newoption.selected = "selected";
        }
        else if(select.name === "To" && Currcode ==="INR"){
            newoption.selected = "selected";
        }
        select.append(newoption);
    }
    // select.addEventListener("change" (evt) => {
    //     updateflag(evt.target);

    // });
    // updateflag() =>{
    //     console.log(evt);
    // }

   
    
};


