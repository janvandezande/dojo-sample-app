define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/Dialog.html",
    "dojo/on",
    "dijit/registry",
    "dijit/Dialog",
    "dijit/form/Button"
], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template, on, registry) {
    return declare("sampleapp.widget.Dialog", [_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        callerId : null,
        
        constructor:function(callerId){
            this.callerId = callerId;
        },
        postCreate: function () {
            this.inherited(arguments);
            console.log("postCreate Dialog");
            var self = this;
            on(this.updateButton, 'click', function(e){
                var caller = registry.byId(self.callerId);
                caller.comment.set('value', caller.comment.get('value') + ' added value');
            });
        },
        show : function(){
          this.theDialog.show();  
        }

    });
});

