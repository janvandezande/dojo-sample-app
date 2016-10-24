define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/Properties.html",
    "dojo/i18n!sampleapp/nls/file",
    "dojo/on",
    "dojo/fx/Toggler",
    "dojo/fx",
    "dojo/_base/lang",
     "sampleapp/widget/Dialog",
    "dijit/form/Form",
    "dijit/form/TextBox",
    "dijit/form/ValidationTextBox",
    "dijit/form/DateTextBox",
    "dijit/form/NumberTextBox",
    "dijit/form/CheckBox",
    "dijit/form/Textarea",
    "dojox/layout/TableContainer",
    "dijit/form/Select",
    "dijit/form/FilteringSelect",
    "dijit/form/CurrencyTextBox"


], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template, file, on, Toggler, coreFx, lang, Dialog) {
    return declare("sampleapp.widget.Properties", [_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        file: file,
        toggler: null,
        postCreate: function () {
            this.inherited(arguments);
            console.log("postCreate Properties");
            var self = this;
            on(this.okButton, 'click', function () {
                var json = self.propertiesForm.get('value');
                console.log(JSON.stringify(json));
            });

            on(this.hideButton, "click", function (e) {
                self.toggler.hide();
                console.log(self.toggler);
            });

            on(this.dialogButton, "click", function (e) {
                console.log("Start Dialog");
                var dialog = new Dialog(self.id);
                dialog.show();
            });




        },
        startup: function () {
            this.inherited(arguments);
            this.toggler = new Toggler({
                node: "toHide",
                showFunc: coreFx.wipeIn,
                hideFunc: coreFx.wipeOut
            });
        }
    });
});

