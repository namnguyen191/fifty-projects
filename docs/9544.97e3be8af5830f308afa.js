(self.webpackChunkfifty_projects=self.webpackChunkfifty_projects||[]).push([[9544],{9544:(t,e,r)=>{"use strict";r.r(e),r.d(e,{DayThirtySixModule:()=>u});var n=r(1116),o=r(8928),s=r(8619),i=r(9624);function c(t,e){if(1&t){const t=s.EpF();s.ynx(0),s.TgZ(1,"div",2),s.NdJ("mouseover",function(e){return s.CHM(t),s.oxw().changeColor(e)})("mouseleave",function(e){return s.CHM(t),s.oxw().returnToOriginalColor(e)}),s.qZA(),s.BQk()}if(2&t){const t=e.$implicit;s.xp6(1),s.Udp("background-color",t)}}const a=[{path:"",component:(()=>{class t{constructor(t,e){this.titleService=t,this.renderer=e,this.DEFAULT_COLOR="#aaa",this.NUM_OF_SQUARES=546,this.squaresNum=new Array(this.NUM_OF_SQUARES).fill(this.DEFAULT_COLOR)}ngOnInit(){this.titleService.setTitle("Fifty Projects - Day 36")}changeColor(t){const e=t.target;var r="#"+Math.floor(16777215*Math.random()).toString(16);this.renderer.setStyle(e,"background-color",r),this.renderer.setStyle(e,"box-shadow",`0 0 2px ${r}, 0 0 10px ${r}`)}returnToOriginalColor(t){const e=t.target;setTimeout(()=>{this.renderer.setStyle(e,"background-color",this.DEFAULT_COLOR),this.renderer.setStyle(e,"box-shadow","none")},1e3)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(i.Dx),s.Y36(s.Qsj))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-day-thirty-six"]],decls:2,vars:1,consts:[[1,"container"],[4,"ngFor","ngForOf"],[1,"square",3,"mouseover","mouseleave"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.YNc(1,c,2,2,"ng-container",1),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngForOf",e.squaresNum))},directives:[n.sg],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;justify-content:center;align-items:center;background-color:#111}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;max-width:500px;cursor:pointer}[_nghost-%COMP%]   .container[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]{height:15px;width:15px;margin:2px;transition:.2s ease}"]}),t})()}];let l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.Bz.forChild(a)],o.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.ez,l]]}),t})()}}]);