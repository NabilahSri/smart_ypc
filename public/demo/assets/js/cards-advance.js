"use strict";!function(){let o,r,e,t;isDarkStyle?(o=config.colors_dark.cardColor,t=config.colors_dark.textMuted,e=config.colors_dark.bodyColor,r=config.colors_dark.headingColor):(o=config.colors.cardColor,t=config.colors.textMuted,e=config.colors.bodyColor,r=config.colors.headingColor);const s=document.querySelectorAll(".chart-progress");s&&s.forEach((function(o){const e=function(o,e,t){return{chart:{height:"true"==t?58:55,width:"true"==t?58:45,type:"radialBar"},plotOptions:{radialBar:{hollow:{size:"true"==t?"50%":"25%"},dataLabels:{show:"true"==t,value:{offsetY:-10,fontSize:"15px",fontWeight:500,fontFamily:"IBM Plex Sans",color:r}},track:{background:config.colors_label.secondary}}},colors:[o],grid:{padding:{top:"true"==t?-12:-15,bottom:"true"==t?-17:-15,left:"true"==t?-17:-5,right:-15}},series:[e],labels:"true"==t?[""]:["Progress"]}}(config.colors[o.dataset.color],o.dataset.series,o.dataset.progress_variant?o.dataset.progress_variant:"false");new ApexCharts(o,e).render()}));const a=document.querySelector("#orderStatisticsChart"),i={chart:{height:165,width:130,type:"donut"},labels:["Electronic","Sports","Decor","Fashion"],series:[85,15,50,50],colors:[config.colors.primary,config.colors.secondary,config.colors.info,config.colors.success],stroke:{width:5,colors:o},dataLabels:{enabled:!1,formatter:function(o,r){return parseInt(o)+"%"}},legend:{show:!1},grid:{padding:{top:0,bottom:0,right:15}},plotOptions:{pie:{donut:{size:"75%",labels:{show:!0,value:{fontSize:"1.5rem",fontFamily:"IBM Plex Sans",color:r,offsetY:-15,formatter:function(o){return parseInt(o)+"%"}},name:{offsetY:20,fontFamily:"IBM Plex Sans"},total:{show:!0,fontSize:"0.8125rem",color:e,label:"Weekly",formatter:function(o){return"38%"}}}}}},states:{active:{filter:{type:"none"}}}};if(void 0!==typeof a&&null!==a){new ApexCharts(a,i).render()}const l=document.querySelector("#reportBarChart"),n={chart:{height:200,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"60%",columnWidth:"60%",startingShape:"rounded",endingShape:"rounded",borderRadius:4,distributed:!0}},grid:{show:!1,padding:{top:-20,bottom:0,left:-10,right:-10}},colors:[config.colors_label.primary,config.colors_label.primary,config.colors_label.primary,config.colors_label.primary,config.colors.primary,config.colors_label.primary,config.colors_label.primary],dataLabels:{enabled:!1},series:[{data:[40,95,60,45,90,50,75]}],legend:{show:!1},xaxis:{categories:["Mo","Tu","We","Th","Fr","Sa","Su"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t,fontSize:"13px"}}},yaxis:{labels:{show:!1}}};if(void 0!==typeof l&&null!==l){new ApexCharts(l,n).render()}const c=document.querySelector("#conversionRateChart"),d={chart:{height:80,width:140,type:"line",toolbar:{show:!1},dropShadow:{enabled:!0,top:10,left:5,blur:3,color:config.colors.primary,opacity:.15},sparkline:{enabled:!0}},markers:{size:6,colors:"transparent",strokeColors:"transparent",strokeWidth:4,discrete:[{fillColor:o,seriesIndex:0,dataPointIndex:3,strokeColor:config.colors.primary,strokeWidth:4,size:6,radius:2}],hover:{size:7}},grid:{show:!1,padding:{right:8}},colors:[config.colors.primary],dataLabels:{enabled:!1},stroke:{width:5,curve:"smooth"},series:[{data:[137,210,160,245]}],xaxis:{show:!1,lines:{show:!1},labels:{show:!1},axisBorder:{show:!1}},yaxis:{show:!1}};new ApexCharts(c,d).render();const p=document.querySelector("#salesChart"),h={chart:{height:120,parentHeightOffset:0,type:"bar",toolbar:{show:!1}},plotOptions:{bar:{barHeight:"100%",columnWidth:"25px",startingShape:"rounded",endingShape:"rounded",borderRadius:5,distributed:!0,colors:{backgroundBarColors:[config.colors_label.primary,config.colors_label.primary,config.colors_label.primary,config.colors_label.primary],backgroundBarRadius:5}}},grid:{show:!1,padding:{top:-30,left:-12,bottom:10}},colors:[config.colors.primary],dataLabels:{enabled:!1},series:[{data:[60,35,25,75,15,42,85]}],legend:{show:!1},xaxis:{categories:["S","M","T","W","T","F","S"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t,fontSize:"13px"}}},yaxis:{labels:{show:!1}},responsive:[{breakpoint:1440,options:{plotOptions:{bar:{columnWidth:"30%"}}}},{breakpoint:1200,options:{plotOptions:{bar:{columnWidth:"15%"}}}},{breakpoint:768,options:{plotOptions:{bar:{columnWidth:"12%"}}}},{breakpoint:450,options:{plotOptions:{bar:{columnWidth:"19%"}}}}]};if(void 0!==typeof p&&null!==p){new ApexCharts(p,h).render()}}();
