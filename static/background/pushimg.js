function PushImage() {

}

PushImage.prototype.postImg = function () {
    var self = this;
    $('.btn-upload').click(function () {
        $('#pushimg').click();
    });
};

PushImage.prototype.clickPushEvent = function () {
    var self = this;
    $('.btn-publish').click(function () {
        var title = $('.title').val();
        var describe = $('.describe').val();
        var activeEditor = tinymce.activeEditor;
        var editBody = activeEditor.getBody();
        activeEditor.selection.select(editBody);
        var content = activeEditor.selection.getContent({'format':'text'});
        console.log(content);
        $.ajax({
            type:'post',
            url:'/add_article/',
            data:{
                title: title,
                describe: describe,
                content:content,
                success: function (result) {
                    console.log(result)
                }
            }
        });
    });

};


PushImage.prototype.run = function () {
    var self = this;
    self.postImg();
    self.clickPushEvent();
};


$(function () {
    var self = this;
    var pushimage = new PushImage();
    pushimage.run();
});