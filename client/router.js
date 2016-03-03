FlowRouter.wait();

document.addEventListener("WebComponentsReady", function() {
  FlowRouter.initialize({
  });
});

FlowRouter.route("/", {
triggersEnter:[function(c,r){
r('/home');
}]
});
FlowRouter.route("/:view", {
  name:'landing',
  action:function(params,queryParams){
    mwcLayout.render("demo-landing",{"main":"demo-route","header":"demo-header"});
  }
});

console.log('%cEnjoy the %cM %cW %cC %cgoodness','color:#d61a7f;', 'color:red;font-size:50px;font-weight:bold;font-family:sans-serif;','color:green;font-size:50px;font-weight:bold;font-family:sans-serif;','color:blue;font-size:50px;font-weight:bold;font-family:sans-serif;','color:#d61a7f;');

