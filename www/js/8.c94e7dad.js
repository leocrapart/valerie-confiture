(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"7cb1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{key:t.refreshCart,staticClass:"q-pa-lg"},[t.cartEmpty?a("div",[a("h5",{staticClass:"q-ma-none"},[t._v("Votre panier est vide")])]):t._e(),t.cartEmpty?t._e():a("div",[a("q-btn",{attrs:{label:"Vider le panier",color:"red"},on:{click:function(e){return t.removeAll()}}}),a("div",{staticClass:"row q-gutter-xl"},t._l(t.achats,(function(t){return a("div",[a("cartProduct",{attrs:{product:t}})],1)})),0),a("h5",[t._v("Prix total: "+t._s(t.totalPrice)+" €")]),a("h5",[t._v("Je finalise ma commande :")]),a("div",{ref:"paypal"})],1)])},n=[],s=(a("e6cf"),a("ddb0"),{name:"Panier",components:{cartProduct:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"7e33"))},data(){return{achats:[],refreshCart:0}},computed:{totalPrice(){let t=0;if(null!=this.achats){for(let e of this.achats)t+=e.prixTotal;return Math.round(100*t)/100}return 0},cartEmpty(){return!(this.achats.length>0)}},methods:{getAchats(){this.achats=this.$q.sessionStorage.getItem("achats")},addPaypalScript(){console.log("adding script ...");const t=document.createElement("script");t.src="https://www.paypal.com/sdk/js?client-id=AYQ3NJHCU4XZD5xkJJVxOX3czOO0uoIVsr8DEVMtEWftZD2jZ7XUanCxy8X7KlLnEjGkfTsQ80dLqkBv&currency=EUR",t.addEventListener("load",this.setLoaded),document.body.appendChild(t)},setLoaded(){this.loaded=!0;const t=this.totalPrice;console.log("priceToPay =>",t),window.paypal.Buttons({style:{shape:"rect",color:"gold",layout:"vertical",label:"paypal"},createOrder:function(e,a){return a.order.create({purchase_units:[{amount:{value:t}}]})},onApprove:function(t,e){return e.order.capture().then((function(t){alert("Transaction completed by "+t.payer.name.given_name+"!")}))}}).render(this.$refs.paypal)},removeAll(){this.$q.sessionStorage.clear(),this.achats=[],this.refreshCart+=1}},mounted(){this.getAchats(),this.addPaypalScript()}}),c=s,o=a("2877"),l=a("9989"),i=a("9c40"),d=a("eebe"),p=a.n(d),u=Object(o["a"])(c,r,n,!1,null,null,null);e["default"]=u.exports;p()(u,"components",{QPage:l["a"],QBtn:i["a"]})}}]);