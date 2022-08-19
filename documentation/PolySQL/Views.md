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
<svg class="railroad-diagram" width="821" height="526" viewBox="0 0 821 526">
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
<path d="M743 56h10"></path>
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
<path d="M300 56h0"></path>
<rect x="172" y="45" width="128" height="22"></rect>
<text x="236" y="60">MATERIALIZED</text>
</g>
<path d="M300 56h10"></path>
<path d="M310 56h10"></path>
<g class="non-terminal ">
<path d="M320 56h0"></path>
<path d="M376 56h0"></path>
<rect x="320" y="45" width="56" height="22"></rect>
<text x="348" y="60">VIEW</text>
</g>
<path d="M376 56h10"></path>
<g>
<path d="M386 56h0"></path>
<path d="M677 56h0"></path>
<path d="M386 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M422 20h219"></path>
</g>
<path d="M641 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M386 56h36"></path>
<g>
<path d="M422 56h0"></path>
<g>
<path d="M422 56h10"></path>
<path d="M631 56h10"></path>
<g class="non-terminal ">
<path d="M432 56h0"></path>
<path d="M470 56h0"></path>
<rect x="432" y="45" width="38" height="22"></rect>
<text x="451" y="60">IF</text>
</g>
<path d="M470 56h10"></path>
<path d="M480 56h10"></path>
<g class="non-terminal ">
<path d="M490 56h0"></path>
<path d="M537 56h0"></path>
<rect x="490" y="45" width="47" height="22"></rect>
<text x="513.5" y="60">NOT</text>
</g>
<path d="M537 56h10"></path>
<path d="M547 56h10"></path>
<g class="non-terminal ">
<path d="M557 56h0"></path>
<path d="M631 56h0"></path>
<rect x="557" y="45" width="74" height="22"></rect>
<text x="594" y="60">EXISTS</text>
</g>
</g>
<path d="M641 56h0"></path>
</g>
<path d="M641 56h36"></path>
</g>
<path d="M677 56h10"></path>
<g class="terminal ">
<path d="M687 56h0"></path>
<path d="M743 56h0"></path>
<rect x="687" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="715" y="60">name</text>
</g>
</g>
<path d="M753 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-685a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 140h155.5"></path>
<path d="M597.5 140h155.5"></path>
<g>
<path d="M223.5 140h0"></path>
<path d="M597.5 140h0"></path>
<path d="M223.5 140a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M259.5 104h302"></path>
</g>
<path d="M561.5 104a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M223.5 140h36"></path>
<g>
<path d="M259.5 140h0"></path>
<g>
<path d="M259.5 140h10"></path>
<path d="M551.5 140h10"></path>
<g class="terminal ">
<path d="M269.5 140h0"></path>
<path d="M298.5 140h0"></path>
<rect x="269.5" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="284" y="144">(</text>
</g>
<path d="M298.5 140h10"></path>
<path d="M308.5 140h10"></path>
<g>
<path d="M318.5 140h0"></path>
<path d="M502.5 140h0"></path>
<path d="M318.5 140h18"></path>
<g>
<path d="M336.5 140h0"></path>
<g>
<path d="M336.5 140h10"></path>
<path d="M474.5 140h10"></path>
<g class="terminal ">
<path d="M346.5 140h0"></path>
<path d="M474.5 140h0"></path>
<rect x="346.5" y="129" width="128" height="22" rx="10" ry="10"></rect>
<text x="410.5" y="144">tableElement</text>
</g>
</g>
<path d="M484.5 140h0"></path>
</g>
<path d="M484.5 140h18"></path>
<path d="M336.5 140a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M336.5 176h59.5"></path>
<path d="M425 176h59.5"></path>
<rect x="396" y="165" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="410.5" y="180">,</text>
</g>
<path d="M484.5 176a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M502.5 140h10"></path>
<path d="M512.5 140h10"></path>
<g class="terminal ">
<path d="M522.5 140h0"></path>
<path d="M551.5 140h0"></path>
<rect x="522.5" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="537" y="144">)</text>
</g>
</g>
<path d="M561.5 140h0"></path>
</g>
<path d="M561.5 140h36"></path>
</g>
</g>
<path d="M753 140a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-685a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 245h235"></path>
<path d="M518 245h235"></path>
<g>
<path d="M303 245h0"></path>
<path d="M518 245h0"></path>
<path d="M303 245a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M339 209h143"></path>
</g>
<path d="M482 209a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M303 245h36"></path>
<g>
<path d="M339 245h0"></path>
<g>
<path d="M339 245h10"></path>
<path d="M472 245h10"></path>
<g class="non-terminal ">
<path d="M349 245h0"></path>
<path d="M387 245h0"></path>
<rect x="349" y="234" width="38" height="22"></rect>
<text x="368" y="249">AS</text>
</g>
<path d="M387 245h10"></path>
<path d="M397 245h10"></path>
<g class="terminal ">
<path d="M407 245h0"></path>
<path d="M472 245h0"></path>
<rect x="407" y="234" width="65" height="22" rx="10" ry="10"></rect>
<text x="439.5" y="249">query</text>
</g>
</g>
<path d="M482 245h0"></path>
</g>
<path d="M482 245h36"></path>
</g>
</g>
<path d="M753 245a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-685a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 329h43.5"></path>
<path d="M709.5 329h43.5"></path>
<g>
<path d="M111.5 329h0"></path>
<path d="M709.5 329h0"></path>
<path d="M111.5 329a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M147.5 293h526"></path>
</g>
<path d="M673.5 293a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M111.5 329h36"></path>
<g>
<path d="M147.5 329h0"></path>
<g>
<path d="M147.5 329h10"></path>
<path d="M663.5 329h10"></path>
<g class="terminal ">
<path d="M157.5 329h0"></path>
<path d="M195.5 329h0"></path>
<rect x="157.5" y="318" width="38" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="176.5" y="333">ON</text>
</g>
<path d="M195.5 329h10"></path>
<path d="M205.5 329h10"></path>
<g class="terminal ">
<path d="M215.5 329h0"></path>
<path d="M280.5 329h0"></path>
<rect x="215.5" y="318" width="65" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="248" y="333">STORE</text>
</g>
<path d="M280.5 329h10"></path>
<path d="M290.5 329h10"></path>
<g class="terminal ">
<path d="M300.5 329h0"></path>
<path d="M401.5 329h0"></path>
<rect x="300.5" y="318" width="101" height="22" rx="10" ry="10"></rect>
<text x="351" y="333">storeName</text>
</g>
<path d="M401.5 329h10"></path>
<path d="M411.5 329h10"></path>
<g>
<path d="M421.5 329h0"></path>
<path d="M663.5 329h0"></path>
<path d="M421.5 329h18"></path>
<g>
<path d="M439.5 329h0"></path>
<g>
<path d="M439.5 329h10"></path>
<path d="M635.5 329h10"></path>
<g class="terminal ">
<path d="M449.5 329h0"></path>
<path d="M514.5 329h0"></path>
<rect x="449.5" y="318" width="65" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="482" y="333">COMMA</text>
</g>
<path d="M514.5 329h10"></path>
<path d="M524.5 329h10"></path>
<g class="terminal ">
<path d="M534.5 329h0"></path>
<path d="M635.5 329h0"></path>
<rect x="534.5" y="318" width="101" height="22" rx="10" ry="10"></rect>
<text x="585" y="333">storeName</text>
</g>
</g>
<path d="M645.5 329h0"></path>
</g>
<path d="M645.5 329h18"></path>
<path d="M439.5 329a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M439.5 365h206"></path>
</g>
<path d="M645.5 365a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M673.5 329h0"></path>
</g>
<path d="M673.5 329h36"></path>
</g>
</g>
<path d="M753 329a18 18 0 0 1 18 18v12a18 18 0 0 1 -18 18h-685a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 425h42"></path>
<path d="M711 425h42"></path>
<g>
<path d="M110 425h0"></path>
<path d="M711 425h0"></path>
<path d="M110 425a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M146 389h529"></path>
</g>
<path d="M675 389a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M110 425h36"></path>
<g>
<path d="M146 425h0"></path>
<g>
<path d="M146 425h10"></path>
<path d="M665 425h10"></path>
<g class="non-terminal ">
<path d="M156 425h0"></path>
<path d="M257 425h0"></path>
<rect x="156" y="414" width="101" height="22"></rect>
<text x="206.5" y="429">FRESHNESS</text>
</g>
<path d="M257 425h10"></path>
<path d="M267 425h10"></path>
<g>
<path d="M277 425h0"></path>
<path d="M665 425h0"></path>
<g>
<path d="M277 425h0"></path>
<g>
<path d="M277 425h0"></path>
<path d="M665 425h0"></path>
<path d="M277 425h36"></path>
<g>
<path d="M313 425h0"></path>
<path d="M629 425h0"></path>
<g class="non-terminal ">
<path d="M313 425h0"></path>
<path d="M405 425h0"></path>
<rect x="313" y="414" width="92" height="22"></rect>
<text x="359" y="429">INTERVAL</text>
</g>
<path d="M405 425h10"></path>
<path d="M415 425h10"></path>
<g class="terminal ">
<path d="M425 425h0"></path>
<path d="M517 425h0"></path>
<rect x="425" y="414" width="92" height="22" rx="10" ry="10"></rect>
<text x="471" y="429">interval</text>
</g>
<path d="M517 425h10"></path>
<path d="M527 425h10"></path>
<g class="terminal ">
<path d="M537 425h0"></path>
<path d="M629 425h0"></path>
<rect x="537" y="414" width="92" height="22" rx="10" ry="10"></rect>
<text x="583" y="429">timeUnit</text>
</g>
</g>
<path d="M629 425h36"></path>
<path d="M277 425a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M313 461h65"></path>
<path d="M564 461h65"></path>
<g class="non-terminal ">
<path d="M378 461h0"></path>
<path d="M452 461h0"></path>
<rect x="378" y="450" width="74" height="22"></rect>
<text x="415" y="465">UPDATE</text>
</g>
<path d="M452 461h10"></path>
<path d="M462 461h10"></path>
<g class="terminal ">
<path d="M472 461h0"></path>
<path d="M564 461h0"></path>
<rect x="472" y="450" width="92" height="22" rx="10" ry="10"></rect>
<text x="518" y="465">interval</text>
</g>
</g>
<path d="M629 461a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M277 425a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M313 495h121"></path>
<path d="M508 495h121"></path>
<g class="non-terminal ">
<path d="M434 495h0"></path>
<path d="M508 495h0"></path>
<rect x="434" y="484" width="74" height="22"></rect>
<text x="471" y="499">MANUAL</text>
</g>
</g>
<path d="M629 495a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M665 425h0"></path>
</g>
</g>
</g>
<path d="M675 425h0"></path>
</g>
<path d="M675 425h36"></path>
</g>
</g>
<path d="M753 425h18"></path>
<path d="M771 425h0"></path>
</g>
<path d="M771 425h10"></path>
<path d="M 781 425 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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

