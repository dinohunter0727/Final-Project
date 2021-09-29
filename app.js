var submitButton = $("#replyBlock p");
var names = $("#name");
var comment = $("#comment");
var space = $(".space");


submitButton.on('click', function() {
    space.prepend(newPost());
});

space.on('click', '#delete', function() {
    var parent = $(this).parents()[0];
    parent.remove();
});

space.on('click', '#edit', function() {
    var parent = $(this).parent();
    var text = parent.find("h1");
    if ($(this).hasClass("save")) {
        $(this).text("Edit");
        var editedText = parent.find("textarea");
        text.text(editedText.val());
        editedText.remove();
    } else {
        $(this).text("Save");
        parent.append("<textarea id='editBox' rows='2'>" + text.text() + "</textarea>")
    }
    $(this).toggleClass("save");
});


function newPost() {
    var s = `<div class="post">
    <image src="image/blank.png" width="80px" heihgt="80px" style="position: absolute; top: 15px; left: 8px;"></image>
    <h3>` + names.val() + `</h3>
    <h1>` + comment.val() + `</h1>
    <p id="edit">Edit</p>
    <p id="delete">Delete</p>
    </div>`
    
    return s;
}