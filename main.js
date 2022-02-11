// Inizializzo app Vue
const app = new Vue (

    {
        el: '#app',

        data: {
            logo : "https://yt3.ggpht.com/ytc/AKedOLTO2XVhtyMr24Dnz6QJ-Lsj_05XHim-qMoF6PRc=s900-c-k-c0x00ffffff-no-rj",

            todos: [
                {
                    text: 'Fai la spesa',

                    done : true,

                },

                {
                    text: 'Manda una email',

                    done: true,
                },
            ],

            newToDo: {
                text: '',

                done: true,
            },

        },

        methods : {

            addNewToDo(){

                this.newToDo = '';

                if(this.newToDo == ''){
                    alert('Hai laciato il campo vuoto!');
                } else{
                    this.todos.push(this.newToDo);
                    this.newToDo = '';
                }
            },

        },

    }

);