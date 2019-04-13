function run(){
            var i;
    for(i = 0; i<document.getElementsByTagName("game").length;i++){
        var game = document.getElementsByTagName("game")[i];
        var divdisp = document.createElement("div");
        divdisp.setAttribute("id","disp1");
        var disp = document.createElement("img");
        var desc = game.getElementsByTagName("gameDesc")[0].firstChild.data;
        if(desc == "ADVENTURE"){
        var imgLoc = game.getElementsByTagName("gameIcon")[0].firstChild.data;
        disp.setAttribute("src",imgLoc);
        var btnDiv = document.createElement("div");
        btnDiv.setAttribute("id","btn1")
        var btn = document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("value","BUY NOW");
        btn.setAttribute("onclick","details("+i+")");
        btnDiv.appendChild(btn);
        divdisp.appendChild(disp);
        divdisp.appendChild(btnDiv);
        document.getElementsByClassName("adventure")[0].appendChild(divdisp);
        }
        else if(desc == "ACTION"){
        var imgLoc = game.getElementsByTagName("gameIcon")[0].firstChild.data;
        disp.setAttribute("src",imgLoc);
        var btnDiv = document.createElement("div");
        btnDiv.setAttribute("class","btn1")
        var btn = document.createElement("input");
        btn.setAttribute("type","button");
        btn.setAttribute("value","BUY NOW");
        btn.setAttribute("onclick","details("+ i +")");
        btnDiv.appendChild(btn);
        divdisp.appendChild(disp);
        divdisp.appendChild(btnDiv);
        document.getElementsByClassName("action")[0].appendChild(divdisp);
        }
    }
    
}
var amount=0.00;
function go(index){
    var game = document.getElementsByTagName("game")[index];
    var titleko = game.getElementsByTagName("gameName")[0].firstChild.data;
    var desc = game.getElementsByTagName("gameDesc")[0].firstChild.data;
    var dev = game.getElementsByTagName("gameDev")[0].firstChild.data;
    var ico = game.getElementsByTagName("gameIcon")[0].firstChild.data;
    var date = game.getElementsByTagName("gameDate")[0].firstChild.data;
    var price = game.getElementsByTagName("gamePrice")[0].firstChild.data;
    var h;
    var checker=0;
    for(h=0;h<document.getElementsByClassName("detailmo").length;h++){
    var getter = document.getElementsByClassName("detailmo")[h];
    var itemko = getter.getElementsByTagName("label")[2].childNodes[0].nodeValue;
        if(itemko==titleko){
            checker++;
        }
    }
    if(checker==1){
     alert('This item is already in your cart!');   
    }
    else{
    var disDiv = document.createElement("div");
    disDiv.setAttribute("class","detailmo");
    var disp = document.createElement("img");
    var gametitle=document.createElement("label");
    var singet = document.createElement("label");
    singet.setAttribute("id","lbls");
    singet.setAttribute("class","hays");
    singet.innerHTML="PHP";
    gametitle.setAttribute("id","lbls");
    gametitle.innerHTML=titleko;
    gametitle.setAttribute("style","display:none");
    var presyo = document.createElement("label");
    presyo.setAttribute("id","lbls");
    presyo.setAttribute("class","bente");
    presyo.innerHTML =price;
    disDiv.appendChild(presyo);
    disDiv.appendChild(singet);
    disDiv.appendChild(gametitle);
    disp.setAttribute("src",ico);
    disDiv.appendChild(disp);
    var divBtn = document.createElement("div");
    divBtn.setAttribute("id","btn1");
    var addBtn = document.createElement("input");
    addBtn.setAttribute("type","button");
    addBtn.setAttribute("value","REMOVE TO CART");
    addBtn.setAttribute("onclick","remove(this)");
    addBtn.setAttribute("gameName",titleko);
    addBtn.setAttribute("gamePrice",price);
    divBtn.appendChild(addBtn);
    disDiv.appendChild(divBtn);
    document.getElementsByClassName("cart")[0].appendChild(disDiv);
    amount = eval(amount+parseFloat(price));
    $(document).ready(function() {
      $(".totalcart").text("TOTAL: "+amount.toFixed(2));
      $("#lblItems").text("MY CART");
      $(".adventure").css("display","none");
      $(".action").css("display","none");
      $(".indie").css("display","none");
      $(".rpg").css("display","none");
      $(".fps").css("display","none");
      $(".moba").css("display","none");
      $(".cart").css("display","none");
      $(".detalye").css("display","none");
      $(".checkout").css("display","none");
      $(".checkoutBody").css("display","none");
      $(".cartBtn").text("MY CART("+document.getElementsByClassName("detailmo").length+")")
      
    });
    alert('successfully added!');   
    }
    
    
}
function bilina(){
    $(document).ready(
    function(){
        $(".cart").css("display","none");
        $(".checkout").css("display","block");
        $(".checkoutBody").css("display","block");
        var display = document.getElementsByClassName("detailmo").length;
        var a;
            for(a=0;a<display;a++){
    var game = document.getElementsByClassName("detailmo")[a];
    var titleko = game.getElementsByTagName("label")[2].firstChild.data;
    var price = game.getElementsByTagName("label")[0].firstChild.data;
    var ico = game.getElementsByTagName("img")[0].getAttribute("src");
    var disDiv = document.createElement("div");
    disDiv.setAttribute("class","detailmo");
    var disp = document.createElement("img");
    var presyo = document.createElement("label");
    presyo.setAttribute("id","lbls");
    presyo.setAttribute("class","hays");
    presyo.innerHTML =price;
    disDiv.appendChild(presyo);
    disp.setAttribute("src",ico);
    disDiv.appendChild(disp);
    document.getElementsByClassName("checkoutBody")[0].appendChild(disDiv);
            }
        var getext = document.getElementsByClassName("totalcart")[0].innerHTML;
        $(".coTotal").text(getext);
        $("#buyall").css("display","none");
        $(".cart").empty();
        $(".cartBtn").text("MY CART");
        amount = 0.00;
        }
    );
}
function remove(cur){
    var ss = cur.getAttribute("gameName");
    var shit = document.getElementsByClassName("detailmo").length;
    var main = document.getElementsByClassName("cart")[0];
    for(a=0;a<shit;a++){
        var getter = document.getElementsByClassName("detailmo")[a];
        var itemko = getter.getElementsByTagName("label")[2].innerHTML;
        var getPrice = getter.getElementsByTagName("label")[0].childNodes[0].nodeValue;
        if(ss == itemko){
            getter.parentNode.removeChild(getter);
             amount = eval(amount-parseFloat(getPrice));   
            $(".cartBtn").text("MY CART("+document.getElementsByClassName("detailmo").length+")");
            if(amount==0){
                $(".totalcart").css("display","none");
            }
            else{
            $(".totalcart").text("Total: "+amount.toFixed(2));
            }
        }
    }
    
}
$(document).ready(function(){
    
    $("#login").click(function(){
        $(".logInForm").css("display","block");
        $(".signUpForm").css("display","none");
        $(this).css("color","#FFCC33");
        $("#signup").css("color","#0066FF")
    }
    );
    $("#signup").click(function(){
        $(".logInForm").css("display","none");
        $(".signUpForm").css("display","block");
        $(this).css("color","#FFCC33");
        $("#login").css("color","#0066FF");
    }
    );
    
    $("#ADVENTURE").click(
    function(){
      $("#lblItems").text("ADVENTURE TIME");
      $(".adventure").css("display","block");
      $(".action").css("display","none");
      $(".indie").css("display","none");
      $(".rpg").css("display","none");
      $(".fps").css("display","none");
      $(".moba").css("display","none");
      $(".cart").css("display","none");
      $(".detalye").css("display","none");
      $("#buyall").css("display","none");
      $(".totalcart").css("display","none");
      $(".checkout").css("display","none");
      $(".checkoutBody").css("display","none");
      $(".checkoutBody").empty();
      $(this).css("color","#FFCC33");
      $("#ACTION").css("color","aliceblue");
      $("#INDIE").css("color","aliceblue");
      $("#RPG").css("color","aliceblue");
      $("#FPS").css("color","aliceblue");
      $("#MOBA").css("color","aliceblue");
    }
    );
    
    $("#ACTION").click(
    function(){
      $("#lblItems").text("ACTION TIME");
      $(".adventure").css("display","none");
      $(".action").css("display","block");
      $(".indie").css("display","none");
      $(".rpg").css("display","none");
      $(".fps").css("display","none");
      $(".moba").css("display","none");
      $(".cart").css("display","none");
      $(".detalye").css("display","none");
      $("#buyall").css("display","none");
      $(".totalcart").css("display","none");
      $(".checkout").css("display","none");
      $(".checkoutBody").css("display","none");
      $(".checkoutBody").empty();
      $(this).css("color","#FFCC33");
      $("#ADVENTURE").css("color","aliceblue");
      $("#INDIE").css("color","aliceblue");
      $("#RPG").css("color","aliceblue");
      $("#FPS").css("color","aliceblue");
      $("#MOBA").css("color","aliceblue");
    }
    );
    
    $("#FPS").click(
    function(){
      $("#lblItems").text("FPS TIME");
      $(".adventure").css("display","none");
      $(".action").css("display","none");
      $(".indie").css("display","none");
      $(".rpg").css("display","none");
      $(".fps").css("display","block");
      $(".moba").css("display","none");
      $(".cart").css("display","none");
      $(".detalye").css("display","none");
      $("#buyall").css("display","none");
      $(".totalcart").css("display","none");
      $(".checkout").css("display","none");
      $(".checkoutBody").css("display","none");
      $(".checkoutBody").empty();
      $(this).css("color","#FFCC33");
      $("#ACTION").css("color","aliceblue");
      $("#INDIE").css("color","aliceblue");
      $("#RPG").css("color","aliceblue");
      $("#ADVENTURE").css("color","aliceblue");
      $("#MOBA").css("color","aliceblue");
    }
    );
    
    $("#RPG").click(
    function(){
      $("#lblItems").text("RPG TIME");
      $(".adventure").css("display","none");
      $(".action").css("display","none");
      $(".indie").css("display","none");
      $(".rpg").css("display","block");
      $(".fps").css("display","none");
      $(".moba").css("display","none");
      $(".cart").css("display","none");
      $(".detalye").css("display","none");
      $("#buyall").css("display","none");
      $(".totalcart").css("display","none");
      $(".checkout").css("display","none");
      $(".checkoutBody").css("display","none");
      $(".checkoutBody").empty();
      $(this).css("color","#FFCC33");
      $("#ACTION").css("color","aliceblue");
      $("#INDIE").css("color","aliceblue");
      $("#ADVENTURE").css("color","aliceblue");
      $("#FPS").css("color","aliceblue");
      $("#MOBA").css("color","aliceblue");
    }
    );
    
    $("#INDIE").click(
    function(){
      $("#lblItems").text("INDIE TIME");
      $(".adventure").css("display","none");
      $(".action").css("display","none");
      $(".indie").css("display","block");
      $(".rpg").css("display","none");
      $(".fps").css("display","none");
      $(".moba").css("display","none");
      $(".cart").css("display","none");
      $(".detalye").css("display","none");
      $("#buyall").css("display","none");
      $(".totalcart").css("display","none");
      $(".checkout").css("display","none");
      $(".checkoutBody").css("display","none");
      $(".checkoutBody").empty();
      $(this).css("color","#FFCC33");
      $("#ACTION").css("color","aliceblue");
      $("#ADVENTURE").css("color","aliceblue");
      $("#RPG").css("color","aliceblue");
      $("#FPS").css("color","aliceblue");
      $("#MOBA").css("color","aliceblue");
    }
    );
    
    $("#MOBA").click(
    function(){
      $("#lblItems").text("MOBA TIME");
      $(".adventure").css("display","none");
      $(".action").css("display","none");
      $(".indie").css("display","none");
      $(".rpg").css("display","none");
      $(".fps").css("display","none");
      $(".moba").css("display","block");
      $(".cart").css("display","none");
      $(".detalye").css("display","none");
      $("#buyall").css("display","none");
      $(".totalcart").css("display","none");
      $(".checkout").css("display","none");
      $(".checkoutBody").css("display","none");
      $(".checkoutBody").empty();
      $(this).css("color","#FFCC33");
      $("#ACTION").css("color","aliceblue");
      $("#INDIE").css("color","aliceblue");
      $("#RPG").css("color","aliceblue");
      $("#FPS").css("color","aliceblue");
      $("#ADVENTURE").css("color","aliceblue");
    }
    );
    
    $(".cartBtn").click(
    function(){
      $(".checkoutBody").empty();
      var check = $(".detailmo").length;
      if(check>0){
      $(".cart").css("display","block");
      $("#buyall").css("display","block");
      $(".totalcart").css("display","block");
      $("#lblItems").text("MY CART");
      $(".adventure").css("display","none");
      $(".action").css("display","none");
      $(".indie").css("display","none");
      $(".rpg").css("display","none");
      $(".fps").css("display","none");
      $(".moba").css("display","none");
      $(".detalye").css("display","none");
      $(".checkout").css("display","none");
      $(".checkoutBody").css("display","none");
        }
      else{
          alert('Empty Cart!');
      $(".checkout").css("display","none");
      $(".checkoutBody").css("display","none");
      }
    }
    );
    
    $("#backtol").click(
    function(){
      $(".detalye").css("display","none");
    }
    );
}
);

function details(index){
    var get = document.getElementsByTagName("game")[index];
    var getgameName = get.getElementsByTagName("gameName")[0].firstChild.data;
    var getgameDesc = get.getElementsByTagName("gameDesc")[0].firstChild.data;
    var getgameDev = get.getElementsByTagName("gameDev")[0].firstChild.data;
    var getgameDate = get.getElementsByTagName("gameDate")[0].firstChild.data;
    var getgamePrice = get.getElementsByTagName("gamePrice")[0].firstChild.data;
    var getgameIcon = get.getElementsByTagName("gameIcon")[0].firstChild.data;
    document.getElementById("addpa").setAttribute("onclick","go("+index+")");
    $(document).ready(function() {
      $(".tit").text("Game Title: "+getgameName);
      $("#view").attr("src",getgameIcon);
      $(".cat").text("Game Category: "+getgameDesc);
      $(".dte").text("Game Release Date: "+getgameDate);
      $(".dev").text("Game Developer: "+getgameDev);
      $(".prce").text("Price: "+getgamePrice);
      $("#lblItems").text("Game Details");
      $(".detalye").css("display","block");
        
    });
}
var xml;
function ajaxConnection() {
    xml = new XMLHttpRequest();
}
