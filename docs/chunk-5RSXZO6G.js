import{a as J,b as E,c as u,d as C,e as I,f as R,g as N,h as $,i as Q,j as X,k as _,l as z,m as w,n as k,o as H}from"./chunk-52S2XGXV.js";import{$ as L,A as S,E as v,F as f,H as e,I as t,J as s,K as M,L as g,M as x,N as i,O as p,P as D,S as d,T as c,Y as O,Z as F,_ as b,c as B,fa as A,m as P,p as y,q as V,t as T,u as q,z as a}from"./chunk-NCKV6X62.js";function te(m,n){if(m&1&&(e(0,"span",11),i(1),t()),m&2){let h=x();a(),D(" ",h.getFieldError("name")," ")}}function ie(m,n){m&1&&(e(0,"span",11),i(1," El precio debe de ser 0 o mayor "),t())}function ne(m,n){m&1&&(e(0,"span",11),i(1," Las existencias deben de ser 0 o mayor "),t())}var W=(()=>{let n=class n{constructor(r){this.fb=r,this.myForm=this.fb.group({name:["",[u.required,u.minLength(3)]],price:[0,[u.required,u.min(0)]],inStorage:[0,[u.required,u.min(0)]]})}ngOnInit(){}isValidFIeld(r){return this.myForm.controls[r].errors&&this.myForm.controls[r].touched}getFieldError(r){if(!this.myForm.controls[r])return null;let l=this.myForm.controls[r].errors||{};for(let o of Object.keys(l))switch(o){case"required":return"Este campo es requerido";case"minlength":return`M\xEDnimo ${l.minlength.requiredLength} caracteres.`}return null}onSave(){if(this.myForm.invalid){this.myForm.markAllAsTouched();return}console.log(this.myForm.value),this.myForm.reset({price:0,inStorage:0})}};n.\u0275fac=function(l){return new(l||n)(S(k))},n.\u0275cmp=y({type:n,selectors:[["ng-component"]],decls:70,vars:28,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"ngSubmit","formGroup"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del producto",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","formControlName","price","placeholder","Precio del producto",1,"form-control"],["type","number","formControlName","inStorage","placeholder","Existencias del producto",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(l,o){l&1&&(e(0,"h2"),i(1,"Reactivos: B\xE1sicos"),t(),s(2,"hr"),e(3,"div",0)(4,"div",1)(5,"form",2),g("ngSubmit",function(){return o.onSave()}),e(6,"div",3)(7,"label",4),i(8,"Producto"),t(),e(9,"div",5),s(10,"input",6),v(11,te,2,1,"span",7),t()(),e(12,"div",3)(13,"label",4),i(14,"Precio"),t(),e(15,"div",5),s(16,"input",8),v(17,ie,2,0,"span",7),t()(),e(18,"div",3)(19,"label",4),i(20,"Existencias"),t(),e(21,"div",5),s(22,"input",9),v(23,ne,2,0,"span",7),t()(),e(24,"div",0)(25,"div",1)(26,"button",10),i(27," Guardar "),t()()()()()(),e(28,"div",0)(29,"div",1)(30,"span"),i(31,"Valid"),t(),e(32,"pre"),i(33),d(34,"json"),t(),e(35,"span"),i(36,"Pristine"),t(),e(37,"pre"),i(38),d(39,"json"),t(),e(40,"span"),i(41,"Touched"),t(),e(42,"pre"),i(43),d(44,"json"),t(),e(45,"span"),i(46,"Value"),t(),e(47,"pre"),i(48),d(49,"json"),t(),e(50,"span"),i(51,"Precio"),t(),e(52,"pre"),i(53),d(54,"json"),t(),e(55,"span"),i(56,"Precio - Errors"),t(),e(57,"pre"),i(58),d(59,"json"),t(),e(60,"span"),i(61,"Producto"),t(),e(62,"pre"),i(63),d(64,"json"),t(),e(65,"span"),i(66,"Producto"),t(),e(67,"pre"),i(68),d(69,"json"),t()()()),l&2&&(a(5),f("formGroup",o.myForm),a(6),f("ngIf",o.isValidFIeld("name")),a(6),f("ngIf",o.isValidFIeld("price")),a(6),f("ngIf",o.isValidFIeld("inStorage")),a(10),p(c(34,12,o.myForm.valid)),a(5),p(c(39,14,o.myForm.pristine)),a(5),p(c(44,16,o.myForm.touched)),a(5),p(c(49,18,o.myForm.value)),a(5),p(c(54,20,o.myForm.controls.price.value)),a(5),p(c(59,22,o.myForm.controls.price.errors)),a(5),p(c(64,24,o.myForm.controls.price.errors)),a(5),p(c(69,26,o.myForm.controls.price.value)))},dependencies:[F,N,E,$,C,I,_,w,b]});let m=n;return m})();function re(m,n){if(m&1&&(e(0,"span",14),i(1),t()),m&2){let h=x();a(),D(" ",h.getFieldError("name")," ")}}function oe(m,n){m&1&&(e(0,"span",14),i(1," Este campo es requerido "),t())}function me(m,n){if(m&1){let h=M();e(0,"div",15)(1,"div",6),s(2,"input",16),e(3,"button",17),g("click",function(){let l=T(h).index,o=x();return q(o.onDeleteFavorite(l))}),i(4," Eliminar "),t()(),v(5,oe,2,0,"span",5),t()}if(m&2){let h=n.index,r=x();a(2),f("formControlName",h),a(3),f("ngIf",r.isValidFieldInArray(r.favoriteGames,h))}}var Y=(()=>{let n=class n{constructor(r){this.fb=r,this.myForm=this.fb.group({name:["",[u.required,u.minLength(3)]],favoriteGames:this.fb.array([["Metal Gear",u.required],["Deadth Strading",u.required]])}),this.newFavorite=new R("",[u.required])}get favoriteGames(){return this.myForm.get("favoriteGames")}isValidFIeld(r){return this.myForm.controls[r].errors&&this.myForm.controls[r].touched}isValidFieldInArray(r,l){return r.controls[l].errors&&r.controls[l].touched}getFieldError(r){if(!this.myForm.controls[r])return null;let l=this.myForm.controls[r].errors||{};for(let o of Object.keys(l))switch(o){case"required":return"Este campo es requerido";case"minlength":return`M\xEDnimo ${l.minlength.requiredLength} caracteres.`}return null}onAddToFavorites(){if(this.newFavorite.invalid)return;let r=this.newFavorite.value;this.favoriteGames.push(this.fb.control(r,u.required)),this.newFavorite.reset()}onDeleteFavorite(r){this.favoriteGames.removeAt(r)}onSubmit(){if(this.myForm.invalid){this.myForm.markAllAsTouched();return}console.log(this.myForm.value),this.myForm.controls.favoriteGames=this.fb.array([]),this.myForm.reset()}};n.\u0275fac=function(l){return new(l||n)(S(k))},n.\u0275cmp=y({type:n,selectors:[["ng-component"]],decls:49,vars:16,consts:[["autocomplete","off",3,"ngSubmit","formGroup"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","name","placeholder","Nombre de la persona",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"input-group"],["placeholder","Agregar favorito",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-outline-primary",3,"click"],["formArrayName","favoriteGames",1,"col-sm-9"],["class","mb-1",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"],[1,"mb-1"],[1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(l,o){l&1&&(e(0,"h2"),i(1,"Reactivos: "),e(2,"small"),i(3," Din\xE1micos "),t()(),s(4,"hr"),e(5,"form",0),g("ngSubmit",function(){return o.onSubmit()}),e(6,"div",1)(7,"label",2),i(8,"Nombre"),t(),e(9,"div",3),s(10,"input",4),v(11,re,2,1,"span",5),t()(),e(12,"div",1)(13,"label",2),i(14,"Agregar"),t(),e(15,"div",3)(16,"div",6),s(17,"input",7),e(18,"button",8),g("click",function(){return o.onAddToFavorites()}),i(19," Agregar favorito "),t()()()(),e(20,"div",1)(21,"label",2),i(22,"Favoritos"),t(),e(23,"div",9),v(24,me,6,2,"div",10),t()(),e(25,"div",11)(26,"div",12)(27,"button",13),i(28," Guardar "),t()()()(),e(29,"span"),i(30,"Valid"),t(),e(31,"pre"),i(32),d(33,"json"),t(),s(34,"br"),e(35,"span"),i(36,"Value"),t(),e(37,"pre"),i(38),d(39,"json"),t(),s(40,"br"),e(41,"span"),i(42,"Agregar Juego"),t(),e(43,"pre"),i(44),d(45,"json"),t(),e(46,"pre"),i(47),d(48,"json"),t()),l&2&&(a(5),f("formGroup",o.myForm),a(6),f("ngIf",o.isValidFIeld("name")),a(6),f("formControl",o.newFavorite),a(7),f("ngForOf",o.favoriteGames.controls),a(8),p(c(33,8,o.myForm.valid)),a(6),p(c(39,10,o.myForm.value)),a(6),p(c(45,12,o.newFavorite.valid)),a(3),p(c(48,14,o.newFavorite.value)))},dependencies:[O,F,N,E,C,I,X,_,w,z,b]});let m=n;return m})();function ae(m,n){m&1&&(e(0,"span",18),i(1," Debe de aceptar las condiciones de uso "),t())}var Z=(()=>{let n=class n{constructor(r){this.fb=r,this.myForm=this.fb.group({gender:["M",u.required],wantNotifications:[!0,u.required],termsAndConditions:[!1,u.requiredTrue]}),this.person={gender:"F",wantNotifications:!1}}ngOnInit(){this.myForm.reset(this.person)}isValidFIeld(r){return this.myForm.controls[r].errors&&this.myForm.controls[r].touched}onSave(){if(this.myForm.invalid){this.myForm.markAllAsTouched();return}let o=this.myForm.value,{termsAndConditions:r}=o,l=B(o,["termsAndConditions"]);console.log(this.myForm.value),this.person=this.myForm.value}};n.\u0275fac=function(l){return new(l||n)(S(k))},n.\u0275cmp=y({type:n,selectors:[["ng-component"]],decls:53,vars:11,consts:[["autocomplete","off",3,"ngSubmit","formGroup"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"form-check"],["type","radio","value","M","formControlName","gender","id","radioMasculino",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","value","F","formControlName","gender","id","radioFemenino",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],[1,"form-check","form-switch","mt-2"],["type","checkbox","formControlName","wantNotifications","id","flexSwitchCheckChecked",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","formControlName","termsAndConditions","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],["class","form-text text-danger",4,"ngIf"],[1,"row"],[1,"col"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(l,o){l&1&&(e(0,"h2"),i(1,"Reactivos: Switches"),t(),s(2,"hr"),e(3,"form",0),g("ngSubmit",function(){return o.onSave()}),e(4,"div",1)(5,"label",2),i(6,"G\xE9nero"),t(),e(7,"div",3)(8,"div",4),s(9,"input",5),e(10,"label",6),i(11," Masculino "),t()(),e(12,"div",4),s(13,"input",7),e(14,"label",8),i(15," Femenino "),t()()()(),e(16,"div",1)(17,"label",2),i(18,"Notificaciones"),t(),e(19,"div",3)(20,"div",9),s(21,"input",10),e(22,"label",11),i(23,"Quiero recibir notificaciones"),t()()()(),e(24,"div",1),s(25,"label",2),e(26,"div",3)(27,"div",4),s(28,"input",12),e(29,"label",13),i(30," T\xE9rminos y condiciones de uso "),t()(),v(31,ae,2,0,"span",14),t()(),e(32,"div",15)(33,"div",16)(34,"button",17),i(35," Guardar "),t()()()(),e(36,"h5"),i(37,"Valor del formulario"),t(),e(38,"pre"),i(39),d(40,"json"),t(),s(41,"br"),e(42,"h5"),i(43,"Persona"),t(),e(44,"pre"),i(45),d(46,"json"),t(),s(47,"br"),e(48,"h5"),i(49,"Valid"),t(),e(50,"pre"),i(51),d(52,"json"),t()),l&2&&(a(3),f("formGroup",o.myForm),a(28),f("ngIf",o.isValidFIeld("termsAndConditions")),a(8),p(c(40,5,o.myForm.value)),a(6),p(c(46,7,"object")),a(6),p(c(52,9,"object")))},dependencies:[F,N,E,J,Q,C,I,_,w,b]});let m=n;return m})();var le=[{path:"",children:[{path:"basic",component:W},{path:"dynamic",component:Y},{path:"switches",component:Z},{path:"**",redirectTo:"basic"}]}],ee=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=V({type:n}),n.\u0275inj=P({imports:[A.forChild(le),A]});let m=n;return m})();var Pe=(()=>{let n=class n{};n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=V({type:n}),n.\u0275inj=P({imports:[L,ee,H]});let m=n;return m})();export{Pe as ReactiveModule};