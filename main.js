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

                done: '',
            },

            newText: '',

        },

        methods : {

            addNew(){                

                if(this.newText == ''){
                    alert('Hai inserito un campo vuoto!')
                } else{

                    this.newToDo.done=true;
                    this.newToDo.text= this.newText;
                    this.todos.push(this.newToDo); 
                    this.newText ='';
                }

            }            

        },

    }

);