(function(){

/*
function creer_image_carrousel

*/

    console.log("vive JS")
    let carrousel = document.querySelector('.carrousel')
  //  let bouton = document.querySelector('.bouton__ouvrir')
    let carrousel__x = document.querySelector('.carrousel__x')
    let galerie = document.querySelector('.galerie')
    console.log(galerie.tagName);
    let carrousel__figure = document.querySelector('.carrousel__figure')
    let form = document.querySelector('.carrousel__form');

    /*création dynamique d'img dans le carrousel*/
 
 
 



////////////////////////////

    let galerie__imgs = galerie.querySelectorAll('img')
    console.log(galerie__imgs)
    let index = 0


    for (const elm of galerie__imgs) {


        elm.dataset.index = index


creer_image_carrousel(elm, index)
creer_radio_carrousel(index)

  //ajouter un event listener sur les image
  elm.addEventListener('click', function(e){
    carrousel.classList.add('carrousel--ouvrir');
    console.log(elm.dataset.index);
    carrousel__radios[elm.dataset.index].checked = true;

    index = e.target.dataset.index;

    galerie__imgs[index].style.opacity = 1;
   
    creer_radio_carrousel

});
/*
function activerLaBonneImg(index){
    for (const elm of carrousel__figure) {

        elm.style.opacity = 0;

        if(elm.dataset.index == index){
            elm.style.opacity = 1;
        }
    }
}
*/

index = index + 1
    }

   //aller chercher tt les img du carrousel
   let carrousel__radios = document.querySelectorAll('.carrousel__radio');
   //mettre le premier radio en checked
   //carrousel__radios[0].checked = true;
   //mettre la première image en opacité 1 et les autres en 0
   let carrousel__imgs = carrousel__figure.querySelectorAll('.carrousel__img');
   console.log(carrousel__imgs.length);
   for (let i; i< carrousel__imgs.length; i++) {
    carrousel__imgs[i].style.opacity = 0;
   }
   carrousel__imgs[0].style.opacity = 1;
   

 
    //création de 2 btn pour changer d'image vers la droite ou vers la gauche portant la classe carrousel__fleche
    let carrousel__fleche__gauche = document.createElement('button');
    carrousel__fleche__gauche.classList.add('carrousel__fleche');
    carrousel__fleche__gauche.classList.add('carrousel__fleche--gauche');
    carrousel__fleche__gauche.innerHTML = '<';
    
    let carrousel__fleche__droite = document.createElement('button');
    carrousel__fleche__droite.classList.add('carrousel__fleche');
    carrousel__fleche__droite.classList.add('carrousel__fleche--droite');
    carrousel__fleche__droite.innerHTML = '>';
    
    
    
    console.log(form);
    
    //appelé un fonction à partir du bouton de droite

    //appelé un fonction à partir du bouton de gauche
    carrousel__fleche__gauche.addEventListener('click', function(){
        let index = 0;
        for (const radio of carrousel__radios) {
            if(radio.checked){
                radio.checked = false;
                carrousel__imgs[index].style.opacity = 0;
                if(index == 0){
                    index = carrousel__radios.length - 1;
                }else{
                    index--;
                }
                carrousel__radios[index].checked = true;
                carrousel__imgs[index].style.opacity = 1;
                break;
            }
            index++;
        }
    }
    
    );
    carrousel__fleche__droite.addEventListener('click', function(){
        let index = 0;
        for (const radio of carrousel__radios) {
            if(radio.checked){
                radio.checked = false;
                carrousel__imgs[index].style.opacity = 0;
                if(index == carrousel__radios.length - 1){
                    index = 0;
                }else{
                    index++;
                }
                carrousel__radios[index].checked = true;
                carrousel__imgs[index].style.opacity = 1;
                break;
            }
            index++;
        }
    });
    
    carrousel.appendChild(carrousel__fleche__gauche);
    carrousel.appendChild(carrousel__fleche__droite);
 
    


    function creer_radio_carrousel(index){
   

        let carrousel__radio = document.createElement('input');
        carrousel__radio.classList.add("carrousel__radio");
        carrousel__radio.type = 'radio';
        carrousel__radio.name = 'radioCarrousel';
        carrousel__radio.dataset.index = index;
        form.appendChild(carrousel__radio);
        //ajouter un écouteur permettant de changer l'image du carrousel selon l'index du radio
        //carrousel__img.children[index].sttyle.opacity = 1; pour changer l'opacité de l'image
      
        carrousel__radio.addEventListener('click', function(e){

            //  carrousel__imgs[index].style.opacity = 0; ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
              let index = e.target.dataset.index;
             
              let carrousel__imgs = document.querySelectorAll('.carrousel__img');
              for (const img of carrousel__imgs) {
                  img.style.opacity = 0;
              }
          //    carrousel__imgs[index].style.opacity = 1;
    
          carrousel__imgs[index].style.opacity =1;
              console.log("sa marche à peine");
          });
    

    }

function creer_image_carrousel(elm, index){


    let carrousel__img = document.createElement('img');

    carrousel__img.classList.add('carrousel__img');
    carrousel__img.src = elm.src; 
    carrousel__img.dataset.index = index;
   
    console.log(elm.src)

    carrousel__figure.appendChild(carrousel__img);

   

}





/*
bouton.addEventListener('mousedown', function(){
    carrousel.classList.add('carrousel--ouvrir') // ouvrir le carrousel
    document.querySelector('body').style.overflow = "hidden"
 
})
/* Écouteur pour fermer la boîte modale */
carrousel__x.addEventListener('mousedown', function(){
    
    carrousel.classList.remove('carrousel--ouvrir') // fermer le carrousel
    document.querySelector('body').style.overflow = "visible"
   

    console.log('fermer carrousel')
})







/*

    carrousel__img.src = galerie__img.src;
    console.log(carrousel__img.src);
 
    carrousel__figure.appendChild(carrousel__img);
 


    let galerie__imgs = galerie.querySelectorAll('img');
    console.log(galerie__imgs);
    for (const elm of galerie__imgs) {
        console.log(elm.src);

        let carrousel__img = document.createElement('img');z
       carrousel__img.src = elm.src;
       carrousel__img.classList.add('carrousel__img');
       carrousel.classList.add('carrousel--ouvrir');
        carrousel__img.dataset.index = index;
        carrousel__figure.appendChild(carrousel__img);
    


    }
 



    bouton.addEventListener('click', function(){
      
    });
 
    boutonFermer.addEventListener('click', function(){
        carrousel.classList.remove('carrousel--ouvrir');


    });

   
*/




})();