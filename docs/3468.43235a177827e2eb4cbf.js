(self.webpackChunkfifty_projects=self.webpackChunkfifty_projects||[]).push([[3468],{3468:(t,e,n)=>{"use strict";n.r(e),n.d(e,{DayThirteenModule:()=>p});var a=n(1116),i=n(8928),c=n(8619),r=n(9624);const o=["txtarea"],s=function(t){return{highlight:t}};function g(t,e){if(1&t&&(c.ynx(0),c.TgZ(1,"div",6),c._uU(2),c.qZA(),c.BQk()),2&t){const t=e.$implicit,n=c.oxw();c.xp6(1),c.Q6J("ngClass",c.VKq(2,s,n.pickedTags===t)),c.xp6(1),c.hij(" ",t," ")}}const h=[{path:"",component:(()=>{class t{constructor(t){this.titleService=t,this.tags=[]}ngOnInit(){this.titleService.setTitle("Fifty Projects - Day 13")}createChoicesTags(){this.txtarea?this.tags=this.txtarea.nativeElement.value.split(",").filter(t=>""!==t.trim()).map(t=>t.trim()):console.log("Something wrong with getting the text area value")}pickRandomTags(){if(this.txtarea&&(this.txtarea.nativeElement.value=this.txtarea.nativeElement.value.replace(/(\r\n|\n|\r)/gm,"")),this.tags.length>0){const t=Math.floor(20*Math.random()+30);let e=0;const n=setInterval(()=>{e===t&&clearInterval(n);const a=Math.floor(Math.random()*this.tags.length);this.pickedTags=this.tags[a],e++},20)}}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(r.Dx))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-day-thirteen"]],viewQuery:function(t,e){if(1&t&&c.Gf(o,5),2&t){let t;c.iGM(t=c.CRH())&&(e.txtarea=t.first)}},decls:10,vars:1,consts:[[1,"day-thirteen-container"],[1,"choice-container"],["placeholder","Enter choices here ...","id","txtarea","cols","50","rows","10","spellcheck","false",1,"txtarea",3,"keyup","keyup.enter"],["txtarea",""],[1,"tags"],[4,"ngFor","ngForOf"],[1,"tag",3,"ngClass"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"div",1),c.TgZ(2,"h3"),c._uU(3,' Enter all your choices seperate by a comma. For example "choice 1, choice 2, ... '),c._UZ(4,"br"),c._uU(5,"Press Enter when you're done "),c.qZA(),c.TgZ(6,"textarea",2,3),c.NdJ("keyup",function(){return e.createChoicesTags()})("keyup.enter",function(){return e.pickRandomTags()}),c.qZA(),c.TgZ(8,"div",4),c.YNc(9,g,3,4,"ng-container",5),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(9),c.Q6J("ngForOf",e.tags))},directives:[a.sg,a.mk],styles:[".day-thirteen-container[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center;background-color:#2b88f0}.day-thirteen-container[_ngcontent-%COMP%]   .choice-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#fff;text-align:center}.day-thirteen-container[_ngcontent-%COMP%]   .choice-container[_ngcontent-%COMP%]   .txtarea[_ngcontent-%COMP%]{border:none;display:block;padding:10px;margin:0 0 20px;font-size:16px}.day-thirteen-container[_ngcontent-%COMP%]   .choice-container[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]{max-width:500px}.day-thirteen-container[_ngcontent-%COMP%]   .choice-container[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%]{background-color:#f0932b;color:#fff;border-radius:50px;padding:10px 20px;margin:0 5px 10px 0;font-size:14px;display:inline-block}.day-thirteen-container[_ngcontent-%COMP%]   .choice-container[_ngcontent-%COMP%]   .tags[_ngcontent-%COMP%]   .tag.highlight[_ngcontent-%COMP%]{background-color:#273c75}"]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[i.Bz.forChild(h)],i.Bz]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[a.ez,l]]}),t})()}}]);