define([ "dojo/_base/declare",
          "dojo/text!./templates/CustomerMain.html",
          "dijit/_WidgetBase", 
          "dijit/_TemplatedMixin",
          "dijit/_WidgetsInTemplateMixin",
          "dijit/layout/BorderContainer", 
          "dijit/layout/ContentPane",
          "i5dojo/widget/customer/CustomerList",
          "i5dojo/widget/customer/CustomerFilter",
          "dojo/store/JsonRest",
          "dojo/data/ObjectStore",
          "dojo/i18n!i5dojo/nls/customer",
          "dojo/i18n!i5dojo/nls/common",
          "i5dojo/model/I5Request",
          "dijit/layout/TabContainer",
          "dijit/form/Button",
          "i5dojo/widget/customer/CustomerDetail",
		  "dijit/focus"
          ],
		function(declare, template, _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, BorderContainer, ContentPane, CustomerList, CustomerFilter, JsonRest, ObjectStore, customer, common, I5Request, TabContainer, Button, CustomerDetail, focus) {
			return declare("i5dojo.widget.CustomerMain", [  _WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin ], {
				templateString : template,
				store : null,
				customer:customer,
				common : common,

				constructor : function() {
				},
				
				postCreate : function() {
					var self = this;
					this.inherited(arguments);
					this.store =  new JsonRest({
					    target: "rest/customer/"
					  });
					this.customerlist.customerGrid.set("store", ObjectStore({objectStore :this.store}));
					var layout = [{identifier: 'id', cells:[
					               {'name': customer.id, 'field': 'id', 'width': '100px'},
					               {'name': customer.code, 'field': 'code', 'width': '150px'},
					               {'name': customer.lastName, 'field': 'lastName', 'width': '200px'},
					               {'name': customer.firstName, 'field': 'firstName', 'width': '200px'},
					               {'name': customer.phone, 'field': 'phone', 'width': '80px'},
					               {'name': customer.mobile, 'field': 'mobile', 'width': '80px'},
					               {'name': customer.eMail, 'field': 'eMail', 'width': '100px'},
					               {'name': customer.website, 'field': 'website', 'width': '100px'},
					               {'name': customer.language, 'field': 'language', 'width': '100px'},
								   {'name': customer.active, 'field': 'active', 'width': '100px'}
					             ]}];
					this.customerlist.customerGrid.set("structure", layout);
					this.store.query(this.customerFilter.customerFilterForm.getValues()).then(function(result){
						new I5Request().checkSession(result);
						  console.debug(result);
					  });
//					this.store.setData(this.getData());
					this.customerFilter.searchButton.on('click', function(){
						self.store.query(self.customerFilter.customerFilterForm.getValues()).then(function(result){
							new I5Request().checkSession(result);
							  console.debug(result);
						  }, function(error){
							  console.log(error);
						  });
					});
					
					self.addButton.on('click', function(){
						var newCustomerTab = new ContentPane({
							title:"New", 
							closable:true,
							selected:true
						}
								);
						self.tabContainer.addChild(newCustomerTab);
						self.tabContainer.selectChild(newCustomerTab);
						var customerDetail = new CustomerDetail();
						newCustomerTab.addChild(customerDetail);
						customerDetail.startup();
						self.tabContainer.startup();
					});
					
				},
				
				getData: function(){
					return new I5Request().get("/rest/customer", this.customerFilter.customerFilterForm.getValues());
				},
				
				startup : function(){
					this.inherited(arguments);
				},
				
				_eoc_ : null
			});
			
		});
