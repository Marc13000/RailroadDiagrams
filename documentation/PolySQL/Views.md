---
layout: plain
title:  Views
---

This page gives an overview on creating, altering and dropping views and materialized views in Polypheny using PolySQL. 


## Views

{% highlight sql %}

{% endhighlight %}
### createViewStatement:
{::nomarkdown}

<html>
<style>
     svg.railroad-diagram {
     }
     svg.railroad-diagram path {
       stroke-width: 1.5;
       stroke: black;
       fill: rgba(0,0,0,0);
     }
     svg.railroad-diagram text {
       font: bold 14px monospace;
       text-anchor: middle;
       white-space: pre;
     }
     svg.railroad-diagram text.diagram-text {
       font-size: 12px;
     }
     svg.railroad-diagram text.diagram-arrow {
       font-size: 16px;
     }
     svg.railroad-diagram text.label {
       text-anchor: start;
     }
     svg.railroad-diagram text.comment {
       font: italic 12px monospace;
     }
     svg.railroad-diagram g.non-terminal text {
       /*font-style: italic;*/
     }
     svg.railroad-diagram rect2 {
      stroke-width: 2;
      stroke: black;
      fill: #D8F4D7;
     }
     svg.railroad-diagram rect2.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram rect {
       stroke-width: 2;
       stroke: black;
       fill: #c9fff3;
     }
     svg.railroad-diagram rect.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram path.diagram-text {
       stroke-width: 1.5;
       stroke: black;
       fill: white;
       cursor: help;
     }
     svg.railroad-diagram g.diagram-text:hover path.diagram-text {
     }
</style>
<div style="overflow: auto;">
<svg class="railroad-diagram" width="615" height="276" viewBox="0 0 615 276">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M50 56h18"></path>
<g>
<path d="M68 56h10"></path>
<path d="M537 56h10"></path>
<g class="non-terminal ">
<path d="M78 56h0"></path>
<path d="M152 56h0"></path>
<rect x="78" y="45" width="74" height="22"></rect>
<text x="115" y="60">CREATE</text>
</g>
<path d="M152 56h10"></path>
<path d="M162 56h10"></path>
<g class="non-terminal ">
<path d="M172 56h0"></path>
<path d="M228 56h0"></path>
<rect x="172" y="45" width="56" height="22"></rect>
<text x="200" y="60">VIEW</text>
</g>
<path d="M228 56h10"></path>
<g>
<path d="M238 56h0"></path>
<path d="M471 56h0"></path>
<path d="M238 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M274 20h161"></path>
</g>
<path d="M435 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M238 56h36"></path>
<g>
<path d="M274 56h0"></path>
<g>
<path d="M274 56h10"></path>
<path d="M425 56h10"></path>
<g class="non-terminal ">
<path d="M284 56h0"></path>
<path d="M322 56h0"></path>
<rect x="284" y="45" width="38" height="22"></rect>
<text x="303" y="60">OR</text>
</g>
<path d="M322 56h10"></path>
<path d="M332 56h10"></path>
<g class="non-terminal ">
<path d="M342 56h0"></path>
<path d="M425 56h0"></path>
<rect x="342" y="45" width="83" height="22"></rect>
<text x="383.5" y="60">REPLACE</text>
</g>
</g>
<path d="M435 56h0"></path>
</g>
<path d="M435 56h36"></path>
</g>
<path d="M471 56h10"></path>
<g class="terminal ">
<path d="M481 56h0"></path>
<path d="M537 56h0"></path>
<rect x="481" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="509" y="60">name</text>
</g>
</g>
<path d="M547 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-479a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 140h52.5"></path>
<path d="M494.5 140h52.5"></path>
<g>
<path d="M120.5 140h0"></path>
<path d="M494.5 140h0"></path>
<path d="M120.5 140a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M156.5 104h302"></path>
</g>
<path d="M458.5 104a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M120.5 140h36"></path>
<g>
<path d="M156.5 140h0"></path>
<g>
<path d="M156.5 140h10"></path>
<path d="M448.5 140h10"></path>
<g class="terminal ">
<path d="M166.5 140h0"></path>
<path d="M195.5 140h0"></path>
<rect x="166.5" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="181" y="144">(</text>
</g>
<path d="M195.5 140h10"></path>
<path d="M205.5 140h10"></path>
<g>
<path d="M215.5 140h0"></path>
<path d="M399.5 140h0"></path>
<path d="M215.5 140h18"></path>
<g>
<path d="M233.5 140h0"></path>
<g>
<path d="M233.5 140h10"></path>
<path d="M371.5 140h10"></path>
<g class="terminal ">
<path d="M243.5 140h0"></path>
<path d="M371.5 140h0"></path>
<rect x="243.5" y="129" width="128" height="22" rx="10" ry="10"></rect>
<text x="307.5" y="144">tableElement</text>
</g>
</g>
<path d="M381.5 140h0"></path>
</g>
<path d="M381.5 140h18"></path>
<path d="M233.5 140a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M233.5 176h59.5"></path>
<path d="M322 176h59.5"></path>
<rect x="293" y="165" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="307.5" y="180">,</text>
</g>
<path d="M381.5 176a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M399.5 140h10"></path>
<path d="M409.5 140h10"></path>
<g class="terminal ">
<path d="M419.5 140h0"></path>
<path d="M448.5 140h0"></path>
<rect x="419.5" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="434" y="144">)</text>
</g>
</g>
<path d="M458.5 140h0"></path>
</g>
<path d="M458.5 140h36"></path>
</g>
</g>
<path d="M547 140a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-479a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 245h132"></path>
<path d="M415 245h132"></path>
<g>
<path d="M200 245h0"></path>
<path d="M415 245h0"></path>
<path d="M200 245a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M236 209h143"></path>
</g>
<path d="M379 209a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M200 245h36"></path>
<g>
<path d="M236 245h0"></path>
<g>
<path d="M236 245h10"></path>
<path d="M369 245h10"></path>
<g class="non-terminal ">
<path d="M246 245h0"></path>
<path d="M284 245h0"></path>
<rect x="246" y="234" width="38" height="22"></rect>
<text x="265" y="249">AS</text>
</g>
<path d="M284 245h10"></path>
<path d="M294 245h10"></path>
<g class="terminal ">
<path d="M304 245h0"></path>
<path d="M369 245h0"></path>
<rect x="304" y="234" width="65" height="22" rx="10" ry="10"></rect>
<text x="336.5" y="249">query</text>
</g>
</g>
<path d="M379 245h0"></path>
</g>
<path d="M379 245h36"></path>
</g>
</g>
<path d="M547 245h18"></path>
<path d="M565 245h0"></path>
</g>
<path d="M565 245h10"></path>
<path d="M 575 245 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### dropViewStatement:
{::nomarkdown}

<html>
<style>
     svg.railroad-diagram {
     }
     svg.railroad-diagram path {
       stroke-width: 1.5;
       stroke: black;
       fill: rgba(0,0,0,0);
     }
     svg.railroad-diagram text {
       font: bold 14px monospace;
       text-anchor: middle;
       white-space: pre;
     }
     svg.railroad-diagram text.diagram-text {
       font-size: 12px;
     }
     svg.railroad-diagram text.diagram-arrow {
       font-size: 16px;
     }
     svg.railroad-diagram text.label {
       text-anchor: start;
     }
     svg.railroad-diagram text.comment {
       font: italic 12px monospace;
     }
     svg.railroad-diagram g.non-terminal text {
       /*font-style: italic;*/
     }
     svg.railroad-diagram rect2 {
      stroke-width: 2;
      stroke: black;
      fill: #D8F4D7;
     }
     svg.railroad-diagram rect2.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram rect {
       stroke-width: 2;
       stroke: black;
       fill: #c9fff3;
     }
     svg.railroad-diagram rect.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram path.diagram-text {
       stroke-width: 1.5;
       stroke: black;
       fill: white;
       cursor: help;
     }
     svg.railroad-diagram g.diagram-text:hover path.diagram-text {
     }
