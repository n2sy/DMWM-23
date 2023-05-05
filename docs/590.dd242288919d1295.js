"use strict";(self.webpackChunkDMWM_23=self.webpackChunkDMWM_23||[]).push([[590],{590:(T,m,a)=>{a.r(m),a.d(m,{SubModule:()=>u});var p=a(895),s=a(773),e=a(256);class i{getServerById(t){return this.tabServers.find(n=>n.id==t)}constructor(){this.tabServers=[{id:1,nom:"Serveur de Amen",statut:"offline"},{id:2,nom:"Serveur de Eya",statut:"online"},{id:3,nom:"Serveur de Ibrahima",statut:"offline"}]}}i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"});var o=a(433);class l{constructor(t,n){this.activatedRoute=t,this.servService=n}ngOnInit(){this.activatedRoute.paramMap.subscribe({next:t=>{this.editedServ=this.servService.getServerById(t.get("id"))}})}}l.\u0275fac=function(t){return new(t||l)(e.Y36(s.gz),e.Y36(i))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-edit-server"]],decls:14,vars:2,consts:[[1,"container"],["for",""],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["name","","id","",1,"form-control",3,"ngModel","ngModelChange"],["value","offline"],["value","online"],["routerLink","/manage-serv",1,"btn","btn-info"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2,"Editer le Nom"),e.qZA(),e.TgZ(3,"input",2),e.NdJ("ngModelChange",function(v){return n.editedServ.nom=v}),e.qZA(),e.TgZ(4,"label",1),e._uU(5,"Editer le Statut"),e.qZA(),e.TgZ(6,"select",3),e.NdJ("ngModelChange",function(v){return n.editedServ.statut=v}),e.TgZ(7,"option",4),e._uU(8,"Offline"),e.qZA(),e.TgZ(9,"option",5),e._uU(10,"Online"),e.qZA()(),e._UZ(11,"br"),e.TgZ(12,"button",6),e._uU(13,"Back To List"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngModel",n.editedServ.nom),e.xp6(3),e.Q6J("ngModel",n.editedServ.statut))},dependencies:[s.rH,o.YN,o.Kr,o.Fj,o.EJ,o.JJ,o.On]});const f=function(r){return{allow:r}},g=function(r){return[r]};function S(r,t){if(1&r&&(e.TgZ(0,"li",6),e._uU(1),e.qZA()),2&r){const n=t.$implicit;e.Q6J("queryParams",e.VKq(3,f,3==n.id?"1":"0"))("routerLink",e.VKq(5,g,n.id)),e.xp6(1),e.hij(" ",n.nom," ")}}class d{constructor(t){this.servService=t}ngOnInit(){this.tab=this.servService.tabServers}}d.\u0275fac=function(t){return new(t||d)(e.Y36(i))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-home-servers"]],decls:7,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-md-4"],[1,"list-group"],["class","list-group-item",3,"queryParams","routerLink",4,"ngFor","ngForOf"],[1,"col-md-6"],[1,"list-group-item",3,"queryParams","routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"ol",3),e.YNc(4,S,2,7,"li",4),e.qZA()(),e.TgZ(5,"div",5),e._UZ(6,"router-outlet"),e.qZA()()()),2&t&&(e.xp6(4),e.Q6J("ngForOf",n.tab))},dependencies:[s.lC,s.rH,p.sg]});class c{constructor(t,n){this.activatedRoute=t,this.servService=n}ngOnInit(){this.activatedRoute.paramMap.subscribe({next:t=>{this.oneServer=this.servService.getServerById(t.get("id"))}}),this.activatedRoute.queryParamMap.subscribe({next:t=>{this.disableBtn="1"!=t.get("allow")}})}}c.\u0275fac=function(t){return new(t||c)(e.Y36(s.gz),e.Y36(i))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-info-servers"]],decls:14,vars:3,consts:[[1,"container"],["for",""],["type","text",1,"form-control",3,"value"],["name","","id","",1,"form-control",3,"value"],["value","offline"],["value","online"],["routerLink","edit",1,"btn","btn-info",3,"disabled"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2,"Nom du Serveur"),e.qZA(),e._UZ(3,"input",2),e.TgZ(4,"label",1),e._uU(5,"Statut du serveur"),e.qZA(),e.TgZ(6,"select",3)(7,"option",4),e._uU(8,"Offline"),e.qZA(),e.TgZ(9,"option",5),e._uU(10,"Online"),e.qZA()(),e._UZ(11,"br"),e.TgZ(12,"button",6),e._uU(13,"Editer"),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("value",n.oneServer.nom),e.xp6(3),e.Q6J("value",n.oneServer.statut),e.xp6(6),e.Q6J("disabled",n.disableBtn))},dependencies:[s.rH,o.YN,o.Kr]});const Z=s.Bz.forChild([{path:"",component:d,children:[{path:":id",component:c},{path:":id/edit",component:l}]}]);class u{}u.\u0275fac=function(t){return new(t||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[Z,p.ez,o.u5]})}}]);