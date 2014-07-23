$(function(){    
    /*public*/
    (function(){
        var windowHeight=$(window).height();
        var containerHeight=$("#container").height();
        if(windowHeight-containerHeight>380){
            $("#container").css("min-height",windowHeight-380);
        }
    })();    
	$("li>h5",".foldList").bind("click",function(){
	    var li=$(this).parent();
		if(li.hasClass("fold")){
			li.removeClass("fold");
			$(this).find("em").removeClass("UI-bubble").addClass("UI-ask");
			li.find(".foldContent").slideUp();
		}else{
			li.addClass("fold");
			$(this).find("em").removeClass("UI-ask").addClass("UI-bubble");
			li.find(".foldContent").slideDown();
		}
	})   
})