### alterMaterializedStatement:
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
<svg class="railroad-diagram" width="2373" height="393" viewBox="0 0 2373 393">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h0"></path>
<path d="M2323 56h0"></path>
<path d="M50 56h36"></path>
<g>
<path d="M86 56h629"></path>
<path d="M1658 56h629"></path>
<g class="non-terminal ">
<path d="M715 56h0"></path>
<path d="M780 56h0"></path>
<rect x="715" y="45" width="65" height="22"></rect>
<text x="747.5" y="60">ALTER</text>
</g>
<path d="M780 56h10"></path>
<path d="M790 56h10"></path>
<g class="non-terminal ">
<path d="M800 56h0"></path>
<path d="M928 56h0"></path>
<rect x="800" y="45" width="128" height="22"></rect>
<text x="864" y="60">MATERIALIZED</text>
</g>
<path d="M928 56h10"></path>
<path d="M938 56h10"></path>
<g class="non-terminal ">
<path d="M948 56h0"></path>
<path d="M1004 56h0"></path>
<rect x="948" y="45" width="56" height="22"></rect>
<text x="976" y="60">VIEW</text>
</g>
<path d="M1004 56h10"></path>
<g>
<path d="M1014 56h0"></path>
<path d="M1265 56h0"></path>
<path d="M1014 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1050 20h179"></path>
</g>
<path d="M1229 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1014 56h36"></path>
<g>
<path d="M1050 56h0"></path>
<g>
<path d="M1050 56h10"></path>
<path d="M1219 56h10"></path>
<g class="terminal ">
<path d="M1060 56h0"></path>
<path d="M1170 56h0"></path>
<rect x="1060" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="1115" y="60">schemaName</text>
</g>
<path d="M1170 56h10"></path>
<path d="M1180 56h10"></path>
<g class="terminal ">
<path d="M1190 56h0"></path>
<path d="M1219 56h0"></path>
<rect x="1190" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1204.5" y="60">.</text>
</g>
</g>
<path d="M1229 56h0"></path>
</g>
<path d="M1229 56h36"></path>
</g>
<path d="M1265 56h10"></path>
<g class="terminal ">
<path d="M1275 56h0"></path>
<path d="M1367 56h0"></path>
<rect x="1275" y="45" width="92" height="22" rx="10" ry="10"></rect>
<text x="1321" y="60">viewName</text>
</g>
<path d="M1367 56h10"></path>
<path d="M1377 56h10"></path>
<g class="non-terminal ">
<path d="M1387 56h0"></path>
<path d="M1461 56h0"></path>
<rect x="1387" y="45" width="74" height="22"></rect>
<text x="1424" y="60">RENAME</text>
</g>
<path d="M1461 56h10"></path>
<path d="M1471 56h10"></path>
<g class="non-terminal ">
<path d="M1481 56h0"></path>
<path d="M1519 56h0"></path>
<rect x="1481" y="45" width="38" height="22"></rect>
<text x="1500" y="60">TO</text>
</g>
<path d="M1519 56h10"></path>
<path d="M1529 56h10"></path>
<g class="terminal ">
<path d="M1539 56h0"></path>
<path d="M1658 56h0"></path>
<rect x="1539" y="45" width="119" height="22" rx="10" ry="10"></rect>
<text x="1598.5" y="60">newViewName</text>
</g>
</g>
<path d="M2287 56h36"></path>
<path d="M50 56a18 18 0 0 1 18 18v23a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 115h508"></path>
<path d="M1779 115h508"></path>
<g class="non-terminal ">
<path d="M594 115h0"></path>
<path d="M659 115h0"></path>
<rect x="594" y="104" width="65" height="22"></rect>
<text x="626.5" y="119">ALTER</text>
</g>
<path d="M659 115h10"></path>
<path d="M669 115h10"></path>
<g class="non-terminal ">
<path d="M679 115h0"></path>
<path d="M807 115h0"></path>
<rect x="679" y="104" width="128" height="22"></rect>
<text x="743" y="119">MATERIALIZED</text>
</g>
<path d="M807 115h10"></path>
<path d="M817 115h10"></path>
<g class="non-terminal ">
<path d="M827 115h0"></path>
<path d="M883 115h0"></path>
<rect x="827" y="104" width="56" height="22"></rect>
<text x="855" y="119">VIEW</text>
</g>
<path d="M883 115h10"></path>
<g>
<path d="M893 115h0"></path>
<path d="M1144 115h0"></path>
<path d="M893 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M929 79h179"></path>
</g>
<path d="M1108 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M893 115h36"></path>
<g>
<path d="M929 115h0"></path>
<g>
<path d="M929 115h10"></path>
<path d="M1098 115h10"></path>
<g class="terminal ">
<path d="M939 115h0"></path>
<path d="M1049 115h0"></path>
<rect x="939" y="104" width="110" height="22" rx="10" ry="10"></rect>
<text x="994" y="119">schemaName</text>
</g>
<path d="M1049 115h10"></path>
<path d="M1059 115h10"></path>
<g class="terminal ">
<path d="M1069 115h0"></path>
<path d="M1098 115h0"></path>
<rect x="1069" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1083.5" y="119">.</text>
</g>
</g>
<path d="M1108 115h0"></path>
</g>
<path d="M1108 115h36"></path>
</g>
<path d="M1144 115h10"></path>
<g class="terminal ">
<path d="M1154 115h0"></path>
<path d="M1246 115h0"></path>
<rect x="1154" y="104" width="92" height="22" rx="10" ry="10"></rect>
<text x="1200" y="119">viewName</text>
</g>
<path d="M1246 115h10"></path>
<path d="M1256 115h10"></path>
<g class="non-terminal ">
<path d="M1266 115h0"></path>
<path d="M1340 115h0"></path>
<rect x="1266" y="104" width="74" height="22"></rect>
<text x="1303" y="119">RENAME</text>
</g>
<path d="M1340 115h10"></path>
<path d="M1350 115h10"></path>
<g class="non-terminal ">
<path d="M1360 115h0"></path>
<path d="M1434 115h0"></path>
<rect x="1360" y="104" width="74" height="22"></rect>
<text x="1397" y="119">COLUMN</text>
</g>
<path d="M1434 115h10"></path>
<path d="M1444 115h10"></path>
<g class="terminal ">
<path d="M1454 115h0"></path>
<path d="M1564 115h0"></path>
<rect x="1454" y="104" width="110" height="22" rx="10" ry="10"></rect>
<text x="1509" y="119">columnName</text>
</g>
<path d="M1564 115h10"></path>
<path d="M1574 115h10"></path>
<g class="non-terminal ">
<path d="M1584 115h0"></path>
<path d="M1622 115h0"></path>
<rect x="1584" y="104" width="38" height="22"></rect>
<text x="1603" y="119">TO</text>
</g>
<path d="M1622 115h10"></path>
<path d="M1632 115h10"></path>
<g class="terminal ">
<path d="M1642 115h0"></path>
<path d="M1779 115h0"></path>
<rect x="1642" y="104" width="137" height="22" rx="10" ry="10"></rect>
<text x="1710.5" y="119">newColumnName</text>
</g>
</g>
<path d="M2287 115a18 18 0 0 0 18 -18v-23a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v82a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 174h667"></path>
<path d="M1620 174h667"></path>
<g class="non-terminal ">
<path d="M753 174h0"></path>
<path d="M818 174h0"></path>
<rect x="753" y="163" width="65" height="22"></rect>
<text x="785.5" y="178">ALTER</text>
</g>
<path d="M818 174h10"></path>
<path d="M828 174h10"></path>
<g class="non-terminal ">
<path d="M838 174h0"></path>
<path d="M966 174h0"></path>
<rect x="838" y="163" width="128" height="22"></rect>
<text x="902" y="178">MATERIALIZED</text>
</g>
<path d="M966 174h10"></path>
<path d="M976 174h10"></path>
<g class="non-terminal ">
<path d="M986 174h0"></path>
<path d="M1042 174h0"></path>
<rect x="986" y="163" width="56" height="22"></rect>
<text x="1014" y="178">VIEW</text>
</g>
<path d="M1042 174h10"></path>
<g>
<path d="M1052 174h0"></path>
<path d="M1303 174h0"></path>
<path d="M1052 174a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1088 138h179"></path>
</g>
<path d="M1267 138a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1052 174h36"></path>
<g>
<path d="M1088 174h0"></path>
<g>
<path d="M1088 174h10"></path>
<path d="M1257 174h10"></path>
<g class="terminal ">
<path d="M1098 174h0"></path>
<path d="M1208 174h0"></path>
<rect x="1098" y="163" width="110" height="22" rx="10" ry="10"></rect>
<text x="1153" y="178">schemaName</text>
</g>
<path d="M1208 174h10"></path>
<path d="M1218 174h10"></path>
<g class="terminal ">
<path d="M1228 174h0"></path>
<path d="M1257 174h0"></path>
<rect x="1228" y="163" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1242.5" y="178">.</text>
</g>
</g>
<path d="M1267 174h0"></path>
</g>
<path d="M1267 174h36"></path>
</g>
<path d="M1303 174h10"></path>
<g class="terminal ">
<path d="M1313 174h0"></path>
<path d="M1405 174h0"></path>
<rect x="1313" y="163" width="92" height="22" rx="10" ry="10"></rect>
<text x="1359" y="178">viewName</text>
</g>
<path d="M1405 174h10"></path>
<path d="M1415 174h10"></path>
<g class="non-terminal ">
<path d="M1425 174h0"></path>
<path d="M1526 174h0"></path>
<rect x="1425" y="163" width="101" height="22"></rect>
<text x="1475.5" y="178">FRESHNESS</text>
</g>
<path d="M1526 174h10"></path>
<path d="M1536 174h10"></path>
<g class="non-terminal ">
<path d="M1546 174h0"></path>
<path d="M1620 174h0"></path>
<rect x="1546" y="163" width="74" height="22"></rect>
<text x="1583" y="178">MANUAL</text>
</g>
</g>
<path d="M2287 174a18 18 0 0 0 18 -18v-82a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v141a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 233h0"></path>
<path d="M2287 233h0"></path>
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
<path d="M1591 233h0"></path>
<g>
<path d="M1255 233h0"></path>
<g>
<path d="M1255 233h0"></path>
<path d="M1591 233h0"></path>
<path d="M1255 233h36"></path>
<g>
<path d="M1291 233h77"></path>
<path d="M1478 233h77"></path>
<g class="terminal ">
<path d="M1368 233h0"></path>
<path d="M1478 233h0"></path>
<rect x="1368" y="222" width="110" height="22" rx="10" ry="10"></rect>
<text x="1423" y="237">columnName</text>
</g>
</g>
<path d="M1555 233h36"></path>
<path d="M1255 233a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M1291 269h0"></path>
<path d="M1555 269h0"></path>
<g class="terminal ">
<path d="M1291 269h0"></path>
<path d="M1320 269h0"></path>
<rect x="1291" y="258" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1305.5" y="273">(</text>
</g>
<path d="M1320 269h10"></path>
<path d="M1330 269h10"></path>
<g>
<path d="M1340 269h0"></path>
<path d="M1506 269h0"></path>
<path d="M1340 269h18"></path>
<g>
<path d="M1358 269h0"></path>
<g>
<path d="M1358 269h10"></path>
<path d="M1478 269h10"></path>
<g class="terminal ">
<path d="M1368 269h0"></path>
<path d="M1478 269h0"></path>
<rect x="1368" y="258" width="110" height="22" rx="10" ry="10"></rect>
<text x="1423" y="273">columnName</text>
</g>
</g>
<path d="M1488 269h0"></path>
</g>
<path d="M1488 269h18"></path>
<path d="M1358 269a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M1358 305h50.5"></path>
<path d="M1437.5 305h50.5"></path>
<rect x="1408.5" y="294" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1423" y="309">,</text>
</g>
<path d="M1488 305a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M1506 269h10"></path>
<path d="M1516 269h10"></path>
<g class="terminal ">
<path d="M1526 269h0"></path>
<path d="M1555 269h0"></path>
<rect x="1526" y="258" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1540.5" y="273">)</text>
</g>
</g>
<path d="M1555 269a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1591 233h0"></path>
</g>
</g>
<path d="M1591 233h10"></path>
<g>
<path d="M1601 233h0"></path>
<path d="M1897 233h0"></path>
<path d="M1601 233a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1637 197h224"></path>
</g>
<path d="M1861 197a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1601 233h36"></path>
<g>
<path d="M1637 233h0"></path>
<g>
<path d="M1637 233h10"></path>
<path d="M1851 233h10"></path>
<g class="non-terminal ">
<path d="M1647 233h0"></path>
<path d="M1712 233h0"></path>
<rect x="1647" y="222" width="65" height="22"></rect>
<text x="1679.5" y="237">USING</text>
</g>
<path d="M1712 233h10"></path>
<path d="M1722 233h10"></path>
<g class="terminal ">
<path d="M1732 233h0"></path>
<path d="M1851 233h0"></path>
<rect x="1732" y="222" width="119" height="22" rx="10" ry="10"></rect>
<text x="1791.5" y="237">indexMethod</text>
</g>
</g>
<path d="M1861 233h0"></path>
</g>
<path d="M1861 233h36"></path>
</g>
<g>
<path d="M1897 233h0"></path>
<path d="M2287 233h0"></path>
<path d="M1897 233a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1933 197h318"></path>
</g>
<path d="M2251 197a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1897 233h36"></path>
<g>
<path d="M1933 233h0"></path>
<g>
<path d="M1933 233h10"></path>
<path d="M2241 233h10"></path>
<g class="non-terminal ">
<path d="M1943 233h0"></path>
<path d="M1981 233h0"></path>
<rect x="1943" y="222" width="38" height="22"></rect>
<text x="1962" y="237">ON</text>
</g>
<path d="M1981 233h10"></path>
<path d="M1991 233h10"></path>
<g class="non-terminal ">
<path d="M2001 233h0"></path>
<path d="M2066 233h0"></path>
<rect x="2001" y="222" width="65" height="22"></rect>
<text x="2033.5" y="237">STORE</text>
</g>
<path d="M2066 233h10"></path>
<path d="M2076 233h10"></path>
<g class="terminal ">
<path d="M2086 233h0"></path>
<path d="M2241 233h0"></path>
<rect x="2086" y="222" width="155" height="22" rx="10" ry="10"></rect>
<text x="2163.5" y="237">storeUniqueName</text>
</g>
</g>
<path d="M2251 233h0"></path>
</g>
<path d="M2251 233h36"></path>
</g>
</g>
<path d="M2287 233a18 18 0 0 0 18 -18v-141a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v270a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 362h633.5"></path>
<path d="M1653.5 362h633.5"></path>
<g class="non-terminal ">
<path d="M719.5 362h0"></path>
<path d="M784.5 362h0"></path>
<rect x="719.5" y="351" width="65" height="22"></rect>
<text x="752" y="366">ALTER</text>
</g>
<path d="M784.5 362h10"></path>
<path d="M794.5 362h10"></path>
<g class="non-terminal ">
<path d="M804.5 362h0"></path>
<path d="M932.5 362h0"></path>
<rect x="804.5" y="351" width="128" height="22"></rect>
<text x="868.5" y="366">MATERIALIZED</text>
</g>
<path d="M932.5 362h10"></path>
<path d="M942.5 362h10"></path>
<g class="non-terminal ">
<path d="M952.5 362h0"></path>
<path d="M1008.5 362h0"></path>
<rect x="952.5" y="351" width="56" height="22"></rect>
<text x="980.5" y="366">VIEW</text>
</g>
<path d="M1008.5 362h10"></path>
<g>
<path d="M1018.5 362h0"></path>
<path d="M1269.5 362h0"></path>
<path d="M1018.5 362a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1054.5 326h179"></path>
</g>
<path d="M1233.5 326a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1018.5 362h36"></path>
<g>
<path d="M1054.5 362h0"></path>
<g>
<path d="M1054.5 362h10"></path>
<path d="M1223.5 362h10"></path>
<g class="terminal ">
<path d="M1064.5 362h0"></path>
<path d="M1174.5 362h0"></path>
<rect x="1064.5" y="351" width="110" height="22" rx="10" ry="10"></rect>
<text x="1119.5" y="366">schemaName</text>
</g>
<path d="M1174.5 362h10"></path>
<path d="M1184.5 362h10"></path>
<g class="terminal ">
<path d="M1194.5 362h0"></path>
<path d="M1223.5 362h0"></path>
<rect x="1194.5" y="351" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1209" y="366">.</text>
</g>
</g>
<path d="M1233.5 362h0"></path>
</g>
<path d="M1233.5 362h36"></path>
</g>
<path d="M1269.5 362h10"></path>
<g class="terminal ">
<path d="M1279.5 362h0"></path>
<path d="M1371.5 362h0"></path>
<rect x="1279.5" y="351" width="92" height="22" rx="10" ry="10"></rect>
<text x="1325.5" y="366">viewName</text>
</g>
<path d="M1371.5 362h10"></path>
<path d="M1381.5 362h10"></path>
<g class="non-terminal ">
<path d="M1391.5 362h0"></path>
<path d="M1447.5 362h0"></path>
<rect x="1391.5" y="351" width="56" height="22"></rect>
<text x="1419.5" y="366">DROP</text>
</g>
<path d="M1447.5 362h10"></path>
<path d="M1457.5 362h10"></path>
<g class="non-terminal ">
<path d="M1467.5 362h0"></path>
<path d="M1532.5 362h0"></path>
<rect x="1467.5" y="351" width="65" height="22"></rect>
<text x="1500" y="366">INDEX</text>
</g>
<path d="M1532.5 362h10"></path>
<path d="M1542.5 362h10"></path>
<g class="terminal ">
<path d="M1552.5 362h0"></path>
<path d="M1653.5 362h0"></path>
<rect x="1552.5" y="351" width="101" height="22" rx="10" ry="10"></rect>
<text x="1603" y="366">indexName</text>
</g>
</g>
<path d="M2287 362a18 18 0 0 0 18 -18v-270a18 18 0 0 1 18 -18"></path>
</g>
<path d="M2323 56h0"></path>
</g>
<path d="M2323 56h10"></path>
<path d="M 2333 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
