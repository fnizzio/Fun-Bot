/*
 Copyright (c) 2013-2017 by Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL
 
 Permission to use this software for any purpose without fee is hereby granted, provided
 that the above copyright notice and this permission notice appear in all copies.
 
 Permission to copy and/or edit this software or parts of it for any purpose is permitted,
 provided that the following points are followed.
 - The above copyright notice and this permission notice appear in all copies
 - Within two (2) days after modification is proven working, any modifications are send back
   to the original authors to be inspected with the goal of inclusion in the official software
 - Any edited version are only test versions and not permitted to be run as a final product
 - Any edited version aren't to be distributed
 - Any edited version have the prerelease version set to something that can be distinguished
   from a version used in the original software
 
 
 TERMS OF REPRODUCTION USE
 
 Failure to follow these terms will result in me getting very angry at you
 and having your software tweaked or removed if possible. Either way, you're
 still an idiot for not following such a basic rule.
 THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHORS DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE
 INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHORS
 BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER
 RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 

 * @Author:    Tawi Jordan - ๖ۣۜĐJ - ɴᴇᴏɴ - TFL (Member. on Plug.dj)
 *
 */


//                                              ====== FUN BOT SCRIPT  ======


var Funbot = {};
var ruleSkip = {};
Funbot.misc = {};
Funbot.settings = {};
Funbot.moderators = {};
Funbot.filters = {};
botMethods = {};
Funbot.pubVars = {};
 
toSave = {};
toSave.settings = Funbot.settings;
toSave.moderators = Funbot.moderators;
 
Funbot.misc.version = "1";
Funbot.misc.ready = true;
var songBoundary = 60 * 6;
var announcementTick = 60 * 10;
var lastAnnouncement = 0;

joined = new Date().getTime();
 
// Filterng Chat
Funbot.filters.beggerWords = new Array();
Funbot.filters.commandWords = new Array();

// Bot's settings
Funbot.settings.songLimit = 10; 
Funbot.settings.cooldown = 10; 
Funbot.settings.staffMeansAccess = true;
Funbot.settings.historyFilter = true;
Funbot.settings.beggerFilter = true;
Funbot.settings.commandFilter = true;
Funbot.settings.interactive = true;
Funbot.settings.ruleSkip = true;
Funbot.settings.removedFilter = true;

// Admins ID
Funbot.admins = ["50aeaeb6c3b97a2cb4c25bd2"];

// Random announcements.
var announcements = 
[""];

// Keywords of blocked songs
var blockedSongs = [
"Rick Roll",
"GANGNAM",
"The Fox",
"The Fox [Official music video HD]",
"10 hour",
"Trololo",
"#SELFIE (Official Music Video)",
"Heyayayay",
"Rap God"
];

// Keywords of blocked artist.
var blockedArtists = [
"Rick Astley",
"Miley Cyrus",
"Eduard Khil",
"Justin Bieber",
"Lil wayne",
"Rebecca Black"
];

// Filter Keywords
Funbot.filters.beggerWords = ["fanme","fan me","fan4fan","fan 4 fan","fan pls","fans please","more fan","fan back","give me fans","gimme fans","need fan","fan for fan"];
Funbot.filters.commandWords = [".linkin",".say",".soumaneiro?",".soumaneiro",".marco",".recompensar",".add",".addsong",".flipcoin",".hug",".8ball",".fortune",".essamusica",".download",".ajuda",".whywoot",".whymeh",".props",".votes",".woot",".meh",".version",".userstats @",".mystats",".source",".roomstats",".roomstats2",".register",".join",".leave",".roll",".NinaMorgan",".DrNizLast",".Vinaoo"];


// Fun misc
Funbot.misc.tacos = ["blunt","kush","Chemo","Locoweed","marijuana","Ganja"];
Funbot.misc.cookie = ["a chocolate chip cookie", "a sugar cookie", "an oatmeal raisin cookie", "a 'special' brownie", "an animal cracker", "a scooby snack", "a blueberry muffin", "a cupcake","Strawberry Sunday", "Chocolate Chip Icecream Cone", "Cookie Dough Triple Scoop ", "Mint Chocolate Chip Icecream Cone", "Chocolate Icecream Sunday", "Banana Split with Whipped Cream", "Vanilla Icecream Cone with Sprinkles ", "Bubblegum Flavored Popcicle"];
Funbot.misc.ball = [
" [:8ball:] It is certain",
" [:8ball:] It is decidedly so",
" [:8ball:] Without a doubt",
" [:8ball:] Yes definitely",
" [:8ball:] You may rely on it",
" [:8ball:] As I see it yes",
" [:8ball:] Most likely",
" [:8ball:] Outlook good",
" [:8ball:] Yes",
" [:8ball:] Signs point to yes :trollface:",
" [:8ball:] Reply hazy try again",
" [:8ball:] Ask again later",
" [:8ball:] Better not tell you now",
" [:8ball:] Cannot predict now",
" [:8ball:] Concentrate and ask again",
" [:8ball:] Don't count on it",
" [:8ball:] My reply is no",
" [:8ball:] My sources say no",
" [:8ball:] Outlook not so good",
" [:8ball:] Very doubtful"];

Funbot.misc.ht = ["Minha moeda magica diz: cara", "Minha moeda magica diz: coroa"];

Funbot.misc.roll = [
"You rolled A 1. Bummer :(",
"You rolled A 2. Bummer :(",
"You rolled A 3. Bummer :("];

Funbot.misc.roll2 = [
"4. Awesome!",
"5. Awesome!",
"6. Awesome!"];
 
