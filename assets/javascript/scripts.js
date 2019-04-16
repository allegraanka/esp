var getRecData = function () {
    $(function ($) {
        var scope = angular.element("#root").scope();
        var recDataId = $('#recDataId').val();
        var url = $('#url').val();
        if (recDataId && (recDataId.length > 0)) {
            $.ajax({
                "url": "https://api.traq.li/onsite/recdata/id/" + recDataId + "?" + $.param({"story_url": url}),
                "type": "GET",
                "dataType": "json",
                "contentType": "application/json",
                "xhrFields": {"withCredentials": true},
                "success": function (data) {
                    console.log(data);
                    scope.recData = data.result[0].stories;
                },
                "error": function () {
                    scope.close();
                }

            });
        }
        else {
            setTimeout(getRecData, 200)
        }
    });
}();