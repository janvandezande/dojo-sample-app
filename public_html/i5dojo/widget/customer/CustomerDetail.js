define([ "dojo/_base/declare",
         "dojo/text!./templates/CustomerDetail.html",
         "dijit/_WidgetBase", 
         "dijit/_TemplatedMixin",
         "dijit/_WidgetsInTemplateMixin",
         "dijit/form/TextBox",
         "dijit/form/CheckBox",
         "dijit/form/Form",
         "dijit/form/Button",
         "dojox/layout/TableContainer",
         "i5dojo/model/I5Request",
         "dijit/layout/ContentPane",
         "dojo/i18n!i5dojo/nls/common",
         "dojo/i18n!i5dojo/nls/customer"
         ],
		function(declare, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, TextBox, CheckBox, Form, Button, TableContainer, I5Request, ContentPane, common, customer) {
			return declare("i5dojo.widget.customer.CustomerDetail", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
				templateString : template,
				common : common,
				customer : customer,
				customerTitle : "New",

				constructor : function() {
				},
				
				postCreate : function() {
					this.inherited(arguments);
					var self = this;
					this.okButton.on("click", function(){
						new I5Request().post("/rest/customer", self.customerDetailForm.getValues());
//						self.loginScreen.hide();
					});
				},

				
				_eoc_ : null
			});
			
		});