document.addEventListener('DOMContentloaded', ()  => {

       const grid = document.querySelector('.grid')
       const dooler = document.createElement('div')
       let doolerLeftSpace = 50
       let doolerBottomSpace =150

    function createDoodler() {
        grid.appendChild(dooler)
        dooler.classList.add('doodler')
        dooler.styles.left =doolerLeftSpace + 'px'
        dooler.styles.bottom =doolerBottomSpace + 'px'
    }       

    class platform{

           constructor(newPlatBottom) {
               this.bottom = newPlatBottom
               this.left= Math.random() * 315
               this.visual = document.createElement('div')

           }


    }

    function createPlatforms() {

         for (let i =0; i<platforCount; i++ ){

            let platforSpace =00/ platforCount
            let newPlatBottom = 100+i*platGap
            let newPlatform = new Platform
         }


    }





    function start(){

        if (!isGameOver)
            createDoodler()

    }

    //attach to button  

    start()



})