"use strict";$((function(){let e,t,s;isDarkStyle?(e=config.colors_dark.borderColor,t=config.colors_dark.bodyBg,s=config.colors_dark.headingColor):(e=config.colors.borderColor,t=config.colors.bodyBg,s=config.colors.headingColor);var a=$(".datatables-referral"),n=baseUrl+"app/ecommerce/customer/details/overview",r={1:{title:"Paid",class:"bg-label-success"},2:{title:"Unpaid",class:"bg-label-warning"},3:{title:"Rejected",class:"bg-label-danger"}};if(a.length){a.DataTable({ajax:assetsPath+"json/ecommerce-referral.json",columns:[{data:""},{data:"id"},{data:"user"},{data:"referred_id"},{data:"status"},{data:"value"},{data:"earning"}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:2,targets:0,render:function(e,t,s,a){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:3,checkboxes:!0,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'}},{targets:2,responsivePriority:1,render:function(e,t,s,a){var r=s.user,o=s.email,i=s.avatar;if(i)var l='<img src="'+assetsPath+"img/avatars/"+i+'" alt="Avatar" class="rounded-circle">';else{var c=["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())],d=(r=s.user).match(/\b\w/g)||[];l='<span class="avatar-initial rounded-circle bg-label-'+c+'">'+(d=((d.shift()||"")+(d.pop()||"")).toUpperCase())+"</span>"}return'<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2">'+l+'</div></div><div class="d-flex flex-column"><a href="'+n+'"><span class="fw-medium">'+r+'</span></a><small class="text-muted text-nowrap">'+o+"</small></div></div>"}},{targets:3,render:function(e,t,s,a){return"<span>"+s.referred_id+"</span>"}},{targets:4,render:function(e,t,s,a){var n=s.status;return'<span class="badge '+r[n].class+'" text-capitalized>'+r[n].title+"</span>"}},{targets:5,render:function(e,t,s,a){return"<span>"+s.value+"</span>"}},{targets:6,render:function(e,t,s,a){return'<span class="fw-medium">'+s.earning+"</span > "}}],order:[[2,"asc"]],dom:'<"card-header d-flex flex-column flex-sm-row pb-md-0 align-items-start align-items-sm-center pt-md-2"<"head-label"><"d-flex align-items-sm-center justify-content-end mt-2 mt-sm-0"l<"dt-action-buttons"B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',language:{sLengthMenu:"_MENU_"},buttons:[{extend:"collection",className:"btn btn-label-secondary dropdown-toggle me-3",text:'<i class="bx bx-export me-1"></i>Export',buttons:[{extend:"print",text:'<i class="bx bx-printer me-2" ></i>Print',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,s){if(e.length<=0)return e;var a=$.parseHTML(e),n="";return $.each(a,(function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?n+=t.lastChild.firstChild.textContent:void 0===t.innerText?n+=t.textContent:n+=t.innerText})),n}}},customize:function(a){$(a.document.body).css("color",s).css("border-color",e).css("background-color",t),$(a.document.body).find("table").addClass("compact").css("color","inherit").css("border-color","inherit").css("background-color","inherit")}},{extend:"csv",text:'<i class="bx bx-file me-2" ></i>Csv',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,s){if(e.length<=0)return e;var a=$.parseHTML(e),n="";return $.each(a,(function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?n+=t.lastChild.firstChild.textContent:void 0===t.innerText?n+=t.textContent:n+=t.innerText})),n}}}},{extend:"excel",text:'<i class="bx bxs-file-export me-2"></i>Excel',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,s){if(e.length<=0)return e;var a=$.parseHTML(e),n="";return $.each(a,(function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?n+=t.lastChild.firstChild.textContent:void 0===t.innerText?n+=t.textContent:n+=t.innerText})),n}}}},{extend:"pdf",text:'<i class="bx bxs-file-pdf me-2"></i>Pdf',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,s){if(e.length<=0)return e;var a=$.parseHTML(e),n="";return $.each(a,(function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?n+=t.lastChild.firstChild.textContent:void 0===t.innerText?n+=t.textContent:n+=t.innerText})),n}}}},{extend:"copy",text:'<i class="bx bx-copy me-2" ></i>Copy',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5],format:{body:function(e,t,s){if(e.length<=0)return e;var a=$.parseHTML(e),n="";return $.each(a,(function(e,t){void 0!==t.classList&&t.classList.contains("user-name")?n+=t.lastChild.firstChild.textContent:void 0===t.innerText?n+=t.textContent:n+=t.innerText})),n}}}}]}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(e){return"Details of "+e.data().user}}),type:"column",renderer:function(e,t,s){var a=$.map(s,(function(e,t){return""!==e.title?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>":""})).join("");return!!a&&$('<table class="table"/><tbody />').append(a)}}}});$("div.head-label").html('<h5 class="card-title text-nowrap mb-2 mb-sm-0">Referred users</h5>'),$(".dataTables_length").addClass("mt-0 mt-md-3 me-3"),$(".dt-action-buttons").addClass("pt-0")}setTimeout((()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")}),300)}));