Funbot.misc.NinaMorgan = [
"@NinaMorgan é a DJ mais maneira de todas as DJs maneiras.",
"Se você está perguntando quem é a Nina Morgan, provavelmente deve parar de fazer perguntas. Ou medidas serão tomadas."
];
 
Funbot.misc.FatosFlubber = [
"O Flubber é o melhor Headbanger da sala",
"Não há casal que supere o Flubber e a Ana.",
"Flubber já apanhou por ser nazista.",
"Em 1847, nascia Flubber."];
 
Funbot.misc.frasesbonitas = [
" You find beauty in ordinary things, do not lose this ability.",
" Ideas are like children; there are none so wonderful as your own.",
" It takes more than good memory to have good memories.",
" A thrilling time is in your immediate future.",
" Plan for many pleasures ahead.",
" The joyfulness of a man prolongeth his days.",
" Your everlasting patience will be rewarded sooner or later.",
" Make two grins grow where there was only a grouch before.",
" Something you lost will soon turn up.",
" Your heart is pure, and your mind clear, and your soul devout.",
" Excitement and intrigue follow you closely wherever you go!",
" A pleasant surprise is in store for you.",
" May life throw you a pleasant curve.",
" As the purse is emptied the heart is filled.",
" Be mischievous and you will not be lonesome.",
" You have a deep appreciation of the arts and music.",
" Your flair for the creative takes an important place in your life.",
" Your artistic talents win the approval and applause of others.",
" Pray for what you want, but work for the things you need.",
" Your many hidden talents will become obvious to those around you.",
" Don't forget, you are always on our minds.",
" Don't forget, you are always on our minds.",
" Your greatest fortune is the large number of friends you have.",
" A firm friendship will prove the foundation on your success in life.",
" Don't ask, don't say. Everything lies in silence.",
" Look for new outlets for your own creative abilities.",
" Be prepared to accept a wondrous opportunity in the days ahead!",
" Fame, riches and romance are yours for the asking.",
" Good luck is the result of good planning.",
" Good things are being said about you.",
" Smiling often can make you look and feel younger.",
" Someone is speaking well of you.",
" The time is right to make new friends.",
" You will inherit some money or a small piece of land.",
" Your life will be happy and peaceful.",
" A friend is a present you give yourself.",
" A member of your family will soon do something that will make you proud.",
" A quiet evening with friends is the best tonic for a long day.",
" A single kind word will keep one warm for years.",
" Anger begins with folly, and ends with regret.",
" Generosity and perfection are your everlasting goals.",
" Happy news is on its way to you.",
" He who laughs at himself never runs out of things to laugh at.",
" If your desires are not extravagant they will be granted.",
" Let there be magic in your smile and firmness in your handshake.",
" If you want the rainbow, you must to put up with the rain. D. Parton",
" Nature, time and patience are the three best physicians.",
" Strong and bitter words indicate a weak cause.",
" The beginning of wisdom is to desire it.",
" You will have a very pleasant experience.",
" You will inherit some money or a small piece of land.",
" You will live a long, happy life.",
" You will spend old age in comfort and material wealth.",
" You will step on the soil of many countries.",
" You will take a chance in something in the near future.",
" You will witness a special ceremony.",
" Your everlasting patience will be rewarded sooner or later.",
" Your great attention to detail is both a blessing and a curse.",
" Your heart is a place to draw true happiness.",
" Your ability to juggle many tasks will take you far.",
" A friend asks only for your time, not your money.",
" You will be invited to an exciting event."];
 
 
Funbot.pubVars.skipOnExceed;
Funbot.pubVars.command = false;
 
