/**
 * Created by Cherish on 2017/7/17.
 */
$(document).ready(function () {
    $("#searchSalaryBtn").click(function(){
        console.log("开始查询。。。");
        var dom=$("#sidebar");

        var searchCondition={"area":dom.find("input[name='fname1']").val()};
        console.log("查询条件为：" +searchCondition.area);
    });

});
$(function(){
    //页面加载完成之后执行
var data={
    "page":"1",
    "total":2,
    "records":"13",
    "rows": [{"id":"13", "cell":["13","2007-10-06","Client 3","1000.00","0.00","1000.00",null]},
              {"id":"12","cell":["12","2007-10-06","Client 2","700.00","140.00","840.00",null]},
              {"id":"11","cell":["11","2007-10-06","Client 1","600.00","120.00","720.00",null]},
              {"id":"10","cell":["10","2007-10-06","Client 2","100.00","20.00","120.00",null]},
              {"id":"9","cell":["9","2007-10-06","Client 1","200.00","40.00","240.00",null]},
              {"id":"8","cell":["8","2007-10-06","Client 3","200.00","0.00","200.00",null]},
              {"id":"7","cell":["7","2007-10-05","Client 2","120.00","12.00","134.00",null]},
              {"id":"6","cell":["6","2007-10-05","Client 1","50.00","10.00","60.00",""]},
              {"id":"5","cell":["5","2007-10-05","Client 3","100.00","0.00","100.00","no tax at all"]},
              { "id":"4","cell":["4","2007-10-04","Client 3","150.00","0.00","150.00","no tax"]}],
    "userdata":{"amount":3220,"tax":342,"total":3564,"name":"Totals:"}		}

    pageInit();
});
function pageInit(){
    console.log("${ctxPath}/static/Salaryweb/jQgrid/data/JSONData.json");

    //创建jqGrid组件
    jQuery("#list2").jqGrid(
        {
            url :"JSONData.json",//组件创建完成之后请求数据的url
            datatype : "json",//请求数据返回的类型。可选json,xml,txt
            colNames : [ 'Inv No', 'Date', 'Client', 'Amount', 'Tax','Total', 'Notes' ],//jqGrid的列显示名字
            colModel : [ //jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
                {name : 'id',index : 'id',width : 55},
                {name : 'invdate',index : 'invdate',width : 90},
                {name : 'name',index : 'name asc, invdate',width : 100},
                {name : 'amount',index : 'amount',width : 80,align : "right"},
                {name : 'tax',index : 'tax',width : 80,align : "right"},
                {name : 'total',index : 'total',width : 80,align : "right"},
                {name : 'note',index : 'note',width : 150,sortable : false}
            ],
            rowNum : 10,//一页显示多少条
            rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
            pager : '#pager2',//表格页脚的占位符(一般是div)的id
            sortname : 'id',//初始化的时候排序的字段
            sortorder : "desc",//排序方式,可选desc,asc
            mtype : "post",//向后台请求数据的ajax的类型。可选post,get
            viewrecords : true,
            caption : "JSON Example"//表格的标题名字
        });
    /*创建jqGrid的操作按钮容器*/
    /*可以控制界面上增删改查的按钮是否显示*/
    jQuery("#list2").jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false});
}