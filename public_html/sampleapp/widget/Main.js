define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/Main.html",
    "dijit/MenuBar",
    "dijit/PopupMenuBarItem",
//    "dijit/Menu",
    "dijit/MenuItem",
    "dijit/DropDownMenu",
    "sampleapp/widget/SelectFolderDialog",
    "sampleapp/widget/Tree",
    "dijit/Tree",
    "dijit/layout/_LayoutWidget",
    "dijit/_Container",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "sampleapp/widget/Properties",
    "sampleapp/widget/List",
    "dijit/layout/TabContainer"
], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template, MenuBar, PopupMenuBarItem, MenuItem, DropDownMenu, SelectFolderDialog) {
    return declare("sampleapp.widget.Main", [_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        postCreate: function () {
            this.inherited(arguments);
            console.log("postCreate Main");

            var pMenuBar = new MenuBar({});

            var pSubMenu = new DropDownMenu({});
            pSubMenu.addChild(new MenuItem({
                label: "Upload files",
                onClick: function () {
                    console.log("select folder clicked.");
                    var selectFolderDialog = new SelectFolderDialog({
                     });
                    selectFolderDialog.show();
                }
            }));
            pSubMenu.addChild(new MenuItem({
                label: "Exit"
            }));
            pMenuBar.addChild(new PopupMenuBarItem({
                label: "File",
                popup: pSubMenu
            }));

            pMenuBar.placeAt("menuId");
            pMenuBar.startup();
        }


    });
});

