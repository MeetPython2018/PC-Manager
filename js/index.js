/*
* @Author: cao424519431
* @Date:   2018-07-22 08:50:12
* @Last Modified by:   cao424519431
* @Last Modified time: 2018-07-22 10:23:16
*/
window.onload=function(){
	let header=document.getElementsByClassName("header")[0];
	console.log(header);
	let li=header.getElementsByTagName("li");
	console.log(li);
	let item=header.getElementsByClassName("item");
	console.log(item);
	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			if(i==0){
				item[i].style.height="270px";
			}
			else if(i==1){
				item[i].style.height="90px";
			}
			else if(i==2){
				item[i].style.height="180px";
			}
			else{
				item[i].style.height="90px";
			}
		}
		li[i].onmouseleave=function(){
			item[i].style.height=0;
		}
	}
}