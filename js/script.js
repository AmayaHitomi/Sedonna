$(function () {
    $(".hotel-find-button").click(function () {
        $(".hotel-form").toggleClass("hide");
    })
    $(".minus-adult").click(function () {
        if ($("#adult").val()> 1) {
            $("#adult").val(parseInt($("#adult").val()) - 1);
        }
    })
    $(".plus-adult").click(function () {
        $("#adult").val(parseInt($("#adult").val())+1);
    })
    $(".minus-kid").click(function () {
        if ($("#kids").val()> 0) {
            $("#kids").val(parseInt($("#kids").val()) - 1);
        }
    })
    $(".plus-kid").click(function () {
        $("#kids").val(parseInt($("#kids").val())+1);
    })
})