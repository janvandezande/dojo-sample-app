define([ "dojo/_base/declare",
          "dojo/text!./templates/LoginScreen.html",
          "dijit/_WidgetBase", 
          "dijit/_TemplatedMixin",
          "dijit/_WidgetsInTemplateMixin",
          "dijit/form/TextBox",
          "dijit/form/Form",
          "dijit/form/Button",
          "dojox/layout/TableContainer",
          "i5dojo/model/I5Request",
          "dijit/Dialog",
          "dojo/i18n!i5dojo/nls/common",
          ],
		function(declare, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, TextBox, Form, Button, TableContainer, I5Request, Dialog, common) {
			return declare("i5dojo.widget.LoginScreen", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
				templateString : template,
				common:common,

				constructor : function() {
				},
				
				postCreate : function() {
					this.inherited(arguments);
					var self = this;
					this.okButton.on("click", function(){
						new I5Request().post("/rest/login", self.loginForm.getValues());
						self.loginScreen.hide();
					});
				},

				
				_eoc_ : null
			});
			
		});
