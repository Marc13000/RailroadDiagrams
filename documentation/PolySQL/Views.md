---
layout: plain
title:  Views
---

This page gives an overview on creating, altering and dropping views and materialized views in Polypheny using PolySQL. 


## Views

{% highlight sql %}
<!--- BNF start --->    
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
createMaterializedViewStatement:
    CREATE MATERIALIZED VIEW [ IF NOT EXISTS ] name
    [ '(' tableElement [, tableElement ]* ')' ]
    [ AS query ]
    [ <ON> <STORE> storeName ( <COMMA> storeName )*]
    [FRESHNESS (INTERVAL interval timeUnit | UPDATE interval | MANUAL )  ]

dropMaterializedViewStatement:
    DROP MATERIALIZED VIEW [ IF EXISTS ] name

alterStatement:
    ALTER MATERIALIZED VIEW [ schemaName . ] viewName RENAME TO newViewName
    | ALTER MATERIALIZED VIEW [ schemaName . ] viewName RENAME COLUMN columnName TO newColumnName
    | ALTER MATERIALIZED VIEW [ schemaName . ] viewName FRESHNESS MANUAL
    | ALTER MATERIALIZED VIEW [ schemaName . ] viewName ADD [UNIQUE] INDEX indexName ON ( columnName | '(' columnName [ , columnName ]* ')' ) [ USING indexMethod ] [ ON STORE storeUniqueName ]
    | ALTER MATERIALIZED VIEW [ schemaName . ] viewName DROP INDEX indexName
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
