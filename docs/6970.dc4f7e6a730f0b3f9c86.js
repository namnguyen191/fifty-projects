(self.webpackChunkfifty_projects=self.webpackChunkfifty_projects||[]).push([[6970],{6970:(t,n,e)=>{"use strict";e.r(n),e.d(n,{DayTwentyTwoModule:()=>u});var o=e(1116),i=e(8928),s=e(8619),c=e(9624);const r=["canvas"],l=[{path:"",component:(()=>{class t{constructor(t){this.titleService=t,this.size=20,this.color="#ff0000",this.isPressed=!1}ngOnInit(){this.titleService.setTitle("Fifty Projects - Day 22")}ngAfterViewInit(){var t,n;this.ctx=null!==(n=null===(t=this.cvs)||void 0===t?void 0:t.nativeElement.getContext("2d"))&&void 0!==n?n:void 0}onMouseUp(){this.isPressed=!1,this.x=void 0,this.y=void 0}onMouseDown(t){this.isPressed=!0,this.x=t.offsetX,this.y=t.offsetY}onMouseMove(t){var n,e;if(this.isPressed){const o=t.offsetX,i=t.offsetY;this.drawCircle(o,i),this.drawLine(null!==(n=this.x)&&void 0!==n?n:0,null!==(e=this.y)&&void 0!==e?e:0,o,i),this.x=o,this.y=i}}onChangeColor(t){this.color=t.target.value}clearCanvas(){var t;this.cvs&&(null===(t=this.ctx)||void 0===t||t.clearRect(0,0,this.cvs.nativeElement.width,this.cvs.nativeElement.height))}drawCircle(t,n){this.ctx?(this.ctx.beginPath(),this.ctx.arc(t,n,this.size,0,2*Math.PI),this.ctx.fillStyle=this.color,this.ctx.fill()):console.log("Error")}drawLine(t,n,e,o){this.ctx?(this.ctx.beginPath(),this.ctx.moveTo(t,n),this.ctx.lineTo(e,o),this.ctx.strokeStyle=this.color,this.ctx.lineWidth=2*this.size,this.ctx.stroke()):console.log("Error")}}return t.\u0275fac=function(n){return new(n||t)(s.Y36(c.Dx))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-day-twenty-two"]],viewQuery:function(t,n){if(1&t&&s.Gf(r,5),2&t){let t;s.iGM(t=s.CRH())&&(n.cvs=t.first)}},decls:13,vars:2,consts:[[1,"day-twenty-two-container"],["width","800","height","800",1,"canvas",3,"mouseup","mousedown","mousemove"],["canvas",""],[1,"toolbox"],[1,"decrease",3,"click"],[1,"size"],[1,"increase",3,"click"],["type","color",1,"color",3,"value","change"],[1,"clear",3,"click"]],template:function(t,n){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"canvas",1,2),s.NdJ("mouseup",function(){return n.onMouseUp()})("mousedown",function(t){return n.onMouseDown(t)})("mousemove",function(t){return n.onMouseMove(t)}),s.qZA(),s.TgZ(3,"div",3),s.TgZ(4,"button",4),s.NdJ("click",function(){return n.size=n.size-1}),s._uU(5,"-"),s.qZA(),s.TgZ(6,"span",5),s._uU(7),s.qZA(),s.TgZ(8,"button",6),s.NdJ("click",function(){return n.size=n.size+1}),s._uU(9,"+"),s.qZA(),s.TgZ(10,"input",7),s.NdJ("change",function(t){return n.onChangeColor(t)}),s.qZA(),s.TgZ(11,"button",8),s.NdJ("click",function(){return n.clearCanvas()}),s._uU(12,"X"),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(7),s.Oqu(n.size),s.xp6(3),s.Q6J("value",n.color))},styles:[".day-twenty-two-container[_ngcontent-%COMP%]{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#f5f5f5}.day-twenty-two-container[_ngcontent-%COMP%]   .canvas[_ngcontent-%COMP%]{border:2px solid #4682b4}.day-twenty-two-container[_ngcontent-%COMP%]   .toolbox[_ngcontent-%COMP%]{background-color:#4682b4;border:1px solid #6a5bcd;display:flex;width:804px;padding:1rem}.day-twenty-two-container[_ngcontent-%COMP%]   .toolbox[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{background-color:#fff;border:none;display:inline-flex;justify-content:center;align-items:center;font-size:2rem;height:50px;width:50px;margin:.25rem;padding:.25rem}.day-twenty-two-container[_ngcontent-%COMP%]   .toolbox[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{margin-left:auto}.day-twenty-two-container[_ngcontent-%COMP%]   .toolbox[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{cursor:pointer}"]}),t})()}];let a=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.Bz.forChild(l)],i.Bz]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.ez,a]]}),t})()}}]);