</style>
<div style="overflow: auto;">
<svg class="railroad-diagram" width="552" height="87" viewBox="0 0 552 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M492 56h10"></path>
<g class="non-terminal ">
<path d="M60 56h0"></path>
<path d="M116 56h0"></path>
<rect x="60" y="45" width="56" height="22"></rect>
<text x="88" y="60">DROP</text>
</g>
<path d="M116 56h10"></path>
<path d="M126 56h10"></path>
<g class="non-terminal ">
<path d="M136 56h0"></path>
<path d="M192 56h0"></path>
<rect x="136" y="45" width="56" height="22"></rect>
<text x="164" y="60">VIEW</text>
</g>
<path d="M192 56h10"></path>
<g>
<path d="M202 56h0"></path>
<path d="M426 56h0"></path>
<path d="M202 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M238 20h152"></path>
</g>
<path d="M390 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M202 56h36"></path>
<g>
<path d="M238 56h0"></path>
<g>
<path d="M238 56h10"></path>
<path d="M380 56h10"></path>
<g class="non-terminal ">
<path d="M248 56h0"></path>
<path d="M286 56h0"></path>
<rect x="248" y="45" width="38" height="22"></rect>
<text x="267" y="60">IF</text>
</g>
<path d="M286 56h10"></path>
<path d="M296 56h10"></path>
<g class="non-terminal ">
<path d="M306 56h0"></path>
<path d="M380 56h0"></path>
<rect x="306" y="45" width="74" height="22"></rect>
<text x="343" y="60">EXISTS</text>
</g>
</g>
<path d="M390 56h0"></path>
</g>
<path d="M390 56h36"></path>
</g>
<path d="M426 56h10"></path>
<g class="terminal ">
<path d="M436 56h0"></path>
<path d="M492 56h0"></path>
<rect x="436" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="464" y="60">name</text>
</g>
</g>
<path d="M502 56h0"></path>
</g>
<path d="M502 56h10"></path>
<path d="M 512 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### alterStatement:
{::nomarkdown}

<html>
<style>
     svg.railroad-diagram {
     }
     svg.railroad-diagram path {
       stroke-width: 1.5;
       stroke: black;
       fill: rgba(0,0,0,0);
     }
     svg.railroad-diagram text {
       font: bold 14px monospace;
       text-anchor: middle;
       white-space: pre;
     }
     svg.railroad-diagram text.diagram-text {
       font-size: 12px;
     }
     svg.railroad-diagram text.diagram-arrow {
       font-size: 16px;
     }
     svg.railroad-diagram text.label {
       text-anchor: start;
     }
     svg.railroad-diagram text.comment {
       font: italic 12px monospace;
     }
     svg.railroad-diagram g.non-terminal text {
       /*font-style: italic;*/
     }
     svg.railroad-diagram rect2 {
      stroke-width: 2;
      stroke: black;
      fill: #D8F4D7;
     }
     svg.railroad-diagram rect2.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram rect {
       stroke-width: 2;
       stroke: black;
       fill: #c9fff3;
     }
     svg.railroad-diagram rect.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram path.diagram-text {
       stroke-width: 1.5;
       stroke: black;
       fill: white;
       cursor: help;
     }
     svg.railroad-diagram g.diagram-text:hover path.diagram-text {
     }
</style>
<div style="overflow: auto;">
<svg class="railroad-diagram" width="1209" height="146" viewBox="0 0 1209 146">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h0"></path>
<path d="M1159 56h0"></path>
<path d="M50 56h36"></path>
<g>
<path d="M86 56h121"></path>
<path d="M1002 56h121"></path>
<g class="non-terminal ">
<path d="M207 56h0"></path>
<path d="M272 56h0"></path>
<rect x="207" y="45" width="65" height="22"></rect>
<text x="239.5" y="60">ALTER</text>
</g>
<path d="M272 56h10"></path>
<path d="M282 56h10"></path>
<g class="non-terminal ">
<path d="M292 56h0"></path>
<path d="M348 56h0"></path>
<rect x="292" y="45" width="56" height="22"></rect>
<text x="320" y="60">VIEW</text>
</g>
<path d="M348 56h10"></path>
<g>
<path d="M358 56h0"></path>
<path d="M609 56h0"></path>
<path d="M358 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M394 20h179"></path>
</g>
<path d="M573 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M358 56h36"></path>
<g>
<path d="M394 56h0"></path>
<g>
<path d="M394 56h10"></path>
<path d="M563 56h10"></path>
<g class="terminal ">
<path d="M404 56h0"></path>
<path d="M514 56h0"></path>
<rect x="404" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="459" y="60">schemaName</text>
</g>
<path d="M514 56h10"></path>
<path d="M524 56h10"></path>
<g class="terminal ">
<path d="M534 56h0"></path>
<path d="M563 56h0"></path>
<rect x="534" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="548.5" y="60">.</text>
</g>
</g>
<path d="M573 56h0"></path>
</g>
<path d="M573 56h36"></path>
</g>
<path d="M609 56h10"></path>
<g class="terminal ">
<path d="M619 56h0"></path>
<path d="M711 56h0"></path>
<rect x="619" y="45" width="92" height="22" rx="10" ry="10"></rect>
<text x="665" y="60">viewName</text>
</g>
<path d="M711 56h10"></path>
<path d="M721 56h10"></path>
<g class="non-terminal ">
<path d="M731 56h0"></path>
<path d="M805 56h0"></path>
<rect x="731" y="45" width="74" height="22"></rect>
<text x="768" y="60">RENAME</text>
</g>
<path d="M805 56h10"></path>
<path d="M815 56h10"></path>
<g class="non-terminal ">
<path d="M825 56h0"></path>
<path d="M863 56h0"></path>
<rect x="825" y="45" width="38" height="22"></rect>
<text x="844" y="60">TO</text>
</g>
<path d="M863 56h10"></path>
<path d="M873 56h10"></path>
<g class="terminal ">
<path d="M883 56h0"></path>
<path d="M1002 56h0"></path>
<rect x="883" y="45" width="119" height="22" rx="10" ry="10"></rect>
<text x="942.5" y="60">newViewName</text>
</g>
</g>
<path d="M1123 56h36"></path>
<path d="M50 56a18 18 0 0 1 18 18v23a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 115h0"></path>
<path d="M1123 115h0"></path>
<g class="non-terminal ">
<path d="M86 115h0"></path>
<path d="M151 115h0"></path>
<rect x="86" y="104" width="65" height="22"></rect>
<text x="118.5" y="119">ALTER</text>
</g>
<path d="M151 115h10"></path>
<path d="M161 115h10"></path>
<g class="non-terminal ">
<path d="M171 115h0"></path>
<path d="M227 115h0"></path>
<rect x="171" y="104" width="56" height="22"></rect>
<text x="199" y="119">VIEW</text>
</g>
<path d="M227 115h10"></path>
<g>
<path d="M237 115h0"></path>
<path d="M488 115h0"></path>
<path d="M237 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M273 79h179"></path>
</g>
<path d="M452 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M237 115h36"></path>
<g>
<path d="M273 115h0"></path>
<g>
<path d="M273 115h10"></path>
<path d="M442 115h10"></path>
<g class="terminal ">
<path d="M283 115h0"></path>
<path d="M393 115h0"></path>
<rect x="283" y="104" width="110" height="22" rx="10" ry="10"></rect>
<text x="338" y="119">schemaName</text>
</g>
<path d="M393 115h10"></path>
<path d="M403 115h10"></path>
<g class="terminal ">
<path d="M413 115h0"></path>
<path d="M442 115h0"></path>
<rect x="413" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="427.5" y="119">.</text>
</g>
</g>
<path d="M452 115h0"></path>
</g>
<path d="M452 115h36"></path>
</g>
<path d="M488 115h10"></path>
<g class="terminal ">
<path d="M498 115h0"></path>
<path d="M590 115h0"></path>
<rect x="498" y="104" width="92" height="22" rx="10" ry="10"></rect>
<text x="544" y="119">viewName</text>
</g>
<path d="M590 115h10"></path>
<path d="M600 115h10"></path>
<g class="non-terminal ">
<path d="M610 115h0"></path>
<path d="M684 115h0"></path>
<rect x="610" y="104" width="74" height="22"></rect>
<text x="647" y="119">RENAME</text>
</g>
<path d="M684 115h10"></path>
<path d="M694 115h10"></path>
<g class="non-terminal ">
<path d="M704 115h0"></path>
<path d="M778 115h0"></path>
<rect x="704" y="104" width="74" height="22"></rect>
<text x="741" y="119">COLUMN</text>
</g>
<path d="M778 115h10"></path>
<path d="M788 115h10"></path>
<g class="terminal ">
<path d="M798 115h0"></path>
<path d="M908 115h0"></path>
<rect x="798" y="104" width="110" height="22" rx="10" ry="10"></rect>
<text x="853" y="119">columnName</text>
</g>
<path d="M908 115h10"></path>
<path d="M918 115h10"></path>
<g class="non-terminal ">
<path d="M928 115h0"></path>
<path d="M966 115h0"></path>
<rect x="928" y="104" width="38" height="22"></rect>
<text x="947" y="119">TO</text>
</g>
<path d="M966 115h10"></path>
<path d="M976 115h10"></path>
<g class="terminal ">
<path d="M986 115h0"></path>
<path d="M1123 115h0"></path>
<rect x="986" y="104" width="137" height="22" rx="10" ry="10"></rect>
<text x="1054.5" y="119">newColumnName</text>
</g>
</g>
<path d="M1123 115a18 18 0 0 0 18 -18v-23a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1159 56h0"></path>
</g>
<path d="M1159 56h10"></path>
<path d="M 1169 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}