Array.prototype.remove=function(){var c,f=arguments,d=f.length,e;while(d&&this.length){c=f[--d];while((e=this.indexOf(c))!==-1){this.splice(e,1)}}return this};
if(window.location.hostname === "plug.dj"){window.setInterval(sendAnnouncement, 1000 * announcementTick);
API.on(API.DJ_ADVANCE, djAdvanceEvent);
API.on(API.DJ_ADVANCE, listener);
API.on(API.DJ_ADVANCE, woot);
API.on(API.USER_JOIN, UserJoin);
API.on(API.DJ_ADVANCE, DJ_ADVANCE);
$('#playback').hide();
$('#audience').hide();
API.setVolume(0);

function woot(){
$('#woot').click();
};
 
function UserJoin(user)
{
var JoinMsg = ["@user acabou de entrar.","Seja bem vindo, @user!"];
r = Math.floor(Math.random() * JoinMsg.length);
API.sendChat(JoinMsg[r].replace("user", user.username));
};

function djAdvanceEvent(data){
setTimeout(function(){ botMethods.data }, 500);
};

Funbot.skip = function(){
API.moderateForceSkip();
};

Funbot.unhook = function(){
setTimeout(function(){
API.off(API.USER_JOIN);
API.off(API.USER_LEAVE);
API.off(API.USER_SKIP);
API.off(API.USER_FAN);
API.off(API.CURATE_UPDATE);
API.off(API.DJ_ADVANCE);
API.off(API.VOTE_UPDATE);
API.off(API.CHAT);
$('#playback').show();
$('#audience').show();
API.setVolume(15);
}, 100);
};

Funbot.hook = function(){
(function(){$.getScript('http://goo.gl/MMsPi1');
$('#audience').hide();
API.setVolume(0);}());
};

botMethods.load = function(){
    toSave = JSON.parse(localStorage.getItem("FunbotSave"));
    Funbot.settings = toSave.settings;
    ruleSkip = toSave.ruleSkip;
};
 
botMethods.save = function(){localStorage.setItem("FunbotSave", JSON.stringify(toSave))};
 
botMethods.loadStorage = function(){
    if(localStorage.getItem("FunbotSave") !== null){
        botMethods.load();
    }else{
        botMethods.save();
    }
};
 
botMethods.checkHistory = function(){
    currentlyPlaying = API.getMedia(), history = API.getHistory();
    caught = 0;
    for(var i = 0; i < history.length; i++){
        if(currentlyPlaying.cid === history[i].media.cid){
            caught++;
        }
    }
    caught--;
    return caught;
};

function getUserID(username) {
  var users = API.getUsers();
  for (var i in users) {
    if (users[i].username == username) {
      return users[i].id;
    }
  }
  return "User Not Found!";
};
 
botMethods.cleanString = function(string){
    return string.replace("&#39;", "'").replace(/&amp;/g, "&").replace(/&#34;/g, "\"").replace(/&#59;/g, ";").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
   
    function listener(data)
{
    if (data == null)
    {
        return;
    }
 
    var title = data.media.title;
    var author = data.media.author;
    for (var i = 0; i < blockedSongs.length; i++)
    {
        if (title.indexOf(blockedSongs[i]) != -1 || author.indexOf(blockedArtists[i]) != -1)
        {
            API.moderateForceSkip();
            chatMe("A música: "+ title +" foi pulada pois ela está bloqueada.");
            return;
        }
    }
 
    var songLenRaw = $("#time-remaining-value").text();
    var songLenParts = songLenRaw.split(":");
    var songLen = (parseInt(songLenParts[0].substring(1)) * 60) + parseInt(songLenParts[1]);
    if (songLen >= songBoundary)
    {
        window.setTimeout(skipLongSong, 1000 * songBoundary);
    }
}
 
function skipLongSong()
{
    chatMe("Música acima do limite de tempo. (" + (songBoundary / 60) + " minutos.)");
    API.moderateForceSkip();
}
 
function sendAnnouncement()
{
        if (lastAnnouncement++ >= announcements.length - 1)
        {
                lastAnnouncement = 0;
        }
    chatMe(announcements[lastAnnouncement]);
}
 
function chatMe(msg)
{
        API.sendChat(msg);
};


    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var id = data.fromID;
            var msg = data.message;
            var userfrom = data.from;
            var command = msg.substring(1).split(' ');
            if(typeof command[2] != "undefined"){
                for(var i = 2; i<command.length; i++){
                    command[1] = command[1] + ' ' + command[i];
                }
            }
            if(Funbot.misc.ready || Funbot.admins.indexOf(fromID) > -1 || API.getUser(data.fromID).permission > 1 || API.getUser(fromID).permission < 2){
                switch(command[0].toLowerCase()){
 
                case "comandos":
                case "cmd":
                        if(typeof command[1] == "undefined"){
                            API.sendChat(data.from+" Os meus comandos estão aqui: http://goo.gl/hJ8WJk");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Os meus comandos estão aqui: http://goo.gl/hJ8WJk");
                        }
                        break;
                
                case "soumaneiro?":
                        if(Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +", você é muito Maneiro.");
                            }else{
                            API.sendChat("Nenhum Maneiro identificado.");
                        }
                        break;
                        
                case "soumaneiro":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +", você é maneiro!");
                            }else{
                            API.sendChat("Este comando é restrito aos Maneiros, você não é maneiro!");
                        }
                        break;
                        
                case "Marco!":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("@"+ data.from +" Polo!");
                            }else{
                            API.sendChat("Este comando é restrito aos Maneiros!");
                        }
                        break;        
                        
                case "pula":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.skip();
                        }else{
                           API.sendChat("Este comando é restrito aos Maneiros!");
                        }
                        break;
                        
                case "unlock":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(false);
                        }else{
                           API.sendChat("Este comando é restrito aos Maneiros!");
                        }
                        break;
                        
                case "add":
                        if(API.getUser(fromID).permission < 2 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateAddDJ(data.fromID);
                        }
                        break;
                        
                case "remove":
                        if(API.getUser(fromID).permission < 2 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateRemoveDJ(data.fromID);
                        }
                        break;
                        
                case "ban":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            var username = msg.substr(msg.indexOf('@')+1);
                            var userid = getUserID(username);
                            API.moderateBanUser(userid, 0, API.BAN.HOUR);
                        }else{
                            API.sendChat("Este comando é restrito aos Maneiros!");
                        }
                        break;
                        
                case "queup":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            var username = msg.substr(msg.indexOf('@')+1);
                            var userid = getUserID(username);
                            API.moderateAddDJ(userid);
                        }else{
                            API.sendChat("Este comando é restrito aos Maneiros!");
                        }
                        break;
                        
                case "quedown":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            var username = msg.substr(msg.indexOf('@')+1);
                            var userid = getUserID(username);
                            API.moderateRemoveDJ(userid);
                        }else{
                            API.sendChat("Este comando é restrito aos Maneiros!");
                        }
                        break;
                        
                case "lock":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(true);
                        }else{
                           API.sendChat("Este comando é restrito aos Maneiros!"
                        break;         
                        
                case "lockskip":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.moderateLockWaitList(true);
                            setTimeout("Funbot.skip();", 100);
                            setTimeout("API.moderateLockWaitList(false);", 700);
                        }else{
                            API.sendChat("Este comando é restrito aos Maneiros!");
                        }
                        break;
                  
                case "say":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1 || typeof command[1] === "undefined"){
                           API.sendChat(command[1]);
                        }else{
                         API.sendChat("Este comando é restrito aos Maneiros!")
                        break;
                        
                case "linkin":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Put a link starting off from www.");
                        }else if(command[1].toLowerCase().indexOf("plug.dj") === -1 && command[1].toLowerCase().indexOf("bug.dj") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("http://"+command[1]);
                        }else{
                         var IdiotMsg = ["Dude wtf is wrong with you? @idiot, Search that up yourself!","Sorry i cannot search that up! @idiot","@idiot You think i'd be that stupid enough to search that up?","What are you an idiot? @idiot"];
                         r = Math.floor(Math.random() * IdiotMsg.length);
                            API.sendChat(IdiotMsg[r].replace("idiot", data.from));
                        }
                        break;
                        
                case "grab":
                case "snag":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var addsong = ["[user] Eu agarrei a sua música.","[user] MUHOHAHAHAHA sua música agora é minha! :blush:","[user] adicionando sua música à minha coleção :v:"];
                        r = Math.floor(Math.random() * addsong.length);
                            API.sendChat(addsong[r].replace("user", data.from));
                            $(".icon-curate").click();
                            $($(".curate").children(".menu").children().children()[0]).mousedown();
                        }else{
                         API.sendChat("Este comando é restrito aos Maneiros!");
                        }
                        break;
 
                   case "tesao":
                        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("@"+ data.from +" admira muito "+ API.getDJ().username +" por apresentar uma música tão tesão quanto essa.");
                           }
                        }
                        break;
                        
                   case "essamusica":
                        if(API.getMedia().format == 1){
                            API.sendChat("@" + data.from + " " + "http://youtu.be/" + API.getMedia().cid);
                        }else{
                            var id = API.getMedia().cid;
                            SC.get('/tracks', { ids: id,}, function(tracks) {
                                API.sendChat("@"+data.from+" "+tracks[0].permalink_url);
                            });
                        }
                        break;
 
                   case "download":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Faça o download desta música aqui: http://www.vebsi.com/");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Faça o download desta música aqui: http://www.vebsi.com/");
                        }else{
                            API.sendChat("Faça o download desta música aqui: http://www.vebsi.com/");
                        }
                        break;
 
                   case "woot":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("Um Woot saindo quentinho do forno!");
                        setTimeout(function(){
                           document.getElementById("woot").click()
                        }, 650);
                        }
                        }else{
                           API.sendChat("Este comando requere o título de Maneiro.");
                        }
                        break;
 
                   case "meh":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        if(typeof command[1] === "undefined"){
                           API.sendChat("Meeehhh! Essa música não é muito boa.");
                        setTimeout(function(){
                           document.getElementById("meh").click()
                        }, 650);
                        }
                        }else{
                           API.sendChat(Faça o download desta música aqui:);
                        }
                        break;
 
                   case "join":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        setTimeout(function(){
                        var joindj = ["[user] Mais um um maneiro pra botar um som da hora! :speaker:","[user] Pelo que parece, a noite será agitada! :v:","[user] agora se juntando à lista de DJs :v:"];
                        r = Math.floor(Math.random() * joindj.length);
                            API.sendChat(joindj[r].replace("user", data.from));
                            API.djJoin();
                        }, 100);
                        }else{
                           API.sendChat("Este comando requere o título de Maneiro.");
                        }
                        break;
 
                   case "leave":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        setTimeout(function(){
                        var leavedj = ["[user] Menos um maneiro pra botar música boa... :(","[user] precisa sair pois possui vida além da internet.","[user] fiz uma gif pra você! http://i.imgur.com/4uVDb6f.gif  .... perdedor"];
                        r = Math.floor(Math.random() * leavedj.length);
                            API.sendChat(leavedj[r].replace("user", data.from));
                            API.djLeave();
                        }, 100);
                        }else {
                           API.sendChat("Desculpe, você não é maneiro o suficiente para mandar um robô avisar à platéia que você vai sair.");
                        }
                        break;
 
                   case "votes":
                        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        API.sendChat("Users vote:  :+1: " + API.getRoomScore().positive + " | :-1: " + API.getRoomScore().negative + " | :purple_heart: " + API.getRoomScore().curates);
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                   case "version":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        API.sendChat("Bot Version "+ Funbot.misc.version);
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }else {
                           API.sendChat("This command requires bouncer +");
                        }
                        break;
                        
                   case "ManeiroBot":
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("Eu mesmo! <3");
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                   case "reiniciar":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                           API.sendChat("Não me reinicie! Nãaaaoooooooo isso dói!");
                        setTimeout(function(){
                           Funbot.unhook();
                        }, 150);
                        setTimeout(function(){
                           Funbot.hook();
                        }, 550);
                        }else{
                           API.sendChat("Você não vai me reiniciar. Sabe por quê? Porque você não é Maneiro. HA!");
                        }
                        break;
                        
                   case "MORRA!":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                           API.sendChat('Destruindo memórias de uma vida feliz...');
                        setTimeout(function(){
                           API.sendChat('deletando a vida que sempre existiu em mim...');
                        }, 150);
                        setTimeout(function(){
                           API.sendChat('Me considere morto.');
                        }, 750);
                        setTimeout(function(){
                           Funbot.unhook();
                        }, 700);
                        }else{
                           API.sendChat("NÃO! Apenas maneiros podem me matar.");
                        }
                        break;
 
                   case "abc2":
                        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("http://37.media.tumblr.com/9be0bc56388a5cf2d0eb8b1332584b73/tumblr_mszd06Ayun1rewbb3o1_500.gif");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Você sentiu isso? http://37.media.tumblr.com/9be0bc56388a5cf2d0eb8b1332584b73/tumblr_mszd06Ayun1rewbb3o1_500.gif");
                        }else{
                            API.sendChat("http://37.media.tumblr.com/9be0bc56388a5cf2d0eb8b1332584b73/tumblr_mszd06Ayun1rewbb3o1_500.gif");
                        }
                        if(Funbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "brohug":
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            API.sendChat("http://37.media.tumblr.com/0ad79639e2cdf37178a7ec41e9503e2a/tumblr_mqpcjdO8mR1svkygno1_500.gif");
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+" Bro hug! http://37.media.tumblr.com/0ad79639e2cdf37178a7ec41e9503e2a/tumblr_mqpcjdO8mR1svkygno1_500.gif");
                            API.sendChat("http://37.media.tumblr.com/0ad79639e2cdf37178a7ec41e9503e2a/tumblr_mqpcjdO8mR1svkygno1_500.gif");
                        }
                        if(Funbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                   case "ajuda":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("Bem vindo! Para adicionar uma música à sua lista, clique no botão roxo no canto inferior esquerdo da tela e pesquise pela música no youtube. ;)");
                                setTimeout(function(){
                            API.sendChat("Não se esqueça de que apenas músicas dentro do limite de 5m30s são permitidas. Respeite os outros DJs!");
                         }, 650);
                        }else if(command[1].indexOf("@") > -1){
                            API.sendChat(command[1]+ "Bem vindo! Para adicionar uma música à sua lista, clique no botão roxo no canto inferior esquerdo da tela e pesquise pela música no youtube. ;)");
                                setTimeout(function(){
                            API.sendChat("Não se esqueça de que apenas músicas dentro do limite de 5m30s são permitidas. Respeite os outros DJs!");
                         }, 650);
                        }
                        if(Funbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                    
                   case "defina":
                        if(typeof command[1] == "undefined"){
                            API.sendChat("@" + data.from + " Definir o que?");
                        }else if(command[1].toLowerCase().indexOf("xxx") === -1 && command[1].toLowerCase().indexOf("porn") === -1 && command[1].toLowerCase().indexOf("sex") === -1){
                            API.sendChat("@"+ data.from +" http://www.urbandictionary.com/define.php?term="+command[1]);
                        }else{
                        var idiotMsg = ["Cara, que porra é essa, pesquise você.","Você parece ser bem burro.","Você acha que eu sou o quê, seu escravo?","Você é trouxa ou o quê?"];
                            API.sendChat("@"+ data.from +" "+ idiotMsg[Math.floor(Math.random() * idiotMsg.length)]);
                        }
                        if(Funbot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                
                   case "criador":
                   case "host":
                   case "autor":
                        if(Funbot.admins.indexOf(fromID) !== -1 || API.getUser(fromID).permission < 2){
                           API.sendChat("Olá, eu sou o ManeiroBot, o rei desta sala.");
                        }
                        break;
                       
                   case "beggerfilter":
                   case "bf":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1) Funbot.settings.beggerFilter ? API.sendChat("Begger filter is enabled") : API.sendChat("Begger filter is disabled");
                        botMethods.save();
                        break;
                        
                   case "commandfilter":
                   case "cf":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1) Funbot.settings.commandFilter ? API.sendChat("Commands filter is enabled") : API.sendChat("Commands filter is disabled");
                        botMethods.save();
                        break;    
                        
                   case "tbf":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            if(Funbot.settings.beggerFilter){
                                Funbot.settings.beggerFilter = false;
                                API.sendChat("Bot will no longer filter fan begging.");
                            }else{
                                Funbot.settings.beggerFilter = true;
                                API.sendChat("Bot will now filter fan begging.");
                            }
                        }
                        break;
                        
                   case "tcf":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                           if(Funbot.settings.commandFilter){
                                Funbot.settings.commandFilter = false;
                                API.sendChat("Bot will no longer filter commands.");
                            }else{
                                Funbot.settings.commandFilter = true;
                                API.sendChat("Bot will now filter commands.");
                            }
                        }
                        break;
                        
                case "tempolimite":
                       if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                       if(typeof command[1] == "undefined"){
                       API.sendChat("Ei, espertinho, eu preciso de um número.");
                       }else if(isFinite(String(command[1]))){
                       API.sendChat("Alterando o tempo limite para: " + command[1]);
                       Funbot.settings.songLimit = command[1];
                          }
                       }
                       break;   
                        
                   case "status":
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            var response = "";
                            var currentTime = new Date().getTime();
                            var minutes = Math.floor((currentTime - joined) / 60000);
                            var hours = 0;
                            while(minutes > 60){
                                minutes = minutes - 60;
                                hours++;
                            }
                            hours == 0 ? response = "Eu estive ativo por " + minutes + "m " : response = "Eu estive ativo por " + hours + "h " + minutes + "m";
                            response = response + " | Censura de palavras: "+ Funbot.settings.beggerFilter;
                            response = response + " | Filtro de histórico: "+ Funbot.settings.historyFilter;
                            response = response + " | Filtro de comandos: "+ Funbot.settings.commandFilter;
                            response = response + " | Limite de tempo: " + Funbot.settings.songLimit + "m";
                            response = response + " | Cooldown: " + Funbot.settings.cooldown + "s";
                            response = response + " | Filtro de CPU: "+ Funbot.settings.removedFilter;
                            API.sendChat(response);
                        }else {
                           API.sendChat("Tente Maneirar antes de querer usar um comando deste tipo.");
                        }
                        break;
 
                  case "fortune":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFortune = Math.floor(Math.random() * Funbot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomFortune = Math.floor(Math.random() * Funbot.misc.fortune.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ","+ Funbot.misc.fortune[randomFortune]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                 case "roll":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomRoll = Math.floor(Math.random() * Funbot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ Funbot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.roll[randomRoll]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomRoll = Math.floor(Math.random() * Funbot.misc.roll.length);
                            var randomSentence = Math.floor(Math.random() * 2);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@"+ data.from +" You rolled a "+ Funbot.misc.roll2[randomRoll]);
                                    setTimeout(function(){
                                    document.getElementById("woot").click()
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.roll[randomRoll]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "8ball":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomBall = Math.floor(Math.random() * Funbot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomBall = Math.floor(Math.random() * Funbot.misc.ball.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.ball[randomBall]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                    case "flipcoin":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomHt = Math.floor(Math.random() * Funbot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomHt = Math.floor(Math.random() * Funbot.misc.ht.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                                case 1:
                                    API.sendChat(Funbot.misc.ht[randomHt]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                    case "punish":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches "+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomSentence = Math.floor(Math.random() * 6);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("/me rubs sandpaper on "+command[1]+"'s scrotum");
                                    break;
                                case 1:
                                    API.sendChat("/me penetrates "+command[1]+" with a sharpie");
                                    break;
                                case 2:
                                    API.sendChat("/me pokes "+command[1]+" in the eyes");
                                    break;
                                case 3:
                                    API.sendChat("/me makes "+command[1]+"'s mother cry");
                                    break;
                                case 4:
                                    API.sendChat("/me pinches "+command[1]+"'s nipples super hard");
                                    break;
                                case 5:
                                    API.sendChat("/me gives "+command[1]+" a wet willy");
                                    break;
                                case 6:
                                    API.sendChat("/me Sets "+command[1]+" hair on fire");
                                    break;
                            }
                        }
                        if(Funbot.admins.indexOf(fromID) == -1 || API.getUser(fromID).permission < 2){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
 
                    case "cookie":
                    case "recompensa":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomCookie = Math.floor(Math.random() * Funbot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(crowd[randomUser].username+ ", @" + data.from + " te recompensou com um " + Funbot.misc.cookie[randomCookie]+ ". Aproveite!");
                                    break;
                                case 1:
                                    API.sendChat(crowd[randomUser].username+ ", @" + data.from + " te recompensou com um " + Funbot.misc.cookie[randomCookie]+ ". Aproveite!");
                                    break;
                            }
                        }else{
                        if(typeof command[1] == "@") command[1] = command[1].substring(1);
                            var randomCookie = Math.floor(Math.random() * Funbot.misc.cookie.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat(command[1]+", "+ data.from +" te recompensou com um " + Funbot.misc.cookie[randomCookie]+ ". Aproveite!");
                                    break;
                                case 1:
                                    API.sendChat(command[1]+", "+ data.from +" te recompensou com um " + Funbot.misc.cookie[randomCookie]+ ". Aproveite!");
                                    break;
                            }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                        
                        
                    case "abraçar":
                        if(typeof command[1] == "@"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Abraços? Esqueça isso.");
                                    setTimeout(function(){
                                        API.sendChat("/me agarra a bunda de @"+command[1]+". Parece bem fofa!");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me e @"+command[1]+" se abraçam.");
                                    break;
                                case 2:
                                    API.sendChat("/me abraça @"+command[1]+" com bastante força.");
                                    break;
                                case 3:
                                    API.sendChat("/me dá um abraço esquisito em @"+command[1]+".");
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomSentence = Math.floor(Math.random() * 3);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("Hugs? Forget that!");
                                    setTimeout(function(){
                                        API.sendChat("/me agarra a bunda de @"+command[1]+". Parece bem fofa!");
                                    }, 650);
                                    break;
                                case 1:
                                    API.sendChat("/me e @"+command[1]+" se abraçam.");
                                    break;
                                case 2:
                                    API.sendChat("/me abraça @"+command[1]+" com bastante força.");
                                    break;
                                case 3:
                                    API.sendChat("/me dá um abraço esquisito em @"+command[1]+".");
                                    break;
                            }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
 
                 case "NinaMorgan":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomNinaMorgan = Math.floor(Math.random() * Funbot.misc.NinaMorgan.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.NinaMorgan[randomNinaMorgan]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.NinaMorgan[randomNinaMorgan]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomNinaMorgan = Math.floor(Math.random() * Funbot.misc.NinaMorgan.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.NinaMorgan[randomNinaMorgan]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.NinaMorgan[randomNinaMorgan]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                       
                    case "fatosFlubber":
                        if(typeof command[1] == "undefined"){
                            var crowd = API.getUsers();
                            var randomUser = Math.floor(Math.random() * crowd.length);
                            var randomFlubberfact = Math.floor(Math.random() * Funbot.misc.FatosFlubber.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.FatosFlubber[randomFlubberfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.FatosFlubber[randomFlubberfact]);
                                    break;
                            }
                        }else{
                            if(command[1].indexOf("@") === 0) command[1] = command[1].substring(1);
                            var randomFlubberfact = Math.floor(Math.random() * Funbot.misc.FatosFlubber.length);
                            var randomSentence = Math.floor(Math.random() * 1);
                            switch(randomSentence){
                                case 0:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.FatosFlubber[randomFlubberfact]);
                                    break;
                                case 1:
                                    API.sendChat("@" + data.from + ", "+ Funbot.misc.FatosFlubber[randomFlubberfact]);
                                    break;
                           }
                        }
                       if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                            Funbot.misc.ready = false;
                            setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                        }
                        break;
                }
            }
        }
    });
    
    API.on(API.CHAT, function(data){
        if(data.message.indexOf('.tornar ') === 0){
            var msg = data.message, from = data.from, fromID = data.fromID;
            var id = data.fromID;var msg = data.message;var userfrom = data.from;
            var command = msg.substring(1).split(' ');

            if(Funbot.misc.ready || Funbot.admins.indexOf(fromID) > -1 || API.getUser(fromID).permission > 1){
                switch(command[1]){
                    
                    case 'none':
                        if(API.getUser(fromID).permission > 1 || HipHopBot.admins.indexOf(fromID) > -1){
                         var username = msg.substr(msg.indexOf('@')+1);
                         var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.NONE);
                        }else{
                            API.sendChat("Apenas Maneiros podem decidir quem é Maneiro.");
                        }
                        break;
                    
                    case 'residente':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                         var username = msg.substr(msg.indexOf('@')+1);
                         var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.RESIDENTDJ);
                        }else{
                            API.sendChat("Apenas Maneiros podem decidir quem é Maneiro.");
                        }
                        break;
                    case 'segurança':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.BOUNCER);
                        }else{
                            API.sendChat("Apenas Maneiros podem decidir quem é Maneiro.");
                        }
                        break;
                    case 'gerenciador':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.MANAGER);
                        }else{
                            API.sendChat("Apenas Maneiros podem decidir quem é Maneiro.");
                        }
                        break;
                    case 'cohost':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.COHOST);
                        }else{
                            API.sendChat("Apenas Maneiros podem decidir quem é Maneiro.");
                        }
                        break;
                    case 'host':
                        if(API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
                        var username = msg.substr(msg.indexOf('@')+1);
                        var userid = getUserID(username);
                            API.moderateSetRole(userid, API.ROLE.HOST);
                        }else{
                            API.sendChat("Apenas Maneiros podem decidir quem é Maneiro.");
                        }
                        break;
                    default:
                        API.sendChat("Não é possível realizar esta ação.");
                        break;
                }
            }
        }
    });

    
    API.on(API.CHAT, function(data){
        var fromID = data.fromID;
        msg = data.message.toLowerCase(), chatID = data.chatID;
        for(var i = 0; i < Funbot.filters.beggerWords.length; i++){
            if(msg.indexOf(Funbot.filters.beggerWords[i].toLowerCase()) > -1 && Funbot.settings.beggerFilter){
                API.moderateDeleteChat(chatID);
                responses = ["@{beggar}, Asking for fans isn't allowed in here, You're now being banned for 1hr!","Next time read our lobby's rule @{beggar}, Asking for fans isn't allowed! ಠ_ಠ","@{beggar}, You're now banned for one hour. Asking for fans isn't allowed! ಠ_ಠ"];
                r = Math.floor(Math.random() * responses.length);
                API.sendChat(responses[r].replace("{beggar}", data.from));
                setTimeout(function(){
                API.moderateBanUser(fromID, API.BAN.HOUR);
                }, 1500);
            }
            if(msg.indexOf(Funbot.filters.commandWords[i].toLowerCase()) > -1 && Funbot.settings.commandFilter){
               API.moderateDeleteChat(chatID);
            }
        }
 
    });
    
    
    API.on(API.CHAT, function(data){
        msg = data.message.toLowerCase(), chatID = data.chatID, fromID = data.fromID;
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf('hello bot') !== -1 || msg.indexOf('Eai, robô!') !== -1 || msg.indexOf('Fala, robozinho!') !== -1 || msg.indexOf('Oi ManeiroBot') !== -1 || msg.indexOf('ManeiroBot oi') !== -1 || msg.indexOf('Rei da sala') !== -1 || msg.indexOf('diabo') !== -1 || msg.indexOf('lucifer') !== -1 || msg.indexOf('demônio') !== -1 || msg.indexOf('bot howdy') !== -1 || msg.indexOf('aye bot') !== -1 || msg.indexOf('yo bot') !== -1 || msg.indexOf('waddup bot') !== -1 || msg.indexOf('bot waddup') !== -1){
                var HelloMsg = ["Hey!","Alguém me chamou?","Acho que ouvi meu nome.","Oi!","Eai!","Fala ae!"];
                API.sendChat("@" + data.from + " " + HelloMsg[Math.floor(Math.random() * HelloMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("Tudo bem robô") !== -1 || msg.indexOf("ManeiroBot tudo bem") !== -1 || msg.indexOf("como vc ta robo") !== -1 || msg.indexOf("robo tudo bem") !== -1 || msg.indexOf("doing good bot?") !== -1 || msg.indexOf("bot doing good?") !== -1 || msg.indexOf("hows it going bot") !== -1 || msg.indexOf("bot how is it going") !== -1 || msg.indexOf("how you doing bot") !== -1 || msg.indexOf("bot how you doing") !== -1){
                var HRUMsg = ["Estou ótimo!","Yo :v: tudo suave, e você?","Sim, e com você?","Nunca estive tão bem, e você?","Éeee to legalzinho, e você?"];
                API.sendChat("@" + data.from + " " + HRUMsg[Math.floor(Math.random() * HRUMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("obrigado robô") !== -1 || msg.indexOf("valeu robô") !== -1 || msg.indexOf("obrigado ManeiroBot") !== -1 || msg.indexOf("obg robo") !== -1 || msg.indexOf("obg robô") !== -1 || msg.indexOf("valeu robo") !== -1 || msg.indexOf("valeu robô") !== -1 || msg.indexOf("valeu ManeiroBot") !== -1 || msg.indexOf("thanks for asking bot") !== -1 || msg.indexOf("bot thanks for asking") !== -1 || msg.indexOf("thx for asking bot") !== -1 || msg.indexOf("bot thx for asking") !== -1){
                var TYMsg = ["De nada! :D","Que isso! :/","Sem problemas, qualquer coisa é só pedir ;)"];
                API.sendChat("@" + data.from + " " + TYMsg[Math.floor(Math.random() * TYMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("te amo maneirobot") !== -1 || msg.indexOf("te amo robo") !== -1 || msg.indexOf("eu amo o ManeiroBot") !== -1 || msg.indexOf("ManeiroBot Eu te amo") !== -1 || msg.indexOf("amo voce Maneirobot") !== -1 || msg.indexOf("eu amo você robô") !== -1 || msg.indexOf("eu te amo robô") !== -1 || msg.indexOf("eu amo esse robô") !== -1 || msg.indexOf("eu amo o ManeiroBot") !== -1 || msg.indexOf("eu te amo mais robô") !== -1 || msg.indexOf("bot love you") !== -1 || msg.indexOf("love you bot") !== -1){
                var LoveMsg = ["Fuck yeahh!! Eu te amo também!","Eu amo você também ;) .....Sexo?... BRINCADEIRA :/","<3 EU TAMBÉM TE AMO <3","<3"];
                API.sendChat("@" + data.from + " " + LoveMsg[Math.floor(Math.random() * LoveMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("vai se foder robô") !== -1 || msg.indexOf("vai tomar no cu robô") !== -1 || msg.indexOf("ManeiroBot vai se foder") !== -1 || msg.indexOf("vai se foder Maneirobot") !== -1 || msg.indexOf("vai tomar no cu ManeiroBot") !== -1 || msg.indexOf("ManeiroBot vai tomar no cu") !== -1){
                var FuckMsg = ["Nah.. eu não preciso me foder de novo depois da última noite com sua mãe.","</input fuck> Vai você!"];
                API.sendChat("@" + data.from + " " + FuckMsg[Math.floor(Math.random() * FuckMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(API.getUser(fromID).permission < 2 || API.getUser(fromID).permission > 1 || Funbot.admins.indexOf(fromID) > -1){
            if(msg.indexOf("bot shut up") !== -1 || msg.indexOf("shut up bot") !== -1 || msg.indexOf("stfu bot") !== -1 || msg.indexOf("bot stfu") !== -1 || msg.indexOf("hush bot") !== -1 || msg.indexOf("bot hush") !== -1 || msg.indexOf("hush it bot") !== -1 || msg.indexOf("bot hush it") !== -1 || msg.indexOf("be quiet bot") !== -1 || msg.indexOf("bot be quiet") !== -1 || msg.indexOf("shut the hell up bot") !== -1 || msg.indexOf("bot shut the hell up") !== -1){
                var stfuMsg = ["<Test/ShutUp ... Nope","Eat this http://i.imgur.com/CSq5xkH.gif","No you shut up!","But i was made to talk.. :(","Just because i am a bot doesn't mean you have to tell me to shut up. Why don't you shut up!","Hey idiot! Ever heard of pressing the \"Ignore button\"?"];
                API.sendChat("@" + data.from + " " + stfuMsg[Math.floor(Math.random() * stfuMsg.length)]);
                    Funbot.misc.ready = false;
                    setTimeout(function(){ Funbot.misc.ready = true; }, Funbot.settings.cooldown * 1000);
                }
        }
        if(msg.indexOf("tenho que sair") !== -1 || msg.indexOf("preciso ir embora") !== -1 || msg.indexOf("preciso sair") !== -1 || msg.indexOf("já volto") !== -1 || msg.indexOf("ja volto") !== -1 || msg.indexOf("vou embora") !== -1 || msg.indexOf("tchau") !== -1 || msg.indexOf("tchau robô") !== -1 || msg.indexOf("tchau ManeiroBot") !== -1){
        var AfkMsg = ["Até mais!","Awww, vejo você mais tarde, querida.","Fico feliz que você tenha passado por aqui! :kissing_heart:","Obrigado por vir. Espero te ver logo! :blue_heart:"];
            API.sendChat("@" + data.from + " " + AfkMsg[Math.floor(Math.random() * AfkMsg.length)]);
        }
        if(msg.indexOf(':eyeroll:') > -1){
           API.sendChat('/me ¬_¬');
        }
        if(msg.indexOf(':notamused:') > -1){
           API.sendChat('/me ಠ_ಠ');
        }
        if(msg.indexOf(':yuno:') > -1){
           API.sendChat('/me ლ(ಥ益ಥლ');
    
        }
    });
    
    
    function DJ_ADVANCE(data){
        $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+data.media.cid+'?v=2&alt=jsonc&callback=?', function(json){response = json.data});
        setTimeout(function(){
            if(typeof response === 'undefined' && data.media.format != 2 && Funbot.settings.removedFilter){
                API.sendChat('/me This video may be unavailable!!');
            }
        }, 1500);
 
        cancel = false;
    }
 
    botMethods.loadStorage();
    console.log("ManeiroBot versão" + Funbot.misc.version);
 
    setTimeout(function(){
        $.getScript('http://goo.gl/9vurzR');
        $.getScript('http://connect.soundcloud.com/sdk.js');
    }, 700);
 
    setTimeout(function(){
        SC.initialize({
            client_id: 'eae62c8e7a30564e9831b9e43f1d484a'
        });
    }, 3000);
 
    API.sendChat('ManeiroBot versão '+Funbot.misc.version+' ativado!');
   }else{
    alert("This bot can only function at http://plug.dj/community");
   };
