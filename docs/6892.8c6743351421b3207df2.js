(self.webpackChunkfifty_projects=self.webpackChunkfifty_projects||[]).push([[6892],{6892:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DayFiveModule:()=>h});var i=n(1116),r=n(8928),c=n(8318),o=n(8870),s=n(2293),l=n(6163);function a(e){const{index:t,period:n,subscriber:i}=e;if(i.next(t),!i.closed){if(-1===n)return i.complete();e.index=t+1,this.schedule(e,n)}}var u=n(8619),d=n(9624);const f=function(e){return{filter:e}},p=function(e){return{opacity:e}},y=[{path:"",component:(()=>{class e{constructor(e){this.titleService=e,this.load=0}ngAfterViewInit(){const e=function(e=0,t,n){let i=-1;return(0,s.k)(t)?i=Number(t)<1?1:Number(t):(0,l.K)(t)&&(n=t),(0,l.K)(n)||(n=o.P),new c.y(t=>{const r=(0,s.k)(e)?e:+e-n.now();return n.schedule(a,r,{index:0,period:i,subscriber:t})})}(1e3,30).subscribe(t=>{this.load=t,this.load>99&&e.unsubscribe()})}scale(e,t,n,i,r){return(e-t)*(r-i)/(n-t)+i}ngOnInit(){this.titleService.setTitle("Fifty Projects - Day 5")}}return e.\u0275fac=function(t){return new(t||e)(u.Y36(d.Dx))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-day-five"]],decls:4,vars:7,consts:[[1,"day-five-container"],[1,"bg",3,"ngStyle"],[1,"loading-text",3,"ngStyle"]],template:function(e,t){1&e&&(u.TgZ(0,"div",0),u._UZ(1,"section",1),u.TgZ(2,"div",2),u._uU(3),u.qZA(),u.qZA()),2&e&&(u.xp6(1),u.Q6J("ngStyle",u.VKq(3,f,"blur("+t.scale(t.load,0,100,30,0)+"px)")),u.xp6(1),u.Q6J("ngStyle",u.VKq(5,p,t.scale(t.load,0,100,1,0))),u.xp6(1),u.hij(" ",t.load+"%"," "))},directives:[i.PC],styles:[".day-five-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:center;align-items:center;width:100vw;height:100vh;overflow:hidden}.day-five-container[_ngcontent-%COMP%]   .bg[_ngcontent-%COMP%]{background:url(/assets/images/tinified/dark-sky-water.webp) no-repeat 50%/cover;position:absolute;top:-30px;left:-30px;width:calc(100% + 60px);height:calc(100% + 60px);z-index:-1;filter:blur(0)}.day-five-container[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%]{font-size:3rem;color:#fff}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[r.Bz.forChild(y)],r.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[i.ez,g]]}),e})()}}]);