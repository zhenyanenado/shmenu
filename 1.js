let c = console.log;
let d = document;

let grids = [];
let otherGrids = [];
let blocks = [];
let inps = [];
let gamesIsChosen = false;
let isIt = false;
let gridNumber = 12;
let favesFalse = false;

  for(let i = 8; i<=11; i++){
    otherGrids.push(document.getElementById('grid'+i));
  }

  for(let i = 5; i<=8; i++){
    blocks.push(document.getElementById('block'+i));
    inps.push(document.getElementById('inp'+(i-4)));
  }

  for(let i = 1; i<=7; i++){
    grids.push(document.getElementById('grid'+i));
    grids[i-1].addEventListener('click', function(){



        grids[4].style.opacity = 0;
        grids[5].style.width = '80px';
        grids[5].style.height = '80px';
        grids[5].style.opacity = 1;

    let time2 = setTimeout(function(){

        for(let i = 0; i<4; i++){
          grids[i].style.opacity = 1;
        }     
          grids[0].style.top = '100px';
          grids[3].style.top = '0px';
          grids[1].style.left = '-80px';
          grids[2].style.left = '260px';
          grids[4].style.opacity = 0;
          grids[5].style.opacity = 0;
          grids[5].style.backgroundImage = 'url(https://cdn2.iconfinder.com/data/icons/apple-inspire-white/100/Apple-30-512.png)';
    
      }, 700) 

        let time1 = setTimeout(function(){
           grids[5].style.opacity = 1;
        }, 1500)

      if(grids[5].style.opacity == 1){
        isItTrue = true;
      }

    if(isItTrue){
      grids[5].addEventListener('click', function(){
        for(let i = 0; i<=4; i++){
          grids[i].style.opacity = 0;
          grids[6].style.opacity = 1;
          document.getElementById('value').style.opacity = 1;
          document.getElementById('value').style.width = '300px';
        }
      })

      grids[i-1].addEventListener('click', function(){
          document.getElementById('messblock').style.opacity = 0;
          document.getElementById('gameblock').style.opacity = 0;
          document.getElementById('favesblock').style.opacity = 0;
          document.getElementById('memblock').style.opacity = 0;

        for(let i = 0; i<=5; i++){
          grids[i].style.opacity = 0;
          grids[i].style.height = '0px'
          grids[i].style.border = '0px';
        }

          if(this == grids[3]){
              if(i != 3){
                grids[3].style.height = '0px'
                grids[3].style.opacity = 0;
                gamesIsChosen = true;
              }
            }
        
        if(gamesIsChosen){
          let time1 = setTimeout(function(){
            document.body.style.backgroundImage='https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/3c8d61f2cd162cf64a189b40dcca8ef3.jpg';
          }, 100)
      
        for(let i = 0; i<4; i++){

          otherGrids[i].style.opacity = 1;
          otherGrids[i].style.height = '150px';

            otherGrids[i].addEventListener('click', function(){

              this.style.width = '850px';
              this.style.height = '520px';
              this.style.marginTop = '-700px';

            let newArr = otherGrids.filter((currentValue)=>{

              return currentValue != this;

            })
          
            for(let i = 0; i<3; i++){
              newArr[i].style.left = '180px';
              newArr[i].style.marginTop = 0;
              newArr[i].style.height = '150px';
              newArr[i].style.width = '150px';
            
              for(let i = 0; i<=3; i++){
                if(this != otherGrids[i]){
                  otherGrids[i].style.backgroundImage = null;
                }
              }
            }
          
            if(this == otherGrids[0]){
              this.style.left = '60px';
              document.body.style.backgroundImage='url(https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/3c8d61f2cd162cf64a189b40dcca8ef3.jpg)';
              otherGrids[0].style.backgroundImage = 'url(https://64.media.tumblr.com/0425f8288abb2f99d876064a47d7e269/6cb36564298c1cae-3a/s500x750/82c9863bc446d4da591c812630114a5ae786481a.gifv)'
            }

            if(this == otherGrids[1]){
              this.style.left = '-100px';
              document.body.style.backgroundImage='url(https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/3c8d61f2cd162cf64a189b40dcca8ef3.jpg)';
              otherGrids[1].style.backgroundImage = 'url(https://64.media.tumblr.com/d864ddd02d0239caa0398cb521c04faa/94697f3f8290d4b2-2b/s540x810/e8fa745628298d2ab8da0f92d62b5f94001da1e8.gifv)'
            }

            if(this == otherGrids[2]){
              this.style.left = '-230px';
              document.body.style.backgroundImage='url(https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/3c8d61f2cd162cf64a189b40dcca8ef3.jpg)';
              otherGrids[2].style.backgroundImage = 'url(https://64.media.tumblr.com/8f1dabbca36493a2e0e5af6bffbf4218/94697f3f8290d4b2-3b/s540x810/8c8fd151624830f92fb5f55f6c77082923702051.gifv)'
            }

            if(this == otherGrids[3]){
              this.style.left = '-350px';
              document.body.style.backgroundImage='url(https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/3c8d61f2cd162cf64a189b40dcca8ef3.jpg)';
              otherGrids[3].style.backgroundImage = 'url(https://64.media.tumblr.com/fb23b46ee4c49ce066df0f882ebc2aa4/94697f3f8290d4b2-4e/s540x810/734adad4a49d6a21ca1ff29bcbecef63472b639e.gifv)'
              
              }
            })
          }
        }
      })
    }
  })
}



  if(window.innerWidth == 979){
    for(let i = 0; i <= 3; i++){

      if(i != 3){
        grids[i].style.marginTop = '-350px';
        
      }

      grids[0].style.marginTop = '30px';
      grids[3].style.marginTop = '-500px';

      document.getElementById('grid6').style.marginTop = '-570px';
      
    }
  }

  
  grids[5].addEventListener('click', function(){
    grids[5].style.backgroundImage = 'url(newicon.png)';
    grids[5].style.transform = 'rotate(360deg)';
  })
  
  


/*
class example {
  constructor(c, w, h, id){
    this.color = c;
    this.width = w;
    this.height = h;
    this.htmlID = id;
}
  
applySize(){
    d.getElementById(this.htmlID).style.width = this.width + "px";
    d.getElementById(this.htmlID).style.height = this.height + "px";
}

applyColor(){
    d.getElementById(this.htmlID).style.background = this.color;
  }
}

let x = [];
let clr = ["red", "yellow", "magenta", "green", "blue"];
let wds = [50, 20, 40, 35, 80];
let lgs = [50, 20, 40, 35, 80];

for(let i = 0; i < 5; i++){
  x[i] = new example(clr[i], wds[i], lgs[i], "block" + i);
  x[i].applySize();
  x[i].applyColor();
}
*/