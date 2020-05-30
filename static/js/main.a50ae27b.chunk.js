(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{182:function(e,t,n){e.exports=n(382)},187:function(e,t,n){},382:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(54),s=n.n(i),o=(n(187),n(9)),c=n(13),l=n(11),u=n(10),h=n(147),p=n.n(h),d=(n(91),n(8)),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event,a=[{name:"Attending",value:n.yes_rsvp_count},{name:"Available",value:n.rsvp_limit-n.yes_rsvp_count}],i=["#8884d8","#37c0ba"];return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("p",{className:"event__Overview--name"},this.props.event.name),r.a.createElement("p",{className:"event__Overview--localDate"},this.props.event.local_date),r.a.createElement("p",{className:"event__Overview--groupName"},this.props.event.group.name),this.props.event.venue&&r.a.createElement("p",{className:"event__Overview--venue"},"@",this.props.event.venue.name," |"," ",this.props.event.venue.address_1," | ",this.props.event.venue.city),n.rsvp_limit&&r.a.createElement(d.f,{height:150,width:250},r.a.createElement(d.e,null,r.a.createElement(d.d,{data:a,dataKey:"value",nameKey:"name",cx:"50%",cy:"50%",outerRadius:32,label:!0},a.map((function(e,t){return r.a.createElement(d.b,{key:"cell-".concat(t),fill:i[t]})}))),r.a.createElement(d.c,{iconSize:10,iconType:"triangle",layout:"horizontal",verticalAlign:"bottom",align:"center"}),r.a.createElement(d.i,null))),!n.rsvp_limit&&r.a.createElement("p",null,n.yes_rsvp_count," People Attending"),t&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"hide details"),!t&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"show details")),t&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("h3",null,"Info"),r.a.createElement("h4",null,r.a.createElement("a",{href:this.props.event.link,target:"blank"},"Go To MeetUp")),r.a.createElement("p",{className:"event__Details--description"},this.props.event.description)))}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return n?null:r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{event:e}))})))}}]),n}(a.Component),f=n(25),g=n.n(f),b=n(58),w=n(59),E=n.n(w),y=[{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2019-08-27",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1}];function k(e){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(g.a.mark((function e(t){var n,a,r,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,j();case 4:if(!(n=e.sent)){e.next=13;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,E.a.get(a);case 9:return r=e.sent,(i=r.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(i)),e.abrupt("return",i);case 13:return e.abrupt("return",[]);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return S.apply(this,arguments)}function S(){return(S=Object(b.a)(g.a.mark((function e(t,n){var a,r,i,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",y);case 2:if(navigator.onLine){e.next=5;break}return a=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(a));case 5:return e.next=7,j();case 7:if(!(r=e.sent)){e.next=15;break}return i="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,t&&n&&(i+="&lat="+t+"&lon="+n),e.next=13,E.a.get(i);case 13:return s=e.sent,e.abrupt("return",s.data);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?x("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=mad5k15puih83kp0ogmb35a82b&response_type=code&redirect_uri=https://rajeski.github.io/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:x("renew",localStorage.getItem("refresh_token"))}function x(e,t){return D.apply(this,arguments)}function D(){return(D=Object(b.a)(g.a.mark((function e(t,n){var a,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://hhndtqe4gl.execute-api.ap-northeast-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://hhndtqe4gl.execute-api.ap-northeast-1.amazonaws.com/dev/api/refreshtoken/"+n),e.next=3,E.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(N),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(N),A=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),k(n).then((function(t){e.setState({suggestions:t}),n&&0===t.length?e.setState({infoText:"Cannot find the city you are searching for. Please try another city"}):e.setState({infoText:""})}))},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(C,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Your City of Choice"}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberOfEvents:n}),e.props.updateEvents(null,null,n),n<1?e.setState({infoText:"Number must be 1 or greater"}):e.setState({infoText:""})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement(z,{text:this.state.infoText}))}}]),n}(a.Component),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[],page:null,defaultCity:"",lat:null,lon:null,warningText:""},e.updateEvents=function(t,n,a){navigator.onLine?e.setState({warningText:""}):e.setState({warningText:"Network Offline! Event list loaded from last session."}),t&&n?O(t,n,e.state.page).then((function(a){return e.setState({events:a,lat:t,lon:n})})):a?O(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t,page:a})})):O(e.state.lat,e.state.lon,e.state.page).then((function(t){return e.setState({events:t})}))},e.countEventsOnADate=function(t){for(var n=0,a=0;a<e.state.events.length;a+=1)e.state.events[a].local_date===t&&(n+=1);return n},e.getData=function(){for(var t=[],n=p()(),a=0;a<7;a+=1){n.add(1,"days");var r=n.format("MM-DD-YYYY"),i=e.countEventsOnADate(r);t.push({date:r,number:i})}return t},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;O().then((function(t){return e.setState({events:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"headLine"},r.a.createElement("h1",null,r.a.createElement("span",null,"Upcoming MeetUps"))),r.a.createElement(A,{updateEvents:this.updateEvents}),r.a.createElement(T,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}),r.a.createElement("div",{className:"chartWrapper"},r.a.createElement(d.f,{height:250},r.a.createElement(d.h,{margin:{top:20,right:20,bottom:20,left:-20}},r.a.createElement(d.a,{stroke:"#eee",strokeDasharray:"5 5"}),r.a.createElement(d.j,{type:"category",dataKey:"date",name:"date"}),r.a.createElement(d.k,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),r.a.createElement(d.i,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(d.g,{data:this.getData(),fill:"#8884d8"})))),r.a.createElement(v,{events:this.state.events}))}}]),n}(a.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var U=n(160);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meetup","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):W(t,e)}))}}(),U.config("3b182ffd828c4b6ba05f057c19336311").install()},91:function(e,t,n){}},[[182,1,2]]]);
//# sourceMappingURL=main.a50ae27b.chunk.js.map