function murmurhash(key, seed) {
	var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
	
	remainder = key.length & 3; // key.length % 4
	bytes = key.length - remainder;
	h1 = seed;
	c1 = 0xcc9e2d51;
	c2 = 0x1b873593;
	i = 0;
	
	while (i < bytes) {
	  	k1 = 
	  	  ((key.charCodeAt(i) & 0xff)) |
	  	  ((key.charCodeAt(++i) & 0xff) << 8) |
	  	  ((key.charCodeAt(++i) & 0xff) << 16) |
	  	  ((key.charCodeAt(++i) & 0xff) << 24);
		++i;
		
		k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

		h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
		h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
		h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
	}
	
	k1 = 0;
	
	switch (remainder) {
		case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
		case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
		case 1: k1 ^= (key.charCodeAt(i) & 0xff);
		
		k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
		k1 = (k1 << 15) | (k1 >>> 17);
		k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
		h1 ^= k1;
	}
	
	h1 ^= key.length;

	h1 ^= h1 >>> 16;
	h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
	h1 ^= h1 >>> 13;
	h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
	h1 ^= h1 >>> 16;

	return h1 >>> 0;
}



function is_lic()
{
var l = ["399141904", "661228372", "4012383387"];
var myhash = murmurhash(document.getElementsByClassName('forumAvatar')[0].alt, 5);
var lic = false;

 	for (var h=0; h<l.length; h++)
 		{
 			if (l[h] == myhash) lic = true;	
 		}
		
 return lic;		
 		
}



var walk1 = 'montagne';
var walk2= 'foret';
var train1 = 'vitesse';
var train2 = 'dressage';
var train3 = 'trot';

var polM ='м';//Что пишем перед гп, если не устраивает- меняем надпись внутри ковычек для мальчика
var polJ ='ж';// тоже самое- для девочки

var spec = 'montagne';//специализация кск с общих

var viborksk =  кскOLL;//НАСТРОЙКА , КАКОЙ КСК БЕРЕМ. резерв или с общих: кскOLL-с общий с душем и поилкой,   кскрезерв- резерв

var dl =1;//НАСТРОЙКА ДЛИТЕЛЬНОТИ КСК:0- на 1 день, 1- на 3 дня

var shortPause1 = 20;//можно не трогать. на скорость ощутимо не влияет . 
var shortPause2 = 40;
var mediumPause1 =400;// СКОРОСТЬ кача, если медленно. можно уменьшить паузы.Есличасто дрожжит- увеличить. mediumPause1 должна быть меньше mediumPause2
var mediumPause2 = 500;
var longPause1 = 550;//тоже скорость кача. Принцип. как и в средних(medium) паузах
var longPause2 = 650;

var nav=0; //докач навов. 0 - да, 1- нет
var mol = 360;//НАСТРОЙКА, возраст, когда рожаем под молнию,даже если транс- в месяцах. 180=15 лет

var centerLocalisation = 'centerLocalisationMontagne'; // centerLocalisationForet или centerLocalisationMontagne
var myhash = murmurhash(document.getElementsByClassName('forumAvatar')[0].alt, 5);

var HayToGive = 12;
var OatsToGive = 10;

if (typeof e1 !=="undefined"){
    var enduranceTComplet = e1;
    var vitesseTComplet = e2;
    var dressageTComplet = e3;
    var galopTComplet = e4;
    var trotTComplet = e5;
    var sautTComplet = e6;

    var foretComplet = b3;
    var montagneComplet = b1;
}
    
var genetics = ['galopGenetique'];
var lastParentPage = "";
var lastParentSex = "";
var offersToBeDone = 10;
var offers = "offers" + getMyParameterByName(genetics[0]);
var doAbort = "doAbort" + getMyParameterByName(genetics[0]);
if(readCookie (doAbort) == undefined){
    console.log("!!!"+readCookie (doAbort) );
    createCookie(doAbort,false);
}

if(readCookie (offers) == "" || readCookie (offers) == undefined ){
    createCookie (offers, 0);
}

var specialisation = 'specialisationClassique'; 
var amSpecialisation = 'classique'; 
var amunitionEquiped = 'amunitionEquiped' + getMyParameterByName(['sautGenetique'][0]);

var compName = 'trot'; 



if (typeof vitesseComplet !=="undefined"){ 
    var compComplet  = vitesseComplet;
}
if (typeof trotComplet !=="undefined"){ 
    var compComplet1  = trotComplet;
}
if (typeof dressageComplet !=="undefined"){
    var compComplet2  = dressageComplet;
}	
	


 if (window.self != window.top)
 {
    throw "stop";
 }
var pause_reload=40000;
setTimeout( reload,pause_reload);
if (/www.lowadi.com\/elevage\/chevaux\/\?elevage=all-horses/.test(window.location.href))
{
      history.go(-2);
}

//------- Переменные -------
if (/\/marche\/noir\/object\?qName=/.test(window.location.href))
 {
       
     var pause=getRandomPause(longPause1*2,longPause2*2);
            setTimeout(st,pause);
    var pause1 =  pause+ getRandomPause(longPause1*2,longPause2*2);
   setTimeout( doR,pause1);
    }

if (/\/elevage\/chevaux\/cheval\?id=/.test(window.location.href))
{
if (is_lic()==true) {
         var sante = document.getElementById('sante').textContent;
            if (sante > 80)
            {    
                if (chevalAge<=6)
                {
                  if(chevalNom.indexOf(".") == -1){
                      
                         eraseCookie(amunitionEquiped);
                        giveName();
                        
                    } 
                    else {                    
                 
                  ORProg();
                    }
                } 
                else if (chevalAge>6 && chevalAge<=16)
                {
                   
                     ORProg();
                }  
                
                else 
                {
				
                 GeneticsTraining();	  
                }
            }
	}
	else alert('Ваша лицензия не активна! Для активации сообщите продаву следующую информацию - ID:'+myhash);	

}


function ORProg()
{
 var pause = getRandomPause(shortPause1,shortPause2);
   setTimeout(f1,pause);
     function f1()
    {
         if (/elevage\/chevaux\/centreInscription\?id=/.test(document.body.innerHTML))
    {
        var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(eqCenterReg,pause);
            var pause1=pause+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f1,pause1);
   
    }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(f2,pause1);
        }      
    } 
     function f2()
    {
       var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(groom,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause3);
        }      
    } 
    function f3()
    {
        var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
        var d1=document.getElementById('feeding');
        var d2=-1;
        if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
        var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
        if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
        {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f5,pause1);
        }
        else
        {
            
            var pause5=getRandomPause(shortPause1,shortPause2);
            setTimeout(doEatNorm,pause5);
            var pause6=pause5+getRandomPause(longPause1,longPause2);
            setTimeout(f3,pause6);
        }
    }
      function f5()
    {
        var n=document.getElementById('energie').innerHTML;
      if (n < 20) {
       var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
       if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(stroke,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f5,pause3);
        } 
          } 
          else
        {
           var pause4=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause4);
        }
    }
  
    // Спать action action-style-4 coucher action-disabled
         function f7()
    {
        var d=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
          var d1=document.getElementsByClassName('action action-style-4 coucher action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(OR,pause1);
            var pause11=pause1+getRandomPause(longPause1,longPause2);
            setTimeout(pauseFunc,pause11);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(sleep,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f7,pause3);
        }      
    }
 
}



function GeneticsTraining(){ 
    if (chevalAge>16 && chevalAge<=22)
    {
        OatsToGive = 12;
        Walks1(walk1); 
    }
 
    else if (getMyParameterByName(train2 + 'TComplet')<100 ) 
    { 
       OatsToGive = 12;
       HayToGive = 14;
        Train(train2); 
          
    }
   
 
      else if  ((document.getElementsByClassName('action action-style-4 competition-galop action'))[0] == undefined) {

    EquipAmunition(); 

    }
  
     else if (getMyParameterByName(train1 + 'TComplet')<100 ) 
    { 
        OatsToGive = 12;
        Train(train1);         
    }

  else if (getMyParameterByName(walk1 + 'Complet')<100) 
    {
         HayToGive = 12;
        OatsToGive = 14;
        Walks(walk1); 
    }
	
     else if (!compComplet) 
    {
     HayToGive = -1;
        OatsToGive = 10;     
         CompNoVIP(); 
       }
	   
      else if (getMyParameterByName(train3 + 'TComplet')<100) 
    {   
          OatsToGive = 12;
       HayToGive = 14;
        Train(train3);     
        }
		
  	else if (chevalAge<124)
				{
					//alert();
					HayToGive = 12;
					OatsToGive = 14;
					 setTimeout(function() {walk(walk2);}, 400); 
					 setTimeout(drink,1000);
					 setTimeout(function() {ORProg();}, 1300); 
					 
				}
	

	
    else 
    {
        if (chevalSexe == "feminin"){
            BirthProg();
        }
        else if (chevalSexe == "masculin" && parseInt(readCookie(offers),10) < offersToBeDone){
            GiveOfferings(5);
   
        }
        else if (chevalSexe == "masculin" && parseInt(readCookie(offers),10) == offersToBeDone){
            eraseCookie(offers);
            GoToMother();
        } 
    }

}



