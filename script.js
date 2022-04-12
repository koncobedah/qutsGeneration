function generate(){
  var quotes = {
    "- Lorem1 -" : '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus sed non accusantium tempore possimus? Qui reprehenderit animi magnam hic veniam aspernatur earum at corrupti!."',
    "- Lorem2 -" : '"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, sequi? Recusandae magni aspernatur animi quos saepe ducimus eos voluptatibus, odio delectus magnam necessitatibus maxime."',
    "- Lorem3 -" : '"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo praesentium ea quam esse provident commodi dolor totam, dolorem explicabo atque quae."'
  }

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random()* authors.length)];

  var quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;

}