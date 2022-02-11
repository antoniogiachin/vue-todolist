// Inizializzo app Vue
const app = new Vue (

    {
        el: '#app',

        data: {

            // logo img
            logo : "https://yt3.ggpht.com/ytc/AKedOLTO2XVhtyMr24Dnz6QJ-Lsj_05XHim-qMoF6PRc=s900-c-k-c0x00ffffff-no-rj",

            // array di oggetti todos
            todos: [
                
                // {
                //     text: 'Manda una email',

                //     done: true,
                // },
            ],

            // nuovo testo todos
            newText: '',
            

        },

        methods : {

            // aggiunge un nuovo todos
            addNew(){

               this.todos.push({
                   text: this.newText,
                   done: false,
                }) 
                
                // resetta il campo dopo aggiunta
                this.newText ='';

            },

            // rimuove il todo all'indice
            remove(index){

                this.todos.splice(index, 1);

            },

            // switch tra done true e false
            check(index){
                this.todos[index].done = !this.todos[index].done
            }

        },

    }

);