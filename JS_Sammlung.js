var wissen=0;
var init=0;


function beginn(){
    window.location = "ChaiFu.html";
}


function Fu_Fragew(){ //Fus Frage Richtig beantwortet
    wissen++;
    var antwortbyw="Die Antwort ist korrekt, sehr gut.";
    document.getElementById('Fu_Antwort').innerHTML=antwortbyw;
    var e = document.getElementById('probe');//Antworten
    var r = document.getElementById('an');//Antwortbutton
    e.style.display = "none";//Antworten aus
    r.style.display = "none";//Antwortbutton aus
}
    
function Fu_Fragef(){//Fus FRage falschbeantwortet
   
    var antwortbyf = "Die Antwort ist nicht korrekt. Die korrekte Reihenfolge ist Feuer, Wasser, Erde, Luft, Äther.";
    document.getElementById('Fu_Antwort').innerHTML=antwortbyf;
    var e = document.getElementById('probe');//Antworten
    var r = document.getElementById('an');//Antwortbutton
    e.style.display = "none";//Antworten aus
    r.style.display = "none";//Antwortbutton aus
}
function Cava_Fragew(){//Frage 1 von Cava richtig
    wissen++;
    var ee= document.getElementById('probe2');//Antworten
    var rr = document.getElementById('an2');//Antwortbutton
    ee.style.display = "none";//Antworten aus
    rr.style.display = "none";//Antwortbutton aus
    var antwortbyf = "Die Antwort ist korrekt.";
    document.getElementById('Cava_Antwort').innerHTML=antwortbyf;
}

function Cava_Fragef(){//Frage 1 von Cava richtig
    var ee= document.getElementById('probe2');//Antworten
    var rr = document.getElementById('an2');//Antwortbutton
    ee.style.display = "none";//Antworten aus
    rr.style.display = "none";//Antwortbutton aus
    var antwortbyf = "Die Antwort ist nicht korrekt. Die korrekte Antwort wäre gewesen Aguamenti.";
    document.getElementById('Cava_Antwort').innerHTML=antwortbyf;
}

function Cava_Fragew2(){//Frage 2 von Cava richtig
    wissen++;
    var ee= document.getElementById('cfrage2');//Antworten
    ee.style.display = "none";//Antworten aus
    var antwortbyw = "Oh? Sie konnten diese schwierige Frage korrekt beantworten? Sehr gut.";
    document.getElementById('Cava2_Antwort').innerHTML=antwortbyw;
}

function Cava_Fragef2(){//Frage 2 von Cava richtig
    
    var ee= document.getElementById('cfrage2');//Antworten
    ee.style.display = "none";//Antworten aus
    var antwortbyf = "Die Antwort ist nicht korrekt. Die korrekte Antwort wäre gewesen Episkey.";
    document.getElementById('Cava2_Antwort').innerHTML=antwortbyf;
}

function Cava_Fragew3(){//Frage 3 von Cava richtig
    wissen++;
    var ee= document.getElementById('cfrage3');//Antworten
    ee.style.display = "none";//Antworten aus
    var antwortbyw = "Die Antwort ist korrekt. Damit erkläre ich die Stunde für beendet.";
    document.getElementById('Cava3_Antwort').innerHTML=antwortbyw;
}

function Cava_Fragef3(){//Frage 3 von Cava richtig
    var ee= document.getElementById('cfrage3');//Antworten
    ee.style.display = "none";//Antworten aus
    var antwortbyf = "Die Antwort ist nicht korrekt. Die korrekte Antwort wäre gewesen: Incendio. Aber damit ist die Stunde nun auch vorbei.";
    document.getElementById('Cava3_Antwort').innerHTML=antwortbyf;
}
function kontrolle() {
    var e1= document.getElementById('hi');//Antworten
    e1.style.display = "none";//Antworten aus

    var zutat1 = document.getElementById('textfeld').value;;
    var zutat2 = document.getElementById('textfeld2').value;
    var zutat3 = document.getElementById('textfeld3').value;

    if (zutat1 === 'Kamille' && zutat2 === 'Pfefferminze' && zutat3 === 'Himbeere'){
        wissen = wissen +3;
        var antwortz = "Sehr gut! Sie dürfen den Zaubertrank jetzt vor der Klasse einmal vorbrauen.";
    document.getElementById('lösung').innerHTML=antwortz;
        //document.write(wissen);
    }
    else {
        wissen ++;
        var antwortz = " Die richtige Reihenfolge wäre: Kamille, Pfefferminze und Himbeere.";
        document.getElementById('lösung').innerHTML=antwortz;
}
        
    }


    function zauber(){//Frage Zauberspruch richtig
        wissen++;
        var ee1= document.getElementById('zauberfrage');//Antworten
        ee1.style.display = "none";//Antworten aus
        var antwortbyw = "Die Antwort ist korrekt. Nun brauen Sie schon!";
        document.getElementById('Antwort_1').innerHTML=antwortbyw;
    }
    
    function zauberf(){//Frage Zauberspruch Falsch
        var ee1= document.getElementById('zauberfrage');//Antworten
        ee1.style.display = "none";//Antworten aus
        var antwortbyf = "Die Antwort ist nicht korrekt. Der Zauber lautet Potio vulnus sanitatem. Aber Sie dürfen dennoch brauen.";
        document.getElementById('Antwort_1').innerHTML=antwortbyf;
    }
    var pf1;
    var pf2;
    var pf3;
    var pf4;
    var pf5;

    function prüfung(){
    
        pf1=document.getElementById('wahl1').value;
        pf2=document.getElementById('wahl2').value;
        pf3=document.getElementById('wahl3').value;
        pf4=document.getElementById('wahl4').value;
        pf5=document.getElementById('wahl5').value;
        
        if(pf1 == 'a'){
            init++;
            
        }
        if(pf2 == 'b'){
            init++;
            
        }
        if(pf3 == 'b'){
            init++;
            
        }
        if(pf4 == 'c'){
            init++;
           
        }
        if(pf5 == 'a'){
            init++;
        }

        //window.location = "PrüfungB.html";
    }


