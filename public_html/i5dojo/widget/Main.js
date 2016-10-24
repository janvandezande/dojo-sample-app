define([ "dojo/_base/declare",
          "dojo/text!./templates/Main.html",
          "dijit/_WidgetBase", 
          "dijit/_TemplatedMixin",
          "dijit/layout/BorderContainer", 
          "dijit/layout/ContentPane",
          "dojo/ready",
          "dojo/parser",
          "dijit/form/TextBox"
          ],
		function(declare, template, _WidgetBase, _TemplatedMixin, BorderContainer, ContentPane, ready, parser, TextBox) {
			return declare("i5dojo.widget.Main", [ _WidgetBase, _TemplatedMixin ], {
				templateString : template,

				constructor : function() {
				},
				
				postCreate : function() {
					this.inherited(arguments);
				},

				
				_eoc_ : null
			});
			
		});
