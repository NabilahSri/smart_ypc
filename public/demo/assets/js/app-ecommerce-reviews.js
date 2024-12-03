"use strict";!function(){let e,t,a,o;isDarkStyle?(e=config.colors_dark.cardColor,a=config.colors_dark.textMuted,o=config.colors_dark.headingColor,t="dark"):(e=config.colors.cardColor,a=config.colors.textMuted,o=config.colors.headingColor,t="");const r=document.querySelector("#reviewsChart"),s={chart:{height:160,width:190,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"75%",columnWidth:"40%",startingShape:"rounded",endingShape:"rounded",borderRadius:5,distributed:!0}},grid:{show:!1,padding:{top:-25,bottom:-12}},colors:[config.colors_label.success,config.colors_label.success,config.colors_label.success,config.colors_label.success,config.colors.success,config.colors_label.success,config.colors_label.success],dataLabels:{enabled:!1},series:[{data:[20,40,60,80,100,80,60]}],legend:{show:!1},xaxis:{categories:["M","T","W","T","F","S","S"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:a,fontSize:"13px"}}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:0,options:{chart:{width:"100%"},plotOptions:{bar:{columnWidth:"40%"}}}},{breakpoint:1440,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:1400,options:{plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:1200,options:{chart:{height:130,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:6,columnWidth:"40%"}}}},{breakpoint:992,chart:{height:150,width:190,toolbar:{show:!1}},options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:883,options:{plotOptions:{bar:{borderRadius:5,columnWidth:"40%"}}}},{breakpoint:768,options:{chart:{height:150,width:190,toolbar:{show:!1}},plotOptions:{bar:{borderRadius:4,columnWidth:"40%"}}}},{breakpoint:576,options:{chart:{width:"100%",height:"200",type:"bar"},plotOptions:{bar:{borderRadius:6,columnWidth:"30% "}}}},{breakpoint:420,options:{plotOptions:{chart:{width:"100%",height:"200",type:"bar"},bar:{borderRadius:3,columnWidth:"30%"}}}}]};if(void 0!==typeof r&&null!==r){new ApexCharts(r,s).render()}}(),$((function(){let e,t,a;isDarkStyle?(e=config.colors_dark.borderColor,t=config.colors_dark.bodyBg,a=config.colors_dark.headingColor):(e=config.colors.borderColor,t=config.colors.bodyBg,a=config.colors.headingColor);var o=$(".datatables-review"),r=baseUrl+"app/ecommerce/customer/details/overview",s={Pending:{title:"Pending",class:"bg-label-warning"},Published:{title:"Published",class:"bg-label-success"}};if(o.length){var n=o.DataTable({ajax:assetsPath+"json/app-ecommerce-reviews.json",columns:[{data:""},{data:"id"},{data:"product"},{data:"reviewer"},{data:"review"},{data:"date"},{data:"status"},{data:" "}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:2,targets:0,render:function(e,t,a,o){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:3,checkboxes:!0,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'}},{targets:2,render:function(e,t,a,o){var r=a.product,s=a.company_name,n=a.id,i=a.product_image;if(i)var l='<img src="'+assetsPath+"img/ecommerce-images/"+i+'" alt="Product-'+n+'" class="rounded-2">';else{var c=["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())],d=(r=a.product).match(/\b\w/g)||[];l='<span class="avatar-initial rounded bg-label-'+c+'">'+(d=((d.shift()||"")+(d.pop()||"")).toUpperCase())+"</span>"}return'<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2 rounded-2 bg-label-secondary">'+l+'</div></div><div class="d-flex flex-column"><span class="fw-medium text-nowrap">'+r+'</span></a><small class="text-muted">'+s+"</small></div></div>"}},{targets:3,responsivePriority:1,render:function(e,t,a,o){var s=a.reviewer,n=a.email,i=a.avatar;if(i)var l='<img src="'+assetsPath+"img/avatars/"+i+'" alt="Avatar" class="rounded-circle">';else{var c=["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())],d=(s=a.reviewer).match(/\b\w/g)||[];l='<span class="avatar-initial rounded-circle bg-label-'+c+'">'+(d=((d.shift()||"")+(d.pop()||"")).toUpperCase())+"</span>"}return'<div class="d-flex justify-content-start align-items-center customer-name"><div class="avatar-wrapper"><div class="avatar me-2">'+l+'</div></div><div class="d-flex flex-column"><a href="'+r+'"><span class="fw-medium">'+s+'</span></a><small class="text-muted text-nowrap">'+n+"</small></div></div>"}},{targets:4,responsivePriority:2,render:function(e,t,a,o){var r=a.review,s=a.head,n=a.para,i=$('<div class="read-only-ratings ps-0 mb-2"></div>');return i.rateYo({rating:r,rtl:isRtl,readOnly:!0,starWidth:"20px",spacing:"3px",starSvg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,2 L15.09,8.09 L22,9.9 L17,14 L18.18,20 L12,17.5 L5.82,20 L7,14 L2,9.9 L8.91,8.09 L12,2 Z" /></svg>'}),"<div>"+i.prop("outerHTML")+'<p class="fw-medium mb-1 text-truncate text-capitalize">'+s+'</p><small class="text-break pe-3">'+n+"</small></div>"}},{targets:5,render:function(e,t,a,o){return'<span class="text-nowrap">'+new Date(a.date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})+"</span>"}},{targets:6,render:function(e,t,a,o){var r=a.status;return'<span class="badge '+s[r].class+'" text-capitalized>'+s[r].title+"</span>"}},{targets:-1,title:"Actions",searchable:!1,orderable:!1,render:function(e,t,a,o){return'<div class="text-xxl-center"><div class="dropdown"><a href="javascript:;" class="btn dropdown-toggle hide-arrow text-body p-0" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></a><div class="dropdown-menu dropdown-menu-end"><a href="javascript:;" class="dropdown-item">Download</a><a href="javascript:;" class="dropdown-item">Edit</a><a href="javascript:;" class="dropdown-item">Duplicate</a><div class="dropdown-divider"></div><a href="javascript:;" class="dropdown-item delete-record text-danger">Delete</a></div></div></div>'}}],order:[[2,"asc"]],dom:'<"card-header d-flex align-items-md-center pb-md-2 flex-wrap"<"me-5 ms-n2"f><"dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-end align-items-md-center justify-content-md-end pt-0 gap-3 flex-wrap"l<"review_filter"> <"mx-0 me-md-n3 mt-sm-0"B>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',language:{sLengthMenu:"_MENU_",search:"",searchPlaceholder:"Search Review"},buttons:[{extend:"collection",className:"btn btn-label-secondary dropdown-toggle me-3",text:'<i class="bx bx-export me-1"></i>Export',buttons:[{extend:"print",text:'<i class="bx bx-printer me-2" ></i>Print',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6],format:{body:function(e,t,a){if(e.length<=0)return e;var o=$.parseHTML(e),r="";return $.each(o,(function(e,t){void 0!==t.classList&&t.classList.contains("customer-name")?r+=t.lastChild.firstChild.textContent:void 0===t.innerText?r+=t.textContent:r+=t.innerText})),r}}},customize:function(o){$(o.document.body).css("color",a).css("border-color",e).css("background-color",t),$(o.document.body).find("table").addClass("compact").css("color","inherit").css("border-color","inherit").css("background-color","inherit")}},{extend:"csv",text:'<i class="bx bx-file me-2" ></i>Csv',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6],format:{body:function(e,t,a){if(e.length<=0)return e;var o=$.parseHTML(e),r="";return $.each(o,(function(e,t){void 0!==t.classList&&t.classList.contains("customer-name")?r+=t.lastChild.firstChild.textContent:void 0===t.innerText?r+=t.textContent:r+=t.innerText})),r}}}},{extend:"excel",text:'<i class="bx bxs-file-export me-2"></i>Excel',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6],format:{body:function(e,t,a){if(e.length<=0)return e;var o=$.parseHTML(e),r="";return $.each(o,(function(e,t){void 0!==t.classList&&t.classList.contains("customer-name")?r+=t.lastChild.firstChild.textContent:void 0===t.innerText?r+=t.textContent:r+=t.innerText})),r}}}},{extend:"pdf",text:'<i class="bx bxs-file-pdf me-2"></i>Pdf',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6],format:{body:function(e,t,a){if(e.length<=0)return e;var o=$.parseHTML(e),r="";return $.each(o,(function(e,t){void 0!==t.classList&&t.classList.contains("customer-name")?r+=t.lastChild.firstChild.textContent:void 0===t.innerText?r+=t.textContent:r+=t.innerText})),r}}}},{extend:"copy",text:'<i class="bx bx-copy me-2" ></i>Copy',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6],format:{body:function(e,t,a){if(e.length<=0)return e;var o=$.parseHTML(e),r="";return $.each(o,(function(e,t){void 0!==t.classList&&t.classList.contains("customer-name")?r+=t.lastChild.firstChild.textContent:void 0===t.innerText?r+=t.textContent:r+=t.innerText})),r}}}}]}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(e){return"Details of "+e.data().customer}}),type:"column",renderer:function(e,t,a){var o=$.map(a,(function(e,t){return""!==e.title?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>":""})).join("");return!!o&&$('<table class="table"/><tbody />').append(o)}}},initComplete:function(){this.api().columns(6).every((function(){var e=this,t=$('<select id="Review" class="form-select"><option value=""> All </option></select>').appendTo(".review_filter").on("change",(function(){var t=$.fn.dataTable.util.escapeRegex($(this).val());e.search(t?"^"+t+"$":"",!0,!1).draw()}));e.data().unique().sort().each((function(e,a){t.append('<option value="'+e+'" class="text-capitalize">'+e+"</option>")}))}))}});$(".dataTables_length").addClass("mt-0 mt-md-3")}$(".datatables-review tbody").on("click",".delete-record",(function(){n.row($(this).parents("tr")).remove().draw()})),setTimeout((()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")}),300)}));
