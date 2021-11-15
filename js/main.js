// generare layout statico aggiunta todo
// generare dinamicamente x li, uno per ogni todo incluso nell'array di oggetti, contenete il suo corpo e un'icona per la cancellazione del todo stesso
// AGGIUNTA NUOVI TOdo
// quando si clicca sul bottone aggiungi, il valore all'interno del campo di input, viene inserito come testo di un nuovo oggetto nella lista todos (il campo completed di default è sempre false)
// lasciare il focus sul campo di input (usare $refs)
// aggiungere l'azione quando si preme il tasto enter




const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'corpo todo numero 1',
                completed: true,
            },
            {
                text: 'corpo todo numero 2',
                completed: true,
            },
            {
                text: 'corpo todo numero 3',
                completed: false,
            },
        ],
        newTodoText: '',
    },
    methods: {
        addTodo() {
            this.todos.push({
                text: this.newTodoText,
                completed: false,
            },);
        },
    },
});