(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bf5f882"],{"1faa":function(t,a,e){},4979:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"profile-title"},[s("h2",[t._v("Admin Profile")]),s("div",{staticClass:"btns"},[s("span",{staticClass:"confirm",on:{click:t.confirmEdit}},[s("img",{attrs:{src:e("6a1a"),alt:"confirm"}}),s("span",{staticClass:"tooltip",attrs:{id:"confirm"}},[t._v("Confirm")])]),s("span",{staticClass:"cancel",on:{click:t.cancel}},[s("img",{attrs:{src:e("d28c"),alt:"cancel"}}),s("span",{staticClass:"tooltip",attrs:{id:"cancel"}},[t._v("Cancel")])])])]),t.admin?s("div",{staticClass:"profile-container"},[s("div",{staticClass:"info"},[s("div",{staticClass:"inputs"},[s("label",{attrs:{for:"usr"}},[t._v("Username")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.admin.adm_user,expression:"admin.adm_user"}],attrs:{type:"text",name:"usr",id:"usr"},domProps:{value:t.admin.adm_user},on:{input:function(a){a.target.composing||t.$set(t.admin,"adm_user",a.target.value)}}})]),s("div",{staticClass:"inputs"},[s("label",{attrs:{for:"email"}},[t._v("Email")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.admin.adm_email,expression:"admin.adm_email"}],attrs:{type:"email",name:"email",id:"email"},domProps:{value:t.admin.adm_email},on:{input:function(a){a.target.composing||t.$set(t.admin,"adm_email",a.target.value)}}})])]),s("h5",[t._v("Change Password")]),s("div",{staticClass:"info pwd"},[s("div",{staticClass:"inputs"},[s("label",{attrs:{for:"oldPwd"}},[t._v("Old Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPwd,expression:"oldPwd"}],attrs:{type:"password",name:"oldPwd",id:"oldPwd"},domProps:{value:t.oldPwd},on:{input:function(a){a.target.composing||(t.oldPwd=a.target.value)}}})]),s("div",{staticClass:"inputs"},[s("label",{attrs:{for:"newPwd"}},[t._v("New Password")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPwd,expression:"newPwd"}],attrs:{type:"password",name:"newPwd",id:"newPwd"},domProps:{value:t.newPwd},on:{input:function(a){a.target.composing||(t.newPwd=a.target.value)}}})])]),s("button",{staticClass:"pwdBtn",on:{click:t.changePwd}},[t._v("Change password")])]):t._e(),s("div",{staticClass:"mobile-btns"},[s("div",{staticClass:"confirmBtn"},[s("button",{on:{click:t.confirmEdit}},[t._v("Save")])]),s("div",{staticClass:"cancelBtn"},[s("button",{on:{click:t.cancel}},[t._v("Cancel")])])])])},n=[],i=e("5530"),o=e("2f62"),d={name:"AdminProfile",data:function(){return{oldPwd:"",newPwd:""}},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["c"])("admins",["getAdminById"])),Object(o["c"])(["getCurrentUser"])),{},{admin:function(){var t=this.getAdminById(1);return t},currentUser:function(){var t=this.getCurrentUser;return t}}),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])("admins",["updateAdmin"])),{},{confirmEdit:function(){var t=this,a={id:this.currentUser.id,adm_user:this.admin.adm_user,adm_email:this.admin.adm_email,adm_password:this.admin.adm_password};this.updateAdmin(a).then(this.$swal({title:"Confirm",text:"Admin details updated",buttons:{close:{value:"close",text:"Close"}},icon:"success"}).then((function(a){"close"===a&&t.$router.go(-1)})).catch((function(a){console.log(a),t.$swal({title:"Error",text:"Error in updating admin details",buttons:{close:{value:"close",text:"Close"}},icon:"warning"}).then((function(a){"close"===a&&t.$router.go(-1)}))})))},cancel:function(){var t=this;this.$swal({text:"Are you sure you want to discard your changes?",buttons:{no:{value:"no",text:"No"},yes:{value:"yes",text:"Yes"}},icon:"warning"}).then((function(a){switch(a){case"yes":t.$router.go(-1);break}}))},changePwd:function(){var t=this,a={id:this.currentUser.id,adm_user:this.admin.adm_user,adm_email:this.admin.adm_email,adm_password:this.admin.adm_password};console.log(a),this.$swal({title:"Confirm",text:"Password changed",buttons:{close:{value:"close",text:"Close"}},icon:"success"}).then((function(a){"close"===a&&t.$router.go(-1)})).catch((function(t){return console.log(t)}))}})},r=d,c=(e("7c9b"),e("2877")),l=Object(c["a"])(r,s,n,!1,null,"6b5a14e0",null);a["default"]=l.exports},"7c9b":function(t,a,e){"use strict";var s=e("1faa"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-5bf5f882.6bdb05fb.js.map