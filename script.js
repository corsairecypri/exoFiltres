import data from "./data.json";

//Destructuring (capter les propriétés d'1 élément )

const { personnes } = data;

//Ajout des li des listes des pays et des genres

const ulSexes = document.querySelector(".ulSexes");
const ulPays = document.querySelector(".ulPays");

const listeSexes = [];
const listePays = [];

personnes.forEach((p) => {
  //Création des lis pour les sexes

  if (!listeSexes.includes(p.sexe)) {
    listeSexes.push(p.sexe);

    ulSexes.innerHTML += `<li class = "liSexes">${p.sexe}</li>`;
  }

  if (!listePays.includes(p.pays)) {
    listePays.push(p.pays);

    ulPays.innerHTML += `<li class = "liPays">${p.pays}</li>`;
  }
});

//Filtrage selon le clic

const liSexes = document.querySelectorAll(".liSexes");
const liPays = document.querySelectorAll(".liPays");

const main = document.querySelector("main");

//On s'occupe d'abord du fltrage selon le sexe

liSexes.forEach((sexeClique) => {
  sexeClique.addEventListener("click", (s) => {
    //On crée la section
    const section = document.createElement("section");

    const sex = s.target.textContent;

    //Le main est d'abord vide
    main.innerHTML = "";

    const filteredSexes = personnes.filter((p) => {
      if (p.sexe.includes(sex)) return true;
    });

    console.log(filteredSexes);

    filteredSexes.forEach((element) => {
      section.innerHTML += `
      <div class = "perso">
        <p>Nom : ${element.nom}</p>
        <p>Sexe : ${element.sexe}</p>
        <p>Pays : ${element.pays}</p>
      </div>
      `;
    });

    main.appendChild(section);
  });
});

//Puis on fait la même chose mais avec les pays

liPays.forEach((paysClique) => {
  paysClique.addEventListener("click", (pa) => {
    const section = document.createElement("section");

    const pays = pa.target.textContent;

    main.innerHTML = "";

    const filteredPays = personnes.filter((p) => {
      if (p.pays.includes(pays)) return true;
    });

    console.log(filteredPays);

    filteredPays.forEach((element) => {
      section.innerHTML += `
      <div class = "perso">
        <p>Nom : ${element.nom}</p>
        <p>Sexe : ${element.sexe}</p>
        <p>Pays : ${element.pays}</p>
      </div>
      `;
    });

    main.appendChild(section);
  });
});
