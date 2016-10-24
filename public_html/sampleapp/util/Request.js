define([ "dojo/_base/declare", 
         "dojo/request",
         "dojo/io-query",
         "dojo/Deferred",
         "dijit/registry"
         ], function(declare, request, ioquery, Deferred, registry) {
	return declare("sampleapp.util.Request", [], {
		constructor : function() {
		},

		post : function(url, data) {
			var deferred = new Deferred();
			var response;
			request.post(url, {
				data : data,
				handleAs : 'json',
			}).then(function(data) {
				if(data.sessionValid !== undefined && !data.sessionValid){
					var loginNode  = registry.byId('loginScreen');
					loginNode.loginScreen.show();
				}else{
					deferred.resolve(data);
				}
			});
			return deferred.promise;

		},
		get : function(url, data) {
			
			var self = this;
			var deferred = new Deferred();
			request.get(url + '?' + ioquery.objectToQuery(data), {
				handleAs : 'json',
			}).then(function(data) {
				self.checkSession(data);
				deferred.resolve(data);
			});
			return deferred.promise;
		},
		
		checkSession : function(data){
			if(data.sessionValid !== undefined && !data.sessionValid){
				var loginNode  = registry.byId('loginScreen');
				loginNode.loginScreen.show();
				return false;
			}else{
				return true;
			}
		},

		objectToQuery : function(data){
			return ioquery.objectToQuery(data);
		},
		_eoc_ : null
	});

});
