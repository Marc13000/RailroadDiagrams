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
<svg class="railroad-diagram" width="282" height="277" viewBox="0 0 282 277">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M242 247h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h0"></path>
<path d="M76 31h18"></path>
<g>
<path d="M94 31h10"></path>
<path d="M178 31h10"></path>
<g class="terminal ">
<path d="M104 31h0"></path>
<path d="M178 31h0"></path>
<rect x="104" y="20" width="74" height="22" rx="10" ry="10"></rect>
<text x="141" y="35">insert</text>
</g>
</g>
<path d="M188 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-94a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 103h10"></path>
<path d="M178 103h10"></path>
<g class="terminal ">
<path d="M104 103h0"></path>
<path d="M178 103h0"></path>
<rect x="104" y="92" width="74" height="22" rx="10" ry="10"></rect>
<text x="141" y="107">update</text>
</g>
</g>
<path d="M188 103a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-94a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 175h10"></path>
<path d="M178 175h10"></path>
<g class="terminal ">
<path d="M104 175h0"></path>
<path d="M178 175h0"></path>
<rect x="104" y="164" width="74" height="22" rx="10" ry="10"></rect>
<text x="141" y="179">delete</text>
</g>
</g>
<path d="M188 175a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-94a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 247h14.5"></path>
<path d="M173.5 247h14.5"></path>
<g class="terminal ">
<path d="M108.5 247h0"></path>
<path d="M173.5 247h0"></path>
<rect x="108.5" y="236" width="65" height="22" rx="10" ry="10"></rect>
<text x="141" y="251">query</text>
</g>
</g>
<path d="M188 247h18"></path>
<path d="M206 247h0"></path>
</g>
<path d="M206 247h36"></path>
</g>
<path d="M 242 247 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="452" height="222" viewBox="0 0 452 222">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h22.5"></path>
<path d="M361.5 31h22.5"></path>
<g class="non-terminal ">
<path d="M90.5 31h0"></path>
<path d="M164.5 31h0"></path>
<rect x="90.5" y="20" width="74" height="22"></rect>
<text x="127.5" y="35">INSERT</text>
</g>
<path d="M164.5 31h10"></path>
<path d="M174.5 31h10"></path>
<g class="non-terminal ">
<path d="M184.5 31h0"></path>
<path d="M240.5 31h0"></path>
<rect x="184.5" y="20" width="56" height="22"></rect>
<text x="212.5" y="35">INTO</text>
</g>
<path d="M240.5 31h10"></path>
<path d="M250.5 31h10"></path>
<g class="terminal ">
<path d="M260.5 31h0"></path>
<path d="M361.5 31h0"></path>
<rect x="260.5" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="311" y="35">tableName</text>
</g>
</g>
<path d="M384 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-316a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 111h10"></path>
<path d="M374 111h10"></path>
<g>
<path d="M78 111h0"></path>
<path d="M374 111h0"></path>
<path d="M78 111a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 75h224"></path>
</g>
<path d="M338 75a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 111h36"></path>
<g>
<path d="M114 111h0"></path>
<g>
<path d="M114 111h10"></path>
<path d="M328 111h10"></path>
<g class="comment ">
<path d="M124 111h0"></path>
<path d="M141 111h0"></path>
<text x="132.5" y="116" class="comment">(</text>
</g>
<path d="M141 111h10"></path>
<path d="M151 111h10"></path>
<g>
<path d="M161 111h0"></path>
<path d="M291 111h0"></path>
<path d="M161 111h18"></path>
<g>
<path d="M179 111h0"></path>
<g>
<path d="M179 111h10"></path>
<path d="M263 111h10"></path>
<g class="terminal ">
<path d="M189 111h0"></path>
<path d="M263 111h0"></path>
<rect x="189" y="100" width="74" height="22" rx="10" ry="10"></rect>
<text x="226" y="115">column</text>
</g>
</g>
<path d="M273 111h0"></path>
</g>
<path d="M273 111h18"></path>
<path d="M179 111a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M179 147h38.5"></path>
<path d="M234.5 147h38.5"></path>
<text x="226" y="152" class="comment">,</text>
</g>
<path d="M273 147a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M291 111h10"></path>
<path d="M301 111h10"></path>
<g class="comment ">
<path d="M311 111h0"></path>
<path d="M328 111h0"></path>
<text x="319.5" y="116" class="comment">)</text>
</g>
</g>
<path d="M338 111h0"></path>
</g>
<path d="M338 111h36"></path>
</g>
</g>
<path d="M384 111a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-316a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 191h125.5"></path>
<path d="M258.5 191h125.5"></path>
<g class="terminal ">
<path d="M193.5 191h0"></path>
<path d="M258.5 191h0"></path>
<rect x="193.5" y="180" width="65" height="22" rx="10" ry="10"></rect>
<text x="226" y="195">query</text>
</g>
</g>
<path d="M384 191h18"></path>
<path d="M402 191h0"></path>
</g>
<path d="M402 191h10"></path>
<path d="M 412 191 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="506" height="222" viewBox="0 0 506 222">
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
<path d="M68 103h86.5"></path>
<path d="M351.5 103h86.5"></path>
<g class="non-terminal ">
<path d="M154.5 103h0"></path>
<path d="M201.5 103h0"></path>
<rect x="154.5" y="92" width="47" height="22"></rect>
<text x="178" y="107">SET</text>
</g>
<path d="M201.5 103h10"></path>
<path d="M211.5 103h10"></path>
<g>
<path d="M221.5 103h0"></path>
<path d="M351.5 103h0"></path>
<path d="M221.5 103h18"></path>
<g>
<path d="M239.5 103h0"></path>
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
<path d="M333.5 103h0"></path>
</g>
<path d="M333.5 103h18"></path>
<path d="M239.5 103a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M239.5 139h38.5"></path>
<path d="M295 139h38.5"></path>
<text x="286.5" y="144" class="comment">,</text>
</g>
<path d="M333.5 139a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M438 103a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-370a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 191h10"></path>
<path d="M428 191h10"></path>
<g>
<path d="M78 191h0"></path>
<path d="M428 191h0"></path>
<path d="M78 191a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 155h278"></path>
</g>
<path d="M392 155a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 191h36"></path>
<g>
<path d="M114 191h0"></path>
<g>
<path d="M114 191h10"></path>
<path d="M382 191h10"></path>
<g class="non-terminal ">
<path d="M124 191h0"></path>
<path d="M189 191h0"></path>
<rect x="124" y="180" width="65" height="22"></rect>
<text x="156.5" y="195">WHERE</text>
</g>
<path d="M189 191h10"></path>
<path d="M199 191h10"></path>
<g class="terminal ">
<path d="M209 191h0"></path>
<path d="M382 191h0"></path>
<rect x="209" y="180" width="173" height="22" rx="10" ry="10"></rect>
<text x="295.5" y="195">booleanExpression</text>
</g>
</g>
<path d="M392 191h0"></path>
</g>
<path d="M392 191h36"></path>
</g>
</g>
<path d="M438 191h18"></path>
<path d="M456 191h0"></path>
</g>
<path d="M456 191h10"></path>
<path d="M 466 191 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="397" height="62" viewBox="0 0 397 62">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M337 31h10"></path>
<g class="terminal ">
<path d="M60 31h0"></path>
<path d="M170 31h0"></path>
<rect x="60" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="115" y="35">identifier</text>
</g>
<path d="M170 31h10"></path>
<path d="M180 31h10"></path>
<g class="comment ">
<path d="M190 31h0"></path>
<path d="M207 31h0"></path>
<text x="198.5" y="36" class="comment">=</text>
</g>
<path d="M207 31h10"></path>
<path d="M217 31h10"></path>
<g class="terminal ">
<path d="M227 31h0"></path>
<path d="M337 31h0"></path>
<rect x="227" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="282" y="35">expression</text>
</g>
</g>
<path d="M347 31h0"></path>
</g>
<path d="M347 31h10"></path>
<path d="M 357 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="734" height="175" viewBox="0 0 734 175">
<g transform="translate(.5 .5)">
<g>
<path d="M20 54v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 64h10"></path>
<g>
<path d="M50 64h0"></path>
<path d="M50 64h18"></path>
<g>
<path d="M68 64h10"></path>
<path d="M656 64h10"></path>
<g class="non-terminal ">
<path d="M78 64h0"></path>
<path d="M152 64h0"></path>
<rect x="78" y="53" width="74" height="22"></rect>
<text x="115" y="68">DELETE</text>
</g>
<path d="M152 64h10"></path>
<path d="M162 64h10"></path>
<g class="non-terminal ">
<path d="M172 64h0"></path>
<path d="M228 64h0"></path>
<rect x="172" y="53" width="56" height="22"></rect>
<text x="200" y="68">FROM</text>
</g>
<path d="M228 64h10"></path>
<path d="M238 64h10"></path>
<g class="terminal ">
<path d="M248 64h0"></path>
<path d="M349 64h0"></path>
<rect x="248" y="53" width="101" height="22" rx="10" ry="10"></rect>
<text x="298.5" y="68">tableName</text>
</g>
<path d="M349 64h10"></path>
<g>
<path d="M359 64h0"></path>
<path d="M656 64h0"></path>
<path d="M359 64a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M395 20h225"></path>
</g>
<path d="M620 20a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M359 64h36"></path>
<g>
<path d="M395 64h0"></path>
<g>
<path d="M395 64h10"></path>
<path d="M610 64h10"></path>
<g>
<path d="M405 64h0"></path>
<path d="M535 64h0"></path>
<path d="M405 64a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M441 28h58"></path>
</g>
<path d="M499 28a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M405 64h36"></path>
<g>
<path d="M441 64h0"></path>
<g>
<path d="M441 64h10"></path>
<path d="M489 64h10"></path>
<g class="non-terminal ">
<path d="M451 64h0"></path>
<path d="M489 64h0"></path>
<rect x="451" y="53" width="38" height="22"></rect>
<text x="470" y="68">AS</text>
</g>
</g>
<path d="M499 64h0"></path>
</g>
<path d="M499 64h36"></path>
</g>
<path d="M535 64h10"></path>
<g class="terminal ">
<path d="M545 64h0"></path>
<path d="M610 64h0"></path>
<rect x="545" y="53" width="65" height="22" rx="10" ry="10"></rect>
<text x="577.5" y="68">alias</text>
</g>
</g>
<path d="M620 64h0"></path>
</g>
<path d="M620 64h36"></path>
</g>
</g>
<path d="M666 64a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-598a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 144h124"></path>
<path d="M542 144h124"></path>
<g>
<path d="M192 144h0"></path>
<path d="M542 144h0"></path>
<path d="M192 144a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M228 108h278"></path>
</g>
<path d="M506 108a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M192 144h36"></path>
<g>
<path d="M228 144h0"></path>
<g>
<path d="M228 144h10"></path>
<path d="M496 144h10"></path>
<g class="non-terminal ">
<path d="M238 144h0"></path>
<path d="M303 144h0"></path>
<rect x="238" y="133" width="65" height="22"></rect>
<text x="270.5" y="148">WHERE</text>
</g>
<path d="M303 144h10"></path>
<path d="M313 144h10"></path>
<g class="terminal ">
<path d="M323 144h0"></path>
<path d="M496 144h0"></path>
<rect x="323" y="133" width="173" height="22" rx="10" ry="10"></rect>
<text x="409.5" y="148">booleanExpression</text>
</g>
</g>
<path d="M506 144h0"></path>
</g>
<path d="M506 144h36"></path>
</g>
</g>
<path d="M666 144h18"></path>
<path d="M684 144h0"></path>
</g>
<path d="M684 144h10"></path>
<path d="M 694 144 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1020" height="1078" viewBox="0 0 1020 1078">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M980 1015h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h0"></path>
<path d="M76 31h18"></path>
<g>
<path d="M94 31h379"></path>
<path d="M547 31h379"></path>
<g class="terminal ">
<path d="M473 31h0"></path>
<path d="M547 31h0"></path>
<rect x="473" y="20" width="74" height="22" rx="10" ry="10"></rect>
<text x="510" y="35">values</text>
</g>
</g>
<path d="M926 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-832a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 103h261.5"></path>
<path d="M664.5 103h261.5"></path>
<g class="non-terminal ">
<path d="M355.5 103h0"></path>
<path d="M411.5 103h0"></path>
<rect x="355.5" y="92" width="56" height="22"></rect>
<text x="383.5" y="107">WITH</text>
</g>
<path d="M411.5 103h10"></path>
<path d="M421.5 103h10"></path>
<g>
<path d="M431.5 103h0"></path>
<path d="M579.5 103h0"></path>
<path d="M431.5 103h18"></path>
<g>
<path d="M449.5 103h0"></path>
<g>
<path d="M449.5 103h10"></path>
<path d="M551.5 103h10"></path>
<g class="terminal ">
<path d="M459.5 103h0"></path>
<path d="M551.5 103h0"></path>
<rect x="459.5" y="92" width="92" height="22" rx="10" ry="10"></rect>
<text x="505.5" y="107">withItem</text>
</g>
</g>
<path d="M561.5 103h0"></path>
</g>
<path d="M561.5 103h18"></path>
<path d="M449.5 103a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M449.5 139h47.5"></path>
<path d="M514 139h47.5"></path>
<text x="505.5" y="144" class="comment">,</text>
</g>
<path d="M561.5 139a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M579.5 103h10"></path>
<path d="M589.5 103h10"></path>
<g class="terminal ">
<path d="M599.5 103h0"></path>
<path d="M664.5 103h0"></path>
<rect x="599.5" y="92" width="65" height="22" rx="10" ry="10"></rect>
<text x="632" y="107">query</text>
</g>
</g>
<path d="M926 103a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-832a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 183h10"></path>
<path d="M916 935h10"></path>
<g>
<path d="M104 183h0"></path>
<path d="M916 935h0"></path>
<g>
<path d="M104 183h0"></path>
<path d="M916 935h0"></path>
<path d="M104 183h36"></path>
<g>
<path d="M140 183h0"></path>
<path d="M140 183h18"></path>
<g>
<path d="M158 183h301.5"></path>
<path d="M560.5 183h301.5"></path>
<g class="terminal ">
<path d="M459.5 183h0"></path>
<path d="M560.5 183h0"></path>
<rect x="459.5" y="172" width="101" height="22" rx="10" ry="10"></rect>
<text x="510" y="187">undefined</text>
</g>
</g>
<path d="M862 183a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-704a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M158 255h254.5"></path>
<path d="M607.5 255h254.5"></path>
<g class="terminal ">
<path d="M412.5 255h0"></path>
<path d="M486.5 255h0"></path>
<rect x="412.5" y="244" width="74" height="22" rx="10" ry="10"></rect>
<text x="449.5" y="259">select</text>
</g>
<path d="M486.5 255h10"></path>
<path d="M496.5 255h10"></path>
<g class="terminal ">
<path d="M506.5 255h0"></path>
<path d="M607.5 255h0"></path>
<rect x="506.5" y="244" width="101" height="22" rx="10" ry="10"></rect>
<text x="557" y="259">undefined</text>
</g>
</g>
<path d="M862 255a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-704a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M158 327h205"></path>
<path d="M657 327h205"></path>
<g class="terminal ">
<path d="M363 327h0"></path>
<path d="M536 327h0"></path>
<rect x="363" y="316" width="173" height="22" rx="10" ry="10"></rect>
<text x="449.5" y="331">selectWithoutFrom</text>
</g>
<path d="M536 327h10"></path>
<path d="M546 327h10"></path>
<g class="terminal ">
<path d="M556 327h0"></path>
<path d="M657 327h0"></path>
<rect x="556" y="316" width="101" height="22" rx="10" ry="10"></rect>
<text x="606.5" y="331">undefined</text>
</g>
</g>
<path d="M862 327a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-704a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M158 407h28"></path>
<path d="M834 479h28"></path>
<g class="terminal ">
<path d="M186 407h0"></path>
<path d="M251 407h0"></path>
<rect x="186" y="396" width="65" height="22" rx="10" ry="10"></rect>
<text x="218.5" y="411">query</text>
</g>
<path d="M251 407h10"></path>
<path d="M261 407h10"></path>
<g class="non-terminal ">
<path d="M271 407h0"></path>
<path d="M336 407h0"></path>
<rect x="271" y="396" width="65" height="22"></rect>
<text x="303.5" y="411">UNION</text>
</g>
<path d="M336 407h10"></path>
<g>
<path d="M346 407h0"></path>
<path d="M638 479h0"></path>
<path d="M346 407a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M382 371h220"></path>
</g>
<path d="M602 371a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M346 407h36"></path>
<g>
<path d="M382 407h0"></path>
<path d="M602 479h0"></path>
<path d="M382 407h36"></path>
<g>
<path d="M418 407h0"></path>
<path d="M418 407h18"></path>
<g>
<path d="M436 407h32.5"></path>
<path d="M515.5 407h32.5"></path>
<g class="non-terminal ">
<path d="M468.5 407h0"></path>
<path d="M515.5 407h0"></path>
<rect x="468.5" y="396" width="47" height="22"></rect>
<text x="492" y="411">ALL</text>
</g>
</g>
<path d="M548 407a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-112a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M436 479h10"></path>
<path d="M538 479h10"></path>
<g class="non-terminal ">
<path d="M446 479h0"></path>
<path d="M538 479h0"></path>
<rect x="446" y="468" width="92" height="22"></rect>
<text x="492" y="483">DISTINCT</text>
</g>
</g>
<path d="M548 479h18"></path>
<path d="M566 479h0"></path>
</g>
<path d="M566 479h36"></path>
</g>
<path d="M602 479h36"></path>
</g>
<path d="M638 479h10"></path>
<g class="terminal ">
<path d="M648 479h0"></path>
<path d="M713 479h0"></path>
<rect x="648" y="468" width="65" height="22" rx="10" ry="10"></rect>
<text x="680.5" y="483">query</text>
</g>
<path d="M713 479h10"></path>
<path d="M723 479h10"></path>
<g class="terminal ">
<path d="M733 479h0"></path>
<path d="M834 479h0"></path>
<rect x="733" y="468" width="101" height="22" rx="10" ry="10"></rect>
<text x="783.5" y="483">undefined</text>
</g>
</g>
<path d="M862 479a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-704a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M158 559h23.5"></path>
<path d="M838.5 631h23.5"></path>
<g class="terminal ">
<path d="M181.5 559h0"></path>
<path d="M246.5 559h0"></path>
<rect x="181.5" y="548" width="65" height="22" rx="10" ry="10"></rect>
<text x="214" y="563">query</text>
</g>
<path d="M246.5 559h10"></path>
<path d="M256.5 559h10"></path>
<g class="non-terminal ">
<path d="M266.5 559h0"></path>
<path d="M340.5 559h0"></path>
<rect x="266.5" y="548" width="74" height="22"></rect>
<text x="303.5" y="563">EXCEPT</text>
</g>
<path d="M340.5 559h10"></path>
<g>
<path d="M350.5 559h0"></path>
<path d="M642.5 631h0"></path>
<path d="M350.5 559a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M386.5 523h220"></path>
</g>
<path d="M606.5 523a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M350.5 559h36"></path>
<g>
<path d="M386.5 559h0"></path>
<path d="M606.5 631h0"></path>
<path d="M386.5 559h36"></path>
<g>
<path d="M422.5 559h0"></path>
<path d="M422.5 559h18"></path>
<g>
<path d="M440.5 559h32.5"></path>
<path d="M520 559h32.5"></path>
<g class="non-terminal ">
<path d="M473 559h0"></path>
<path d="M520 559h0"></path>
<rect x="473" y="548" width="47" height="22"></rect>
<text x="496.5" y="563">ALL</text>
</g>
</g>
<path d="M552.5 559a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-112a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M440.5 631h10"></path>
<path d="M542.5 631h10"></path>
<g class="non-terminal ">
<path d="M450.5 631h0"></path>
<path d="M542.5 631h0"></path>
<rect x="450.5" y="620" width="92" height="22"></rect>
<text x="496.5" y="635">DISTINCT</text>
</g>
</g>
<path d="M552.5 631h18"></path>
<path d="M570.5 631h0"></path>
</g>
<path d="M570.5 631h36"></path>
</g>
<path d="M606.5 631h36"></path>
</g>
<path d="M642.5 631h10"></path>
<g class="terminal ">
<path d="M652.5 631h0"></path>
<path d="M717.5 631h0"></path>
<rect x="652.5" y="620" width="65" height="22" rx="10" ry="10"></rect>
<text x="685" y="635">query</text>
</g>
<path d="M717.5 631h10"></path>
<path d="M727.5 631h10"></path>
<g class="terminal ">
<path d="M737.5 631h0"></path>
<path d="M838.5 631h0"></path>
<rect x="737.5" y="620" width="101" height="22" rx="10" ry="10"></rect>
<text x="788" y="635">undefined</text>
</g>
</g>
<path d="M862 631a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-704a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M158 711h28"></path>
<path d="M834 783h28"></path>
<g class="terminal ">
<path d="M186 711h0"></path>
<path d="M251 711h0"></path>
<rect x="186" y="700" width="65" height="22" rx="10" ry="10"></rect>
<text x="218.5" y="715">query</text>
</g>
<path d="M251 711h10"></path>
<path d="M261 711h10"></path>
<g class="non-terminal ">
<path d="M271 711h0"></path>
<path d="M336 711h0"></path>
<rect x="271" y="700" width="65" height="22"></rect>
<text x="303.5" y="715">MINUS</text>
</g>
<path d="M336 711h10"></path>
<g>
<path d="M346 711h0"></path>
<path d="M638 783h0"></path>
<path d="M346 711a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M382 675h220"></path>
</g>
<path d="M602 675a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M346 711h36"></path>
<g>
<path d="M382 711h0"></path>
<path d="M602 783h0"></path>
<path d="M382 711h36"></path>
<g>
<path d="M418 711h0"></path>
<path d="M418 711h18"></path>
<g>
<path d="M436 711h32.5"></path>
<path d="M515.5 711h32.5"></path>
<g class="non-terminal ">
<path d="M468.5 711h0"></path>
<path d="M515.5 711h0"></path>
<rect x="468.5" y="700" width="47" height="22"></rect>
<text x="492" y="715">ALL</text>
</g>
</g>
<path d="M548 711a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-112a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M436 783h10"></path>
<path d="M538 783h10"></path>
<g class="non-terminal ">
<path d="M446 783h0"></path>
<path d="M538 783h0"></path>
<rect x="446" y="772" width="92" height="22"></rect>
<text x="492" y="787">DISTINCT</text>
</g>
</g>
<path d="M548 783h18"></path>
<path d="M566 783h0"></path>
</g>
<path d="M566 783h36"></path>
</g>
<path d="M602 783h36"></path>
</g>
<path d="M638 783h10"></path>
<g class="terminal ">
<path d="M648 783h0"></path>
<path d="M713 783h0"></path>
<rect x="648" y="772" width="65" height="22" rx="10" ry="10"></rect>
<text x="680.5" y="787">query</text>
</g>
<path d="M713 783h10"></path>
<path d="M723 783h10"></path>
<g class="terminal ">
<path d="M733 783h0"></path>
<path d="M834 783h0"></path>
<rect x="733" y="772" width="101" height="22" rx="10" ry="10"></rect>
<text x="783.5" y="787">undefined</text>
</g>
</g>
<path d="M862 783a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-704a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M158 863h10"></path>
<path d="M852 935h10"></path>
<g class="terminal ">
<path d="M168 863h0"></path>
<path d="M233 863h0"></path>
<rect x="168" y="852" width="65" height="22" rx="10" ry="10"></rect>
<text x="200.5" y="867">query</text>
</g>
<path d="M233 863h10"></path>
<path d="M243 863h10"></path>
<g class="non-terminal ">
<path d="M253 863h0"></path>
<path d="M354 863h0"></path>
<rect x="253" y="852" width="101" height="22"></rect>
<text x="303.5" y="867">INTERSECT</text>
</g>
<path d="M354 863h10"></path>
<g>
<path d="M364 863h0"></path>
<path d="M656 935h0"></path>
<path d="M364 863a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M400 827h220"></path>
</g>
<path d="M620 827a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M364 863h36"></path>
<g>
<path d="M400 863h0"></path>
<path d="M620 935h0"></path>
<path d="M400 863h36"></path>
<g>
<path d="M436 863h0"></path>
<path d="M436 863h18"></path>
<g>
<path d="M454 863h32.5"></path>
<path d="M533.5 863h32.5"></path>
<g class="non-terminal ">
<path d="M486.5 863h0"></path>
<path d="M533.5 863h0"></path>
<rect x="486.5" y="852" width="47" height="22"></rect>
<text x="510" y="867">ALL</text>
</g>
</g>
<path d="M566 863a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-112a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M454 935h10"></path>
<path d="M556 935h10"></path>
<g class="non-terminal ">
<path d="M464 935h0"></path>
<path d="M556 935h0"></path>
<rect x="464" y="924" width="92" height="22"></rect>
<text x="510" y="939">DISTINCT</text>
</g>
</g>
<path d="M566 935h18"></path>
<path d="M584 935h0"></path>
</g>
<path d="M584 935h36"></path>
</g>
<path d="M620 935h36"></path>
</g>
<path d="M656 935h10"></path>
<g class="terminal ">
<path d="M666 935h0"></path>
<path d="M731 935h0"></path>
<rect x="666" y="924" width="65" height="22" rx="10" ry="10"></rect>
<text x="698.5" y="939">query</text>
</g>
<path d="M731 935h10"></path>
<path d="M741 935h10"></path>
<g class="terminal ">
<path d="M751 935h0"></path>
<path d="M852 935h0"></path>
<rect x="751" y="924" width="101" height="22" rx="10" ry="10"></rect>
<text x="801.5" y="939">undefined</text>
</g>
</g>
<path d="M862 935h18"></path>
<path d="M880 935h0"></path>
</g>
<path d="M880 935h36"></path>
</g>
</g>
</g>
<path d="M926 935a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-832a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 1015h220"></path>
<path d="M706 1015h220"></path>
<g>
<path d="M314 1015h0"></path>
<path d="M706 1015h0"></path>
<path d="M314 1015a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M350 979h320"></path>
</g>
<path d="M670 979a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M314 1015h36"></path>
<g>
<path d="M350 1015h0"></path>
<g>
<path d="M350 1015h10"></path>
<path d="M660 1015h10"></path>
<g class="non-terminal ">
<path d="M360 1015h0"></path>
<path d="M425 1015h0"></path>
<rect x="360" y="1004" width="65" height="22"></rect>
<text x="392.5" y="1019">ORDER</text>
</g>
<path d="M425 1015h10"></path>
<path d="M435 1015h10"></path>
<g class="non-terminal ">
<path d="M445 1015h0"></path>
<path d="M483 1015h0"></path>
<rect x="445" y="1004" width="38" height="22"></rect>
<text x="464" y="1019">BY</text>
</g>
<path d="M483 1015h10"></path>
<path d="M493 1015h10"></path>
<g>
<path d="M503 1015h0"></path>
<path d="M660 1015h0"></path>
<path d="M503 1015h18"></path>
<g>
<path d="M521 1015h0"></path>
<g>
<path d="M521 1015h10"></path>
<path d="M632 1015h10"></path>
<g class="terminal ">
<path d="M531 1015h0"></path>
<path d="M632 1015h0"></path>
<rect x="531" y="1004" width="101" height="22" rx="10" ry="10"></rect>
<text x="581.5" y="1019">orderItem</text>
</g>
</g>
<path d="M642 1015h0"></path>
</g>
<path d="M642 1015h18"></path>
<path d="M521 1015a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M521 1051h52"></path>
<path d="M590 1051h52"></path>
<text x="581.5" y="1056" class="comment">,</text>
</g>
<path d="M642 1051a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M670 1015h0"></path>
</g>
<path d="M670 1015h36"></path>
</g>
</g>
<path d="M926 1015h18"></path>
<path d="M944 1015h0"></path>
</g>
<path d="M944 1015h36"></path>
<path d="M40 31a18 18 0 0 1 18 18v1036a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 1103h161"></path>
<path d="M783 1175h161"></path>
<g>
<path d="M237 1103h0"></path>
<path d="M783 1175h0"></path>
<path d="M237 1103a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M273 1059h474"></path>
</g>
<path d="M747 1059a18 18 0 0 1 18 18v80a18 18 0 0 0 18 18"></path>
<path d="M237 1103h36"></path>
<g>
<path d="M273 1103h0"></path>
<g>
<path d="M273 1103h10"></path>
<path d="M737 1175h10"></path>
<g class="non-terminal ">
<path d="M283 1103h0"></path>
<path d="M348 1103h0"></path>
<rect x="283" y="1092" width="65" height="22"></rect>
<text x="315.5" y="1107">LIMIT</text>
</g>
<path d="M348 1103h10"></path>
<path d="M358 1103h10"></path>
<g>
<path d="M368 1103h0"></path>
<path d="M737 1175h0"></path>
<g>
<path d="M368 1103h0"></path>
<path d="M737 1175h0"></path>
<path d="M368 1103h36"></path>
<g>
<path d="M404 1103h0"></path>
<path d="M404 1103h18"></path>
<g>
<path d="M422 1103h10"></path>
<path d="M673 1103h10"></path>
<g>
<path d="M432 1103h0"></path>
<path d="M598 1103h0"></path>
<path d="M432 1103a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M468 1067h94"></path>
</g>
<path d="M562 1067a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M432 1103h36"></path>
<g>
<path d="M468 1103h0"></path>
<g>
<path d="M468 1103h10"></path>
<path d="M552 1103h10"></path>
<g class="terminal ">
<path d="M478 1103h0"></path>
<path d="M552 1103h0"></path>
<rect x="478" y="1092" width="74" height="22" rx="10" ry="10"></rect>
<text x="515" y="1107">start,</text>
</g>
</g>
<path d="M562 1103h0"></path>
</g>
<path d="M562 1103h36"></path>
</g>
<path d="M598 1103h10"></path>
<g class="terminal ">
<path d="M608 1103h0"></path>
<path d="M673 1103h0"></path>
<rect x="608" y="1092" width="65" height="22" rx="10" ry="10"></rect>
<text x="640.5" y="1107">count</text>
</g>
</g>
<path d="M683 1103a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-261a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M422 1175h107"></path>
<path d="M576 1175h107"></path>
<g class="non-terminal ">
<path d="M529 1175h0"></path>
<path d="M576 1175h0"></path>
<rect x="529" y="1164" width="47" height="22"></rect>
<text x="552.5" y="1179">ALL</text>
</g>
</g>
<path d="M683 1175h18"></path>
<path d="M701 1175h0"></path>
</g>
<path d="M701 1175h36"></path>
</g>
</g>
</g>
<path d="M747 1175h0"></path>
</g>
<path d="M747 1175h36"></path>
</g>
</g>
<path d="M944 1175a18 18 0 0 0 18 -18v-124a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v1080a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 1147h206.5"></path>
<path d="M737.5 1219h206.5"></path>
<g>
<path d="M282.5 1147h0"></path>
<path d="M737.5 1219h0"></path>
<path d="M282.5 1147a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M318.5 1111h383"></path>
</g>
<path d="M701.5 1111a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M282.5 1147h36"></path>
<g>
<path d="M318.5 1147h0"></path>
<g>
<path d="M318.5 1147h10"></path>
<path d="M691.5 1219h10"></path>
<g class="non-terminal ">
<path d="M328.5 1147h0"></path>
<path d="M402.5 1147h0"></path>
<rect x="328.5" y="1136" width="74" height="22"></rect>
<text x="365.5" y="1151">OFFSET</text>
</g>
<path d="M402.5 1147h10"></path>
<path d="M412.5 1147h10"></path>
<g class="terminal ">
<path d="M422.5 1147h0"></path>
<path d="M487.5 1147h0"></path>
<rect x="422.5" y="1136" width="65" height="22" rx="10" ry="10"></rect>
<text x="455" y="1151">start</text>
</g>
<path d="M487.5 1147h10"></path>
<path d="M497.5 1147h10"></path>
<g>
<path d="M507.5 1147h0"></path>
<path d="M691.5 1219h0"></path>
<g>
<path d="M507.5 1147h0"></path>
<path d="M691.5 1219h0"></path>
<path d="M507.5 1147h36"></path>
<g>
<path d="M543.5 1147h0"></path>
<path d="M543.5 1147h18"></path>
<g>
<path d="M561.5 1147h14.5"></path>
<path d="M623 1147h14.5"></path>
<g class="non-terminal ">
<path d="M576 1147h0"></path>
<path d="M623 1147h0"></path>
<rect x="576" y="1136" width="47" height="22"></rect>
<text x="599.5" y="1151">ROW</text>
</g>
</g>
<path d="M637.5 1147a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-76a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M561.5 1219h10"></path>
<path d="M627.5 1219h10"></path>
<g class="non-terminal ">
<path d="M571.5 1219h0"></path>
<path d="M627.5 1219h0"></path>
<rect x="571.5" y="1208" width="56" height="22"></rect>
<text x="599.5" y="1223">ROWS</text>
</g>
</g>
<path d="M637.5 1219h18"></path>
<path d="M655.5 1219h0"></path>
</g>
<path d="M655.5 1219h36"></path>
</g>
</g>
</g>
<path d="M701.5 1219h0"></path>
</g>
<path d="M701.5 1219h36"></path>
</g>
</g>
<path d="M944 1219a18 18 0 0 0 18 -18v-168a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v1124a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 1191h66.5"></path>
<path d="M877.5 1335h66.5"></path>
<g>
<path d="M142.5 1191h0"></path>
<path d="M877.5 1335h0"></path>
<path d="M142.5 1191a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M178.5 1155h663"></path>
</g>
<path d="M841.5 1155a18 18 0 0 1 18 18v144a18 18 0 0 0 18 18"></path>
<path d="M142.5 1191h36"></path>
<g>
<path d="M178.5 1191h0"></path>
<g>
<path d="M178.5 1191h10"></path>
<path d="M831.5 1335h10"></path>
<g class="non-terminal ">
<path d="M188.5 1191h0"></path>
<path d="M253.5 1191h0"></path>
<rect x="188.5" y="1180" width="65" height="22"></rect>
<text x="221" y="1195">FETCH</text>
</g>
<path d="M253.5 1191h10"></path>
<path d="M263.5 1191h10"></path>
<g>
<path d="M273.5 1191h0"></path>
<path d="M466.5 1263h0"></path>
<g>
<path d="M273.5 1191h0"></path>
<path d="M466.5 1263h0"></path>
<path d="M273.5 1191h36"></path>
<g>
<path d="M309.5 1191h0"></path>
<path d="M309.5 1191h18"></path>
<g>
<path d="M327.5 1191h10"></path>
<path d="M402.5 1191h10"></path>
<g class="non-terminal ">
<path d="M337.5 1191h0"></path>
<path d="M402.5 1191h0"></path>
<rect x="337.5" y="1180" width="65" height="22"></rect>
<text x="370" y="1195">FIRST</text>
</g>
</g>
<path d="M412.5 1191a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-85a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M327.5 1263h14.5"></path>
<path d="M398 1263h14.5"></path>
<g class="non-terminal ">
<path d="M342 1263h0"></path>
<path d="M398 1263h0"></path>
<rect x="342" y="1252" width="56" height="22"></rect>
<text x="370" y="1267">NEXT</text>
</g>
</g>
<path d="M412.5 1263h18"></path>
<path d="M430.5 1263h0"></path>
</g>
<path d="M430.5 1263h36"></path>
</g>
</g>
<path d="M466.5 1263h10"></path>
<path d="M476.5 1263h10"></path>
<g class="terminal ">
<path d="M486.5 1263h0"></path>
<path d="M551.5 1263h0"></path>
<rect x="486.5" y="1252" width="65" height="22" rx="10" ry="10"></rect>
<text x="519" y="1267">count</text>
</g>
<path d="M551.5 1263h10"></path>
<path d="M561.5 1263h10"></path>
<g>
<path d="M571.5 1263h0"></path>
<path d="M755.5 1335h0"></path>
<g>
<path d="M571.5 1263h0"></path>
<path d="M755.5 1335h0"></path>
<path d="M571.5 1263h36"></path>
<g>
<path d="M607.5 1263h0"></path>
<path d="M607.5 1263h18"></path>
<g>
<path d="M625.5 1263h14.5"></path>
<path d="M687 1263h14.5"></path>
<g class="non-terminal ">
<path d="M640 1263h0"></path>
<path d="M687 1263h0"></path>
<rect x="640" y="1252" width="47" height="22"></rect>
<text x="663.5" y="1267">ROW</text>
</g>
</g>
<path d="M701.5 1263a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-76a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M625.5 1335h10"></path>
<path d="M691.5 1335h10"></path>
<g class="non-terminal ">
<path d="M635.5 1335h0"></path>
<path d="M691.5 1335h0"></path>
<rect x="635.5" y="1324" width="56" height="22"></rect>
<text x="663.5" y="1339">ROWS</text>
</g>
</g>
<path d="M701.5 1335h18"></path>
<path d="M719.5 1335h0"></path>
</g>
<path d="M719.5 1335h36"></path>
</g>
</g>
<path d="M755.5 1335h10"></path>
<path d="M765.5 1335h10"></path>
<g class="non-terminal ">
<path d="M775.5 1335h0"></path>
<path d="M831.5 1335h0"></path>
<rect x="775.5" y="1324" width="56" height="22"></rect>
<text x="803.5" y="1339">ONLY</text>
</g>
</g>
<path d="M841.5 1335h0"></path>
</g>
<path d="M841.5 1335h36"></path>
</g>
</g>
<path d="M944 1335a18 18 0 0 0 18 -18v-284a18 18 0 0 1 18 -18"></path>
</g>
<path d="M 980 1015 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="452" height="222" viewBox="0 0 452 222">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h130"></path>
<path d="M254 31h130"></path>
<g class="terminal ">
<path d="M198 31h0"></path>
<path d="M254 31h0"></path>
<rect x="198" y="20" width="56" height="22" rx="10" ry="10"></rect>
<text x="226" y="35">name</text>
</g>
</g>
<path d="M384 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-316a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 111h10"></path>
<path d="M374 111h10"></path>
<g>
<path d="M78 111h0"></path>
<path d="M374 111h0"></path>
<path d="M78 111a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 75h224"></path>
</g>
<path d="M338 75a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 111h36"></path>
<g>
<path d="M114 111h0"></path>
<g>
<path d="M114 111h10"></path>
<path d="M328 111h10"></path>
<g class="comment ">
<path d="M124 111h0"></path>
<path d="M141 111h0"></path>
<text x="132.5" y="116" class="comment">(</text>
</g>
<path d="M141 111h10"></path>
<path d="M151 111h10"></path>
<g>
<path d="M161 111h0"></path>
<path d="M291 111h0"></path>
<path d="M161 111h18"></path>
<g>
<path d="M179 111h0"></path>
<g>
<path d="M179 111h10"></path>
<path d="M263 111h10"></path>
<g class="terminal ">
<path d="M189 111h0"></path>
<path d="M263 111h0"></path>
<rect x="189" y="100" width="74" height="22" rx="10" ry="10"></rect>
<text x="226" y="115">column</text>
</g>
</g>
<path d="M273 111h0"></path>
</g>
<path d="M273 111h18"></path>
<path d="M179 111a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M179 147h38.5"></path>
<path d="M234.5 147h38.5"></path>
<text x="226" y="152" class="comment">,</text>
</g>
<path d="M273 147a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M291 111h10"></path>
<path d="M301 111h10"></path>
<g class="comment ">
<path d="M311 111h0"></path>
<path d="M328 111h0"></path>
<text x="319.5" y="116" class="comment">)</text>
</g>
</g>
<path d="M338 111h0"></path>
</g>
<path d="M338 111h36"></path>
</g>
</g>
<path d="M384 111a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-316a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 191h59.5"></path>
<path d="M324.5 191h59.5"></path>
<g class="non-terminal ">
<path d="M127.5 191h0"></path>
<path d="M165.5 191h0"></path>
<rect x="127.5" y="180" width="38" height="22"></rect>
<text x="146.5" y="195">AS</text>
</g>
<path d="M165.5 191h10"></path>
<path d="M175.5 191h10"></path>
<g class="comment ">
<path d="M185.5 191h0"></path>
<path d="M202.5 191h0"></path>
<text x="194" y="196" class="comment">(</text>
</g>
<path d="M202.5 191h10"></path>
<path d="M212.5 191h10"></path>
<g class="terminal ">
<path d="M222.5 191h0"></path>
<path d="M287.5 191h0"></path>
<rect x="222.5" y="180" width="65" height="22" rx="10" ry="10"></rect>
<text x="255" y="195">query</text>
</g>
<path d="M287.5 191h10"></path>
<path d="M297.5 191h10"></path>
<g class="comment ">
<path d="M307.5 191h0"></path>
<path d="M324.5 191h0"></path>
<text x="316" y="196" class="comment">)</text>
</g>
</g>
<path d="M384 191h18"></path>
<path d="M402 191h0"></path>
</g>
<path d="M402 191h10"></path>
<path d="M 412 191 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="846" height="230" viewBox="0 0 846 230">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M786 200h10"></path>
<g class="terminal ">
<path d="M60 56h0"></path>
<path d="M170 56h0"></path>
<rect x="60" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="115" y="60">expression</text>
</g>
<path d="M170 56h10"></path>
<g>
<path d="M180 56h0"></path>
<path d="M436 128h0"></path>
<path d="M180 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M216 20h184"></path>
</g>
<path d="M400 20a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M180 56h36"></path>
<g>
<path d="M216 56h0"></path>
<path d="M400 128h0"></path>
<path d="M216 56h36"></path>
<g>
<path d="M252 56h0"></path>
<path d="M252 56h18"></path>
<g>
<path d="M270 56h14.5"></path>
<path d="M331.5 56h14.5"></path>
<g class="non-terminal ">
<path d="M284.5 56h0"></path>
<path d="M331.5 56h0"></path>
<rect x="284.5" y="45" width="47" height="22"></rect>
<text x="308" y="60">ASC</text>
</g>
</g>
<path d="M346 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-76a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M270 128h10"></path>
<path d="M336 128h10"></path>
<g class="non-terminal ">
<path d="M280 128h0"></path>
<path d="M336 128h0"></path>
<rect x="280" y="117" width="56" height="22"></rect>
<text x="308" y="132">DESC</text>
</g>
</g>
<path d="M346 128h18"></path>
<path d="M364 128h0"></path>
</g>
<path d="M364 128h36"></path>
</g>
<path d="M400 128h36"></path>
</g>
<g>
<path d="M436 128h0"></path>
<path d="M786 200h0"></path>
<path d="M436 128a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M472 92h278"></path>
</g>
<path d="M750 92a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M436 128h36"></path>
<g>
<path d="M472 128h0"></path>
<path d="M750 200h0"></path>
<path d="M472 128h36"></path>
<g>
<path d="M508 128h0"></path>
<path d="M508 128h18"></path>
<g>
<path d="M526 128h10"></path>
<path d="M686 128h10"></path>
<g class="non-terminal ">
<path d="M536 128h0"></path>
<path d="M601 128h0"></path>
<rect x="536" y="117" width="65" height="22"></rect>
<text x="568.5" y="132">NULLS</text>
</g>
<path d="M601 128h10"></path>
<path d="M611 128h10"></path>
<g class="non-terminal ">
<path d="M621 128h0"></path>
<path d="M686 128h0"></path>
<rect x="621" y="117" width="65" height="22"></rect>
<text x="653.5" y="132">FIRST</text>
</g>
</g>
<path d="M696 128a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-170a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M526 200h14.5"></path>
<path d="M681.5 200h14.5"></path>
<g class="non-terminal ">
<path d="M540.5 200h0"></path>
<path d="M605.5 200h0"></path>
<rect x="540.5" y="189" width="65" height="22"></rect>
<text x="573" y="204">NULLS</text>
</g>
<path d="M605.5 200h10"></path>
<path d="M615.5 200h10"></path>
<g class="non-terminal ">
<path d="M625.5 200h0"></path>
<path d="M681.5 200h0"></path>
<rect x="625.5" y="189" width="56" height="22"></rect>
<text x="653.5" y="204">LAST</text>
</g>
</g>
<path d="M696 200h18"></path>
<path d="M714 200h0"></path>
</g>
<path d="M714 200h36"></path>
</g>
<path d="M750 200h36"></path>
</g>
</g>
<path d="M796 200h0"></path>
</g>
<path d="M796 200h10"></path>
<path d="M 806 200 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="884" height="728" viewBox="0 0 884 728">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M50 56h18"></path>
<g>
<path d="M68 56h103"></path>
<path d="M713 128h103"></path>
<g class="non-terminal ">
<path d="M171 56h0"></path>
<path d="M245 56h0"></path>
<rect x="171" y="45" width="74" height="22"></rect>
<text x="208" y="60">SELECT</text>
</g>
<path d="M245 56h10"></path>
<g>
<path d="M255 56h0"></path>
<path d="M421 56h0"></path>
<path d="M255 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M291 20h94"></path>
</g>
<path d="M385 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M255 56h36"></path>
<g>
<path d="M291 56h0"></path>
<g>
<path d="M291 56h10"></path>
<path d="M375 56h10"></path>
<g class="non-terminal ">
<path d="M301 56h0"></path>
<path d="M375 56h0"></path>
<rect x="301" y="45" width="74" height="22"></rect>
<text x="338" y="60">STREAM</text>
</g>
</g>
<path d="M385 56h0"></path>
</g>
<path d="M385 56h36"></path>
</g>
<g>
<path d="M421 56h0"></path>
<path d="M713 128h0"></path>
<path d="M421 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M457 20h220"></path>
</g>
<path d="M677 20a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M421 56h36"></path>
<g>
<path d="M457 56h0"></path>
<path d="M677 128h0"></path>
<path d="M457 56h36"></path>
<g>
<path d="M493 56h0"></path>
<path d="M493 56h18"></path>
<g>
<path d="M511 56h32.5"></path>
<path d="M590.5 56h32.5"></path>
<g class="non-terminal ">
<path d="M543.5 56h0"></path>
<path d="M590.5 56h0"></path>
<rect x="543.5" y="45" width="47" height="22"></rect>
<text x="567" y="60">ALL</text>
</g>
</g>
<path d="M623 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-112a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M511 128h10"></path>
<path d="M613 128h10"></path>
<g class="non-terminal ">
<path d="M521 128h0"></path>
<path d="M613 128h0"></path>
<rect x="521" y="117" width="92" height="22"></rect>
<text x="567" y="132">DISTINCT</text>
</g>
</g>
<path d="M623 128h18"></path>
<path d="M641 128h0"></path>
</g>
<path d="M641 128h36"></path>
</g>
<path d="M677 128h36"></path>
</g>
</g>
<path d="M816 128a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 200h222.5"></path>
<path d="M593.5 272h222.5"></path>
<g>
<path d="M290.5 200h0"></path>
<path d="M593.5 272h0"></path>
<g>
<path d="M290.5 200h0"></path>
<path d="M593.5 272h0"></path>
<path d="M290.5 200h36"></path>
<g>
<path d="M326.5 200h0"></path>
<path d="M326.5 200h18"></path>
<g>
<path d="M344.5 200h89"></path>
<path d="M450.5 200h89"></path>
<g class="comment ">
<path d="M433.5 200h0"></path>
<path d="M450.5 200h0"></path>
<text x="442" y="205" class="comment">&#42;</text>
</g>
</g>
<path d="M539.5 200a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-195a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M344.5 272h10"></path>
<path d="M529.5 272h10"></path>
<g>
<path d="M354.5 272h0"></path>
<path d="M529.5 272h0"></path>
<path d="M354.5 272h18"></path>
<g>
<path d="M372.5 272h0"></path>
<g>
<path d="M372.5 272h10"></path>
<path d="M501.5 272h10"></path>
<g class="terminal ">
<path d="M382.5 272h0"></path>
<path d="M501.5 272h0"></path>
<rect x="382.5" y="261" width="119" height="22" rx="10" ry="10"></rect>
<text x="442" y="276">projectItem</text>
</g>
</g>
<path d="M511.5 272h0"></path>
</g>
<path d="M511.5 272h18"></path>
<path d="M372.5 272a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M372.5 308h61"></path>
<path d="M450.5 308h61"></path>
<text x="442" y="313" class="comment">,</text>
</g>
<path d="M511.5 308a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M539.5 272h18"></path>
<path d="M557.5 272h0"></path>
</g>
<path d="M557.5 272h36"></path>
</g>
</g>
</g>
<path d="M816 272a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 344h258.5"></path>
<path d="M557.5 344h258.5"></path>
<g class="non-terminal ">
<path d="M326.5 344h0"></path>
<path d="M382.5 344h0"></path>
<rect x="326.5" y="333" width="56" height="22"></rect>
<text x="354.5" y="348">FROM</text>
</g>
<path d="M382.5 344h10"></path>
<path d="M392.5 344h10"></path>
<g class="terminal ">
<path d="M402.5 344h0"></path>
<path d="M557.5 344h0"></path>
<rect x="402.5" y="333" width="155" height="22" rx="10" ry="10"></rect>
<text x="480" y="348">tableExpression</text>
</g>
</g>
<path d="M816 344a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 424h199"></path>
<path d="M617 424h199"></path>
<g>
<path d="M267 424h0"></path>
<path d="M617 424h0"></path>
<path d="M267 424a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M303 388h278"></path>
</g>
<path d="M581 388a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M267 424h36"></path>
<g>
<path d="M303 424h0"></path>
<g>
<path d="M303 424h10"></path>
<path d="M571 424h10"></path>
<g class="non-terminal ">
<path d="M313 424h0"></path>
<path d="M378 424h0"></path>
<rect x="313" y="413" width="65" height="22"></rect>
<text x="345.5" y="428">WHERE</text>
</g>
<path d="M378 424h10"></path>
<path d="M388 424h10"></path>
<g class="terminal ">
<path d="M398 424h0"></path>
<path d="M571 424h0"></path>
<rect x="398" y="413" width="173" height="22" rx="10" ry="10"></rect>
<text x="484.5" y="428">booleanExpression</text>
</g>
</g>
<path d="M581 424h0"></path>
</g>
<path d="M581 424h36"></path>
</g>
</g>
<path d="M816 424a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 504h168"></path>
<path d="M648 504h168"></path>
<g>
<path d="M236 504h0"></path>
<path d="M648 504h0"></path>
<path d="M236 504a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M272 468h340"></path>
</g>
<path d="M612 468a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M236 504h36"></path>
<g>
<path d="M272 504h0"></path>
<g>
<path d="M272 504h10"></path>
<path d="M602 504h10"></path>
<g class="non-terminal ">
<path d="M282 504h0"></path>
<path d="M347 504h0"></path>
<rect x="282" y="493" width="65" height="22"></rect>
<text x="314.5" y="508">GROUP</text>
</g>
<path d="M347 504h10"></path>
<path d="M357 504h10"></path>
<g class="non-terminal ">
<path d="M367 504h0"></path>
<path d="M405 504h0"></path>
<rect x="367" y="493" width="38" height="22"></rect>
<text x="386" y="508">BY</text>
</g>
<path d="M405 504h10"></path>
<path d="M415 504h10"></path>
<g>
<path d="M425 504h0"></path>
<path d="M602 504h0"></path>
<g>
<path d="M425 504h0"></path>
<g>
<path d="M425 504h10"></path>
<path d="M592 504h10"></path>
<g>
<path d="M435 504h0"></path>
<path d="M592 504h0"></path>
<path d="M435 504h18"></path>
<g>
<path d="M453 504h0"></path>
<g>
<path d="M453 504h10"></path>
<path d="M564 504h10"></path>
<g class="terminal ">
<path d="M463 504h0"></path>
<path d="M564 504h0"></path>
<rect x="463" y="493" width="101" height="22" rx="10" ry="10"></rect>
<text x="513.5" y="508">groupItem</text>
</g>
</g>
<path d="M574 504h0"></path>
</g>
<path d="M574 504h18"></path>
<path d="M453 504a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M453 540h52"></path>
<path d="M522 540h52"></path>
<text x="513.5" y="545" class="comment">,</text>
</g>
<path d="M574 540a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M602 504h0"></path>
</g>
</g>
</g>
<path d="M612 504h0"></path>
</g>
<path d="M612 504h36"></path>
</g>
</g>
<path d="M816 504a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 592h194.5"></path>
<path d="M621.5 592h194.5"></path>
<g>
<path d="M262.5 592h0"></path>
<path d="M621.5 592h0"></path>
<path d="M262.5 592a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M298.5 556h287"></path>
</g>
<path d="M585.5 556a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M262.5 592h36"></path>
<g>
<path d="M298.5 592h0"></path>
<g>
<path d="M298.5 592h10"></path>
<path d="M575.5 592h10"></path>
<g class="non-terminal ">
<path d="M308.5 592h0"></path>
<path d="M382.5 592h0"></path>
<rect x="308.5" y="581" width="74" height="22"></rect>
<text x="345.5" y="596">HAVING</text>
</g>
<path d="M382.5 592h10"></path>
<path d="M392.5 592h10"></path>
<g class="terminal ">
<path d="M402.5 592h0"></path>
<path d="M575.5 592h0"></path>
<rect x="402.5" y="581" width="173" height="22" rx="10" ry="10"></rect>
<text x="489" y="596">booleanExpression</text>
</g>
</g>
<path d="M585.5 592h0"></path>
</g>
<path d="M585.5 592h36"></path>
</g>
</g>
<path d="M816 592a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 672h10"></path>
<path d="M806 672h10"></path>
<g>
<path d="M78 672h0"></path>
<path d="M806 672h0"></path>
<path d="M78 672a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 636h656"></path>
</g>
<path d="M770 636a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 672h36"></path>
<g>
<path d="M114 672h0"></path>
<g>
<path d="M114 672h10"></path>
<path d="M760 672h10"></path>
<g class="non-terminal ">
<path d="M124 672h0"></path>
<path d="M198 672h0"></path>
<rect x="124" y="661" width="74" height="22"></rect>
<text x="161" y="676">WINDOW</text>
</g>
<path d="M198 672h10"></path>
<path d="M208 672h10"></path>
<g class="terminal ">
<path d="M218 672h0"></path>
<path d="M328 672h0"></path>
<rect x="218" y="661" width="110" height="22" rx="10" ry="10"></rect>
<text x="273" y="676">windowName</text>
</g>
<path d="M328 672h10"></path>
<path d="M338 672h10"></path>
<g class="non-terminal ">
<path d="M348 672h0"></path>
<path d="M386 672h0"></path>
<rect x="348" y="661" width="38" height="22"></rect>
<text x="367" y="676">AS</text>
</g>
<path d="M386 672h10"></path>
<path d="M396 672h10"></path>
<g>
<path d="M406 672h0"></path>
<path d="M760 672h0"></path>
<path d="M406 672h18"></path>
<g>
<path d="M424 672h0"></path>
<g>
<path d="M424 672h10"></path>
<path d="M732 672h10"></path>
<g class="terminal ">
<path d="M434 672h0"></path>
<path d="M544 672h0"></path>
<rect x="434" y="661" width="110" height="22" rx="10" ry="10"></rect>
<text x="489" y="676">windowName</text>
</g>
<path d="M544 672h10"></path>
<path d="M554 672h10"></path>
<g class="non-terminal ">
<path d="M564 672h0"></path>
<path d="M602 672h0"></path>
<rect x="564" y="661" width="38" height="22"></rect>
<text x="583" y="676">AS</text>
</g>
<path d="M602 672h10"></path>
<path d="M612 672h10"></path>
<g class="terminal ">
<path d="M622 672h0"></path>
<path d="M732 672h0"></path>
<rect x="622" y="661" width="110" height="22" rx="10" ry="10"></rect>
<text x="677" y="676">windowSpec</text>
</g>
</g>
<path d="M742 672h0"></path>
</g>
<path d="M742 672h18"></path>
<path d="M424 672a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M424 708h150.5"></path>
<path d="M591.5 708h150.5"></path>
<text x="583" y="713" class="comment">,</text>
</g>
<path d="M742 708a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M770 672h0"></path>
</g>
<path d="M770 672h36"></path>
</g>
</g>
<path d="M816 672h18"></path>
<path d="M834 672h0"></path>
</g>
<path d="M834 672h10"></path>
<path d="M 844 672 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="532" height="302" viewBox="0 0 532 302">
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
<path d="M454 128h10"></path>
<g class="non-terminal ">
<path d="M78 56h0"></path>
<path d="M152 56h0"></path>
<rect x="78" y="45" width="74" height="22"></rect>
<text x="115" y="60">SELECT</text>
</g>
<path d="M152 56h10"></path>
<g>
<path d="M162 56h0"></path>
<path d="M454 128h0"></path>
<path d="M162 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M198 20h220"></path>
</g>
<path d="M418 20a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M162 56h36"></path>
<g>
<path d="M198 56h0"></path>
<path d="M418 128h0"></path>
<path d="M198 56h36"></path>
<g>
<path d="M234 56h0"></path>
<path d="M234 56h18"></path>
<g>
<path d="M252 56h32.5"></path>
<path d="M331.5 56h32.5"></path>
<g class="non-terminal ">
<path d="M284.5 56h0"></path>
<path d="M331.5 56h0"></path>
<rect x="284.5" y="45" width="47" height="22"></rect>
<text x="308" y="60">ALL</text>
</g>
</g>
<path d="M364 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-112a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M252 128h10"></path>
<path d="M354 128h10"></path>
<g class="non-terminal ">
<path d="M262 128h0"></path>
<path d="M354 128h0"></path>
<rect x="262" y="117" width="92" height="22"></rect>
<text x="308" y="132">DISTINCT</text>
</g>
</g>
<path d="M364 128h18"></path>
<path d="M382 128h0"></path>
</g>
<path d="M382 128h36"></path>
</g>
<path d="M418 128h36"></path>
</g>
</g>
<path d="M464 128a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-396a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 200h46.5"></path>
<path d="M417.5 272h46.5"></path>
<g>
<path d="M114.5 200h0"></path>
<path d="M417.5 272h0"></path>
<g>
<path d="M114.5 200h0"></path>
<path d="M417.5 272h0"></path>
<path d="M114.5 200h36"></path>
<g>
<path d="M150.5 200h0"></path>
<path d="M150.5 200h18"></path>
<g>
<path d="M168.5 200h89"></path>
<path d="M274.5 200h89"></path>
<g class="comment ">
<path d="M257.5 200h0"></path>
<path d="M274.5 200h0"></path>
<text x="266" y="205" class="comment">&#42;</text>
</g>
</g>
<path d="M363.5 200a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-195a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M168.5 272h10"></path>
<path d="M353.5 272h10"></path>
<g>
<path d="M178.5 272h0"></path>
<path d="M353.5 272h0"></path>
<path d="M178.5 272h18"></path>
<g>
<path d="M196.5 272h0"></path>
<g>
<path d="M196.5 272h10"></path>
<path d="M325.5 272h10"></path>
<g class="terminal ">
<path d="M206.5 272h0"></path>
<path d="M325.5 272h0"></path>
<rect x="206.5" y="261" width="119" height="22" rx="10" ry="10"></rect>
<text x="266" y="276">projectItem</text>
</g>
</g>
<path d="M335.5 272h0"></path>
</g>
<path d="M335.5 272h18"></path>
<path d="M196.5 272a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M196.5 308h61"></path>
<path d="M274.5 308h61"></path>
<text x="266" y="313" class="comment">,</text>
</g>
<path d="M335.5 308a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M363.5 272h18"></path>
<path d="M381.5 272h0"></path>
</g>
<path d="M381.5 272h36"></path>
</g>
</g>
</g>
<path d="M464 272h18"></path>
<path d="M482 272h0"></path>
</g>
<path d="M482 272h10"></path>
<path d="M 492 272 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="679" height="166" viewBox="0 0 679 166">
<g transform="translate(.5 .5)">
<g>
<path d="M20 54v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 64h0"></path>
<path d="M639 136h0"></path>
<path d="M40 64h36"></path>
<g>
<path d="M76 64h0"></path>
<path d="M76 64h18"></path>
<g>
<path d="M94 64h10"></path>
<path d="M575 64h10"></path>
<g class="terminal ">
<path d="M104 64h0"></path>
<path d="M214 64h0"></path>
<rect x="104" y="53" width="110" height="22" rx="10" ry="10"></rect>
<text x="159" y="68">expression</text>
</g>
<path d="M214 64h10"></path>
<g>
<path d="M224 64h0"></path>
<path d="M575 64h0"></path>
<path d="M224 64a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M260 20h279"></path>
</g>
<path d="M539 20a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M224 64h36"></path>
<g>
<path d="M260 64h0"></path>
<g>
<path d="M260 64h10"></path>
<path d="M529 64h10"></path>
<g>
<path d="M270 64h0"></path>
<path d="M400 64h0"></path>
<path d="M270 64a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M306 28h58"></path>
</g>
<path d="M364 28a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M270 64h36"></path>
<g>
<path d="M306 64h0"></path>
<g>
<path d="M306 64h10"></path>
<path d="M354 64h10"></path>
<g class="non-terminal ">
<path d="M316 64h0"></path>
<path d="M354 64h0"></path>
<rect x="316" y="53" width="38" height="22"></rect>
<text x="335" y="68">AS</text>
</g>
</g>
<path d="M364 64h0"></path>
</g>
<path d="M364 64h36"></path>
</g>
<path d="M400 64h10"></path>
<g class="terminal ">
<path d="M410 64h0"></path>
<path d="M529 64h0"></path>
<rect x="410" y="53" width="119" height="22" rx="10" ry="10"></rect>
<text x="469.5" y="68">columnAlias</text>
</g>
</g>
<path d="M539 64h0"></path>
</g>
<path d="M539 64h36"></path>
</g>
</g>
<path d="M585 64a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-491a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 136h153.5"></path>
<path d="M431.5 136h153.5"></path>
<g class="terminal ">
<path d="M247.5 136h0"></path>
<path d="M357.5 136h0"></path>
<rect x="247.5" y="125" width="110" height="22" rx="10" ry="10"></rect>
<text x="302.5" y="140">tableAlias</text>
</g>
<path d="M357.5 136h10"></path>
<path d="M367.5 136h10"></path>
<g class="comment ">
<path d="M377.5 136h0"></path>
<path d="M394.5 136h0"></path>
<text x="386" y="141" class="comment">.</text>
</g>
<path d="M394.5 136h10"></path>
<path d="M404.5 136h10"></path>
<g class="comment ">
<path d="M414.5 136h0"></path>
<path d="M431.5 136h0"></path>
<text x="423" y="141" class="comment">&#42;</text>
</g>
</g>
<path d="M585 136h18"></path>
<path d="M603 136h0"></path>
</g>
<path d="M603 136h36"></path>
</g>
<path d="M 639 136 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1480" height="517" viewBox="0 0 1480 517">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M1440 487h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h0"></path>
<path d="M76 31h18"></path>
<g>
<path d="M94 31h545"></path>
<path d="M841 31h545"></path>
<g>
<path d="M639 31h0"></path>
<path d="M841 31h0"></path>
<path d="M639 31h18"></path>
<g>
<path d="M657 31h0"></path>
<g>
<path d="M657 31h10"></path>
<path d="M813 31h10"></path>
<g class="terminal ">
<path d="M667 31h0"></path>
<path d="M813 31h0"></path>
<rect x="667" y="20" width="146" height="22" rx="10" ry="10"></rect>
<text x="740" y="35">tableReference</text>
</g>
</g>
<path d="M823 31h0"></path>
</g>
<path d="M823 31h18"></path>
<path d="M657 31a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M657 67h74.5"></path>
<path d="M748.5 67h74.5"></path>
<text x="740" y="72" class="comment">,</text>
</g>
<path d="M823 67a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M1386 31a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-1292a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 119h10"></path>
<path d="M1376 263h10"></path>
<g class="terminal ">
<path d="M104 119h0"></path>
<path d="M259 119h0"></path>
<rect x="104" y="108" width="155" height="22" rx="10" ry="10"></rect>
<text x="181.5" y="123">tableExpression</text>
</g>
<path d="M259 119h10"></path>
<g>
<path d="M269 119h0"></path>
<path d="M444 119h0"></path>
<path d="M269 119a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M305 83h103"></path>
</g>
<path d="M408 83a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M269 119h36"></path>
<g>
<path d="M305 119h0"></path>
<g>
<path d="M305 119h10"></path>
<path d="M398 119h10"></path>
<g class="non-terminal ">
<path d="M315 119h0"></path>
<path d="M398 119h0"></path>
<rect x="315" y="108" width="83" height="22"></rect>
<text x="356.5" y="123">NATURAL</text>
</g>
</g>
<path d="M408 119h0"></path>
</g>
<path d="M408 119h36"></path>
</g>
<g>
<path d="M444 119h0"></path>
<path d="M896 263h0"></path>
<path d="M444 119a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M480 83h380"></path>
</g>
<path d="M860 83a18 18 0 0 1 18 18v144a18 18 0 0 0 18 18"></path>
<path d="M444 119h36"></path>
<g>
<path d="M480 119h0"></path>
<g>
<path d="M480 119h10"></path>
<path d="M850 263h10"></path>
<g>
<path d="M490 119h0"></path>
<path d="M683 263h0"></path>
<g>
<path d="M490 119h0"></path>
<path d="M683 263h0"></path>
<path d="M490 119h36"></path>
<g>
<path d="M526 119h0"></path>
<path d="M526 119h18"></path>
<g>
<path d="M544 119h14.5"></path>
<path d="M614.5 119h14.5"></path>
<g class="non-terminal ">
<path d="M558.5 119h0"></path>
<path d="M614.5 119h0"></path>
<rect x="558.5" y="108" width="56" height="22"></rect>
<text x="586.5" y="123">LEFT</text>
</g>
</g>
<path d="M629 119a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-85a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M544 191h10"></path>
<path d="M619 191h10"></path>
<g class="non-terminal ">
<path d="M554 191h0"></path>
<path d="M619 191h0"></path>
<rect x="554" y="180" width="65" height="22"></rect>
<text x="586.5" y="195">RIGHT</text>
</g>
</g>
<path d="M629 191a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-85a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M544 263h14.5"></path>
<path d="M614.5 263h14.5"></path>
<g class="non-terminal ">
<path d="M558.5 263h0"></path>
<path d="M614.5 263h0"></path>
<rect x="558.5" y="252" width="56" height="22"></rect>
<text x="586.5" y="267">FULL</text>
</g>
</g>
<path d="M629 263h18"></path>
<path d="M647 263h0"></path>
</g>
<path d="M647 263h36"></path>
</g>
</g>
<path d="M683 263h10"></path>
<g>
<path d="M693 263h0"></path>
<path d="M850 263h0"></path>
<path d="M693 263a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M729 227h85"></path>
</g>
<path d="M814 227a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M693 263h36"></path>
<g>
<path d="M729 263h0"></path>
<g>
<path d="M729 263h10"></path>
<path d="M804 263h10"></path>
<g class="non-terminal ">
<path d="M739 263h0"></path>
<path d="M804 263h0"></path>
<rect x="739" y="252" width="65" height="22"></rect>
<text x="771.5" y="267">OUTER</text>
</g>
</g>
<path d="M814 263h0"></path>
</g>
<path d="M814 263h36"></path>
</g>
</g>
<path d="M860 263h0"></path>
</g>
<path d="M860 263h36"></path>
</g>
<path d="M896 263h10"></path>
<g class="non-terminal ">
<path d="M906 263h0"></path>
<path d="M962 263h0"></path>
<rect x="906" y="252" width="56" height="22"></rect>
<text x="934" y="267">JOIN</text>
</g>
<path d="M962 263h10"></path>
<path d="M972 263h10"></path>
<g class="terminal ">
<path d="M982 263h0"></path>
<path d="M1137 263h0"></path>
<rect x="982" y="252" width="155" height="22" rx="10" ry="10"></rect>
<text x="1059.5" y="267">tableExpression</text>
</g>
<path d="M1137 263h10"></path>
<g>
<path d="M1147 263h0"></path>
<path d="M1376 263h0"></path>
<path d="M1147 263a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1183 227h157"></path>
</g>
<path d="M1340 227a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1147 263h36"></path>
<g>
<path d="M1183 263h0"></path>
<g>
<path d="M1183 263h10"></path>
<path d="M1330 263h10"></path>
<g class="terminal ">
<path d="M1193 263h0"></path>
<path d="M1330 263h0"></path>
<rect x="1193" y="252" width="137" height="22" rx="10" ry="10"></rect>
<text x="1261.5" y="267">joinCondition</text>
</g>
</g>
<path d="M1340 263h0"></path>
</g>
<path d="M1340 263h36"></path>
</g>
</g>
<path d="M1386 263a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-1292a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 335h400.5"></path>
<path d="M985.5 335h400.5"></path>
<g class="terminal ">
<path d="M494.5 335h0"></path>
<path d="M649.5 335h0"></path>
<rect x="494.5" y="324" width="155" height="22" rx="10" ry="10"></rect>
<text x="572" y="339">tableExpression</text>
</g>
<path d="M649.5 335h10"></path>
<path d="M659.5 335h10"></path>
<g class="non-terminal ">
<path d="M669.5 335h0"></path>
<path d="M734.5 335h0"></path>
<rect x="669.5" y="324" width="65" height="22"></rect>
<text x="702" y="339">CROSS</text>
</g>
<path d="M734.5 335h10"></path>
<path d="M744.5 335h10"></path>
<g class="non-terminal ">
<path d="M754.5 335h0"></path>
<path d="M810.5 335h0"></path>
<rect x="754.5" y="324" width="56" height="22"></rect>
<text x="782.5" y="339">JOIN</text>
</g>
<path d="M810.5 335h10"></path>
<path d="M820.5 335h10"></path>
<g class="terminal ">
<path d="M830.5 335h0"></path>
<path d="M985.5 335h0"></path>
<rect x="830.5" y="324" width="155" height="22" rx="10" ry="10"></rect>
<text x="908" y="339">tableExpression</text>
</g>
</g>
<path d="M1386 335a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-1292a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 415h306"></path>
<path d="M1080 487h306"></path>
<g class="terminal ">
<path d="M400 415h0"></path>
<path d="M555 415h0"></path>
<rect x="400" y="404" width="155" height="22" rx="10" ry="10"></rect>
<text x="477.5" y="419">tableExpression</text>
</g>
<path d="M555 415h10"></path>
<g>
<path d="M565 415h0"></path>
<path d="M830 487h0"></path>
<path d="M565 415a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M601 379h193"></path>
</g>
<path d="M794 379a18 18 0 0 1 18 18v72a18 18 0 0 0 18 18"></path>
<path d="M565 415h36"></path>
<g>
<path d="M601 415h0"></path>
<path d="M794 487h0"></path>
<path d="M601 415h36"></path>
<g>
<path d="M637 415h0"></path>
<path d="M637 415h18"></path>
<g>
<path d="M655 415h10"></path>
<path d="M730 415h10"></path>
<g class="non-terminal ">
<path d="M665 415h0"></path>
<path d="M730 415h0"></path>
<rect x="665" y="404" width="65" height="22"></rect>
<text x="697.5" y="419">CROSS</text>
</g>
</g>
<path d="M740 415a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-85a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M655 487h10"></path>
<path d="M730 487h10"></path>
<g class="non-terminal ">
<path d="M665 487h0"></path>
<path d="M730 487h0"></path>
<rect x="665" y="476" width="65" height="22"></rect>
<text x="697.5" y="491">OUTER</text>
</g>
</g>
<path d="M740 487h18"></path>
<path d="M758 487h0"></path>
</g>
<path d="M758 487h36"></path>
</g>
<path d="M794 487h36"></path>
</g>
<path d="M830 487h10"></path>
<g class="non-terminal ">
<path d="M840 487h0"></path>
<path d="M905 487h0"></path>
<rect x="840" y="476" width="65" height="22"></rect>
<text x="872.5" y="491">APPLY</text>
</g>
<path d="M905 487h10"></path>
<path d="M915 487h10"></path>
<g class="terminal ">
<path d="M925 487h0"></path>
<path d="M1080 487h0"></path>
<rect x="925" y="476" width="155" height="22" rx="10" ry="10"></rect>
<text x="1002.5" y="491">tableExpression</text>
</g>
</g>
<path d="M1386 487h18"></path>
<path d="M1404 487h0"></path>
</g>
<path d="M1404 487h36"></path>
</g>
<path d="M 1440 487 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="497" height="133" viewBox="0 0 497 133">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M457 103h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h0"></path>
<path d="M76 31h18"></path>
<g>
<path d="M94 31h39"></path>
<path d="M364 31h39"></path>
<g class="non-terminal ">
<path d="M133 31h0"></path>
<path d="M171 31h0"></path>
<rect x="133" y="20" width="38" height="22"></rect>
<text x="152" y="35">ON</text>
</g>
<path d="M171 31h10"></path>
<path d="M181 31h10"></path>
<g class="terminal ">
<path d="M191 31h0"></path>
<path d="M364 31h0"></path>
<rect x="191" y="20" width="173" height="22" rx="10" ry="10"></rect>
<text x="277.5" y="35">booleanExpression</text>
</g>
</g>
<path d="M403 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-309a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 103h10"></path>
<path d="M393 103h10"></path>
<g class="non-terminal ">
<path d="M104 103h0"></path>
<path d="M169 103h0"></path>
<rect x="104" y="92" width="65" height="22"></rect>
<text x="136.5" y="107">USING</text>
</g>
<path d="M169 103h10"></path>
<path d="M179 103h10"></path>
<g class="comment ">
<path d="M189 103h0"></path>
<path d="M206 103h0"></path>
<text x="197.5" y="108" class="comment">(</text>
</g>
<path d="M206 103h10"></path>
<path d="M216 103h10"></path>
<g>
<path d="M226 103h0"></path>
<path d="M356 103h0"></path>
<path d="M226 103h18"></path>
<g>
<path d="M244 103h0"></path>
<g>
<path d="M244 103h10"></path>
<path d="M328 103h10"></path>
<g class="terminal ">
<path d="M254 103h0"></path>
<path d="M328 103h0"></path>
<rect x="254" y="92" width="74" height="22" rx="10" ry="10"></rect>
<text x="291" y="107">column</text>
</g>
</g>
<path d="M338 103h0"></path>
</g>
<path d="M338 103h18"></path>
<path d="M244 103a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M244 139h38.5"></path>
<path d="M299.5 139h38.5"></path>
<text x="291" y="144" class="comment">,</text>
</g>
<path d="M338 139a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M356 103h10"></path>
<path d="M366 103h10"></path>
<g class="comment ">
<path d="M376 103h0"></path>
<path d="M393 103h0"></path>
<text x="384.5" y="108" class="comment">)</text>
</g>
</g>
<path d="M403 103h18"></path>
<path d="M421 103h0"></path>
</g>
<path d="M421 103h36"></path>
</g>
<path d="M 457 103 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="804" height="255" viewBox="0 0 804 255">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h283.5"></path>
<path d="M452.5 31h283.5"></path>
<g class="terminal ">
<path d="M351.5 31h0"></path>
<path d="M452.5 31h0"></path>
<rect x="351.5" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="402" y="35">tableName</text>
</g>
</g>
<path d="M736 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-668a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 111h215"></path>
<path d="M521 111h215"></path>
<g>
<path d="M283 111h0"></path>
<path d="M521 111h0"></path>
<path d="M283 111a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M319 75h166"></path>
</g>
<path d="M485 75a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M283 111h36"></path>
<g>
<path d="M319 111h0"></path>
<g>
<path d="M319 111h10"></path>
<path d="M475 111h10"></path>
<g class="terminal ">
<path d="M329 111h0"></path>
<path d="M475 111h0"></path>
<rect x="329" y="100" width="146" height="22" rx="10" ry="10"></rect>
<text x="402" y="115">matchRecognize</text>
</g>
</g>
<path d="M485 111h0"></path>
</g>
<path d="M485 111h36"></path>
</g>
</g>
<path d="M736 111a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-668a18 18 0 0 0 -18 18v16a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 199h10"></path>
<path d="M726 199h10"></path>
<g>
<path d="M78 199h0"></path>
<path d="M726 199h0"></path>
<path d="M78 199a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 155h576"></path>
</g>
<path d="M690 155a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M78 199h36"></path>
<g>
<path d="M114 199h0"></path>
<g>
<path d="M114 199h10"></path>
<path d="M680 199h10"></path>
<g>
<path d="M124 199h0"></path>
<path d="M254 199h0"></path>
<path d="M124 199a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M160 163h58"></path>
</g>
<path d="M218 163a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M124 199h36"></path>
<g>
<path d="M160 199h0"></path>
<g>
<path d="M160 199h10"></path>
<path d="M208 199h10"></path>
<g class="non-terminal ">
<path d="M170 199h0"></path>
<path d="M208 199h0"></path>
<rect x="170" y="188" width="38" height="22"></rect>
<text x="189" y="203">AS</text>
</g>
</g>
<path d="M218 199h0"></path>
</g>
<path d="M218 199h36"></path>
</g>
<path d="M254 199h10"></path>
<g class="terminal ">
<path d="M264 199h0"></path>
<path d="M329 199h0"></path>
<rect x="264" y="188" width="65" height="22" rx="10" ry="10"></rect>
<text x="296.5" y="203">alias</text>
</g>
<path d="M329 199h10"></path>
<g>
<path d="M339 199h0"></path>
<path d="M680 199h0"></path>
<path d="M339 199a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M375 163h269"></path>
</g>
<path d="M644 163a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M339 199h36"></path>
<g>
<path d="M375 199h0"></path>
<g>
<path d="M375 199h10"></path>
<path d="M634 199h10"></path>
<g class="comment ">
<path d="M385 199h0"></path>
<path d="M402 199h0"></path>
<text x="393.5" y="204" class="comment">(</text>
</g>
<path d="M402 199h10"></path>
<path d="M412 199h10"></path>
<g>
<path d="M422 199h0"></path>
<path d="M597 199h0"></path>
<path d="M422 199h18"></path>
<g>
<path d="M440 199h0"></path>
<g>
<path d="M440 199h10"></path>
<path d="M569 199h10"></path>
<g class="terminal ">
<path d="M450 199h0"></path>
<path d="M569 199h0"></path>
<rect x="450" y="188" width="119" height="22" rx="10" ry="10"></rect>
<text x="509.5" y="203">columnAlias</text>
</g>
</g>
<path d="M579 199h0"></path>
</g>
<path d="M579 199h18"></path>
<path d="M440 199a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M440 235h61"></path>
<path d="M518 235h61"></path>
<text x="509.5" y="240" class="comment">,</text>
</g>
<path d="M579 235a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M597 199h10"></path>
<path d="M607 199h10"></path>
<g class="comment ">
<path d="M617 199h0"></path>
<path d="M634 199h0"></path>
<text x="625.5" y="204" class="comment">)</text>
</g>
</g>
<path d="M644 199h0"></path>
</g>
<path d="M644 199h36"></path>
</g>
</g>
<path d="M690 199h0"></path>
</g>
<path d="M690 199h36"></path>
</g>
</g>
<path d="M736 199h18"></path>
<path d="M754 199h0"></path>
</g>
<path d="M754 199h10"></path>
<path d="M 764 199 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1124" height="494" viewBox="0 0 1124 494">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 56h0"></path>
<path d="M1084 464h0"></path>
<path d="M40 56h36"></path>
<g>
<path d="M76 56h0"></path>
<path d="M76 56h18"></path>
<g>
<path d="M94 56h293"></path>
<path d="M737 56h293"></path>
<g>
<path d="M387 56h0"></path>
<path d="M626 56h0"></path>
<path d="M387 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M423 20h167"></path>
</g>
<path d="M590 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M387 56h36"></path>
<g>
<path d="M423 56h0"></path>
<g>
<path d="M423 56h10"></path>
<path d="M580 56h10"></path>
<g class="terminal ">
<path d="M433 56h0"></path>
<path d="M543 56h0"></path>
<rect x="433" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="488" y="60">schemaName</text>
</g>
<path d="M543 56h10"></path>
<path d="M553 56h10"></path>
<g class="comment ">
<path d="M563 56h0"></path>
<path d="M580 56h0"></path>
<text x="571.5" y="61" class="comment">.</text>
</g>
</g>
<path d="M590 56h0"></path>
</g>
<path d="M590 56h36"></path>
</g>
<path d="M626 56h10"></path>
<g class="terminal ">
<path d="M636 56h0"></path>
<path d="M737 56h0"></path>
<rect x="636" y="45" width="101" height="22" rx="10" ry="10"></rect>
<text x="686.5" y="60">tableName</text>
</g>
</g>
<path d="M1030 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-936a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 136h218.5"></path>
<path d="M811.5 136h218.5"></path>
<g class="comment ">
<path d="M312.5 136h0"></path>
<path d="M329.5 136h0"></path>
<text x="321" y="141" class="comment">(</text>
</g>
<path d="M329.5 136h10"></path>
<path d="M339.5 136h10"></path>
<g class="non-terminal ">
<path d="M349.5 136h0"></path>
<path d="M414.5 136h0"></path>
<rect x="349.5" y="125" width="65" height="22"></rect>
<text x="382" y="140">TABLE</text>
</g>
<path d="M414.5 136h10"></path>
<g>
<path d="M424.5 136h0"></path>
<path d="M663.5 136h0"></path>
<path d="M424.5 136a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M460.5 100h167"></path>
</g>
<path d="M627.5 100a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M424.5 136h36"></path>
<g>
<path d="M460.5 136h0"></path>
<g>
<path d="M460.5 136h10"></path>
<path d="M617.5 136h10"></path>
<g class="terminal ">
<path d="M470.5 136h0"></path>
<path d="M580.5 136h0"></path>
<rect x="470.5" y="125" width="110" height="22" rx="10" ry="10"></rect>
<text x="525.5" y="140">schemaName</text>
</g>
<path d="M580.5 136h10"></path>
<path d="M590.5 136h10"></path>
<g class="comment ">
<path d="M600.5 136h0"></path>
<path d="M617.5 136h0"></path>
<text x="609" y="141" class="comment">.</text>
</g>
</g>
<path d="M627.5 136h0"></path>
</g>
<path d="M627.5 136h36"></path>
</g>
<path d="M663.5 136h10"></path>
<g class="terminal ">
<path d="M673.5 136h0"></path>
<path d="M774.5 136h0"></path>
<rect x="673.5" y="125" width="101" height="22" rx="10" ry="10"></rect>
<text x="724" y="140">tableName</text>
</g>
<path d="M774.5 136h10"></path>
<path d="M784.5 136h10"></path>
<g class="comment ">
<path d="M794.5 136h0"></path>
<path d="M811.5 136h0"></path>
<text x="803" y="141" class="comment">)</text>
</g>
</g>
<path d="M1030 136a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-936a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 216h204.5"></path>
<path d="M825.5 216h204.5"></path>
<g class="terminal ">
<path d="M298.5 216h0"></path>
<path d="M399.5 216h0"></path>
<rect x="298.5" y="205" width="101" height="22" rx="10" ry="10"></rect>
<text x="349" y="220">tableName</text>
</g>
<path d="M399.5 216h10"></path>
<g>
<path d="M409.5 216h0"></path>
<path d="M575.5 216h0"></path>
<path d="M409.5 216a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M445.5 180h94"></path>
</g>
<path d="M539.5 180a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M409.5 216h36"></path>
<g>
<path d="M445.5 216h0"></path>
<g>
<path d="M445.5 216h10"></path>
<path d="M529.5 216h10"></path>
<g class="non-terminal ">
<path d="M455.5 216h0"></path>
<path d="M529.5 216h0"></path>
<rect x="455.5" y="205" width="74" height="22"></rect>
<text x="492.5" y="220">EXTEND</text>
</g>
</g>
<path d="M539.5 216h0"></path>
</g>
<path d="M539.5 216h36"></path>
</g>
<path d="M575.5 216h10"></path>
<g class="comment ">
<path d="M585.5 216h0"></path>
<path d="M602.5 216h0"></path>
<text x="594" y="221" class="comment">(</text>
</g>
<path d="M602.5 216h10"></path>
<path d="M612.5 216h10"></path>
<g>
<path d="M622.5 216h0"></path>
<path d="M788.5 216h0"></path>
<path d="M622.5 216h18"></path>
<g>
<path d="M640.5 216h0"></path>
<g>
<path d="M640.5 216h10"></path>
<path d="M760.5 216h10"></path>
<g class="terminal ">
<path d="M650.5 216h0"></path>
<path d="M760.5 216h0"></path>
<rect x="650.5" y="205" width="110" height="22" rx="10" ry="10"></rect>
<text x="705.5" y="220">columnDecl</text>
</g>
</g>
<path d="M770.5 216h0"></path>
</g>
<path d="M770.5 216h18"></path>
<path d="M640.5 216a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M640.5 252h56.5"></path>
<path d="M714 252h56.5"></path>
<text x="705.5" y="257" class="comment">,</text>
</g>
<path d="M770.5 252a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M788.5 216h10"></path>
<path d="M798.5 216h10"></path>
<g class="comment ">
<path d="M808.5 216h0"></path>
<path d="M825.5 216h0"></path>
<text x="817" y="221" class="comment">)</text>
</g>
</g>
<path d="M1030 216a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-936a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 304h306"></path>
<path d="M724 304h306"></path>
<g>
<path d="M400 304h0"></path>
<path d="M575 304h0"></path>
<path d="M400 304a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M436 268h103"></path>
</g>
<path d="M539 268a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M400 304h36"></path>
<g>
<path d="M436 304h0"></path>
<g>
<path d="M436 304h10"></path>
<path d="M529 304h10"></path>
<g class="non-terminal ">
<path d="M446 304h0"></path>
<path d="M529 304h0"></path>
<rect x="446" y="293" width="83" height="22"></rect>
<text x="487.5" y="308">LATERAL</text>
</g>
</g>
<path d="M539 304h0"></path>
</g>
<path d="M539 304h36"></path>
</g>
<path d="M575 304h10"></path>
<g class="comment ">
<path d="M585 304h0"></path>
<path d="M602 304h0"></path>
<text x="593.5" y="309" class="comment">(</text>
</g>
<path d="M602 304h10"></path>
<path d="M612 304h10"></path>
<g class="terminal ">
<path d="M622 304h0"></path>
<path d="M687 304h0"></path>
<rect x="622" y="293" width="65" height="22" rx="10" ry="10"></rect>
<text x="654.5" y="308">query</text>
</g>
<path d="M687 304h10"></path>
<path d="M697 304h10"></path>
<g class="comment ">
<path d="M707 304h0"></path>
<path d="M724 304h0"></path>
<text x="715.5" y="309" class="comment">)</text>
</g>
</g>
<path d="M1030 304a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-936a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 384h185"></path>
<path d="M845 384h185"></path>
<g class="non-terminal ">
<path d="M279 384h0"></path>
<path d="M353 384h0"></path>
<rect x="279" y="373" width="74" height="22"></rect>
<text x="316" y="388">UNNEST</text>
</g>
<path d="M353 384h10"></path>
<path d="M363 384h10"></path>
<g class="comment ">
<path d="M373 384h0"></path>
<path d="M390 384h0"></path>
<text x="381.5" y="389" class="comment">(</text>
</g>
<path d="M390 384h10"></path>
<path d="M400 384h10"></path>
<g class="terminal ">
<path d="M410 384h0"></path>
<path d="M520 384h0"></path>
<rect x="410" y="373" width="110" height="22" rx="10" ry="10"></rect>
<text x="465" y="388">expression</text>
</g>
<path d="M520 384h10"></path>
<path d="M530 384h10"></path>
<g class="comment ">
<path d="M540 384h0"></path>
<path d="M557 384h0"></path>
<text x="548.5" y="389" class="comment">)</text>
</g>
<path d="M557 384h10"></path>
<g>
<path d="M567 384h0"></path>
<path d="M845 384h0"></path>
<path d="M567 384a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M603 348h206"></path>
</g>
<path d="M809 348a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M567 384h36"></path>
<g>
<path d="M603 384h0"></path>
<g>
<path d="M603 384h10"></path>
<path d="M799 384h10"></path>
<g class="non-terminal ">
<path d="M613 384h0"></path>
<path d="M669 384h0"></path>
<rect x="613" y="373" width="56" height="22"></rect>
<text x="641" y="388">WITH</text>
</g>
<path d="M669 384h10"></path>
<path d="M679 384h10"></path>
<g class="non-terminal ">
<path d="M689 384h0"></path>
<path d="M799 384h0"></path>
<rect x="689" y="373" width="110" height="22"></rect>
<text x="744" y="388">ORDINALITY</text>
</g>
</g>
<path d="M809 384h0"></path>
</g>
<path d="M809 384h36"></path>
</g>
</g>
<path d="M1030 384a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-936a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 464h10"></path>
<path d="M1020 464h10"></path>
<g>
<path d="M104 464h0"></path>
<path d="M279 464h0"></path>
<path d="M104 464a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M140 428h103"></path>
</g>
<path d="M243 428a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M104 464h36"></path>
<g>
<path d="M140 464h0"></path>
<g>
<path d="M140 464h10"></path>
<path d="M233 464h10"></path>
<g class="non-terminal ">
<path d="M150 464h0"></path>
<path d="M233 464h0"></path>
<rect x="150" y="453" width="83" height="22"></rect>
<text x="191.5" y="468">LATERAL</text>
</g>
</g>
<path d="M243 464h0"></path>
</g>
<path d="M243 464h36"></path>
</g>
<path d="M279 464h10"></path>
<g class="non-terminal ">
<path d="M289 464h0"></path>
<path d="M354 464h0"></path>
<rect x="289" y="453" width="65" height="22"></rect>
<text x="321.5" y="468">TABLE</text>
</g>
<path d="M354 464h10"></path>
<path d="M364 464h10"></path>
<g class="comment ">
<path d="M374 464h0"></path>
<path d="M391 464h0"></path>
<text x="382.5" y="469" class="comment">(</text>
</g>
<path d="M391 464h10"></path>
<g>
<path d="M401 464h0"></path>
<path d="M585 464h0"></path>
<path d="M401 464a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M437 428h112"></path>
</g>
<path d="M549 428a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M401 464h36"></path>
<g>
<path d="M437 464h0"></path>
<g>
<path d="M437 464h10"></path>
<path d="M539 464h10"></path>
<g class="non-terminal ">
<path d="M447 464h0"></path>
<path d="M539 464h0"></path>
<rect x="447" y="453" width="92" height="22"></rect>
<text x="493" y="468">SPECIFIC</text>
</g>
</g>
<path d="M549 464h0"></path>
</g>
<path d="M549 464h36"></path>
</g>
<path d="M585 464h10"></path>
<g class="terminal ">
<path d="M595 464h0"></path>
<path d="M723 464h0"></path>
<rect x="595" y="453" width="128" height="22" rx="10" ry="10"></rect>
<text x="659" y="468">functionName</text>
</g>
<path d="M723 464h10"></path>
<path d="M733 464h10"></path>
<g class="comment ">
<path d="M743 464h0"></path>
<path d="M760 464h0"></path>
<text x="751.5" y="469" class="comment">(</text>
</g>
<path d="M760 464h10"></path>
<path d="M770 464h10"></path>
<g>
<path d="M780 464h0"></path>
<path d="M946 464h0"></path>
<path d="M780 464h18"></path>
<g>
<path d="M798 464h0"></path>
<g>
<path d="M798 464h10"></path>
<path d="M918 464h10"></path>
<g class="terminal ">
<path d="M808 464h0"></path>
<path d="M918 464h0"></path>
<rect x="808" y="453" width="110" height="22" rx="10" ry="10"></rect>
<text x="863" y="468">expression</text>
</g>
</g>
<path d="M928 464h0"></path>
</g>
<path d="M928 464h18"></path>
<path d="M798 464a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M798 500h56.5"></path>
<path d="M871.5 500h56.5"></path>
<text x="863" y="505" class="comment">,</text>
</g>
<path d="M928 500a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M946 464h10"></path>
<path d="M956 464h10"></path>
<g class="comment ">
<path d="M966 464h0"></path>
<path d="M983 464h0"></path>
<text x="974.5" y="469" class="comment">)</text>
</g>
<path d="M983 464h10"></path>
<path d="M993 464h10"></path>
<g class="comment ">
<path d="M1003 464h0"></path>
<path d="M1020 464h0"></path>
<text x="1011.5" y="469" class="comment">)</text>
</g>
</g>
<path d="M1030 464h18"></path>
<path d="M1048 464h0"></path>
</g>
<path d="M1048 464h36"></path>
</g>
<path d="M 1084 464 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="380" height="87" viewBox="0 0 380 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M320 31h10"></path>
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
<path d="M320 31h0"></path>
<path d="M154 31h18"></path>
<g>
<path d="M172 31h0"></path>
<g>
<path d="M172 31h10"></path>
<path d="M292 31h10"></path>
<g class="terminal ">
<path d="M182 31h0"></path>
<path d="M292 31h0"></path>
<rect x="182" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="237" y="35">expression</text>
</g>
</g>
<path d="M302 31h0"></path>
</g>
<path d="M302 31h18"></path>
<path d="M172 31a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M172 67h56.5"></path>
<path d="M245.5 67h56.5"></path>
<text x="237" y="72" class="comment">,</text>
</g>
<path d="M302 67a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M330 31h0"></path>
</g>
<path d="M330 31h10"></path>
<path d="M 340 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="627" height="445" viewBox="0 0 627 445">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M587 415h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h0"></path>
<path d="M76 31h18"></path>
<g>
<path d="M94 31h164.5"></path>
<path d="M368.5 31h164.5"></path>
<g class="terminal ">
<path d="M258.5 31h0"></path>
<path d="M368.5 31h0"></path>
<rect x="258.5" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="313.5" y="35">expression</text>
</g>
</g>
<path d="M533 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-439a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 103h192.5"></path>
<path d="M340.5 103h192.5"></path>
<g class="comment ">
<path d="M286.5 103h0"></path>
<path d="M303.5 103h0"></path>
<text x="295" y="108" class="comment">(</text>
</g>
<path d="M303.5 103h10"></path>
<path d="M313.5 103h10"></path>
<g class="comment ">
<path d="M323.5 103h0"></path>
<path d="M340.5 103h0"></path>
<text x="332" y="108" class="comment">)</text>
</g>
</g>
<path d="M533 103a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-439a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 175h99.5"></path>
<path d="M433.5 175h99.5"></path>
<g class="comment ">
<path d="M193.5 175h0"></path>
<path d="M210.5 175h0"></path>
<text x="202" y="180" class="comment">(</text>
</g>
<path d="M210.5 175h10"></path>
<path d="M220.5 175h10"></path>
<g>
<path d="M230.5 175h0"></path>
<path d="M396.5 175h0"></path>
<path d="M230.5 175h18"></path>
<g>
<path d="M248.5 175h0"></path>
<g>
<path d="M248.5 175h10"></path>
<path d="M368.5 175h10"></path>
<g class="terminal ">
<path d="M258.5 175h0"></path>
<path d="M368.5 175h0"></path>
<rect x="258.5" y="164" width="110" height="22" rx="10" ry="10"></rect>
<text x="313.5" y="179">expression</text>
</g>
</g>
<path d="M378.5 175h0"></path>
</g>
<path d="M378.5 175h18"></path>
<path d="M248.5 175a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M248.5 211h56.5"></path>
<path d="M322 211h56.5"></path>
<text x="313.5" y="216" class="comment">,</text>
</g>
<path d="M378.5 211a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M396.5 175h10"></path>
<path d="M406.5 175h10"></path>
<g class="comment ">
<path d="M416.5 175h0"></path>
<path d="M433.5 175h0"></path>
<text x="425" y="180" class="comment">)</text>
</g>
</g>
<path d="M533 175a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-439a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 255h61.5"></path>
<path d="M471.5 255h61.5"></path>
<g class="non-terminal ">
<path d="M155.5 255h0"></path>
<path d="M211.5 255h0"></path>
<rect x="155.5" y="244" width="56" height="22"></rect>
<text x="183.5" y="259">CUBE</text>
</g>
<path d="M211.5 255h10"></path>
<path d="M221.5 255h10"></path>
<g class="comment ">
<path d="M231.5 255h0"></path>
<path d="M248.5 255h0"></path>
<text x="240" y="260" class="comment">(</text>
</g>
<path d="M248.5 255h10"></path>
<path d="M258.5 255h10"></path>
<g>
<path d="M268.5 255h0"></path>
<path d="M434.5 255h0"></path>
<path d="M268.5 255h18"></path>
<g>
<path d="M286.5 255h0"></path>
<g>
<path d="M286.5 255h10"></path>
<path d="M406.5 255h10"></path>
<g class="terminal ">
<path d="M296.5 255h0"></path>
<path d="M406.5 255h0"></path>
<rect x="296.5" y="244" width="110" height="22" rx="10" ry="10"></rect>
<text x="351.5" y="259">expression</text>
</g>
</g>
<path d="M416.5 255h0"></path>
</g>
<path d="M416.5 255h18"></path>
<path d="M286.5 255a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M286.5 291h56.5"></path>
<path d="M360 291h56.5"></path>
<text x="351.5" y="296" class="comment">,</text>
</g>
<path d="M416.5 291a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M434.5 255h10"></path>
<path d="M444.5 255h10"></path>
<g class="comment ">
<path d="M454.5 255h0"></path>
<path d="M471.5 255h0"></path>
<text x="463" y="260" class="comment">)</text>
</g>
</g>
<path d="M533 255a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-439a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 335h52.5"></path>
<path d="M480.5 335h52.5"></path>
<g class="non-terminal ">
<path d="M146.5 335h0"></path>
<path d="M220.5 335h0"></path>
<rect x="146.5" y="324" width="74" height="22"></rect>
<text x="183.5" y="339">ROLLUP</text>
</g>
<path d="M220.5 335h10"></path>
<path d="M230.5 335h10"></path>
<g class="comment ">
<path d="M240.5 335h0"></path>
<path d="M257.5 335h0"></path>
<text x="249" y="340" class="comment">(</text>
</g>
<path d="M257.5 335h10"></path>
<path d="M267.5 335h10"></path>
<g>
<path d="M277.5 335h0"></path>
<path d="M443.5 335h0"></path>
<path d="M277.5 335h18"></path>
<g>
<path d="M295.5 335h0"></path>
<g>
<path d="M295.5 335h10"></path>
<path d="M415.5 335h10"></path>
<g class="terminal ">
<path d="M305.5 335h0"></path>
<path d="M415.5 335h0"></path>
<rect x="305.5" y="324" width="110" height="22" rx="10" ry="10"></rect>
<text x="360.5" y="339">expression</text>
</g>
</g>
<path d="M425.5 335h0"></path>
</g>
<path d="M425.5 335h18"></path>
<path d="M295.5 335a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M295.5 371h56.5"></path>
<path d="M369 371h56.5"></path>
<text x="360.5" y="376" class="comment">,</text>
</g>
<path d="M425.5 371a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M443.5 335h10"></path>
<path d="M453.5 335h10"></path>
<g class="comment ">
<path d="M463.5 335h0"></path>
<path d="M480.5 335h0"></path>
<text x="472" y="340" class="comment">)</text>
</g>
</g>
<path d="M533 335a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-439a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 415h10"></path>
<path d="M523 415h10"></path>
<g class="non-terminal ">
<path d="M104 415h0"></path>
<path d="M196 415h0"></path>
<rect x="104" y="404" width="92" height="22"></rect>
<text x="150" y="419">GROUPING</text>
</g>
<path d="M196 415h10"></path>
<path d="M206 415h10"></path>
<g class="non-terminal ">
<path d="M216 415h0"></path>
<path d="M272 415h0"></path>
<rect x="216" y="404" width="56" height="22"></rect>
<text x="244" y="419">SETS</text>
</g>
<path d="M272 415h10"></path>
<path d="M282 415h10"></path>
<g class="comment ">
<path d="M292 415h0"></path>
<path d="M309 415h0"></path>
<text x="300.5" y="420" class="comment">(</text>
</g>
<path d="M309 415h10"></path>
<path d="M319 415h10"></path>
<g>
<path d="M329 415h0"></path>
<path d="M486 415h0"></path>
<path d="M329 415h18"></path>
<g>
<path d="M347 415h0"></path>
<g>
<path d="M347 415h10"></path>
<path d="M458 415h10"></path>
<g class="terminal ">
<path d="M357 415h0"></path>
<path d="M458 415h0"></path>
<rect x="357" y="404" width="101" height="22" rx="10" ry="10"></rect>
<text x="407.5" y="419">groupItem</text>
</g>
</g>
<path d="M468 415h0"></path>
</g>
<path d="M468 415h18"></path>
<path d="M347 415a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M347 451h52"></path>
<path d="M416 451h52"></path>
<text x="407.5" y="456" class="comment">,</text>
</g>
<path d="M468 451a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M486 415h10"></path>
<path d="M496 415h10"></path>
<g class="comment ">
<path d="M506 415h0"></path>
<path d="M523 415h0"></path>
<text x="514.5" y="420" class="comment">)</text>
</g>
</g>
<path d="M533 415h18"></path>
<path d="M551 415h0"></path>
</g>
<path d="M551 415h36"></path>
</g>
<path d="M 587 415 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="318" height="133" viewBox="0 0 318 133">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M278 103h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h0"></path>
<path d="M76 31h18"></path>
<g>
<path d="M94 31h10"></path>
<path d="M214 31h10"></path>
<g class="terminal ">
<path d="M104 31h0"></path>
<path d="M214 31h0"></path>
<rect x="104" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="159" y="35">windowName</text>
</g>
</g>
<path d="M224 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-130a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M94 103h10"></path>
<path d="M214 103h10"></path>
<g class="terminal ">
<path d="M104 103h0"></path>
<path d="M214 103h0"></path>
<rect x="104" y="92" width="110" height="22" rx="10" ry="10"></rect>
<text x="159" y="107">windowSpec</text>
</g>
</g>
<path d="M224 103h18"></path>
<path d="M242 103h0"></path>
</g>
<path d="M242 103h36"></path>
</g>
<path d="M 278 103 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1074" height="774" viewBox="0 0 1074 774">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M50 56h18"></path>
<g>
<path d="M68 56h368"></path>
<path d="M638 56h368"></path>
<g>
<path d="M436 56h0"></path>
<path d="M638 56h0"></path>
<path d="M436 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M472 20h130"></path>
</g>
<path d="M602 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M436 56h36"></path>
<g>
<path d="M472 56h0"></path>
<g>
<path d="M472 56h10"></path>
<path d="M592 56h10"></path>
<g class="terminal ">
<path d="M482 56h0"></path>
<path d="M592 56h0"></path>
<rect x="482" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="537" y="60">windowName</text>
</g>
</g>
<path d="M602 56h0"></path>
</g>
<path d="M602 56h36"></path>
</g>
</g>
<path d="M1006 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-938a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 128h460.5"></path>
<path d="M545.5 128h460.5"></path>
<g class="comment ">
<path d="M528.5 128h0"></path>
<path d="M545.5 128h0"></path>
<text x="537" y="133" class="comment">(</text>
</g>
</g>
<path d="M1006 128a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-938a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 208h273"></path>
<path d="M733 208h273"></path>
<g>
<path d="M341 208h0"></path>
<path d="M733 208h0"></path>
<path d="M341 208a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M377 172h320"></path>
</g>
<path d="M697 172a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M341 208h36"></path>
<g>
<path d="M377 208h0"></path>
<g>
<path d="M377 208h10"></path>
<path d="M687 208h10"></path>
<g class="non-terminal ">
<path d="M387 208h0"></path>
<path d="M452 208h0"></path>
<rect x="387" y="197" width="65" height="22"></rect>
<text x="419.5" y="212">ORDER</text>
</g>
<path d="M452 208h10"></path>
<path d="M462 208h10"></path>
<g class="non-terminal ">
<path d="M472 208h0"></path>
<path d="M510 208h0"></path>
<rect x="472" y="197" width="38" height="22"></rect>
<text x="491" y="212">BY</text>
</g>
<path d="M510 208h10"></path>
<path d="M520 208h10"></path>
<g>
<path d="M530 208h0"></path>
<path d="M687 208h0"></path>
<path d="M530 208h18"></path>
<g>
<path d="M548 208h0"></path>
<g>
<path d="M548 208h10"></path>
<path d="M659 208h10"></path>
<g class="terminal ">
<path d="M558 208h0"></path>
<path d="M659 208h0"></path>
<rect x="558" y="197" width="101" height="22" rx="10" ry="10"></rect>
<text x="608.5" y="212">orderItem</text>
</g>
</g>
<path d="M669 208h0"></path>
</g>
<path d="M669 208h18"></path>
<path d="M548 208a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M548 244h52"></path>
<path d="M617 244h52"></path>
<text x="608.5" y="249" class="comment">,</text>
</g>
<path d="M669 244a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M697 208h0"></path>
</g>
<path d="M697 208h36"></path>
</g>
</g>
<path d="M1006 208a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-938a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 296h250.5"></path>
<path d="M755.5 296h250.5"></path>
<g>
<path d="M318.5 296h0"></path>
<path d="M755.5 296h0"></path>
<path d="M318.5 296a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M354.5 260h365"></path>
</g>
<path d="M719.5 260a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M318.5 296h36"></path>
<g>
<path d="M354.5 296h0"></path>
<g>
<path d="M354.5 296h10"></path>
<path d="M709.5 296h10"></path>
<g class="non-terminal ">
<path d="M364.5 296h0"></path>
<path d="M465.5 296h0"></path>
<rect x="364.5" y="285" width="101" height="22"></rect>
<text x="415" y="300">PARTITION</text>
</g>
<path d="M465.5 296h10"></path>
<path d="M475.5 296h10"></path>
<g class="non-terminal ">
<path d="M485.5 296h0"></path>
<path d="M523.5 296h0"></path>
<rect x="485.5" y="285" width="38" height="22"></rect>
<text x="504.5" y="300">BY</text>
</g>
<path d="M523.5 296h10"></path>
<path d="M533.5 296h10"></path>
<g>
<path d="M543.5 296h0"></path>
<path d="M709.5 296h0"></path>
<path d="M543.5 296h18"></path>
<g>
<path d="M561.5 296h0"></path>
<g>
<path d="M561.5 296h10"></path>
<path d="M681.5 296h10"></path>
<g class="terminal ">
<path d="M571.5 296h0"></path>
<path d="M681.5 296h0"></path>
<rect x="571.5" y="285" width="110" height="22" rx="10" ry="10"></rect>
<text x="626.5" y="300">expression</text>
</g>
</g>
<path d="M691.5 296h0"></path>
</g>
<path d="M691.5 296h18"></path>
<path d="M561.5 296a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M561.5 332h56.5"></path>
<path d="M635 332h56.5"></path>
<text x="626.5" y="337" class="comment">,</text>
</g>
<path d="M691.5 332a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M719.5 296h0"></path>
</g>
<path d="M719.5 296h36"></path>
</g>
</g>
<path d="M1006 296a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-938a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 384h10"></path>
<path d="M996 672h10"></path>
<g>
<path d="M78 384h0"></path>
<path d="M996 672h0"></path>
<path d="M78 384a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 348h846"></path>
</g>
<path d="M960 348a18 18 0 0 1 18 18v288a18 18 0 0 0 18 18"></path>
<path d="M78 384h36"></path>
<g>
<path d="M114 384h0"></path>
<path d="M960 672h0"></path>
<path d="M114 384h36"></path>
<g>
<path d="M150 384h0"></path>
<path d="M150 384h18"></path>
<g>
<path d="M168 384h318.5"></path>
<path d="M587.5 384h318.5"></path>
<g class="terminal ">
<path d="M486.5 384h0"></path>
<path d="M587.5 384h0"></path>
<rect x="486.5" y="373" width="101" height="22" rx="10" ry="10"></rect>
<text x="537" y="388">undefined</text>
</g>
</g>
<path d="M906 384a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-738a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M168 456h10"></path>
<path d="M896 528h10"></path>
<g class="non-terminal ">
<path d="M178 456h0"></path>
<path d="M243 456h0"></path>
<rect x="178" y="445" width="65" height="22"></rect>
<text x="210.5" y="460">RANGE</text>
</g>
<path d="M243 456h10"></path>
<path d="M253 456h10"></path>
<g class="terminal ">
<path d="M263 456h0"></path>
<path d="M526 456h0"></path>
<rect x="263" y="445" width="263" height="22" rx="10" ry="10"></rect>
<text x="394.5" y="460">numericOrIntervalExpression</text>
</g>
<path d="M526 456h10"></path>
<path d="M536 456h10"></path>
<g>
<path d="M546 456h0"></path>
<path d="M775 528h0"></path>
<g>
<path d="M546 456h0"></path>
<path d="M775 528h0"></path>
<path d="M546 456h36"></path>
<g>
<path d="M582 456h0"></path>
<path d="M582 456h18"></path>
<g>
<path d="M600 456h10"></path>
<path d="M711 456h10"></path>
<g class="non-terminal ">
<path d="M610 456h0"></path>
<path d="M711 456h0"></path>
<rect x="610" y="445" width="101" height="22"></rect>
<text x="660.5" y="460">PRECEDING</text>
</g>
</g>
<path d="M721 456a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-121a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M600 528h10"></path>
<path d="M711 528h10"></path>
<g class="non-terminal ">
<path d="M610 528h0"></path>
<path d="M711 528h0"></path>
<rect x="610" y="517" width="101" height="22"></rect>
<text x="660.5" y="532">FOLLOWING</text>
</g>
</g>
<path d="M721 528h18"></path>
<path d="M739 528h0"></path>
</g>
<path d="M739 528h36"></path>
</g>
</g>
<path d="M775 528h10"></path>
<path d="M785 528h10"></path>
<g class="terminal ">
<path d="M795 528h0"></path>
<path d="M896 528h0"></path>
<rect x="795" y="517" width="101" height="22" rx="10" ry="10"></rect>
<text x="845.5" y="532">undefined</text>
</g>
</g>
<path d="M906 528a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-738a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M168 600h59.5"></path>
<path d="M846.5 672h59.5"></path>
<g class="non-terminal ">
<path d="M227.5 600h0"></path>
<path d="M283.5 600h0"></path>
<rect x="227.5" y="589" width="56" height="22"></rect>
<text x="255.5" y="604">ROWS</text>
</g>
<path d="M283.5 600h10"></path>
<path d="M293.5 600h10"></path>
<g class="terminal ">
<path d="M303.5 600h0"></path>
<path d="M476.5 600h0"></path>
<rect x="303.5" y="589" width="173" height="22" rx="10" ry="10"></rect>
<text x="390" y="604">numericExpression</text>
</g>
<path d="M476.5 600h10"></path>
<path d="M486.5 600h10"></path>
<g>
<path d="M496.5 600h0"></path>
<path d="M725.5 672h0"></path>
<g>
<path d="M496.5 600h0"></path>
<path d="M725.5 672h0"></path>
<path d="M496.5 600h36"></path>
<g>
<path d="M532.5 600h0"></path>
<path d="M532.5 600h18"></path>
<g>
<path d="M550.5 600h10"></path>
<path d="M661.5 600h10"></path>
<g class="non-terminal ">
<path d="M560.5 600h0"></path>
<path d="M661.5 600h0"></path>
<rect x="560.5" y="589" width="101" height="22"></rect>
<text x="611" y="604">PRECEDING</text>
</g>
</g>
<path d="M671.5 600a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-121a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M550.5 672h10"></path>
<path d="M661.5 672h10"></path>
<g class="non-terminal ">
<path d="M560.5 672h0"></path>
<path d="M661.5 672h0"></path>
<rect x="560.5" y="661" width="101" height="22"></rect>
<text x="611" y="676">FOLLOWING</text>
</g>
</g>
<path d="M671.5 672h18"></path>
<path d="M689.5 672h0"></path>
</g>
<path d="M689.5 672h36"></path>
</g>
</g>
<path d="M725.5 672h10"></path>
<path d="M735.5 672h10"></path>
<g class="terminal ">
<path d="M745.5 672h0"></path>
<path d="M846.5 672h0"></path>
<rect x="745.5" y="661" width="101" height="22" rx="10" ry="10"></rect>
<text x="796" y="676">undefined</text>
</g>
</g>
<path d="M906 672h18"></path>
<path d="M924 672h0"></path>
</g>
<path d="M924 672h36"></path>
</g>
<path d="M960 672h36"></path>
</g>
</g>
<path d="M1006 672a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-938a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 744h460.5"></path>
<path d="M545.5 744h460.5"></path>
<g class="comment ">
<path d="M528.5 744h0"></path>
<path d="M545.5 744h0"></path>
<text x="537" y="749" class="comment">)</text>
</g>
</g>
<path d="M1006 744h18"></path>
<path d="M1024 744h0"></path>
</g>
<path d="M1024 744h10"></path>
<path d="M 1034 744 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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