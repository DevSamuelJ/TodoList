// let novatarefa  = document.querySelector("#novatarefa").value

async function tarefas() {
    const url = "https://68771b77dba809d901edf03c.mockapi.io/api/Tarefas"
    tarefas = await fetch(url)
    tarefas =  await tarefas.json()
    console.log(tarefas)
    tarefas.forEach(tarefa => {
        let listaTarefas = document.querySelector("#listaTarefas")
        listaTarefas.innerHTML += `<li>${tarefa.tarefa}</li>`
        
    });
}

tarefas()