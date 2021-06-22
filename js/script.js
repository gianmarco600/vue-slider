const app = new Vue({
    el: '#app',
    data: {
        timer:0,
        counter: 0,
        photos: [
            'img/donnie.jpg',
            'img/fc.jpg',
            'img/odio.png',
            'img/moon.jpg'
        ]
    },
    mounted(){
        this.timer = setInterval(this.nextPhoto, 3000);
        
    },
    methods:{
        nextPhoto(){
            clearInterval(this.timer);
            if(this.counter == this.photos.length - 1){
                this.counter = 0;
            }else{
                this.counter++;
            }
            this.timer = setInterval(this.nextPhoto, 3000);
        },
        previousPhoto(){
            clearInterval(this.timer);
            if(this.counter == 0){
                this.counter = this.photos.length - 1;
            }else{
                this.counter--;
            }
            this.timer = setInterval(this.nextPhoto, 3000);
        },
        goTo(indiceFoto){
            clearInterval(this.timer);
            this.counter = indiceFoto;
            this.timer = setInterval(this.nextPhoto, 3000);
        }
    }
})