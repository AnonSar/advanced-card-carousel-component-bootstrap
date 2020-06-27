"use strict";var _this=void 0;function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}var cdn=window.location.pathname.match(/^((?!\/index.html).)*/)[0];require.resetConfig();require.MODULE_LOAD_URL="".concat(cdn,"/modules");var dependencies=["architect","architect/requirejs-loader","@aws/cloud9/configs/ide/default","querystring","plugins/lambda.daemon/post-message-bus"];require(dependencies,function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark(function _callee(architect,loader,defaultConfig,qs,PostMessageBus){var start,MESSAGE_TYPE,query,origin,init,staticPrefix,settings,patternExcludes,excludes,getPackagePath,handlePluginExcludes,handlePluginOverrides,plugins,lambdaPlugins,loadingClass,hideLoader;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:hideLoader=function _ref5(){var loaderContainer=document.getElementById("loadingcontainer");loaderContainer.parentNode.removeChild(loaderContainer);document.body.className=document.body.className.replace(loaderContainer,"")};handlePluginOverrides=function _ref4(plugin){var packagePath=getPackagePath(plugin);if(packagePath==="@c9/ide/plugins/c9.fs/fs"){plugin.cli=true}if(packagePath==="@c9/ide/plugins/c9.core/settings"){}return plugin};handlePluginExcludes=function _ref3(plugin){var packagePath=getPackagePath(plugin);for(var i=0;i<patternExcludes.length;i++){if(new RegExp(patternExcludes[i]).test(packagePath)){return false}}if(excludes.indexOf(packagePath)!==-1){return false}return true};getPackagePath=function _ref2(plugin){return typeof plugin==="string"?plugin:plugin.packagePath};start=Date.now();MESSAGE_TYPE="application/x-cloud9-lite-v1+json";query=qs.parse(window.location.search.substring(1));window.query=query;origin=window.query.origin;window.bus=new PostMessageBus(window,window.parent,origin,MESSAGE_TYPE);_context.next=12;return Promise.race([window.bus.call("init",{}),new Promise(function(resolve,reject){return setTimeout(reject,10000)})]).catch(function(){window.bus.emit("lambda.metrics","logEvent","ideInitDone",false);window.features=[];window.identity={}});case 12:init=_context.sent;if(init){window.bus.emit("lambda.metrics","logEvent","ideInitDone",true);window.features=init.features;window.identity=init.identity}staticPrefix="".concat(window.location.protocol,"//").concat(window.location.host).concat(cdn);settings={defaultTheme:"flat-light",CORSWorkerPrefix:"".concat(staticPrefix,"/build/worker"),dashboardUrl:"",home:"/",installPath:"/",manifest:{},packed:true,platform:"linux",previewUrl:"",project:{},projectName:query.fn,standalone:true,staticPrefix:staticPrefix,themePrefix:"".concat(staticPrefix,"/build/skin/@aws/cloud9/configs/ide/environment-default"),user:{},workerPrefix:"".concat(staticPrefix,"/build/worker"),environmentDir:"/",environmentId:"/",environmentName:query.fn,readonly:query.readonly==="true"};patternExcludes=["/c9.db.dynamo","/c9.dynamo.encryption.provider","/c9.ide.ace.keymaps","/c9.ide.aws","/c9.ide.cloudformation","/c9.ide.collab","/c9.ide.configuration","/c9.ide.deploy","/c9.ide.ec2","/c9.ide.help","/c9.ide.immediate","/c9.ide.installer","/c9.ide.lambda","/c9.extensions.logcleaner","/c9.ide.outputchannel","/c9.ide.plugins","/c9.ide.preview","/c9.ide.processlist","/c9.ide.quota","/c9.ide.run","/c9.ide.sam.local.client","/c9.ide.scm","/c9.ide.services","/c9.ide.terminal","/c9.ide.test","/c9.ide.upload","/c9.ide.updates","/c9.vfs.client","/c9.ide.gotoanything"];excludes=["@aws/cloud9/plugins/c9.ide.welcome/welcome","@c9/ide/plugins/c9.cli.bridge/bridge_commands","@c9/ide/plugins/c9.ide.ace/themes","@c9/ide/plugins/c9.ide.configuration/configure","@c9/ide/plugins/c9.ide.console/console","@c9/ide/plugins/c9.ide.download/download","@c9/ide/plugins/c9.ide.editors/imgview","@c9/ide/plugins/c9.ide.find.infiles/findinfiles","@c9/ide/plugins/c9.ide.find/find","@c9/ide/plugins/c9.ide.find/find.nak","@c9/ide/plugins/c9.ide.format/formatters/custom","@c9/ide/plugins/c9.ide.imgeditor/imgeditor","@c9/ide/plugins/c9.ide.language.codeintel/codeintel","@c9/ide/plugins/c9.ide.language.core/outline","@c9/ide/plugins/c9.ide.language.go/go","@c9/ide/plugins/c9.ide.language.java/java","@c9/ide/plugins/c9.ide.language.javascript.tern/tern","@c9/ide/plugins/c9.ide.language.javascript.tern/ui","@c9/ide/plugins/c9.ide.language.jsonalyzer/jsonalyzer","@c9/ide/plugins/c9.ide.language.jsonalyzer/mock_collab","@c9/ide/plugins/c9.ide.language.lsp/lsp","@c9/ide/plugins/c9.ide.language.python/python","@c9/ide/plugins/c9.ide.language/worker_util_helper","@c9/ide/plugins/c9.ide.local/open","@c9/ide/plugins/c9.ide.login/login","@c9/ide/plugins/c9.ide.navigate/navigate","@c9/ide/plugins/c9.ide.newresource/open","@c9/ide/plugins/c9.ide.openfiles/openfiles","@c9/ide/plugins/c9.ide.preferences/general","@c9/ide/plugins/c9.ide.preferences/project","@c9/ide/plugins/c9.ide.save/autosave","@c9/ide/plugins/c9.ide.theme.jett/plugin","@c9/ide/plugins/c9.ide.tree/favorites","@c9/ide/plugins/c9.ide.watcher/gui"];plugins=defaultConfig(settings).filter(handlePluginExcludes).map(handlePluginOverrides);plugins.push({consumes:[],provides:["auth.bootstrap","navigate"],setup:function setup(options,imports,register){register(null,{"auth.bootstrap":{login:function login(callback){callback()}},navigate:{tree:function tree(){},markDirty:function markDirty(){}}})}});lambdaPlugins=["plugins/lambda.utils/webstorage","plugins/lambda.utils/FSTrie","plugins/lambda/dialog/zipconflict","plugins/lambda.daemon/daemon","plugins/lambda.vfs/vfs","plugins/lambda.metrics/metrics","plugins/lambda.overrides/general","plugins/lambda.overrides/overrides","plugins/lambda.overrides/project","plugins/lambda/ui","plugins/lambda/fullscreen/fullscreen"];if(!settings.readonly){lambdaPlugins=lambdaPlugins.concat(["plugins/lambda/invoke/invoke","plugins/lambda/invoke/invoke.function","plugins/lambda/save/save","plugins/lambda/autosave/autosave"])}plugins=plugins.concat(lambdaPlugins.map(function(plugin){return{packagePath:plugin}}));window.plugins=plugins;loadingClass="loading ".concat(document.getElementById("loadingide").className);document.body.className=loadingClass;loader.resolveConfig(plugins,function(err,config){if(err){throw err}var errored;var app=architect.createApp(config,function(e){if(e){errored=true;throw e}});function done(){var totalLoadTime=Date.now()-start;var c9=app.services.c9;c9.ready();c9.totalLoadTime=totalLoadTime;app.services.lambdaMetrics.submitCustomTimer("ideLoad",totalLoadTime);hideLoader()}app.on("error",function(e){window.bus.emit("lambda.metrics","logEvent","ideAppError",true);if(!errored){throw e}});app.on("service",function(name,plugin){if(!plugin.name){plugin.name=name}});app.on("ready",function(){window.bus.emit("lambda.metrics","logEvent","ideAppReady",true);window.app=app.services;window.app.__defineGetter__("_ace",function(){return _this.tabManager.focussedTab.editor.ace});Object.keys(window.app).forEach(function(n){if(/[^\w]/.test(n)){window.app["".concat(n.replace(/[^\w]/,"_"),"_")]=window.app[n]}});var waiters=[function waitForVfs(next){var appVfs=app.services.vfs;appVfs.connected?next():appVfs.once("connect",next)},function waitForSettings(next){var appSettings=app.services.settings;appSettings.inited?next():appSettings.once("read",next)},function waitForTheme(next){var appLayout=app.services.layout;!appLayout||appLayout.hasTheme?next():appLayout.once("eachTheme",next)},done];waiters.reverse().reduce(function(chain,waiter){return waiter.bind(null,chain)})()})},function(mod){if(mod.id==="@c9/ide/plugins/c9.ide.clipboard/html5"){console.error("Unable to load html5.js. This may be caused by a false positive in your virus scanner. Please try reloading with ?packed=1 added to the URL.")}});case 27:case"end":return _context.stop();}}},_callee,this)}));return function(_x,_x2,_x3,_x4,_x5){return _ref.apply(this,arguments)}}());