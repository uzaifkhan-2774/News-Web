const APIkey = "b524ad2c7dfbef9aa633277eb4caf5d1 ";

getdata("general");

function getdata(category) {
  fetch(
    `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${APIkey}`,
    { method: "GET" }
  )
    .then((res) => {
      return res.json();
    })
    .then((response) => {
       
      generateCard(response);
    })
    .catch((err) => {
      console.log(err);
    });
}



function generateCard(response) {

  let TotalCard = "";
  for (let i = 0; i < response.articles.length-1; i++) {

    let Card =
     `  <div class="card-body">
          <div class="card-head">
          <img src= ${response.articles[i].image} alt="image" />
          </div>
          <div class="card-content">
           <h3>${(response.articles[i].title).slice(0,100)}</h3>
           <p>${(response.articles[i].description).slice(0, 200)}</p>
           <button>view more</button>
          </div>
           </div>`
            

    TotalCard += Card;
  }
  document.getElementById("news-data").innerHTML = TotalCard;
}
