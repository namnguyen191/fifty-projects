(self.webpackChunkfifty_projects=self.webpackChunkfifty_projects||[]).push([[9474],{9474:(e,n,t)=>{"use strict";t.r(n),t.d(n,{DayNineteenModule:()=>h});var o=t(1116),i=t(8928),r=t(8289),c=t(6599),a=t(8619),l=t(9624);const d=["needleHour"],s=["needleMinute"],g=["needleSecond"],u=[{path:"",component:(()=>{class e{constructor(e,n){this.titleService=e,this.renderer=n,this.mode="light",this.today=new Date}ngOnInit(){this.titleService.setTitle("Fifty Projects - Day 19")}ngAfterViewInit(){(0,r.F)(1e3).pipe((0,c.b)(()=>{var e,n,t;this.today=new Date,this.renderer.setStyle(null===(e=this.needleHour)||void 0===e?void 0:e.nativeElement,"transform",`translate(-50%, -100%) rotate(${this.calculateNeedleDeg("hour",this.today)}deg)`),this.renderer.setStyle(null===(n=this.needleMinute)||void 0===n?void 0:n.nativeElement,"transform",`translate(-50%, -100%) rotate(${this.calculateNeedleDeg("minute",this.today)}deg)`),this.renderer.setStyle(null===(t=this.needleSecond)||void 0===t?void 0:t.nativeElement,"transform",`translate(-50%, -100%) rotate(${this.calculateNeedleDeg("second",this.today)}deg)`)})).subscribe()}calculateNeedleDeg(e,n){let t=0;return"hour"===e?(t=30*n.getHours(),t+=30*n.getMinutes()/60,t):"minute"===e?(t=6*n.getMinutes(),t+=6*n.getSeconds()/60,t):"second"===e?(t=6*n.getSeconds(),t):-1}changeMode(){this.mode="light"===this.mode?"dark":"light"}}return e.\u0275fac=function(n){return new(n||e)(a.Y36(l.Dx),a.Y36(a.Qsj))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-day-nineteen"]],viewQuery:function(e,n){if(1&e&&(a.Gf(d,5),a.Gf(s,5),a.Gf(g,5)),2&e){let e;a.iGM(e=a.CRH())&&(n.needleHour=e.first),a.iGM(e=a.CRH())&&(n.needleMinute=e.first),a.iGM(e=a.CRH())&&(n.needleSecond=e.first)}},decls:21,vars:16,consts:[[1,"day-nineteen-container"],[1,"toggle",3,"click"],[1,"clock-container"],[1,"clock"],[1,"needle","hour"],["needleHour",""],[1,"needle","minute"],["needleMinute",""],[1,"needle","second"],["needleSecond",""],[1,"center-point"],[1,"time"],[1,"date"],[1,"circle"]],template:function(e,n){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"button",1),a.NdJ("click",function(){return n.changeMode()}),a._uU(2),a.qZA(),a.TgZ(3,"div",2),a.TgZ(4,"div",3),a._UZ(5,"div",4,5),a._UZ(7,"div",6,7),a._UZ(9,"div",8,9),a._UZ(11,"div",10),a.qZA(),a.TgZ(12,"div",11),a._uU(13),a.ALo(14,"date"),a.qZA(),a.TgZ(15,"div",12),a._uU(16),a.ALo(17,"date"),a.ALo(18,"date"),a.TgZ(19,"span",13),a._uU(20),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.ekj("dark","dark"===n.mode),a.xp6(2),a.hij(" ","light"===n.mode?"Light Mode":"Dark Mode"," "),a.xp6(11),a.Oqu(a.xi3(14,7,n.today,"hh:mm")),a.xp6(3),a.AsE(" ",a.xi3(17,10,n.today,"EEEE"),", ",a.xi3(18,13,n.today,"MMMM")," "),a.xp6(4),a.Oqu(n.today.getDate()))},pipes:[o.uU],styles:['@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@300;400&display=swap");.day-nineteen-container[_ngcontent-%COMP%]{--primary-color:#000;--secondary-color:#fff;transition:all .5s ease-in;font-family:Heebo,sans-serif;display:flex;min-height:100vh;flex-direction:column;align-items:center;justify-content:center}.day-nineteen-container.dark[_ngcontent-%COMP%]{--primary-color:#fff;--secondary-color:#333;background-color:#111;color:var(--primary-color)}.day-nineteen-container[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{background-color:var(--primary-color);color:var(--secondary-color);border:0;border-radius:4px;padding:8px 12px;position:absolute;top:100px;cursor:pointer}.day-nineteen-container[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]:focus{outline:none}.day-nineteen-container[_ngcontent-%COMP%]   .clock-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center}.day-nineteen-container[_ngcontent-%COMP%]   .clock-container[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]{position:relative;width:200px;height:200px}.day-nineteen-container[_ngcontent-%COMP%]   .clock-container[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .needle[_ngcontent-%COMP%]{background-color:var(--primary-color);position:absolute;top:50%;left:50%;height:65px;width:3px;transform-origin:bottom center;transition:all 1s ease}.day-nineteen-container[_ngcontent-%COMP%]   .clock-container[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .needle.hour[_ngcontent-%COMP%]{transform:translate(-50%,-100%) rotate(0deg)}.day-nineteen-container[_ngcontent-%COMP%]   .clock-container[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .needle.minute[_ngcontent-%COMP%]{transform:translate(-50%,-100%) rotate(0deg);height:100px}.day-nineteen-container[_ngcontent-%COMP%]   .clock-container[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .needle.second[_ngcontent-%COMP%]{transform:translate(-50%,-100%) rotate(0deg);height:100px;background-color:#e74c3c}.day-nineteen-container[_ngcontent-%COMP%]   .clock-container[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .center-point[_ngcontent-%COMP%]{background-color:#e74c3c;width:10px;height:10px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%}.day-nineteen-container[_ngcontent-%COMP%]   .clock-container[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%]   .center-point[_ngcontent-%COMP%]:after{content:"";background-color:var(--primary-color);width:5px;height:5px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%}.day-nineteen-container[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]{font-size:4rem}.day-nineteen-container[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:#aaa;font-size:1.2rem;letter-spacing:.3px;text-transform:uppercase}.day-nineteen-container[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]{background-color:var(--primary-color);border-radius:50%;height:1.5rem;width:1.5rem;display:inline-flex;align-items:center;justify-content:center;line-height:1rem;transition:all .5s ease-in;font-size:1rem}']}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.Bz.forChild(u)],i.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[o.ez,p]]}),e})()}}]);