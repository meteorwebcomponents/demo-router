FlowRouter.wait();

document.addEventListener("WebComponentsReady", function() {
  FlowRouter.initialize({
  });
});
FlowRouter.route("/:view", {
  name:'landing',
  triggersEnter:[function(r,c){
    if(!r.params.view)
      redirect("/home");
  }],
  action:function(params,queryParams){
    mwcLayout.render("demo-landing",{"main":"demo-route","header":"demo-header"});
  }
});

console.log('%cEnjoy the %cM %cW %cC %cgoodness','color:#d61a7f;', 'color:red;font-size:50px;font-weight:bold;font-family:sans-serif;','color:green;font-size:50px;font-weight:bold;font-family:sans-serif;','color:blue;font-size:50px;font-weight:bold;font-family:sans-serif;','color:#d61a7f;');

