define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/SelectFolderDialog.html",
    "dojo/on",
    "dijit/registry",
    "dojox/form/Uploader",
    "dojo/dom",
    "dojo/_base/lang",
    "dijit/Dialog",
    "dijit/form/Button",
    "dojox/form/uploader/plugins/IFrame",
    "dojox/form/uploader/FileList"
], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template, on, registry, Uploader, dom, lang) {
    return declare("sampleapp.widget.SelectFolderDialog", [_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        postCreate: function () {
            this.inherited(arguments);
            console.log("postCreate Dialog");
            var self = this;
            on(this.uploadButton, 'click', function (e) {
                console.log(self.getSelectedFiles());
            });
            on(this.closeButton, 'click', function (e) {
                self.theDialog.hide();
            });
        },
        show: function () {
//            var self = this;
            this.uploader = new dojox.form.Uploader({
                label: "Select files",
                multiple: true,
                uploadOnSelect: false,
                url: "Upload.html",
                onChange: function () {
                    console.log("Filelist changed");
                }
            }, "uploader");
            this.uploader.addDropTarget(dom.byId('dropTarget'));
            this.theDialog.show();
        },
        getSelectedFiles: function () {
            console.log(this.uploader.getFileList());
            return this.uploader.getFileList();
        },
        hideDialog: function () {
            this.destroyRecursive();// To be able to reopen the dialog after hide.
        }

    });
});

