
// $("<p></p>", {
//     html: "If you are stuck go to <a href='https://www.jquery.com/'> jQuery Documentation</a>", "class":"info", "data-count": 0
// });

// var firstP = $('div p:first-child').appendTo('div');

// $('div').appendTo($('div p:first-child'));
// var newParagraphs = [];

// for(var i = 4; i < 14; i++) {
//     newParagraphs.push("<p>paragraph " + i + "</p>");
// }

// $('div').append(newParagraphs.join(""));

// $(document).ready(()=>{
//     $("button").click(()=>{
//         $.get("demo_test.asp", (data, status) => {
//             alert("Data:" + data + "\nStatus:" + status);
//         })
//     })
// })


$(document).ready(() => {
    $("button").click(() => {
        $.post("demo_test.asp",
        {
            name: "Donald Duck",
            city: "Duckburt"
        },
        (data, status) => {
            alert("Data:" + data + "\nStatus + status");
        });
    });
});


$(document).ready(() => {
    $("#myInput").on("keyup", () => {
        var value = $(this).val().toLowerCase();
        $("table tr").filter(() => {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)

        })
    })
})