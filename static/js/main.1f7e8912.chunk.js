(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Ichigo",clicked:!1,image:"https://vignette.wikia.nocookie.net/naruto-bleach-and-sonic/images/c/c4/Ichigo_Another_option.png/revision/latest?cb=20141214125820"},{id:2,name:"Rukia",clicked:!1,image:"https://vignette.wikia.nocookie.net/b-ua/images/9/9c/Rukia.jpg/revision/latest?cb=20130420081916"},{id:3,name:"Byakuya",clicked:!1,image:"https://vignette.wikia.nocookie.net/b-ua/images/e/e1/Byakuya.jpg/revision/latest?cb=20130403063933"},{id:4,name:"Orihime",clicked:!1,image:"https://vignette.wikia.nocookie.net/deathbattlefanon/images/6/65/Orihime.png/revision/latest?cb=20150223024918"},{id:5,name:"Toshiro",clicked:!1,image:"https://vignette.wikia.nocookie.net/bleachfanfiction/images/1/16/Hitsugayatoshiro.png/revision/latest?cb=20121118032331"},{id:6,name:"Aizen",clicked:!1,image:"https://vignette.wikia.nocookie.net/bleachhd/images/2/26/AizenFM.jpg/revision/latest?cb=20140811130605"},{id:7,name:"Ulquiorra",clicked:!1,image:"https://vignette.wikia.nocookie.net/bleachfanfiction/images/5/53/Ulquiorra_Cifer_mug_shot.png/revision/latest?cb=20100731210158"},{id:8,name:"Renji",clicked:!1,image:"https://myanimelist.cdn-dena.com/images/characters/10/171877.jpg"},{id:9,name:"Kenpachi",clicked:!1,image:"https://vignette.wikia.nocookie.net/bleachfanfiction/images/3/3b/Zaraki_Profile.png/revision/latest?cb=20180519051636"},{id:10,name:"Grimmjow",clicked:!1,image:"http://2.bp.blogspot.com/-eZwfqjXcFs8/Ub3CIbkZR_I/AAAAAAAAAMo/Nem0J2_vUK4/s1600/GrimmjowJeagerjaquesfull969604.jpg"},{id:11,name:"Kisuke",clicked:!1,image:"https://vignette.wikia.nocookie.net/bleach/images/1/16/Ep329UraharaProfileOption4.png/revision/latest?cb=20130919225443&path-prefix=en"},{id:12,name:"Rangiku",clicked:!1,image:"https://vignette.wikia.nocookie.net/bleachfanfiction/images/e/e8/RangikuA1.jpg/revision/latest?cb=20140417110752"},{id:13,name:"Ishida",clicked:!1,image:"https://vignette.wikia.nocookie.net/cardfight/images/4/4f/Uryu_Ishida_I.jpg/revision/latest?cb=20140507061800"},{id:14,name:"Nel",clicked:!1,image:"https://vignette.wikia.nocookie.net/bleach/images/e/e3/Nel.png/revision/latest?cb=20120623050732&path-prefix=en"},{id:15,name:"Yamamoto",clicked:!1,image:"https://vignette.wikia.nocookie.net/bleach/images/6/6c/206Yamamoto_profile.png/revision/latest?cb=20140606174201&path-prefix=en"},{id:16,name:"Chad",clicked:!1,image:"https://vignette.wikia.nocookie.net/bleach/images/d/dc/E351_Sado_1.jpg/revision/latest?cb=20111206160509&path-prefix=en"}]},,,function(e,i,t){e.exports=t(24)},,,,,function(e,i,t){},,function(e,i,t){},,function(e,i,t){},,function(e,i,t){},,function(e,i,t){},,function(e,i,t){"use strict";t.r(i);var a=t(0),n=t.n(a),c=t(2),o=t.n(c),r=(t(14),t(16),function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("h1",null,"Bleach Character Game!"),n.a.createElement("h4",null,"Earn points by clicking on the images.",n.a.createElement("br",null)," Game resets upon clicking double.")))}),s=t(3),l=t(4),m=t(7),g=t(5),d=t(8),h=(t(18),function(e){return n.a.createElement("div",{className:"allCards",key:e.id,onClick:function(){return e.handleClick(e.id,e.clicked)}},n.a.createElement("img",{id:e.name,src:e.image,alt:e.name}))}),k=t(6),u=(t(20),function(e){function i(){var e,t;Object(s.a)(this,i);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(g.a)(i)).call.apply(e,[this].concat(n)))).state={images:k,message:"Click any picture to start",score:0,topScore:0},t.handleClick=function(e,i){var a=t.state.images;if(i)return a.forEach(function(e,i){a[i].clicked=!1}),t.setState({image:a.sort(function(){return Math.random()-.5}),message:"Try Again!",score:0});a.forEach(function(i,t){e===i.id&&(a[t].clicked=!0)});var n=t.state,c=n.topScore,o=n.score+1,r=o>c?o:c;return t.setState({image:a.sort(function(){return Math.random()-.5}),message:"Correct!",score:o,topScore:r})},t}return Object(d.a)(i,e),Object(l.a)(i,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"container scoreContainer"},n.a.createElement("div",{className:"gameMessage text-center"},n.a.createElement("p",null,this.state.message)),n.a.createElement("div",{className:"gameScores text-center"},n.a.createElement("p",null,"Score: ",this.state.score," | Top Score: ",this.state.topScore))),n.a.createElement("div",{className:"container-fluid cardContainer"},n.a.createElement("div",{className:"img-card"},this.state.images.map(function(i){return n.a.createElement(h,{key:i.id,id:i.id,name:i.name,clicked:i.clicked,image:i.image,handleClick:e.handleClick})}))))}}]),i}(a.Component)),p=(t(22),function(){return n.a.createElement("div",{className:"container-fluid mainContainer"},n.a.createElement(r,null),n.a.createElement(u,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.1f7e8912.chunk.js.map