(function(a){a.fn.tableExport=function(c){var e=a.extend({},a.fn.tableExport.defaults,c),f='"'+e.separator+'"',d='"\r\n"',g=e.spacing?"btn-toolbar":"",b="."+e.defaultClass;return[this.each(function(){var p=a(this),o=e.headings?p.find("tr"):p.find("tr:has(td)"),m='"'+o.map(function(r,s){var q=a(s).find("th, td");return q.map(function(t,u){return a(u).text().replace(/"/g,'""')}).get().join(f)}).get().join(d)+'"',i=o.map(function(r,s){var q=a(s).find("th, td");return q.map(function(t,u){return a(u).text()})}).get(),n="#",j="",k=e.fileName,l=p.find("caption:not(.head)");switch(k){case"id":k=p.attr("id");break;case"name":k=p.data("name");break}switch(e.type){case"xlsx":j=JSON.stringify({data:i,name:k});break;case"csv":default:n="data:text/csv;charset=utf-8,"+encodeURIComponent(m);k+=".csv";break;case"txt":m=a.fn.tableExport.txtFormat(m,e.stripQuotes);n="data:text/plain;charset=utf-8,"+encodeURIComponent(m);k+=".txt";break}var h="<a href='"+n+"' data-obj='"+j+"' download='"+k+"' role='button' class='"+e.defaultClass+" "+e.defaultTheme+" "+e.addClass+"'>"+e.buttonContent+"</a>";l.length?l.append(h):p.prepend('<caption class="'+g+" "+e.position+'">'+h+"</caption>")}),a.fn.tableExport.addEvent(b)]};a.fn.tableExport.defaults={separator:",",headings:true,buttonContent:"Export",addClass:"",defaultClass:"btn",defaultTheme:"btn-default",type:"csv",fileName:"export",position:"bottom",spacing:true,stripQuotes:true};a.fn.tableExport.txtFormat=function(b,c){if(c){return b.replace(/"(?!")/g,"")}return b.replace(/""/g,'"')};a.fn.tableExport.addEvent=function(b){return[a(b).off("click"),a(b).on("click",function(d){if(a(this).data("obj")){d.preventDefault();var c=a(this).data("obj"),g=c.data,f=c.name;export2xlsx(g,f)}})]}}(jQuery));