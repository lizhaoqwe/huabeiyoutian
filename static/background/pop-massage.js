function PopMessage() {

}

PopMessage.prototype.addCategoryClickEvent = function () {
    $('.btn-addcategory').click(function () {
        swal({
            title:'添加分类',
            content: "input",
            buttons:["取消","添加"],
            confirmCallback:function (inputValue) {
                $.ajax({
                    type:'post',
                    url: '/add_category/',
                    data:{
                        'category':inputValue
                    },
                    success: function (result) {
                        if (result.code == 200) {
                            console.log(result.code);
                            window.location.reload();
                        }
                    }
                })
            }
        })
    })
};

PopMessage.prototype.run = function () {
    var self = this;
    self.addCategoryClickEvent();
};

$(function () {
    var popmessage = new PopMessage();
    popmessage.run()
});