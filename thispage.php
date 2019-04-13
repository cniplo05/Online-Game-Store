<!DOCTYPE html>
<html>
<head>
    <title>UPLAY | SHOP</title>
<script src="js/jquery-3.2.1.js"></script>
<script src="js/jquery-3.2.1.min.js"></script>
<script src="js/qscript.js"></script>
<script src="js/jquery-mousewheel.js"></script>
<script src="js/jquery-scrollpane.js"></script>
<link href="style/thiscss.css" rel="stylesheet" type="text/css">
<link href="style/scrollpane.css" rel="stylesheet" type="text/css">
</head>
<body onload="run()">
    <xml style="display:none">
        <games>
            <game>
                <gameNo>001</gameNo>
                <gameName>ARK</gameName>
                <gameDesc>ADVENTURE</gameDesc>
                <gameDev>KONAMI</gameDev>
                <gameDate>2015-02-12</gameDate>
                <gameIcon>images/adventure/ark.jpg</gameIcon>
                <gamePrice>1299.50</gamePrice>
            </game>
            
            <game>
                <gameNo>002</gameNo>
                <gameName>DIVISION</gameName>
                <gameDesc>ADVENTURE</gameDesc>
                <gameDev>KONAMI</gameDev>
                <gameDate>2016-02-12</gameDate>
                <gameIcon>images/adventure/division.jpg</gameIcon>
                <gamePrice>1299.50</gamePrice>
            </game>
            
            <game>
                <gameNo>003</gameNo>
                <gameName>H1Z1</gameName>
                <gameDesc>ADVENTURE</gameDesc>
                <gameDev>KONAMI</gameDev>
                <gameDate>2013-02-12</gameDate>
                <gameIcon>images/adventure/h1z1.jpg</gameIcon>
                <gamePrice>1299.50</gamePrice>
            </game>
            
            <game>
                <gameNo>004</gameNo>
                <gameName>NIER</gameName>
                <gameDesc>ADVENTURE</gameDesc>
                <gameDev>KONAMI</gameDev>
                <gameDate>2011-02-12</gameDate>
                <gameIcon>images/adventure/nier.jpg</gameIcon>
                <gamePrice>1299.50</gamePrice>
            </game>
            
            <game>
                <gameNo>005</gameNo>
                <gameName>PLAYERUNKNOWN'S BATTLEGROUNDS</gameName>
                <gameDesc>ACTION</gameDesc>
                <gameDev>EA</gameDev>
                <gameDate>2016-06-15</gameDate>
                <gameIcon>images/action/pubg.jpg</gameIcon>
                <gamePrice>493.50</gamePrice>
            </game>
            
            <game>
                <gameNo>006</gameNo>
                <gameName>ASSASSIN'S CREED</gameName>
                <gameDesc>ACTION</gameDesc>
                <gameDev>KONAMI</gameDev>
                <gameDate>2011-06-15</gameDate>
                <gameIcon>images/action/ac.jpg</gameIcon>
                <gamePrice>2293.50</gamePrice>
            </game>
            
            <game>
                <gameNo>007</gameNo>
                <gameName>GTA GRAND THEFT AUTO</gameName>
                <gameDesc>ACTION</gameDesc>
                <gameDev>UBISOFT</gameDev>
                <gameDate>2018-06-15</gameDate>
                <gameIcon>images/action/gta.jpg</gameIcon>
                <gamePrice>3293.50</gamePrice>
            </game>
            
            <game>
                <gameNo>008</gameNo>
                <gameName>FALLOUT 4</gameName>
                <gameDesc>ACTION</gameDesc>
                <gameDev>EA</gameDev>
                <gameDate>2013-06-15</gameDate>
                <gameIcon>images/action/f4.jpg</gameIcon>
                <gamePrice>293.50</gamePrice>
            </game>
            
            <game>
                <gameNo>009</gameNo>
                <gameName>WITCHER WILD HUNT</gameName>
                <gameDesc>ACTION</gameDesc>
                <gameDev>UBISOFT</gameDev>
                <gameDate>2018-04-15</gameDate>
                <gameIcon>images/action/witcher.jpg</gameIcon>
                <gamePrice>9293.50</gamePrice>
            </game>
            
            <game>
                <gameNo>010</gameNo>
                <gameName>METAL GEAR SOLID V</gameName>
                <gameDesc>ACTION</gameDesc>
                <gameDev>PROJEKT RED</gameDev>
                <gameDate>2003-08-25</gameDate>
                <gameIcon>images/action/mg.jpg</gameIcon>
                <gamePrice>293.50</gamePrice>
            </game>
        </games>
    </xml>
