(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,o){},26:function(e,t,o){e.exports=o(42)},42:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(21),u=o.n(r),i=o(9),s=o(10),l=o(13),c=o(11),h=o(14),d=(o(19),o(22)),y=o(23),m=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={quote:"",author:"",color:""},o.submitQuote=function(e){var t=o.props.setQuote();return document.body.style="background: ".concat(t.color),o.setState({quote:t.quote,author:t.author,id:t.id})},o}return Object(h.a)(t,e),Object(s.a)(t,[{key:"newMethod",value:function(){var e=document.getElementById("opacity");e.classList.toggle("isupdating"),setTimeout(function(){e.classList.remove("isupdating")},1e3)}},{key:"componentDidMount",value:function(){this.submitQuote()}},{key:"componentDidUpdate",value:function(){this.newMethod()}},{key:"render",value:function(){return n.a.createElement("div",{id:"quote-box",onLoad:this.submitQuote,style:g},n.a.createElement("div",{id:"opacity"},n.a.createElement("h2",{id:"text"},this.state.quote),n.a.createElement("h5",{id:"author"},"- ",this.state.author)),n.a.createElement("div",{id:"buttons"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",id:"tweet-quote",href:"https://twitter.com/intent/tweet?text=%22".concat(this.state.quote,"%22%20-%20").concat(this.state.author)},n.a.createElement("button",{style:f},n.a.createElement(d.a,{icon:y.a}))),n.a.createElement("button",{onClick:this.submitQuote,style:f,id:"new-quote"},"New Quote")))}}]),t}(a.Component),g={padding:"2em 1em",background:"white",textAlign:"center"},f={background:"none",fontFamily:"arial",fontSize:"16px",textDecoration:"none",padding:"10px",margin:".5em",borderRadius:"3px"},p=o(12),b=o(6),w=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(n)))).state={quotes:[{key:0,quote:"Our greatest glory is not in never falling, but in rising every time we fall.",author:"Confucius",color:"darkgrey"},{key:1,quote:"All our dreams can come true, if we have the courage to pursue them.",author:"Walt Disney",color:"purple"},{key:2,quote:"It does not matter how slowly you go as long as you do not stop.",author:"Confucius",color:"darkgrey"},{key:3,quote:"Everything you've ever wanted is on the other side of fear.",author:"George Addair",color:"lightblue"},{key:4,quote:"Success is not final, failure is not fatal: it is the courage to continue that counts.",author:"Winston Churchill",color:"brown"},{key:5,quote:"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",author:"Nelson Mandela",color:"green"},{key:6,quote:"If you believe it will work out, you'll see opportunities. If you believe it won't, you will see obstacles.",author:"Wayne Dyer",color:"cyan"},{key:7,quote:"Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.",author:"Dale Carnegie",color:"darkred"},{key:8,quote:"Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.",author:"Helen Keller",color:"lightorange"},{key:9,quote:"If you can tune into your purpose and really align with it, setting goals so that your vision is an expression of that purpose, then life flows much more easily",author:"Jack Canfield",color:"navy"},{key:10,quote:"It's not about perfect. It's about effort. And when you bring that effort every single day, that's where transformation happens. That's how change occurs.",author:"Jillian Michaels",color:"pink"},{key:11,quote:"Remember that not getting what you want is sometimes a wonderful stroke of luck.",author:"Dalai Lama",color:"white"},{key:12,quote:"It is less about becoming a better person, and more of being better, as a person.",author:"J.R. Rim",color:"black"},{key:13,quote:"The way to get started is to quit talking and begin doing.",author:"Walt Disney",color:"purple"},{key:14,quote:"The only way to do great work is to love what you do. If you haven\t found it yet, keep looking. Don't settle.",author:"Steve Jobs",color:"silver"},{key:15,quote:"You don't have to be great to start, but you have to start to be great",author:"Zig Ziglar",color:"yellow"}],id:0},o.setQuote=function(){var e=Math.floor(Math.random()*o.state.quotes.length);return o.setState({id:e}),e!==o.state.id?o.state.quotes[e]:o.setQuote()},o}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(p.a,null,n.a.createElement("div",{style:v,className:"App"},n.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m,{setQuote:e.setQuote,quote:e.state.quote,author:e.state.author}))}})))}}]),t}(a.Component),v={display:"flex",alignItems:"center",justifyContent:"center",height:"80vh",width:"100vw"};u.a.render(n.a.createElement(p.a,{basename:"/reactquotes"},n.a.createElement(w,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.45a43a1e.chunk.js.map