function speicher (){
    var Eingabe = [wissen]; //x zum Array
    localStorage.setItem("transfer", JSON.stringify(Eingabe));//Array to String
    }
function speicher2 (){
    var Eingabe2 = [init]; //x zum Array
    localStorage.setItem("transfer2", JSON.stringify(Eingabe2));//Array to String
    }

    function prüfungb(){
        window.location = "PrüfungB.html";
    }


    function aus(){
        var e1= document.getElementById('Boxk');//Antworten
        e1.style.display = "none";//Antworten aus 


    }
    var eigenleben = 100;
    var gegnerleben =90;
    var eigenerangrif = 45 + wissen;
    var gegnerangriff = 60-init;

    function Kampf(){
    
            document.getElementById('leben').innerHTML= 'Leben: '+eigenleben;
            document.getElementById('leben2').innerHTML='Gegner Leben: '+gegnerleben;
        
            if (eigenleben <=0 || gegnerleben <=0){
            var e2= document.getElementById('endekampf');
            e2.style.visibility = "visible"; 
            var e1= document.getElementById('Kampf');
            e1.style.display = "none";    
                if (gegnerleben<= 0){
                    var gut = 'Sie haben gewonnen, herzlichen Glückwunsch'
                    wissen = wissen +10;
                    document.getElementById('ausgang').innerHTML=gut;
                }
                else{
                    var schlecht = 'Sie haben leider verloren.'
                    document.getElementById('ausgang').innerHTML=schlecht;
                }


        }

    }
    var min = 1;
    var max = 100;
function angrif1(){
    document.getElementById('angrif1').disabled = true; //Butten aus
    document.getElementById('angrif2').disabled = true;
    document.getElementById('gegnerk').disabled = false; //Butten an
    var ran = Math.floor(Math.random() * (max - min)) + min;

    if (ran <= eigenerangrif){
        gegnerleben = gegnerleben -20;
    }


}
function angrif2(){
    document.getElementById('angrif2').disabled = true;
    document.getElementById('angrif1').disabled = true;
    document.getElementById('gegnerk').disabled = false;
    var ran = Math.floor(Math.random() * (max - min)) + min;

    if (ran <= eigenerangrif){
        gegnerleben = gegnerleben -30;
    }


}
function gegnerk(){
    document.getElementById('angrif1').disabled = false;
    document.getElementById('angrif2').disabled = false;
    document.getElementById('gegnerk').disabled = true;
    var ran = Math.floor(Math.random() * (max - min)) + min;

    if (ran <= gegnerangriff){
        eigenleben = eigenleben -10;
    }


}

function auswertung() {
    var max = 18; //max Punktzahl von wissen
    var mit = 8;
    var min= 5;
    if (wissen === max){
         document.getElementById('wissen').innerHTML='Du hast ' + wissen+ ' Punkte erreich und damit ein O erzeilt.';
         
          
    }
    if (wissen>= mit && wissen < max){
        document.getElementById('wissen').innerHTML='Du hast ' + wissen+ ' Punkte erreich und damit ein E erzeilt.';
    }
     
    if (wissen >= min && wissen < mit){
       document.getElementById('wissen').innerHTML='Du hast ' + wissen+ ' Punkte erreich und damit ein A erzeilt.';
    }
    if(wissen < min){
        document.getElementById('wissen').innerHTML='Du hast '+ wissen + ' Punkte erreich und bist damit leider durchgefallen.';
    }

    }