import  mui from "../lib/mui/js/mui.min.js"
	//启用双击监听
		mui.init({
			gestureConfig:{
				doubletap:true
			},
			subpages:[{
				url:'pullrefresh_sub.html',
				id:'pullrefresh_sub.html',
				styles:{
					top: '45px',
					bottom: '0px',
				}
			}]
		});
	
			var contentWebview = null;
				document.querySelector('header').addEventListener('doubletap',function () {
					if(contentWebview==null){
						contentWebview = plus.webview.currentWebview().children()[0];
					}
					contentWebview.evalJS("mui('#pullrefresh').pullRefresh().scrollTo(0,0,100)");
				});
	