define(["dojo/_base/declare",
    "dojo/store/JsonRest",
    "dojo/_base/lang",
    "dojo/_base/xhr",
    "dojo/store/util/QueryResults"
], function (declare, JsonRest, lang, xhr, QueryResults) {
    //Overwritten because sort url was "../?sort([+|-]<name>) now "../?sort=(asc_|desc_<name>)
    return declare("sampleapp.util.JsonRest", [JsonRest], {
        	// ascendingPrefix: String
	//		The prefix to apply to sort attribute names that are ascending
	ascendingPrefix: "asc_",

	// descendingPrefix: String
	//		The prefix to apply to sort attribute names that are ascending
	descendingPrefix: "desc_",

        query: function (query, options) {
            // summary:
            //		Queries the store for objects. This will trigger a GET request to the server, with the
            //		query added as a query string.
            // query: Object
            //		The query to use for retrieving objects from the store.
            // options: __QueryOptions?
            //		The optional arguments to apply to the resultset.
            // returns: dojo/store/api/Store.QueryResults
            //		The results of the query, extended with iterative methods.
            options = options || {};

            var headers = lang.mixin({Accept: this.accepts}, this.headers, options.headers);

            var hasQuestionMark = this.target.indexOf("?") > -1;
            query = query || ""; // https://bugs.dojotoolkit.org/ticket/17628
            if (query && typeof query == "object") {
                query = xhr.objectToQuery(query);
                query = query ? (hasQuestionMark ? "&" : "?") + query : "";
            }
            if (options.start >= 0 || options.count >= 0) {
                headers["X-Range"] = "items=" + (options.start || '0') + '-' +
                        (("count" in options && options.count != Infinity) ?
                                (options.count + (options.start || 0) - 1) : '');
                if (this.rangeParam) {
                    query += (query || hasQuestionMark ? "&" : "?") + this.rangeParam + "=" + headers["X-Range"];
                    hasQuestionMark = true;
                } else {
                    headers.Range = headers["X-Range"];
                }
            }
            if (options && options.sort) {
                var sortParam = this.sortParam;
                query += (query || hasQuestionMark ? "&" : "?") + (sortParam ? sortParam + '=' : "sort=(");
                for (var i = 0; i < options.sort.length; i++) {
                    var sort = options.sort[i];
                    query += (i > 0 ? "," : "") + (sort.descending ? this.descendingPrefix : this.ascendingPrefix) + encodeURIComponent(sort.attribute);
                }
                if (!sortParam) {
                    query += ")";
                }
            }
            var results = xhr("GET", {
                url: this.target + (query || ""),
                handleAs: "json",
                headers: headers
            });
            results.total = results.then(function () {
                var range = results.ioArgs.xhr.getResponseHeader("Content-Range");
                if (!range) {
                    // At least Chrome drops the Content-Range header from cached replies.
                    range = results.ioArgs.xhr.getResponseHeader("X-Content-Range");
                }
                return range && (range = range.match(/\/(.*)/)) && +range[1];
            });
            return QueryResults(results);
        }
    });
});