async function tarefas() {
    const url = "https://68771b77dba809d901edf03c.mockapi.io/api/Tarefas";
    let resposta = await fetch(url); 
    let dados = await resposta.json();
    console.log(dados);

    let listaTarefas = document.querySelector("#listaTarefas");
    listaTarefas.innerHTML = ""; 

    dados.forEach(tarefa => {
        listaTarefas.innerHTML += `<li>${tarefa.tarefa}</li>`;
    });

    if (listaTarefas.textContent != "") {
        let semTarefas = document.querySelector("#semTarefas");
        semTarefas.style.display = "none";
    }
}

const adicionarTarefa = document.querySelector(".botao-adicionar");
// adicionarTarefa.addEventListener("click",async (event) =>{
//     event.preventDefault()
//     let novaTarefa = document.querySelector("#novaTarefa");
//     let envio = {
//         tarefa: novaTarefa.value,
//         status: false
//     };
    
//     await fetch("https://68771b77dba809d901edf03c.mockapi.io/api/Tarefas", {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(envio)
//     });
    
//     tarefas(); 

// })


adicionarTarefa.onclick = async function adicionarTarefa() {
    let novaTarefa = document.querySelector("#novaTarefa");
    let envio = {
        tarefa: novaTarefa.value,
        status: false
    };

    await fetch("https://68771b77dba809d901edf03c.mockapi.io/api/Tarefas", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(envio)
    });

    tarefas(); 
};



tarefas(); 
