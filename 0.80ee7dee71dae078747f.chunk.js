webpackJsonp([0],{"21Y7":function(s,t,i){"use strict";i.d(t,"a",(function(){return n}));var e=i("OAmG"),n=[{path:"",children:[{path:"",component:e.a}]}]},OAmG:function(s,t,i){"use strict";(function(s){i.d(t,"a",(function(){return o}));var e=i("TToO"),n=i("3j3K"),a=i("5oXY"),l=i("S2Nz"),c=i("Qbdm"),o=(function(){function t(s,t,i,e){this.nameListService=s,this.route=t,this.titleService=i,this.metaService=e,this.localNews=[]}return t.prototype.ngOnInit=function(){var s=this;this.sub=this.route.params.subscribe((function(t){s.publiser=t.name,s.stype=t.stype,s.pub=s.publiser.replace(/-/g," "),s.getNews(),s.titleService.setTitle(s.pub),s.metaService.updateTag({content:s.pub},"description")}))},t.prototype.scrollToTopFunction=function(){console.log("ranga"),s("html, body").stop().animate({scrollTop:s("#maindiv").offset().top-70},1e3)},t.prototype.getNews=function(){var s=this;this.scrollToTopFunction(),this.nameListService.getNews(this.publiser,this.stype).subscribe((function(t){return s.localNews=t.myNews}),(function(t){return s.errorMessage=t}))},t.prototype.playMe=function(s){responsiveVoice.isPlaying()&&responsiveVoice.cancel(),responsiveVoice.speak(s)},t.prototype.stopMe=function(){responsiveVoice.cancel()},t})();o=e.b([i.i(n._11)({selector:"sd-my",template:i("rNlP"),styles:[i("Ou6D")]}),e.c("design:paramtypes",[l.a,a.c,c.d,c.e])],o)}).call(t,i("7t+N"))},Ou6D:function(s,t,i){var e=i("gHPo");s.exports="string"==typeof e?e:e.toString()},gHPo:function(s,t,i){t=s.exports=i("FZ+f")(void 0),t.push([s.i,'.news{background:#fff;overflow:hidden;z-index:1;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;height:500px;border:1px solid #eaeaea}.news,.news .img-figure{position:relative}.news .img-figure img{position:relative;overflow:hidden;-webkit-transition:all 1s ease;-moz-transition:all 1s ease;-ms-transition:all 1s ease;-o-transition:all 1s ease;transition:all 1s ease;width:370px;height:250px}.news:hover .img-figure img{-webkit-transform:scale(1.1);-moz-transform:scale(1.1);-ms-transform:scale(1.1);-o-transform:scale(1.1);transform:scale(1.1)}.news .title{padding:45px 30px;position:absolute;left:0;background:#fff;width:100%;height:100%;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}.news .title h1{margin:0;text-transform:uppercase;font-weight:700;font-size:14px;text-align:center}.news:hover .title{margin-top:-90px;background:#fff}.news p.description{position:relative;font-weight:400;line-height:22px;opacity:0;text-align:center;padding:15px 30px 0;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease;height:150px;overflow:hidden}.news:hover p.description{opacity:1}p.more,p.play{text-align:center}.more a{position:relative;font-size:13px;margin-top:30px;display:block;display:inline-block;color:#28998b}.more a,.more a:after{-webkit-transition:all .5s ease;-moz-transition:all .5s ease;-ms-transition:all .5s ease;-o-transition:all .5s ease;transition:all .5s ease}.more a:after{content:"";width:18px;height:1px;position:absolute;left:55px;top:9px;background:#28998b;vertical-align:middle;margin-left:10px}.news:hover a:after{width:30px}.cat{background:#a0bc9f;color:#fff;text-transform:uppercase;position:absolute;left:0;top:20px;z-index:1;padding:3px 15px}.capitalize{text-transform:capitalize}',""])},icz3:function(s,t,i){"use strict";i.d(t,"a",(function(){return d}));var e=i("TToO"),n=i("2Je8"),a=i("NVOs"),l=i("3j3K"),c=i("5oXY"),o=i("21Y7"),r=i("OAmG");console.log("`Detail` bundle loaded asynchronously");var d=(function(){function s(){}return s})();d.routes=o.a,d=e.b([i.i(l.z)({declarations:[r.a],imports:[n.e,a.a,c.a.forChild(o.a)]})],d)},"m/F8":function(s,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i("icz3");i.d(t,"DetailModule",(function(){return e.a}))},rNlP:function(s,t){s.exports='<div class="text-center why-pad" *ngIf="localNews.length">\n       <h2 class="capitalize">{{pub}}</h2>\n</div>\n\n<div class="text-center why-pad" *ngIf="!localNews.length">\n  <div class="cssload-wrap">\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n<div class="cssload-circle"></div>\n</div>\n</div>\n\n<div class="row">\n\t\t    <div class="col-sm-4" *ngFor="let news of localNews">\n\t\t\t\t<div class="news">\n\t\t\t\t\t<div class="img-figure" *ngIf="news.urlToImage">\n\t\t\t\t\t\t<div class="cat">{{news.author}}</div>\n\t\t\t\t\t\t<img src="{{news.urlToImage}}" class="img-responsive">\n\t\t\t\t\t</div>\n\n          <div class="jumbotron" *ngIf="!news.urlToImage">\n  <p class="capitalize">\n    {{pub}}\n  </p>\n</div>\n\n\t\t\t\t\t<div class="title">\n\t\t\t\t\t\t<h1>{{news.title}}</h1>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class="description">\n\t\t\t\t\t\t{{news.description}} ...\n\t\t\t\t\t</p>\n\n\n          <p class="play">\n          <a  (click)="playMe(news.description)">  <i class="fa fa-play fa-2x" aria-hidden="true"></i></a>\n          <a  (click)="stopMe()">  <i class="fa fa-stop fa-2x" aria-hidden="true"></i></a>\n\n\t\t\t\t\t</p>\n\n\t\t\t\t\t<p class="more">\n\t\t\t\t\t\t<a href="{{news.url}}" target="_blank" rel="noreferrer">read more</a>\n\t\t\t\t\t</p>\n\t\t\t</div>\n\n\n\t\t\t</div>\n\n\n\t</div>\n'}});