{% highlight sql %}

{% endhighlight %}

* `CREATE VIEW` creates a view of a query. Views have no data placements on a store but are references to an underlying table.
* `CREATE OR REPLACE VIEW` the only difference to the previous option is that if a view with this name already exists, it is replaced. That means the old view is dropped and a new view will be created.
* `DROP VIEW` deletes an existing view.
* `DROP VIEW IF EXISTS` deletes an existing view but checks first if the view to drop is present.
* `ALTER VIEW RENAME TO` allows changing the name of a view. 
* `ALTER VIEW RENAME COLUMN` allows changing the name of a specific column of the view.



## Materialized Views

{% highlight sql %}

{% endhighlight %}
### createMaterializedViewStatement:
{::nomarkdown}

<html>
<style>
     svg.railroad-diagram {
     }
     svg.railroad-diagram path {
       stroke-width: 1.5;
       stroke: black;
       fill: rgba(0,0,0,0);
     }
     svg.railroad-diagram text {
       font: bold 14px monospace;
       text-anchor: middle;
       white-space: pre;
     }
     svg.railroad-diagram text.diagram-text {
       font-size: 12px;
     }
     svg.railroad-diagram text.diagram-arrow {
       font-size: 16px;
     }
     svg.railroad-diagram text.label {
       text-anchor: start;
     }
     svg.railroad-diagram text.comment {
       font: italic 12px monospace;
     }
     svg.railroad-diagram g.non-terminal text {
       /*font-style: italic;*/
     }
     svg.railroad-diagram rect2 {
      stroke-width: 2;
      stroke: black;
      fill: #D8F4D7;
     }
     svg.railroad-diagram rect2.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram rect {
       stroke-width: 2;
       stroke: black;
       fill: #c9fff3;
     }
     svg.railroad-diagram rect.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram path.diagram-text {
       stroke-width: 1.5;
       stroke: black;
       fill: white;
       cursor: help;
     }
     svg.railroad-diagram g.diagram-text:hover path.diagram-text {
     }
