//floating video
var f_video = document.getElementsByClassName(&#39;separator&#39;);
for(i = 0 ; i &lt; f_video.length ; i++){
if(f_video[i].getElementsByClassName(&#39;YOUTUBE-iframe-video&#39;)[0] != undefined) {
	f_video[i].classList.add(&#39;b_video&#39;);
	f_video[i].setAttribute(&#39;onclick&#39; , &#39;v_show(this)&#39;);
   };
};
   function v_show(v_body){
  if(v_body.getAttribute(&#39;class&#39;).search(&#39;f_video&#39;) == -1){
	   v_body.classList.add(&#39;f_video&#39;);
  }else{
       v_body.classList.remove(&#39;f_video&#39;);
	};
};
