---
layout: plain
title: PolySQL Syntax
---

This page describes the SQL dialect recognized by Polypheny-DB's default SQL parser in a [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form)-like form.

{% highlight sql %}

{% endhighlight %}
### statement:
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
<svg class="railroad-diagram" width="246" height="166" viewBox="0 0 246 166">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M196 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h0"></path>
<path d="M160 31h0"></path>
<g class="terminal ">
<path d="M86 31h0"></path>
<path d="M160 31h0"></path>
<rect x="86" y="20" width="74" height="22" rx="10" ry="10"></rect>
<text x="123" y="35">insert</text>
</g>
</g>
<path d="M160 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h0"></path>
<path d="M160 67h0"></path>
<g class="terminal ">
<path d="M86 67h0"></path>
<path d="M160 67h0"></path>
<rect x="86" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="123" y="71">update</text>
</g>
</g>
<path d="M160 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 101h0"></path>
<path d="M160 101h0"></path>
<g class="terminal ">
<path d="M86 101h0"></path>
<path d="M160 101h0"></path>
<rect x="86" y="90" width="74" height="22" rx="10" ry="10"></rect>
<text x="123" y="105">delete</text>
</g>
</g>
<path d="M160 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 135h4.5"></path>
<path d="M155.5 135h4.5"></path>
<g class="terminal ">
<path d="M90.5 135h0"></path>
<path d="M155.5 135h0"></path>
<rect x="90.5" y="124" width="65" height="22" rx="10" ry="10"></rect>
<text x="123" y="139">query</text>
</g>
</g>
<path d="M160 135a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
</g>
<path d="M196 31h0"></path>
</g>
<path d="M196 31h10"></path>
<path d="M 206 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### insert:
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
<svg class="railroad-diagram" width="581" height="233" viewBox="0 0 581 233">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h87"></path>
<path d="M426 31h87"></path>
<g class="non-terminal ">
<path d="M155 31h0"></path>
<path d="M229 31h0"></path>
<rect x="155" y="20" width="74" height="22"></rect>
<text x="192" y="35">INSERT</text>
</g>
<path d="M229 31h10"></path>
<path d="M239 31h10"></path>
<g class="non-terminal ">
<path d="M249 31h0"></path>
<path d="M305 31h0"></path>
<rect x="249" y="20" width="56" height="22"></rect>
<text x="277" y="35">INTO</text>
</g>
<path d="M305 31h10"></path>
<path d="M315 31h10"></path>
<g class="terminal ">
<path d="M325 31h0"></path>
<path d="M426 31h0"></path>
<rect x="325" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="375.5" y="35">tableName</text>
</g>
</g>
<path d="M513 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-445a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 115h10"></path>
<path d="M503 115h10"></path>
<g>
<path d="M78 115h0"></path>
<path d="M503 115h0"></path>
<path d="M78 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 79h353"></path>
</g>
<path d="M467 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 115h36"></path>
<g>
<path d="M114 115h0"></path>
<g>
<path d="M114 115h10"></path>
<path d="M457 115h10"></path>
<g class="terminal ">
<path d="M124 115h0"></path>
<path d="M153 115h0"></path>
<rect x="124" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="138.5" y="119">(</text>
</g>
<path d="M153 115h10"></path>
<path d="M163 115h10"></path>
<g>
<path d="M173 115h0"></path>
<path d="M408 115h0"></path>
<path d="M173 115h18"></path>
<g>
<path d="M191 115h52.5"></path>
<g>
<path d="M243.5 115h10"></path>
<path d="M327.5 115h10"></path>
<g class="terminal ">
<path d="M253.5 115h0"></path>
<path d="M327.5 115h0"></path>
<rect x="253.5" y="104" width="74" height="22" rx="10" ry="10"></rect>
<text x="290.5" y="119">column</text>
</g>
</g>
<path d="M337.5 115h52.5"></path>
</g>
<path d="M390 115h18"></path>
<path d="M191 115a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M191 151h0"></path>
<path d="M390 151h0"></path>
<text x="290.5" y="156" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M390 151a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M408 115h10"></path>
<path d="M418 115h10"></path>
<g class="terminal ">
<path d="M428 115h0"></path>
<path d="M457 115h0"></path>
<rect x="428" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="442.5" y="119">)</text>
</g>
</g>
<path d="M467 115h0"></path>
</g>
<path d="M467 115h36"></path>
</g>
</g>
<path d="M513 115a18 18 0 0 1 18 18v15a18 18 0 0 1 -18 18h-445a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 202h190"></path>
<path d="M323 202h190"></path>
<g class="terminal ">
<path d="M258 202h0"></path>
<path d="M323 202h0"></path>
<rect x="258" y="191" width="65" height="22" rx="10" ry="10"></rect>
<text x="290.5" y="206">query</text>
</g>
</g>
<path d="M513 202h18"></path>
<path d="M531 202h0"></path>
</g>
<path d="M531 202h10"></path>
<path d="M 541 202 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### update:
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
<svg class="railroad-diagram" width="506" height="233" viewBox="0 0 506 233">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h87.5"></path>
<path d="M350.5 31h87.5"></path>
<g class="non-terminal ">
<path d="M155.5 31h0"></path>
<path d="M229.5 31h0"></path>
<rect x="155.5" y="20" width="74" height="22"></rect>
<text x="192.5" y="35">UPDATE</text>
</g>
<path d="M229.5 31h10"></path>
<path d="M239.5 31h10"></path>
<g class="terminal ">
<path d="M249.5 31h0"></path>
<path d="M350.5 31h0"></path>
<rect x="249.5" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="300" y="35">tableName</text>
</g>
</g>
<path d="M438 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-370a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 103h34"></path>
<path d="M404 103h34"></path>
<g class="non-terminal ">
<path d="M102 103h0"></path>
<path d="M149 103h0"></path>
<rect x="102" y="92" width="47" height="22"></rect>
<text x="125.5" y="107">SET</text>
</g>
<path d="M149 103h10"></path>
<path d="M159 103h10"></path>
<g>
<path d="M169 103h0"></path>
<path d="M404 103h0"></path>
<path d="M169 103h18"></path>
<g>
<path d="M187 103h52.5"></path>
<g>
<path d="M239.5 103h10"></path>
<path d="M323.5 103h10"></path>
<g class="terminal ">
<path d="M249.5 103h0"></path>
<path d="M323.5 103h0"></path>
<rect x="249.5" y="92" width="74" height="22" rx="10" ry="10"></rect>
<text x="286.5" y="107">assign</text>
</g>
</g>
<path d="M333.5 103h52.5"></path>
</g>
<path d="M386 103h18"></path>
<path d="M187 103a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M187 139h0"></path>
<path d="M386 139h0"></path>
<text x="286.5" y="144" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M386 139a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M438 103a18 18 0 0 1 18 18v15a18 18 0 0 1 -18 18h-370a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 202h10"></path>
<path d="M428 202h10"></path>
<g>
<path d="M78 202h0"></path>
<path d="M428 202h0"></path>
<path d="M78 202a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 166h278"></path>
</g>
<path d="M392 166a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 202h36"></path>
<g>
<path d="M114 202h0"></path>
<g>
<path d="M114 202h10"></path>
<path d="M382 202h10"></path>
<g class="non-terminal ">
<path d="M124 202h0"></path>
<path d="M189 202h0"></path>
<rect x="124" y="191" width="65" height="22"></rect>
<text x="156.5" y="206">WHERE</text>
</g>
<path d="M189 202h10"></path>
<path d="M199 202h10"></path>
<g class="terminal ">
<path d="M209 202h0"></path>
<path d="M382 202h0"></path>
<rect x="209" y="191" width="173" height="22" rx="10" ry="10"></rect>
<text x="295.5" y="206">booleanExpression</text>
</g>
</g>
<path d="M392 202h0"></path>
</g>
<path d="M392 202h36"></path>
</g>
</g>
<path d="M438 202h18"></path>
<path d="M456 202h0"></path>
</g>
<path d="M456 202h10"></path>
<path d="M 466 202 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### assign:
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
<svg class="railroad-diagram" width="409" height="62" viewBox="0 0 409 62">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M349 31h10"></path>
<g class="terminal ">
<path d="M60 31h0"></path>
<path d="M170 31h0"></path>
<rect x="60" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="115" y="35">identifier</text>
</g>
<path d="M170 31h10"></path>
<path d="M180 31h10"></path>
<g class="terminal ">
<path d="M190 31h0"></path>
<path d="M219 31h0"></path>
<rect x="190" y="20" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="204.5" y="35">=</text>
</g>
<path d="M219 31h10"></path>
<path d="M229 31h10"></path>
<g class="terminal ">
<path d="M239 31h0"></path>
<path d="M349 31h0"></path>
<rect x="239" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="294" y="35">expression</text>
</g>
</g>
<path d="M359 31h0"></path>
</g>
<path d="M359 31h10"></path>
<path d="M 369 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### delete:
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
<svg class="railroad-diagram" width="734" height="183" viewBox="0 0 734 183">
<g transform="translate(.5 .5)">
<g>
<path d="M20 58v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 68h10"></path>
<g>
<path d="M50 68h0"></path>
<path d="M50 68h18"></path>
<g>
<path d="M68 68h10"></path>
<path d="M656 68h10"></path>
<g class="non-terminal ">
<path d="M78 68h0"></path>
<path d="M152 68h0"></path>
<rect x="78" y="57" width="74" height="22"></rect>
<text x="115" y="72">DELETE</text>
</g>
<path d="M152 68h10"></path>
<path d="M162 68h10"></path>
<g class="non-terminal ">
<path d="M172 68h0"></path>
<path d="M228 68h0"></path>
<rect x="172" y="57" width="56" height="22"></rect>
<text x="200" y="72">FROM</text>
</g>
<path d="M228 68h10"></path>
<path d="M238 68h10"></path>
<g class="terminal ">
<path d="M248 68h0"></path>
<path d="M349 68h0"></path>
<rect x="248" y="57" width="101" height="22" rx="10" ry="10"></rect>
<text x="298.5" y="72">tableName</text>
</g>
<path d="M349 68h10"></path>
<g>
<path d="M359 68h0"></path>
<path d="M656 68h0"></path>
<path d="M359 68a18 18 0 0 0 18 -18v-12a18 18 0 0 1 18 -18"></path>
<g>
<path d="M395 20h225"></path>
</g>
<path d="M620 20a18 18 0 0 1 18 18v12a18 18 0 0 0 18 18"></path>
<path d="M359 68h36"></path>
<g>
<path d="M395 68h0"></path>
<g>
<path d="M395 68h10"></path>
<path d="M610 68h10"></path>
<g>
<path d="M405 68h0"></path>
<path d="M535 68h0"></path>
<path d="M405 68a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M441 32h58"></path>
</g>
<path d="M499 32a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M405 68h36"></path>
<g>
<path d="M441 68h0"></path>
<g>
<path d="M441 68h10"></path>
<path d="M489 68h10"></path>
<g class="non-terminal ">
<path d="M451 68h0"></path>
<path d="M489 68h0"></path>
<rect x="451" y="57" width="38" height="22"></rect>
<text x="470" y="72">AS</text>
</g>
</g>
<path d="M499 68h0"></path>
</g>
<path d="M499 68h36"></path>
</g>
<path d="M535 68h10"></path>
<g class="terminal ">
<path d="M545 68h0"></path>
<path d="M610 68h0"></path>
<rect x="545" y="57" width="65" height="22" rx="10" ry="10"></rect>
<text x="577.5" y="72">alias</text>
</g>
</g>
<path d="M620 68h0"></path>
</g>
<path d="M620 68h36"></path>
</g>
</g>
<path d="M666 68a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-598a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 152h124"></path>
<path d="M542 152h124"></path>
<g>
<path d="M192 152h0"></path>
<path d="M542 152h0"></path>
<path d="M192 152a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M228 116h278"></path>
</g>
<path d="M506 116a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M192 152h36"></path>
<g>
<path d="M228 152h0"></path>
<g>
<path d="M228 152h10"></path>
<path d="M496 152h10"></path>
<g class="non-terminal ">
<path d="M238 152h0"></path>
<path d="M303 152h0"></path>
<rect x="238" y="141" width="65" height="22"></rect>
<text x="270.5" y="156">WHERE</text>
</g>
<path d="M303 152h10"></path>
<path d="M313 152h10"></path>
<g class="terminal ">
<path d="M323 152h0"></path>
<path d="M496 152h0"></path>
<rect x="323" y="141" width="173" height="22" rx="10" ry="10"></rect>
<text x="409.5" y="156">booleanExpression</text>
</g>
</g>
<path d="M506 152h0"></path>
</g>
<path d="M506 152h36"></path>
</g>
</g>
<path d="M666 152h18"></path>
<path d="M684 152h0"></path>
</g>
<path d="M684 152h10"></path>
<path d="M 694 152 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### query:
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
<svg class="railroad-diagram" width="908" height="1030" viewBox="0 0 908 1030">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h0"></path>
<path d="M840 31h0"></path>
<path d="M68 31h36"></path>
<g>
<path d="M104 31h313"></path>
<path d="M491 31h313"></path>
<g class="terminal ">
<path d="M417 31h0"></path>
<path d="M491 31h0"></path>
<rect x="417" y="20" width="74" height="22" rx="10" ry="10"></rect>
<text x="454" y="35">values</text>
</g>
</g>
<path d="M804 31h36"></path>
<path d="M68 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M104 67h152"></path>
<path d="M652 67h152"></path>
<g class="non-terminal ">
<path d="M256 67h0"></path>
<path d="M312 67h0"></path>
<rect x="256" y="56" width="56" height="22"></rect>
<text x="284" y="71">WITH</text>
</g>
<path d="M312 67h10"></path>
<path d="M322 67h10"></path>
<g>
<path d="M332 67h0"></path>
<path d="M567 67h0"></path>
<path d="M332 67h18"></path>
<g>
<path d="M350 67h43.5"></path>
<g>
<path d="M393.5 67h10"></path>
<path d="M495.5 67h10"></path>
<g class="terminal ">
<path d="M403.5 67h0"></path>
<path d="M495.5 67h0"></path>
<rect x="403.5" y="56" width="92" height="22" rx="10" ry="10"></rect>
<text x="449.5" y="71">withItem</text>
</g>
</g>
<path d="M505.5 67h43.5"></path>
</g>
<path d="M549 67h18"></path>
<path d="M350 67a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M350 103h0"></path>
<path d="M549 103h0"></path>
<text x="449.5" y="108" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M549 103a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M567 67h10"></path>
<path d="M577 67h10"></path>
<g class="terminal ">
<path d="M587 67h0"></path>
<path d="M652 67h0"></path>
<rect x="587" y="56" width="65" height="22" rx="10" ry="10"></rect>
<text x="619.5" y="71">query</text>
</g>
</g>
<path d="M804 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M68 31a18 18 0 0 1 18 18v62a18 18 0 0 0 18 18"></path>
<g>
<path d="M104 129h0"></path>
<path d="M804 129h0"></path>
<g>
<path d="M104 129h0"></path>
<path d="M804 129h0"></path>
<g>
<path d="M104 129h0"></path>
<g>
<path d="M104 129h0"></path>
<path d="M804 129h0"></path>
<path d="M104 129h36"></path>
<g>
<path d="M140 129h263.5"></path>
<path d="M504.5 129h263.5"></path>
<g class="terminal ">
<path d="M403.5 129h0"></path>
<path d="M504.5 129h0"></path>
<rect x="403.5" y="118" width="101" height="22" rx="10" ry="10"></rect>
<text x="454" y="133">undefined</text>
</g>
</g>
<path d="M768 129h36"></path>
<path d="M104 129a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 165h216.5"></path>
<path d="M551.5 165h216.5"></path>
<g class="terminal ">
<path d="M356.5 165h0"></path>
<path d="M430.5 165h0"></path>
<rect x="356.5" y="154" width="74" height="22" rx="10" ry="10"></rect>
<text x="393.5" y="169">select</text>
</g>
<path d="M430.5 165h10"></path>
<path d="M440.5 165h10"></path>
<g class="terminal ">
<path d="M450.5 165h0"></path>
<path d="M551.5 165h0"></path>
<rect x="450.5" y="154" width="101" height="22" rx="10" ry="10"></rect>
<text x="501" y="169">undefined</text>
</g>
</g>
<path d="M768 165a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M104 129a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 199h167"></path>
<path d="M601 199h167"></path>
<g class="terminal ">
<path d="M307 199h0"></path>
<path d="M480 199h0"></path>
<rect x="307" y="188" width="173" height="22" rx="10" ry="10"></rect>
<text x="393.5" y="203">selectWithoutFrom</text>
</g>
<path d="M480 199h10"></path>
<path d="M490 199h10"></path>
<g class="terminal ">
<path d="M500 199h0"></path>
<path d="M601 199h0"></path>
<rect x="500" y="188" width="101" height="22" rx="10" ry="10"></rect>
<text x="550.5" y="203">undefined</text>
</g>
</g>
<path d="M768 199a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M104 129a18 18 0 0 1 18 18v93a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 258h18"></path>
<path d="M750 258h18"></path>
<g class="terminal ">
<path d="M158 258h0"></path>
<path d="M223 258h0"></path>
<rect x="158" y="247" width="65" height="22" rx="10" ry="10"></rect>
<text x="190.5" y="262">query</text>
</g>
<path d="M223 258h10"></path>
<path d="M233 258h10"></path>
<g class="non-terminal ">
<path d="M243 258h0"></path>
<path d="M308 258h0"></path>
<rect x="243" y="247" width="65" height="22"></rect>
<text x="275.5" y="262">UNION</text>
</g>
<path d="M308 258h10"></path>
<g>
<path d="M318 258h0"></path>
<path d="M554 258h0"></path>
<path d="M318 258a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M354 222h164"></path>
</g>
<path d="M518 222a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M318 258h36"></path>
<g>
<path d="M354 258h0"></path>
<g>
<path d="M354 258h0"></path>
<path d="M518 258h0"></path>
<path d="M354 258h36"></path>
<g>
<path d="M390 258h22.5"></path>
<path d="M459.5 258h22.5"></path>
<g class="non-terminal ">
<path d="M412.5 258h0"></path>
<path d="M459.5 258h0"></path>
<rect x="412.5" y="247" width="47" height="22"></rect>
<text x="436" y="262">ALL</text>
</g>
</g>
<path d="M482 258h36"></path>
<path d="M354 258a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M390 294h0"></path>
<path d="M482 294h0"></path>
<g class="non-terminal ">
<path d="M390 294h0"></path>
<path d="M482 294h0"></path>
<rect x="390" y="283" width="92" height="22"></rect>
<text x="436" y="298">DISTINCT</text>
</g>
</g>
<path d="M482 294a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M518 258h0"></path>
</g>
<path d="M518 258h36"></path>
</g>
<path d="M554 258h10"></path>
<g class="terminal ">
<path d="M564 258h0"></path>
<path d="M629 258h0"></path>
<rect x="564" y="247" width="65" height="22" rx="10" ry="10"></rect>
<text x="596.5" y="262">query</text>
</g>
<path d="M629 258h10"></path>
<path d="M639 258h10"></path>
<g class="terminal ">
<path d="M649 258h0"></path>
<path d="M750 258h0"></path>
<rect x="649" y="247" width="101" height="22" rx="10" ry="10"></rect>
<text x="699.5" y="262">undefined</text>
</g>
</g>
<path d="M768 258a18 18 0 0 0 18 -18v-93a18 18 0 0 1 18 -18"></path>
<path d="M104 129a18 18 0 0 1 18 18v188a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 353h13.5"></path>
<path d="M754.5 353h13.5"></path>
<g class="terminal ">
<path d="M153.5 353h0"></path>
<path d="M218.5 353h0"></path>
<rect x="153.5" y="342" width="65" height="22" rx="10" ry="10"></rect>
<text x="186" y="357">query</text>
</g>
<path d="M218.5 353h10"></path>
<path d="M228.5 353h10"></path>
<g class="non-terminal ">
<path d="M238.5 353h0"></path>
<path d="M312.5 353h0"></path>
<rect x="238.5" y="342" width="74" height="22"></rect>
<text x="275.5" y="357">EXCEPT</text>
</g>
<path d="M312.5 353h10"></path>
<g>
<path d="M322.5 353h0"></path>
<path d="M558.5 353h0"></path>
<path d="M322.5 353a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M358.5 317h164"></path>
</g>
<path d="M522.5 317a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M322.5 353h36"></path>
<g>
<path d="M358.5 353h0"></path>
<g>
<path d="M358.5 353h0"></path>
<path d="M522.5 353h0"></path>
<path d="M358.5 353h36"></path>
<g>
<path d="M394.5 353h22.5"></path>
<path d="M464 353h22.5"></path>
<g class="non-terminal ">
<path d="M417 353h0"></path>
<path d="M464 353h0"></path>
<rect x="417" y="342" width="47" height="22"></rect>
<text x="440.5" y="357">ALL</text>
</g>
</g>
<path d="M486.5 353h36"></path>
<path d="M358.5 353a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M394.5 389h0"></path>
<path d="M486.5 389h0"></path>
<g class="non-terminal ">
<path d="M394.5 389h0"></path>
<path d="M486.5 389h0"></path>
<rect x="394.5" y="378" width="92" height="22"></rect>
<text x="440.5" y="393">DISTINCT</text>
</g>
</g>
<path d="M486.5 389a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M522.5 353h0"></path>
</g>
<path d="M522.5 353h36"></path>
</g>
<path d="M558.5 353h10"></path>
<g class="terminal ">
<path d="M568.5 353h0"></path>
<path d="M633.5 353h0"></path>
<rect x="568.5" y="342" width="65" height="22" rx="10" ry="10"></rect>
<text x="601" y="357">query</text>
</g>
<path d="M633.5 353h10"></path>
<path d="M643.5 353h10"></path>
<g class="terminal ">
<path d="M653.5 353h0"></path>
<path d="M754.5 353h0"></path>
<rect x="653.5" y="342" width="101" height="22" rx="10" ry="10"></rect>
<text x="704" y="357">undefined</text>
</g>
</g>
<path d="M768 353a18 18 0 0 0 18 -18v-188a18 18 0 0 1 18 -18"></path>
<path d="M104 129a18 18 0 0 1 18 18v283a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 448h18"></path>
<path d="M750 448h18"></path>
<g class="terminal ">
<path d="M158 448h0"></path>
<path d="M223 448h0"></path>
<rect x="158" y="437" width="65" height="22" rx="10" ry="10"></rect>
<text x="190.5" y="452">query</text>
</g>
<path d="M223 448h10"></path>
<path d="M233 448h10"></path>
<g class="non-terminal ">
<path d="M243 448h0"></path>
<path d="M308 448h0"></path>
<rect x="243" y="437" width="65" height="22"></rect>
<text x="275.5" y="452">MINUS</text>
</g>
<path d="M308 448h10"></path>
<g>
<path d="M318 448h0"></path>
<path d="M554 448h0"></path>
<path d="M318 448a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M354 412h164"></path>
</g>
<path d="M518 412a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M318 448h36"></path>
<g>
<path d="M354 448h0"></path>
<g>
<path d="M354 448h0"></path>
<path d="M518 448h0"></path>
<path d="M354 448h36"></path>
<g>
<path d="M390 448h22.5"></path>
<path d="M459.5 448h22.5"></path>
<g class="non-terminal ">
<path d="M412.5 448h0"></path>
<path d="M459.5 448h0"></path>
<rect x="412.5" y="437" width="47" height="22"></rect>
<text x="436" y="452">ALL</text>
</g>
</g>
<path d="M482 448h36"></path>
<path d="M354 448a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M390 484h0"></path>
<path d="M482 484h0"></path>
<g class="non-terminal ">
<path d="M390 484h0"></path>
<path d="M482 484h0"></path>
<rect x="390" y="473" width="92" height="22"></rect>
<text x="436" y="488">DISTINCT</text>
</g>
</g>
<path d="M482 484a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M518 448h0"></path>
</g>
<path d="M518 448h36"></path>
</g>
<path d="M554 448h10"></path>
<g class="terminal ">
<path d="M564 448h0"></path>
<path d="M629 448h0"></path>
<rect x="564" y="437" width="65" height="22" rx="10" ry="10"></rect>
<text x="596.5" y="452">query</text>
</g>
<path d="M629 448h10"></path>
<path d="M639 448h10"></path>
<g class="terminal ">
<path d="M649 448h0"></path>
<path d="M750 448h0"></path>
<rect x="649" y="437" width="101" height="22" rx="10" ry="10"></rect>
<text x="699.5" y="452">undefined</text>
</g>
</g>
<path d="M768 448a18 18 0 0 0 18 -18v-283a18 18 0 0 1 18 -18"></path>
<path d="M104 129a18 18 0 0 1 18 18v378a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 543h0"></path>
<path d="M768 543h0"></path>
<g class="terminal ">
<path d="M140 543h0"></path>
<path d="M205 543h0"></path>
<rect x="140" y="532" width="65" height="22" rx="10" ry="10"></rect>
<text x="172.5" y="547">query</text>
</g>
<path d="M205 543h10"></path>
<path d="M215 543h10"></path>
<g class="non-terminal ">
<path d="M225 543h0"></path>
<path d="M326 543h0"></path>
<rect x="225" y="532" width="101" height="22"></rect>
<text x="275.5" y="547">INTERSECT</text>
</g>
<path d="M326 543h10"></path>
<g>
<path d="M336 543h0"></path>
<path d="M572 543h0"></path>
<path d="M336 543a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M372 507h164"></path>
</g>
<path d="M536 507a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M336 543h36"></path>
<g>
<path d="M372 543h0"></path>
<g>
<path d="M372 543h0"></path>
<path d="M536 543h0"></path>
<path d="M372 543h36"></path>
<g>
<path d="M408 543h22.5"></path>
<path d="M477.5 543h22.5"></path>
<g class="non-terminal ">
<path d="M430.5 543h0"></path>
<path d="M477.5 543h0"></path>
<rect x="430.5" y="532" width="47" height="22"></rect>
<text x="454" y="547">ALL</text>
</g>
</g>
<path d="M500 543h36"></path>
<path d="M372 543a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M408 579h0"></path>
<path d="M500 579h0"></path>
<g class="non-terminal ">
<path d="M408 579h0"></path>
<path d="M500 579h0"></path>
<rect x="408" y="568" width="92" height="22"></rect>
<text x="454" y="583">DISTINCT</text>
</g>
</g>
<path d="M500 579a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M536 543h0"></path>
</g>
<path d="M536 543h36"></path>
</g>
<path d="M572 543h10"></path>
<g class="terminal ">
<path d="M582 543h0"></path>
<path d="M647 543h0"></path>
<rect x="582" y="532" width="65" height="22" rx="10" ry="10"></rect>
<text x="614.5" y="547">query</text>
</g>
<path d="M647 543h10"></path>
<path d="M657 543h10"></path>
<g class="terminal ">
<path d="M667 543h0"></path>
<path d="M768 543h0"></path>
<rect x="667" y="532" width="101" height="22" rx="10" ry="10"></rect>
<text x="717.5" y="547">undefined</text>
</g>
</g>
<path d="M768 543a18 18 0 0 0 18 -18v-378a18 18 0 0 1 18 -18"></path>
</g>
<path d="M804 129h0"></path>
</g>
</g>
</g>
<path d="M804 129a18 18 0 0 0 18 -18v-62a18 18 0 0 1 18 -18"></path>
<path d="M68 31a18 18 0 0 1 18 18v571a18 18 0 0 0 18 18"></path>
<g>
<path d="M104 638h115"></path>
<path d="M689 638h115"></path>
<g>
<path d="M219 638h0"></path>
<path d="M689 638h0"></path>
<path d="M219 638a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M255 602h398"></path>
</g>
<path d="M653 602a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M219 638h36"></path>
<g>
<path d="M255 638h0"></path>
<g>
<path d="M255 638h10"></path>
<path d="M643 638h10"></path>
<g class="non-terminal ">
<path d="M265 638h0"></path>
<path d="M330 638h0"></path>
<rect x="265" y="627" width="65" height="22"></rect>
<text x="297.5" y="642">ORDER</text>
</g>
<path d="M330 638h10"></path>
<path d="M340 638h10"></path>
<g class="non-terminal ">
<path d="M350 638h0"></path>
<path d="M388 638h0"></path>
<rect x="350" y="627" width="38" height="22"></rect>
<text x="369" y="642">BY</text>
</g>
<path d="M388 638h10"></path>
<path d="M398 638h10"></path>
<g>
<path d="M408 638h0"></path>
<path d="M643 638h0"></path>
<path d="M408 638h18"></path>
<g>
<path d="M426 638h39"></path>
<g>
<path d="M465 638h10"></path>
<path d="M576 638h10"></path>
<g class="terminal ">
<path d="M475 638h0"></path>
<path d="M576 638h0"></path>
<rect x="475" y="627" width="101" height="22" rx="10" ry="10"></rect>
<text x="525.5" y="642">orderItem</text>
</g>
</g>
<path d="M586 638h39"></path>
</g>
<path d="M625 638h18"></path>
<path d="M426 638a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M426 674h0"></path>
<path d="M625 674h0"></path>
<text x="525.5" y="679" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M625 674a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M653 638h0"></path>
</g>
<path d="M653 638h36"></path>
</g>
</g>
<path d="M804 638a18 18 0 0 0 18 -18v-571a18 18 0 0 1 18 -18"></path>
</g>
<path d="M840 31a18 18 0 0 1 18 18v622a18 18 0 0 1 -18 18h-772a18 18 0 0 0 -18 18v24a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 749h141"></path>
<path d="M699 749h141"></path>
<g>
<path d="M209 749h0"></path>
<path d="M699 749h0"></path>
<path d="M209 749a18 18 0 0 0 18 -18v-12a18 18 0 0 1 18 -18"></path>
<g>
<path d="M245 701h418"></path>
</g>
<path d="M663 701a18 18 0 0 1 18 18v12a18 18 0 0 0 18 18"></path>
<path d="M209 749h36"></path>
<g>
<path d="M245 749h0"></path>
<g>
<path d="M245 749h10"></path>
<path d="M653 749h10"></path>
<g class="non-terminal ">
<path d="M255 749h0"></path>
<path d="M320 749h0"></path>
<rect x="255" y="738" width="65" height="22"></rect>
<text x="287.5" y="753">LIMIT</text>
</g>
<path d="M320 749h10"></path>
<path d="M330 749h10"></path>
<g>
<path d="M340 749h0"></path>
<path d="M653 749h0"></path>
<g>
<path d="M340 749h0"></path>
<g>
<path d="M340 749h0"></path>
<path d="M653 749h0"></path>
<path d="M340 749h36"></path>
<g>
<path d="M376 749h0"></path>
<path d="M617 749h0"></path>
<g>
<path d="M376 749h0"></path>
<path d="M542 749h0"></path>
<path d="M376 749a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M412 713h94"></path>
</g>
<path d="M506 713a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M376 749h36"></path>
<g>
<path d="M412 749h0"></path>
<g>
<path d="M412 749h10"></path>
<path d="M496 749h10"></path>
<g class="terminal ">
<path d="M422 749h0"></path>
<path d="M496 749h0"></path>
<rect x="422" y="738" width="74" height="22" rx="10" ry="10"></rect>
<text x="459" y="753">start,</text>
</g>
</g>
<path d="M506 749h0"></path>
</g>
<path d="M506 749h36"></path>
</g>
<path d="M542 749h10"></path>
<g class="terminal ">
<path d="M552 749h0"></path>
<path d="M617 749h0"></path>
<rect x="552" y="738" width="65" height="22" rx="10" ry="10"></rect>
<text x="584.5" y="753">count</text>
</g>
</g>
<path d="M617 749h36"></path>
<path d="M340 749a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M376 785h97"></path>
<path d="M520 785h97"></path>
<g class="non-terminal ">
<path d="M473 785h0"></path>
<path d="M520 785h0"></path>
<rect x="473" y="774" width="47" height="22"></rect>
<text x="496.5" y="789">ALL</text>
</g>
</g>
<path d="M617 785a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M653 749h0"></path>
</g>
</g>
</g>
<path d="M663 749h0"></path>
</g>
<path d="M663 749h36"></path>
</g>
</g>
<path d="M840 749a18 18 0 0 1 18 18v23a18 18 0 0 1 -18 18h-772a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 856h186.5"></path>
<path d="M653.5 856h186.5"></path>
<g>
<path d="M254.5 856h0"></path>
<path d="M653.5 856h0"></path>
<path d="M254.5 856a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M290.5 820h327"></path>
</g>
<path d="M617.5 820a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M254.5 856h36"></path>
<g>
<path d="M290.5 856h0"></path>
<g>
<path d="M290.5 856h10"></path>
<path d="M607.5 856h10"></path>
<g class="non-terminal ">
<path d="M300.5 856h0"></path>
<path d="M374.5 856h0"></path>
<rect x="300.5" y="845" width="74" height="22"></rect>
<text x="337.5" y="860">OFFSET</text>
</g>
<path d="M374.5 856h10"></path>
<path d="M384.5 856h10"></path>
<g class="terminal ">
<path d="M394.5 856h0"></path>
<path d="M459.5 856h0"></path>
<rect x="394.5" y="845" width="65" height="22" rx="10" ry="10"></rect>
<text x="427" y="860">start</text>
</g>
<path d="M459.5 856h10"></path>
<path d="M469.5 856h10"></path>
<g>
<path d="M479.5 856h0"></path>
<path d="M607.5 856h0"></path>
<g>
<path d="M479.5 856h0"></path>
<g>
<path d="M479.5 856h0"></path>
<path d="M607.5 856h0"></path>
<path d="M479.5 856h36"></path>
<g>
<path d="M515.5 856h4.5"></path>
<path d="M567 856h4.5"></path>
<g class="non-terminal ">
<path d="M520 856h0"></path>
<path d="M567 856h0"></path>
<rect x="520" y="845" width="47" height="22"></rect>
<text x="543.5" y="860">ROW</text>
</g>
</g>
<path d="M571.5 856h36"></path>
<path d="M479.5 856a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M515.5 892h0"></path>
<path d="M571.5 892h0"></path>
<g class="non-terminal ">
<path d="M515.5 892h0"></path>
<path d="M571.5 892h0"></path>
<rect x="515.5" y="881" width="56" height="22"></rect>
<text x="543.5" y="896">ROWS</text>
</g>
</g>
<path d="M571.5 892a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M607.5 856h0"></path>
</g>
</g>
</g>
<path d="M617.5 856h0"></path>
</g>
<path d="M617.5 856h36"></path>
</g>
</g>
<path d="M840 856a18 18 0 0 1 18 18v23a18 18 0 0 1 -18 18h-772a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 963h74.5"></path>
<path d="M765.5 963h74.5"></path>
<g>
<path d="M142.5 963h0"></path>
<path d="M765.5 963h0"></path>
<path d="M142.5 963a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M178.5 927h551"></path>
</g>
<path d="M729.5 927a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M142.5 963h36"></path>
<g>
<path d="M178.5 963h0"></path>
<g>
<path d="M178.5 963h10"></path>
<path d="M719.5 963h10"></path>
<g class="non-terminal ">
<path d="M188.5 963h0"></path>
<path d="M253.5 963h0"></path>
<rect x="188.5" y="952" width="65" height="22"></rect>
<text x="221" y="967">FETCH</text>
</g>
<path d="M253.5 963h10"></path>
<path d="M263.5 963h10"></path>
<g>
<path d="M273.5 963h0"></path>
<path d="M410.5 963h0"></path>
<g>
<path d="M273.5 963h0"></path>
<g>
<path d="M273.5 963h0"></path>
<path d="M410.5 963h0"></path>
<path d="M273.5 963h36"></path>
<g>
<path d="M309.5 963h0"></path>
<path d="M374.5 963h0"></path>
<g class="non-terminal ">
<path d="M309.5 963h0"></path>
<path d="M374.5 963h0"></path>
<rect x="309.5" y="952" width="65" height="22"></rect>
<text x="342" y="967">FIRST</text>
</g>
</g>
<path d="M374.5 963h36"></path>
<path d="M273.5 963a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M309.5 999h4.5"></path>
<path d="M370 999h4.5"></path>
<g class="non-terminal ">
<path d="M314 999h0"></path>
<path d="M370 999h0"></path>
<rect x="314" y="988" width="56" height="22"></rect>
<text x="342" y="1003">NEXT</text>
</g>
</g>
<path d="M374.5 999a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M410.5 963h0"></path>
</g>
</g>
<path d="M410.5 963h10"></path>
<path d="M420.5 963h10"></path>
<g class="terminal ">
<path d="M430.5 963h0"></path>
<path d="M495.5 963h0"></path>
<rect x="430.5" y="952" width="65" height="22" rx="10" ry="10"></rect>
<text x="463" y="967">count</text>
</g>
<path d="M495.5 963h10"></path>
<path d="M505.5 963h10"></path>
<g>
<path d="M515.5 963h0"></path>
<path d="M643.5 963h0"></path>
<g>
<path d="M515.5 963h0"></path>
<g>
<path d="M515.5 963h0"></path>
<path d="M643.5 963h0"></path>
<path d="M515.5 963h36"></path>
<g>
<path d="M551.5 963h4.5"></path>
<path d="M603 963h4.5"></path>
<g class="non-terminal ">
<path d="M556 963h0"></path>
<path d="M603 963h0"></path>
<rect x="556" y="952" width="47" height="22"></rect>
<text x="579.5" y="967">ROW</text>
</g>
</g>
<path d="M607.5 963h36"></path>
<path d="M515.5 963a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M551.5 999h0"></path>
<path d="M607.5 999h0"></path>
<g class="non-terminal ">
<path d="M551.5 999h0"></path>
<path d="M607.5 999h0"></path>
<rect x="551.5" y="988" width="56" height="22"></rect>
<text x="579.5" y="1003">ROWS</text>
</g>
</g>
<path d="M607.5 999a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M643.5 963h0"></path>
</g>
</g>
<path d="M643.5 963h10"></path>
<path d="M653.5 963h10"></path>
<g class="non-terminal ">
<path d="M663.5 963h0"></path>
<path d="M719.5 963h0"></path>
<rect x="663.5" y="952" width="56" height="22"></rect>
<text x="691.5" y="967">ONLY</text>
</g>
</g>
<path d="M729.5 963h0"></path>
</g>
<path d="M729.5 963h36"></path>
</g>
</g>
<path d="M840 963h18"></path>
<path d="M858 963h0"></path>
</g>
<path d="M858 963h10"></path>
<path d="M 868 963 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### withItem:
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
<svg class="railroad-diagram" width="581" height="233" viewBox="0 0 581 233">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h194.5"></path>
<path d="M318.5 31h194.5"></path>
<g class="terminal ">
<path d="M262.5 31h0"></path>
<path d="M318.5 31h0"></path>
<rect x="262.5" y="20" width="56" height="22" rx="10" ry="10"></rect>
<text x="290.5" y="35">name</text>
</g>
</g>
<path d="M513 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-445a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 115h10"></path>
<path d="M503 115h10"></path>
<g>
<path d="M78 115h0"></path>
<path d="M503 115h0"></path>
<path d="M78 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 79h353"></path>
</g>
<path d="M467 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 115h36"></path>
<g>
<path d="M114 115h0"></path>
<g>
<path d="M114 115h10"></path>
<path d="M457 115h10"></path>
<g class="terminal ">
<path d="M124 115h0"></path>
<path d="M153 115h0"></path>
<rect x="124" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="138.5" y="119">(</text>
</g>
<path d="M153 115h10"></path>
<path d="M163 115h10"></path>
<g>
<path d="M173 115h0"></path>
<path d="M408 115h0"></path>
<path d="M173 115h18"></path>
<g>
<path d="M191 115h52.5"></path>
<g>
<path d="M243.5 115h10"></path>
<path d="M327.5 115h10"></path>
<g class="terminal ">
<path d="M253.5 115h0"></path>
<path d="M327.5 115h0"></path>
<rect x="253.5" y="104" width="74" height="22" rx="10" ry="10"></rect>
<text x="290.5" y="119">column</text>
</g>
</g>
<path d="M337.5 115h52.5"></path>
</g>
<path d="M390 115h18"></path>
<path d="M191 115a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M191 151h0"></path>
<path d="M390 151h0"></path>
<text x="290.5" y="156" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M390 151a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M408 115h10"></path>
<path d="M418 115h10"></path>
<g class="terminal ">
<path d="M428 115h0"></path>
<path d="M457 115h0"></path>
<rect x="428" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="442.5" y="119">)</text>
</g>
</g>
<path d="M467 115h0"></path>
</g>
<path d="M467 115h36"></path>
</g>
</g>
<path d="M513 115a18 18 0 0 1 18 18v15a18 18 0 0 1 -18 18h-445a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 202h112"></path>
<path d="M401 202h112"></path>
<g class="non-terminal ">
<path d="M180 202h0"></path>
<path d="M218 202h0"></path>
<rect x="180" y="191" width="38" height="22"></rect>
<text x="199" y="206">AS</text>
</g>
<path d="M218 202h10"></path>
<path d="M228 202h10"></path>
<g class="terminal ">
<path d="M238 202h0"></path>
<path d="M267 202h0"></path>
<rect x="238" y="191" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="252.5" y="206">(</text>
</g>
<path d="M267 202h10"></path>
<path d="M277 202h10"></path>
<g class="terminal ">
<path d="M287 202h0"></path>
<path d="M352 202h0"></path>
<rect x="287" y="191" width="65" height="22" rx="10" ry="10"></rect>
<text x="319.5" y="206">query</text>
</g>
<path d="M352 202h10"></path>
<path d="M362 202h10"></path>
<g class="terminal ">
<path d="M372 202h0"></path>
<path d="M401 202h0"></path>
<rect x="372" y="191" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="386.5" y="206">)</text>
</g>
</g>
<path d="M513 202h18"></path>
<path d="M531 202h0"></path>
</g>
<path d="M531 202h10"></path>
<path d="M 541 202 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### orderItem:
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
<svg class="railroad-diagram" width="734" height="123" viewBox="0 0 734 123">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M674 56h10"></path>
<g class="terminal ">
<path d="M60 56h0"></path>
<path d="M170 56h0"></path>
<rect x="60" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="115" y="60">expression</text>
</g>
<path d="M170 56h10"></path>
<g>
<path d="M180 56h0"></path>
<path d="M380 56h0"></path>
<path d="M180 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M216 20h128"></path>
</g>
<path d="M344 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M180 56h36"></path>
<g>
<path d="M216 56h0"></path>
<g>
<path d="M216 56h0"></path>
<path d="M344 56h0"></path>
<path d="M216 56h36"></path>
<g>
<path d="M252 56h4.5"></path>
<path d="M303.5 56h4.5"></path>
<g class="non-terminal ">
<path d="M256.5 56h0"></path>
<path d="M303.5 56h0"></path>
<rect x="256.5" y="45" width="47" height="22"></rect>
<text x="280" y="60">ASC</text>
</g>
</g>
<path d="M308 56h36"></path>
<path d="M216 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M252 92h0"></path>
<path d="M308 92h0"></path>
<g class="non-terminal ">
<path d="M252 92h0"></path>
<path d="M308 92h0"></path>
<rect x="252" y="81" width="56" height="22"></rect>
<text x="280" y="96">DESC</text>
</g>
</g>
<path d="M308 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M344 56h0"></path>
</g>
<path d="M344 56h36"></path>
</g>
<g>
<path d="M380 56h0"></path>
<path d="M674 56h0"></path>
<path d="M380 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M416 20h222"></path>
</g>
<path d="M638 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M380 56h36"></path>
<g>
<path d="M416 56h0"></path>
<g>
<path d="M416 56h0"></path>
<path d="M638 56h0"></path>
<path d="M416 56h36"></path>
<g>
<path d="M452 56h0"></path>
<path d="M602 56h0"></path>
<g class="non-terminal ">
<path d="M452 56h0"></path>
<path d="M517 56h0"></path>
<rect x="452" y="45" width="65" height="22"></rect>
<text x="484.5" y="60">NULLS</text>
</g>
<path d="M517 56h10"></path>
<path d="M527 56h10"></path>
<g class="non-terminal ">
<path d="M537 56h0"></path>
<path d="M602 56h0"></path>
<rect x="537" y="45" width="65" height="22"></rect>
<text x="569.5" y="60">FIRST</text>
</g>
</g>
<path d="M602 56h36"></path>
<path d="M416 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M452 92h4.5"></path>
<path d="M597.5 92h4.5"></path>
<g class="non-terminal ">
<path d="M456.5 92h0"></path>
<path d="M521.5 92h0"></path>
<rect x="456.5" y="81" width="65" height="22"></rect>
<text x="489" y="96">NULLS</text>
</g>
<path d="M521.5 92h10"></path>
<path d="M531.5 92h10"></path>
<g class="non-terminal ">
<path d="M541.5 92h0"></path>
<path d="M597.5 92h0"></path>
<rect x="541.5" y="81" width="56" height="22"></rect>
<text x="569.5" y="96">LAST</text>
</g>
</g>
<path d="M602 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M638 56h0"></path>
</g>
<path d="M638 56h36"></path>
</g>
</g>
<path d="M684 56h0"></path>
</g>
<path d="M684 56h10"></path>
<path d="M 694 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### select:
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
<svg class="railroad-diagram" width="884" height="684" viewBox="0 0 884 684">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M50 56h18"></path>
<g>
<path d="M68 56h131"></path>
<path d="M685 56h131"></path>
<g class="non-terminal ">
<path d="M199 56h0"></path>
<path d="M273 56h0"></path>
<rect x="199" y="45" width="74" height="22"></rect>
<text x="236" y="60">SELECT</text>
</g>
<path d="M273 56h10"></path>
<g>
<path d="M283 56h0"></path>
<path d="M449 56h0"></path>
<path d="M283 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M319 20h94"></path>
</g>
<path d="M413 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M283 56h36"></path>
<g>
<path d="M319 56h0"></path>
<g>
<path d="M319 56h10"></path>
<path d="M403 56h10"></path>
<g class="non-terminal ">
<path d="M329 56h0"></path>
<path d="M403 56h0"></path>
<rect x="329" y="45" width="74" height="22"></rect>
<text x="366" y="60">STREAM</text>
</g>
</g>
<path d="M413 56h0"></path>
</g>
<path d="M413 56h36"></path>
</g>
<g>
<path d="M449 56h0"></path>
<path d="M685 56h0"></path>
<path d="M449 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M485 20h164"></path>
</g>
<path d="M649 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M449 56h36"></path>
<g>
<path d="M485 56h0"></path>
<g>
<path d="M485 56h0"></path>
<path d="M649 56h0"></path>
<path d="M485 56h36"></path>
<g>
<path d="M521 56h22.5"></path>
<path d="M590.5 56h22.5"></path>
<g class="non-terminal ">
<path d="M543.5 56h0"></path>
<path d="M590.5 56h0"></path>
<rect x="543.5" y="45" width="47" height="22"></rect>
<text x="567" y="60">ALL</text>
</g>
</g>
<path d="M613 56h36"></path>
<path d="M485 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M521 92h0"></path>
<path d="M613 92h0"></path>
<g class="non-terminal ">
<path d="M521 92h0"></path>
<path d="M613 92h0"></path>
<rect x="521" y="81" width="92" height="22"></rect>
<text x="567" y="96">DISTINCT</text>
</g>
</g>
<path d="M613 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M649 56h0"></path>
</g>
<path d="M649 56h36"></path>
</g>
</g>
<path d="M816 56a18 18 0 0 1 18 18v23a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 151h220.5"></path>
<path d="M595.5 151h220.5"></path>
<g>
<path d="M288.5 151h0"></path>
<path d="M595.5 151h0"></path>
<g>
<path d="M288.5 151h0"></path>
<g>
<path d="M288.5 151h0"></path>
<path d="M595.5 151h0"></path>
<path d="M288.5 151h36"></path>
<g>
<path d="M324.5 151h103"></path>
<path d="M456.5 151h103"></path>
<g class="terminal ">
<path d="M427.5 151h0"></path>
<path d="M456.5 151h0"></path>
<rect x="427.5" y="140" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="442" y="155">&#42;</text>
</g>
</g>
<path d="M559.5 151h36"></path>
<path d="M288.5 151a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M324.5 187h0"></path>
<path d="M559.5 187h0"></path>
<g>
<path d="M324.5 187h0"></path>
<path d="M559.5 187h0"></path>
<path d="M324.5 187h18"></path>
<g>
<path d="M342.5 187h30"></path>
<g>
<path d="M372.5 187h10"></path>
<path d="M501.5 187h10"></path>
<g class="terminal ">
<path d="M382.5 187h0"></path>
<path d="M501.5 187h0"></path>
<rect x="382.5" y="176" width="119" height="22" rx="10" ry="10"></rect>
<text x="442" y="191">projectItem</text>
</g>
</g>
<path d="M511.5 187h30"></path>
</g>
<path d="M541.5 187h18"></path>
<path d="M342.5 187a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M342.5 223h0"></path>
<path d="M541.5 223h0"></path>
<text x="442" y="228" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M541.5 223a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M559.5 187a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M595.5 151h0"></path>
</g>
</g>
</g>
<path d="M816 151a18 18 0 0 1 18 18v51a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 274h258.5"></path>
<path d="M557.5 274h258.5"></path>
<g class="non-terminal ">
<path d="M326.5 274h0"></path>
<path d="M382.5 274h0"></path>
<rect x="326.5" y="263" width="56" height="22"></rect>
<text x="354.5" y="278">FROM</text>
</g>
<path d="M382.5 274h10"></path>
<path d="M392.5 274h10"></path>
<g class="terminal ">
<path d="M402.5 274h0"></path>
<path d="M557.5 274h0"></path>
<rect x="402.5" y="263" width="155" height="22" rx="10" ry="10"></rect>
<text x="480" y="278">tableExpression</text>
</g>
</g>
<path d="M816 274a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 358h199"></path>
<path d="M617 358h199"></path>
<g>
<path d="M267 358h0"></path>
<path d="M617 358h0"></path>
<path d="M267 358a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M303 322h278"></path>
</g>
<path d="M581 322a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M267 358h36"></path>
<g>
<path d="M303 358h0"></path>
<g>
<path d="M303 358h10"></path>
<path d="M571 358h10"></path>
<g class="non-terminal ">
<path d="M313 358h0"></path>
<path d="M378 358h0"></path>
<rect x="313" y="347" width="65" height="22"></rect>
<text x="345.5" y="362">WHERE</text>
</g>
<path d="M378 358h10"></path>
<path d="M388 358h10"></path>
<g class="terminal ">
<path d="M398 358h0"></path>
<path d="M571 358h0"></path>
<rect x="398" y="347" width="173" height="22" rx="10" ry="10"></rect>
<text x="484.5" y="362">booleanExpression</text>
</g>
</g>
<path d="M581 358h0"></path>
</g>
<path d="M581 358h36"></path>
</g>
</g>
<path d="M816 358a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 442h129"></path>
<path d="M687 442h129"></path>
<g>
<path d="M197 442h0"></path>
<path d="M687 442h0"></path>
<path d="M197 442a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M233 406h418"></path>
</g>
<path d="M651 406a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M197 442h36"></path>
<g>
<path d="M233 442h0"></path>
<g>
<path d="M233 442h10"></path>
<path d="M641 442h10"></path>
<g class="non-terminal ">
<path d="M243 442h0"></path>
<path d="M308 442h0"></path>
<rect x="243" y="431" width="65" height="22"></rect>
<text x="275.5" y="446">GROUP</text>
</g>
<path d="M308 442h10"></path>
<path d="M318 442h10"></path>
<g class="non-terminal ">
<path d="M328 442h0"></path>
<path d="M366 442h0"></path>
<rect x="328" y="431" width="38" height="22"></rect>
<text x="347" y="446">BY</text>
</g>
<path d="M366 442h10"></path>
<path d="M376 442h10"></path>
<g>
<path d="M386 442h0"></path>
<path d="M641 442h0"></path>
<g>
<path d="M386 442h0"></path>
<g>
<path d="M386 442h10"></path>
<path d="M631 442h10"></path>
<g>
<path d="M396 442h0"></path>
<path d="M631 442h0"></path>
<path d="M396 442h18"></path>
<g>
<path d="M414 442h39"></path>
<g>
<path d="M453 442h10"></path>
<path d="M564 442h10"></path>
<g class="terminal ">
<path d="M463 442h0"></path>
<path d="M564 442h0"></path>
<rect x="463" y="431" width="101" height="22" rx="10" ry="10"></rect>
<text x="513.5" y="446">groupItem</text>
</g>
</g>
<path d="M574 442h39"></path>
</g>
<path d="M613 442h18"></path>
<path d="M414 442a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M414 478h0"></path>
<path d="M613 478h0"></path>
<text x="513.5" y="483" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M613 478a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M641 442h0"></path>
</g>
</g>
</g>
<path d="M651 442h0"></path>
</g>
<path d="M651 442h36"></path>
</g>
</g>
<path d="M816 442a18 18 0 0 1 18 18v15a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 541h194.5"></path>
<path d="M621.5 541h194.5"></path>
<g>
<path d="M262.5 541h0"></path>
<path d="M621.5 541h0"></path>
<path d="M262.5 541a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M298.5 505h287"></path>
</g>
<path d="M585.5 505a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M262.5 541h36"></path>
<g>
<path d="M298.5 541h0"></path>
<g>
<path d="M298.5 541h10"></path>
<path d="M575.5 541h10"></path>
<g class="non-terminal ">
<path d="M308.5 541h0"></path>
<path d="M382.5 541h0"></path>
<rect x="308.5" y="530" width="74" height="22"></rect>
<text x="345.5" y="545">HAVING</text>
</g>
<path d="M382.5 541h10"></path>
<path d="M392.5 541h10"></path>
<g class="terminal ">
<path d="M402.5 541h0"></path>
<path d="M575.5 541h0"></path>
<rect x="402.5" y="530" width="173" height="22" rx="10" ry="10"></rect>
<text x="489" y="545">booleanExpression</text>
</g>
</g>
<path d="M585.5 541h0"></path>
</g>
<path d="M585.5 541h36"></path>
</g>
</g>
<path d="M816 541a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 625h10"></path>
<path d="M806 625h10"></path>
<g>
<path d="M78 625h0"></path>
<path d="M806 625h0"></path>
<path d="M78 625a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 589h656"></path>
</g>
<path d="M770 589a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 625h36"></path>
<g>
<path d="M114 625h0"></path>
<g>
<path d="M114 625h10"></path>
<path d="M760 625h10"></path>
<g class="non-terminal ">
<path d="M124 625h0"></path>
<path d="M198 625h0"></path>
<rect x="124" y="614" width="74" height="22"></rect>
<text x="161" y="629">WINDOW</text>
</g>
<path d="M198 625h10"></path>
<path d="M208 625h10"></path>
<g class="terminal ">
<path d="M218 625h0"></path>
<path d="M328 625h0"></path>
<rect x="218" y="614" width="110" height="22" rx="10" ry="10"></rect>
<text x="273" y="629">windowName</text>
</g>
<path d="M328 625h10"></path>
<path d="M338 625h10"></path>
<g class="non-terminal ">
<path d="M348 625h0"></path>
<path d="M386 625h0"></path>
<rect x="348" y="614" width="38" height="22"></rect>
<text x="367" y="629">AS</text>
</g>
<path d="M386 625h10"></path>
<path d="M396 625h10"></path>
<g>
<path d="M406 625h0"></path>
<path d="M760 625h0"></path>
<path d="M406 625h18"></path>
<g>
<path d="M424 625h0"></path>
<g>
<path d="M424 625h10"></path>
<path d="M732 625h10"></path>
<g class="terminal ">
<path d="M434 625h0"></path>
<path d="M544 625h0"></path>
<rect x="434" y="614" width="110" height="22" rx="10" ry="10"></rect>
<text x="489" y="629">windowName</text>
</g>
<path d="M544 625h10"></path>
<path d="M554 625h10"></path>
<g class="non-terminal ">
<path d="M564 625h0"></path>
<path d="M602 625h0"></path>
<rect x="564" y="614" width="38" height="22"></rect>
<text x="583" y="629">AS</text>
</g>
<path d="M602 625h10"></path>
<path d="M612 625h10"></path>
<g class="terminal ">
<path d="M622 625h0"></path>
<path d="M732 625h0"></path>
<rect x="622" y="614" width="110" height="22" rx="10" ry="10"></rect>
<text x="677" y="629">windowSpec</text>
</g>
</g>
<path d="M742 625h0"></path>
</g>
<path d="M742 625h18"></path>
<path d="M424 625a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M424 661h59.5"></path>
<path d="M682.5 661h59.5"></path>
<text x="583" y="666" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M742 661a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M770 625h0"></path>
</g>
<path d="M770 625h36"></path>
</g>
</g>
<path d="M816 625h18"></path>
<path d="M834 625h0"></path>
</g>
<path d="M834 625h10"></path>
<path d="M 844 625 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### selectWithoutFrom:
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
<svg class="railroad-diagram" width="476" height="246" viewBox="0 0 476 246">
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
<path d="M398 56h10"></path>
<g class="non-terminal ">
<path d="M78 56h0"></path>
<path d="M152 56h0"></path>
<rect x="78" y="45" width="74" height="22"></rect>
<text x="115" y="60">SELECT</text>
</g>
<path d="M152 56h10"></path>
<g>
<path d="M162 56h0"></path>
<path d="M398 56h0"></path>
<path d="M162 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M198 20h164"></path>
</g>
<path d="M362 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M162 56h36"></path>
<g>
<path d="M198 56h0"></path>
<g>
<path d="M198 56h0"></path>
<path d="M362 56h0"></path>
<path d="M198 56h36"></path>
<g>
<path d="M234 56h22.5"></path>
<path d="M303.5 56h22.5"></path>
<g class="non-terminal ">
<path d="M256.5 56h0"></path>
<path d="M303.5 56h0"></path>
<rect x="256.5" y="45" width="47" height="22"></rect>
<text x="280" y="60">ALL</text>
</g>
</g>
<path d="M326 56h36"></path>
<path d="M198 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M234 92h0"></path>
<path d="M326 92h0"></path>
<g class="non-terminal ">
<path d="M234 92h0"></path>
<path d="M326 92h0"></path>
<rect x="234" y="81" width="92" height="22"></rect>
<text x="280" y="96">DISTINCT</text>
</g>
</g>
<path d="M326 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M362 56h0"></path>
</g>
<path d="M362 56h36"></path>
</g>
</g>
<path d="M408 56a18 18 0 0 1 18 18v23a18 18 0 0 1 -18 18h-340a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 151h16.5"></path>
<path d="M391.5 151h16.5"></path>
<g>
<path d="M84.5 151h0"></path>
<path d="M391.5 151h0"></path>
<g>
<path d="M84.5 151h0"></path>
<g>
<path d="M84.5 151h0"></path>
<path d="M391.5 151h0"></path>
<path d="M84.5 151h36"></path>
<g>
<path d="M120.5 151h103"></path>
<path d="M252.5 151h103"></path>
<g class="terminal ">
<path d="M223.5 151h0"></path>
<path d="M252.5 151h0"></path>
<rect x="223.5" y="140" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="238" y="155">&#42;</text>
</g>
</g>
<path d="M355.5 151h36"></path>
<path d="M84.5 151a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M120.5 187h0"></path>
<path d="M355.5 187h0"></path>
<g>
<path d="M120.5 187h0"></path>
<path d="M355.5 187h0"></path>
<path d="M120.5 187h18"></path>
<g>
<path d="M138.5 187h30"></path>
<g>
<path d="M168.5 187h10"></path>
<path d="M297.5 187h10"></path>
<g class="terminal ">
<path d="M178.5 187h0"></path>
<path d="M297.5 187h0"></path>
<rect x="178.5" y="176" width="119" height="22" rx="10" ry="10"></rect>
<text x="238" y="191">projectItem</text>
</g>
</g>
<path d="M307.5 187h30"></path>
</g>
<path d="M337.5 187h18"></path>
<path d="M138.5 187a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M138.5 223h0"></path>
<path d="M337.5 223h0"></path>
<text x="238" y="228" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M337.5 223a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M355.5 187a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M391.5 151h0"></path>
</g>
</g>
</g>
<path d="M408 151h18"></path>
<path d="M426 151h0"></path>
</g>
<path d="M426 151h10"></path>
<path d="M 436 151 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### projectItem:
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
<svg class="railroad-diagram" width="643" height="135" viewBox="0 0 643 135">
<g transform="translate(.5 .5)">
<g>
<path d="M20 58v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 68h10"></path>
<g>
<path d="M50 68h0"></path>
<g>
<path d="M50 68h0"></path>
<path d="M593 68h0"></path>
<path d="M50 68h36"></path>
<g>
<path d="M86 68h0"></path>
<path d="M557 68h0"></path>
<g class="terminal ">
<path d="M86 68h0"></path>
<path d="M196 68h0"></path>
<rect x="86" y="57" width="110" height="22" rx="10" ry="10"></rect>
<text x="141" y="72">expression</text>
</g>
<path d="M196 68h10"></path>
<g>
<path d="M206 68h0"></path>
<path d="M557 68h0"></path>
<path d="M206 68a18 18 0 0 0 18 -18v-12a18 18 0 0 1 18 -18"></path>
<g>
<path d="M242 20h279"></path>
</g>
<path d="M521 20a18 18 0 0 1 18 18v12a18 18 0 0 0 18 18"></path>
<path d="M206 68h36"></path>
<g>
<path d="M242 68h0"></path>
<g>
<path d="M242 68h10"></path>
<path d="M511 68h10"></path>
<g>
<path d="M252 68h0"></path>
<path d="M382 68h0"></path>
<path d="M252 68a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M288 32h58"></path>
</g>
<path d="M346 32a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M252 68h36"></path>
<g>
<path d="M288 68h0"></path>
<g>
<path d="M288 68h10"></path>
<path d="M336 68h10"></path>
<g class="non-terminal ">
<path d="M298 68h0"></path>
<path d="M336 68h0"></path>
<rect x="298" y="57" width="38" height="22"></rect>
<text x="317" y="72">AS</text>
</g>
</g>
<path d="M346 68h0"></path>
</g>
<path d="M346 68h36"></path>
</g>
<path d="M382 68h10"></path>
<g class="terminal ">
<path d="M392 68h0"></path>
<path d="M511 68h0"></path>
<rect x="392" y="57" width="119" height="22" rx="10" ry="10"></rect>
<text x="451.5" y="72">columnAlias</text>
</g>
</g>
<path d="M521 68h0"></path>
</g>
<path d="M521 68h36"></path>
</g>
</g>
<path d="M557 68h36"></path>
<path d="M50 68a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 104h131.5"></path>
<path d="M425.5 104h131.5"></path>
<g class="terminal ">
<path d="M217.5 104h0"></path>
<path d="M327.5 104h0"></path>
<rect x="217.5" y="93" width="110" height="22" rx="10" ry="10"></rect>
<text x="272.5" y="108">tableAlias</text>
</g>
<path d="M327.5 104h10"></path>
<path d="M337.5 104h10"></path>
<g class="terminal ">
<path d="M347.5 104h0"></path>
<path d="M376.5 104h0"></path>
<rect x="347.5" y="93" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="362" y="108">.</text>
</g>
<path d="M376.5 104h10"></path>
<path d="M386.5 104h10"></path>
<g class="terminal ">
<path d="M396.5 104h0"></path>
<path d="M425.5 104h0"></path>
<rect x="396.5" y="93" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="411" y="108">&#42;</text>
</g>
</g>
<path d="M557 104a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M593 68h0"></path>
</g>
<path d="M593 68h10"></path>
<path d="M 603 68 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### tableExpression:
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
<svg class="railroad-diagram" width="1388" height="360" viewBox="0 0 1388 360">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M1338 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h490.5"></path>
<path d="M811.5 31h490.5"></path>
<g>
<path d="M576.5 31h0"></path>
<path d="M811.5 31h0"></path>
<path d="M576.5 31h18"></path>
<g>
<path d="M594.5 31h16.5"></path>
<g>
<path d="M611 31h10"></path>
<path d="M767 31h10"></path>
<g class="terminal ">
<path d="M621 31h0"></path>
<path d="M767 31h0"></path>
<rect x="621" y="20" width="146" height="22" rx="10" ry="10"></rect>
<text x="694" y="35">tableReference</text>
</g>
</g>
<path d="M777 31h16.5"></path>
</g>
<path d="M793.5 31h18"></path>
<path d="M594.5 31a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M594.5 67h0"></path>
<path d="M793.5 67h0"></path>
<text x="694" y="72" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M793.5 67a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M1302 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v63a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 130h0"></path>
<path d="M1302 130h0"></path>
<g class="terminal ">
<path d="M86 130h0"></path>
<path d="M241 130h0"></path>
<rect x="86" y="119" width="155" height="22" rx="10" ry="10"></rect>
<text x="163.5" y="134">tableExpression</text>
</g>
<path d="M241 130h10"></path>
<g>
<path d="M251 130h0"></path>
<path d="M426 130h0"></path>
<path d="M251 130a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M287 94h103"></path>
</g>
<path d="M390 94a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M251 130h36"></path>
<g>
<path d="M287 130h0"></path>
<g>
<path d="M287 130h10"></path>
<path d="M380 130h10"></path>
<g class="non-terminal ">
<path d="M297 130h0"></path>
<path d="M380 130h0"></path>
<rect x="297" y="119" width="83" height="22"></rect>
<text x="338.5" y="134">NATURAL</text>
</g>
</g>
<path d="M390 130h0"></path>
</g>
<path d="M390 130h36"></path>
</g>
<g>
<path d="M426 130h0"></path>
<path d="M822 130h0"></path>
<path d="M426 130a18 18 0 0 0 18 -18v-12a18 18 0 0 1 18 -18"></path>
<g>
<path d="M462 82h324"></path>
</g>
<path d="M786 82a18 18 0 0 1 18 18v12a18 18 0 0 0 18 18"></path>
<path d="M426 130h36"></path>
<g>
<path d="M462 130h0"></path>
<g>
<path d="M462 130h10"></path>
<path d="M776 130h10"></path>
<g>
<path d="M472 130h0"></path>
<path d="M609 130h0"></path>
<g>
<path d="M472 130h0"></path>
<g>
<path d="M472 130h0"></path>
<path d="M609 130h0"></path>
<path d="M472 130h36"></path>
<g>
<path d="M508 130h4.5"></path>
<path d="M568.5 130h4.5"></path>
<g class="non-terminal ">
<path d="M512.5 130h0"></path>
<path d="M568.5 130h0"></path>
<rect x="512.5" y="119" width="56" height="22"></rect>
<text x="540.5" y="134">LEFT</text>
</g>
</g>
<path d="M573 130h36"></path>
<path d="M472 130a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M508 166h0"></path>
<path d="M573 166h0"></path>
<g class="non-terminal ">
<path d="M508 166h0"></path>
<path d="M573 166h0"></path>
<rect x="508" y="155" width="65" height="22"></rect>
<text x="540.5" y="170">RIGHT</text>
</g>
</g>
<path d="M573 166a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M472 130a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M508 200h4.5"></path>
<path d="M568.5 200h4.5"></path>
<g class="non-terminal ">
<path d="M512.5 200h0"></path>
<path d="M568.5 200h0"></path>
<rect x="512.5" y="189" width="56" height="22"></rect>
<text x="540.5" y="204">FULL</text>
</g>
</g>
<path d="M573 200a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M609 130h0"></path>
</g>
</g>
<path d="M609 130h10"></path>
<g>
<path d="M619 130h0"></path>
<path d="M776 130h0"></path>
<path d="M619 130a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M655 94h85"></path>
</g>
<path d="M740 94a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M619 130h36"></path>
<g>
<path d="M655 130h0"></path>
<g>
<path d="M655 130h10"></path>
<path d="M730 130h10"></path>
<g class="non-terminal ">
<path d="M665 130h0"></path>
<path d="M730 130h0"></path>
<rect x="665" y="119" width="65" height="22"></rect>
<text x="697.5" y="134">OUTER</text>
</g>
</g>
<path d="M740 130h0"></path>
</g>
<path d="M740 130h36"></path>
</g>
</g>
<path d="M786 130h0"></path>
</g>
<path d="M786 130h36"></path>
</g>
<path d="M822 130h10"></path>
<g class="non-terminal ">
<path d="M832 130h0"></path>
<path d="M888 130h0"></path>
<rect x="832" y="119" width="56" height="22"></rect>
<text x="860" y="134">JOIN</text>
</g>
<path d="M888 130h10"></path>
<path d="M898 130h10"></path>
<g class="terminal ">
<path d="M908 130h0"></path>
<path d="M1063 130h0"></path>
<rect x="908" y="119" width="155" height="22" rx="10" ry="10"></rect>
<text x="985.5" y="134">tableExpression</text>
</g>
<path d="M1063 130h10"></path>
<g>
<path d="M1073 130h0"></path>
<path d="M1302 130h0"></path>
<path d="M1073 130a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1109 94h157"></path>
</g>
<path d="M1266 94a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1073 130h36"></path>
<g>
<path d="M1109 130h0"></path>
<g>
<path d="M1109 130h10"></path>
<path d="M1256 130h10"></path>
<g class="terminal ">
<path d="M1119 130h0"></path>
<path d="M1256 130h0"></path>
<rect x="1119" y="119" width="137" height="22" rx="10" ry="10"></rect>
<text x="1187.5" y="134">joinCondition</text>
</g>
</g>
<path d="M1266 130h0"></path>
</g>
<path d="M1266 130h36"></path>
</g>
</g>
<path d="M1302 130a18 18 0 0 0 18 -18v-63a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v167a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 234h362.5"></path>
<path d="M939.5 234h362.5"></path>
<g class="terminal ">
<path d="M448.5 234h0"></path>
<path d="M603.5 234h0"></path>
<rect x="448.5" y="223" width="155" height="22" rx="10" ry="10"></rect>
<text x="526" y="238">tableExpression</text>
</g>
<path d="M603.5 234h10"></path>
<path d="M613.5 234h10"></path>
<g class="non-terminal ">
<path d="M623.5 234h0"></path>
<path d="M688.5 234h0"></path>
<rect x="623.5" y="223" width="65" height="22"></rect>
<text x="656" y="238">CROSS</text>
</g>
<path d="M688.5 234h10"></path>
<path d="M698.5 234h10"></path>
<g class="non-terminal ">
<path d="M708.5 234h0"></path>
<path d="M764.5 234h0"></path>
<rect x="708.5" y="223" width="56" height="22"></rect>
<text x="736.5" y="238">JOIN</text>
</g>
<path d="M764.5 234h10"></path>
<path d="M774.5 234h10"></path>
<g class="terminal ">
<path d="M784.5 234h0"></path>
<path d="M939.5 234h0"></path>
<rect x="784.5" y="223" width="155" height="22" rx="10" ry="10"></rect>
<text x="862" y="238">tableExpression</text>
</g>
</g>
<path d="M1302 234a18 18 0 0 0 18 -18v-167a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v226a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 293h296"></path>
<path d="M1006 293h296"></path>
<g class="terminal ">
<path d="M382 293h0"></path>
<path d="M537 293h0"></path>
<rect x="382" y="282" width="155" height="22" rx="10" ry="10"></rect>
<text x="459.5" y="297">tableExpression</text>
</g>
<path d="M537 293h10"></path>
<g>
<path d="M547 293h0"></path>
<path d="M756 293h0"></path>
<path d="M547 293a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M583 257h137"></path>
</g>
<path d="M720 257a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M547 293h36"></path>
<g>
<path d="M583 293h0"></path>
<g>
<path d="M583 293h0"></path>
<path d="M720 293h0"></path>
<path d="M583 293h36"></path>
<g>
<path d="M619 293h0"></path>
<path d="M684 293h0"></path>
<g class="non-terminal ">
<path d="M619 293h0"></path>
<path d="M684 293h0"></path>
<rect x="619" y="282" width="65" height="22"></rect>
<text x="651.5" y="297">CROSS</text>
</g>
</g>
<path d="M684 293h36"></path>
<path d="M583 293a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M619 329h0"></path>
<path d="M684 329h0"></path>
<g class="non-terminal ">
<path d="M619 329h0"></path>
<path d="M684 329h0"></path>
<rect x="619" y="318" width="65" height="22"></rect>
<text x="651.5" y="333">OUTER</text>
</g>
</g>
<path d="M684 329a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M720 293h0"></path>
</g>
<path d="M720 293h36"></path>
</g>
<path d="M756 293h10"></path>
<g class="non-terminal ">
<path d="M766 293h0"></path>
<path d="M831 293h0"></path>
<rect x="766" y="282" width="65" height="22"></rect>
<text x="798.5" y="297">APPLY</text>
</g>
<path d="M831 293h10"></path>
<path d="M841 293h10"></path>
<g class="terminal ">
<path d="M851 293h0"></path>
<path d="M1006 293h0"></path>
<rect x="851" y="282" width="155" height="22" rx="10" ry="10"></rect>
<text x="928.5" y="297">tableExpression</text>
</g>
</g>
<path d="M1302 293a18 18 0 0 0 18 -18v-226a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1338 31h0"></path>
</g>
<path d="M1338 31h10"></path>
<path d="M 1348 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### joinCondition:
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
<svg class="railroad-diagram" width="590" height="126" viewBox="0 0 590 126">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M540 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h93.5"></path>
<path d="M410.5 31h93.5"></path>
<g class="non-terminal ">
<path d="M179.5 31h0"></path>
<path d="M217.5 31h0"></path>
<rect x="179.5" y="20" width="38" height="22"></rect>
<text x="198.5" y="35">ON</text>
</g>
<path d="M217.5 31h10"></path>
<path d="M227.5 31h10"></path>
<g class="terminal ">
<path d="M237.5 31h0"></path>
<path d="M410.5 31h0"></path>
<rect x="237.5" y="20" width="173" height="22" rx="10" ry="10"></rect>
<text x="324" y="35">booleanExpression</text>
</g>
</g>
<path d="M504 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h0"></path>
<path d="M504 67h0"></path>
<g class="non-terminal ">
<path d="M86 67h0"></path>
<path d="M151 67h0"></path>
<rect x="86" y="56" width="65" height="22"></rect>
<text x="118.5" y="71">USING</text>
</g>
<path d="M151 67h10"></path>
<path d="M161 67h10"></path>
<g class="terminal ">
<path d="M171 67h0"></path>
<path d="M200 67h0"></path>
<rect x="171" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="185.5" y="71">(</text>
</g>
<path d="M200 67h10"></path>
<path d="M210 67h10"></path>
<g>
<path d="M220 67h0"></path>
<path d="M455 67h0"></path>
<path d="M220 67h18"></path>
<g>
<path d="M238 67h52.5"></path>
<g>
<path d="M290.5 67h10"></path>
<path d="M374.5 67h10"></path>
<g class="terminal ">
<path d="M300.5 67h0"></path>
<path d="M374.5 67h0"></path>
<rect x="300.5" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="337.5" y="71">column</text>
</g>
</g>
<path d="M384.5 67h52.5"></path>
</g>
<path d="M437 67h18"></path>
<path d="M238 67a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M238 103h0"></path>
<path d="M437 103h0"></path>
<text x="337.5" y="108" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M437 103a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M455 67h10"></path>
<path d="M465 67h10"></path>
<g class="terminal ">
<path d="M475 67h0"></path>
<path d="M504 67h0"></path>
<rect x="475" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="489.5" y="71">)</text>
</g>
</g>
<path d="M504 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M540 31h0"></path>
</g>
<path d="M540 31h10"></path>
<path d="M 550 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### tableReference:
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
<svg class="railroad-diagram" width="888" height="270" viewBox="0 0 888 270">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h325.5"></path>
<path d="M494.5 31h325.5"></path>
<g class="terminal ">
<path d="M393.5 31h0"></path>
<path d="M494.5 31h0"></path>
<rect x="393.5" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="444" y="35">tableName</text>
</g>
</g>
<path d="M820 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-752a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 115h257"></path>
<path d="M563 115h257"></path>
<g>
<path d="M325 115h0"></path>
<path d="M563 115h0"></path>
<path d="M325 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M361 79h166"></path>
</g>
<path d="M527 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M325 115h36"></path>
<g>
<path d="M361 115h0"></path>
<g>
<path d="M361 115h10"></path>
<path d="M517 115h10"></path>
<g class="terminal ">
<path d="M371 115h0"></path>
<path d="M517 115h0"></path>
<rect x="371" y="104" width="146" height="22" rx="10" ry="10"></rect>
<text x="444" y="119">matchRecognize</text>
</g>
</g>
<path d="M527 115h0"></path>
</g>
<path d="M527 115h36"></path>
</g>
</g>
<path d="M820 115a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-752a18 18 0 0 0 -18 18v24a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 211h10"></path>
<path d="M810 211h10"></path>
<g>
<path d="M78 211h0"></path>
<path d="M810 211h0"></path>
<path d="M78 211a18 18 0 0 0 18 -18v-12a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 163h660"></path>
</g>
<path d="M774 163a18 18 0 0 1 18 18v12a18 18 0 0 0 18 18"></path>
<path d="M78 211h36"></path>
<g>
<path d="M114 211h0"></path>
<g>
<path d="M114 211h10"></path>
<path d="M764 211h10"></path>
<g>
<path d="M124 211h0"></path>
<path d="M254 211h0"></path>
<path d="M124 211a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M160 175h58"></path>
</g>
<path d="M218 175a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M124 211h36"></path>
<g>
<path d="M160 211h0"></path>
<g>
<path d="M160 211h10"></path>
<path d="M208 211h10"></path>
<g class="non-terminal ">
<path d="M170 211h0"></path>
<path d="M208 211h0"></path>
<rect x="170" y="200" width="38" height="22"></rect>
<text x="189" y="215">AS</text>
</g>
</g>
<path d="M218 211h0"></path>
</g>
<path d="M218 211h36"></path>
</g>
<path d="M254 211h10"></path>
<g class="terminal ">
<path d="M264 211h0"></path>
<path d="M329 211h0"></path>
<rect x="264" y="200" width="65" height="22" rx="10" ry="10"></rect>
<text x="296.5" y="215">alias</text>
</g>
<path d="M329 211h10"></path>
<g>
<path d="M339 211h0"></path>
<path d="M764 211h0"></path>
<path d="M339 211a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M375 175h353"></path>
</g>
<path d="M728 175a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M339 211h36"></path>
<g>
<path d="M375 211h0"></path>
<g>
<path d="M375 211h10"></path>
<path d="M718 211h10"></path>
<g class="terminal ">
<path d="M385 211h0"></path>
<path d="M414 211h0"></path>
<rect x="385" y="200" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="399.5" y="215">(</text>
</g>
<path d="M414 211h10"></path>
<path d="M424 211h10"></path>
<g>
<path d="M434 211h0"></path>
<path d="M669 211h0"></path>
<path d="M434 211h18"></path>
<g>
<path d="M452 211h30"></path>
<g>
<path d="M482 211h10"></path>
<path d="M611 211h10"></path>
<g class="terminal ">
<path d="M492 211h0"></path>
<path d="M611 211h0"></path>
<rect x="492" y="200" width="119" height="22" rx="10" ry="10"></rect>
<text x="551.5" y="215">columnAlias</text>
</g>
</g>
<path d="M621 211h30"></path>
</g>
<path d="M651 211h18"></path>
<path d="M452 211a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M452 247h0"></path>
<path d="M651 247h0"></path>
<text x="551.5" y="252" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M651 247a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M669 211h10"></path>
<path d="M679 211h10"></path>
<g class="terminal ">
<path d="M689 211h0"></path>
<path d="M718 211h0"></path>
<rect x="689" y="200" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="703.5" y="215">)</text>
</g>
</g>
<path d="M728 211h0"></path>
</g>
<path d="M728 211h36"></path>
</g>
</g>
<path d="M774 211h0"></path>
</g>
<path d="M774 211h36"></path>
</g>
</g>
<path d="M820 211h18"></path>
<path d="M838 211h0"></path>
</g>
<path d="M838 211h10"></path>
<path d="M 848 211 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### tableName:
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
<svg class="railroad-diagram" width="1205" height="438" viewBox="0 0 1205 438">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h0"></path>
<path d="M1155 56h0"></path>
<path d="M50 56h36"></path>
<g>
<path d="M86 56h335.5"></path>
<path d="M783.5 56h335.5"></path>
<g>
<path d="M421.5 56h0"></path>
<path d="M672.5 56h0"></path>
<path d="M421.5 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M457.5 20h179"></path>
</g>
<path d="M636.5 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M421.5 56h36"></path>
<g>
<path d="M457.5 56h0"></path>
<g>
<path d="M457.5 56h10"></path>
<path d="M626.5 56h10"></path>
<g class="terminal ">
<path d="M467.5 56h0"></path>
<path d="M577.5 56h0"></path>
<rect x="467.5" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="522.5" y="60">schemaName</text>
</g>
<path d="M577.5 56h10"></path>
<path d="M587.5 56h10"></path>
<g class="terminal ">
<path d="M597.5 56h0"></path>
<path d="M626.5 56h0"></path>
<rect x="597.5" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="612" y="60">.</text>
</g>
</g>
<path d="M636.5 56h0"></path>
</g>
<path d="M636.5 56h36"></path>
</g>
<path d="M672.5 56h10"></path>
<g class="terminal ">
<path d="M682.5 56h0"></path>
<path d="M783.5 56h0"></path>
<rect x="682.5" y="45" width="101" height="22" rx="10" ry="10"></rect>
<text x="733" y="60">tableName</text>
</g>
</g>
<path d="M1119 56h36"></path>
<path d="M50 56a18 18 0 0 1 18 18v23a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 115h249"></path>
<path d="M870 115h249"></path>
<g class="terminal ">
<path d="M335 115h0"></path>
<path d="M364 115h0"></path>
<rect x="335" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="349.5" y="119">(</text>
</g>
<path d="M364 115h10"></path>
<path d="M374 115h10"></path>
<g class="non-terminal ">
<path d="M384 115h0"></path>
<path d="M449 115h0"></path>
<rect x="384" y="104" width="65" height="22"></rect>
<text x="416.5" y="119">TABLE</text>
</g>
<path d="M449 115h10"></path>
<g>
<path d="M459 115h0"></path>
<path d="M710 115h0"></path>
<path d="M459 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M495 79h179"></path>
</g>
<path d="M674 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M459 115h36"></path>
<g>
<path d="M495 115h0"></path>
<g>
<path d="M495 115h10"></path>
<path d="M664 115h10"></path>
<g class="terminal ">
<path d="M505 115h0"></path>
<path d="M615 115h0"></path>
<rect x="505" y="104" width="110" height="22" rx="10" ry="10"></rect>
<text x="560" y="119">schemaName</text>
</g>
<path d="M615 115h10"></path>
<path d="M625 115h10"></path>
<g class="terminal ">
<path d="M635 115h0"></path>
<path d="M664 115h0"></path>
<rect x="635" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="649.5" y="119">.</text>
</g>
</g>
<path d="M674 115h0"></path>
</g>
<path d="M674 115h36"></path>
</g>
<path d="M710 115h10"></path>
<g class="terminal ">
<path d="M720 115h0"></path>
<path d="M821 115h0"></path>
<rect x="720" y="104" width="101" height="22" rx="10" ry="10"></rect>
<text x="770.5" y="119">tableName</text>
</g>
<path d="M821 115h10"></path>
<path d="M831 115h10"></path>
<g class="terminal ">
<path d="M841 115h0"></path>
<path d="M870 115h0"></path>
<rect x="841" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="855.5" y="119">)</text>
</g>
</g>
<path d="M1119 115a18 18 0 0 0 18 -18v-23a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v82a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 174h206.5"></path>
<path d="M912.5 174h206.5"></path>
<g class="terminal ">
<path d="M292.5 174h0"></path>
<path d="M393.5 174h0"></path>
<rect x="292.5" y="163" width="101" height="22" rx="10" ry="10"></rect>
<text x="343" y="178">tableName</text>
</g>
<path d="M393.5 174h10"></path>
<g>
<path d="M403.5 174h0"></path>
<path d="M569.5 174h0"></path>
<path d="M403.5 174a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M439.5 138h94"></path>
</g>
<path d="M533.5 138a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M403.5 174h36"></path>
<g>
<path d="M439.5 174h0"></path>
<g>
<path d="M439.5 174h10"></path>
<path d="M523.5 174h10"></path>
<g class="non-terminal ">
<path d="M449.5 174h0"></path>
<path d="M523.5 174h0"></path>
<rect x="449.5" y="163" width="74" height="22"></rect>
<text x="486.5" y="178">EXTEND</text>
</g>
</g>
<path d="M533.5 174h0"></path>
</g>
<path d="M533.5 174h36"></path>
</g>
<path d="M569.5 174h10"></path>
<g class="terminal ">
<path d="M579.5 174h0"></path>
<path d="M608.5 174h0"></path>
<rect x="579.5" y="163" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="594" y="178">(</text>
</g>
<path d="M608.5 174h10"></path>
<path d="M618.5 174h10"></path>
<g>
<path d="M628.5 174h0"></path>
<path d="M863.5 174h0"></path>
<path d="M628.5 174h18"></path>
<g>
<path d="M646.5 174h34.5"></path>
<g>
<path d="M681 174h10"></path>
<path d="M801 174h10"></path>
<g class="terminal ">
<path d="M691 174h0"></path>
<path d="M801 174h0"></path>
<rect x="691" y="163" width="110" height="22" rx="10" ry="10"></rect>
<text x="746" y="178">columnDecl</text>
</g>
</g>
<path d="M811 174h34.5"></path>
</g>
<path d="M845.5 174h18"></path>
<path d="M646.5 174a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M646.5 210h0"></path>
<path d="M845.5 210h0"></path>
<text x="746" y="215" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M845.5 210a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M863.5 174h10"></path>
<path d="M873.5 174h10"></path>
<g class="terminal ">
<path d="M883.5 174h0"></path>
<path d="M912.5 174h0"></path>
<rect x="883.5" y="163" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="898" y="178">)</text>
</g>
</g>
<path d="M1119 174a18 18 0 0 0 18 -18v-82a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v169a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 261h342.5"></path>
<path d="M776.5 261h342.5"></path>
<g>
<path d="M428.5 261h0"></path>
<path d="M603.5 261h0"></path>
<path d="M428.5 261a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M464.5 225h103"></path>
</g>
<path d="M567.5 225a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M428.5 261h36"></path>
<g>
<path d="M464.5 261h0"></path>
<g>
<path d="M464.5 261h10"></path>
<path d="M557.5 261h10"></path>
<g class="non-terminal ">
<path d="M474.5 261h0"></path>
<path d="M557.5 261h0"></path>
<rect x="474.5" y="250" width="83" height="22"></rect>
<text x="516" y="265">LATERAL</text>
</g>
</g>
<path d="M567.5 261h0"></path>
</g>
<path d="M567.5 261h36"></path>
</g>
<path d="M603.5 261h10"></path>
<g class="terminal ">
<path d="M613.5 261h0"></path>
<path d="M642.5 261h0"></path>
<rect x="613.5" y="250" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="628" y="265">(</text>
</g>
<path d="M642.5 261h10"></path>
<path d="M652.5 261h10"></path>
<g class="terminal ">
<path d="M662.5 261h0"></path>
<path d="M727.5 261h0"></path>
<rect x="662.5" y="250" width="65" height="22" rx="10" ry="10"></rect>
<text x="695" y="265">query</text>
</g>
<path d="M727.5 261h10"></path>
<path d="M737.5 261h10"></path>
<g class="terminal ">
<path d="M747.5 261h0"></path>
<path d="M776.5 261h0"></path>
<rect x="747.5" y="250" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="762" y="265">)</text>
</g>
</g>
<path d="M1119 261a18 18 0 0 0 18 -18v-169a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v228a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 320h221.5"></path>
<path d="M897.5 320h221.5"></path>
<g class="non-terminal ">
<path d="M307.5 320h0"></path>
<path d="M381.5 320h0"></path>
<rect x="307.5" y="309" width="74" height="22"></rect>
<text x="344.5" y="324">UNNEST</text>
</g>
<path d="M381.5 320h10"></path>
<path d="M391.5 320h10"></path>
<g class="terminal ">
<path d="M401.5 320h0"></path>
<path d="M430.5 320h0"></path>
<rect x="401.5" y="309" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="416" y="324">(</text>
</g>
<path d="M430.5 320h10"></path>
<path d="M440.5 320h10"></path>
<g class="terminal ">
<path d="M450.5 320h0"></path>
<path d="M560.5 320h0"></path>
<rect x="450.5" y="309" width="110" height="22" rx="10" ry="10"></rect>
<text x="505.5" y="324">expression</text>
</g>
<path d="M560.5 320h10"></path>
<path d="M570.5 320h10"></path>
<g class="terminal ">
<path d="M580.5 320h0"></path>
<path d="M609.5 320h0"></path>
<rect x="580.5" y="309" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="595" y="324">)</text>
</g>
<path d="M609.5 320h10"></path>
<g>
<path d="M619.5 320h0"></path>
<path d="M897.5 320h0"></path>
<path d="M619.5 320a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M655.5 284h206"></path>
</g>
<path d="M861.5 284a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M619.5 320h36"></path>
<g>
<path d="M655.5 320h0"></path>
<g>
<path d="M655.5 320h10"></path>
<path d="M851.5 320h10"></path>
<g class="non-terminal ">
<path d="M665.5 320h0"></path>
<path d="M721.5 320h0"></path>
<rect x="665.5" y="309" width="56" height="22"></rect>
<text x="693.5" y="324">WITH</text>
</g>
<path d="M721.5 320h10"></path>
<path d="M731.5 320h10"></path>
<g class="non-terminal ">
<path d="M741.5 320h0"></path>
<path d="M851.5 320h0"></path>
<rect x="741.5" y="309" width="110" height="22"></rect>
<text x="796.5" y="324">ORDINALITY</text>
</g>
</g>
<path d="M861.5 320h0"></path>
</g>
<path d="M861.5 320h36"></path>
</g>
</g>
<path d="M1119 320a18 18 0 0 0 18 -18v-228a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v287a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 379h0"></path>
<path d="M1119 379h0"></path>
<g>
<path d="M86 379h0"></path>
<path d="M261 379h0"></path>
<path d="M86 379a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M122 343h103"></path>
</g>
<path d="M225 343a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M86 379h36"></path>
<g>
<path d="M122 379h0"></path>
<g>
<path d="M122 379h10"></path>
<path d="M215 379h10"></path>
<g class="non-terminal ">
<path d="M132 379h0"></path>
<path d="M215 379h0"></path>
<rect x="132" y="368" width="83" height="22"></rect>
<text x="173.5" y="383">LATERAL</text>
</g>
</g>
<path d="M225 379h0"></path>
</g>
<path d="M225 379h36"></path>
</g>
<path d="M261 379h10"></path>
<g class="non-terminal ">
<path d="M271 379h0"></path>
<path d="M336 379h0"></path>
<rect x="271" y="368" width="65" height="22"></rect>
<text x="303.5" y="383">TABLE</text>
</g>
<path d="M336 379h10"></path>
<path d="M346 379h10"></path>
<g class="terminal ">
<path d="M356 379h0"></path>
<path d="M385 379h0"></path>
<rect x="356" y="368" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="370.5" y="383">(</text>
</g>
<path d="M385 379h10"></path>
<g>
<path d="M395 379h0"></path>
<path d="M579 379h0"></path>
<path d="M395 379a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M431 343h112"></path>
</g>
<path d="M543 343a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M395 379h36"></path>
<g>
<path d="M431 379h0"></path>
<g>
<path d="M431 379h10"></path>
<path d="M533 379h10"></path>
<g class="non-terminal ">
<path d="M441 379h0"></path>
<path d="M533 379h0"></path>
<rect x="441" y="368" width="92" height="22"></rect>
<text x="487" y="383">SPECIFIC</text>
</g>
</g>
<path d="M543 379h0"></path>
</g>
<path d="M543 379h36"></path>
</g>
<path d="M579 379h10"></path>
<g class="terminal ">
<path d="M589 379h0"></path>
<path d="M717 379h0"></path>
<rect x="589" y="368" width="128" height="22" rx="10" ry="10"></rect>
<text x="653" y="383">functionName</text>
</g>
<path d="M717 379h10"></path>
<path d="M727 379h10"></path>
<g class="terminal ">
<path d="M737 379h0"></path>
<path d="M766 379h0"></path>
<rect x="737" y="368" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="751.5" y="383">(</text>
</g>
<path d="M766 379h10"></path>
<path d="M776 379h10"></path>
<g>
<path d="M786 379h0"></path>
<path d="M1021 379h0"></path>
<path d="M786 379h18"></path>
<g>
<path d="M804 379h34.5"></path>
<g>
<path d="M838.5 379h10"></path>
<path d="M958.5 379h10"></path>
<g class="terminal ">
<path d="M848.5 379h0"></path>
<path d="M958.5 379h0"></path>
<rect x="848.5" y="368" width="110" height="22" rx="10" ry="10"></rect>
<text x="903.5" y="383">expression</text>
</g>
</g>
<path d="M968.5 379h34.5"></path>
</g>
<path d="M1003 379h18"></path>
<path d="M804 379a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M804 415h0"></path>
<path d="M1003 415h0"></path>
<text x="903.5" y="420" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M1003 415a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M1021 379h10"></path>
<path d="M1031 379h10"></path>
<g class="terminal ">
<path d="M1041 379h0"></path>
<path d="M1070 379h0"></path>
<rect x="1041" y="368" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1055.5" y="383">)</text>
</g>
<path d="M1070 379h10"></path>
<path d="M1080 379h10"></path>
<g class="terminal ">
<path d="M1090 379h0"></path>
<path d="M1119 379h0"></path>
<rect x="1090" y="368" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1104.5" y="383">)</text>
</g>
</g>
<path d="M1119 379a18 18 0 0 0 18 -18v-287a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1155 56h0"></path>
</g>
<path d="M1155 56h10"></path>
<path d="M 1165 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### columnDecl:
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
<svg class="railroad-diagram" width="495" height="87" viewBox="0 0 495 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M435 56h10"></path>
<g class="terminal ">
<path d="M60 56h0"></path>
<path d="M134 56h0"></path>
<rect x="60" y="45" width="74" height="22" rx="10" ry="10"></rect>
<text x="97" y="60">column</text>
</g>
<path d="M134 56h10"></path>
<path d="M144 56h10"></path>
<g class="terminal ">
<path d="M154 56h0"></path>
<path d="M210 56h0"></path>
<rect x="154" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="182" y="60">type</text>
</g>
<path d="M210 56h10"></path>
<g>
<path d="M220 56h0"></path>
<path d="M435 56h0"></path>
<path d="M220 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M256 20h143"></path>
</g>
<path d="M399 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M220 56h36"></path>
<g>
<path d="M256 56h0"></path>
<g>
<path d="M256 56h10"></path>
<path d="M389 56h10"></path>
<g class="non-terminal ">
<path d="M266 56h0"></path>
<path d="M313 56h0"></path>
<rect x="266" y="45" width="47" height="22"></rect>
<text x="289.5" y="60">NOT</text>
</g>
<path d="M313 56h10"></path>
<path d="M323 56h10"></path>
<g class="non-terminal ">
<path d="M333 56h0"></path>
<path d="M389 56h0"></path>
<rect x="333" y="45" width="56" height="22"></rect>
<text x="361" y="60">NULL</text>
</g>
</g>
<path d="M399 56h0"></path>
</g>
<path d="M399 56h36"></path>
</g>
</g>
<path d="M445 56h0"></path>
</g>
<path d="M445 56h10"></path>
<path d="M 455 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### values:
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
<svg class="railroad-diagram" width="449" height="90" viewBox="0 0 449 90">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M389 31h10"></path>
<g class="non-terminal ">
<path d="M60 31h0"></path>
<path d="M134 31h0"></path>
<rect x="60" y="20" width="74" height="22"></rect>
<text x="97" y="35">VALUES</text>
</g>
<path d="M134 31h10"></path>
<path d="M144 31h10"></path>
<g>
<path d="M154 31h0"></path>
<path d="M389 31h0"></path>
<path d="M154 31h18"></path>
<g>
<path d="M172 31h34.5"></path>
<g>
<path d="M206.5 31h10"></path>
<path d="M326.5 31h10"></path>
<g class="terminal ">
<path d="M216.5 31h0"></path>
<path d="M326.5 31h0"></path>
<rect x="216.5" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="271.5" y="35">expression</text>
</g>
</g>
<path d="M336.5 31h34.5"></path>
</g>
<path d="M371 31h18"></path>
<path d="M172 31a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M172 67h0"></path>
<path d="M371 67h0"></path>
<text x="271.5" y="72" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M371 67a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M399 31h0"></path>
</g>
<path d="M399 31h10"></path>
<path d="M 409 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### groupItem:
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
<svg class="railroad-diagram" width="693" height="346" viewBox="0 0 693 346">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M643 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h205.5"></path>
<path d="M401.5 31h205.5"></path>
<g class="terminal ">
<path d="M291.5 31h0"></path>
<path d="M401.5 31h0"></path>
<rect x="291.5" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="346.5" y="35">expression</text>
</g>
</g>
<path d="M607 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h221.5"></path>
<path d="M385.5 67h221.5"></path>
<g class="terminal ">
<path d="M307.5 67h0"></path>
<path d="M336.5 67h0"></path>
<rect x="307.5" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="322" y="71">(</text>
</g>
<path d="M336.5 67h10"></path>
<path d="M346.5 67h10"></path>
<g class="terminal ">
<path d="M356.5 67h0"></path>
<path d="M385.5 67h0"></path>
<rect x="356.5" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="371" y="71">)</text>
</g>
</g>
<path d="M607 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 101h94"></path>
<path d="M513 101h94"></path>
<g class="terminal ">
<path d="M180 101h0"></path>
<path d="M209 101h0"></path>
<rect x="180" y="90" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="194.5" y="105">(</text>
</g>
<path d="M209 101h10"></path>
<path d="M219 101h10"></path>
<g>
<path d="M229 101h0"></path>
<path d="M464 101h0"></path>
<path d="M229 101h18"></path>
<g>
<path d="M247 101h34.5"></path>
<g>
<path d="M281.5 101h10"></path>
<path d="M401.5 101h10"></path>
<g class="terminal ">
<path d="M291.5 101h0"></path>
<path d="M401.5 101h0"></path>
<rect x="291.5" y="90" width="110" height="22" rx="10" ry="10"></rect>
<text x="346.5" y="105">expression</text>
</g>
</g>
<path d="M411.5 101h34.5"></path>
</g>
<path d="M446 101h18"></path>
<path d="M247 101a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M247 137h0"></path>
<path d="M446 137h0"></path>
<text x="346.5" y="142" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M446 137a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M464 101h10"></path>
<path d="M474 101h10"></path>
<g class="terminal ">
<path d="M484 101h0"></path>
<path d="M513 101h0"></path>
<rect x="484" y="90" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="498.5" y="105">)</text>
</g>
</g>
<path d="M607 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v96a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 163h56"></path>
<path d="M551 163h56"></path>
<g class="non-terminal ">
<path d="M142 163h0"></path>
<path d="M198 163h0"></path>
<rect x="142" y="152" width="56" height="22"></rect>
<text x="170" y="167">CUBE</text>
</g>
<path d="M198 163h10"></path>
<path d="M208 163h10"></path>
<g class="terminal ">
<path d="M218 163h0"></path>
<path d="M247 163h0"></path>
<rect x="218" y="152" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="232.5" y="167">(</text>
</g>
<path d="M247 163h10"></path>
<path d="M257 163h10"></path>
<g>
<path d="M267 163h0"></path>
<path d="M502 163h0"></path>
<path d="M267 163h18"></path>
<g>
<path d="M285 163h34.5"></path>
<g>
<path d="M319.5 163h10"></path>
<path d="M439.5 163h10"></path>
<g class="terminal ">
<path d="M329.5 163h0"></path>
<path d="M439.5 163h0"></path>
<rect x="329.5" y="152" width="110" height="22" rx="10" ry="10"></rect>
<text x="384.5" y="167">expression</text>
</g>
</g>
<path d="M449.5 163h34.5"></path>
</g>
<path d="M484 163h18"></path>
<path d="M285 163a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M285 199h0"></path>
<path d="M484 199h0"></path>
<text x="384.5" y="204" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M484 199a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M502 163h10"></path>
<path d="M512 163h10"></path>
<g class="terminal ">
<path d="M522 163h0"></path>
<path d="M551 163h0"></path>
<rect x="522" y="152" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="536.5" y="167">)</text>
</g>
</g>
<path d="M607 163a18 18 0 0 0 18 -18v-96a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v158a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 225h47"></path>
<path d="M560 225h47"></path>
<g class="non-terminal ">
<path d="M133 225h0"></path>
<path d="M207 225h0"></path>
<rect x="133" y="214" width="74" height="22"></rect>
<text x="170" y="229">ROLLUP</text>
</g>
<path d="M207 225h10"></path>
<path d="M217 225h10"></path>
<g class="terminal ">
<path d="M227 225h0"></path>
<path d="M256 225h0"></path>
<rect x="227" y="214" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="241.5" y="229">(</text>
</g>
<path d="M256 225h10"></path>
<path d="M266 225h10"></path>
<g>
<path d="M276 225h0"></path>
<path d="M511 225h0"></path>
<path d="M276 225h18"></path>
<g>
<path d="M294 225h34.5"></path>
<g>
<path d="M328.5 225h10"></path>
<path d="M448.5 225h10"></path>
<g class="terminal ">
<path d="M338.5 225h0"></path>
<path d="M448.5 225h0"></path>
<rect x="338.5" y="214" width="110" height="22" rx="10" ry="10"></rect>
<text x="393.5" y="229">expression</text>
</g>
</g>
<path d="M458.5 225h34.5"></path>
</g>
<path d="M493 225h18"></path>
<path d="M294 225a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M294 261h0"></path>
<path d="M493 261h0"></path>
<text x="393.5" y="266" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M493 261a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M511 225h10"></path>
<path d="M521 225h10"></path>
<g class="terminal ">
<path d="M531 225h0"></path>
<path d="M560 225h0"></path>
<rect x="531" y="214" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="545.5" y="229">)</text>
</g>
</g>
<path d="M607 225a18 18 0 0 0 18 -18v-158a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v220a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 287h0"></path>
<path d="M607 287h0"></path>
<g class="non-terminal ">
<path d="M86 287h0"></path>
<path d="M178 287h0"></path>
<rect x="86" y="276" width="92" height="22"></rect>
<text x="132" y="291">GROUPING</text>
</g>
<path d="M178 287h10"></path>
<path d="M188 287h10"></path>
<g class="non-terminal ">
<path d="M198 287h0"></path>
<path d="M254 287h0"></path>
<rect x="198" y="276" width="56" height="22"></rect>
<text x="226" y="291">SETS</text>
</g>
<path d="M254 287h10"></path>
<path d="M264 287h10"></path>
<g class="terminal ">
<path d="M274 287h0"></path>
<path d="M303 287h0"></path>
<rect x="274" y="276" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="288.5" y="291">(</text>
</g>
<path d="M303 287h10"></path>
<path d="M313 287h10"></path>
<g>
<path d="M323 287h0"></path>
<path d="M558 287h0"></path>
<path d="M323 287h18"></path>
<g>
<path d="M341 287h39"></path>
<g>
<path d="M380 287h10"></path>
<path d="M491 287h10"></path>
<g class="terminal ">
<path d="M390 287h0"></path>
<path d="M491 287h0"></path>
<rect x="390" y="276" width="101" height="22" rx="10" ry="10"></rect>
<text x="440.5" y="291">groupItem</text>
</g>
</g>
<path d="M501 287h39"></path>
</g>
<path d="M540 287h18"></path>
<path d="M341 287a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M341 323h0"></path>
<path d="M540 323h0"></path>
<text x="440.5" y="328" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M540 323a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M558 287h10"></path>
<path d="M568 287h10"></path>
<g class="terminal ">
<path d="M578 287h0"></path>
<path d="M607 287h0"></path>
<rect x="578" y="276" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="592.5" y="291">)</text>
</g>
</g>
<path d="M607 287a18 18 0 0 0 18 -18v-220a18 18 0 0 1 18 -18"></path>
</g>
<path d="M643 31h0"></path>
</g>
<path d="M643 31h10"></path>
<path d="M 653 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### windowRef:
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
<svg class="railroad-diagram" width="282" height="98" viewBox="0 0 282 98">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M232 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h0"></path>
<path d="M196 31h0"></path>
<g class="terminal ">
<path d="M86 31h0"></path>
<path d="M196 31h0"></path>
<rect x="86" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="141" y="35">windowName</text>
</g>
</g>
<path d="M196 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h0"></path>
<path d="M196 67h0"></path>
<g class="terminal ">
<path d="M86 67h0"></path>
<path d="M196 67h0"></path>
<rect x="86" y="56" width="110" height="22" rx="10" ry="10"></rect>
<text x="141" y="71">windowSpec</text>
</g>
</g>
<path d="M196 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M232 31h0"></path>
</g>
<path d="M232 31h10"></path>
<path d="M 242 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}

### windowSpec:
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
<svg class="railroad-diagram" width="962" height="642" viewBox="0 0 962 642">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M50 56h18"></path>
<g>
<path d="M68 56h312"></path>
<path d="M582 56h312"></path>
<g>
<path d="M380 56h0"></path>
<path d="M582 56h0"></path>
<path d="M380 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M416 20h130"></path>
</g>
<path d="M546 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M380 56h36"></path>
<g>
<path d="M416 56h0"></path>
<g>
<path d="M416 56h10"></path>
<path d="M536 56h10"></path>
<g class="terminal ">
<path d="M426 56h0"></path>
<path d="M536 56h0"></path>
<rect x="426" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="481" y="60">windowName</text>
</g>
</g>
<path d="M546 56h0"></path>
</g>
<path d="M546 56h36"></path>
</g>
</g>
<path d="M894 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 128h398.5"></path>
<path d="M495.5 128h398.5"></path>
<g class="terminal ">
<path d="M466.5 128h0"></path>
<path d="M495.5 128h0"></path>
<rect x="466.5" y="117" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="481" y="132">(</text>
</g>
</g>
<path d="M894 128a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 212h178"></path>
<path d="M716 212h178"></path>
<g>
<path d="M246 212h0"></path>
<path d="M716 212h0"></path>
<path d="M246 212a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M282 176h398"></path>
</g>
<path d="M680 176a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M246 212h36"></path>
<g>
<path d="M282 212h0"></path>
<g>
<path d="M282 212h10"></path>
<path d="M670 212h10"></path>
<g class="non-terminal ">
<path d="M292 212h0"></path>
<path d="M357 212h0"></path>
<rect x="292" y="201" width="65" height="22"></rect>
<text x="324.5" y="216">ORDER</text>
</g>
<path d="M357 212h10"></path>
<path d="M367 212h10"></path>
<g class="non-terminal ">
<path d="M377 212h0"></path>
<path d="M415 212h0"></path>
<rect x="377" y="201" width="38" height="22"></rect>
<text x="396" y="216">BY</text>
</g>
<path d="M415 212h10"></path>
<path d="M425 212h10"></path>
<g>
<path d="M435 212h0"></path>
<path d="M670 212h0"></path>
<path d="M435 212h18"></path>
<g>
<path d="M453 212h39"></path>
<g>
<path d="M492 212h10"></path>
<path d="M603 212h10"></path>
<g class="terminal ">
<path d="M502 212h0"></path>
<path d="M603 212h0"></path>
<rect x="502" y="201" width="101" height="22" rx="10" ry="10"></rect>
<text x="552.5" y="216">orderItem</text>
</g>
</g>
<path d="M613 212h39"></path>
</g>
<path d="M652 212h18"></path>
<path d="M453 212a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M453 248h0"></path>
<path d="M652 248h0"></path>
<text x="552.5" y="253" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M652 248a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M680 212h0"></path>
</g>
<path d="M680 212h36"></path>
</g>
</g>
<path d="M894 212a18 18 0 0 1 18 18v15a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 311h160"></path>
<path d="M734 311h160"></path>
<g>
<path d="M228 311h0"></path>
<path d="M734 311h0"></path>
<path d="M228 311a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M264 275h434"></path>
</g>
<path d="M698 275a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M228 311h36"></path>
<g>
<path d="M264 311h0"></path>
<g>
<path d="M264 311h10"></path>
<path d="M688 311h10"></path>
<g class="non-terminal ">
<path d="M274 311h0"></path>
<path d="M375 311h0"></path>
<rect x="274" y="300" width="101" height="22"></rect>
<text x="324.5" y="315">PARTITION</text>
</g>
<path d="M375 311h10"></path>
<path d="M385 311h10"></path>
<g class="non-terminal ">
<path d="M395 311h0"></path>
<path d="M433 311h0"></path>
<rect x="395" y="300" width="38" height="22"></rect>
<text x="414" y="315">BY</text>
</g>
<path d="M433 311h10"></path>
<path d="M443 311h10"></path>
<g>
<path d="M453 311h0"></path>
<path d="M688 311h0"></path>
<path d="M453 311h18"></path>
<g>
<path d="M471 311h34.5"></path>
<g>
<path d="M505.5 311h10"></path>
<path d="M625.5 311h10"></path>
<g class="terminal ">
<path d="M515.5 311h0"></path>
<path d="M625.5 311h0"></path>
<rect x="515.5" y="300" width="110" height="22" rx="10" ry="10"></rect>
<text x="570.5" y="315">expression</text>
</g>
</g>
<path d="M635.5 311h34.5"></path>
</g>
<path d="M670 311h18"></path>
<path d="M471 311a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M471 347h0"></path>
<path d="M670 347h0"></path>
<text x="570.5" y="352" class="comment">&#60;g class="terminal ">
&#60;/g>
</text>
</g>
<path d="M670 347a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M698 311h0"></path>
</g>
<path d="M698 311h36"></path>
</g>
</g>
<path d="M894 311a18 18 0 0 1 18 18v15a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 410h10"></path>
<path d="M884 410h10"></path>
<g>
<path d="M78 410h0"></path>
<path d="M884 410h0"></path>
<path d="M78 410a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 374h734"></path>
</g>
<path d="M848 374a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 410h36"></path>
<g>
<path d="M114 410h0"></path>
<g>
<path d="M114 410h0"></path>
<path d="M848 410h0"></path>
<path d="M114 410h36"></path>
<g>
<path d="M150 410h280.5"></path>
<path d="M531.5 410h280.5"></path>
<g class="terminal ">
<path d="M430.5 410h0"></path>
<path d="M531.5 410h0"></path>
<rect x="430.5" y="399" width="101" height="22" rx="10" ry="10"></rect>
<text x="481" y="414">undefined</text>
</g>
</g>
<path d="M812 410h36"></path>
<path d="M114 410a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M150 446h0"></path>
<path d="M812 446h0"></path>
<g class="non-terminal ">
<path d="M150 446h0"></path>
<path d="M215 446h0"></path>
<rect x="150" y="435" width="65" height="22"></rect>
<text x="182.5" y="450">RANGE</text>
</g>
<path d="M215 446h10"></path>
<path d="M225 446h10"></path>
<g class="terminal ">
<path d="M235 446h0"></path>
<path d="M498 446h0"></path>
<rect x="235" y="435" width="263" height="22" rx="10" ry="10"></rect>
<text x="366.5" y="450">numericOrIntervalExpression</text>
</g>
<path d="M498 446h10"></path>
<path d="M508 446h10"></path>
<g>
<path d="M518 446h0"></path>
<path d="M691 446h0"></path>
<g>
<path d="M518 446h0"></path>
<g>
<path d="M518 446h0"></path>
<path d="M691 446h0"></path>
<path d="M518 446h36"></path>
<g>
<path d="M554 446h0"></path>
<path d="M655 446h0"></path>
<g class="non-terminal ">
<path d="M554 446h0"></path>
<path d="M655 446h0"></path>
<rect x="554" y="435" width="101" height="22"></rect>
<text x="604.5" y="450">PRECEDING</text>
</g>
</g>
<path d="M655 446h36"></path>
<path d="M518 446a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M554 482h0"></path>
<path d="M655 482h0"></path>
<g class="non-terminal ">
<path d="M554 482h0"></path>
<path d="M655 482h0"></path>
<rect x="554" y="471" width="101" height="22"></rect>
<text x="604.5" y="486">FOLLOWING</text>
</g>
</g>
<path d="M655 482a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M691 446h0"></path>
</g>
</g>
<path d="M691 446h10"></path>
<path d="M701 446h10"></path>
<g class="terminal ">
<path d="M711 446h0"></path>
<path d="M812 446h0"></path>
<rect x="711" y="435" width="101" height="22" rx="10" ry="10"></rect>
<text x="761.5" y="450">undefined</text>
</g>
</g>
<path d="M812 446a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M114 410a18 18 0 0 1 18 18v70a18 18 0 0 0 18 18"></path>
<g>
<path d="M150 516h49.5"></path>
<path d="M762.5 516h49.5"></path>
<g class="non-terminal ">
<path d="M199.5 516h0"></path>
<path d="M255.5 516h0"></path>
<rect x="199.5" y="505" width="56" height="22"></rect>
<text x="227.5" y="520">ROWS</text>
</g>
<path d="M255.5 516h10"></path>
<path d="M265.5 516h10"></path>
<g class="terminal ">
<path d="M275.5 516h0"></path>
<path d="M448.5 516h0"></path>
<rect x="275.5" y="505" width="173" height="22" rx="10" ry="10"></rect>
<text x="362" y="520">numericExpression</text>
</g>
<path d="M448.5 516h10"></path>
<path d="M458.5 516h10"></path>
<g>
<path d="M468.5 516h0"></path>
<path d="M641.5 516h0"></path>
<g>
<path d="M468.5 516h0"></path>
<g>
<path d="M468.5 516h0"></path>
<path d="M641.5 516h0"></path>
<path d="M468.5 516h36"></path>
<g>
<path d="M504.5 516h0"></path>
<path d="M605.5 516h0"></path>
<g class="non-terminal ">
<path d="M504.5 516h0"></path>
<path d="M605.5 516h0"></path>
<rect x="504.5" y="505" width="101" height="22"></rect>
<text x="555" y="520">PRECEDING</text>
</g>
</g>
<path d="M605.5 516h36"></path>
<path d="M468.5 516a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M504.5 552h0"></path>
<path d="M605.5 552h0"></path>
<g class="non-terminal ">
<path d="M504.5 552h0"></path>
<path d="M605.5 552h0"></path>
<rect x="504.5" y="541" width="101" height="22"></rect>
<text x="555" y="556">FOLLOWING</text>
</g>
</g>
<path d="M605.5 552a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M641.5 516h0"></path>
</g>
</g>
<path d="M641.5 516h10"></path>
<path d="M651.5 516h10"></path>
<g class="terminal ">
<path d="M661.5 516h0"></path>
<path d="M762.5 516h0"></path>
<rect x="661.5" y="505" width="101" height="22" rx="10" ry="10"></rect>
<text x="712" y="520">undefined</text>
</g>
</g>
<path d="M812 516a18 18 0 0 0 18 -18v-70a18 18 0 0 1 18 -18"></path>
</g>
<path d="M848 410h0"></path>
</g>
<path d="M848 410h36"></path>
</g>
</g>
<path d="M894 410a18 18 0 0 1 18 18v129a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 611h398.5"></path>
<path d="M495.5 611h398.5"></path>
<g class="terminal ">
<path d="M466.5 611h0"></path>
<path d="M495.5 611h0"></path>
<rect x="466.5" y="600" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="481" y="615">)</text>
</g>
</g>
<path d="M894 611h18"></path>
<path d="M912 611h0"></path>
</g>
<path d="M912 611h10"></path>
<path d="M 922 611 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}


{% highlight sql %}

{% endhighlight %}

In *insert*, if the INSERT statement does not specify a list of target columns, the query must have the same number of columns as the target table.

In *orderItem*, if *expression* is a positive integer *n*, it denotes the <em>n</em>th item in the SELECT clause.

In *query*, *count* and *start* may each be either an unsigned integer literal or a dynamic parameter whose value is an integer.

An aggregate query is a query that contains a GROUP BY or a HAVING clause, or aggregate functions in the SELECT clause. In the SELECT, HAVING and ORDER BY clauses of an aggregate query, all expressions must be constant within the current group (that is, grouping constants as defined by the GROUP BY clause, or constants), or aggregate functions, or a combination of constants and aggregate functions. Aggregate and grouping functions may only appear in an aggregate query, and only in a SELECT, HAVING or ORDER BY clause.

A scalar sub-query is a sub-query used as an expression. If the sub-query returns no rows, the value is NULL; if it returns more than one row, it is an error.

IN, EXISTS and scalar sub-queries can occur in any place where an expression can occur (such as the SELECT clause, WHERE clause, ON clause of a JOIN, or as an argument to an aggregate function).

An IN, EXISTS or scalar sub-query may be correlated; that is, it may refer to tables in the FROM clause of an enclosing query.

*selectWithoutFrom* is equivalent to VALUES.

MINUS is equivalent to EXCEPT.

"LIMIT start, count" is equivalent to "LIMIT count OFFSET start".


<br>
_Parts of this documentation are based on [Calcite SQL Reference](https://calcite.apache.org/docs/reference.html)._