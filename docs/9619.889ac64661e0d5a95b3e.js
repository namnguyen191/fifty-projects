(self.webpackChunkfifty_projects=self.webpackChunkfifty_projects||[]).push([[9619],{9619:(n,e,t)=>{"use strict";t.r(e),t.d(e,{DaySeventeenModule:()=>d});var o=t(1116),i=t(8928),r=t(529),c=t(8619),a=t(9624),s=t(2693);const g=function(n,e,t){return{green:n,orange:e,red:t}};function v(n,e){if(1&n&&(c.ynx(0),c.TgZ(1,"div",6),c._UZ(2,"img",7),c.TgZ(3,"div",8),c.TgZ(4,"h3",9),c._uU(5),c.qZA(),c.TgZ(6,"span",10),c._uU(7),c.qZA(),c.qZA(),c.TgZ(8,"div",11),c.TgZ(9,"h3"),c._uU(10,"Overview"),c.qZA(),c.TgZ(11,"p"),c._uU(12),c.qZA(),c.qZA(),c.qZA(),c.BQk()),2&n){const n=e.$implicit,t=c.oxw();c.xp6(2),c.Q6J("src",t.MOVIE_DB_IMG_URL+n.poster_path,c.LSH)("alt",n.original_title+"Movie Poster"),c.xp6(3),c.Oqu(n.original_title),c.xp6(1),c.Q6J("ngClass",c.kEZ(6,g,n.vote_average>=8,n.vote_average>=5&&n.vote_average<8,n.vote_average<5)),c.xp6(1),c.Oqu(n.vote_average),c.xp6(5),c.hij(" ",n.overview," ")}}const _=[{path:"",component:(()=>{class n{constructor(n,e){this.titleService=n,this.http=e,this.movies=[],this.MOVIE_DB_IMG_URL="https://image.tmdb.org/t/p/w500"}ngOnInit(){this.titleService.setTitle("Fifty Projects - Day 17"),this.http.get(`${r.N.theMovieDbUrl}/movie/popular?api_key=${r.N.theMovieDbAPIKey}`).subscribe(n=>{const{results:e}=n;this.movies=e})}searchMovies(n){this.http.get(`${r.N.theMovieDbUrl}/search/movie?api_key=${r.N.theMovieDbAPIKey}&query=${n}`).subscribe(n=>{const{results:e}=n;this.movies=e})}}return n.\u0275fac=function(e){return new(e||n)(c.Y36(a.Dx),c.Y36(s.eN))},n.\u0275cmp=c.Xpm({type:n,selectors:[["app-day-seventeen"]],decls:7,vars:1,consts:[[1,"day-seventeen-container"],[1,"form"],["type","text","placeholder","Search...",1,"search",3,"keyup.enter"],["search",""],[1,"main"],[4,"ngFor","ngForOf"],[1,"movie"],[3,"src","alt"],[1,"movie-info"],[1,"movie-title"],[3,"ngClass"],[1,"overview"]],template:function(n,e){if(1&n){const n=c.EpF();c.TgZ(0,"div",0),c.TgZ(1,"header"),c.TgZ(2,"div",1),c.TgZ(3,"input",2,3),c.NdJ("keyup.enter",function(){c.CHM(n);const t=c.MAs(4);return e.searchMovies(t.value)}),c.qZA(),c.qZA(),c.qZA(),c.TgZ(5,"div",4),c.YNc(6,v,13,10,"ng-container",5),c.qZA(),c.qZA()}2&n&&(c.xp6(6),c.Q6J("ngForOf",e.movies))},directives:[o.sg,o.mk],styles:['@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap");.day-seventeen-container[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;background-color:#22254b}.day-seventeen-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{padding:1rem;display:flex;justify-content:flex-end;background-color:#373b69}.day-seventeen-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{background-color:initial;border:2px solid #22254b;border-radius:50px;font-family:inherit;font-size:1rem;padding:.5rem 1rem;color:#fff}.day-seventeen-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]::placeholder{color:#7378c5}.day-seventeen-container[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:focus{outline:none;background-color:#22254b}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]{width:300px;margin:1rem;background-color:#373b69;box-shadow:0 4px 5px rgba(0,0,0,.2);position:relative;overflow:hidden;border-radius:3px}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]:hover   .overview[_ngcontent-%COMP%]{transform:translateY(0)}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]{color:#eee;display:flex;align-items:center;justify-content:space-between;padding:.5rem 1rem 1rem;letter-spacing:.5px}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#22254b;padding:.25rem .5rem;border-radius:3px;font-weight:700}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   span.green[_ngcontent-%COMP%]{color:#90ee90}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   span.orange[_ngcontent-%COMP%]{color:orange}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .movie-info[_ngcontent-%COMP%]   span.red[_ngcontent-%COMP%]{color:red}.day-seventeen-container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .movie[_ngcontent-%COMP%]   .overview[_ngcontent-%COMP%]{background-color:#fff;padding:2rem;position:absolute;left:0;bottom:0;right:0;max-height:100%;transform:translateY(101%);transition:transform .3s ease-in}']}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[i.Bz.forChild(_)],i.Bz]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=c.oAB({type:n}),n.\u0275inj=c.cJS({imports:[[o.ez,p]]}),n})()}}]);