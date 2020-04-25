$(function(){
    //alert($(window).width())
    //fullpage初始化
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#254875'],
        anchors: ['page1', 'page2', 'page3', 'page4'],
        "scrollOverflow": true,
        resize:false
    })
    var userarray = [
        ["张三张三", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "已批准", "2016.05.23", " ", "[查看权限]",""],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "已驳回", "2016.05.23", " ", " ",""],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", "监测人员", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", "监测人员", "13000000000", "男", "已批准", "2016.05.23", " ", "[查看权限]"," "],
        ["Jean Pearson", "单位A", "管理部", "主管", "监测人员", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "已批准", "2016.05.23", " ", "[查看权限]", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", "监测人员", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "已批准", "2016.05.23", " ", "[查看权限]", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", "监测人员 ", "13000000000", "男", "已批准", "2016.05.23", " ", "[查看权限]", " "],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""], 
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", "监测人员", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", "管理员", "13000000000", "男", "已批准", "2016.05.23", " ", "[查看权限]", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", "监测人员 ", "13000000000", "男", "已批准", "2016.05.23", " ", "[查看权限]", " "],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "待审批", "2016.05.23", " ", "[批准]", "[驳回]"],
        ["Jean Pearson", "单位A", "管理部", "主管", " ", "13000000000", "男", "已驳回", "2016.05.23", " ", " ", ""],
            
    ]
    //用户管理
    //动态添加页数!!!!bug
    function ye(array,father,num) {
        for (var i = 1; i < array.length; i++) {
            if (array.length > num * i) {
                $(father).find("ul").append("<li class='fontfamily' >" + i + "</li>")
            }
        }
    }
    ye(userarray, ".ye",9)
    //起始页面
    for (var i = 0; i < 9; i++) {
        $("#tablelist").append("<tr><td>" + userarray[i][0] + "</td><td>" + userarray[i][1] + "</td><td>" + userarray[i][2] + "</td><td>" + userarray[i][3] + "</td><td><a href='#' class='rolea'>" + userarray[i][4] + "</a></td><td>" + userarray[i][5] + "</td>"
                                 + "<td>" + userarray[i][6] + "</td><td class='state'>" + userarray[i][7] + "</td><td>" + userarray[i][8] + "</td><td>" + userarray[i][9] + "</td><td class='hand paddinglf0'><a href='#'class='handlea '>" + userarray[i][10] + "</a>" + "<a href='#'class='handlea '>" + userarray[i][11] + "</a></td></tr>")

    }
    handclick()
    roleclick()
    textshadow()
    //换行变色
    $("#tablelist").find("tr:even").css("background", "rgba(0,0,0,0.1)")
    //是否批准点击事件
    function handclick() {
        $(".handlea").click(function () {
            changestate = $("tr").has(this).find(".state")
            changehand = $(".hand").has(this)
            if ($(this).html() == "[批准]") {
                $(".sysadmin .con .mod_father").css("display", "block")
                $(".mod .yes").click(function () {
                    $(".sysadmin .con .mod_father .mod_con").html("确定要批准吗")
                    changestate.html("已批准")
                    changehand.html("<a href='role.html'class='handlea marginr10'>[查看权限]</a>")
                    $(".sysadmin .con .mod_father").css("display", "none")
                    textshadow()
                })
                $(".mod .no").click(function () {
                    $(".sysadmin .con .mod_father").css("display", "none")
                })
            } else if ($(this).html() == "[驳回]") {
                $(".sysadmin .con .mod_father").css("display", "block")
                $(".sysadmin .con .mod_father .mod_con").html("确定要驳回吗")
                $(".mod .yes").click(function () {
                    changestate.html("已驳回")
                    changehand.html(" ")
                    $(".sysadmin .con .mod_father").css("display", "none")
                    textshadow()
                })
                $(".mod .no").click(function () {
                    $(".sysadmin .con .mod_father").css("display", "none")
                })
            } else if ($(this).html() == "[查看权限]") {
                $(this).attr("href", "role.html")
            }

            textshadow()
        })
    }
    //角色跳转函数
    function roleclick() {
        $(".rolea").click(function () {
            if ($(this).html() != " ") {
                $(this).attr("href","role2.html")
            }
        })
    }
    //文字阴影函数
    function textshadow() {
        for (var i = 0; i < $("#tablelist tr").length; i++) {
            $(".state").eq(i).removeClass("greenshadow")
            $(".state").eq(i).removeClass("redshadow")
            $(".state").eq(i).removeClass("yellowshadow")
            if ($(".state").eq(i).html() == "已批准") {
                $(".state").eq(i).addClass("greenshadow")
            } else if ($(".state").eq(i).html() == "已驳回") {
                $(".state").eq(i).addClass("redshadow")
            } else if ($(".state").eq(i).html() == "待审批") {
                $(".state").eq(i).addClass("yellowshadow")
            }
        }
    }
		 
    //翻页动态添加
    function changecon(num) {
        //移除
        $("#tablelist").find("tr").not(".tabletitle").remove() ;//用户管理      
        $("#tablelist_log").find("tr").not(".tabletitle").remove() ; //日志管理

        //内容切换
        //用户管理      
        //第一个
        if (num.html() == "1") {
            for (var i = 0; i < 9; i++) {
                $("#tablelist").append("<tr><td>" + userarray[i][0] + "</td><td>" + userarray[i][1] + "</td><td>" + userarray[i][2] + "</td><td>" + userarray[i][3] + "</td><td><a href='#'class='rolea'>" + userarray[i][4] + "</a></td><td>" + userarray[i][5] + "</td>"
                                         + "<td>" + userarray[i][6] + "</td><td class='state'>" + userarray[i][7] + "</td><td>" + userarray[i][8] + "</td><td>" + userarray[i][9] + "</td><td class='hand paddinglf0'><a href='#'class='handlea '>" + userarray[i][10] + "</a>" + "<a href='#'class='handlea '>" + userarray[i][11] + "</a></td></tr>")
            }
        }
        //其他
        for (var j = 2; j <= $(".ye ul li").length; j++) {
            if (num.html() == j) {
                for (var i = 9 * (j - 1) ; i < 9 * j; i++) {
                    $("#tablelist").append("<tr><td>" + userarray[i][0] + "</td><td>" + userarray[i][1] + "</td><td>" + userarray[i][2] + "</td><td>" + userarray[i][3] + "</td><td><a href='#'class='rolea'>" + userarray[i][4] + "</a></td><td>" + userarray[i][5] + "</td>"
                                             + "<td>" + userarray[i][6] + "</td><td class='state'>" + userarray[i][7] + "</td><td>" + userarray[i][8] + "</td><td>" + userarray[i][9] + "</td><td  class='hand paddinglf0'><a href='#'class='handlea '>" + userarray[i][10] + "</a>" + "<a href='#'class='handlea '>" + userarray[i][11] + "</a></td></tr>")
                }
            }
        }


        //日志管理
        //第一个
        if (num.html() == "1") {
            for (var i = 0; i < 10; i++) {
                $("#tablelist_log").append("<tr><td>" + logarray[i][0] + "</td><td>" + logarray[i][1] + "</td><td>" + logarray[i][2] + "</td><td>" + logarray[i][3] + "</td><td>" + logarray[i][4] + "</td></tr>")
            }
        }
        //其他
        for (var j = 2; j <= $(".log_ye ul li").length; j++) {
            if (num.html() == j) {
                for (var i = 10 * (j - 1) ; i < 10 * j; i++) {
                    $("#tablelist_log").append("<tr><td>" + logarray[i][0] + "</td><td>" + logarray[i][1] + "</td><td>" + logarray[i][2] + "</td><td>" + logarray[i][3] + "</td><td>" + logarray[i][4] + "</td></tr>")
                }
            }
        }
             
        textshadow();//文字阴影
        handclick();//是否批准
        roleclick();//角色跳转
        //隔行变色
        $("#tablelist").find("tr:even").css("background", "rgba(0,0,0,0.1)");//用户管理   
        $("#tablelist_log").find("tr:even").css("background", "rgba(0,0,0,0.1)");//日志管理
    }
    //翻页
    function fanye(ye) {
        var sum = 0;
        var left=0;//偏移
        $(ye).find(".fontfamily").eq(0).addClass("liactive")
        //单击
        $(ye).find(".fontfamily").click(function () {
            $(ye).find(".fontfamily").removeClass("liactive")
            $(this).addClass("liactive")
            changecon($(this))
        })
        //上一页
        $(ye).find(".before").click(function(){
            $(ye).find(".fontfamily").removeClass("liactive")
            //active显示
            if(sum==0){
                sum=0
            }else{
                sum--;
            }
            //多个数组时候移动页数
            if (sum < 3) {
                left = 0
            } else {
                left += 32
            }
            $(ye).find(".ye_con ul").css("left", left + "px")
            $(ye).find(".fontfamily").removeClass("liactive")
            $(ye).find(".fontfamily").eq(sum).addClass("liactive")
            changecon($(ye).find(".fontfamily").eq(sum))
        })
        //下一页
        $(ye).find(".next").click(function () {
            //active显示
            if (sum == $(ye).find(".fontfamily").length - 1) {
                sum = $(ye).find(".fontfamily").length - 1;
            }else{
                sum++;
		    
            }
            //多个数组时候移动页数
            if (sum >= $(ye).find(".fontfamily").length - 3) {
                left = -32 * ($(ye).find("ul li").length - 3)
            } else {
                left -= 32
            }
            $(ye).find(".ye_con ul").css("left", left + "px")
            $(ye).find(".fontfamily").removeClass("liactive")
            $(ye).find(".fontfamily").eq(sum).addClass("liactive")
            changecon($(ye).find(".fontfamily").eq(sum))
        })
    }
    fanye(".ye")

    //日志管理

    var logarray = [
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户注销系统", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
        ["Jean Pearson", "Login", "用户登录", "192.168.13.76", "2016.05.23"],
    ]

    //动态添加页数!!!!bug
    ye(logarray, ".log_ye", 11)
    //翻页
    fanye(".log_ye")
    //起始页面
    for (var i = 0; i < 10; i++) {
        $("#tablelist_log").append("<tr><td>" + logarray[i][0] + "</td><td>" + logarray[i][1] + "</td><td>" + logarray[i][2] + "</td><td>" + logarray[i][3] + "</td><td>" + logarray[i][4] + "</td></tr>")

    }
    //换行变色
    $("#tablelist_log").find("tr:even").css("background", "rgba(0,0,0,0.1)")


    //角色管理1(无分页添加)
    var rolearray = [
    ["管理员", "描述信息描述信息描述信息描述信息描述信息描述信息", "[配置]", "[删除]"],
    ["维护人员", "描述信息描述信息描述信息描述信息描述信息描述信息", "[配置]", "[删除]"],
    ["监测人员", "描述信息描述信息描述信息描述信息描述信息描述信息", "[配置]", "[删除]"],
    ["平台宣传人员", "描述信息描述信息描述信息描述信息描述信息描述信息", "[配置]", "[删除]"],
    ]

    //动态添加页数!!!!bug
    //ye(rolearray, ".role_ye", 9)
    //翻页
    //fanye(".log_ye")
    //起始页面
    function rolefirst() {
        if (rolearray.length < 10) {
            for (var i = 0; i < rolearray.length; i++) {
                $("#tablelist_role").append("<tr><td><a href='role2.html' class='rolea'>" + rolearray[i][0] + "</a></td><td colspan='4'>" + rolearray[i][1] + "</td><td  class='hand paddinglf0'><a href='role2.html'class='handlea '>" + rolearray[i][2] + "</a>" + "<a href='#'class='handlea paddinglf0 det'>" + rolearray[i][3] + "</a></td></tr>")

            }
        } else {
            for (var i = 0; i < 10; i++) {
                $("#tablelist_role").append("<tr><td ><a href='role2.html' class='rolea'>" + rolearray[i][0] + "</a></td><td colspan='4'>" + rolearray[i][1] + "</td><td  class='hand paddinglf0'><a href='role2.html'class='handlea '>" + rolearray[i][2] + "</a>" + "<a href='#'class='handlea paddinglf0 det'>" + rolearray[i][3] + "</a></td></tr>")

            }
        }
    }
    rolefirst()
    //换行变色
    $("#tablelist_role").find("tr:odd").css("background", "rgba(0,0,0,0.1)")
    //删除行列
    function roledel() {
        $("#tablelist_role .det").click(function () {
            $("#tablelist_role tr").has(this).remove()
            //换行变色
            $("#tablelist_role").find("tr").css("background", "rgba(0,0,0,0)")
            $("#tablelist_role").find("tr:odd").css("background", "rgba(0,0,0,0.1)")
        })
        $(".role_con .title .new_role").click(function () {
            $(".mod_role_father").css("display", "block")
        })
    }
    roledel()
    //增加行列
    $(".mod_role .yes").click(function() {
        if ($("#rolename").val() != 0 && $("#rolename").val().length != 0 && $("#rolepro").val() != 0 && $("#rolepro").val().length != 0) {
            rolearray.push([$("#rolename").val(), $("#rolepro").val(), "[配置]", "[删除]"])
            $("#tablelist_role").find("tr").not(".tabletitle").remove();    
            rolefirst()
            $("#rolename").val("")
            $("#rolepro").val("")
            $(".mod_role_father").css("display", "none")
            //换行变色
            $("#tablelist_role").find("tr:odd").css("background", "rgba(0,0,0,0.1)")
            //删除行列
            roledel()
        }

    })
    $(".mod_role .no").click(function () {
        $(".mod_role_father").css("display","none")
        })

    //角色管理2




    //编码规则
    var code00 = ["电", "热", "气", "水", "特殊能源"]
    var code01 = ["A", "B", "C", "D", "E"]
    var code10 = [
    ["照明插座", "空调用电", "特殊用电", "动力用电"],
    ["采暖用热", "生活用热"],
    ["食堂用气", "其他用气"],
    ["绿化用水", "生活综合用水","采暖空调补水"],
    ["太阳能", "电源热泵"],
    ]
    var code11 = [
    ["A", "B", "C", "D"],
    ["A", "B"],
    ["A", "B"],
    ["A", "B", "C"],
    ["A", "B"],
    ]
    var code20 = [
        [
            ["照明应急", "走廊应急", "室外景观"],
            ["空调末端", "市政供暖", "冷水机组", "辅助水泵"],
            ["其他", "信息中心"],
            ["电梯", "水泵","通风机"],
        ], [
            ["无"],
            ["无"],
        ], [
            ["无"],
            ["燃气锅炉", "直燃机", "其他"],
        ], [
            ["无"],
            ["无"],
            ["无"],
        ], [
            ["无"],
            ["无"],
        ]
    ]
    var code21 = [
       [
           ["1", "2", "3"],
           ["1", "2", "3", "4"],
           ["1", "2"],
           ["1", "2", "3"],
       ], [
           ["无"],
           ["无"],
       ], [
           ["无"],
           ["2", "3", "1"],
       ], [
           ["无"],
           ["无"],
           ["无"],
       ], [
            ["无"],
            ["无"],
       ]
    ]
    $("#tablelist_code").append("<tr class='tr1'></tr>")
    $("#tablelist_code .tr1").append("<td>" + code00[0] + "</td>")
    $("#tablelist_code .tr1").append("<td>" + code01[0] + "</td>")
    for (var i = 0; i < code10[0].length; i++) {
        $("#tablelist_code .tr1").append("<td>" + code10[0][i] + "</td>")
    }
    for (var i = 0; i < code10[0].length; i++) {
        $("#tablelist_code .tr1").append("<td colspan='3'>" + code11[0][i] + "</td>")
    }
    for (var i = 0; i < code20[0].length; i++) {
        for (var j = 0; j < code20[0][i].length; j++) {
            $("#tablelist_code .tr1").append("<td>" + code20[0][i][j]+ "</td>")
        }
    }
})