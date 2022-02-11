// Inizializzo app Vue
const app = new Vue (

    {
        el: '#app',

        data: {
            logo : "https://yt3.ggpht.com/ytc/AKedOLTO2XVhtyMr24Dnz6QJ-Lsj_05XHim-qMoF6PRc=s900-c-k-c0x00ffffff-no-rj",

            todos: [
                
                // {
                //     text: 'Manda una email',

                //     done: true,
                // },
            ],

            newText: '',
            
            newToDo: {

                text: '',                

                done : false,

            },

            class: '',

        },

        methods : {


            addNew(){

               this.todos.push({
                   text: this.newText,
                   done: false,
                }) 
                
                this.newText ='';

            },

            remove(index){

                this.todos.splice(index, 1);

            },

            check(index){
                this.todos[index].done = !this.todos[index].done
            }

        },

    }

);