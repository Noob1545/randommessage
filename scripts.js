var allinput = document.getElementsByTagName("input");
        document.getElementById("title").innerText = "random text massage"
        var artir = 3

        function yazdir() {
            var allinput = document.getElementsByTagName("input");
            if(allinput.length == 3){
var text1 = document.getElementById("text1").value

var text2 = document.getElementById("text2").value

var text3 = document.getElementById("text3").value

var aray = [text1,text2,text3];

var randomindex = Math.floor(Math.random(...aray) * allinput.length++)

var aray1 = [text1,text2,text3,text4,text5,text6,text7,text8]

var randomindex1 = Math.floor(Math.random(...aray1) * allinput.length++)

alert("grup 1: "+aray[randomindex]+" "+
"grup 2: "+aray1[randomindex1]
)

console.log(aray);
            }
if(allinput.length == 4){
var allinput = document.getElementsByTagName("input");

var text1 = document.getElementById("text1").value

var text2 = document.getElementById("text2").value

var text3 = document.getElementById("text3").value

var text4 = document.getElementById("text4").value

var aray = [text1,text2,text3,text4]

var randomindex = Math.floor(Math.random(...aray) * allinput.length++)

var aray1 = [text1,text2,text3,text4,text5,text6,text7,text8]

var randomindex1 = Math.floor(Math.random(...aray1) * allinput.length++)

alert("grup 1: "+aray[randomindex]+" "+
"grup 2: "+aray1[randomindex1]
)

   console.log(aray)
}

if(allinput.length == 5){
var allinput = document.getElementsByTagName("input");

var text1 = document.getElementById("text1").value

var text2 = document.getElementById("text2").value

var text3 = document.getElementById("text3").value

var text4 = document.getElementById("text4").value

var text5 = document.getElementById("text5").value

var aray = [text1,text2,text3,text4,text5]

var randomindex = Math.floor(Math.random(...aray) * allinput.length++)

var aray1 = [text1,text2,text3,text4,text5,text6,text7,text8]

var randomindex1 = Math.floor(Math.random(...aray1) * allinput.length++)

alert("grup 1: "+aray[randomindex]+" "+
"grup 2: "+aray1[randomindex1]
)

   console.log(aray)
}

if(allinput.length == 6){
var allinput = document.getElementsByTagName("input");

var text1 = document.getElementById("text1").value

var text2 = document.getElementById("text2").value

var text3 = document.getElementById("text3").value

var text4 = document.getElementById("text4").value

var text5 = document.getElementById("text5").value

var text6 = document.getElementById("text6").value

var aray = [text1,text2,text3,text4,text5,text6]

var randomindex = Math.floor(Math.random(...aray) * allinput.length++)

var aray1 = [text1,text2,text3,text4,text5,text6,text7,text8]

var randomindex1 = Math.floor(Math.random(...aray1) * allinput.length++)

alert("grup 1: "+aray[randomindex]+" "+
"grup 2: "+aray1[randomindex1]
)


   console.log(aray)
}
if(allinput.length == 7){
var allinput = document.getElementsByTagName("input");

var text1 = document.getElementById("text1").value

var text2 = document.getElementById("text2").value

var text3 = document.getElementById("text3").value

var text4 = document.getElementById("text4").value

var text5 = document.getElementById("text5").value

var text6 = document.getElementById("text6").value

var text7 = document.getElementById("text7").value

var aray = [text1,text2,text3,text4,text5,text6,text7]

var randomindex = Math.floor(Math.random(...aray) * allinput.length++)

var aray1 = [text1,text2,text3,text4,text5,text6,text7,text8]

var randomindex1 = Math.floor(Math.random(...aray1) * allinput.length++)

alert("grup 1: "+aray[randomindex]+" "+
"grup 2: "+aray1[randomindex1]
)

   console.log(aray)
}

if(allinput.length == 8){
var allinput = document.getElementsByTagName("input");

var text1 = document.getElementById("text1").value

var text2 = document.getElementById("text2").value

var text3 = document.getElementById("text3").value

var text4 = document.getElementById("text4").value

var text5 = document.getElementById("text5").value

var text6 = document.getElementById("text6").value

var text7 = document.getElementById("text7").value

var text8 = document.getElementById("text8").value

var aray = [text1,text2,text3,text4,text5,text6,text7,text8]

var randomindex = Math.floor(Math.random(...aray) * allinput.length++)

var aray1 = [text1,text2,text3,text4,text5,text6,text7,text8]

var randomindex1 = Math.floor(Math.random(...aray1) * allinput.length++)

alert("grup 1: "+aray[randomindex]+" "+
"grup 2: "+aray1[randomindex1]
)

   console.log(aray)
}


        }
        function inputekle(){
            artir++
            var br = document.createElement("p")
        var createinput = document.createElement("input")

        createinput.type = "text"

        createinput.id = "text"+artir+""
        createinput.style.margin = "25px 50px -10px 580px"
        document.body.append(createinput,br)

        createinput.style.position = "relative"
        createinput.addEventListener("contextmenu",function(e){e.preventDefault(),createinput.remove()})
        }
        document.getElementById("buton").addEventListener("click",function(){
            if(allinput.length == 8){
                
                document.getElementById("buton").onclick = function(){
                if(allinput.length < 8){document.getElementById("buton").onclick = function(){
                    artir++
        var CreateP = document.createElement("p")
        var createinput = document.createElement("input")

        createinput.type = "text"

        createinput.id = "text"+artir+""

        document.body.append(createinput,CreateP)

        

        createinput.style.position = "relative"
        createinput.addEventListener("contextmenu",function(e){e.preventDefault(),createinput.remove()})}}
                }
            
            }
        
            
        })
