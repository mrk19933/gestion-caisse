/*!
 * # Semantic UI 2.2.6 - Search
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,s,n){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.search=function(r){var i,a=e(this),o=a.selector||"",c=(new Date).getTime(),u=[],l=arguments[0],d="string"==typeof l,f=[].slice.call(arguments,1);return e(this).each(function(){var g,h=e.isPlainObject(r)?e.extend(!0,{},e.fn.search.settings,r):e.extend({},e.fn.search.settings),p=h.className,v=h.metadata,m=h.regExp,b=h.fields,y=h.selector,R=h.error,C=h.namespace,w="."+C,x=C+"-module",j=e(this),k=j.find(y.prompt),A=j.find(y.searchButton),E=j.find(y.results),q=j.find(y.result),F=j.find(y.category),S=this,T=j.data(x),D=!1;g={initialize:function(){g.verbose("Initializing module"),g.determine.searchFields(),g.bind.events(),g.set.type(),g.create.results(),g.instantiate()},instantiate:function(){g.verbose("Storing instance of module",g),T=g,j.data(x,g)},destroy:function(){g.verbose("Destroying instance"),j.off(w).removeData(x)},refresh:function(){g.debug("Refreshing selector cache"),k=j.find(y.prompt),A=j.find(y.searchButton),F=j.find(y.category),E=j.find(y.results),q=j.find(y.result)},refreshResults:function(){E=j.find(y.results),q=j.find(y.result)},bind:{events:function(){g.verbose("Binding events to search"),h.automatic&&(j.on(g.get.inputEvent()+w,y.prompt,g.event.input),k.attr("autocomplete","off")),j.on("focus"+w,y.prompt,g.event.focus).on("blur"+w,y.prompt,g.event.blur).on("keydown"+w,y.prompt,g.handleKeyboard).on("click"+w,y.searchButton,g.query).on("mousedown"+w,y.results,g.event.result.mousedown).on("mouseup"+w,y.results,g.event.result.mouseup).on("click"+w,y.result,g.event.result.click)}},determine:{searchFields:function(){r&&r.searchFields!==n&&(h.searchFields=r.searchFields)}},event:{input:function(){clearTimeout(g.timer),g.timer=setTimeout(g.query,h.searchDelay)},focus:function(){g.set.focus(),g.has.minimumCharacters()&&(g.query(),g.can.show()&&g.showResults())},blur:function(e){var t=s.activeElement===this,n=function(){g.cancel.query(),g.remove.focus(),g.timer=setTimeout(g.hideResults,h.hideDelay)};t||(g.resultsClicked?(g.debug("Determining if user action caused search to close"),j.one("click.close"+w,y.results,function(e){return g.is.inMessage(e)||D?void k.focus():(D=!1,void(g.is.animating()||g.is.hidden()||n()))})):(g.debug("Input blurred without user action, closing results"),n()))},result:{mousedown:function(){g.resultsClicked=!0},mouseup:function(){g.resultsClicked=!1},click:function(s){g.debug("Search result selected");var n=e(this),r=n.find(y.title).eq(0),i=n.is("a[href]")?n:n.find("a[href]").eq(0),a=i.attr("href")||!1,o=i.attr("target")||!1,c=(r.html(),r.length>0&&r.text()),u=g.get.results(),l=n.data(v.result)||g.get.result(c,u);return e.isFunction(h.onSelect)&&h.onSelect.call(S,l,u)===!1?(g.debug("Custom onSelect callback cancelled default select action"),void(D=!0)):(g.hideResults(),c&&g.set.value(c),void(a&&(g.verbose("Opening search link found in result",i),"_blank"==o||s.ctrlKey?t.open(a):t.location.href=a)))}}},handleKeyboard:function(e){var t,s=j.find(y.result),n=j.find(y.category),r=s.filter("."+p.active),i=s.index(r),a=s.length,o=r.length>0,c=e.which,u={backspace:8,enter:13,escape:27,upArrow:38,downArrow:40};if(c==u.escape&&(g.verbose("Escape key pressed, blurring search field"),g.trigger.blur()),g.is.visible())if(c==u.enter){if(g.verbose("Enter key pressed, selecting active result"),s.filter("."+p.active).length>0)return g.event.result.click.call(s.filter("."+p.active),e),e.preventDefault(),!1}else c==u.upArrow&&o?(g.verbose("Up key pressed, changing active result"),t=i-1<0?i:i-1,n.removeClass(p.active),s.removeClass(p.active).eq(t).addClass(p.active).closest(n).addClass(p.active),e.preventDefault()):c==u.downArrow&&(g.verbose("Down key pressed, changing active result"),t=i+1>=a?i:i+1,n.removeClass(p.active),s.removeClass(p.active).eq(t).addClass(p.active).closest(n).addClass(p.active),e.preventDefault());else c==u.enter&&(g.verbose("Enter key pressed, executing query"),g.query(),g.set.buttonPressed(),k.one("keyup",g.remove.buttonFocus))},setup:{api:function(t){var s={debug:h.debug,on:!1,cache:!0,action:"search",urlData:{query:t},onSuccess:function(e){g.parse.response.call(S,e,t)},onAbort:function(e){},onFailure:function(){g.displayMessage(R.serverError)},onError:g.error};e.extend(!0,s,h.apiSettings),g.verbose("Setting up API request",s),j.api(s)}},can:{useAPI:function(){return e.fn.api!==n},show:function(){return g.is.focused()&&!g.is.visible()&&!g.is.empty()},transition:function(){return h.transition&&e.fn.transition!==n&&j.transition("is supported")}},is:{animating:function(){return E.hasClass(p.animating)},hidden:function(){return E.hasClass(p.hidden)},inMessage:function(t){if(t.target){var n=e(t.target),r=e.contains(s.documentElement,t.target);return r&&n.closest(y.message).length>0}},empty:function(){return""===E.html()},visible:function(){return E.filter(":visible").length>0},focused:function(){return k.filter(":focus").length>0}},trigger:{blur:function(){var e=s.createEvent("HTMLEvents"),t=k[0];t&&(g.verbose("Triggering native blur event"),e.initEvent("blur",!1,!1),t.dispatchEvent(e))}},get:{inputEvent:function(){var e=k[0],t=e!==n&&e.oninput!==n?"input":e!==n&&e.onpropertychange!==n?"propertychange":"keyup";return t},value:function(){return k.val()},results:function(){var e=j.data(v.results);return e},result:function(t,s){var r=["title","id"],i=!1;return t=t!==n?t:g.get.value(),s=s!==n?s:g.get.results(),"category"===h.type?(g.debug("Finding result that matches",t),e.each(s,function(s,n){if(e.isArray(n.results)&&(i=g.search.object(t,n.results,r)[0]))return!1})):(g.debug("Finding result in results object",t),i=g.search.object(t,s,r)[0]),i||!1}},select:{firstResult:function(){g.verbose("Selecting first result"),q.first().addClass(p.active)}},set:{focus:function(){j.addClass(p.focus)},loading:function(){j.addClass(p.loading)},value:function(e){g.verbose("Setting search input value",e),k.val(e)},type:function(e){e=e||h.type,"category"==h.type&&j.addClass(h.type)},buttonPressed:function(){A.addClass(p.pressed)}},remove:{loading:function(){j.removeClass(p.loading)},focus:function(){j.removeClass(p.focus)},buttonPressed:function(){A.removeClass(p.pressed)}},query:function(){var t=g.get.value(),s=g.read.cache(t);g.has.minimumCharacters()?(s?(g.debug("Reading result from cache",t),g.save.results(s.results),g.addResults(s.html),g.inject.id(s.results)):(g.debug("Querying for",t),e.isPlainObject(h.source)||e.isArray(h.source)?g.search.local(t):g.can.useAPI()?g.search.remote(t):g.error(R.source)),h.onSearchQuery.call(S,t)):g.hideResults()},search:{local:function(e){var t,s=g.search.object(e,h.content);g.set.loading(),g.save.results(s),g.debug("Returned local search results",s),t=g.generateResults({results:s}),g.remove.loading(),g.addResults(t),g.inject.id(s),g.write.cache(e,{html:t,results:s})},remote:function(e){j.api("is loading")&&j.api("abort"),g.setup.api(e),j.api("query")},object:function(t,s,r){var i=[],a=[],o=t.toString().replace(m.escape,"\\$&"),c=new RegExp(m.beginsWith+o,"i"),u=function(t,s){var n=e.inArray(s,i)==-1,r=e.inArray(s,a)==-1;n&&r&&t.push(s)};return s=s||h.source,r=r!==n?r:h.searchFields,e.isArray(r)||(r=[r]),s===n||s===!1?(g.error(R.source),[]):(e.each(r,function(n,r){e.each(s,function(e,s){var n="string"==typeof s[r];n&&(s[r].search(c)!==-1?u(i,s):h.searchFullText&&g.fuzzySearch(t,s[r])&&u(a,s))})}),e.merge(i,a))}},fuzzySearch:function(e,t){var s=t.length,n=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),n>s)return!1;if(n===s)return e===t;e:for(var r=0,i=0;r<n;r++){for(var a=e.charCodeAt(r);i<s;)if(t.charCodeAt(i++)===a)continue e;return!1}return!0},parse:{response:function(e,t){var s=g.generateResults(e);g.verbose("Parsing server response",e),e!==n&&t!==n&&e[b.results]!==n&&(g.addResults(s),g.inject.id(e[b.results]),g.write.cache(t,{html:s,results:e[b.results]}),g.save.results(e[b.results]))}},cancel:{query:function(){g.can.useAPI()&&j.api("abort")}},has:{minimumCharacters:function(){var e=g.get.value(),t=e.length;return t>=h.minCharacters}},clear:{cache:function(e){var t=j.data(v.cache);e?e&&t&&t[e]&&(g.debug("Removing value from cache",e),delete t[e],j.data(v.cache,t)):(g.debug("Clearing cache",e),j.removeData(v.cache))}},read:{cache:function(e){var t=j.data(v.cache);return!!h.cache&&(g.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==n&&t[e])}},create:{id:function(e,t){var s,r,i=e+1;return t!==n?(s=String.fromCharCode(97+t),r=s+i,g.verbose("Creating category result id",r)):(r=i,g.verbose("Creating result id",r)),r},results:function(){0===E.length&&(E=e("<div />").addClass(p.results).appendTo(j))}},inject:{result:function(e,t,s){g.verbose("Injecting result into results");var r=s!==n?E.children().eq(s).children(y.result).eq(t):E.children(y.result).eq(t);g.verbose("Injecting results metadata",r),r.data(v.result,e)},id:function(t){g.debug("Injecting unique ids into results");var s=0,r=0;return"category"===h.type?e.each(t,function(t,i){r=0,e.each(i.results,function(e,t){var a=i.results[e];a.id===n&&(a.id=g.create.id(r,s)),g.inject.result(a,r,s),r++}),s++}):e.each(t,function(e,s){var i=t[e];i.id===n&&(i.id=g.create.id(r)),g.inject.result(i,r),r++}),t}},save:{results:function(e){g.verbose("Saving current search results to metadata",e),j.data(v.results,e)}},write:{cache:function(e,t){var s=j.data(v.cache)!==n?j.data(v.cache):{};h.cache&&(g.verbose("Writing generated html to cache",e,t),s[e]=t,j.data(v.cache,s))}},addResults:function(t){return e.isFunction(h.onResultsAdd)&&h.onResultsAdd.call(E,t)===!1?(g.debug("onResultsAdd callback cancelled default action"),!1):void(t?(E.html(t),g.refreshResults(),h.selectFirstResult&&g.select.firstResult(),g.showResults()):g.hideResults())},showResults:function(){g.is.visible()||(g.can.transition()?(g.debug("Showing results with css animations"),E.transition({animation:h.transition+" in",debug:h.debug,verbose:h.verbose,duration:h.duration,queue:!0})):(g.debug("Showing results with javascript"),E.stop().fadeIn(h.duration,h.easing)),h.onResultsOpen.call(E))},hideResults:function(){g.is.visible()&&(g.can.transition()?(g.debug("Hiding results with css animations"),E.transition({animation:h.transition+" out",debug:h.debug,verbose:h.verbose,duration:h.duration,queue:!0})):(g.debug("Hiding results with javascript"),E.stop().fadeOut(h.duration,h.easing)),h.onResultsClose.call(E))},generateResults:function(t){g.debug("Generating html from response",t);var s=h.templates[h.type],n=e.isPlainObject(t[b.results])&&!e.isEmptyObject(t[b.results]),r=e.isArray(t[b.results])&&t[b.results].length>0,i="";return n||r?(h.maxResults>0&&(n?"standard"==h.type&&g.error(R.maxResults):t[b.results]=t[b.results].slice(0,h.maxResults)),e.isFunction(s)?i=s(t,b):g.error(R.noTemplate,!1)):h.showNoResults&&(i=g.displayMessage(R.noResults,"empty")),h.onResults.call(S,t),i},displayMessage:function(e,t){return t=t||"standard",g.debug("Displaying message",e,t),g.addResults(h.templates.message(e,t)),h.templates.message(e,t)},setting:function(t,s){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(s===n)return h[t];h[t]=s}},internal:function(t,s){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(s===n)return g[t];g[t]=s}},debug:function(){!h.silent&&h.debug&&(h.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,h.name+":"),g.debug.apply(console,arguments)))},verbose:function(){!h.silent&&h.verbose&&h.debug&&(h.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),g.verbose.apply(console,arguments)))},error:function(){h.silent||(g.error=Function.prototype.bind.call(console.error,console,h.name+":"),g.error.apply(console,arguments))},performance:{log:function(e){var t,s,n;h.performance&&(t=(new Date).getTime(),n=c||t,s=t-n,c=t,u.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":s})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,500)},display:function(){var t=h.name+":",s=0;c=!1,clearTimeout(g.performance.timer),e.each(u,function(e,t){s+=t["Execution Time"]}),t+=" "+s+"ms",o&&(t+=" '"+o+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==n||console.table!==n)&&u.length>0&&(console.groupCollapsed(t),console.table?console.table(u):e.each(u,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),u=[]}},invoke:function(t,s,r){var a,o,c,u=T;return s=s||f,r=S||r,"string"==typeof t&&u!==n&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(s,r){var i=s!=a?r+t[s+1].charAt(0).toUpperCase()+t[s+1].slice(1):t;if(e.isPlainObject(u[i])&&s!=a)u=u[i];else{if(u[i]!==n)return o=u[i],!1;if(!e.isPlainObject(u[r])||s==a)return u[r]!==n&&(o=u[r],!1);u=u[r]}})),e.isFunction(o)?c=o.apply(r,s):o!==n&&(c=o),e.isArray(i)?i.push(c):i!==n?i=[i,c]:c!==n&&(i=c),o}},d?(T===n&&g.initialize(),g.invoke(l)):(T!==n&&T.invoke("destroy"),g.initialize())}),i!==n?i:this},e.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchFields:["title","description"],displayField:"",searchFullText:!0,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined."},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e){var t=/[&<>"'`]/g,s=/[&<>"'`]/,n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},r=function(e){return n[e]};return s.test(e)?e.replace(t,r):e},message:function(e,t){var s="";return e!==n&&t!==n&&(s+='<div class="message '+t+'">',s+="empty"==t?'<div class="header">No Results</div class="header"><div class="description">'+e+'</div class="description">':' <div class="description">'+e+"</div>",s+="</div>"),s},category:function(t,s){var r="";e.fn.search.settings.templates.escape;return t[s.categoryResults]!==n&&(e.each(t[s.categoryResults],function(t,i){i[s.results]!==n&&i.results.length>0&&(r+='<div class="category">',i[s.categoryName]!==n&&(r+='<div class="name">'+i[s.categoryName]+"</div>"),e.each(i.results,function(e,t){r+=t[s.url]?'<a class="result" href="'+t[s.url]+'">':'<a class="result">',t[s.image]!==n&&(r+='<div class="image"> <img src="'+t[s.image]+'"></div>'),r+='<div class="content">',t[s.price]!==n&&(r+='<div class="price">'+t[s.price]+"</div>"),t[s.title]!==n&&(r+='<div class="title">'+t[s.title]+"</div>"),t[s.description]!==n&&(r+='<div class="description">'+t[s.description]+"</div>"),r+="</div>",r+="</a>"}),r+="</div>")}),t[s.action]&&(r+='<a href="'+t[s.action][s.actionURL]+'" class="action">'+t[s.action][s.actionText]+"</a>"),r)},standard:function(t,s){var r="";return t[s.results]!==n&&(e.each(t[s.results],function(e,t){r+=t[s.url]?'<a class="result" href="'+t[s.url]+'">':'<a class="result">',t[s.image]!==n&&(r+='<div class="image"> <img src="'+t[s.image]+'"></div>'),r+='<div class="content">',t[s.price]!==n&&(r+='<div class="price">'+t[s.price]+"</div>"),t[s.title]!==n&&(r+='<div class="title">'+t[s.title]+"</div>"),t[s.description]!==n&&(r+='<div class="description">'+t[s.description]+"</div>"),r+="</div>",r+="</a>"}),t[s.action]&&(r+='<a href="'+t[s.action][s.actionURL]+'" class="action">'+t[s.action][s.actionText]+"</a>"),r)}}}}(jQuery,window,document);