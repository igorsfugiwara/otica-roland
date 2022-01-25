let opcao = prompt("Oque você gostaria de fazer?");
const tarefas = ["Lista de tarefas"];

while (opcao!=="quit" && opcao!=="q"){
    if(opcao === "list" || opcao==="l"){
        console.log("********************")
        for(let i=0; i<tarefas.length; i++){
            console.log(`${i}: ${tarefas[i]}`);
        }
        console.log("********************")
    }else if (opcao==="new" ||opcao==="n"){
        const newTask = prompt("Qual a tarefa?");
        tarefas.push(newTask);
        console.log(`${newTask} adicionado a lista!`);
    }else if (opcao==="delete" || opcao==="d"){
        const index = parseInt(prompt("Qual o número da tarefa que será deletada?"));
        if(!Number.isNaN(index)){
            const deleted = tarefas.splice(index, 1);
            console.log(`Certo, ${deleted[0]} deletado`);
        }else{
            console.log("Número Desconhecido. ");
        }
    }
    opcao = prompt("Oque você gostaria de fazer?")
}
console.log("Aplicação encerrada.")