function zeus(){
   var regexp = /id=([^&]+)/i;
    var GetValue = '';
     GetValue = regexp.exec(document.location.search)[1];
 window.location='http://www.lowadi.com/marche/noir/object?qName=eclair-zeus&cheval='+ GetValue ;
}
 function doR(){
    var d = document.getElementsByClassName('button button-style-2');
 d[0].click();
}
function st()/////////////////////////////////////
{
    var d = document.getElementById('inventaire-utilisation-standard');
    if(d!== null)
    {
        d.click();
    }
}


function GiveOfferings(offerings){
 
  var pause = getRandomPause(shortPause1,shortPause2);
    setTimeout(f1,pause);
   
    function f1()
    {
        var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f2,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(groom,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f1,pause3);
        }      
    }  
      function f2()
    {
      
   if( (timeConvert() >800  )&&( timeConvert() <1200  ))
       {
          var pause=getRandomPause(shortPause1,shortPause2);   
       
         setTimeout(function() { competitionByName1();}, pause);    
        pause=pause +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause);  
        }
        else
        {
            
            var pause3=getRandomPause(shortPause1,shortPause2);
            setTimeout(f22,pause3);
        }      
    }  
  function f22()
    {
      
   if( timeConvert() < 540 )
       {
          var pause=getRandomPause(shortPause1,shortPause2);   
         setTimeout(giveOfferForTeam, pause);
       
         pause=pause +getRandomPause(longPause1*2,longPause2*2);
            setTimeout(f22,pause);  
        }
        else
        {
            
            var pause3=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause3);
        }      
    }  
    function f3()
    {
          var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f4,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(drink,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f3,pause3);
        }      
    } 
    function f4()
    {
        
        var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
        var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
        if ((d[0] !== undefined)  || (d0[0] !== undefined))
        {
            // Спать
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f5,pause1);
        }
        else
        {
            var pause4=getRandomPause(shortPause1,shortPause2);
            setTimeout(openFeeding,pause4);
            var pause5=pause4+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(doEatDef,pause5);
            var pause6=pause5+getRandomPause(longPause1,longPause2);
            setTimeout(f4,pause6);
        }
    }
 function f5()
    {
   var n=document.getElementById('energie').innerHTML;
        if ((n > 22)&&( timeConvert() <800  ))
       {
          var pause=getRandomPause(shortPause1,shortPause2);   
         setTimeout(giveOfferForTeam, pause);
          
         pause=pause +getRandomPause(longPause1*3,longPause2*3);
            setTimeout(f5,pause);  
        }
        else
        {
            
            var pause3=getRandomPause(shortPause1,shortPause2);
            setTimeout(f99,pause3);
        }      
    } 
     function f99()
    {
       var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
   if( (timeConvert() > 1100 )||((d[0] !== undefined)||(d1[0] !== undefined)))
       {
         
            var pause3=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause3);
             
        }
        else
        {
             console.log("offers=" + readCookie(offers));
    createCookie(offers, parseInt(readCookie(offers),10) + offerings);
    console.log("offers=" + readCookie(offers));
            var pause3=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause3);
        }      
    }    
    
        function f7()
    {
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
       if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f8,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(stroke,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f7,pause3);
        }      
    }
        function f8()
    {
      var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
         if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f9,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(carrot,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f8,pause3);
        }      
    } 
    
  
    // Спать
         function f9()
    {
         var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
        var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
        if(((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined))&&(parseInt(readCookie(offers),10) == offersToBeDone)))
       {
             eraseCookie(offers); 
           GoToMother();
        }
           else  if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(OR,pause1);
            var pause11=pause1+getRandomPause(longPause1*3,longPause2*3);
            setTimeout(pauseFunc,pause11);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(sleep,pause2);
            var pause3=pause2+getRandomPause(longPause1*3,longPause2*3);
            setTimeout(f9,pause3);
        }      
    }
  
   
}
function GoToMother(){
    var d = document.getElementsByClassName('horsename')[1].href;
    document.location.replace('http://www.lowadi.com/elevage/chevaux/cheval?id=' + d.substring(d.search("=") + 1)); 
}
function giveOfferForTeam(){
    var pause = 0;
    // Открыть случки
    var pause1 = pause + getRandomPause(mediumPause1,mediumPause2);
    setTimeout(openReproduction,pause1);
    // Выбрать командные
    var pause2 = pause1 + getRandomPause(mediumPause1,mediumPause2);
    setTimeout(selectTeamOffers,pause2);
    // Кинуть случку
    var pause3 = pause2+getRandomPause(mediumPause1,mediumPause2);
    setTimeout(doOffer,pause3);
    var pause4=pause2+getRandomPause(longPause1,longPause2);
    setTimeout(pauseFunc,pause4);
}
function selectTeamOffers(){
    document.getElementById('formMalePublicTypeEquipe').click();
}
function doOffer(){
  document.getElementById('boutonMaleReproduction').click();

}
//------- Жеребцы -------


// Конвертация времени
function timeConvert(){
    var d = document.getElementsByClassName('hour');
    var timeStr = d.item(0).innerHTML;
    var hours = parseInt(timeStr.substring(0,3));
    var minutes = parseInt(timeStr.substring(3));
    return hours * 60 + minutes;
}

//------- Роды -------
function BirthProg(){
  
    console.log(doAbort + "=" + readCookie(doAbort));
    var b =((document.getElementById('alerteVeterinaireContent')!==null) &&( (readCookie(doAbort)==0) || (chevalAge>mol)));
    console.log("Условие родить = " + b);
    if(b){ 
     
          var j=document.getElementById('lienVeterinaire');
    j.click(); 
    }
         else if  (timeConvert() >800  )
    {
      
          var pause1=getRandomPause(mediumPause1,mediumPause2);
            setTimeout( ORProg,pause1);
      
        }    
	 else if  (nav==0 )
    {
       var pause = getRandomPause(shortPause1,shortPause2);
        setTimeout(openReproduction,pause);
        var pause1=pause+getRandomPause(mediumPause1,mediumPause2);
            setTimeout( Train1,pause1);     
        }	
    else{
      var pause = getRandomPause(shortPause1,shortPause2);
        setTimeout(openReproduction,pause);
        var pause1=pause+getRandomPause(mediumPause1,mediumPause2);
            setTimeout( ORProg,pause1);  
      }
}    

 function Train1() //докачка треней на родах
    {
        var d=document.getElementsByClassName('action action-style-4 competition-galop action-disabled');
        if (d[0] !== undefined)
       {
           ORProg();
        } 
       else if (getMyParameterByName(walk2 + 'Complet')<100)//65
    {
         HayToGive = 14;
        OatsToGive = 12;
        WalksBirth(walk2);
    }
    else if (getMyParameterByName('endurance' + 'TComplet')<100){
          OatsToGive = 12;
        HayToGive = -1;
        Train('endurance');
        } 
   
        else if (getMyParameterByName('galop' + 'TComplet')<100){
          OatsToGive = 12;
        
        Train('galop');
        }  
  else if (getMyParameterByName('saut' + 'TComplet')<100){
          OatsToGive = 12;
        
        Train('saut');
        }        
  else {    
ORProg();
    } 
}

