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
    let title=document.createElement('h2').innerText=apiData.title,
        contnet=document.createElement('p').innerText=apiData.contnet,
        author=document.createElement('h3').innerText=apiData.author,
        img=document.createElement('img').innerText=apiData.img,
        date=document.createElement('h3').innerText=apiData.date;

      let card=document.createElement('div');
      card.append(title,contnet,author);
      return card;

}