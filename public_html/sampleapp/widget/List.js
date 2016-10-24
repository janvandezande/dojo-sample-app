define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/List.html",
    "sampleapp/util/JsonRest",
    "dojo/data/ObjectStore",
    "dojox/grid/DataGrid"

], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template, JsonRest, ObjectStore) {
    return declare("sampleapp.widget.List", [_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        postCreate: function () {
            this.inherited(arguments);
            console.log("postCreate List");
        },
        startup: function () {
            this.inherited(arguments);
            var store = new JsonRest(
                    {
                        target: "grid/filelist/d_58__92_Dojo Workshop"
                    }
            );

            /*set up layout*/
            var layout = [[
                    {'name': 'Name', 'field': 'name', 'width': '100px'},
                    {'name': 'Type', 'field': 'type', 'width': '100px'},
                    {'name': 'Size', 'field': 'size', 'width': '200px'},
                    {'name': 'Creation Date', 'field': 'creationDate', 'width': '150px'},
                    {'name': 'Last Modification Date', 'field': 'modificationDate', 'width': '150px'}
                ]];

            this.grid.set('store', ObjectStore({objectStore: store}));
//            this.grid.set('query', 'd_58__92_Dojo Workshop');
            this.grid.set('structure', layout);
            this.grid.set('columnReordering', true);
            this.grid.render();
//            store.query({path:'d_58__92_Dojo Workshop'});
        }
    });
});

