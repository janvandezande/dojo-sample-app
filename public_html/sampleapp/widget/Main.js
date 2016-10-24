define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/Main.html",
    "sampleapp/widget/Tree",
    "dijit/Tree",
    "dijit/layout/_LayoutWidget",
    "dijit/_Container",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "sampleapp/widget/Properties",
    "sampleapp/widget/List",
    "dijit/layout/TabContainer"
], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template) {
    return declare("sampleapp.widget.Main", [_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        postCreate: function () {
            this.inherited(arguments);
            console.log("postCreate Main");
        }

    });
});