function openReproduction(){
    if (document.getElementById('reproduction-bottom')!==null)
    {
        var d1 = document.getElementById('reproduction-tab-0').getElementsByTagName('a')[1]; 
        //console.log(d1);
        d1.click();
        if(d1.className.indexOf("action action-style-4 echographie") != -1){
            var childSexe = "";
            var pause = getRandomPause(shortPause1,shortPause2);
            setTimeout(function(){                
                var d = document.getElementById('reproduction-tab-1').getElementsByClassName('col-1');
                console.log(d);
                var s = d[0].childNodes[0].nodeValue;
                console.log(s);
                if(s.indexOf("жереб") != -1){
                    childSexe = "masculin";}
                else{
                    childSexe = "feminin";}
                console.log("childSexe=" + childSexe);               
                lParentSex = getLastParentSexForBirth(); 
                console.log("!!getLastParentSexForBirth=" + getLastParentSexForBirth());
                if(lParentSex == childSexe){
                    createCookie(doAbort,1);}
                else{
                    createCookie(doAbort,0);}
                console.log("openReproduction/doAbort=" +readCookie(doAbort));

            },pause); 
        }
    }
}
function reserve(){
    var d = document.getElementById('tab-1');
    if(d.className != 'tab-style-6-0-0 selected')
    {
        var d1 = document.getElementsByClassName('tab-action');
        d1[1].click();
    }
    
}
function doReproduction(){ 
    var d = document.getElementsByClassName('button button-style-0');
  document.getElementById('race').options[18].selected = true;
  // document.getElementById('licorne-aileeCheckbox').setAttribute('value','0'); 
  // document.getElementById('licorneCheckbox').setAttribute('value','0');  
  if (document.getElementById('race').options[18].selected = true){    
 d.item(0).click();     
}
}
function doReproduction2(){
    var d = document.getElementsByClassName('button button-style-0');
 d[1].click();
}
if (/www.lowadi.com\/elevage\/chevaux\/choisirNoms\?jument=/.test(window.location.href)){
    if (document.body.innerHTML.indexOf('femelle_v1828806360.png') !== -1)
    {
        document.getElementById('poulain-1').setAttribute('value','Кобыла');
    }
    else document.getElementById('poulain-1').setAttribute('value','Жеребенок');
    var d = document.getElementsByTagName('button');
    if (d[d.length-1].getAttribute('type')=='submit')
    {
        d[d.length-1].click();
    }
    
}
if (/www.lowadi.com\/elevage\/chevaux\/saillie\?offre=/.test(window.location.href)){

  var pause =  getRandomPause(longPause1,longPause2);
    setTimeout(function (){ document.getElementById('boutonDoReproduction').click();},pause);}
if (/www.lowadi.com\/elevage\/chevaux\/rechercherMale\?jument=/.test(window.location.href)){  
 var pause = getRandomPause(longPause1*2,longPause2*2);
 setTimeout(reserve,pause);
var pause1 =  pause+ getRandomPause(longPause1*2,longPause2*2);
   setTimeout( doReproduction,pause1);
var pause2=  pause1+ getRandomPause(longPause1*2,longPause2*2);
   setTimeout( doReproduction2,pause2);  
   
}
//------- Роды -------

//------- Выборка -------
function loadURL(url){
    var oRequest = new XMLHttpRequest();
    oRequest.open('GET', url, false);
    oRequest.send(null);
    return oRequest.responseText;
}
function getGenetics(geneticsName){
    document.getElementById('tab-genetics-title').onclick();
    return document.getElementById(geneticsName).childNodes[0].nodeValue;
}
function getLastParent(){  
    if (lastParentPage === "")
    {
        var d = document.getElementsByClassName('horsename');
        console.log(d);
        var d1 = (d[0].href).substring((d[0].href).search('=')+1);
        var d2 = (d[d.length-1].href).substring((d[d.length-1].href).search('=')+1); 
        if (d1>d2)
        {
            lastParentPage = "";
            lastParentPage = loadURL('http://www.lowadi.com/elevage/fiche/?id='+d1);
        }
        else 
        {
            lastParentPage = "";
            lastParentPage = loadURL('http://www.lowadi.com/elevage/fiche/?id='+d2);
        }   
    }
    return lastParentPage;      
}
function getLastParentSex(){  
    var d = document.getElementById('tab-genetics').getElementsByClassName('horsename');
    var d1 = (d[0].href).substring((d[0].href).search('=')+1);
    var d2 = (d[d.length-1].href).substring((d[d.length-1].href).search('=')+1); 
    console.log(d1 +";" + d2 + ";" + chevalId);
    if (d1>d2)
    {
        lastParentSex = "masculin";
    }
    else 
    {
        lastParentSex = "feminin";
    }   
    
    return lastParentSex;      
}
function getLastParentSexForBirth(){   
    var d = document.getElementById('reproduction').getElementsByClassName('horsename');
    console.log(d);
    var d0 = (d[0].href).substring((d[0].href).search('=')+1);
    console.log("d0=" + d0 + "; d=" + chevalId);
    if(chevalId>d0)
    {
        lastParentSexForBirth = "feminin";
    }
    else 
    {
        lastParentSexForBirth = "masculin";
    }  
    console.log("lastParentSexForBirth="+ lastParentSexForBirth);
    return lastParentSexForBirth;      
}
function getLastParentGenetics(geneticsName){
    var t = getLastParent();
    var s = t.substring(t.search(geneticsName) + geneticsName.length + 2 );
    return s.substring(0, s.search('<') );
}
//------- Выборка -------

//--------Прогулки-------
function Walks(walkName)
{
    var pause = getRandomPause(shortPause1,shortPause2);
    
     setTimeout(f1,pause);
     function f1()
    {
        var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f2,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(groom,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f1,pause3);
        }      
    } 
   function f2()
    {
       var em = document.getElementById('moral').textContent;
       var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
        if (( em >99 )||(d[0] !== undefined)||(d1[0] !== undefined))
       
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(drink,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause3);
        }      
    }
  function f3()
    {
      
   if( timeConvert() < 840)
       {
          var pause=getRandomPause(shortPause1,shortPause2);   
         setTimeout(function() {competitionByNameVIP(compName);}, pause); 
         var  pause1=pause +getRandomPause(longPause1,longPause2);
            setTimeout(f3,pause1);  
        }
        else
        {
           var pause3=getRandomPause(shortPause1,shortPause2);
            setTimeout(f4,pause3);
        }      
    } 
     
     function f4()
    {
        var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
        if (d[0] !== undefined)
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f5,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(mash,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f4,pause3);
        }      
    } 
     function f5()
    {
        var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f6,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(drink,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f5,pause3);
        }      
    }

     function f6()
    {
        var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
        var d1=document.getElementById('feeding');
        var d2=-1;
        if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
        var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
        if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
        {
           
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause1);
        }
        else
        {
           
            var pause5=getRandomPause(shortPause1,shortPause2);
            setTimeout(doEatDef,pause5);
            var pause6=pause5+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f6,pause6);
        }
    }
 function f7()
    {
        var d2=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d21=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
        var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
        var n=document.getElementById('energie').innerHTML;
         if ((d2[0] !== undefined)||(d21[0] !== undefined)||(d[0] !== undefined)||(d1[0] !== undefined)||(n < 10)||( timeConvert() > 1300 ))
      
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f8,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(function() {walk(walkName);}, pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f7,pause3);
        }      
    } 
 
        function f8()
    {
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
       if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f9,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(stroke,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f8,pause3);
        }      
    }
        function f9()
    {
        var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
         if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f91,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(carrot,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f9,pause3);
        }      
    }  
 
         function f91()
    {
        var d=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
        if (d[0] !== undefined)
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(OR,pause1);
           var pause11=pause1+getRandomPause(longPause1,longPause2);
            setTimeout(pauseFunc,pause11);
           var pause12=pause11+getRandomPause(longPause1*3,longPause2*3);
            setTimeout(reload,pause12);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(sleep,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f91,pause3);
        }      
    }
  

}


function WalksBirth(walkName)
{
    var pause = getRandomPause(shortPause1,shortPause2);
    
     setTimeout(f1,pause);
     function f1()
    {
        var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f2,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(groom,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f1,pause3);
        }      
    } 
    function f2()
    {
      
   if( (timeConvert() > 600)|| (chevalAge>36) )
       {
         
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f22,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(function() {walk00(walkName,5);}, pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause3);
        }       
    } 
    
  function f22()
    {
      
   if( timeConvert() > 655 )
       {
         
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(function() {walk00(walkName,4);}, pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f22,pause3);
        }       
    }  
     function f3()
    {
        var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
        if (d[0] !== undefined)
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f4,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(mash,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f3,pause3);
        }      
    } 
