

async function tarefas() {
    const url = "https://68771b77dba809d901edf03c.mockapi.io/api/Tarefas"
    tarefas = await fetch(url)
    tarefas =  await tarefas.json()
    console.log(tarefas)
    tarefas.forEach(tarefa => {
        let listaTarefas = document.querySelector("#listaTarefas")
        listaTarefas.innerHTML += `<li>${tarefa.tarefa}</li>`
        if (listaTarefas.textContent != ""){
            let semTarefas = document.querySelector("#semTarefas")
            semTarefas.style.display = "none"
            
        }
    });
}

const adicionarTarefa =  document.querySelector(".botao-adicionar")

adicionarTarefa.onclick = function adicionarTarefa() {
    let novatarefa  = document.querySelector("#novatarefa").value
    let envio = {
        tarefa: novatarefa,
        status: false,
        id: 8,
    }
    
    const url = "https://68771b77dba809d901edf03c.mockapi.io/api/Tarefas"
    fetch(url),{
        method: 'POST',
        headers: {'Content-Type': 'aplication/json'},
        body: JSON.stringify(envio)}
}

tarefas()