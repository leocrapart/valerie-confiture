(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{de12:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"q-ma-md"},[o("div",{staticClass:"row q-mb-md"},[o("q-form",[o("div",{staticClass:"row q-gutter-md"},[o("q-input",{attrs:{autofocus:"",label:"ID"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),o("q-input",{attrs:{type:"password",label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)])],1),e.show?o("div",[o("q-btn",{attrs:{color:"green",label:"Save first row"},on:{click:function(t){return e.addData()}}}),o("q-btn",{staticClass:"q-mx-md",attrs:{color:"purple",label:"Save changes"},on:{click:function(t){return e.modifyData()}}}),o("q-table",{key:e.refreshVar,attrs:{data:e.data,columns:e.columns,"rows-per-page-options":[1e3],"row-key":"nom","wrap-cells":""},scopedSlots:e._u([{key:"body",fn:function(t){return[o("q-tr",{attrs:{props:t}},[o("q-td",{key:"nom",attrs:{props:t}},[e._v("\n            "+e._s(t.row.nom)+"\n            "),o("q-popup-edit",{attrs:{"auto-save":""},model:{value:t.row.nom,callback:function(o){e.$set(t.row,"nom",o)},expression:"props.row.nom"}},[o("q-input",{attrs:{dense:"",autofocus:"",counter:""},model:{value:t.row.nom,callback:function(o){e.$set(t.row,"nom",o)},expression:"props.row.nom"}})],1)],1),o("q-td",{key:"imgSrc",attrs:{props:t}},[o("div",{staticStyle:{"text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap"}},[e._v(e._s(t.row.imgSrc))]),o("q-popup-edit",{attrs:{"auto-save":""},model:{value:t.row.imgSrc,callback:function(o){e.$set(t.row,"imgSrc",o)},expression:"props.row.imgSrc"}},[o("q-input",{attrs:{dense:"",autofocus:"",counter:""},model:{value:t.row.imgSrc,callback:function(o){e.$set(t.row,"imgSrc",o)},expression:"props.row.imgSrc"}})],1)],1),o("q-td",{key:"body",attrs:{props:t}},[o("div",{staticStyle:{"max-height":"100px","text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap"},domProps:{innerHTML:e._s(t.row.body)}}),o("q-popup-edit",{attrs:{"auto-save":""},model:{value:t.row.body,callback:function(o){e.$set(t.row,"body",o)},expression:"props.row.body"}},[o("editor",{model:{value:t.row.body,callback:function(o){e.$set(t.row,"body",o)},expression:"props.row.body"}})],1)],1),o("q-td",{key:"prix",attrs:{props:t}},[e._v("\n            "+e._s(t.row.prix)+"\n            "),o("q-popup-edit",{attrs:{"auto-save":""},model:{value:t.row.prix,callback:function(o){e.$set(t.row,"prix",o)},expression:"props.row.prix"}},[o("q-input",{attrs:{type:"number",dense:"",autofocus:""},model:{value:t.row.prix,callback:function(o){e.$set(t.row,"prix",e._n(o))},expression:"props.row.prix"}})],1)],1),o("q-td",{key:"categorie",attrs:{props:t}},[o("div",{staticClass:"text-pre-wrap"},[e._v(e._s(t.row.categorie))]),o("q-popup-edit",{attrs:{"auto-save":""},model:{value:t.row.categorie,callback:function(o){e.$set(t.row,"categorie",o)},expression:"props.row.categorie"}},[o("q-input",{attrs:{type:"text",dense:"",autofocus:""},model:{value:t.row.categorie,callback:function(o){e.$set(t.row,"categorie",o)},expression:"props.row.categorie"}})],1)],1),o("q-td",{key:"lien",attrs:{props:t}},[o("div",{staticClass:"text-pre-wrap"},[e._v(e._s(t.row.lien))]),o("q-popup-edit",{attrs:{"auto-save":""},model:{value:t.row.lien,callback:function(o){e.$set(t.row,"lien",o)},expression:"props.row.lien"}},[o("q-input",{attrs:{type:"text",dense:"",autofocus:""},model:{value:t.row.lien,callback:function(o){e.$set(t.row,"lien",o)},expression:"props.row.lien"}})],1)],1),o("q-td",{key:"disponible",attrs:{props:t}},[o("div",{staticClass:"text-pre-wrap"}),o("q-toggle",{attrs:{"checked-icon":"check","unchecked-icon":"clear",color:"green"},model:{value:t.row.disponible,callback:function(o){e.$set(t.row,"disponible",o)},expression:"props.row.disponible"}})],1),o("q-td",{key:"delete",attrs:{props:t}},[-1!=t.row.id?o("q-btn",{attrs:{color:"red",label:"X"},on:{click:function(o){return e.deleteData(t.row.id)}}}):e._e()],1)],1)]}}],null,!1,186936881)})],1):e._e()])},a=[],s=(o("fb6a"),o("e6cf"),o("ddb0"),o("fc1b")),i={components:{editor:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"a897"))},data(){return{id:"",password:"",refreshVar:0,data:[{id:-1,nom:"Nouveau nom",imgSrc:"https://preview.free3d.com/img-dev/2013/07/1741457818466124927/89q4o3hd-900.jpg",body:"Nouveau texte",prix:4.3,categorie:"confiture",lien:"/wololo",disponible:!0}],columns:[{name:"nom",align:"left",classes:"bg-grey-2",headerClasses:"bg-blue",label:"Nom",field:"nom"},{name:"imgSrc",align:"center",style:"max-width: 100px",label:"Image",field:"imgSrc"},{name:"body",align:"left",label:"Texte",field:"body"},{name:"prix",align:"center",label:"Prix",field:"prix"},{name:"categorie",align:"center",label:"Categorie",field:"categorie"},{name:"lien",align:"center",label:"Lien",field:"lien"},{name:"disponible",align:"center",label:"Disponible",field:"disponible"},{name:"delete",align:"center",label:"Delete",field:"id"}],users:[]}},computed:{newThing(){let e=this.data[0];return e.id=this.data[this.data.length-1].id+1,e},show(){for(let e of this.users){let t=!1,o=!1,r=!1;if(e.id==this.id&&(t=!0),t&&e.password==this.password&&(o=!0),o&&e.admin&&(r=!0),r)return!0}return!1}},methods:{showData(){console.log(this.newThing)},getData(){const e=this,t=this.data.length-1;s["a"].ref("products").once("value").then((function(o){const r=o.val();let a=0;for(let s in r){if(a>=t){const t=r[s];e.data.push(t)}a+=1}}))},addData(){const e=this;s["a"].ref("products/"+e.newThing.id).set(e.newThing),this.refreshTable()},modifyData(){const e=this,t=e.data.slice(1);s["a"].ref("products").set(t),this.refreshTable()},deleteData(e){s["a"].ref("products/"+e).remove(),console.log("Entry deleted"),this.$router.go(0)},refreshTable(){this.getData(),this.refreshVar+=1},getUsers(){const e=this;s["a"].ref("users").once("value").then((function(t){const o=t.val();for(let r in o){const t=o[r];e.users.push(t)}}))},showIt(){console.log(this.data)}},mounted(){this.getData(),this.getUsers()}},n=i,l=o("2877"),c=o("9989"),p=o("0378"),d=o("27f9"),u=o("9c40"),w=o("eaac"),m=o("bd08"),f=o("db86"),b=o("42a1"),g=o("9564"),h=o("eebe"),v=o.n(h),x=Object(l["a"])(n,r,a,!1,null,null,null);t["default"]=x.exports;v()(x,"components",{QPage:c["a"],QForm:p["a"],QInput:d["a"],QBtn:u["a"],QTable:w["a"],QTr:m["a"],QTd:f["a"],QPopupEdit:b["a"],QToggle:g["a"]})}}]);