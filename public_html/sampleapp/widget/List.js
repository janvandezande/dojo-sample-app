define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_OnDijitClickMixin",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/List.html",
    "sampleapp/util/JsonRest",
    "dojo/data/ObjectStore",
    "dojox/grid/cells",
//    "dojo/store/Memory",
//    "dojo/store/Cache",
    "sampleapp/grid/DataGrid"

], function (declare, _WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin, template, JsonRest, ObjectStore, cells, DataGrid) {
    return declare("sampleapp.widget.List", [_WidgetBase, _OnDijitClickMixin, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString: template,
        standby: null,
        postCreate: function () {
            this.inherited(arguments);

        },
        startup: function () {
            this.inherited(arguments);
//            this.store = this.getStore("new");
//            this.store = new JsonRest(
//                    {
//                        target: "grid/filelist/new",
//                        idAttribute:"id"
//                    }
//            );
//            this.grid.set('query', "new");
            //this.grid.set('store', ObjectStore({objectStore: this.getStore("new")}));
//            this.store.query({"path": "new"});
            /*set up layout*/

//            this.grid.set('structure', layout);
//            this.grid.set('columnReordering', true);
//            this.grid.set('singleClickEdit', true);
////            this.grid.set('editable', true);
////            store.query({path:'d_58__92_Dojo Workshop'});
//            this.grid.render();

            console.log("postCreate List");
            var layout = [{
                    defaultCell: {editable: "false", type: cells._Widget, styles: "text-align: left;"},
                    cells: [
                        {name: "Name", field: "name", width: "200px", type: cells._Widget, editable: "true"},
                        {name: "Type", field: "type", width: "100px"},
                        {name: "Size", field: "size", width: "200px"},
                        {name: "Creation Date", field: "creationDate", width: "150px"},
                        {name: "Last Modification Date", field: "modificationDate", width: "150px"}
                    ]
                }];

            this.grid = new DataGrid({
                id: 'grid',
                store: ObjectStore({objectStore: this.getStore("new")}),
                structure: layout,
                columnReordering: true,
                singleClickEdit: true,
                rowSelector: '20px'});

            /*append the new grid to the div*/
            this.grid.placeAt("gridDiv");

            /*Call startup() to render the grid*/
            this.grid.startup();


        },
        setListTarget: function (id) {
//            this.grid.set('query', id);
//            this.store = new JsonRest(
//                    {
//                        target: "grid/filelist/" + id,
//                        idAttribute:"id"
//                    }
//            );
            this.grid.setStore(ObjectStore({objectStore: this.getStore(id)}));
            this.grid.render();
//            this.grid.store.fetch({"query":{"path": id}});
//            this.grid.update();
        },
        getStore: function (id) {
            return JsonRest({target: "grid/filelist/" + id,
                idProperty: "id"});
        }
    });
});

