async function fetchData(string){
    console.log(string);
    var test={
        title:"test",
        contnet:"test",
        author:"test",
        img:"test",
        date:"test"    }
    document.getElementsByTagName('section')[0].append(createCard(test));
}
function createCard(apiData){
    let title=document.createElement('h2'),
        contnet=document.createElement('p'),
        author=document.createElement('h3'),
        img=document.createElement('img'),
        date=document.createElement('h3');
        title.innerText=apiData.title;
        contnet.innerText=apiData.contnet;
        author.innerText=apiData.author;
        img.innerText=apiData.img;
        date.innerText=apiData.date;
      let card=document.createElement('div');
      card.append(title,contnet,author);
      return card;

}