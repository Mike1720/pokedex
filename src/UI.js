export class Card {
     /**
      * 
      * @param {Object pokemon} pokemon 
      */

     createCard(pokemon) {
          const cardsContainer = document.getElementById("cards-container");
          const div = document.createElement("div");
          div.classList.add("card", "mt-4");
          div.innerHTML = `
          <img class="card-img-top" src=${pokemon.img} alt="${pokemon.name}">
          <h5 class="card-header text-center mx-3 border rounded">${pokemon.name}</h5>
          <div class="card-body d-flex flex-column align-items-center">
               <p class="card-text"><strong> tipo: </strong> ${pokemon.type}</p>
               <button class="btn btn-outline-dark w-100 btn-know-more" type="button" data-bs-toggle="modal"
               data-bs-target="#${pokemon.id}Modal" data-id=${pokemon.id}>Saber más</button>
               <div id="${pokemon.id}Modal" class="modal fade" tabindex="-1" aria-labelledby="${pokemon.id}ModalLabel"
               aria-hidden="true">
                    <div class="modal-dialog">
                         <div class="modal-content">
                              <div class="modal-header">
                                   <h1 id="${pokemon.number}ModalLabel" class="modal-title fs-5">${pokemon.name}</h1>
                                   <button class="btn-close" type="button" data-bs-dismiss="modal"
                                   aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                   <h2 class="fs-2">Datos extra:</h2>
                                   <ul class="list-group">
                                        <li class="list-group-item">
                                             <div class="d-flex w-100 justify-content-between align-items-center">
                                                  <h5 class="">Peso</h5>
                                                  <p class="text-body-secondary">${pokemon.weight}</p>
                                             </div>
                                        </li>
                                        <li class="list-group-item">
                                             <div class="d-flex w-100 justify-content-between align-items-center">
                                                  <h5 class="">Ataques</h5>
                                                  <p class="text-body-secondary">${pokemon.abilities}</p>
                                             </div>
                                        </li>
                                        <li class="list-group-item">
                                             <div class="d-flex w-100 justify-content-between align-items-center">
                                                  <h5 class="">Debilidades</h5>
                                                  <p class="text-body-secondary">${pokemon.weakness}</p>
                                             </div>
                                        </li>
                                        
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          `
          cardsContainer.appendChild(div)
     }
     clearCards() {
          const cardsContainer = document.getElementById("cards-container");
          while (cardsContainer.firstChild) {
               cardsContainer.removeChild(cardsContainer.firstChild);
     }
     }
}