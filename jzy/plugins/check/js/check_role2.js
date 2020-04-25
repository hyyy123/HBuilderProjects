
function check(father) {

    var checkAll = father.find(".check1all");  //全选的input
    var checkboxs = father.find(".check1"); //所有单选的input
    //console.log(checkAll.length);
    checkAll.on('ifChecked ifUnchecked', function (event) {
        //alert("1");
        if (event.type == 'ifChecked') {
            checkboxs.iCheck('check');
        } else {
            checkboxs.iCheck('uncheck');

        }
    });

    checkboxs.on('ifChanged', function (event) {
        //alert("2");
        if (checkboxs.filter(':checked').length == checkboxs.length) {
            checkAll.prop('checked', true);
        } else {
            checkAll.prop('checked', false);
        }
        checkAll.iCheck('update');
    })

}
function kind(father) {
    var checkkind = father.find(".checkall");  //全选的input
    var check1 = father.find(".putbox"); //所有单选的input
    checkkind.on('ifChecked ifUnchecked', function (event) {
        if (event.type == 'ifChecked') {
            check1.iCheck('check');
        } else {
            check1.iCheck('uncheck');

        }
    });

    check1.on('ifChanged', function (event) {
        if (check1.filter(':checked').length == check1.length) {
            checkkind.prop('checked', true);
        } else {
            checkkind.prop('checked', false);
        }
        checkkind.iCheck('update');
    })
}
//初始化
function checkinit() {
    $('.icheck').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%'
    });

    for (var i = 0; i < $(".checklist").length; i++) {
        check($(".checklist").eq(i))
    }
    for (var i = 0; i < $(".checkkind").length; i++) {
        kind($(".checkkind").eq(i))
    }
}