function f4()
    {
         var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f5,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(drink,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f4,pause3);
        }      
    } 
     function f5()
    {
        var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
        var d1=document.getElementById('feeding');
        var d2=-1;
        if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
        var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
        if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
        {
            // Спать
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f6,pause1);
        }
        else
        {
            
            var pause5=getRandomPause(shortPause1,shortPause2);
            setTimeout(doEatDef,pause5);
            var pause6=pause5+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f5,pause6);
        }
    }
 function f6()
    {
        var d2=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d21=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
        var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
        var n=document.getElementById('energie').innerHTML;
         if ((d2[0] !== undefined)||(d21[0] !== undefined)||(d[0] !== undefined)||(d1[0] !== undefined)||(n < 10)||( timeConvert() > 1320 ))
      
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(function() {walk(walkName);}, pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f6,pause3);
        }      
    } 
 
        function f7()
    {
        var n=document.getElementById('energie').innerHTML;
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
       if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f8,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(stroke,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f7,pause3);
        }      
    }
        function f8()
    {
       var n=document.getElementById('energie').innerHTML;
        var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
         if ((d[0] !== undefined)||(d1[0] !== undefined)||(n > 20))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f9,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(carrot,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f8,pause3);
        }      
    }  
    // Спать
         function f9()
    {
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
        var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
        if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(OR,pause1);
            var pause11=pause1+getRandomPause(longPause1,longPause2);
            setTimeout(pauseFunc,pause11);
            var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
            setTimeout(reload,pause12);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(sleep,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f9,pause3);
        }      
    }
  

}



function Walks1(walkName)
{
    var pause = getRandomPause(shortPause1,shortPause2);
    
     setTimeout(f1,pause);
     function f1()
    {
        var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f2,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(groom,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f1,pause3);
        }      
    } 
    function f2()
    {
      
   if( (timeConvert() > 600)|| (chevalAge>36) )
       {
         
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f21,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(function() {walk00(walkName,5);}, pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause3);
        }       
    } 
	
    function f21()
    {
      
   if(( timeConvert() < 600 )&& (chevalAge>36) )
       {
          var pause=getRandomPause(shortPause1,shortPause2);   
         setTimeout(function() { competitionByNameVIP(compName);}, pause); 
          pause=pause +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f21,pause);  
        }
        else
        {
           var pause3=getRandomPause(shortPause1,shortPause2);
            setTimeout(f22,pause3);
        }      
    }
  function f22()
    {
      
   if( timeConvert() > 655 )
       {
         
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(function() {walk00(walkName,4);}, pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f22,pause3);
        }       
    }  
     function f3()
    {
        var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
        if (d[0] !== undefined)
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f4,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(mash,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f3,pause3);
        }      
    } 
