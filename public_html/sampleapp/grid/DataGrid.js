define(["dojo/_base/declare",
    "dojox/grid/DataGrid"
], function (declare, DataGrid) {
    //Overwritten because sort url was "../?sort([+|-]<name>) now "../?sort=(asc_|desc_<name>)
    return declare("sampleapp.grid.DataGrid", [DataGrid], {
//        _canEdit: true,
//        _hasIdentity: true,
//	canEdit: function(inCell, inRowIndex){
//		return this._canEdit;
//	},
        onApplyCellEdit: function (inValue, inRowIndex, inFieldIndex) {
//            this.inherited(arguments);
            console.log("onApplyCellEdit");
            console.log(inValue);
            console.log(inRowIndex);
            console.log(inFieldIndex);
            this.beginUpdate();
            this.store.save({
                onComplete: this.saveDone,
                onError: this.saveFailed
            });
            this.endUpdate();
//            this.render();
        },
        saveDone : function(){
//            alert("Save done");
        },
        saveFailed : function(){
//            alert("Save failed");
        }
        

    });
});