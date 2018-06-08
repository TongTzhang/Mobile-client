$(function(){

	// $(".problem-title  li.title-second").click(function(){
	// 	console.log($(this).parent().parent().siblings(".detail"));
	// 	$(this).parent().parent().siblings(".detail").fadeIn;
	// 	$(this).parent().parent().siblings(".problem-content").fadeOut;
	// 	$(this).addClass("selected").siblings().removeClass("selected")
	// })
	$(".title-list li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
        var index = $(this).index();
        $(".problem-content").eq(index).show().siblings(".problem-content").hide();
    })


    var res={
    	"avg_interactive_count":20,
    	"avg_reply_times":8,
    	"avg_reply_word_count":20,
    	"helpful":"true",
    	"problem-id":"1",
    	"similar_problems":[
    		{
    			"created_time_str":"2017年11月12日",
    			"problem-id":1,
    			"tags":[
    				"用药指导",
    				"饮食起居",
    				"心理疏导",
    			],
    			"title":"月经不调，经常拖后（女，32岁）"

    			
    		},

    	],
    	"tags":[
    		{
    			"medical":[
    				{
    					"medical_name":"易坦静",
    					"medical_ratio":"89%",
    				},
    				{
    					"medical_name":"阿奇霉素",
    					"medical_ratio":"64%",
    				},
    				{
    					"medical_name":"小儿氨酚黄那敏颗粒",
    					"medical_ratio":"54%",
    				},
    				{
    					"medical_name":"妈咪爱",
    					"medical_ratio":"52%",
    				},

    			],
    			"tag_name":"用药指导",
    			"tag_ratio":"89%",
    		},
    		{
    			"medical":[
    				{
    					"medical_name":"血常规",
    					"medical_ratio":"89%",
    				},
    				{
    					"medical_name":"C反应蛋白",
    					"medical_ratio":"64%",
    				},
    				{
    					"medical_name":"过敏源",
    					"medical_ratio":"54%",
    				},
    				{
    					"medical_name":"性激素6项",
    					"medical_ratio":"52%",
    				},

    			],
    			"tag_name":"检查建议",
    			"tag_ratio":"63%",
    		},
    		{
    			"medical":[
    				{
    					"medical_name":"偏头痛",
    					"medical_ratio":"89%",
    				},
    				{
    					"medical_name":"腔隙性脑梗",
    					"medical_ratio":"64%",
    				},
    				{
    					"medical_name":"多囊卵巢综合征",
    					"medical_ratio":"54%",
    				},
    				{
    					"medical_name":"宫外妊娠",
    					"medical_ratio":"52%",
    				},

    			],
    			"tag_name":"待确诊疾病",
    			"tag_ratio":"52%",
    		},
    	]

    };
    var  strAvgi="<li>每个问题平均回复"+res.avg_interactive_count+"次</li>";
    var  srtAvgr="<li>每次平均"+res.avg_reply_times+"分钟内回复</li>";
    var  strFirst="<ul>"+strAvgi+""+srtAvgr+"</ul>";
    $(".tip").html(strFirst);
    var strSecond="";
    for(var i=0;i<res.similar_problems.length;i++){
    	var strTime="<p class='time'>"+res.similar_problems.created_time_str+"</p>";
    	var strTitle="<p><span>问题 :  </span>"+res.similar_problems.title+"</p>";
    	var srtTags=
    }
})