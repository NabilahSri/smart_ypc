"use strict";const commentEditor=document.querySelector(".comment-editor");commentEditor&&new Quill(commentEditor,{modules:{toolbar:".comment-toolbar"},placeholder:"Enter category description...",theme:"snow"}),$((function(){let e,t,a;isDarkStyle?(e=config.colors_dark.borderColor,t=config.colors_dark.bodyBg,a=config.colors_dark.headingColor):(e=config.colors.borderColor,t=config.colors.bodyBg,a=config.colors.headingColor);var o=$(".datatables-category-list"),r=$(".select2");if(r.length&&r.each((function(){var e=$(this);e.wrap('<div class="position-relative"></div>').select2({dropdownParent:e.parent(),placeholder:e.data("placeholder")})})),o.length){var s=o.DataTable({ajax:assetsPath+"json/ecommerce-category-list.json",columns:[{data:""},{data:"id"},{data:"categories"},{data:"total_products"},{data:"total_earnings"},{data:""}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:1,targets:0,render:function(e,t,a,o){return""}},{targets:1,orderable:!1,searchable:!1,responsivePriority:4,checkboxes:!0,render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input">'},checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'}},{targets:2,responsivePriority:2,render:function(e,t,a,o){var r=a.categories,s=a.category_detail,n=a.cat_image,l=a.id;if(n)var i='<img src="'+assetsPath+"img/ecommerce-images/"+n+'" alt="Product-'+l+'" class="rounded-2">';else{var c=["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())],d=(r=a.category_detail).match(/\b\w/g)||[];i='<span class="avatar-initial rounded-2 bg-label-'+c+'">'+(d=((d.shift()||"")+(d.pop()||"")).toUpperCase())+"</span>"}return'<div class="d-flex align-items-center"><div class="avatar-wrapper me-2 rounded-2 bg-label-secondary"><div class="avatar">'+i+'</div></div><div class="d-flex flex-column justify-content-center"><span class="text-body text-wrap fw-medium">'+r+'</span><span class="text-muted text-truncate mb-0 d-none d-sm-block"><small>'+s+"</small></span></div></div>"}},{targets:3,responsivePriority:3,render:function(e,t,a,o){return'<div class="text-sm-end">'+a.total_products+"</div>"}},{targets:4,orderable:!1,render:function(e,t,a,o){return"<div class='fw-medium text-sm-end'>"+a.total_earnings+"</div"}},{targets:-1,title:"Actions",searchable:!1,orderable:!1,render:function(e,t,a,o){return'<div class="d-flex align-items-sm-center justify-content-sm-center"><button class="btn btn-sm btn-icon delete-record me-2"><i class="bx bx-trash"></i></button><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button></div>'}}],order:[2,"desc"],dom:'<"card-header d-flex flex-wrap"<f><"d-flex justify-content-center justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex justify-content-center flex-md-row mb-3 mb-md-0 ps-1 ms-1 align-items-baseline gap-2"lB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',lengthMenu:[7,10,20,50,70,100],language:{sLengthMenu:"_MENU_",search:"",searchPlaceholder:"Search Category"},buttons:[{text:'<i class="bx bx-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add Category</span>',className:"add-new btn btn-primary ms-2",attr:{"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasEcommerceCategoryList"}}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(e){return"Details of "+e.data().categories}}),type:"column",renderer:function(e,t,a){var o=$.map(a,(function(e,t){return""!==e.title?'<tr data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td> '+e.title+':</td> <td class="ps-0">'+e.data+"</td></tr>":""})).join("");return!!o&&$('<table class="table"/><tbody />').append(o)}}}});$(".dt-action-buttons").addClass("pt-0"),$(".dataTables_filter").addClass("me-3 ps-0")}$(".datatables-category-list tbody").on("click",".delete-record",(function(){s.row($(this).parents("tr")).remove().draw()})),setTimeout((()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")}),300)})),function(){const e=document.getElementById("eCommerceCategoryListForm");FormValidation.formValidation(e,{fields:{categoryTitle:{validators:{notEmpty:{message:"Please enter category title"}}},slug:{validators:{notEmpty:{message:"Please enter slug"}}}},plugins:{trigger:new FormValidation.plugins.Trigger,bootstrap5:new FormValidation.plugins.Bootstrap5({eleValidClass:"is-valid",rowSelector:function(e,t){return".mb-3"}}),submitButton:new FormValidation.plugins.SubmitButton,autoFocus:new FormValidation.plugins.AutoFocus}})}();
