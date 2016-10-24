define([ "dojo/_base/declare",
          "dojo/text!./templates/CustomerFilter.html",
          "dijit/_WidgetBase", 
          "dijit/_TemplatedMixin",
          "dijit/_WidgetsInTemplateMixin",
          "dijit/layout/BorderContainer", 
          "dijit/layout/ContentPane",
          "dijit/form/Form",
          "dijit/form/TextBox",
          "dojo/i18n!i5dojo/nls/customer",
          "dojo/i18n!i5dojo/nls/common"
          ],
		function(declare, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, Form, TextBox, customer, common) {
			return declare("i5dojo.widget.CustomerFilter", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
				templateString : template,
				customer:customer,
				common:common,

				constructor : function() {
				},
				
				postCreate : function() {
					this.inherited(arguments);
				},

				
				_eoc_ : null
			});
			
		});