function f4()
    {
         var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f5,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(drink,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f4,pause3);
        }      
    } 
     function f5()
    {
        var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
        var d1=document.getElementById('feeding');
        var d2=-1;
        if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
        var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
        if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
        {
            // Спать
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f6,pause1);
        }
        else
        {
            
            var pause5=getRandomPause(shortPause1,shortPause2);
            setTimeout(doEatDef,pause5);
            var pause6=pause5+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f5,pause6);
        }
    }
 function f6()
    {
        var d2=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d21=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
        var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
        var n=document.getElementById('energie').innerHTML;
         if ((d2[0] !== undefined)||(d21[0] !== undefined)||(d[0] !== undefined)||(d1[0] !== undefined)||(n < 10)||( timeConvert() > 1320 ))
      
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(function() {walk(walkName);}, pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f6,pause3);
        }      
    } 
 
        function f7()
    {
        var n=document.getElementById('energie').innerHTML;
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
       if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f8,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(stroke,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f7,pause3);
        }      
    }
        function f8()
    {
       var n=document.getElementById('energie').innerHTML;
        var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
         if ((d[0] !== undefined)||(d1[0] !== undefined)||(n > 20))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f9,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(carrot,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f8,pause3);
        }      
    }  
    // Спать
         function f9()
    {
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
        var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
        if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(OR,pause1);
            var pause11=pause1+getRandomPause(longPause1,longPause2);
            setTimeout(pauseFunc,pause11);
            var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
            setTimeout(reload,pause12);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(sleep,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f9,pause3);
        }      
    }
  

}
function walk00(walkName, trainTime1)//////////////////errorsBox
    {
 var en = document.getElementById('energie').textContent;
 var tTime1=timeConvert();
    var trainTime0= Math.floor((1360-tTime1)/30); 
  var spans;
    var trains;
    var hidden;
    switch (walkName) {
        case 'foret':
            spans = document.getElementById('walkforetSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('walkforetSlider-sliderHidden');
            trains = document.getElementById('walk-foret-submit'); 
            break;
        case 'montagne':
            spans = document.getElementById('walkmontagneSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('walkmontagneSlider-sliderHidden');
            trains = document.getElementById('walk-montagne-submit'); 
            break;
       
    }

     if (trainTime1 <= trainTime0 )  
      {
      trainTime= trainTime1; 
 }
    else{
      trainTime= trainTime0; 
 }
        
  for (var i =  trainTime; i >= 0; i--) 
 
  {
        if ((spans[i].className !== "green hiddenNumber disabled")&&(spans[i].className !== "green disabled"))
       {
      spans[i].className = spans[i].className + " selected"; 
    spans[i].click();    
    hidden.value = i;

    spans[i].click();
    trains.click(); 
     return;     
 }
    } 
    }
function walk(walkName)//////////////////
    {
 var en = document.getElementById('energie').textContent;
 var trainTime1 = 20;
   var trainTime;
     var tTime1=timeConvert();
    var trainTime0= Math.floor((1380-tTime1)/30);    
  var spans;
    var trains;
    var hidden;
    switch (walkName) {
        case 'foret':
            spans = document.getElementById('walkforetSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('walkforetSlider-sliderHidden');
            trains = document.getElementById('walk-foret-submit'); 
            break;
        case 'montagne':
            spans = document.getElementById('walkmontagneSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('walkmontagneSlider-sliderHidden');
            trains = document.getElementById('walk-montagne-submit'); 
            break;
       
    }
 if (trainTime1 <= trainTime0 )  
      {
      trainTime= trainTime1; 
 }
    else{
      trainTime= trainTime0; 
 }
        
  for (var i =  trainTime; i >= 0; i--) 
 
  {
        if ((spans[i].className !== "green hiddenNumber disabled")&&(spans[i].className !== "green disabled"))
       {
      spans[i].className = spans[i].className + " selected"; 
    spans[i].click();    
    hidden.value = i;

    spans[i].click();
    trains.click(); 
     return;     
 }
    } 
    }
//------- Прогулки -------



//------- Тренировки -------

function Train(trainName){
    switch (trainName) {
      case 'dressage': 
            Train9(trainName);
            break;
      case 'saut':
           Train3(trainName);
            break;	
      case 'vitesse':    
      case 'trot':
	   Train7(trainName);
            break;  
      case 'endurance': 
            Train3(trainName);
            break;	  
      case 'galop': 
	  Train3(trainName);
            break;	
		         
    }
}

function Train9(trainName){ 
    var pause = getRandomPause(shortPause1,shortPause2);
       setTimeout( f1,pause);
    function f1()//чистка
    {
         var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout( f2,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(groom,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout( f1,pause3);
        }      
    }  
    function f2() //сами тренировки
    {
    var en = document.getElementById('energie').textContent; 
     if(( en < 90 )&&( timeConvert() > 670 ))
       {
           var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause);
      }
    else
        {
           var tT = getMyParameterByName('dressage' + 'TComplet');  
            if(tT<96) {
           var pause1=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() {train('dressage', 12);},pause1);
        var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause2);    
        }   
         else if (((tT>95)&&( timeConvert() < 670 ))&&((tT>95)&&(en >20)))
        {
           var pause=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() {train('dressage',4);},pause); 
     var    pause1=pause +getRandomPause(longPause1,longPause2);
          setTimeout(function() {train('vitesse',3);},pause1); 
      var   pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);  
            setTimeout(f2,pause2);  
        }
        else
        {
            
            var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause);
        }       
      }      
    }  
     function f3()//смесь
    {
        var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
        if (d[0] !== undefined)
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f33,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(mash,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f3,pause3);
        }      
    }
     function f33()//поить
    {
         var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f4,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(drink,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f33,pause3);
        }      
    } 
     function f4()
    {
        var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
        var d1=document.getElementById('feeding');
        var d2=-1;
        if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
        var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
        if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
        {
            // Спать
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f5,pause1);
        }
        else
        {
            
            var pause5=getRandomPause(shortPause1,shortPause2);
            setTimeout(doEatDef,pause5);
            var pause6=pause5+getRandomPause(longPause1,longPause2);
            setTimeout(f4,pause6);
        }
    }
     function f5()//сами тренировки
    {
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
      var n = document.getElementById('energie').textContent; 
      var trainTime = Math.floor((n*10)/74); 
       if ((n < 30)||(d[0] !== undefined)||(d1[0] !== undefined)||( timeConvert() > 1230 ))
       {
           var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f6,pause);
      }
        else
        {
           var tT = getMyParameterByName('vitesse' + 'TComplet');  
            if(tT<100) {
           var pause1=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() {train('vitesse', 12);},pause1);
        var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f5,pause2);    
        }   
         else if (((tT==100)&&( timeConvert() < 1150 ))&&((tT==100)&&(n >20)))
        {
           var pause=getRandomPause(shortPause1,shortPause2);   
         setTimeout(function() {walk(walk2);}, pause); //тут еще прогулка?
         pause=pause +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f5,pause);  
        }
        else
        {          
            var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f6,pause);
        }       
      }      
    }  
     
        function f6()// Ласка
    {
       var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
       if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(stroke,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f6,pause3);
        }      
    }
        function f7()//Морковь
    {
         var n = document.getElementById('energie').textContent;
        var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
         if ((n > 19)||(d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f8,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(carrot,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f7,pause3);
        }      
    }    
        function f8()// Спать
    {
          var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
        var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
        if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(OR,pause1);
           var pause11=pause1+getRandomPause(longPause1,longPause2);
            setTimeout(pauseFunc,pause11);
           var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
            setTimeout(reload,pause12);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(sleep,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f8,pause3);
        }      
    }
 } 

 function Train7(trainName){
      var pause = getRandomPause(shortPause1,shortPause2);
       setTimeout(f1,pause);
   function f1() //чистка
    {
        var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f2,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(groom,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f1,pause3);
        }      
    }     
   function f2() //тенировка
    { 
        var en = document.getElementById('energie').textContent; 
   if(en < 70)
       {
           var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause);
      }
        else
        {
          var tT = getMyParameterByName(trainName + 'TComplet'); 
             
         if(tT<=93) {
                var pause1=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() {train(trainName, 5);},pause1);
        var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause2);   
        }   
         
            else if (tT>93)
        {
            var pause1=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() {train(trainName, 6);},pause1);
        var pause2=pause1 +getRandomPause(longPause1,longPause2);
            setTimeout(f2,pause2);  
        }
        else
        {
            
            var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause);
        }       
      }      
    }       
   function f3() //смесь
    {
        var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
        if (d[0] !== undefined)
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f4,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(mash,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f3,pause3);
        }      
    } 
   function f4() //еда
    {
         var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f5,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(drink,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f4,pause3);
        }      
    }
   function f5()
    {
        var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
        var d1=document.getElementById('feeding');
        var d2=-1;
        if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
        var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
        if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
        {
            // Спать
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f6,pause1);
        }
        else
        {
          
            var pause5=getRandomPause(shortPause1,shortPause2);
            setTimeout(doEatDef,pause5);
            var pause6=pause5+getRandomPause(longPause1,longPause2);
            setTimeout(f5,pause6);
        }
    }
   function f6() //ласка и тренировка + сорик
    {
         var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
      var n = document.getElementById('energie').textContent; 
  if (((n < 15)||(d[0] !== undefined)||(d1[0] !== undefined))&&( timeConvert() > 1260 ))
    {
           var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause);
      }
        else
        {
           var tT = getMyParameterByName(trainName + 'TComplet'); 
             
         if((tT<=93)&&( timeConvert() < 1261 )&&(n >19)) {
            var pause1=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() {train(trainName, 20);},pause1); //тренировка
        var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f6,pause2);  
        }   
         //если процент тренировки >93 и энергия >20
            else if (((tT>93)&&( timeConvert() < 1261 ))&&((tT>93)&&(n >20)))
        {
           var pause=getRandomPause(shortPause1,shortPause2);   
         setTimeout(function() {competitionByName1();}, pause); //сорик
        var pause5=pause +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f6,pause5);  
        }
        else
        {
            
            var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause);
        }       
      }      
    } 
   function f7()
    {
        
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
       if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f8,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(stroke,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f7,pause3);
        }      
    }
   function f8()
    {
       var n = document.getElementById('energie').textContent;
        var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
         if ((n > 19)||(d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f9,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(carrot,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f8,pause3);
        }      
    }  
   function f9()// Спать
    {
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
        var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
        if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(OR,pause1);
          var pause11=pause1+getRandomPause(longPause1,longPause2);
            setTimeout(pauseFunc,pause11);
            var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
            setTimeout(reload,pause12);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(sleep,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f9,pause3);
        }      
    }
   } 

 function Train3(trainName){
      var pause = getRandomPause(shortPause1,shortPause2);
       setTimeout(f1,pause);
       function f1()
    {
        var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f2,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(groom,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f1,pause3);
        }      
    } 

     function f2()
    {
     var en = document.getElementById('energie').textContent; 
   if( timeConvert() > 590 )
       {
           var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause);
      }
    else
        {
           var tT = getMyParameterByName(trainName + 'TComplet');  
            if(tT<94) {
             var pause1=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() {train(trainName, 7);},pause1);
        var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause2)   
        }   
         else if (((tT>93)&&( timeConvert() < 600 ))&&((tT>93)&&(en >20)))
        {
             var pause1=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() {train(trainName, 6);},pause1);
        var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause2) 
        }
        else
        {
            var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause);
        }       
      }      
    } 
     function f3()
    {
        var d=document.getElementsByClassName('action action-style-4 mash action-disabled');
        if (d[0] !== undefined)
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f4,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(mash,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f3,pause3);
        }      
    } 
 function f4()
    {
          var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f5,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(drink,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f4,pause3);
        }      
    }
     function f5()
    {
        var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
        var d1=document.getElementById('feeding');
        var d2=-1;
        if (d1 !== null) {d2=d1.innerHTML.indexOf('толст');}
        var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
        if ((d[0] !== undefined) || (d2 !== -1) || (d0[0] !== undefined))
        {
            // Спать
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f6,pause1);
        }
        else
        {
            var pause4=getRandomPause(shortPause1,shortPause2);
            setTimeout(openFeeding,pause4);
            var pause5=pause4+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(doEatDef,pause5);
            var pause6=pause5+getRandomPause(longPause1,longPause2);
            setTimeout(f5,pause6);
        }
    }
  
    function f6()
    {
     var en = document.getElementById('energie').textContent; 
      var trainTime = Math.floor((en*10)/63); 
         var tT = getMyParameterByName(trainName + 'TComplet');     
   if(( en < 30 ) ||( timeConvert() > 1100 )||(tT>91))
       {
           var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f66,pause);
      }
        else
        {
            var pause1=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() {train(trainName, trainTime);},pause1);
        var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f6,pause2);  
        }      
    } 
     function f66()
    {
     var en = document.getElementById('energie').textContent; 
      var trainTime = Math.floor((en*10)/63); 
         var tT = getMyParameterByName(trainName + 'TComplet');     
   if(( en < 20 ) ||( timeConvert() > 1200 )||(tT<92))
       {
           var pause=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause);
      }
        else
        {
            var pause1=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() { competitionByName1();}, pause1); 
        var pause2=pause1 +getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f66,pause2);  
        }      
    } 
    
    // Ласка
        function f7()
    {
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
       if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f8,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(stroke,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f7,pause3);
        }      
    }
        function f8()
    {
       var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
         if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f9,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(carrot,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f8,pause3);
        }      
    }  
    // Спать
         function f9()
    {
         var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
        var d2=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
        if((d2[0] !== undefined)&&((d[0] !== undefined)||(d1[0] !== undefined)))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(OR,pause1);
            var pause11=pause1+getRandomPause(longPause1,longPause2);
            setTimeout(pauseFunc,pause11);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(sleep,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f9,pause3);
        }      
    }
   
} 

