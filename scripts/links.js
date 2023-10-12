const baseURL = "https://orapai.github.io/wdd230/";
const linksURL = "https://orapai.github.io/wdd230/data/links.json";

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

const displayLinks = (weeks) =>{
    // weeks.weeks[0].links.forEach(URL => {
    //     console.log(URL);
    // });
    weeks.weeks.forEach(element => {
        console.log(element);
    });
}