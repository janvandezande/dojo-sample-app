define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/Tree.html",
    "dijit/Tree",
    "dijit/tree/ObjectStoreModel",
    "dojo/store/JsonRest",
    "dijit/registry",
    "sampleapp/util/Request"
  

], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template, Tree, ObjectStoreModel, JsonRest, registry, Request) {
    return declare("sampleapp.widget.Tree", [_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        postCreate: function () {
            this.inherited(arguments);
            console.log("postCreate Tree");
            var self = this;
            var treeStore = new JsonRest({
                target: "tree/",
                getChildren: function (object) {
                    // object may just be stub object, so get the full object first and then return it's
                    // list of children
                    return this.get(object.id).then(function (fullObject) {
                        return fullObject.children;
                    });
                }
            });

            // set up the model, assigning governmentStore, and assigning method to identify leaf nodes of tree
            var treeModel = new ObjectStoreModel({
                store: treeStore,
                query: {id: 'd_58__92_Dojo Workshop'},
                // To show (+) before an object
                mayHaveChildren: function (item) {
                    return item.directory;
                }
            });
            new Tree({
                model: treeModel,
//                onOpenClick: true,
                autoExpand: false,
                getIconClass: function (/*dojo.store.Item*/ item, /*Boolean*/ opened) {
                    return item.directory ? (opened ? "dijitFolderOpened" : "dijitFolderClosed") : "dijitLeaf";
                },
                onClick: function(event){
                    var form = registry.byId("myForm");
                    new Request().get("/tree/file", {"filePath":event.id}).then(
                    function(data){
                        form.set('value', data);
                        console.log(data);
                    });
                    console.log('node clicked clicked');
                    console.log(event);
                }
            }, this.treeWidget);
            
        }

    });
});

