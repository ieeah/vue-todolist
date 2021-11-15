
const app = new Vue({
    el: '#app',
    data: {
        todos: [
            {
                text: 'corpo todo numero 1',
                completed: false,
            },
            {
                text: 'corpo todo numero 2',
                completed: false,
            },
            {
                text: 'corpo todo numero 3',
                completed: false,
            },
        ],
        newTodoText: '',
        activeFilter: false,
    },
    computed: {
        // salviamo quanti todo nell'array hanno completed true
        completedTodos() {
            const completed = this.todos.filter( todo => todo.completed);
            return completed.length;
        },
    },
    methods: {
        addTodo() {
            // se il valore di input non è vuoto, allora inserirlo nella lista di todos
            if(this.newTodoText != '') {
                this.todos.push({
                text: this.newTodoText,
                completed: false,
            })} 

            // svuotare il campo di testo dell'input
            this.newTodoText = '';

            // lasciare il focus al campo di input
            this.$refs.inputText.focus();
        },

        ////////////////

        // switchare la classe completed in base al suo stato
        toggleCompleted(i) {
            // negare il valore di completed al click sul todo
            this.todos[i].completed = !this.todos[i].completed;
        },

        ////////////////

        // rimuovere il todo specifica quando si clicca sull'icona del cestino
        removeTodo(i) {
            this.todos.splice(i, 1);
            console.log('indice', i);
        },

        //////////////

        toggleFilter() {
            this.activeFilter = !this.activeFilter;
        },

        ////////////////

        allDone() {
            let done = false;

            if (this.filterActive && this.completedTodos == this.todos.length) {
                done = true;
            } else {
                done = false;
            }

            return done;
        },
    },
});
