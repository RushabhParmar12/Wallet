(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0396aa2d"],{"4dc8":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"interact-with-contract-container"},[s("interface-container-title",{attrs:{title:e.$t("common.interactWcontract")}}),e.interact?s("div",{staticClass:"contract-methods-container"},[s("h4",[e._v("Read/Write Contract")]),s("div",{staticClass:"contract-addr-container"},[s("div",{staticClass:"contract-addr"},[s("p",[e._v("Contract Address: "+e._s(e.address))])]),s("div",{staticClass:"picker-container"},[s("currency-picker",{attrs:{currency:e.contractMethods,token:!1,page:"interactWContract"},on:{selectedCurrency:e.selectedFunction}})],1)]),void 0!==e.selectedMethod.name?s("div",{staticClass:"method-arguments-container"},[s("h4",[e._v(e._s(e._f("capitalize")(e.selectedMethod.name)))]),e._l(e.selectedMethod.inputs,function(t,n){return s("div",{key:t.name+n,staticClass:"input-item-container"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h5",[e._v(e._s(e._f("capitalize")(t.name))+" ("+e._s(t.type)+"):")])])]),s("div",{staticClass:"input-container"},["checkbox"===e.getType(t.type).type&&"radio"!==e.getType(t.type).type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputs[t.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:e.noInput,type:"checkbox"},domProps:{checked:Array.isArray(e.inputs[t.name])?e._i(e.inputs[t.name],null)>-1:e.inputs[t.name]},on:{change:function(n){var s=e.inputs[t.name],a=n.target,i=!!a.checked;if(Array.isArray(s)){var r=null,c=e._i(s,r);a.checked?c<0&&e.$set(e.inputs,t.name,s.concat([r])):c>-1&&e.$set(e.inputs,t.name,s.slice(0,c).concat(s.slice(c+1)))}else e.$set(e.inputs,t.name,i)}}}):"radio"===e.getType(t.type).type&&"radio"!==e.getType(t.type).type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputs[t.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:e.noInput,type:"radio"},domProps:{checked:e._q(e.inputs[t.name],null)},on:{change:function(n){return e.$set(e.inputs,t.name,null)}}}):"radio"!==e.getType(t.type).type?s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputs[t.name],expression:"inputs[input.name]"}],staticClass:"non-bool-input",attrs:{disabled:e.noInput,type:e.getType(t.type).type},domProps:{value:e.inputs[t.name]},on:{input:function(n){n.target.composing||e.$set(e.inputs,t.name,n.target.value)}}}):e._e(),"radio"===e.getType(t.type).type?s("div",{staticClass:"bool-input-container"},[s("div",{staticClass:"bool-items"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputs[t.name],expression:"inputs[input.name]"}],attrs:{name:t.name,type:"radio"},domProps:{value:!0,checked:e._q(e.inputs[t.name],!0)},on:{change:function(n){return e.$set(e.inputs,t.name,!0)}}}),s("label",{attrs:{for:t.name}},[e._v("True")])]),s("div",{staticClass:"bool-items"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputs[t.name],expression:"inputs[input.name]"}],attrs:{name:t.name,type:"radio",checked:""},domProps:{value:!1,checked:e._q(e.inputs[t.name],!1)},on:{change:function(n){return e.$set(e.inputs,t.name,!1)}}}),s("label",{attrs:{for:t.name}},[e._v("False")])])]):e._e(),e.noInput?e._e():s("i",{class:["radio"!==e.getType(t.type).type?"non-bool-i":"",e.isValidInput(e.inputs[t.name],e.getType(t.type).solidityType)?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])])}),s("div",{directives:[{name:"show",rawName:"v-show",value:e.selectedMethod.payable,expression:"selectedMethod.payable"}]},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("common.value"))+" in XDC:")])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],staticClass:"non-bool-input",attrs:{type:"text",name:"",placeholder:"XDC"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]),e.selectedMethod.constant?s("div",[e._m(0),s("div",{staticClass:"result-inputs"},["string"===e.resType||"boolean"===e.resType||"number"===e.resType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.result,expression:"result"}],staticClass:"non-bool-input",attrs:{type:"text",name:"",placeholder:"0x00000000000000",disabled:""},domProps:{value:e.result},on:{input:function(t){t.target.composing||(e.result=t.target.value)}}}):e._e(),"object"===e.resType?s("div",e._l(e.selectedMethod.outputs,function(t,n){return s("div",{key:t.name+n,staticClass:"result-container"},[s("label",{attrs:{name:""!==t.name?t.name:t.type+n}},[e._v(e._s(e._f("capitalize")(""!==t.name?t.name:t.type)))]),s("input",{staticClass:"result-input",attrs:{name:""!==t.name?t.name:t.type+n,type:"text",placeholder:"0x00000000000000",disabled:""},domProps:{value:e.result[n]}})])}),0):e._e()])]):e._e()],2):e._e(),s("div",{staticClass:"submit-button-container"},[s("div",{staticClass:"interact-buttons"},[s("div",{staticClass:"submit-button large-round-button-green-border clickable",on:{click:function(t){return e.switchView("backwards")}}},[e._v("\n          "+e._s(e.$t("common.back"))+"\n        ")]),e.selectedMethod.hasOwnProperty("inputs")&&(e.selectedMethod.constant&&e.selectedMethod.inputs.length>0||!e.selectedMethod.constant)?s("div",{class:[e.allValid?"":"disabled",e.loading?"disabled":"","submit-button large-round-button-green-filled clickable"],on:{click:e.write}},[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.selectedMethod.constant,expression:"!loading && !selectedMethod.constant"}]},[e._v("\n            "+e._s(e.$t("interface.write"))+"\n          ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.selectedMethod.constant,expression:"!loading && selectedMethod.constant"}]},[e._v(e._s(e.$t("interface.read")))]),s("i",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"fa fa-spinner fa-spin fa-lg"})]):e._e()]),s("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://xinfin.network"}})],1)]):s("div",{staticClass:"interact-div"},[s("div",{staticClass:"send-form contract-address-container"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",{staticClass:"contract-address-title"},[e._v("\n            "+e._s(e.$t("interface.contractAddr"))+"\n            "+e._s(e.newAdd)+"\n          ")]),s("div",{staticClass:"select-contract no-border"},[s("currency-picker",{attrs:{currency:e.mergedContracts,token:!1,page:"interactWContract"},on:{selectedCurrency:e.selectedContract}})],1)])]),s("div",{staticClass:"the-form domain-name"},[s("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",name:"nameAddr",placeholder:"Enter Contract Address"},domProps:{value:e.address},on:{input:function(t){t.target.composing||(e.address=t.target.value)}}}),s("i",{staticClass:"address-validation-check",class:[e.isValidAddress&&""!==e.address?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"send-form"},[s("div",{staticClass:"title-container"},[s("div",{staticClass:"title"},[s("h4",[e._v(e._s(e.$t("interface.abiJsonInt")))]),s("div",{staticClass:"copy-buttons"},[s("span",{on:{click:function(t){return e.deleteInput("abi")}}},[e._v(e._s(e.$t("common.clear")))]),s("span",{on:{click:function(t){return e.copyToClipboard("abi")}}},[e._v(e._s(e.$t("common.copy")))])])])]),s("div",{staticClass:"the-form domain-name"},[s("textarea",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:e.abi,expression:"abi"}],ref:"abi",staticClass:"custom-textarea-1",attrs:{name:"abiField"},domProps:{value:e.abi},on:{input:function(t){t.target.composing||(e.abi=t.target.value)}}}),s("i",{class:[e.isValidAbi&&""!==e.abi?"":"not-good","fa fa-check-circle good-button"],attrs:{"aria-hidden":"true"}})])]),s("div",{staticClass:"submit-button-container"},[s("div",{class:[e.isValidAbi&&e.isValidAddress&&!e.errors.has("nameAddr")&&!e.errors.has("abiField")?"":"disabled","submit-button large-round-button-green-filled clickable"],on:{click:function(t){return e.switchView("forward")}}},[e._v("\n        "+e._s(e.$t("common.continue"))+"\n        "),s("img",{attrs:{src:n("2ab9")}})]),s("interface-bottom-text",{attrs:{"link-text":e.$t("interface.helpCenter"),question:e.$t("interface.haveIssues"),link:"https://xinfin.network"}})],1)])],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title-container"},[n("div",{staticClass:"title"},[n("h4",[e._v("Result:")])])])}],i=(n("c5f6"),n("75fc")),r=(n("96cf"),n("3b8d")),c=(n("6d67"),n("f499")),o=n.n(c),d=(n("28a5"),n("6762"),n("2fdb"),n("7f7f"),n("ac6a"),n("f3e2"),n("7618")),l=(n("a481"),n("cebc")),u=n("2f62"),p=n("d7a2"),h=n("55c1"),m=n("539d"),v=n("ce96"),f=n("b7d3"),b=n("aa13"),y=n("70c1"),w=n("8ded"),g=n.n(w),C={components:{"interface-container-title":h["a"],"interface-bottom-text":m["a"],"currency-picker":p["a"]},data:function(){return{abi:"",address:"",oldAddress:"",interact:!1,contractMethods:[],selectedMethod:{},result:"",loading:!1,value:0,inputs:{}}},computed:Object(l["a"])({},Object(u["b"])({network:"network",gasPrice:"gasPrice",account:"account",web3:"web3"}),{mergedContracts:function(){var e=g.a.get("customContracts")||[];return this.network.type.contracts.concat(e)},isValidAbi:function(){return v["d"].isJson(this.abi)},isValidAddress:function(){return Object(f["a"])(this.address)},newAdd:function(){return this.address=this.oldAddress.replace("xdc","0x"),""},noInput:function(){return this.selectedMethod.constant&&0===this.selectedMethod.inputs.length},resType:function(){return Object(d["a"])(this.result)},allValid:function(){var e=this,t=!0;return this.selectedMethod.inputs&&this.selectedMethod.inputs.forEach(function(n){e.isValidInput(e.inputs[n.name],e.getType(n.type).solidityType)||(t=!1)}),t&&this.isValidAbi&&this.isValidAddress},contractArgs:function(){var e=this,t=[];return this.selectedMethod&&this.selectedMethod.inputs.forEach(function(n){if("bytes32[]"===n.type){var s=e.formatInput(e.inputs[n.name]);t.push(s)}else e.inputs[n.name]="address"===e.getType(n.type).solidityType?e.inputs[n.name].replace("xdc","0x"):e.inputs[n.name],t.push(e.inputs[n.name]),e.inputs[n.name]="address"===e.getType(n.type).solidityType?e.inputs[n.name].replace("0x","xdc"):e.inputs[n.name]}),t}}),watch:{network:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result=""}},methods:{resetDefaults:function(){this.abi="",this.address="",this.interact=!1,this.contractMethods=[],this.selectedMethod={},this.result="",this.loading=!1,this.value=0,this.inputs={}},isValidInput:function(e,t){if(e||(e=""),t.includes("[")&&t.includes("]")){var n=[];if("["===e[0]){var s="["===e[0]?e.substr(0,e.length-1):e;s.split(",").forEach(function(s){t.includes(b["e"])?n.push(""!==e&&!isNaN(e)):t.includes(b["a"])?n.push(Object(f["a"])(e)):t.includes(b["d"])?n.push(Object(f["a"])(!0)):t.includes(b["b"])?n.push(Object(d["a"])(e)===Object(d["a"])(!0)||""===e):t.includes(b["c"])&&n.push(v["d"].validateHexString(s))})}return!n.includes(!1)}return"uint"===t?""!=e&&!isNaN(e):"address"===t?Object(f["a"])(e):"string"===t||("bytes"===t?"0x"==e.substr(0,2)&&v["d"].validateHexString(e):"bool"===t&&(Object(d["a"])(e)==Object(d["a"])(!0)||""===e))},getType:v["d"].solidityType,selectedContract:function(e){""===e.abi?this.abi="":this.abi=o()(e.abi),this.address=e.address},selectedFunction:function(e){var t=this;if(e.hasOwnProperty("constant")){var n=new this.web3.eth.Contract([e],this.address);!0===e.constant&&0===e.inputs.length?n.methods[e.name]().call({from:this.account.address}).then(function(e){t.result=e}).catch(function(e){t.loading=!1,v["e"].responseHandler(e,v["e"].WARN)}):this.result="",this.loading=!1,this.selectedMethod=e,this.selectedMethod.inputs.forEach(function(e){"bool"===e.type&&(t.inputs[e.name]=!1)})}},formatInput:function(e){if("["===e[0])return e;var t=e.split(",");return t.map(function(e){return e.replace(" ","")})},copyToClipboard:function(e){this.$refs[e].select(),document.execCommand("copy")},deleteInput:function(e){this.$refs[e].value=""},switchView:function(e){var t=this;switch(e){case"forward":JSON.parse(this.abi).forEach(function(e){"constructor"!==e.type&&void 0!==e.constant&&t.contractMethods.push(e)}),this.interact=!0,this.loading=!1;break;default:this.resetDefaults()}},write:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n,s,a,r,c,o,d,l,u=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.web3,n=new t.eth.Contract([this.selectedMethod],this.address),this.loading=!0,!0!==this.selectedMethod.constant){e.next=7;break}(s=n.methods)[this.selectedMethod.name].apply(s,Object(i["a"])(this.contractArgs)).call({from:this.account.address}).then(function(e){u.result=e,u.loading=!1}).catch(function(e){u.loading=!1,v["e"].responseHandler(e,!1)}),e.next=13;break;case 7:return e.next=9,t.eth.getTransactionCount(this.account.address);case 9:a=e.sent,r=!1,c=47e5,r||(d=(o=n.methods)[this.selectedMethod.name].apply(o,Object(i["a"])(this.contractArgs)).encodeABI(),l={from:this.account.address,gas:c,nonce:a,gasPrice:Number(y["toWei"](this.gasPrice,"gwei")),value:0,to:this.address,data:d},t.eth.sendTransaction(l).catch(function(e){u.loading=!1,v["e"].responseHandler(e,v["e"].ERROR)}));case 13:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},k=C,_=(n("fa54"),n("2877")),x=Object(_["a"])(k,s,a,!1,null,"7a5f513a",null),M=x.exports;n.d(t,"default",function(){return M})},7442:function(e,t,n){},a809:function(e,t,n){},b5cb:function(e,t,n){"use strict";var s=n("a809"),a=n.n(s);a.a},d7a2:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.openDropdown,expression:"openDropdown"}],staticClass:"currency-picker-container"},[n("div",[n("div",{class:[e.open?"open":"","dropdown-container",e.token?"dropdown-text-container":"dropdown-text-container-white"],on:{click:e.openDropdown}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n        "+e._s(e.selectedCurrency.symbol)+"\n        "),n("span",{staticClass:"subname"},[e._v("- "+e._s(e.selectedCurrency.name))])]),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(e.selectedCurrency.name))]),n("i",{class:["fa",e.open?"fa-angle-up":"fa-angle-down"]})]),n("div",{class:[e.open?"open":"hide","dropdown-item-container"]},[n("div",{staticClass:"dropdown-search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}),n("i",{staticClass:"fa fa-search"})]),n("div",{staticClass:"item-container"},e._l(e.localCurrency,function(t,s){return n("div",{key:e.token?t.name+s+t.symbol+e.page:t.name+e.page+s,class:[e.token?e.selectedCurrency.symbol===t.symbol?"selected":"":e.selectedCurrency.name===t.name?"selected":"","item"],on:{click:function(n){return e.selectCurrency(t)}}},[n("p",{directives:[{name:"show",rawName:"v-show",value:e.token,expression:"token"}]},[e._v("\n            "+e._s(t.symbol)),n("span",{staticClass:"subname"},[e._v(" - "+e._s(t.name))])]),n("p"),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.token,expression:"!token"}]},[e._v(e._s(t.name))])])}),0)])])])},a=[],i=n("75fc"),r=(n("6762"),n("2fdb"),n("d25f"),n("386d"),n("7f7f"),n("cebc")),c=n("2f62"),o={props:{currency:{type:Array,default:function(){return[]}},page:{type:String,default:""},token:{type:Boolean,default:!0}},data:function(){return{selectedCurrency:{name:"Select an item",abi:"",address:""},open:!1,search:"",abi:"",address:""}},computed:Object(r["a"])({},Object(c["b"])({network:"network"}),{networkToken:function(){return{name:this.network.type.name_long,symbol:this.network.type.name}},localCurrency:function(){var e=this;return""!==this.search?this.currency.filter(function(t){if(t.name.toLowerCase().includes(e.search.toLowerCase()))return t}):this.token?[this.networkToken].concat(Object(i["a"])(this.currency)):[{name:"Select an item",abi:"",address:""}].concat(Object(i["a"])(this.currency))}}),watch:{networkToken:function(){this.token&&(this.selectedCurrency=this.networkToken)},selectedCurrency:function(e){this.$emit("selectedCurrency",e)}},mounted:function(){this.selectedCurrency=!0===this.token?this.networkToken:{name:"Select an item",abi:"",address:""}},methods:{openDropdown:function(){this.open=!this.open},selectCurrency:function(e){this.openDropdown(),this.selectedCurrency=e}}},d=o,l=(n("b5cb"),n("2877")),u=Object(l["a"])(d,s,a,!1,null,"7f812414",null),p=u.exports;n.d(t,"a",function(){return p})},fa54:function(e,t,n){"use strict";var s=n("7442"),a=n.n(s);a.a}}]);
//# sourceMappingURL=chunk-0396aa2d.f1a6a0d0.js.map