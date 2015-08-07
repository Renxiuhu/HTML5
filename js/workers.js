/**
 * @author Administrator
 */
// postMessage() 方法 - 它用于向 HTML 页面传回一段消息
var i=0;

onmessage = function (event) {
    i=Number(event.data);
    timedCount();
}

function timedCount()
{
    i=i+1;
    postMessage(i);
    setTimeout("timedCount()",500);
}