function train(trainName, trainTime){ 
    var spans;
    var trains;
    var hidden;
    var trainTime1;
    var tTime1=timeConvert();
    var trainTime0= Math.floor((1360-tTime1)/30); 
  switch (trainName) {
        case 'endurance':
            spans = document.getElementById('trainingEnduranceSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('trainingEnduranceSlider-sliderHidden');
            trains = document.getElementById('training-endurance-submit'); 
            break;
        case 'vitesse':
            spans = document.getElementById('trainingVitesseSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('trainingVitesseSlider-sliderHidden');
            trains = document.getElementById('training-vitesse-submit'); 
            break;
        case 'dressage':
            spans = document.getElementById('trainingDressageSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('trainingDressageSlider-sliderHidden');
            trains = document.getElementById('training-dressage-submit');
            break;
        case 'galop':
            spans = document.getElementById('trainingGalopSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('trainingGalopSlider-sliderHidden');
            trains = document.getElementById('training-galop-submit'); 
            break;
        case 'trot':
            spans = document.getElementById('trainingTrotSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('trainingTrotSlider-sliderHidden');
            trains = document.getElementById('training-trot-submit'); 
            break;
        case 'saut':
            spans = document.getElementById('trainingSautSlider').getElementsByTagName('li'); 
            hidden = document.getElementById('trainingSautSlider-sliderHidden');
            trains = document.getElementById('training-saut-submit'); 
            break;
    }
     if (trainTime <= trainTime0 )  
      {
     trainTime1= trainTime; 
 }
    else if (trainTime > trainTime0 ) 
    {
      trainTime1 = trainTime0; 
 }
   
    for (var i =  trainTime1; i >= 0; i--) 
   {
        if ((spans[i].className !== "green hiddenNumber disabled")&&(spans[i].className !== "green disabled"))
       {
      spans[i].className = spans[i].className + " selected"; 
    spans[i].click();    
    hidden.value = i;

    spans[i].click();
    trains.click(); 
     return;     
 }
    } 
}

function EquipAmunition(){
    var pause1 = pause + getRandomPause(mediumPause1,mediumPause2);
    setTimeout(specialization,pause1);
    var pause2 = pause1 + getRandomPause(mediumPause1,mediumPause2);
    setTimeout(amunition1,pause2);
    var pause3 = pause2 + getRandomPause(mediumPause1*3,mediumPause2*3);
    setTimeout(amunition2,pause3);
   
}
function specialization() {
    var d = document.getElementById(specialisation).getElementsByTagName('button');
    d[0].click();
 setTimeout(function() {
   location.reload();
 },1500);
}
function amunition1() {
    
    var d = document.getElementById('competition-body-content').getElementsByTagName('a');
    console.log(d[0]);
    d[0].click();
}
function amunitionById(idName) {
    var d = document.getElementById(idName);
    d.click();
}
function amunition2() {
    var pause = 0;
    var pause1 = pause + getRandomPause(mediumPause1*4,mediumPause2*4);
    setTimeout(function() {amunitionById('modele-tapis-'+amSpecialisation+'-1x');},pause1);
    var pause2 = pause1 + getRandomPause(mediumPause1,mediumPause2);
    setTimeout(function() {amunitionById('modele-selle-'+amSpecialisation+'-1x');},pause2);
    var pause3 = pause2 + getRandomPause(mediumPause1,mediumPause2);
    setTimeout(function() {amunitionById('modele-bride-'+amSpecialisation+'-1x');},pause3);
    var pause4 = pause3 + getRandomPause(mediumPause1,mediumPause2);
    setTimeout(function() {
        var d = document.getElementById('choisir-equipement-popup-content').getElementsByTagName('button');
        console.log(d[d.length-1]);
        d[d.length-1].click();
      
        if((document.getElementsByClassName('action action-style-4 competition-galop action'))[0] == undefined){
            var pause5= pause4 + getRandomPause(shortPause1*10,shortPause1*10);
            setTimeout(function() {
                location.reload();
            },pause4);}
    },pause4);
   
}

// Запись на соревнование
if (/www.lowadi.com\/elevage\/competition\/inscription\?cheval=/.test(window.location.href))
{ 
    
   var  pause2 =  getRandomPause(mediumPause1*2,mediumPause2*2);
    setTimeout(competitionInscript,pause2);
     var  pause3 =  pause2 + getRandomPause(mediumPause1*4,mediumPause2*4);
    setTimeout(competitionInscript,pause3);
    var  pause4 =  pause2 + getRandomPause(mediumPause1*6,mediumPause2*6);
    setTimeout( checkComp,pause4);
    
}

function competitionInscript(){
   var d = document.getElementsByClassName('button button-style-0');
 d.item(0).click(); 
    } 
// Проверка
function checkComp(){
     var d=document.getElementsByClassName('fieldErrorText into');
        if (d[0] !== undefined)  
   
    {
        location.reload();
    }
}



//Тут пишем название сорика
function competitionByName1(){
    var age=chevalAge; 
        
     if   ( !compComplet ) //если 
     {   
    competitionByNameVIP('trot');
    }
      
     // else
    // {   
   // competitionByNameVIP('trot');
    //}
}



function competitionByName(compName){
    var d = document.getElementsByClassName('action action-style-4 competition-' + compName);
    document.location.replace(d.item(0).href);
}
function competitionByNameVIP(compName){
    var d = document.getElementsByClassName('action action-style-4 competition-' + compName).item(0);
    d.click();
}



function CompNoVIP(){ //тут меняется соревнование!!!
     var pause = getRandomPause(shortPause1,shortPause2);
       setTimeout(f1,pause);
     function f1() //чистка
    {
       var d=document.getElementsByClassName('action action-style-4 panser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 panser-rainbow action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f2,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(groom,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f1,pause3);
        }      
    } 
   function f2() //поить
    {        
       var d=document.getElementsByClassName('action action-style-4 boire action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 boire-fontaine action-disabled');
        if ((d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f3,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(drink,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f2,pause3);
        }      
    }
    function f3()
    {
      
   if( timeConvert() <700  ) 
       {
          var pause=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() { competitionByName1();}, pause); ////// 
      var  pause1=pause +getRandomPause(longPause1,longPause2);
            setTimeout(f3,pause1);  
        }
        else
        {           
            var pause3=getRandomPause(shortPause1,shortPause2);
            setTimeout(f4,pause3);
        }      
    } 
    function f4() //корм спать
    {
        // Корм
        var d0=document.getElementsByClassName('action action-style-4 allaiter action-disabled');
        var d=document.getElementsByClassName('tab-action tab-action-select action action-style-4 nourrir-entame');
        if ((d[0] !== undefined)  || (d0[0] !== undefined))
        {
            // Спать
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f5,pause1);
        }
        else
        {
            var pause4=getRandomPause(shortPause1,shortPause2);
            setTimeout(openFeeding,pause4);
            var pause5=pause4+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(doEatDef,pause5);
            var pause6=pause5+getRandomPause(longPause1,longPause2);
            setTimeout(f4,pause6);
        }
    }
     function f5() 
    {
    if( timeConvert() <1290  )//1290
       {
          var pause=getRandomPause(shortPause1,shortPause2);   
        setTimeout(function() { competitionByNameVIP('trot');}, pause);  //сорик
      var  pause1=pause +getRandomPause(longPause1,longPause2);
            setTimeout(f5,pause1);  
        }
        else
        {            
            var pause3=getRandomPause(shortPause1,shortPause2);
            setTimeout(f7,pause3);
        }      
    } 
         function f7()
    {
        var n = document.getElementById('energie').textContent; 
        var d=document.getElementsByClassName('action action-style-4 caresser action-disabled');
        var d1=document.getElementsByClassName('action action-style-4 caresser-rainbow action-disabled');
       if ((n > 20)||(d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f8,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(stroke,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f7,pause3);
        }      
    }
         function f8()
    {
          var n = document.getElementById('energie').textContent; 
        var d=document.getElementsByClassName('action action-style-4 carotte action-disabled');
         var d1=document.getElementsByClassName('action action-style-4 carotte-rainbow action-disabled');
         if ((n > 20)||(d[0] !== undefined)||(d1[0] !== undefined))
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(f9,pause1);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(carrot,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f8,pause3);
        }      
    }    
         function f9()// Спать
    {
        var d=document.getElementsByClassName('action action-style-4 coucher-box action-disabled');
        if (d[0] !== undefined)
       {
            var pause1=getRandomPause(shortPause1,shortPause2);
            setTimeout(OR,pause1);
            var pause11=pause1+getRandomPause(longPause1,longPause2);
            setTimeout(pauseFunc,pause11);
           var pause12=pause11+getRandomPause(longPause1*2,longPause2*2);
            setTimeout(reload,pause12);
        }
        else
        {
            var pause2=getRandomPause(shortPause1,shortPause2);
            setTimeout(sleep,pause2);
            var pause3=pause2+getRandomPause(mediumPause1,mediumPause2);
            setTimeout(f9,pause3);
        }      
    }
}






//------- Корм -------
function doEatDef(){// Корм по заданным параметрам
    var subm = false;
    var d2 = document.getElementById('feeding').innerHTML;
    var hay = 0;
    var oats = 0;
    if (HayToGive == -1)
    {
        hay = hayToGive(); 
    }
    else
    {
        hay = HayToGive;
    }
    if (OatsToGive == -1)
    {
        oats = oatsToGive();
    }
    else
    {
        oats = OatsToGive;
    }

    if (hay + oats === 0) return;
    if (d2.indexOf('недостаточный') !== -1) 
    {
        hay = 20-hayGiven();
        oats = 15-oatsGiven();
    }
    // Для слайдеров
    if (d2.indexOf('haySlider') !== -1)
    {               
        // Выставляем сено
        var spans=document.getElementById('haySlider').getElementsByTagName('li');
        var i = hay;
        spans[i].className = spans[i].className + " selected";      
        spans[i].click();

        var hidden=document.getElementById('haySlider-sliderHidden');
        hidden.setAttribute("value",i);
        subm=true;
    }
    // Выставляем зерно, если оно есть
    if (d2.indexOf('oatsSlider') !== -1)
    {
        var spans=document.getElementById('oatsSlider').getElementsByTagName('li');
        var i =oats;
        spans[i].className = spans[i].className + " selected";
        spans[i].click();        

        var hidden=document.getElementById('oatsSlider-sliderHidden');
        hidden.setAttribute("value",i);
        subm=true;
    }
    if (subm === false)
    {
        // Для выпадающих списков
        if (d2.indexOf('id="feedingHay"') !== -1)
        {
            document.getElementById('feedingHay').options[hay].selected = true;
        }
        if (d2.indexOf('id="feedingOats"') !== -1)
        {
            document.getElementById('feedingOats').options[oats].selected = true;
        }
    }
    // Нажимаем на кнопку

  var k = document.getElementById('feed-button');
    if (k!==null)
    {
        k.click();
    }

}
function doEatPre(){// Корм по заданному
    // Если кормим молоком
    if (document.body.innerHTML.indexOf('boutonAllaiter') !== -1)
    {
        var d = document.getElementById('boutonAllaiter');
       
            d.click();
       
        return;
    }
    var subm = false;
    var d2 = document.getElementById('feeding').innerHTML;

    var hay = hayToGive();      
    var oats = oatsToGive();
    //alert('hay' + hay);
    //alert('oats' + oats);
    if (hay + oats === 0) return;
    if (d2.indexOf('толст') !== -1) return;
    if (d2.indexOf('недостаточный') !== -1) 
    {
        hay = 20-hayGiven();
        oats = 15-oatsGiven();
    }
    // Для слайдеров
    if (d2.indexOf('haySlider') !== -1)
    {               
        // Выставляем сено
        var spans=document.getElementById('haySlider').getElementsByTagName('li');
        var i = hay;
        spans[i].className = spans[i].className + " selected";      
        spans[i].click();

        var hidden=document.getElementById('haySlider-sliderHidden');
        hidden.setAttribute("value",i);
        subm=true;
    }

    // Выставляем зерно, если оно есть
    if (d2.indexOf('oatsSlider') !== -1)
    {
        var spans=document.getElementById('oatsSlider').getElementsByTagName('li');
        var i =oats;
        spans[i].className = spans[i].className + " selected";
        spans[i].click();        

        var hidden=document.getElementById('oatsSlider-sliderHidden');
        hidden.setAttribute("value",i);
        subm=true;
    }
    if (subm === false)
    {
        // Для выпадающих списков
        if (d2.indexOf('id="feedingHay"') !== -1)
        {
            document.getElementById('feedingHay').options[hay].selected = true;
        }
        if (d2.indexOf('id="feedingOats"') !== -1)
        {
            document.getElementById('feedingOats').options[oats].selected = true;
        }
    }  
}
function doEatNorm(){// Корм по норме
    // Если кормим молоком
    if (document.body.innerHTML.indexOf('boutonAllaiter') !== -1)
    {
        var d = document.getElementById('boutonAllaiter');
           d.click();
        return;
       
    }
    var subm = false;
    var d2 = document.getElementById('feeding').innerHTML;

    var hay = hayToGive();      
    var oats = oatsToGive();
    //alert('hay' + hay);
    //alert('oats' + oats);
    if (hay + oats === 0) return;
    if (d2.indexOf('толст') !== -1) return;
    if (d2.indexOf('недостаточный') !== -1) 
    {
        hay = 20-hayGiven();
        oats = 15-oatsGiven();
    }
    // Для слайдеров
    if (d2.indexOf('haySlider') !== -1)
    {               
        // Выставляем сено
        var spans=document.getElementById('haySlider').getElementsByTagName('li');        
        var i = hay;
        spans[i].className = spans[i].className + " selected";      
        spans[i].click();

        var hidden=document.getElementById('haySlider-sliderHidden');
        hidden.setAttribute("value",i);
        subm=true;
    }
    // Выставляем зерно, если оно есть
    if (d2.indexOf('oatsSlider') !== -1)
    {
        var spans=document.getElementById('oatsSlider').getElementsByTagName('li');
        var i =oats;
        spans[i].className = spans[i].className + " selected";
        spans[i].click();        

        var hidden=document.getElementById('oatsSlider-sliderHidden');
        hidden.setAttribute("value",i);
        subm=true;
    }
    if (subm === false)
    {
        // Для выпадающих списков
        if (d2.indexOf('id="feedingHay"') !== -1)
        {
            document.getElementById('feedingHay').options[hay].selected = true;
        }
        if (d2.indexOf('id="feedingOats"') !== -1)
        {
            document.getElementById('feedingOats').options[oats].selected = true;
        }
    }
    // Нажимаем на кнопку

    var k = document.getElementById('feed-button');
    if (k!==null)
    {
        k.click();
    }

}
function hayToGive(){// Вычисление необходимой нормы сена
    // Дано сена
    var hay_to_give = (hayNorm()*1-hayGiven()*1);
    // Не меньше нуля
    if (hay_to_give<0) hay_to_give = 0;
    // Не больше 10 кг
    if (hay_to_give>20) hay_to_give = 20;
    // Норма сена
    return hay_to_give;
}
function oatsToGive(){// Вычисление необходимой нормы зерна
    if (document.getElementById('feeding').outerHTML.indexOf('oats') !== -1||document.getElementById('feeding').outerHTML.indexOf('Oats') !== -1)
    {
        var oats_to_give = (oatsNorm()*1-oatsGiven()*1);
        // Не меньше нуля
        if (oats_to_give<0) oats_to_give = 0;
        // Не больше 15 кг
        if (oats_to_give>15) oats_to_give = 15;
        // Норма сена
        return oats_to_give;
    }
    else return 0;
}
function hayNorm(){// Норма сена
    var hay_norm=document.getElementsByClassName('section-fourrage section-fourrage-target')[0].childNodes[0].nodeValue;
    return hay_norm;
}
function hayGiven(){// Съедено сена
    var d2 = document.getElementsByClassName('float-right section-fourrage section-fourrage-quantity')[0].outerHTML;
    var hay_given=d2.substring(d2.indexOf('/ <strong class')-3,d2.lastIndexOf('/ <strong class'));
    return hay_given;
}
function oatsNorm(){// Норма зерна
    var hay_norm=document.getElementsByClassName('section-avoine section-avoine-target')[0].childNodes[0].nodeValue;
    return hay_norm;
}
function oatsGiven(){// Съедено зерна
    var d2 = document.getElementsByClassName('float-right section-avoine section-avoine-quantity')[0].outerHTML;
    var oats_given=d2.substring(d2.indexOf('/ <strong class')-3,d2.lastIndexOf('/ <strong class'));
    return oats_given;
}
//------- Корм -------

//------- Остальные действия -------
function reload(){
    location.reload();
}
function groom(){
    var d = document.getElementById('boutonPanser');
    if(d!== null)
    {
        d.click();
    }
}
function sleep(){
    var d = document.getElementById('boutonCoucher');
    if(d!== null)
    {
        d.click();
    }
}
function stroke(){
    var d = document.getElementById('boutonCaresser');
    if(d!== null)
    {
        d.click();
    }
}
function carrot(){
    var d = document.getElementById('boutonCarotte');
    if(d!== null)
    {
        d.click();
    }
}
function drink(){
    var d = document.getElementById('boutonBoire');
    if(d!== null)
    {
        d.click();
    }
}
function mash(){
    var d = document.getElementById('boutonMash');
    if(d!== null)
    {
        d.click();
    }
}
function prev(){
    var d = document.getElementById('nav-previous');
    if(d!== null&&d.hasAttribute("href"))
    {
        d.click();
    }
}
function OR(){
       var d=document.getElementById('age');
    var c=d.getElementsByTagName('button');
    if(c[0]!==null)
    {
        c[0].click();
    }
}
function giveName(){// Дать имя и аффикс
    var pause = 0; 
    // Чистка
    var pause1 = pause + getRandomPause(shortPause1,shortPause2);
    setTimeout(function(){
        document.getElementById('widget--1').click();
    },pause1); 
    var pause2 = pause1 + getRandomPause(shortPause1/4,shortPause2/4);
    setTimeout(function(){
        document.getElementsByClassName('options-menu')[0].getElementsByClassName('first')[0].getElementsByTagName('a')[2].click();
    },pause2); 
    var pause3 = pause2 + getRandomPause(shortPause1,shortPause2);
    setTimeout(function(){
        var d =document.getElementById('horseNameName');
        var s = ("" + getMyParameterByName(genetics[0])).split(".");
          var nn;
        if (chevalSexe == 'masculin')
       {
           nn=polM;
        }
        else
        {
           nn= polJ;
        }
        d.value = nn + " " +(enduranceGenetique + vitesseGenetique + dressageGenetique + galopGenetique + trotGenetique + sautGenetique).toFixed(2);
    },pause3); 
    var pause4 = pause3 + getRandomPause(shortPause1/4,shortPause2/4);
    setTimeout(function (){
        var d = document.getElementById('horseNameAffixe').getElementsByTagName('optgroup')[1].getElementsByTagName('option')[0];
        d.setAttribute('selected','selected');
    },pause4); 
    var pause5 = pause4 + getRandomPause(shortPause1,shortPause2);
    setTimeout(function(){
        document.getElementById('profil-popup-content').getElementsByClassName('spacer-small-top button button-style-0')[0].click();
    },pause5); 
}
//------- Остальные действия -------

//------- Вспомогательные функции -------
function createCookie (name, value) {
    document.cookie = name + "=" + value + ";expires: 800 ";
} 
function readCookie (name) {
    var value = "; " + document.cookie,
        parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
} 
function eraseCookie (name) {
    createCookie(name, ";expires: -1");
}
function getGlobalParameterByName(a){
    return window[a];
}
function getMyParameterByName(x) {
    var res = "";
    try{
        res = eval(x);
    } catch(e) {}
    return res;
}
function pauseFunc(){// пауза
    if (document.body.innerHTML.indexOf('chevalId') !== -1)
    {
        return;
    }
}
function trim(str, chars){ 
    return ltrim(rtrim(str, chars), chars); 
} 
function ltrim(str, chars){ 
    chars = chars || "\\s"; 
    return str.replace(new RegExp("^[" + chars + "] + ", "g"), ""); 
} 
function rtrim(str, chars){ 
    chars = chars || "\\s"; 
    return str.replace(new RegExp("[" + chars + "] + $", "g"), ""); 
}
function getRandomPause(min, max){
    var rand = Math.random() * (max - min) + min;
    return rand;
}
function openFeeding(){ 
    if (document.body.innerHTML.indexOf('boutonAllaiter') == -1)
    {      
        var d = document.getElementById('boutonNourrir');
        d.click();
    }
}
//------- Вспомогательные функции -------

//------- Запись в КСК из резерва -------
function eqCenterReg(){
    if (document.body.innerHTML.indexOf('cheval-inscription') !== -1)
    {
       
        var d=document.getElementById('cheval-inscription').firstChild;
        if (d!==null)
        {
            d.click();
        }
    }
}
if (/www.lowadi.com\/elevage\/chevaux\/centreInscription\?id=/.test(window.location.href)){
   
     viborksk();
}
function кскрезерв(){
 var pause=0;
    pause=pause+getRandomPause(2200,2600);
    setTimeout(eqCenterReg2,pause);
   
    var pause1=pause+getRandomPause(2800,3200);
    setTimeout(eqCenterReg3,pause1);
  
    var pause2=pause1+getRandomPause(3500,3800);
    setTimeout(eqCenterReg4,pause2);
}
function eqCenterReg2(){
    var d1 = document.getElementById('tab-box-reserve').getElementsByTagName('a');
    console.log(d1[0]);
    d1[0].click();}
function eqCenterReg3(){
    var dom = (document.getElementById('boxContent').getElementsByTagName('tbody'))[0].getElementsByTagName('tr');
    for(var  i = 1; i <dom.length ;i++) //(var i = dom.length - 1; i >= 0; i--) 
    {
        localisation = ((dom[i].getElementsByClassName('align-left width-19'))[0]).getElementsByTagName('a')[0].className;
        if( localisation == 'centerLocalisation ' + centerLocalisation){
            var text = (dom[i].getElementsByClassName('align-center')[0]).outerHTML;
            var s = text.search('abreuvoir');
            if(s>0){
                text = text.substring(s);
                s = text.search('douche');
                if(s>0){
                    var buttons0 = (dom[i].getElementsByClassName('align-center align-middle spacer-small-left spacer-small-right')[dl]).getElementsByTagName('button'); ////0-на 1 день ,1-на3               
                    for (var j = 0; j < buttons0.length; j++) {
                        var d1=(dom[i].getElementsByClassName('align-center align-middle spacer-small-left spacer-small-right')[dl]).getElementsByClassName('disabled button button-style-8');
                   if (d1[0] == undefined)
                     {
                        
                            buttons0[j].click();
                            return;
                          } 

                    }
              
                }
            }

        }
    }
}
function eqCenterReg4(){
    
    if (/message=centreOk/.test(window.location.href)!==true)
    {
        location.reload();
    }
}
function кскOLL(){
   var pause=0;
    
    pause=pause+getRandomPause(2000,2500);
    setTimeout(КСК_O,pause);
    var pause1=pause+getRandomPause(2000,2800);
    setTimeout(КСК1,pause1);
    var pause2=pause1+getRandomPause(2200,2800);
    setTimeout(КСК2,pause2);
  //   var pause3=pause2+getRandomPause(2500,2800);
   // setTimeout(eqCenterReg4,pause3);
}
function КСК_O(){
   document.getElementById('abreuvoir').setAttribute('value','1');//поилка
   document.getElementById('douche').setAttribute('value','1'); //душ
   document.getElementById(spec).setAttribute('value','1'); //спеца
    
    var d=document.getElementsByClassName('module module-style-20 module-css').nextElementSibling;
    d[0].click();
  
}
function КСК1(){
    // Сортировка
    var c = document.getElementsByClassName('grid-cell spacer-small-top spacer-small-bottom');
    var d = c[dl ].getElementsByTagName('a');
    var pause1=getRandomPause(1000,1300);
    d[0].click();
}
function КСК2(){
    // Запись в первый
    var c = document.getElementsByClassName('odd highlight');
    var d = c[0].getElementsByTagName('button');
    var e = d[dl];
    window.oldConfirm = window.confirm;
    window.confirm = (function (){return true;});
    e.click();
    window.confirm = window.oldConfirm;
}
