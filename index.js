const textToEncrip = document.querySelector(".textarea-input");
const botonEncrip = document.querySelector(".btn-enc");
const textEncrip = document.querySelector(".textarea-output");

const asideImg = document.querySelector('.doll');
const asideMsjNo = document.querySelector('.msj-no-encontrado');
const asideMsjCsj = document.querySelector('.msj-csj');
const asideOut = document.querySelector('.textarea-output');
const asideBtn = document.querySelector('.btn-copy');
const check = document.querySelector('.visto');
const textDeslock = document.querySelector('.deslock');
const iconDeslock = document.querySelector('.lock');

const infoIcon = document.querySelector('.ico-info');
const infoText = document.querySelector('.text-info');

const botonDesencrip = document.querySelector(".btn-desenc");

// Funcion del boton para Encritar mensaje
botonEncrip.addEventListener('click', function() {
  // let textToConver = textToEncrip.value;
  const vExp = /[^a-z! 0-9.]+/gm;
  const inputValid = textToEncrip.value;
  if(vExp.test(inputValid)){
    infoIcon.classList.add('rojo');
    infoText.classList.add('rojo');
    asideImg.classList.remove('disable');
    asideMsjNo.classList.remove('disable');
    asideMsjCsj.classList.remove('disable');
    asideOut.classList.add('disable');
    asideBtn.classList.add('disable');
  } else {
    textEncrip.value = textToEncrip.value.replace(/[aeiou]/g, function(match,pos,str){if(match == "a"){return "ai"} else if(match =="e"){return "enter"}else if(match =="i"){return "imes"}else if(match =="o"){return "ober"} else{ return "ufat"}});
    infoIcon.classList.remove('rojo');
    infoText.classList.remove('rojo');
    if (textEncrip.value !== ""){
      asideImg.classList.add('disable');
      asideMsjNo.classList.add('disable');
      asideMsjCsj.classList.add('disable');
      asideOut.classList.remove('disable');
      asideBtn.classList.remove('disable');
    } else {
      asideImg.classList.remove('disable');
      asideMsjNo.classList.remove('disable');
      asideMsjCsj.classList.remove('disable');
      asideOut.classList.add('disable');
      asideBtn.classList.add('disable');
    }
  }
});
botonDesencrip.addEventListener('click', function() {
  deslock();
  if(textToEncrip.value !== textToEncrip.value.toLowerCase() || textToEncrip.value !== textToEncrip.value.normalize("NFD")){
    infoIcon.classList.add('rojo');
    infoText.classList.add('rojo');
    
  } else {
    textEncrip.value = textToEncrip.value.replace(/ai|enter|imes|ober|ufat/g, function(match){
      if(match == "ai"){
        return "a";
      } else if(match =="enter"){
        return "e";
      } else if(match =="imes"){
        return "i";
      } else if(match =="ober"){
        return "o";
      } else if(match =="ufat"){
        return "u";
      }});

    }
    infoIcon.classList.remove('rojo');
    infoText.classList.remove('rojo');
    if (textEncrip.value !== ""){
      asideImg.classList.add('disable');
      asideMsjNo.classList.add('disable');
      asideMsjCsj.classList.add('disable');
      asideOut.classList.remove('disable');
      asideBtn.classList.remove('disable');
    } else {
      asideImg.classList.remove('disable');
      asideMsjNo.classList.remove('disable');
      asideMsjCsj.classList.remove('disable');
      asideOut.classList.add('disable');
      asideBtn.classList.add('disable');
    }
  }
);

// Funcion del boton para Copiar mensaje
asideBtn.addEventListener('click', function(){
  navigator.clipboard.writeText(textEncrip.value);
  asideBtn.classList.add('disable');
  check.classList.remove('check')
  check.classList.add('anima')
  setTimeout(() => {
    asideBtn.classList.remove('disable');
    check.classList.add('check')
    check.classList.remove('anima')
  }, 800);
})
// Visualizar copia;

function deslock(){
  textDeslock.classList.add('disable');
  iconDeslock.classList.remove('disable')
  iconDeslock.classList.add('candado')
  setTimeout(() => {
    textDeslock.classList.remove('disable');
    iconDeslock.classList.add('disable')
    iconDeslock.classList.remove('candado')
  }, 800);
}
