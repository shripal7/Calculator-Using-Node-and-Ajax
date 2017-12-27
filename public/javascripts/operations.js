
function adder() {
    var body = {};


    body.n1 = $("#firstNum").val();
    body.n2 = $("#secondNum").val();
    body.op = "+";
    $.ajax({
        url: "/adder",
        method: "POST",
        dataType: "json",
        data: body
    }).then(handleSubmit);
}



function subtract(){
    var body = {};
    body.n1 = $("#firstNum").val();
    body.n2 = $("#secondNum").val();

    body.op = "-";
    $.ajax({
        url: "/subtract",
        method: "POST",
        dataType: "json",
        data: body
    }).then(handleSubmit);


}

function divide() {
    var body = {};
    body.n1 = $("#firstNum").val();
    body.n2 = $("#secondNum").val();
    body.op = "/";
    if (body.n2 == 0) {
        alert("Cannot divide by zero")
    }
    $.ajax({
        url: "/divide",
        method: "POST",
        dataType: "json",
        data: body
    }).then(handleSubmit);
}

    function multiply() {
        var body = {};
        body.n1 = $("#firstNum").val();
        body.n2 = $("#secondNum").val();
        body.op = "*";
        $.ajax({
            url: "/multiply",
            method: "POST",
            dataType: "json",
            data: body
        }).then(handleSubmit);
    }


    function handleSubmit(res, response, body) {

        console.log(res.answer);
        $("#answer").html("Resulting value is: " +res.answer);
    }