<header id="mainHead">
    <span id="wcTxt"> WELCOME TO OUR UPLAY CONSOLE ONLINE SHOP!!</span>
</header>
<header id="top">
    <div>
        <span id="topTxt">HOME</span>
        <span id="topTxt" class="cartBtn">MY CART</span>
        <span id="topTxt">MY ACCOUNT</span>
    </div>
</header>
<div id="fillForm">
    <div id="output">
        <div id="logSign">
            <div id="login"   data-tab="log-in">Login</div>
            <div id="signup"  data-tab="sign-up">Signup</div>
        </div>
        <div class="signUpForm" style="display:none">
            <label id="lbls">Username:</label><br>
            <input type="text" id="user_name"placeholder="Enter your username"><br>
            <label id="lbls">Password:</label><br>
            <input type="password" id="user_pass" placeholder="password"><br>
            <label id="lbls">Email:</label>
            <input type="text" id="user_email" placeholder="asd123@gmail.com">
            
            <button>SignUp</button>
        </div>
        <div class="logInForm" style="display:block">
            <label id="lbls">Username:</label><br>
            <input type="text" id="user_name"placeholder="Enter your username"><br>
            <label id="lbls">Password:</label><br>
            <input type="password" id="user_pass" placeholder="password">
            <button>Login</button>
        </div>
    </div>
</div>
    
<div id="items" class="adventure"style="display:none">
    
</div>
<div id="items" class="action"style="display:none">
    
</div>
<div id="items" class="moba" style="display:none">

</div>
<div id="items" class="indie" style="display:none">

</div>
<div id="items" class="fps" style="display:none">

</div>
<div id="items" class="rpg" style="display:none">

</div>

<div id="items" class="cart" style="display:none">

</div>
<label id="lbls" class="totalcart" style="display:none"></label>
    
<div id="items" class="checkout" style="display:none">
    <div id="coHeader">    
        <label id="lbls" class="coTy">THANK YOU FOR PURCHASING!</label>
        <label id="lbls" class="coNumber" >Your order number is:</label>
        <label id="lbls" class="coTotal" >TOTAL:</label>
        <label id="lbls" class="coItems" >Item(s):</label>
        <label id="lbls" class="coPrices" >Price(s):</label>
    </div>
</div>
<div id="items" class="checkoutBody" style="display:none">

</div>
<div id="items" class="detalye" style="display:none">
    <div id="gImg">
    <img  id="view"src="images/action/2.jfif"></div>
    <div id="gDetail">
        <label id="lbls" class="tit">Game Title:</label><br>
        <label id="lbls" class="cat">Game Category:</label><br>
        <label id="lbls" class="dev">Game Developer:</label><br>
        <label id="lbls" class="dte">Game Release Date:</label><br>
        <label id="lbls" class="prce">Game Price:</label>
        <input id="addpa" onclick="details(this)"type="button" value="ADD TO CART">
        <input id = "backtol"type="button" value="Go back">
    </div>
</div>
<div id="categories">
    <div id="ACTION" class="selection" data-tab ="action">ACTION</div>
    <div id="ADVENTURE" class="selection" data-tab ="adventure">ADVENTURE</div>
    <div id="MOBA" class="selection" data-tab="moba">MOBA</div>
    <div id="RPG" class="selection" data-tab="rpg">RPG</div>
    <div id="FPS"  class="selection" data-tab="fps">FPS</div>
    <div id="INDIE"  class="selection" data-tab="indie">INDIE</div>
</div>
l>
<div id="lupet"></div>
    <input  id="buyall"type="button" value="Proceed to checkout" onclick ="bilina()"style="display:none">
    <label id="lblCat">
    CATEGORIES:
    </label>
<label id="lblItems">
    Items:
</label>
</body>
</html>
