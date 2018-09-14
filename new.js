let box=document.getElementById("grid-box");
let lastRandom;
let n=-1;


class Main{
    consructor(){
        this.A=[];
        this.ran=[];
        this.lastRandom;    
    }
    start(){
        this.ranPic();
        this.display();
        n++;
    }
    ranPic(){
        while(this.A.length < 9){
            let randomnumber = Math.floor(Math.random()*9) + 1;
            if(this.A.indexOf(randomnumber) > -1) continue;
            this.A[this.A.length] = randomnumber;
        }
    }
    display(){
        this.ranPos();
        for(let i=1;i<=18;i+=2){
            box.childNodes[i].firstChild.data=null;
            box.childNodes[i].style.backgroundImage=null;
        }
        for(let i=0;i<=n+2;i++){
            box.childNodes[this.ran[i]].style.backgroundImage="url('./images/animal"+this.A[i]+".png')";
        }
    }
    ranPos(){
        this.ran=[];
        while(this.ran.length < n+3){
            var randomnumber = (Math.floor(Math.random()*9)*2)+1;
            if(this.ran.indexOf(randomnumber) > -1) continue;
            this.ran[this.ran.length] = randomnumber;
        }
        lastRandom=this.ran[this.ran.length-1];
    }
}
box.addEventListener("click",(event)=>{
    console.log(event.srcElement.attributes.id); 
    if(n==0){
        game.display();
    }
    if(n){
        if(event.srcElement.attributes.id==box.childNodes[lastRandom].firstChild.parentElement.attributes.id){
            game.display();
        }
        else{
            alert("wrong answer");
            n--;
        }
    }
    n++;   
});

let game= new Main();
game.start();