</style>
<div style="overflow: auto;">
<svg class="railroad-diagram" width="987" height="443" viewBox="0 0 987 443">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M50 56h18"></path>
<g>
<path d="M68 56h93"></path>
<path d="M826 56h93"></path>
<g class="non-terminal ">
<path d="M161 56h0"></path>
<path d="M235 56h0"></path>
<rect x="161" y="45" width="74" height="22"></rect>
<text x="198" y="60">CREATE</text>
</g>
<path d="M235 56h10"></path>
<path d="M245 56h10"></path>
<g class="non-terminal ">
<path d="M255 56h0"></path>
<path d="M383 56h0"></path>
<rect x="255" y="45" width="128" height="22"></rect>
<text x="319" y="60">MATERIALIZED</text>
</g>
<path d="M383 56h10"></path>
<path d="M393 56h10"></path>
<g class="non-terminal ">
<path d="M403 56h0"></path>
<path d="M459 56h0"></path>
<rect x="403" y="45" width="56" height="22"></rect>
<text x="431" y="60">VIEW</text>
</g>
<path d="M459 56h10"></path>
<g>
<path d="M469 56h0"></path>
<path d="M760 56h0"></path>
<path d="M469 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M505 20h219"></path>
</g>
<path d="M724 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M469 56h36"></path>
<g>
<path d="M505 56h0"></path>
<g>
<path d="M505 56h10"></path>
<path d="M714 56h10"></path>
<g class="non-terminal ">
<path d="M515 56h0"></path>
<path d="M553 56h0"></path>
<rect x="515" y="45" width="38" height="22"></rect>
<text x="534" y="60">IF</text>
</g>
<path d="M553 56h10"></path>
<path d="M563 56h10"></path>
<g class="non-terminal ">
<path d="M573 56h0"></path>
<path d="M620 56h0"></path>
<rect x="573" y="45" width="47" height="22"></rect>
<text x="596.5" y="60">NOT</text>
</g>
<path d="M620 56h10"></path>
<path d="M630 56h10"></path>
<g class="non-terminal ">
<path d="M640 56h0"></path>
<path d="M714 56h0"></path>
<rect x="640" y="45" width="74" height="22"></rect>
<text x="677" y="60">EXISTS</text>
</g>
</g>
<path d="M724 56h0"></path>
</g>
<path d="M724 56h36"></path>
</g>
<path d="M760 56h10"></path>
<g class="terminal ">
<path d="M770 56h0"></path>
<path d="M826 56h0"></path>
<rect x="770" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="798" y="60">name</text>
</g>
</g>
<path d="M919 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-851a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 140h238.5"></path>
<path d="M680.5 140h238.5"></path>
<g>
<path d="M306.5 140h0"></path>
<path d="M680.5 140h0"></path>
<path d="M306.5 140a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M342.5 104h302"></path>
</g>
<path d="M644.5 104a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M306.5 140h36"></path>
<g>
<path d="M342.5 140h0"></path>
<g>
<path d="M342.5 140h10"></path>
<path d="M634.5 140h10"></path>
<g class="terminal ">
<path d="M352.5 140h0"></path>
<path d="M381.5 140h0"></path>
<rect x="352.5" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="367" y="144">(</text>
</g>
<path d="M381.5 140h10"></path>
<path d="M391.5 140h10"></path>
<g>
<path d="M401.5 140h0"></path>
<path d="M585.5 140h0"></path>
<path d="M401.5 140h18"></path>
<g>
<path d="M419.5 140h0"></path>
<g>
<path d="M419.5 140h10"></path>
<path d="M557.5 140h10"></path>
<g class="terminal ">
<path d="M429.5 140h0"></path>
<path d="M557.5 140h0"></path>
<rect x="429.5" y="129" width="128" height="22" rx="10" ry="10"></rect>
<text x="493.5" y="144">tableElement</text>
</g>
</g>
<path d="M567.5 140h0"></path>
</g>
<path d="M567.5 140h18"></path>
<path d="M419.5 140a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M419.5 176h59.5"></path>
<path d="M508 176h59.5"></path>
<rect x="479" y="165" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="493.5" y="180">,</text>
</g>
<path d="M567.5 176a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M585.5 140h10"></path>
<path d="M595.5 140h10"></path>
<g class="terminal ">
<path d="M605.5 140h0"></path>
<path d="M634.5 140h0"></path>
<rect x="605.5" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="620" y="144">)</text>
</g>
</g>
<path d="M644.5 140h0"></path>
</g>
<path d="M644.5 140h36"></path>
</g>
</g>
<path d="M919 140a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-851a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 245h318"></path>
<path d="M601 245h318"></path>
<g>
<path d="M386 245h0"></path>
<path d="M601 245h0"></path>
<path d="M386 245a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M422 209h143"></path>
</g>
<path d="M565 209a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M386 245h36"></path>
<g>
<path d="M422 245h0"></path>
<g>
<path d="M422 245h10"></path>
<path d="M555 245h10"></path>
<g class="non-terminal ">
<path d="M432 245h0"></path>
<path d="M470 245h0"></path>
<rect x="432" y="234" width="38" height="22"></rect>
<text x="451" y="249">AS</text>
</g>
<path d="M470 245h10"></path>
<path d="M480 245h10"></path>
<g class="terminal ">
<path d="M490 245h0"></path>
<path d="M555 245h0"></path>
<rect x="490" y="234" width="65" height="22" rx="10" ry="10"></rect>
<text x="522.5" y="249">query</text>
</g>
</g>
<path d="M565 245h0"></path>
</g>
<path d="M565 245h36"></path>
</g>
</g>
<path d="M919 245a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-851a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 329h10"></path>
<path d="M909 413h10"></path>
<g>
<path d="M78 329h0"></path>
<path d="M909 413h0"></path>
<path d="M78 329a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 293h759"></path>
</g>
<path d="M873 293a18 18 0 0 1 18 18v84a18 18 0 0 0 18 18"></path>
<path d="M78 329h36"></path>
<g>
<path d="M114 329h0"></path>
<path d="M114 329h18"></path>
<g>
<path d="M132 329h10"></path>
<path d="M845 329h10"></path>
<g class="non-terminal ">
<path d="M142 329h0"></path>
<path d="M198 329h0"></path>
<rect x="142" y="318" width="56" height="22"></rect>
<text x="170" y="333">&#60;ON></text>
</g>
<path d="M198 329h10"></path>
<path d="M208 329h10"></path>
<g class="non-terminal ">
<path d="M218 329h0"></path>
<path d="M301 329h0"></path>
<rect x="218" y="318" width="83" height="22"></rect>
<text x="259.5" y="333">&#60;STORE></text>
</g>
<path d="M301 329h10"></path>
<path d="M311 329h10"></path>
<g class="terminal ">
<path d="M321 329h0"></path>
<path d="M422 329h0"></path>
<rect x="321" y="318" width="101" height="22" rx="10" ry="10"></rect>
<text x="371.5" y="333">storeName</text>
</g>
<path d="M422 329h10"></path>
<path d="M432 329h10"></path>
<g>
<path d="M442 329h0"></path>
<path d="M724 329h0"></path>
<g>
<path d="M442 329h0"></path>
<g>
<path d="M442 329h10"></path>
<path d="M714 329h10"></path>
<g class="non-terminal ">
<path d="M452 329h0"></path>
<path d="M535 329h0"></path>
<rect x="452" y="318" width="83" height="22"></rect>
<text x="493.5" y="333">&#60;COMMA></text>
</g>
<path d="M535 329h10"></path>
<path d="M545 329h10"></path>
<g class="terminal ">
<path d="M555 329h0"></path>
<path d="M656 329h0"></path>
<rect x="555" y="318" width="101" height="22" rx="10" ry="10"></rect>
<text x="605.5" y="333">storeName</text>
</g>
<path d="M656 329h10"></path>
<path d="M666 329h10"></path>
<g class="non-terminal ">
<path d="M676 329h0"></path>
<path d="M714 329h0"></path>
<rect x="676" y="318" width="38" height="22"></rect>
<text x="695" y="333">)&#42;</text>
</g>
</g>
<path d="M724 329h0"></path>
</g>
</g>
<path d="M724 329h10"></path>
<path d="M734 329h10"></path>
<g class="terminal ">
<path d="M744 329h0"></path>
<path d="M845 329h0"></path>
<rect x="744" y="318" width="101" height="22" rx="10" ry="10"></rect>
<text x="794.5" y="333">undefined</text>
</g>
</g>
<path d="M855 329a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-723a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M132 413h66.5"></path>
<path d="M788.5 413h66.5"></path>
<g>
<path d="M198.5 413h0"></path>
<path d="M788.5 413h0"></path>
<path d="M198.5 413a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M234.5 377h518"></path>
</g>
<path d="M752.5 377a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M198.5 413h36"></path>
<g>
<path d="M234.5 413h0"></path>
<g>
<path d="M234.5 413h0"></path>
<path d="M752.5 413h0"></path>
<path d="M234.5 413h36"></path>
<g>
<path d="M270.5 413h0"></path>
<path d="M716.5 413h0"></path>
<g class="non-terminal ">
<path d="M270.5 413h0"></path>
<path d="M371.5 413h0"></path>
<rect x="270.5" y="402" width="101" height="22"></rect>
<text x="321" y="417">FRESHNESS</text>
</g>
<path d="M371.5 413h10"></path>
<path d="M381.5 413h10"></path>
<g class="non-terminal ">
<path d="M391.5 413h0"></path>
<path d="M492.5 413h0"></path>
<rect x="391.5" y="402" width="101" height="22"></rect>
<text x="442" y="417">(INTERVAL</text>
</g>
<path d="M492.5 413h10"></path>
<path d="M502.5 413h10"></path>
<g class="terminal ">
<path d="M512.5 413h0"></path>
<path d="M604.5 413h0"></path>
<rect x="512.5" y="402" width="92" height="22" rx="10" ry="10"></rect>
<text x="558.5" y="417">interval</text>
</g>
<path d="M604.5 413h10"></path>
<path d="M614.5 413h10"></path>
<g class="terminal ">
<path d="M624.5 413h0"></path>
<path d="M716.5 413h0"></path>
<rect x="624.5" y="402" width="92" height="22" rx="10" ry="10"></rect>
<text x="670.5" y="417">timeUnit</text>
</g>
</g>
<path d="M716.5 413h36"></path>
<path d="M234.5 413a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M270.5 449h130"></path>
<path d="M586.5 449h130"></path>
<g class="non-terminal ">
<path d="M400.5 449h0"></path>
<path d="M474.5 449h0"></path>
<rect x="400.5" y="438" width="74" height="22"></rect>
<text x="437.5" y="453">UPDATE</text>
</g>
<path d="M474.5 449h10"></path>
<path d="M484.5 449h10"></path>
<g class="terminal ">
<path d="M494.5 449h0"></path>
<path d="M586.5 449h0"></path>
<rect x="494.5" y="438" width="92" height="22" rx="10" ry="10"></rect>
<text x="540.5" y="453">interval</text>
</g>
</g>
<path d="M716.5 449a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M234.5 413a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M270.5 483h186"></path>
<path d="M530.5 483h186"></path>
<g class="non-terminal ">
<path d="M456.5 483h0"></path>
<path d="M530.5 483h0"></path>
<rect x="456.5" y="472" width="74" height="22"></rect>
<text x="493.5" y="487">MANUAL</text>
</g>
</g>
<path d="M716.5 483a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M752.5 413h0"></path>
</g>
<path d="M752.5 413h36"></path>
</g>
</g>
<path d="M855 413h18"></path>
<path d="M873 413h0"></path>
</g>
<path d="M873 413h36"></path>
</g>
</g>
<path d="M919 413h18"></path>
<path d="M937 413h0"></path>
</g>
<path d="M937 413h10"></path>
<path d="M 947 413 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### dropMaterializedViewStatement:
{::nomarkdown}

<html>
<style>
     svg.railroad-diagram {
     }
     svg.railroad-diagram path {
       stroke-width: 1.5;
       stroke: black;
       fill: rgba(0,0,0,0);
     }
     svg.railroad-diagram text {
       font: bold 14px monospace;
       text-anchor: middle;
       white-space: pre;
     }
     svg.railroad-diagram text.diagram-text {
       font-size: 12px;
     }
     svg.railroad-diagram text.diagram-arrow {
       font-size: 16px;
     }
     svg.railroad-diagram text.label {
       text-anchor: start;
     }
     svg.railroad-diagram text.comment {
       font: italic 12px monospace;
     }
     svg.railroad-diagram g.non-terminal text {
       /*font-style: italic;*/
     }
     svg.railroad-diagram rect2 {
      stroke-width: 2;
      stroke: black;
      fill: #D8F4D7;
     }
     svg.railroad-diagram rect2.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram rect {
       stroke-width: 2;
       stroke: black;
       fill: #c9fff3;
     }
     svg.railroad-diagram rect.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram path.diagram-text {
       stroke-width: 1.5;
       stroke: black;
       fill: white;
       cursor: help;
     }
     svg.railroad-diagram g.diagram-text:hover path.diagram-text {
     }
</style>
<div style="overflow: auto;">
<svg class="railroad-diagram" width="700" height="87" viewBox="0 0 700 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M640 56h10"></path>
<g class="non-terminal ">
<path d="M60 56h0"></path>
<path d="M116 56h0"></path>
<rect x="60" y="45" width="56" height="22"></rect>
<text x="88" y="60">DROP</text>
</g>
<path d="M116 56h10"></path>
<path d="M126 56h10"></path>
<g class="non-terminal ">
<path d="M136 56h0"></path>
<path d="M264 56h0"></path>
<rect x="136" y="45" width="128" height="22"></rect>
<text x="200" y="60">MATERIALIZED</text>
</g>
<path d="M264 56h10"></path>
<path d="M274 56h10"></path>
<g class="non-terminal ">
<path d="M284 56h0"></path>
<path d="M340 56h0"></path>
<rect x="284" y="45" width="56" height="22"></rect>
<text x="312" y="60">VIEW</text>
</g>
<path d="M340 56h10"></path>
<g>
<path d="M350 56h0"></path>
<path d="M574 56h0"></path>
<path d="M350 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M386 20h152"></path>
</g>
<path d="M538 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M350 56h36"></path>
<g>
<path d="M386 56h0"></path>
<g>
<path d="M386 56h10"></path>
<path d="M528 56h10"></path>
<g class="non-terminal ">
<path d="M396 56h0"></path>
<path d="M434 56h0"></path>
<rect x="396" y="45" width="38" height="22"></rect>
<text x="415" y="60">IF</text>
</g>
<path d="M434 56h10"></path>
<path d="M444 56h10"></path>
<g class="non-terminal ">
<path d="M454 56h0"></path>
<path d="M528 56h0"></path>
<rect x="454" y="45" width="74" height="22"></rect>
<text x="491" y="60">EXISTS</text>
</g>
</g>
<path d="M538 56h0"></path>
</g>
<path d="M538 56h36"></path>
</g>
<path d="M574 56h10"></path>
<g class="terminal ">
<path d="M584 56h0"></path>
<path d="M640 56h0"></path>
<rect x="584" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="612" y="60">name</text>
</g>
</g>
<path d="M650 56h0"></path>
</g>
<path d="M650 56h10"></path>
<path d="M 660 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### alterStatement2:
{::nomarkdown}

<html>
<style>
     svg.railroad-diagram {
     }
     svg.railroad-diagram path {
       stroke-width: 1.5;
       stroke: black;
       fill: rgba(0,0,0,0);
     }
     svg.railroad-diagram text {
       font: bold 14px monospace;
       text-anchor: middle;
       white-space: pre;
     }
     svg.railroad-diagram text.diagram-text {
       font-size: 12px;
     }
     svg.railroad-diagram text.diagram-arrow {
       font-size: 16px;
     }
     svg.railroad-diagram text.label {
       text-anchor: start;
     }
     svg.railroad-diagram text.comment {
       font: italic 12px monospace;
     }
     svg.railroad-diagram g.non-terminal text {
       /*font-style: italic;*/
     }
     svg.railroad-diagram rect2 {
      stroke-width: 2;
      stroke: black;
      fill: #D8F4D7;
     }
     svg.railroad-diagram rect2.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram rect {
       stroke-width: 2;
       stroke: black;
       fill: #c9fff3;
     }
     svg.railroad-diagram rect.group-box {
      stroke: gray;
      stroke-dasharray: 10 5;
      fill: none;
     }
     svg.railroad-diagram path.diagram-text {
       stroke-width: 1.5;
       stroke: black;
       fill: white;
       cursor: help;
     }
     svg.railroad-diagram g.diagram-text:hover path.diagram-text {
     }
</style>
<div style="overflow: auto;">
<svg class="railroad-diagram" width="2568" height="382" viewBox="0 0 2568 382">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h0"></path>
<path d="M2518 56h0"></path>
<path d="M50 56h36"></path>
<g>
<path d="M86 56h726.5"></path>
<path d="M1755.5 56h726.5"></path>
<g class="non-terminal ">
<path d="M812.5 56h0"></path>
<path d="M877.5 56h0"></path>
<rect x="812.5" y="45" width="65" height="22"></rect>
<text x="845" y="60">ALTER</text>
</g>
<path d="M877.5 56h10"></path>
<path d="M887.5 56h10"></path>
<g class="non-terminal ">
<path d="M897.5 56h0"></path>
<path d="M1025.5 56h0"></path>
<rect x="897.5" y="45" width="128" height="22"></rect>
<text x="961.5" y="60">MATERIALIZED</text>
</g>
<path d="M1025.5 56h10"></path>
<path d="M1035.5 56h10"></path>
<g class="non-terminal ">
<path d="M1045.5 56h0"></path>
<path d="M1101.5 56h0"></path>
<rect x="1045.5" y="45" width="56" height="22"></rect>
<text x="1073.5" y="60">VIEW</text>
</g>
<path d="M1101.5 56h10"></path>
<g>
<path d="M1111.5 56h0"></path>
<path d="M1362.5 56h0"></path>
<path d="M1111.5 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1147.5 20h179"></path>
</g>
<path d="M1326.5 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1111.5 56h36"></path>
<g>
<path d="M1147.5 56h0"></path>
<g>
<path d="M1147.5 56h10"></path>
<path d="M1316.5 56h10"></path>
<g class="terminal ">
<path d="M1157.5 56h0"></path>
<path d="M1267.5 56h0"></path>
<rect x="1157.5" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="1212.5" y="60">schemaName</text>
</g>
<path d="M1267.5 56h10"></path>
<path d="M1277.5 56h10"></path>
<g class="terminal ">
<path d="M1287.5 56h0"></path>
<path d="M1316.5 56h0"></path>
<rect x="1287.5" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1302" y="60">.</text>
</g>
</g>
<path d="M1326.5 56h0"></path>
</g>
<path d="M1326.5 56h36"></path>
</g>
<path d="M1362.5 56h10"></path>
<g class="terminal ">
<path d="M1372.5 56h0"></path>
<path d="M1464.5 56h0"></path>
<rect x="1372.5" y="45" width="92" height="22" rx="10" ry="10"></rect>
<text x="1418.5" y="60">viewName</text>
</g>
<path d="M1464.5 56h10"></path>
<path d="M1474.5 56h10"></path>
<g class="non-terminal ">
<path d="M1484.5 56h0"></path>
<path d="M1558.5 56h0"></path>
<rect x="1484.5" y="45" width="74" height="22"></rect>
<text x="1521.5" y="60">RENAME</text>
</g>
<path d="M1558.5 56h10"></path>
<path d="M1568.5 56h10"></path>
<g class="non-terminal ">
<path d="M1578.5 56h0"></path>
<path d="M1616.5 56h0"></path>
<rect x="1578.5" y="45" width="38" height="22"></rect>
<text x="1597.5" y="60">TO</text>
</g>
<path d="M1616.5 56h10"></path>
<path d="M1626.5 56h10"></path>
<g class="terminal ">
<path d="M1636.5 56h0"></path>
<path d="M1755.5 56h0"></path>
<rect x="1636.5" y="45" width="119" height="22" rx="10" ry="10"></rect>
<text x="1696" y="60">newViewName</text>
</g>
</g>
<path d="M2482 56h36"></path>
<path d="M50 56a18 18 0 0 1 18 18v23a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 115h605.5"></path>
<path d="M1876.5 115h605.5"></path>
<g class="non-terminal ">
<path d="M691.5 115h0"></path>
<path d="M756.5 115h0"></path>
<rect x="691.5" y="104" width="65" height="22"></rect>
<text x="724" y="119">ALTER</text>
</g>
<path d="M756.5 115h10"></path>
<path d="M766.5 115h10"></path>
<g class="non-terminal ">
<path d="M776.5 115h0"></path>
<path d="M904.5 115h0"></path>
<rect x="776.5" y="104" width="128" height="22"></rect>
<text x="840.5" y="119">MATERIALIZED</text>
</g>
<path d="M904.5 115h10"></path>
<path d="M914.5 115h10"></path>
<g class="non-terminal ">
<path d="M924.5 115h0"></path>
<path d="M980.5 115h0"></path>
<rect x="924.5" y="104" width="56" height="22"></rect>
<text x="952.5" y="119">VIEW</text>
</g>
<path d="M980.5 115h10"></path>
<g>
<path d="M990.5 115h0"></path>
<path d="M1241.5 115h0"></path>
<path d="M990.5 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1026.5 79h179"></path>
</g>
<path d="M1205.5 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M990.5 115h36"></path>
<g>
<path d="M1026.5 115h0"></path>
<g>
<path d="M1026.5 115h10"></path>
<path d="M1195.5 115h10"></path>
<g class="terminal ">
<path d="M1036.5 115h0"></path>
<path d="M1146.5 115h0"></path>
<rect x="1036.5" y="104" width="110" height="22" rx="10" ry="10"></rect>
<text x="1091.5" y="119">schemaName</text>
</g>
<path d="M1146.5 115h10"></path>
<path d="M1156.5 115h10"></path>
<g class="terminal ">
<path d="M1166.5 115h0"></path>
<path d="M1195.5 115h0"></path>
<rect x="1166.5" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1181" y="119">.</text>
</g>
</g>
<path d="M1205.5 115h0"></path>
</g>
<path d="M1205.5 115h36"></path>
</g>
<path d="M1241.5 115h10"></path>
<g class="terminal ">
<path d="M1251.5 115h0"></path>
<path d="M1343.5 115h0"></path>
<rect x="1251.5" y="104" width="92" height="22" rx="10" ry="10"></rect>
<text x="1297.5" y="119">viewName</text>
</g>
<path d="M1343.5 115h10"></path>
<path d="M1353.5 115h10"></path>
<g class="non-terminal ">
<path d="M1363.5 115h0"></path>
<path d="M1437.5 115h0"></path>
<rect x="1363.5" y="104" width="74" height="22"></rect>
<text x="1400.5" y="119">RENAME</text>
</g>
<path d="M1437.5 115h10"></path>
<path d="M1447.5 115h10"></path>
<g class="non-terminal ">
<path d="M1457.5 115h0"></path>
<path d="M1531.5 115h0"></path>
<rect x="1457.5" y="104" width="74" height="22"></rect>
<text x="1494.5" y="119">COLUMN</text>
</g>
<path d="M1531.5 115h10"></path>
<path d="M1541.5 115h10"></path>
<g class="terminal ">
<path d="M1551.5 115h0"></path>
<path d="M1661.5 115h0"></path>
<rect x="1551.5" y="104" width="110" height="22" rx="10" ry="10"></rect>
<text x="1606.5" y="119">columnName</text>
</g>
<path d="M1661.5 115h10"></path>
<path d="M1671.5 115h10"></path>
<g class="non-terminal ">
<path d="M1681.5 115h0"></path>
<path d="M1719.5 115h0"></path>
<rect x="1681.5" y="104" width="38" height="22"></rect>
<text x="1700.5" y="119">TO</text>
</g>
<path d="M1719.5 115h10"></path>
<path d="M1729.5 115h10"></path>
<g class="terminal ">
<path d="M1739.5 115h0"></path>
<path d="M1876.5 115h0"></path>
<rect x="1739.5" y="104" width="137" height="22" rx="10" ry="10"></rect>
<text x="1808" y="119">newColumnName</text>
</g>
</g>
<path d="M2482 115a18 18 0 0 0 18 -18v-23a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v82a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 174h764.5"></path>
<path d="M1717.5 174h764.5"></path>
<g class="non-terminal ">
<path d="M850.5 174h0"></path>
<path d="M915.5 174h0"></path>
<rect x="850.5" y="163" width="65" height="22"></rect>
<text x="883" y="178">ALTER</text>
</g>
<path d="M915.5 174h10"></path>
<path d="M925.5 174h10"></path>
<g class="non-terminal ">
<path d="M935.5 174h0"></path>
<path d="M1063.5 174h0"></path>
<rect x="935.5" y="163" width="128" height="22"></rect>
<text x="999.5" y="178">MATERIALIZED</text>
</g>
<path d="M1063.5 174h10"></path>
<path d="M1073.5 174h10"></path>
<g class="non-terminal ">
<path d="M1083.5 174h0"></path>
<path d="M1139.5 174h0"></path>
<rect x="1083.5" y="163" width="56" height="22"></rect>
<text x="1111.5" y="178">VIEW</text>
</g>
<path d="M1139.5 174h10"></path>
<g>
<path d="M1149.5 174h0"></path>
<path d="M1400.5 174h0"></path>
<path d="M1149.5 174a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1185.5 138h179"></path>
</g>
<path d="M1364.5 138a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1149.5 174h36"></path>
<g>
<path d="M1185.5 174h0"></path>
<g>
<path d="M1185.5 174h10"></path>
<path d="M1354.5 174h10"></path>
<g class="terminal ">
<path d="M1195.5 174h0"></path>
<path d="M1305.5 174h0"></path>
<rect x="1195.5" y="163" width="110" height="22" rx="10" ry="10"></rect>
<text x="1250.5" y="178">schemaName</text>
</g>
<path d="M1305.5 174h10"></path>
<path d="M1315.5 174h10"></path>
<g class="terminal ">
<path d="M1325.5 174h0"></path>
<path d="M1354.5 174h0"></path>
<rect x="1325.5" y="163" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1340" y="178">.</text>
</g>
</g>
<path d="M1364.5 174h0"></path>
</g>
<path d="M1364.5 174h36"></path>
</g>
<path d="M1400.5 174h10"></path>
<g class="terminal ">
<path d="M1410.5 174h0"></path>
<path d="M1502.5 174h0"></path>
<rect x="1410.5" y="163" width="92" height="22" rx="10" ry="10"></rect>
<text x="1456.5" y="178">viewName</text>
</g>
<path d="M1502.5 174h10"></path>
<path d="M1512.5 174h10"></path>
<g class="non-terminal ">
<path d="M1522.5 174h0"></path>
<path d="M1623.5 174h0"></path>
<rect x="1522.5" y="163" width="101" height="22"></rect>
<text x="1573" y="178">FRESHNESS</text>
</g>
<path d="M1623.5 174h10"></path>
<path d="M1633.5 174h10"></path>
<g class="non-terminal ">
<path d="M1643.5 174h0"></path>
<path d="M1717.5 174h0"></path>
<rect x="1643.5" y="163" width="74" height="22"></rect>
<text x="1680.5" y="178">MANUAL</text>
</g>
</g>
<path d="M2482 174a18 18 0 0 0 18 -18v-82a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v141a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 233h0"></path>
<path d="M2482 233h0"></path>
<g class="non-terminal ">
<path d="M86 233h0"></path>
<path d="M151 233h0"></path>
<rect x="86" y="222" width="65" height="22"></rect>
<text x="118.5" y="237">ALTER</text>
</g>
<path d="M151 233h10"></path>
<path d="M161 233h10"></path>
<g class="non-terminal ">
<path d="M171 233h0"></path>
<path d="M299 233h0"></path>
<rect x="171" y="222" width="128" height="22"></rect>
<text x="235" y="237">MATERIALIZED</text>
</g>
<path d="M299 233h10"></path>
<path d="M309 233h10"></path>
<g class="non-terminal ">
<path d="M319 233h0"></path>
<path d="M375 233h0"></path>
<rect x="319" y="222" width="56" height="22"></rect>
<text x="347" y="237">VIEW</text>
</g>
<path d="M375 233h10"></path>
<g>
<path d="M385 233h0"></path>
<path d="M636 233h0"></path>
<path d="M385 233a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M421 197h179"></path>
</g>
<path d="M600 197a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M385 233h36"></path>
<g>
<path d="M421 233h0"></path>
<g>
<path d="M421 233h10"></path>
<path d="M590 233h10"></path>
<g class="terminal ">
<path d="M431 233h0"></path>
<path d="M541 233h0"></path>
<rect x="431" y="222" width="110" height="22" rx="10" ry="10"></rect>
<text x="486" y="237">schemaName</text>
</g>
<path d="M541 233h10"></path>
<path d="M551 233h10"></path>
<g class="terminal ">
<path d="M561 233h0"></path>
<path d="M590 233h0"></path>
<rect x="561" y="222" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="575.5" y="237">.</text>
</g>
</g>
<path d="M600 233h0"></path>
</g>
<path d="M600 233h36"></path>
</g>
<path d="M636 233h10"></path>
<g class="terminal ">
<path d="M646 233h0"></path>
<path d="M738 233h0"></path>
<rect x="646" y="222" width="92" height="22" rx="10" ry="10"></rect>
<text x="692" y="237">viewName</text>
</g>
<path d="M738 233h10"></path>
<path d="M748 233h10"></path>
<g class="non-terminal ">
<path d="M758 233h0"></path>
<path d="M805 233h0"></path>
<rect x="758" y="222" width="47" height="22"></rect>
<text x="781.5" y="237">ADD</text>
</g>
<path d="M805 233h10"></path>
<g>
<path d="M815 233h0"></path>
<path d="M981 233h0"></path>
<path d="M815 233a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M851 197h94"></path>
</g>
<path d="M945 197a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M815 233h36"></path>
<g>
<path d="M851 233h0"></path>
<g>
<path d="M851 233h10"></path>
<path d="M935 233h10"></path>
<g class="non-terminal ">
<path d="M861 233h0"></path>
<path d="M935 233h0"></path>
<rect x="861" y="222" width="74" height="22"></rect>
<text x="898" y="237">UNIQUE</text>
</g>
</g>
<path d="M945 233h0"></path>
</g>
<path d="M945 233h36"></path>
</g>
<path d="M981 233h10"></path>
<g class="non-terminal ">
<path d="M991 233h0"></path>
<path d="M1056 233h0"></path>
<rect x="991" y="222" width="65" height="22"></rect>
<text x="1023.5" y="237">INDEX</text>
</g>
<path d="M1056 233h10"></path>
<path d="M1066 233h10"></path>
<g class="terminal ">
<path d="M1076 233h0"></path>
<path d="M1177 233h0"></path>
<rect x="1076" y="222" width="101" height="22" rx="10" ry="10"></rect>
<text x="1126.5" y="237">indexName</text>
</g>
<path d="M1177 233h10"></path>
<path d="M1187 233h10"></path>
<g class="non-terminal ">
<path d="M1197 233h0"></path>
<path d="M1235 233h0"></path>
<rect x="1197" y="222" width="38" height="22"></rect>
<text x="1216" y="237">ON</text>
</g>
<path d="M1235 233h10"></path>
<path d="M1245 233h10"></path>
<g>
<path d="M1255 233h0"></path>
<path d="M1786 233h0"></path>
<g>
<path d="M1255 233h0"></path>
<g>
<path d="M1255 233h0"></path>
<path d="M1786 233h0"></path>
<path d="M1255 233h36"></path>
<g>
<path d="M1291 233h174.5"></path>
<path d="M1575.5 233h174.5"></path>
<g class="terminal ">
<path d="M1465.5 233h0"></path>
<path d="M1575.5 233h0"></path>
<rect x="1465.5" y="222" width="110" height="22" rx="10" ry="10"></rect>
<text x="1520.5" y="237">columnName</text>
</g>
</g>
<path d="M1750 233h36"></path>
<path d="M1255 233a18 18 0 0 1 18 18v23a18 18 0 0 0 18 18"></path>
<g>
<path d="M1291 292h0"></path>
<path d="M1750 292h0"></path>
<g class="terminal ">
<path d="M1291 292h0"></path>
<path d="M1320 292h0"></path>
<rect x="1291" y="281" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1305.5" y="296">(</text>
</g>
<path d="M1320 292h10"></path>
<path d="M1330 292h10"></path>
<g class="terminal ">
<path d="M1340 292h0"></path>
<path d="M1450 292h0"></path>
<rect x="1340" y="281" width="110" height="22" rx="10" ry="10"></rect>
<text x="1395" y="296">columnName</text>
</g>
<path d="M1450 292h10"></path>
<g>
<path d="M1460 292h0"></path>
<path d="M1711 292h0"></path>
<path d="M1460 292a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1496 256h179"></path>
</g>
<path d="M1675 256a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1460 292h36"></path>
<g>
<path d="M1496 292h0"></path>
<g>
<path d="M1496 292h10"></path>
<path d="M1665 292h10"></path>
<g class="terminal ">
<path d="M1506 292h0"></path>
<path d="M1535 292h0"></path>
<rect x="1506" y="281" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1520.5" y="296">,</text>
</g>
<path d="M1535 292h10"></path>
<path d="M1545 292h10"></path>
<g class="terminal ">
<path d="M1555 292h0"></path>
<path d="M1665 292h0"></path>
<rect x="1555" y="281" width="110" height="22" rx="10" ry="10"></rect>
<text x="1610" y="296">columnName</text>
</g>
</g>
<path d="M1675 292h0"></path>
</g>
<path d="M1675 292h36"></path>
</g>
<path d="M1711 292h10"></path>
<g class="terminal ">
<path d="M1721 292h0"></path>
<path d="M1750 292h0"></path>
<rect x="1721" y="281" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1735.5" y="296">)</text>
</g>
</g>
<path d="M1750 292a18 18 0 0 0 18 -18v-23a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1786 233h0"></path>
</g>
</g>
<path d="M1786 233h10"></path>
<g>
<path d="M1796 233h0"></path>
<path d="M2092 233h0"></path>
<path d="M1796 233a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1832 197h224"></path>
</g>
<path d="M2056 197a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1796 233h36"></path>
<g>
<path d="M1832 233h0"></path>
<g>
<path d="M1832 233h10"></path>
<path d="M2046 233h10"></path>
<g class="non-terminal ">
<path d="M1842 233h0"></path>
<path d="M1907 233h0"></path>
<rect x="1842" y="222" width="65" height="22"></rect>
<text x="1874.5" y="237">USING</text>
</g>
<path d="M1907 233h10"></path>
<path d="M1917 233h10"></path>
<g class="terminal ">
<path d="M1927 233h0"></path>
<path d="M2046 233h0"></path>
<rect x="1927" y="222" width="119" height="22" rx="10" ry="10"></rect>
<text x="1986.5" y="237">indexMethod</text>
</g>
</g>
<path d="M2056 233h0"></path>
</g>
<path d="M2056 233h36"></path>
</g>
<g>
<path d="M2092 233h0"></path>
<path d="M2482 233h0"></path>
<path d="M2092 233a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M2128 197h318"></path>
</g>
<path d="M2446 197a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M2092 233h36"></path>
<g>
<path d="M2128 233h0"></path>
<g>
<path d="M2128 233h10"></path>
<path d="M2436 233h10"></path>
<g class="non-terminal ">
<path d="M2138 233h0"></path>
<path d="M2176 233h0"></path>
<rect x="2138" y="222" width="38" height="22"></rect>
<text x="2157" y="237">ON</text>
</g>
<path d="M2176 233h10"></path>
<path d="M2186 233h10"></path>
<g class="non-terminal ">
<path d="M2196 233h0"></path>
<path d="M2261 233h0"></path>
<rect x="2196" y="222" width="65" height="22"></rect>
<text x="2228.5" y="237">STORE</text>
</g>
<path d="M2261 233h10"></path>
<path d="M2271 233h10"></path>
<g class="terminal ">
<path d="M2281 233h0"></path>
<path d="M2436 233h0"></path>
<rect x="2281" y="222" width="155" height="22" rx="10" ry="10"></rect>
<text x="2358.5" y="237">storeUniqueName</text>
</g>
</g>
<path d="M2446 233h0"></path>
</g>
<path d="M2446 233h36"></path>
</g>
</g>
<path d="M2482 233a18 18 0 0 0 18 -18v-141a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v259a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 351h731"></path>
<path d="M1751 351h731"></path>
<g class="non-terminal ">
<path d="M817 351h0"></path>
<path d="M882 351h0"></path>
<rect x="817" y="340" width="65" height="22"></rect>
<text x="849.5" y="355">ALTER</text>
</g>
<path d="M882 351h10"></path>
<path d="M892 351h10"></path>
<g class="non-terminal ">
<path d="M902 351h0"></path>
<path d="M1030 351h0"></path>
<rect x="902" y="340" width="128" height="22"></rect>
<text x="966" y="355">MATERIALIZED</text>
</g>
<path d="M1030 351h10"></path>
<path d="M1040 351h10"></path>
<g class="non-terminal ">
<path d="M1050 351h0"></path>
<path d="M1106 351h0"></path>
<rect x="1050" y="340" width="56" height="22"></rect>
<text x="1078" y="355">VIEW</text>
</g>
<path d="M1106 351h10"></path>
<g>
<path d="M1116 351h0"></path>
<path d="M1367 351h0"></path>
<path d="M1116 351a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1152 315h179"></path>
</g>
<path d="M1331 315a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1116 351h36"></path>
<g>
<path d="M1152 351h0"></path>
<g>
<path d="M1152 351h10"></path>
<path d="M1321 351h10"></path>
<g class="terminal ">
<path d="M1162 351h0"></path>
<path d="M1272 351h0"></path>
<rect x="1162" y="340" width="110" height="22" rx="10" ry="10"></rect>
<text x="1217" y="355">schemaName</text>
</g>
<path d="M1272 351h10"></path>
<path d="M1282 351h10"></path>
<g class="terminal ">
<path d="M1292 351h0"></path>
<path d="M1321 351h0"></path>
<rect x="1292" y="340" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1306.5" y="355">.</text>
</g>
</g>
<path d="M1331 351h0"></path>
</g>
<path d="M1331 351h36"></path>
</g>
<path d="M1367 351h10"></path>
<g class="terminal ">
<path d="M1377 351h0"></path>
<path d="M1469 351h0"></path>
<rect x="1377" y="340" width="92" height="22" rx="10" ry="10"></rect>
<text x="1423" y="355">viewName</text>
</g>
<path d="M1469 351h10"></path>
<path d="M1479 351h10"></path>
<g class="non-terminal ">
<path d="M1489 351h0"></path>
<path d="M1545 351h0"></path>
<rect x="1489" y="340" width="56" height="22"></rect>
<text x="1517" y="355">DROP</text>
</g>
<path d="M1545 351h10"></path>
<path d="M1555 351h10"></path>
<g class="non-terminal ">
<path d="M1565 351h0"></path>
<path d="M1630 351h0"></path>
<rect x="1565" y="340" width="65" height="22"></rect>
<text x="1597.5" y="355">INDEX</text>
</g>
<path d="M1630 351h10"></path>
<path d="M1640 351h10"></path>
<g class="terminal ">
<path d="M1650 351h0"></path>
<path d="M1751 351h0"></path>
<rect x="1650" y="340" width="101" height="22" rx="10" ry="10"></rect>
<text x="1700.5" y="355">indexName</text>
</g>
</g>
<path d="M2482 351a18 18 0 0 0 18 -18v-259a18 18 0 0 1 18 -18"></path>
</g>
<path d="M2518 56h0"></path>
</g>
<path d="M2518 56h10"></path>
<path d="M 2528 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}


{% highlight sql %}

{% endhighlight %}

* `CREATE MATERIALIZED VIEW` creates a materialized view of a query.
* `ON STORE` one or many stores can be selected. The data from the selected query is placed on the chosen Data Store.
* `FRESHNESS` describes how often and with which method the materialized view should be refreshed.
* `FRESHNESS INTERVAL` allows specifying after what time the materialized should be updated. For example, `FRESHNESS INTERVAL 10 "hours"` this refreshes the materialized view every 10 hours.
* `FRESHNESS UPDATE` allows specifying after how many updates to the underlying table the materialized view is updated. For example, `FRESHNESS UPDATE 2` after two updates on the underlying entities, the materialized view is automatically updated. For now, it is only possible to use this option if the underlying tables do include a modifiable table.
* `FRESHNESS MANUAL` with this type of freshness, the materialized view is not automatically updated. Every update of the data needs to be triggered manually. It is triggered with the following command: `ALTER MATERIALIZED VIEW name FRESHNESS MANUAL`
* `ALTER MATERIALIZED VIEW ADD INDEX` allows adding indices for materialized views.
* `ALTER MATERIALIZED VIEW DROP INDEX` to drop indices from materialized views.
* `DROP MATERIALIZED VIEW` deletes an existing materialized view.
* `DROP MATERIALIZED VIEW IF EXISTS` deletes an existing materialized view but checks first if the view to drop is present.
* `ALTER MATERIALIZED VIEW RENAME TO` allows changing the name of a materialized view.
* `ALTER MATERIALIZED VIEW RENAME COLUMN` allows changing the name of a specific column of the materialized view.
