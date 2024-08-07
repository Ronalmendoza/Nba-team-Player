



























// // Agregar fragmento al seclect



// const $selectTeam = document.getElementById("select-team");
// const $selectPlayer = document.getElementById("select-player");
// const $fragment = document.createDocumentFragment();

// // Agregar equipos al select
// db.forEach(team => {
//     const $option = document.createElement("option");
//     $option.value = team.name;
//     $option.textContent = team.name;
//     $fragment.appendChild($option);
// });
// $selectTeam.appendChild($fragment);

// // Evento para agregar jugadores al seleccionar un equipo
// $selectTeam.addEventListener("change", () => {
//     // Limpiar la lista de jugadores previamente seleccionados
//     $selectPlayer.innerHTML = '';

//     const equipo = db.find(team => team.name === $selectTeam.value);
//     if (equipo && equipo.players) {
//         // Asignar logo del equipo
//         document.body.style.backgroundImage = `url(${equipo.logo})`;

//         equipo.players.forEach(player => {
//             const $option = document.createElement("option");
//             $option.value = player;
//             $option.textContent = player;
//             $selectPlayer.appendChild($option);
//         });
//     }
// });

