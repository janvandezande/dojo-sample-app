define([ "dojo/_base/declare",
          "dojo/text!./templates/CustomerList.html",
          "dijit/_WidgetBase", 
          "dijit/_TemplatedMixin",
          "dijit/_WidgetsInTemplateMixin",          
          "dijit/layout/BorderContainer", 
          "dijit/layout/ContentPane",
          "dojox/grid/EnhancedGrid",
          ],
		function(declare, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, EnhancedGrid) {
			return declare("i5dojo.widget.CustomerList", [ _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
				templateString : template,

				constructor : function() {
				},
				
				postCreate : function() {
					this.inherited(arguments);
				},

				
				
				
				_eoc_ : null
			});
			
		});
