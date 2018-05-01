function getImages(dados){

    console.log(dados["data"]["results"]);
    let coisasPersonagens = dados["data"]["results"];

    for (let index = 0; index < coisasPersonagens.length; index++) {    
        
        let primeiro = coisasPersonagens[index];
        quadrado = document.querySelector("#c"+index+"");
        quadrado.querySelector("#i"+index+"").src = primeiro["thumbnail"]["path"] +"."+ primeiro["thumbnail"]["extension"];
        quadrado.querySelector("#n"+index+"").textContent = primeiro["name"];
        quadrado.querySelector("#cod"+index+"").textContent = primeiro["id"];
    }

}

function getHistorys(dados){


    
}
