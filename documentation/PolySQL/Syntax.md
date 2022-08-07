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
<svg class="railroad-diagram" width="246" height="158" viewBox="0 0 246 158">
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
<path d="M50 31a18 18 0 0 1 18 18v30a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 97h0"></path>
<path d="M160 97h0"></path>
<g class="terminal ">
<path d="M86 97h0"></path>
<path d="M160 97h0"></path>
<rect x="86" y="86" width="74" height="22" rx="10" ry="10"></rect>
<text x="123" y="101">delete</text>
</g>
</g>
<path d="M160 97a18 18 0 0 0 18 -18v-30a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v60a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 127h4.5"></path>
<path d="M155.5 127h4.5"></path>
<g class="terminal ">
<path d="M90.5 127h0"></path>
<path d="M155.5 127h0"></path>
<rect x="90.5" y="116" width="65" height="22" rx="10" ry="10"></rect>
<text x="123" y="131">query</text>
</g>
</g>
<path d="M160 127a18 18 0 0 0 18 -18v-60a18 18 0 0 1 18 -18"></path>
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
<svg class="railroad-diagram" width="908" height="968" viewBox="0 0 908 968">
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
<path d="M104 67h195.5"></path>
<path d="M608.5 67h195.5"></path>
<g class="non-terminal ">
<path d="M299.5 67h0"></path>
<path d="M355.5 67h0"></path>
<rect x="299.5" y="56" width="56" height="22"></rect>
<text x="327.5" y="71">WITH</text>
</g>
<path d="M355.5 67h10"></path>
<path d="M365.5 67h10"></path>
<g>
<path d="M375.5 67h0"></path>
<path d="M523.5 67h0"></path>
<path d="M375.5 67h18"></path>
<g>
<path d="M393.5 67h0"></path>
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
<path d="M505.5 67h0"></path>
</g>
<path d="M505.5 67h18"></path>
<path d="M393.5 67a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M393.5 103h47.5"></path>
<path d="M458 103h47.5"></path>
<text x="449.5" y="108" class="comment">,</text>
</g>
<path d="M505.5 103a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M523.5 67h10"></path>
<path d="M533.5 67h10"></path>
<g class="terminal ">
<path d="M543.5 67h0"></path>
<path d="M608.5 67h0"></path>
<rect x="543.5" y="56" width="65" height="22" rx="10" ry="10"></rect>
<text x="576" y="71">query</text>
</g>
</g>
<path d="M804 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M68 31a18 18 0 0 1 18 18v55a18 18 0 0 0 18 18"></path>
<g>
<path d="M104 122h0"></path>
<path d="M804 122h0"></path>
<g>
<path d="M104 122h0"></path>
<path d="M804 122h0"></path>
<g>
<path d="M104 122h0"></path>
<g>
<path d="M104 122h0"></path>
<path d="M804 122h0"></path>
<path d="M104 122h36"></path>
<g>
<path d="M140 122h263.5"></path>
<path d="M504.5 122h263.5"></path>
<g class="terminal ">
<path d="M403.5 122h0"></path>
<path d="M504.5 122h0"></path>
<rect x="403.5" y="111" width="101" height="22" rx="10" ry="10"></rect>
<text x="454" y="126">undefined</text>
</g>
</g>
<path d="M768 122h36"></path>
<path d="M104 122a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 158h216.5"></path>
<path d="M551.5 158h216.5"></path>
<g class="terminal ">
<path d="M356.5 158h0"></path>
<path d="M430.5 158h0"></path>
<rect x="356.5" y="147" width="74" height="22" rx="10" ry="10"></rect>
<text x="393.5" y="162">select</text>
</g>
<path d="M430.5 158h10"></path>
<path d="M440.5 158h10"></path>
<g class="terminal ">
<path d="M450.5 158h0"></path>
<path d="M551.5 158h0"></path>
<rect x="450.5" y="147" width="101" height="22" rx="10" ry="10"></rect>
<text x="501" y="162">undefined</text>
</g>
</g>
<path d="M768 158a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M104 122a18 18 0 0 1 18 18v30a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 188h167"></path>
<path d="M601 188h167"></path>
<g class="terminal ">
<path d="M307 188h0"></path>
<path d="M480 188h0"></path>
<rect x="307" y="177" width="173" height="22" rx="10" ry="10"></rect>
<text x="393.5" y="192">selectWithoutFrom</text>
</g>
<path d="M480 188h10"></path>
<path d="M490 188h10"></path>
<g class="terminal ">
<path d="M500 188h0"></path>
<path d="M601 188h0"></path>
<rect x="500" y="177" width="101" height="22" rx="10" ry="10"></rect>
<text x="550.5" y="192">undefined</text>
</g>
</g>
<path d="M768 188a18 18 0 0 0 18 -18v-30a18 18 0 0 1 18 -18"></path>
<path d="M104 122a18 18 0 0 1 18 18v85a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 243h18"></path>
<path d="M750 243h18"></path>
<g class="terminal ">
<path d="M158 243h0"></path>
<path d="M223 243h0"></path>
<rect x="158" y="232" width="65" height="22" rx="10" ry="10"></rect>
<text x="190.5" y="247">query</text>
</g>
<path d="M223 243h10"></path>
<path d="M233 243h10"></path>
<g class="non-terminal ">
<path d="M243 243h0"></path>
<path d="M308 243h0"></path>
<rect x="243" y="232" width="65" height="22"></rect>
<text x="275.5" y="247">UNION</text>
</g>
<path d="M308 243h10"></path>
<g>
<path d="M318 243h0"></path>
<path d="M554 243h0"></path>
<path d="M318 243a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M354 207h164"></path>
</g>
<path d="M518 207a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M318 243h36"></path>
<g>
<path d="M354 243h0"></path>
<g>
<path d="M354 243h0"></path>
<path d="M518 243h0"></path>
<path d="M354 243h36"></path>
<g>
<path d="M390 243h22.5"></path>
<path d="M459.5 243h22.5"></path>
<g class="non-terminal ">
<path d="M412.5 243h0"></path>
<path d="M459.5 243h0"></path>
<rect x="412.5" y="232" width="47" height="22"></rect>
<text x="436" y="247">ALL</text>
</g>
</g>
<path d="M482 243h36"></path>
<path d="M354 243a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M390 279h0"></path>
<path d="M482 279h0"></path>
<g class="non-terminal ">
<path d="M390 279h0"></path>
<path d="M482 279h0"></path>
<rect x="390" y="268" width="92" height="22"></rect>
<text x="436" y="283">DISTINCT</text>
</g>
</g>
<path d="M482 279a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M518 243h0"></path>
</g>
<path d="M518 243h36"></path>
</g>
<path d="M554 243h10"></path>
<g class="terminal ">
<path d="M564 243h0"></path>
<path d="M629 243h0"></path>
<rect x="564" y="232" width="65" height="22" rx="10" ry="10"></rect>
<text x="596.5" y="247">query</text>
</g>
<path d="M629 243h10"></path>
<path d="M639 243h10"></path>
<g class="terminal ">
<path d="M649 243h0"></path>
<path d="M750 243h0"></path>
<rect x="649" y="232" width="101" height="22" rx="10" ry="10"></rect>
<text x="699.5" y="247">undefined</text>
</g>
</g>
<path d="M768 243a18 18 0 0 0 18 -18v-85a18 18 0 0 1 18 -18"></path>
<path d="M104 122a18 18 0 0 1 18 18v176a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 334h13.5"></path>
<path d="M754.5 334h13.5"></path>
<g class="terminal ">
<path d="M153.5 334h0"></path>
<path d="M218.5 334h0"></path>
<rect x="153.5" y="323" width="65" height="22" rx="10" ry="10"></rect>
<text x="186" y="338">query</text>
</g>
<path d="M218.5 334h10"></path>
<path d="M228.5 334h10"></path>
<g class="non-terminal ">
<path d="M238.5 334h0"></path>
<path d="M312.5 334h0"></path>
<rect x="238.5" y="323" width="74" height="22"></rect>
<text x="275.5" y="338">EXCEPT</text>
</g>
<path d="M312.5 334h10"></path>
<g>
<path d="M322.5 334h0"></path>
<path d="M558.5 334h0"></path>
<path d="M322.5 334a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M358.5 298h164"></path>
</g>
<path d="M522.5 298a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M322.5 334h36"></path>
<g>
<path d="M358.5 334h0"></path>
<g>
<path d="M358.5 334h0"></path>
<path d="M522.5 334h0"></path>
<path d="M358.5 334h36"></path>
<g>
<path d="M394.5 334h22.5"></path>
<path d="M464 334h22.5"></path>
<g class="non-terminal ">
<path d="M417 334h0"></path>
<path d="M464 334h0"></path>
<rect x="417" y="323" width="47" height="22"></rect>
<text x="440.5" y="338">ALL</text>
</g>
</g>
<path d="M486.5 334h36"></path>
<path d="M358.5 334a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M394.5 370h0"></path>
<path d="M486.5 370h0"></path>
<g class="non-terminal ">
<path d="M394.5 370h0"></path>
<path d="M486.5 370h0"></path>
<rect x="394.5" y="359" width="92" height="22"></rect>
<text x="440.5" y="374">DISTINCT</text>
</g>
</g>
<path d="M486.5 370a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M522.5 334h0"></path>
</g>
<path d="M522.5 334h36"></path>
</g>
<path d="M558.5 334h10"></path>
<g class="terminal ">
<path d="M568.5 334h0"></path>
<path d="M633.5 334h0"></path>
<rect x="568.5" y="323" width="65" height="22" rx="10" ry="10"></rect>
<text x="601" y="338">query</text>
</g>
<path d="M633.5 334h10"></path>
<path d="M643.5 334h10"></path>
<g class="terminal ">
<path d="M653.5 334h0"></path>
<path d="M754.5 334h0"></path>
<rect x="653.5" y="323" width="101" height="22" rx="10" ry="10"></rect>
<text x="704" y="338">undefined</text>
</g>
</g>
<path d="M768 334a18 18 0 0 0 18 -18v-176a18 18 0 0 1 18 -18"></path>
<path d="M104 122a18 18 0 0 1 18 18v267a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 425h18"></path>
<path d="M750 425h18"></path>
<g class="terminal ">
<path d="M158 425h0"></path>
<path d="M223 425h0"></path>
<rect x="158" y="414" width="65" height="22" rx="10" ry="10"></rect>
<text x="190.5" y="429">query</text>
</g>
<path d="M223 425h10"></path>
<path d="M233 425h10"></path>
<g class="non-terminal ">
<path d="M243 425h0"></path>
<path d="M308 425h0"></path>
<rect x="243" y="414" width="65" height="22"></rect>
<text x="275.5" y="429">MINUS</text>
</g>
<path d="M308 425h10"></path>
<g>
<path d="M318 425h0"></path>
<path d="M554 425h0"></path>
<path d="M318 425a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M354 389h164"></path>
</g>
<path d="M518 389a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M318 425h36"></path>
<g>
<path d="M354 425h0"></path>
<g>
<path d="M354 425h0"></path>
<path d="M518 425h0"></path>
<path d="M354 425h36"></path>
<g>
<path d="M390 425h22.5"></path>
<path d="M459.5 425h22.5"></path>
<g class="non-terminal ">
<path d="M412.5 425h0"></path>
<path d="M459.5 425h0"></path>
<rect x="412.5" y="414" width="47" height="22"></rect>
<text x="436" y="429">ALL</text>
</g>
</g>
<path d="M482 425h36"></path>
<path d="M354 425a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M390 461h0"></path>
<path d="M482 461h0"></path>
<g class="non-terminal ">
<path d="M390 461h0"></path>
<path d="M482 461h0"></path>
<rect x="390" y="450" width="92" height="22"></rect>
<text x="436" y="465">DISTINCT</text>
</g>
</g>
<path d="M482 461a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M518 425h0"></path>
</g>
<path d="M518 425h36"></path>
</g>
<path d="M554 425h10"></path>
<g class="terminal ">
<path d="M564 425h0"></path>
<path d="M629 425h0"></path>
<rect x="564" y="414" width="65" height="22" rx="10" ry="10"></rect>
<text x="596.5" y="429">query</text>
</g>
<path d="M629 425h10"></path>
<path d="M639 425h10"></path>
<g class="terminal ">
<path d="M649 425h0"></path>
<path d="M750 425h0"></path>
<rect x="649" y="414" width="101" height="22" rx="10" ry="10"></rect>
<text x="699.5" y="429">undefined</text>
</g>
</g>
<path d="M768 425a18 18 0 0 0 18 -18v-267a18 18 0 0 1 18 -18"></path>
<path d="M104 122a18 18 0 0 1 18 18v358a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 516h0"></path>
<path d="M768 516h0"></path>
<g class="terminal ">
<path d="M140 516h0"></path>
<path d="M205 516h0"></path>
<rect x="140" y="505" width="65" height="22" rx="10" ry="10"></rect>
<text x="172.5" y="520">query</text>
</g>
<path d="M205 516h10"></path>
<path d="M215 516h10"></path>
<g class="non-terminal ">
<path d="M225 516h0"></path>
<path d="M326 516h0"></path>
<rect x="225" y="505" width="101" height="22"></rect>
<text x="275.5" y="520">INTERSECT</text>
</g>
<path d="M326 516h10"></path>
<g>
<path d="M336 516h0"></path>
<path d="M572 516h0"></path>
<path d="M336 516a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M372 480h164"></path>
</g>
<path d="M536 480a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M336 516h36"></path>
<g>
<path d="M372 516h0"></path>
<g>
<path d="M372 516h0"></path>
<path d="M536 516h0"></path>
<path d="M372 516h36"></path>
<g>
<path d="M408 516h22.5"></path>
<path d="M477.5 516h22.5"></path>
<g class="non-terminal ">
<path d="M430.5 516h0"></path>
<path d="M477.5 516h0"></path>
<rect x="430.5" y="505" width="47" height="22"></rect>
<text x="454" y="520">ALL</text>
</g>
</g>
<path d="M500 516h36"></path>
<path d="M372 516a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M408 552h0"></path>
<path d="M500 552h0"></path>
<g class="non-terminal ">
<path d="M408 552h0"></path>
<path d="M500 552h0"></path>
<rect x="408" y="541" width="92" height="22"></rect>
<text x="454" y="556">DISTINCT</text>
</g>
</g>
<path d="M500 552a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M536 516h0"></path>
</g>
<path d="M536 516h36"></path>
</g>
<path d="M572 516h10"></path>
<g class="terminal ">
<path d="M582 516h0"></path>
<path d="M647 516h0"></path>
<rect x="582" y="505" width="65" height="22" rx="10" ry="10"></rect>
<text x="614.5" y="520">query</text>
</g>
<path d="M647 516h10"></path>
<path d="M657 516h10"></path>
<g class="terminal ">
<path d="M667 516h0"></path>
<path d="M768 516h0"></path>
<rect x="667" y="505" width="101" height="22" rx="10" ry="10"></rect>
<text x="717.5" y="520">undefined</text>
</g>
</g>
<path d="M768 516a18 18 0 0 0 18 -18v-358a18 18 0 0 1 18 -18"></path>
</g>
<path d="M804 122h0"></path>
</g>
</g>
</g>
<path d="M804 122a18 18 0 0 0 18 -18v-55a18 18 0 0 1 18 -18"></path>
<path d="M68 31a18 18 0 0 1 18 18v540a18 18 0 0 0 18 18"></path>
<g>
<path d="M104 607h154"></path>
<path d="M650 607h154"></path>
<g>
<path d="M258 607h0"></path>
<path d="M650 607h0"></path>
<path d="M258 607a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M294 571h320"></path>
</g>
<path d="M614 571a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M258 607h36"></path>
<g>
<path d="M294 607h0"></path>
<g>
<path d="M294 607h10"></path>
<path d="M604 607h10"></path>
<g class="non-terminal ">
<path d="M304 607h0"></path>
<path d="M369 607h0"></path>
<rect x="304" y="596" width="65" height="22"></rect>
<text x="336.5" y="611">ORDER</text>
</g>
<path d="M369 607h10"></path>
<path d="M379 607h10"></path>
<g class="non-terminal ">
<path d="M389 607h0"></path>
<path d="M427 607h0"></path>
<rect x="389" y="596" width="38" height="22"></rect>
<text x="408" y="611">BY</text>
</g>
<path d="M427 607h10"></path>
<path d="M437 607h10"></path>
<g>
<path d="M447 607h0"></path>
<path d="M604 607h0"></path>
<path d="M447 607h18"></path>
<g>
<path d="M465 607h0"></path>
<g>
<path d="M465 607h10"></path>
<path d="M576 607h10"></path>
<g class="terminal ">
<path d="M475 607h0"></path>
<path d="M576 607h0"></path>
<rect x="475" y="596" width="101" height="22" rx="10" ry="10"></rect>
<text x="525.5" y="611">orderItem</text>
</g>
</g>
<path d="M586 607h0"></path>
</g>
<path d="M586 607h18"></path>
<path d="M465 607a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M465 643h52"></path>
<path d="M534 643h52"></path>
<text x="525.5" y="648" class="comment">,</text>
</g>
<path d="M586 643a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M614 607h0"></path>
</g>
<path d="M614 607h36"></path>
</g>
</g>
<path d="M804 607a18 18 0 0 0 18 -18v-540a18 18 0 0 1 18 -18"></path>
</g>
<path d="M840 31a18 18 0 0 1 18 18v584a18 18 0 0 1 -18 18h-772a18 18 0 0 0 -18 18v16a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 703h141"></path>
<path d="M699 703h141"></path>
<g>
<path d="M209 703h0"></path>
<path d="M699 703h0"></path>
<path d="M209 703a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M245 659h418"></path>
</g>
<path d="M663 659a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M209 703h36"></path>
<g>
<path d="M245 703h0"></path>
<g>
<path d="M245 703h10"></path>
<path d="M653 703h10"></path>
<g class="non-terminal ">
<path d="M255 703h0"></path>
<path d="M320 703h0"></path>
<rect x="255" y="692" width="65" height="22"></rect>
<text x="287.5" y="707">LIMIT</text>
</g>
<path d="M320 703h10"></path>
<path d="M330 703h10"></path>
<g>
<path d="M340 703h0"></path>
<path d="M653 703h0"></path>
<g>
<path d="M340 703h0"></path>
<g>
<path d="M340 703h0"></path>
<path d="M653 703h0"></path>
<path d="M340 703h36"></path>
<g>
<path d="M376 703h0"></path>
<path d="M617 703h0"></path>
<g>
<path d="M376 703h0"></path>
<path d="M542 703h0"></path>
<path d="M376 703a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M412 667h94"></path>
</g>
<path d="M506 667a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M376 703h36"></path>
<g>
<path d="M412 703h0"></path>
<g>
<path d="M412 703h10"></path>
<path d="M496 703h10"></path>
<g class="terminal ">
<path d="M422 703h0"></path>
<path d="M496 703h0"></path>
<rect x="422" y="692" width="74" height="22" rx="10" ry="10"></rect>
<text x="459" y="707">start,</text>
</g>
</g>
<path d="M506 703h0"></path>
</g>
<path d="M506 703h36"></path>
</g>
<path d="M542 703h10"></path>
<g class="terminal ">
<path d="M552 703h0"></path>
<path d="M617 703h0"></path>
<rect x="552" y="692" width="65" height="22" rx="10" ry="10"></rect>
<text x="584.5" y="707">count</text>
</g>
</g>
<path d="M617 703h36"></path>
<path d="M340 703a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M376 739h97"></path>
<path d="M520 739h97"></path>
<g class="non-terminal ">
<path d="M473 739h0"></path>
<path d="M520 739h0"></path>
<rect x="473" y="728" width="47" height="22"></rect>
<text x="496.5" y="743">ALL</text>
</g>
</g>
<path d="M617 739a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M653 703h0"></path>
</g>
</g>
</g>
<path d="M663 703h0"></path>
</g>
<path d="M663 703h36"></path>
</g>
</g>
<path d="M840 703a18 18 0 0 1 18 18v19a18 18 0 0 1 -18 18h-772a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 802h186.5"></path>
<path d="M653.5 802h186.5"></path>
<g>
<path d="M254.5 802h0"></path>
<path d="M653.5 802h0"></path>
<path d="M254.5 802a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M290.5 766h327"></path>
</g>
<path d="M617.5 766a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M254.5 802h36"></path>
<g>
<path d="M290.5 802h0"></path>
<g>
<path d="M290.5 802h10"></path>
<path d="M607.5 802h10"></path>
<g class="non-terminal ">
<path d="M300.5 802h0"></path>
<path d="M374.5 802h0"></path>
<rect x="300.5" y="791" width="74" height="22"></rect>
<text x="337.5" y="806">OFFSET</text>
</g>
<path d="M374.5 802h10"></path>
<path d="M384.5 802h10"></path>
<g class="terminal ">
<path d="M394.5 802h0"></path>
<path d="M459.5 802h0"></path>
<rect x="394.5" y="791" width="65" height="22" rx="10" ry="10"></rect>
<text x="427" y="806">start</text>
</g>
<path d="M459.5 802h10"></path>
<path d="M469.5 802h10"></path>
<g>
<path d="M479.5 802h0"></path>
<path d="M607.5 802h0"></path>
<g>
<path d="M479.5 802h0"></path>
<g>
<path d="M479.5 802h0"></path>
<path d="M607.5 802h0"></path>
<path d="M479.5 802h36"></path>
<g>
<path d="M515.5 802h4.5"></path>
<path d="M567 802h4.5"></path>
<g class="non-terminal ">
<path d="M520 802h0"></path>
<path d="M567 802h0"></path>
<rect x="520" y="791" width="47" height="22"></rect>
<text x="543.5" y="806">ROW</text>
</g>
</g>
<path d="M571.5 802h36"></path>
<path d="M479.5 802a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M515.5 838h0"></path>
<path d="M571.5 838h0"></path>
<g class="non-terminal ">
<path d="M515.5 838h0"></path>
<path d="M571.5 838h0"></path>
<rect x="515.5" y="827" width="56" height="22"></rect>
<text x="543.5" y="842">ROWS</text>
</g>
</g>
<path d="M571.5 838a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M607.5 802h0"></path>
</g>
</g>
</g>
<path d="M617.5 802h0"></path>
</g>
<path d="M617.5 802h36"></path>
</g>
</g>
<path d="M840 802a18 18 0 0 1 18 18v19a18 18 0 0 1 -18 18h-772a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 901h74.5"></path>
<path d="M765.5 901h74.5"></path>
<g>
<path d="M142.5 901h0"></path>
<path d="M765.5 901h0"></path>
<path d="M142.5 901a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M178.5 865h551"></path>
</g>
<path d="M729.5 865a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M142.5 901h36"></path>
<g>
<path d="M178.5 901h0"></path>
<g>
<path d="M178.5 901h10"></path>
<path d="M719.5 901h10"></path>
<g class="non-terminal ">
<path d="M188.5 901h0"></path>
<path d="M253.5 901h0"></path>
<rect x="188.5" y="890" width="65" height="22"></rect>
<text x="221" y="905">FETCH</text>
</g>
<path d="M253.5 901h10"></path>
<path d="M263.5 901h10"></path>
<g>
<path d="M273.5 901h0"></path>
<path d="M410.5 901h0"></path>
<g>
<path d="M273.5 901h0"></path>
<g>
<path d="M273.5 901h0"></path>
<path d="M410.5 901h0"></path>
<path d="M273.5 901h36"></path>
<g>
<path d="M309.5 901h0"></path>
<path d="M374.5 901h0"></path>
<g class="non-terminal ">
<path d="M309.5 901h0"></path>
<path d="M374.5 901h0"></path>
<rect x="309.5" y="890" width="65" height="22"></rect>
<text x="342" y="905">FIRST</text>
</g>
</g>
<path d="M374.5 901h36"></path>
<path d="M273.5 901a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M309.5 937h4.5"></path>
<path d="M370 937h4.5"></path>
<g class="non-terminal ">
<path d="M314 937h0"></path>
<path d="M370 937h0"></path>
<rect x="314" y="926" width="56" height="22"></rect>
<text x="342" y="941">NEXT</text>
</g>
</g>
<path d="M374.5 937a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M410.5 901h0"></path>
</g>
</g>
<path d="M410.5 901h10"></path>
<path d="M420.5 901h10"></path>
<g class="terminal ">
<path d="M430.5 901h0"></path>
<path d="M495.5 901h0"></path>
<rect x="430.5" y="890" width="65" height="22" rx="10" ry="10"></rect>
<text x="463" y="905">count</text>
</g>
<path d="M495.5 901h10"></path>
<path d="M505.5 901h10"></path>
<g>
<path d="M515.5 901h0"></path>
<path d="M643.5 901h0"></path>
<g>
<path d="M515.5 901h0"></path>
<g>
<path d="M515.5 901h0"></path>
<path d="M643.5 901h0"></path>
<path d="M515.5 901h36"></path>
<g>
<path d="M551.5 901h4.5"></path>
<path d="M603 901h4.5"></path>
<g class="non-terminal ">
<path d="M556 901h0"></path>
<path d="M603 901h0"></path>
<rect x="556" y="890" width="47" height="22"></rect>
<text x="579.5" y="905">ROW</text>
</g>
</g>
<path d="M607.5 901h36"></path>
<path d="M515.5 901a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M551.5 937h0"></path>
<path d="M607.5 937h0"></path>
<g class="non-terminal ">
<path d="M551.5 937h0"></path>
<path d="M607.5 937h0"></path>
<rect x="551.5" y="926" width="56" height="22"></rect>
<text x="579.5" y="941">ROWS</text>
</g>
</g>
<path d="M607.5 937a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M643.5 901h0"></path>
</g>
</g>
<path d="M643.5 901h10"></path>
<path d="M653.5 901h10"></path>
<g class="non-terminal ">
<path d="M663.5 901h0"></path>
<path d="M719.5 901h0"></path>
<rect x="663.5" y="890" width="56" height="22"></rect>
<text x="691.5" y="905">ONLY</text>
</g>
</g>
<path d="M729.5 901h0"></path>
</g>
<path d="M729.5 901h36"></path>
</g>
</g>
<path d="M840 901h18"></path>
<path d="M858 901h0"></path>
</g>
<path d="M858 901h10"></path>
<path d="M 868 901 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="884" height="647" viewBox="0 0 884 647">
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
<path d="M816 56a18 18 0 0 1 18 18v19a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 147h250.5"></path>
<path d="M565.5 147h250.5"></path>
<g>
<path d="M318.5 147h0"></path>
<path d="M565.5 147h0"></path>
<g>
<path d="M318.5 147h0"></path>
<g>
<path d="M318.5 147h0"></path>
<path d="M565.5 147h0"></path>
<path d="M318.5 147h36"></path>
<g>
<path d="M354.5 147h79"></path>
<path d="M450.5 147h79"></path>
<g class="comment ">
<path d="M433.5 147h0"></path>
<path d="M450.5 147h0"></path>
<text x="442" y="152" class="comment">&#42;</text>
</g>
</g>
<path d="M529.5 147h36"></path>
<path d="M318.5 147a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M354.5 183h0"></path>
<path d="M529.5 183h0"></path>
<g>
<path d="M354.5 183h0"></path>
<path d="M529.5 183h0"></path>
<path d="M354.5 183h18"></path>
<g>
<path d="M372.5 183h0"></path>
<g>
<path d="M372.5 183h10"></path>
<path d="M501.5 183h10"></path>
<g class="terminal ">
<path d="M382.5 183h0"></path>
<path d="M501.5 183h0"></path>
<rect x="382.5" y="172" width="119" height="22" rx="10" ry="10"></rect>
<text x="442" y="187">projectItem</text>
</g>
</g>
<path d="M511.5 183h0"></path>
</g>
<path d="M511.5 183h18"></path>
<path d="M372.5 183a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M372.5 219h61"></path>
<path d="M450.5 219h61"></path>
<text x="442" y="224" class="comment">,</text>
</g>
<path d="M511.5 219a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M529.5 183a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M565.5 147h0"></path>
</g>
</g>
</g>
<path d="M816 147a18 18 0 0 1 18 18v44a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 263h258.5"></path>
<path d="M557.5 263h258.5"></path>
<g class="non-terminal ">
<path d="M326.5 263h0"></path>
<path d="M382.5 263h0"></path>
<rect x="326.5" y="252" width="56" height="22"></rect>
<text x="354.5" y="267">FROM</text>
</g>
<path d="M382.5 263h10"></path>
<path d="M392.5 263h10"></path>
<g class="terminal ">
<path d="M402.5 263h0"></path>
<path d="M557.5 263h0"></path>
<rect x="402.5" y="252" width="155" height="22" rx="10" ry="10"></rect>
<text x="480" y="267">tableExpression</text>
</g>
</g>
<path d="M816 263a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 343h199"></path>
<path d="M617 343h199"></path>
<g>
<path d="M267 343h0"></path>
<path d="M617 343h0"></path>
<path d="M267 343a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M303 307h278"></path>
</g>
<path d="M581 307a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M267 343h36"></path>
<g>
<path d="M303 343h0"></path>
<g>
<path d="M303 343h10"></path>
<path d="M571 343h10"></path>
<g class="non-terminal ">
<path d="M313 343h0"></path>
<path d="M378 343h0"></path>
<rect x="313" y="332" width="65" height="22"></rect>
<text x="345.5" y="347">WHERE</text>
</g>
<path d="M378 343h10"></path>
<path d="M388 343h10"></path>
<g class="terminal ">
<path d="M398 343h0"></path>
<path d="M571 343h0"></path>
<rect x="398" y="332" width="173" height="22" rx="10" ry="10"></rect>
<text x="484.5" y="347">booleanExpression</text>
</g>
</g>
<path d="M581 343h0"></path>
</g>
<path d="M581 343h36"></path>
</g>
</g>
<path d="M816 343a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 423h168"></path>
<path d="M648 423h168"></path>
<g>
<path d="M236 423h0"></path>
<path d="M648 423h0"></path>
<path d="M236 423a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M272 387h340"></path>
</g>
<path d="M612 387a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M236 423h36"></path>
<g>
<path d="M272 423h0"></path>
<g>
<path d="M272 423h10"></path>
<path d="M602 423h10"></path>
<g class="non-terminal ">
<path d="M282 423h0"></path>
<path d="M347 423h0"></path>
<rect x="282" y="412" width="65" height="22"></rect>
<text x="314.5" y="427">GROUP</text>
</g>
<path d="M347 423h10"></path>
<path d="M357 423h10"></path>
<g class="non-terminal ">
<path d="M367 423h0"></path>
<path d="M405 423h0"></path>
<rect x="367" y="412" width="38" height="22"></rect>
<text x="386" y="427">BY</text>
</g>
<path d="M405 423h10"></path>
<path d="M415 423h10"></path>
<g>
<path d="M425 423h0"></path>
<path d="M602 423h0"></path>
<g>
<path d="M425 423h0"></path>
<g>
<path d="M425 423h10"></path>
<path d="M592 423h10"></path>
<g>
<path d="M435 423h0"></path>
<path d="M592 423h0"></path>
<path d="M435 423h18"></path>
<g>
<path d="M453 423h0"></path>
<g>
<path d="M453 423h10"></path>
<path d="M564 423h10"></path>
<g class="terminal ">
<path d="M463 423h0"></path>
<path d="M564 423h0"></path>
<rect x="463" y="412" width="101" height="22" rx="10" ry="10"></rect>
<text x="513.5" y="427">groupItem</text>
</g>
</g>
<path d="M574 423h0"></path>
</g>
<path d="M574 423h18"></path>
<path d="M453 423a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M453 459h52"></path>
<path d="M522 459h52"></path>
<text x="513.5" y="464" class="comment">,</text>
</g>
<path d="M574 459a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M602 423h0"></path>
</g>
</g>
</g>
<path d="M612 423h0"></path>
</g>
<path d="M612 423h36"></path>
</g>
</g>
<path d="M816 423a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 511h194.5"></path>
<path d="M621.5 511h194.5"></path>
<g>
<path d="M262.5 511h0"></path>
<path d="M621.5 511h0"></path>
<path d="M262.5 511a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M298.5 475h287"></path>
</g>
<path d="M585.5 475a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M262.5 511h36"></path>
<g>
<path d="M298.5 511h0"></path>
<g>
<path d="M298.5 511h10"></path>
<path d="M575.5 511h10"></path>
<g class="non-terminal ">
<path d="M308.5 511h0"></path>
<path d="M382.5 511h0"></path>
<rect x="308.5" y="500" width="74" height="22"></rect>
<text x="345.5" y="515">HAVING</text>
</g>
<path d="M382.5 511h10"></path>
<path d="M392.5 511h10"></path>
<g class="terminal ">
<path d="M402.5 511h0"></path>
<path d="M575.5 511h0"></path>
<rect x="402.5" y="500" width="173" height="22" rx="10" ry="10"></rect>
<text x="489" y="515">booleanExpression</text>
</g>
</g>
<path d="M585.5 511h0"></path>
</g>
<path d="M585.5 511h36"></path>
</g>
</g>
<path d="M816 511a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 591h10"></path>
<path d="M806 591h10"></path>
<g>
<path d="M78 591h0"></path>
<path d="M806 591h0"></path>
<path d="M78 591a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 555h656"></path>
</g>
<path d="M770 555a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 591h36"></path>
<g>
<path d="M114 591h0"></path>
<g>
<path d="M114 591h10"></path>
<path d="M760 591h10"></path>
<g class="non-terminal ">
<path d="M124 591h0"></path>
<path d="M198 591h0"></path>
<rect x="124" y="580" width="74" height="22"></rect>
<text x="161" y="595">WINDOW</text>
</g>
<path d="M198 591h10"></path>
<path d="M208 591h10"></path>
<g class="terminal ">
<path d="M218 591h0"></path>
<path d="M328 591h0"></path>
<rect x="218" y="580" width="110" height="22" rx="10" ry="10"></rect>
<text x="273" y="595">windowName</text>
</g>
<path d="M328 591h10"></path>
<path d="M338 591h10"></path>
<g class="non-terminal ">
<path d="M348 591h0"></path>
<path d="M386 591h0"></path>
<rect x="348" y="580" width="38" height="22"></rect>
<text x="367" y="595">AS</text>
</g>
<path d="M386 591h10"></path>
<path d="M396 591h10"></path>
<g>
<path d="M406 591h0"></path>
<path d="M760 591h0"></path>
<path d="M406 591h18"></path>
<g>
<path d="M424 591h0"></path>
<g>
<path d="M424 591h10"></path>
<path d="M732 591h10"></path>
<g class="terminal ">
<path d="M434 591h0"></path>
<path d="M544 591h0"></path>
<rect x="434" y="580" width="110" height="22" rx="10" ry="10"></rect>
<text x="489" y="595">windowName</text>
</g>
<path d="M544 591h10"></path>
<path d="M554 591h10"></path>
<g class="non-terminal ">
<path d="M564 591h0"></path>
<path d="M602 591h0"></path>
<rect x="564" y="580" width="38" height="22"></rect>
<text x="583" y="595">AS</text>
</g>
<path d="M602 591h10"></path>
<path d="M612 591h10"></path>
<g class="terminal ">
<path d="M622 591h0"></path>
<path d="M732 591h0"></path>
<rect x="622" y="580" width="110" height="22" rx="10" ry="10"></rect>
<text x="677" y="595">windowSpec</text>
</g>
</g>
<path d="M742 591h0"></path>
</g>
<path d="M742 591h18"></path>
<path d="M424 591a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M424 627h150.5"></path>
<path d="M591.5 627h150.5"></path>
<text x="583" y="632" class="comment">,</text>
</g>
<path d="M742 627a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M770 591h0"></path>
</g>
<path d="M770 591h36"></path>
</g>
</g>
<path d="M816 591h18"></path>
<path d="M834 591h0"></path>
</g>
<path d="M834 591h10"></path>
<path d="M 844 591 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="476" height="239" viewBox="0 0 476 239">
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
<path d="M408 56a18 18 0 0 1 18 18v19a18 18 0 0 1 -18 18h-340a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 147h46.5"></path>
<path d="M361.5 147h46.5"></path>
<g>
<path d="M114.5 147h0"></path>
<path d="M361.5 147h0"></path>
<g>
<path d="M114.5 147h0"></path>
<g>
<path d="M114.5 147h0"></path>
<path d="M361.5 147h0"></path>
<path d="M114.5 147h36"></path>
<g>
<path d="M150.5 147h79"></path>
<path d="M246.5 147h79"></path>
<g class="comment ">
<path d="M229.5 147h0"></path>
<path d="M246.5 147h0"></path>
<text x="238" y="152" class="comment">&#42;</text>
</g>
</g>
<path d="M325.5 147h36"></path>
<path d="M114.5 147a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M150.5 183h0"></path>
<path d="M325.5 183h0"></path>
<g>
<path d="M150.5 183h0"></path>
<path d="M325.5 183h0"></path>
<path d="M150.5 183h18"></path>
<g>
<path d="M168.5 183h0"></path>
<g>
<path d="M168.5 183h10"></path>
<path d="M297.5 183h10"></path>
<g class="terminal ">
<path d="M178.5 183h0"></path>
<path d="M297.5 183h0"></path>
<rect x="178.5" y="172" width="119" height="22" rx="10" ry="10"></rect>
<text x="238" y="187">projectItem</text>
</g>
</g>
<path d="M307.5 183h0"></path>
</g>
<path d="M307.5 183h18"></path>
<path d="M168.5 183a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M168.5 219h61"></path>
<path d="M246.5 219h61"></path>
<text x="238" y="224" class="comment">,</text>
</g>
<path d="M307.5 219a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M325.5 183a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M361.5 147h0"></path>
</g>
</g>
</g>
<path d="M408 147h18"></path>
<path d="M426 147h0"></path>
</g>
<path d="M426 147h10"></path>
<path d="M 436 147 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="643" height="131" viewBox="0 0 643 131">
<g transform="translate(.5 .5)">
<g>
<path d="M20 54v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 64h10"></path>
<g>
<path d="M50 64h0"></path>
<g>
<path d="M50 64h0"></path>
<path d="M593 64h0"></path>
<path d="M50 64h36"></path>
<g>
<path d="M86 64h0"></path>
<path d="M557 64h0"></path>
<g class="terminal ">
<path d="M86 64h0"></path>
<path d="M196 64h0"></path>
<rect x="86" y="53" width="110" height="22" rx="10" ry="10"></rect>
<text x="141" y="68">expression</text>
</g>
<path d="M196 64h10"></path>
<g>
<path d="M206 64h0"></path>
<path d="M557 64h0"></path>
<path d="M206 64a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M242 20h279"></path>
</g>
<path d="M521 20a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M206 64h36"></path>
<g>
<path d="M242 64h0"></path>
<g>
<path d="M242 64h10"></path>
<path d="M511 64h10"></path>
<g>
<path d="M252 64h0"></path>
<path d="M382 64h0"></path>
<path d="M252 64a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M288 28h58"></path>
</g>
<path d="M346 28a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M252 64h36"></path>
<g>
<path d="M288 64h0"></path>
<g>
<path d="M288 64h10"></path>
<path d="M336 64h10"></path>
<g class="non-terminal ">
<path d="M298 64h0"></path>
<path d="M336 64h0"></path>
<rect x="298" y="53" width="38" height="22"></rect>
<text x="317" y="68">AS</text>
</g>
</g>
<path d="M346 64h0"></path>
</g>
<path d="M346 64h36"></path>
</g>
<path d="M382 64h10"></path>
<g class="terminal ">
<path d="M392 64h0"></path>
<path d="M511 64h0"></path>
<rect x="392" y="53" width="119" height="22" rx="10" ry="10"></rect>
<text x="451.5" y="68">columnAlias</text>
</g>
</g>
<path d="M521 64h0"></path>
</g>
<path d="M521 64h36"></path>
</g>
</g>
<path d="M557 64h36"></path>
<path d="M50 64a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 100h143.5"></path>
<path d="M413.5 100h143.5"></path>
<g class="terminal ">
<path d="M229.5 100h0"></path>
<path d="M339.5 100h0"></path>
<rect x="229.5" y="89" width="110" height="22" rx="10" ry="10"></rect>
<text x="284.5" y="104">tableAlias</text>
</g>
<path d="M339.5 100h10"></path>
<path d="M349.5 100h10"></path>
<g class="comment ">
<path d="M359.5 100h0"></path>
<path d="M376.5 100h0"></path>
<text x="368" y="105" class="comment">.</text>
</g>
<path d="M376.5 100h10"></path>
<path d="M386.5 100h10"></path>
<g class="comment ">
<path d="M396.5 100h0"></path>
<path d="M413.5 100h0"></path>
<text x="405" y="105" class="comment">&#42;</text>
</g>
</g>
<path d="M557 100a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M593 64h0"></path>
</g>
<path d="M593 64h10"></path>
<path d="M 603 64 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1388" height="337" viewBox="0 0 1388 337">
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
<path d="M86 31h507"></path>
<path d="M795 31h507"></path>
<g>
<path d="M593 31h0"></path>
<path d="M795 31h0"></path>
<path d="M593 31h18"></path>
<g>
<path d="M611 31h0"></path>
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
<path d="M777 31h0"></path>
</g>
<path d="M777 31h18"></path>
<path d="M611 31a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M611 67h74.5"></path>
<path d="M702.5 67h74.5"></path>
<text x="694" y="72" class="comment">,</text>
</g>
<path d="M777 67a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M1302 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v52a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 119h0"></path>
<path d="M1302 119h0"></path>
<g class="terminal ">
<path d="M86 119h0"></path>
<path d="M241 119h0"></path>
<rect x="86" y="108" width="155" height="22" rx="10" ry="10"></rect>
<text x="163.5" y="123">tableExpression</text>
</g>
<path d="M241 119h10"></path>
<g>
<path d="M251 119h0"></path>
<path d="M426 119h0"></path>
<path d="M251 119a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M287 83h103"></path>
</g>
<path d="M390 83a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M251 119h36"></path>
<g>
<path d="M287 119h0"></path>
<g>
<path d="M287 119h10"></path>
<path d="M380 119h10"></path>
<g class="non-terminal ">
<path d="M297 119h0"></path>
<path d="M380 119h0"></path>
<rect x="297" y="108" width="83" height="22"></rect>
<text x="338.5" y="123">NATURAL</text>
</g>
</g>
<path d="M390 119h0"></path>
</g>
<path d="M390 119h36"></path>
</g>
<g>
<path d="M426 119h0"></path>
<path d="M822 119h0"></path>
<path d="M426 119a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M462 75h324"></path>
</g>
<path d="M786 75a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M426 119h36"></path>
<g>
<path d="M462 119h0"></path>
<g>
<path d="M462 119h10"></path>
<path d="M776 119h10"></path>
<g>
<path d="M472 119h0"></path>
<path d="M609 119h0"></path>
<g>
<path d="M472 119h0"></path>
<g>
<path d="M472 119h0"></path>
<path d="M609 119h0"></path>
<path d="M472 119h36"></path>
<g>
<path d="M508 119h4.5"></path>
<path d="M568.5 119h4.5"></path>
<g class="non-terminal ">
<path d="M512.5 119h0"></path>
<path d="M568.5 119h0"></path>
<rect x="512.5" y="108" width="56" height="22"></rect>
<text x="540.5" y="123">LEFT</text>
</g>
</g>
<path d="M573 119h36"></path>
<path d="M472 119a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M508 155h0"></path>
<path d="M573 155h0"></path>
<g class="non-terminal ">
<path d="M508 155h0"></path>
<path d="M573 155h0"></path>
<rect x="508" y="144" width="65" height="22"></rect>
<text x="540.5" y="159">RIGHT</text>
</g>
</g>
<path d="M573 155a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M472 119a18 18 0 0 1 18 18v30a18 18 0 0 0 18 18"></path>
<g>
<path d="M508 185h4.5"></path>
<path d="M568.5 185h4.5"></path>
<g class="non-terminal ">
<path d="M512.5 185h0"></path>
<path d="M568.5 185h0"></path>
<rect x="512.5" y="174" width="56" height="22"></rect>
<text x="540.5" y="189">FULL</text>
</g>
</g>
<path d="M573 185a18 18 0 0 0 18 -18v-30a18 18 0 0 1 18 -18"></path>
</g>
<path d="M609 119h0"></path>
</g>
</g>
<path d="M609 119h10"></path>
<g>
<path d="M619 119h0"></path>
<path d="M776 119h0"></path>
<path d="M619 119a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M655 83h85"></path>
</g>
<path d="M740 83a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M619 119h36"></path>
<g>
<path d="M655 119h0"></path>
<g>
<path d="M655 119h10"></path>
<path d="M730 119h10"></path>
<g class="non-terminal ">
<path d="M665 119h0"></path>
<path d="M730 119h0"></path>
<rect x="665" y="108" width="65" height="22"></rect>
<text x="697.5" y="123">OUTER</text>
</g>
</g>
<path d="M740 119h0"></path>
</g>
<path d="M740 119h36"></path>
</g>
</g>
<path d="M786 119h0"></path>
</g>
<path d="M786 119h36"></path>
</g>
<path d="M822 119h10"></path>
<g class="non-terminal ">
<path d="M832 119h0"></path>
<path d="M888 119h0"></path>
<rect x="832" y="108" width="56" height="22"></rect>
<text x="860" y="123">JOIN</text>
</g>
<path d="M888 119h10"></path>
<path d="M898 119h10"></path>
<g class="terminal ">
<path d="M908 119h0"></path>
<path d="M1063 119h0"></path>
<rect x="908" y="108" width="155" height="22" rx="10" ry="10"></rect>
<text x="985.5" y="123">tableExpression</text>
</g>
<path d="M1063 119h10"></path>
<g>
<path d="M1073 119h0"></path>
<path d="M1302 119h0"></path>
<path d="M1073 119a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1109 83h157"></path>
</g>
<path d="M1266 83a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1073 119h36"></path>
<g>
<path d="M1109 119h0"></path>
<g>
<path d="M1109 119h10"></path>
<path d="M1256 119h10"></path>
<g class="terminal ">
<path d="M1119 119h0"></path>
<path d="M1256 119h0"></path>
<rect x="1119" y="108" width="137" height="22" rx="10" ry="10"></rect>
<text x="1187.5" y="123">joinCondition</text>
</g>
</g>
<path d="M1266 119h0"></path>
</g>
<path d="M1266 119h36"></path>
</g>
</g>
<path d="M1302 119a18 18 0 0 0 18 -18v-52a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v148a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 215h362.5"></path>
<path d="M939.5 215h362.5"></path>
<g class="terminal ">
<path d="M448.5 215h0"></path>
<path d="M603.5 215h0"></path>
<rect x="448.5" y="204" width="155" height="22" rx="10" ry="10"></rect>
<text x="526" y="219">tableExpression</text>
</g>
<path d="M603.5 215h10"></path>
<path d="M613.5 215h10"></path>
<g class="non-terminal ">
<path d="M623.5 215h0"></path>
<path d="M688.5 215h0"></path>
<rect x="623.5" y="204" width="65" height="22"></rect>
<text x="656" y="219">CROSS</text>
</g>
<path d="M688.5 215h10"></path>
<path d="M698.5 215h10"></path>
<g class="non-terminal ">
<path d="M708.5 215h0"></path>
<path d="M764.5 215h0"></path>
<rect x="708.5" y="204" width="56" height="22"></rect>
<text x="736.5" y="219">JOIN</text>
</g>
<path d="M764.5 215h10"></path>
<path d="M774.5 215h10"></path>
<g class="terminal ">
<path d="M784.5 215h0"></path>
<path d="M939.5 215h0"></path>
<rect x="784.5" y="204" width="155" height="22" rx="10" ry="10"></rect>
<text x="862" y="219">tableExpression</text>
</g>
</g>
<path d="M1302 215a18 18 0 0 0 18 -18v-148a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v203a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 270h296"></path>
<path d="M1006 270h296"></path>
<g class="terminal ">
<path d="M382 270h0"></path>
<path d="M537 270h0"></path>
<rect x="382" y="259" width="155" height="22" rx="10" ry="10"></rect>
<text x="459.5" y="274">tableExpression</text>
</g>
<path d="M537 270h10"></path>
<g>
<path d="M547 270h0"></path>
<path d="M756 270h0"></path>
<path d="M547 270a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M583 234h137"></path>
</g>
<path d="M720 234a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M547 270h36"></path>
<g>
<path d="M583 270h0"></path>
<g>
<path d="M583 270h0"></path>
<path d="M720 270h0"></path>
<path d="M583 270h36"></path>
<g>
<path d="M619 270h0"></path>
<path d="M684 270h0"></path>
<g class="non-terminal ">
<path d="M619 270h0"></path>
<path d="M684 270h0"></path>
<rect x="619" y="259" width="65" height="22"></rect>
<text x="651.5" y="274">CROSS</text>
</g>
</g>
<path d="M684 270h36"></path>
<path d="M583 270a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M619 306h0"></path>
<path d="M684 306h0"></path>
<g class="non-terminal ">
<path d="M619 306h0"></path>
<path d="M684 306h0"></path>
<rect x="619" y="295" width="65" height="22"></rect>
<text x="651.5" y="310">OUTER</text>
</g>
</g>
<path d="M684 306a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M720 270h0"></path>
</g>
<path d="M720 270h36"></path>
</g>
<path d="M756 270h10"></path>
<g class="non-terminal ">
<path d="M766 270h0"></path>
<path d="M831 270h0"></path>
<rect x="766" y="259" width="65" height="22"></rect>
<text x="798.5" y="274">APPLY</text>
</g>
<path d="M831 270h10"></path>
<path d="M841 270h10"></path>
<g class="terminal ">
<path d="M851 270h0"></path>
<path d="M1006 270h0"></path>
<rect x="851" y="259" width="155" height="22" rx="10" ry="10"></rect>
<text x="928.5" y="274">tableExpression</text>
</g>
</g>
<path d="M1302 270a18 18 0 0 0 18 -18v-203a18 18 0 0 1 18 -18"></path>
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
<svg class="railroad-diagram" width="461" height="123" viewBox="0 0 461 123">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M411 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h29"></path>
<path d="M346 31h29"></path>
<g class="non-terminal ">
<path d="M115 31h0"></path>
<path d="M153 31h0"></path>
<rect x="115" y="20" width="38" height="22"></rect>
<text x="134" y="35">ON</text>
</g>
<path d="M153 31h10"></path>
<path d="M163 31h10"></path>
<g class="terminal ">
<path d="M173 31h0"></path>
<path d="M346 31h0"></path>
<rect x="173" y="20" width="173" height="22" rx="10" ry="10"></rect>
<text x="259.5" y="35">booleanExpression</text>
</g>
</g>
<path d="M375 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h0"></path>
<path d="M375 67h0"></path>
<g class="non-terminal ">
<path d="M86 67h0"></path>
<path d="M151 67h0"></path>
<rect x="86" y="56" width="65" height="22"></rect>
<text x="118.5" y="71">USING</text>
</g>
<path d="M151 67h10"></path>
<path d="M161 67h10"></path>
<g class="comment ">
<path d="M171 67h0"></path>
<path d="M188 67h0"></path>
<text x="179.5" y="72" class="comment">(</text>
</g>
<path d="M188 67h10"></path>
<path d="M198 67h10"></path>
<g>
<path d="M208 67h0"></path>
<path d="M338 67h0"></path>
<path d="M208 67h18"></path>
<g>
<path d="M226 67h0"></path>
<g>
<path d="M226 67h10"></path>
<path d="M310 67h10"></path>
<g class="terminal ">
<path d="M236 67h0"></path>
<path d="M310 67h0"></path>
<rect x="236" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="273" y="71">column</text>
</g>
</g>
<path d="M320 67h0"></path>
</g>
<path d="M320 67h18"></path>
<path d="M226 67a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M226 103h38.5"></path>
<path d="M281.5 103h38.5"></path>
<text x="273" y="108" class="comment">,</text>
</g>
<path d="M320 103a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M338 67h10"></path>
<path d="M348 67h10"></path>
<g class="comment ">
<path d="M358 67h0"></path>
<path d="M375 67h0"></path>
<text x="366.5" y="72" class="comment">)</text>
</g>
</g>
<path d="M375 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M411 31h0"></path>
</g>
<path d="M411 31h10"></path>
<path d="M 421 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1088" height="412" viewBox="0 0 1088 412">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h0"></path>
<path d="M1038 56h0"></path>
<path d="M50 56h36"></path>
<g>
<path d="M86 56h283"></path>
<path d="M719 56h283"></path>
<g>
<path d="M369 56h0"></path>
<path d="M608 56h0"></path>
<path d="M369 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M405 20h167"></path>
</g>
<path d="M572 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M369 56h36"></path>
<g>
<path d="M405 56h0"></path>
<g>
<path d="M405 56h10"></path>
<path d="M562 56h10"></path>
<g class="terminal ">
<path d="M415 56h0"></path>
<path d="M525 56h0"></path>
<rect x="415" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="470" y="60">schemaName</text>
</g>
<path d="M525 56h10"></path>
<path d="M535 56h10"></path>
<g class="comment ">
<path d="M545 56h0"></path>
<path d="M562 56h0"></path>
<text x="553.5" y="61" class="comment">.</text>
</g>
</g>
<path d="M572 56h0"></path>
</g>
<path d="M572 56h36"></path>
</g>
<path d="M608 56h10"></path>
<g class="terminal ">
<path d="M618 56h0"></path>
<path d="M719 56h0"></path>
<rect x="618" y="45" width="101" height="22" rx="10" ry="10"></rect>
<text x="668.5" y="60">tableName</text>
</g>
</g>
<path d="M1002 56h36"></path>
<path d="M50 56a18 18 0 0 1 18 18v19a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 111h208.5"></path>
<path d="M793.5 111h208.5"></path>
<g class="comment ">
<path d="M294.5 111h0"></path>
<path d="M311.5 111h0"></path>
<text x="303" y="116" class="comment">(</text>
</g>
<path d="M311.5 111h10"></path>
<path d="M321.5 111h10"></path>
<g class="non-terminal ">
<path d="M331.5 111h0"></path>
<path d="M396.5 111h0"></path>
<rect x="331.5" y="100" width="65" height="22"></rect>
<text x="364" y="115">TABLE</text>
</g>
<path d="M396.5 111h10"></path>
<g>
<path d="M406.5 111h0"></path>
<path d="M645.5 111h0"></path>
<path d="M406.5 111a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M442.5 75h167"></path>
</g>
<path d="M609.5 75a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M406.5 111h36"></path>
<g>
<path d="M442.5 111h0"></path>
<g>
<path d="M442.5 111h10"></path>
<path d="M599.5 111h10"></path>
<g class="terminal ">
<path d="M452.5 111h0"></path>
<path d="M562.5 111h0"></path>
<rect x="452.5" y="100" width="110" height="22" rx="10" ry="10"></rect>
<text x="507.5" y="115">schemaName</text>
</g>
<path d="M562.5 111h10"></path>
<path d="M572.5 111h10"></path>
<g class="comment ">
<path d="M582.5 111h0"></path>
<path d="M599.5 111h0"></path>
<text x="591" y="116" class="comment">.</text>
</g>
</g>
<path d="M609.5 111h0"></path>
</g>
<path d="M609.5 111h36"></path>
</g>
<path d="M645.5 111h10"></path>
<g class="terminal ">
<path d="M655.5 111h0"></path>
<path d="M756.5 111h0"></path>
<rect x="655.5" y="100" width="101" height="22" rx="10" ry="10"></rect>
<text x="706" y="115">tableName</text>
</g>
<path d="M756.5 111h10"></path>
<path d="M766.5 111h10"></path>
<g class="comment ">
<path d="M776.5 111h0"></path>
<path d="M793.5 111h0"></path>
<text x="785" y="116" class="comment">)</text>
</g>
</g>
<path d="M1002 111a18 18 0 0 0 18 -18v-19a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v74a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 166h194.5"></path>
<path d="M807.5 166h194.5"></path>
<g class="terminal ">
<path d="M280.5 166h0"></path>
<path d="M381.5 166h0"></path>
<rect x="280.5" y="155" width="101" height="22" rx="10" ry="10"></rect>
<text x="331" y="170">tableName</text>
</g>
<path d="M381.5 166h10"></path>
<g>
<path d="M391.5 166h0"></path>
<path d="M557.5 166h0"></path>
<path d="M391.5 166a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M427.5 130h94"></path>
</g>
<path d="M521.5 130a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M391.5 166h36"></path>
<g>
<path d="M427.5 166h0"></path>
<g>
<path d="M427.5 166h10"></path>
<path d="M511.5 166h10"></path>
<g class="non-terminal ">
<path d="M437.5 166h0"></path>
<path d="M511.5 166h0"></path>
<rect x="437.5" y="155" width="74" height="22"></rect>
<text x="474.5" y="170">EXTEND</text>
</g>
</g>
<path d="M521.5 166h0"></path>
</g>
<path d="M521.5 166h36"></path>
</g>
<path d="M557.5 166h10"></path>
<g class="comment ">
<path d="M567.5 166h0"></path>
<path d="M584.5 166h0"></path>
<text x="576" y="171" class="comment">(</text>
</g>
<path d="M584.5 166h10"></path>
<path d="M594.5 166h10"></path>
<g>
<path d="M604.5 166h0"></path>
<path d="M770.5 166h0"></path>
<path d="M604.5 166h18"></path>
<g>
<path d="M622.5 166h0"></path>
<g>
<path d="M622.5 166h10"></path>
<path d="M742.5 166h10"></path>
<g class="terminal ">
<path d="M632.5 166h0"></path>
<path d="M742.5 166h0"></path>
<rect x="632.5" y="155" width="110" height="22" rx="10" ry="10"></rect>
<text x="687.5" y="170">columnDecl</text>
</g>
</g>
<path d="M752.5 166h0"></path>
</g>
<path d="M752.5 166h18"></path>
<path d="M622.5 166a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M622.5 202h56.5"></path>
<path d="M696 202h56.5"></path>
<text x="687.5" y="207" class="comment">,</text>
</g>
<path d="M752.5 202a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M770.5 166h10"></path>
<path d="M780.5 166h10"></path>
<g class="comment ">
<path d="M790.5 166h0"></path>
<path d="M807.5 166h0"></path>
<text x="799" y="171" class="comment">)</text>
</g>
</g>
<path d="M1002 166a18 18 0 0 0 18 -18v-74a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v154a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 246h296"></path>
<path d="M706 246h296"></path>
<g>
<path d="M382 246h0"></path>
<path d="M557 246h0"></path>
<path d="M382 246a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M418 210h103"></path>
</g>
<path d="M521 210a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M382 246h36"></path>
<g>
<path d="M418 246h0"></path>
<g>
<path d="M418 246h10"></path>
<path d="M511 246h10"></path>
<g class="non-terminal ">
<path d="M428 246h0"></path>
<path d="M511 246h0"></path>
<rect x="428" y="235" width="83" height="22"></rect>
<text x="469.5" y="250">LATERAL</text>
</g>
</g>
<path d="M521 246h0"></path>
</g>
<path d="M521 246h36"></path>
</g>
<path d="M557 246h10"></path>
<g class="comment ">
<path d="M567 246h0"></path>
<path d="M584 246h0"></path>
<text x="575.5" y="251" class="comment">(</text>
</g>
<path d="M584 246h10"></path>
<path d="M594 246h10"></path>
<g class="terminal ">
<path d="M604 246h0"></path>
<path d="M669 246h0"></path>
<rect x="604" y="235" width="65" height="22" rx="10" ry="10"></rect>
<text x="636.5" y="250">query</text>
</g>
<path d="M669 246h10"></path>
<path d="M679 246h10"></path>
<g class="comment ">
<path d="M689 246h0"></path>
<path d="M706 246h0"></path>
<text x="697.5" y="251" class="comment">)</text>
</g>
</g>
<path d="M1002 246a18 18 0 0 0 18 -18v-154a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v209a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 301h175"></path>
<path d="M827 301h175"></path>
<g class="non-terminal ">
<path d="M261 301h0"></path>
<path d="M335 301h0"></path>
<rect x="261" y="290" width="74" height="22"></rect>
<text x="298" y="305">UNNEST</text>
</g>
<path d="M335 301h10"></path>
<path d="M345 301h10"></path>
<g class="comment ">
<path d="M355 301h0"></path>
<path d="M372 301h0"></path>
<text x="363.5" y="306" class="comment">(</text>
</g>
<path d="M372 301h10"></path>
<path d="M382 301h10"></path>
<g class="terminal ">
<path d="M392 301h0"></path>
<path d="M502 301h0"></path>
<rect x="392" y="290" width="110" height="22" rx="10" ry="10"></rect>
<text x="447" y="305">expression</text>
</g>
<path d="M502 301h10"></path>
<path d="M512 301h10"></path>
<g class="comment ">
<path d="M522 301h0"></path>
<path d="M539 301h0"></path>
<text x="530.5" y="306" class="comment">)</text>
</g>
<path d="M539 301h10"></path>
<g>
<path d="M549 301h0"></path>
<path d="M827 301h0"></path>
<path d="M549 301a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M585 265h206"></path>
</g>
<path d="M791 265a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M549 301h36"></path>
<g>
<path d="M585 301h0"></path>
<g>
<path d="M585 301h10"></path>
<path d="M781 301h10"></path>
<g class="non-terminal ">
<path d="M595 301h0"></path>
<path d="M651 301h0"></path>
<rect x="595" y="290" width="56" height="22"></rect>
<text x="623" y="305">WITH</text>
</g>
<path d="M651 301h10"></path>
<path d="M661 301h10"></path>
<g class="non-terminal ">
<path d="M671 301h0"></path>
<path d="M781 301h0"></path>
<rect x="671" y="290" width="110" height="22"></rect>
<text x="726" y="305">ORDINALITY</text>
</g>
</g>
<path d="M791 301h0"></path>
</g>
<path d="M791 301h36"></path>
</g>
</g>
<path d="M1002 301a18 18 0 0 0 18 -18v-209a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v264a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 356h0"></path>
<path d="M1002 356h0"></path>
<g>
<path d="M86 356h0"></path>
<path d="M261 356h0"></path>
<path d="M86 356a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M122 320h103"></path>
</g>
<path d="M225 320a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M86 356h36"></path>
<g>
<path d="M122 356h0"></path>
<g>
<path d="M122 356h10"></path>
<path d="M215 356h10"></path>
<g class="non-terminal ">
<path d="M132 356h0"></path>
<path d="M215 356h0"></path>
<rect x="132" y="345" width="83" height="22"></rect>
<text x="173.5" y="360">LATERAL</text>
</g>
</g>
<path d="M225 356h0"></path>
</g>
<path d="M225 356h36"></path>
</g>
<path d="M261 356h10"></path>
<g class="non-terminal ">
<path d="M271 356h0"></path>
<path d="M336 356h0"></path>
<rect x="271" y="345" width="65" height="22"></rect>
<text x="303.5" y="360">TABLE</text>
</g>
<path d="M336 356h10"></path>
<path d="M346 356h10"></path>
<g class="comment ">
<path d="M356 356h0"></path>
<path d="M373 356h0"></path>
<text x="364.5" y="361" class="comment">(</text>
</g>
<path d="M373 356h10"></path>
<g>
<path d="M383 356h0"></path>
<path d="M567 356h0"></path>
<path d="M383 356a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M419 320h112"></path>
</g>
<path d="M531 320a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M383 356h36"></path>
<g>
<path d="M419 356h0"></path>
<g>
<path d="M419 356h10"></path>
<path d="M521 356h10"></path>
<g class="non-terminal ">
<path d="M429 356h0"></path>
<path d="M521 356h0"></path>
<rect x="429" y="345" width="92" height="22"></rect>
<text x="475" y="360">SPECIFIC</text>
</g>
</g>
<path d="M531 356h0"></path>
</g>
<path d="M531 356h36"></path>
</g>
<path d="M567 356h10"></path>
<g class="terminal ">
<path d="M577 356h0"></path>
<path d="M705 356h0"></path>
<rect x="577" y="345" width="128" height="22" rx="10" ry="10"></rect>
<text x="641" y="360">functionName</text>
</g>
<path d="M705 356h10"></path>
<path d="M715 356h10"></path>
<g class="comment ">
<path d="M725 356h0"></path>
<path d="M742 356h0"></path>
<text x="733.5" y="361" class="comment">(</text>
</g>
<path d="M742 356h10"></path>
<path d="M752 356h10"></path>
<g>
<path d="M762 356h0"></path>
<path d="M928 356h0"></path>
<path d="M762 356h18"></path>
<g>
<path d="M780 356h0"></path>
<g>
<path d="M780 356h10"></path>
<path d="M900 356h10"></path>
<g class="terminal ">
<path d="M790 356h0"></path>
<path d="M900 356h0"></path>
<rect x="790" y="345" width="110" height="22" rx="10" ry="10"></rect>
<text x="845" y="360">expression</text>
</g>
</g>
<path d="M910 356h0"></path>
</g>
<path d="M910 356h18"></path>
<path d="M780 356a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M780 392h56.5"></path>
<path d="M853.5 392h56.5"></path>
<text x="845" y="397" class="comment">,</text>
</g>
<path d="M910 392a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M928 356h10"></path>
<path d="M938 356h10"></path>
<g class="comment ">
<path d="M948 356h0"></path>
<path d="M965 356h0"></path>
<text x="956.5" y="361" class="comment">)</text>
</g>
<path d="M965 356h10"></path>
<path d="M975 356h10"></path>
<g class="comment ">
<path d="M985 356h0"></path>
<path d="M1002 356h0"></path>
<text x="993.5" y="361" class="comment">)</text>
</g>
</g>
<path d="M1002 356a18 18 0 0 0 18 -18v-264a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1038 56h0"></path>
</g>
<path d="M1038 56h10"></path>
<path d="M 1048 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="591" height="315" viewBox="0 0 591 315">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M541 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h154.5"></path>
<path d="M350.5 31h154.5"></path>
<g class="terminal ">
<path d="M240.5 31h0"></path>
<path d="M350.5 31h0"></path>
<rect x="240.5" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="295.5" y="35">expression</text>
</g>
</g>
<path d="M505 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h182.5"></path>
<path d="M322.5 67h182.5"></path>
<g class="comment ">
<path d="M268.5 67h0"></path>
<path d="M285.5 67h0"></path>
<text x="277" y="72" class="comment">(</text>
</g>
<path d="M285.5 67h10"></path>
<path d="M295.5 67h10"></path>
<g class="comment ">
<path d="M305.5 67h0"></path>
<path d="M322.5 67h0"></path>
<text x="314" y="72" class="comment">)</text>
</g>
</g>
<path d="M505 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v27a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 94h89.5"></path>
<path d="M415.5 94h89.5"></path>
<g class="comment ">
<path d="M175.5 94h0"></path>
<path d="M192.5 94h0"></path>
<text x="184" y="99" class="comment">(</text>
</g>
<path d="M192.5 94h10"></path>
<path d="M202.5 94h10"></path>
<g>
<path d="M212.5 94h0"></path>
<path d="M378.5 94h0"></path>
<path d="M212.5 94h18"></path>
<g>
<path d="M230.5 94h0"></path>
<g>
<path d="M230.5 94h10"></path>
<path d="M350.5 94h10"></path>
<g class="terminal ">
<path d="M240.5 94h0"></path>
<path d="M350.5 94h0"></path>
<rect x="240.5" y="83" width="110" height="22" rx="10" ry="10"></rect>
<text x="295.5" y="98">expression</text>
</g>
</g>
<path d="M360.5 94h0"></path>
</g>
<path d="M360.5 94h18"></path>
<path d="M230.5 94a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M230.5 130h56.5"></path>
<path d="M304 130h56.5"></path>
<text x="295.5" y="135" class="comment">,</text>
</g>
<path d="M360.5 130a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M378.5 94h10"></path>
<path d="M388.5 94h10"></path>
<g class="comment ">
<path d="M398.5 94h0"></path>
<path d="M415.5 94h0"></path>
<text x="407" y="99" class="comment">)</text>
</g>
</g>
<path d="M505 94a18 18 0 0 0 18 -18v-27a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v82a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 149h51.5"></path>
<path d="M453.5 149h51.5"></path>
<g class="non-terminal ">
<path d="M137.5 149h0"></path>
<path d="M193.5 149h0"></path>
<rect x="137.5" y="138" width="56" height="22"></rect>
<text x="165.5" y="153">CUBE</text>
</g>
<path d="M193.5 149h10"></path>
<path d="M203.5 149h10"></path>
<g class="comment ">
<path d="M213.5 149h0"></path>
<path d="M230.5 149h0"></path>
<text x="222" y="154" class="comment">(</text>
</g>
<path d="M230.5 149h10"></path>
<path d="M240.5 149h10"></path>
<g>
<path d="M250.5 149h0"></path>
<path d="M416.5 149h0"></path>
<path d="M250.5 149h18"></path>
<g>
<path d="M268.5 149h0"></path>
<g>
<path d="M268.5 149h10"></path>
<path d="M388.5 149h10"></path>
<g class="terminal ">
<path d="M278.5 149h0"></path>
<path d="M388.5 149h0"></path>
<rect x="278.5" y="138" width="110" height="22" rx="10" ry="10"></rect>
<text x="333.5" y="153">expression</text>
</g>
</g>
<path d="M398.5 149h0"></path>
</g>
<path d="M398.5 149h18"></path>
<path d="M268.5 149a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M268.5 185h56.5"></path>
<path d="M342 185h56.5"></path>
<text x="333.5" y="190" class="comment">,</text>
</g>
<path d="M398.5 185a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M416.5 149h10"></path>
<path d="M426.5 149h10"></path>
<g class="comment ">
<path d="M436.5 149h0"></path>
<path d="M453.5 149h0"></path>
<text x="445" y="154" class="comment">)</text>
</g>
</g>
<path d="M505 149a18 18 0 0 0 18 -18v-82a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v137a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 204h42.5"></path>
<path d="M462.5 204h42.5"></path>
<g class="non-terminal ">
<path d="M128.5 204h0"></path>
<path d="M202.5 204h0"></path>
<rect x="128.5" y="193" width="74" height="22"></rect>
<text x="165.5" y="208">ROLLUP</text>
</g>
<path d="M202.5 204h10"></path>
<path d="M212.5 204h10"></path>
<g class="comment ">
<path d="M222.5 204h0"></path>
<path d="M239.5 204h0"></path>
<text x="231" y="209" class="comment">(</text>
</g>
<path d="M239.5 204h10"></path>
<path d="M249.5 204h10"></path>
<g>
<path d="M259.5 204h0"></path>
<path d="M425.5 204h0"></path>
<path d="M259.5 204h18"></path>
<g>
<path d="M277.5 204h0"></path>
<g>
<path d="M277.5 204h10"></path>
<path d="M397.5 204h10"></path>
<g class="terminal ">
<path d="M287.5 204h0"></path>
<path d="M397.5 204h0"></path>
<rect x="287.5" y="193" width="110" height="22" rx="10" ry="10"></rect>
<text x="342.5" y="208">expression</text>
</g>
</g>
<path d="M407.5 204h0"></path>
</g>
<path d="M407.5 204h18"></path>
<path d="M277.5 204a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M277.5 240h56.5"></path>
<path d="M351 240h56.5"></path>
<text x="342.5" y="245" class="comment">,</text>
</g>
<path d="M407.5 240a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M425.5 204h10"></path>
<path d="M435.5 204h10"></path>
<g class="comment ">
<path d="M445.5 204h0"></path>
<path d="M462.5 204h0"></path>
<text x="454" y="209" class="comment">)</text>
</g>
</g>
<path d="M505 204a18 18 0 0 0 18 -18v-137a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v192a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 259h0"></path>
<path d="M505 259h0"></path>
<g class="non-terminal ">
<path d="M86 259h0"></path>
<path d="M178 259h0"></path>
<rect x="86" y="248" width="92" height="22"></rect>
<text x="132" y="263">GROUPING</text>
</g>
<path d="M178 259h10"></path>
<path d="M188 259h10"></path>
<g class="non-terminal ">
<path d="M198 259h0"></path>
<path d="M254 259h0"></path>
<rect x="198" y="248" width="56" height="22"></rect>
<text x="226" y="263">SETS</text>
</g>
<path d="M254 259h10"></path>
<path d="M264 259h10"></path>
<g class="comment ">
<path d="M274 259h0"></path>
<path d="M291 259h0"></path>
<text x="282.5" y="264" class="comment">(</text>
</g>
<path d="M291 259h10"></path>
<path d="M301 259h10"></path>
<g>
<path d="M311 259h0"></path>
<path d="M468 259h0"></path>
<path d="M311 259h18"></path>
<g>
<path d="M329 259h0"></path>
<g>
<path d="M329 259h10"></path>
<path d="M440 259h10"></path>
<g class="terminal ">
<path d="M339 259h0"></path>
<path d="M440 259h0"></path>
<rect x="339" y="248" width="101" height="22" rx="10" ry="10"></rect>
<text x="389.5" y="263">groupItem</text>
</g>
</g>
<path d="M450 259h0"></path>
</g>
<path d="M450 259h18"></path>
<path d="M329 259a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M329 295h52"></path>
<path d="M398 295h52"></path>
<text x="389.5" y="300" class="comment">,</text>
</g>
<path d="M450 295a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M468 259h10"></path>
<path d="M478 259h10"></path>
<g class="comment ">
<path d="M488 259h0"></path>
<path d="M505 259h0"></path>
<text x="496.5" y="264" class="comment">)</text>
</g>
</g>
<path d="M505 259a18 18 0 0 0 18 -18v-192a18 18 0 0 1 18 -18"></path>
</g>
<path d="M541 31h0"></path>
</g>
<path d="M541 31h10"></path>
<path d="M 551 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="962" height="607" viewBox="0 0 962 607">
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
<path d="M68 128h404.5"></path>
<path d="M489.5 128h404.5"></path>
<g class="comment ">
<path d="M472.5 128h0"></path>
<path d="M489.5 128h0"></path>
<text x="481" y="133" class="comment">(</text>
</g>
</g>
<path d="M894 128a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 208h217"></path>
<path d="M677 208h217"></path>
<g>
<path d="M285 208h0"></path>
<path d="M677 208h0"></path>
<path d="M285 208a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M321 172h320"></path>
</g>
<path d="M641 172a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M285 208h36"></path>
<g>
<path d="M321 208h0"></path>
<g>
<path d="M321 208h10"></path>
<path d="M631 208h10"></path>
<g class="non-terminal ">
<path d="M331 208h0"></path>
<path d="M396 208h0"></path>
<rect x="331" y="197" width="65" height="22"></rect>
<text x="363.5" y="212">ORDER</text>
</g>
<path d="M396 208h10"></path>
<path d="M406 208h10"></path>
<g class="non-terminal ">
<path d="M416 208h0"></path>
<path d="M454 208h0"></path>
<rect x="416" y="197" width="38" height="22"></rect>
<text x="435" y="212">BY</text>
</g>
<path d="M454 208h10"></path>
<path d="M464 208h10"></path>
<g>
<path d="M474 208h0"></path>
<path d="M631 208h0"></path>
<path d="M474 208h18"></path>
<g>
<path d="M492 208h0"></path>
<g>
<path d="M492 208h10"></path>
<path d="M603 208h10"></path>
<g class="terminal ">
<path d="M502 208h0"></path>
<path d="M603 208h0"></path>
<rect x="502" y="197" width="101" height="22" rx="10" ry="10"></rect>
<text x="552.5" y="212">orderItem</text>
</g>
</g>
<path d="M613 208h0"></path>
</g>
<path d="M613 208h18"></path>
<path d="M492 208a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M492 244h52"></path>
<path d="M561 244h52"></path>
<text x="552.5" y="249" class="comment">,</text>
</g>
<path d="M613 244a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M641 208h0"></path>
</g>
<path d="M641 208h36"></path>
</g>
</g>
<path d="M894 208a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 296h194.5"></path>
<path d="M699.5 296h194.5"></path>
<g>
<path d="M262.5 296h0"></path>
<path d="M699.5 296h0"></path>
<path d="M262.5 296a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M298.5 260h365"></path>
</g>
<path d="M663.5 260a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M262.5 296h36"></path>
<g>
<path d="M298.5 296h0"></path>
<g>
<path d="M298.5 296h10"></path>
<path d="M653.5 296h10"></path>
<g class="non-terminal ">
<path d="M308.5 296h0"></path>
<path d="M409.5 296h0"></path>
<rect x="308.5" y="285" width="101" height="22"></rect>
<text x="359" y="300">PARTITION</text>
</g>
<path d="M409.5 296h10"></path>
<path d="M419.5 296h10"></path>
<g class="non-terminal ">
<path d="M429.5 296h0"></path>
<path d="M467.5 296h0"></path>
<rect x="429.5" y="285" width="38" height="22"></rect>
<text x="448.5" y="300">BY</text>
</g>
<path d="M467.5 296h10"></path>
<path d="M477.5 296h10"></path>
<g>
<path d="M487.5 296h0"></path>
<path d="M653.5 296h0"></path>
<path d="M487.5 296h18"></path>
<g>
<path d="M505.5 296h0"></path>
<g>
<path d="M505.5 296h10"></path>
<path d="M625.5 296h10"></path>
<g class="terminal ">
<path d="M515.5 296h0"></path>
<path d="M625.5 296h0"></path>
<rect x="515.5" y="285" width="110" height="22" rx="10" ry="10"></rect>
<text x="570.5" y="300">expression</text>
</g>
</g>
<path d="M635.5 296h0"></path>
</g>
<path d="M635.5 296h18"></path>
<path d="M505.5 296a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="comment ">
<path d="M505.5 332h56.5"></path>
<path d="M579 332h56.5"></path>
<text x="570.5" y="337" class="comment">,</text>
</g>
<path d="M635.5 332a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M663.5 296h0"></path>
</g>
<path d="M663.5 296h36"></path>
</g>
</g>
<path d="M894 296a18 18 0 0 1 18 18v8a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v8a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 384h10"></path>
<path d="M884 384h10"></path>
<g>
<path d="M78 384h0"></path>
<path d="M884 384h0"></path>
<path d="M78 384a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 348h734"></path>
</g>
<path d="M848 348a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 384h36"></path>
<g>
<path d="M114 384h0"></path>
<g>
<path d="M114 384h0"></path>
<path d="M848 384h0"></path>
<path d="M114 384h36"></path>
<g>
<path d="M150 384h280.5"></path>
<path d="M531.5 384h280.5"></path>
<g class="terminal ">
<path d="M430.5 384h0"></path>
<path d="M531.5 384h0"></path>
<rect x="430.5" y="373" width="101" height="22" rx="10" ry="10"></rect>
<text x="481" y="388">undefined</text>
</g>
</g>
<path d="M812 384h36"></path>
<path d="M114 384a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M150 420h0"></path>
<path d="M812 420h0"></path>
<g class="non-terminal ">
<path d="M150 420h0"></path>
<path d="M215 420h0"></path>
<rect x="150" y="409" width="65" height="22"></rect>
<text x="182.5" y="424">RANGE</text>
</g>
<path d="M215 420h10"></path>
<path d="M225 420h10"></path>
<g class="terminal ">
<path d="M235 420h0"></path>
<path d="M498 420h0"></path>
<rect x="235" y="409" width="263" height="22" rx="10" ry="10"></rect>
<text x="366.5" y="424">numericOrIntervalExpression</text>
</g>
<path d="M498 420h10"></path>
<path d="M508 420h10"></path>
<g>
<path d="M518 420h0"></path>
<path d="M691 420h0"></path>
<g>
<path d="M518 420h0"></path>
<g>
<path d="M518 420h0"></path>
<path d="M691 420h0"></path>
<path d="M518 420h36"></path>
<g>
<path d="M554 420h0"></path>
<path d="M655 420h0"></path>
<g class="non-terminal ">
<path d="M554 420h0"></path>
<path d="M655 420h0"></path>
<rect x="554" y="409" width="101" height="22"></rect>
<text x="604.5" y="424">PRECEDING</text>
</g>
</g>
<path d="M655 420h36"></path>
<path d="M518 420a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M554 456h0"></path>
<path d="M655 456h0"></path>
<g class="non-terminal ">
<path d="M554 456h0"></path>
<path d="M655 456h0"></path>
<rect x="554" y="445" width="101" height="22"></rect>
<text x="604.5" y="460">FOLLOWING</text>
</g>
</g>
<path d="M655 456a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M691 420h0"></path>
</g>
</g>
<path d="M691 420h10"></path>
<path d="M701 420h10"></path>
<g class="terminal ">
<path d="M711 420h0"></path>
<path d="M812 420h0"></path>
<rect x="711" y="409" width="101" height="22" rx="10" ry="10"></rect>
<text x="761.5" y="424">undefined</text>
</g>
</g>
<path d="M812 420a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M114 384a18 18 0 0 1 18 18v66a18 18 0 0 0 18 18"></path>
<g>
<path d="M150 486h49.5"></path>
<path d="M762.5 486h49.5"></path>
<g class="non-terminal ">
<path d="M199.5 486h0"></path>
<path d="M255.5 486h0"></path>
<rect x="199.5" y="475" width="56" height="22"></rect>
<text x="227.5" y="490">ROWS</text>
</g>
<path d="M255.5 486h10"></path>
<path d="M265.5 486h10"></path>
<g class="terminal ">
<path d="M275.5 486h0"></path>
<path d="M448.5 486h0"></path>
<rect x="275.5" y="475" width="173" height="22" rx="10" ry="10"></rect>
<text x="362" y="490">numericExpression</text>
</g>
<path d="M448.5 486h10"></path>
<path d="M458.5 486h10"></path>
<g>
<path d="M468.5 486h0"></path>
<path d="M641.5 486h0"></path>
<g>
<path d="M468.5 486h0"></path>
<g>
<path d="M468.5 486h0"></path>
<path d="M641.5 486h0"></path>
<path d="M468.5 486h36"></path>
<g>
<path d="M504.5 486h0"></path>
<path d="M605.5 486h0"></path>
<g class="non-terminal ">
<path d="M504.5 486h0"></path>
<path d="M605.5 486h0"></path>
<rect x="504.5" y="475" width="101" height="22"></rect>
<text x="555" y="490">PRECEDING</text>
</g>
</g>
<path d="M605.5 486h36"></path>
<path d="M468.5 486a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M504.5 522h0"></path>
<path d="M605.5 522h0"></path>
<g class="non-terminal ">
<path d="M504.5 522h0"></path>
<path d="M605.5 522h0"></path>
<rect x="504.5" y="511" width="101" height="22"></rect>
<text x="555" y="526">FOLLOWING</text>
</g>
</g>
<path d="M605.5 522a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M641.5 486h0"></path>
</g>
</g>
<path d="M641.5 486h10"></path>
<path d="M651.5 486h10"></path>
<g class="terminal ">
<path d="M661.5 486h0"></path>
<path d="M762.5 486h0"></path>
<rect x="661.5" y="475" width="101" height="22" rx="10" ry="10"></rect>
<text x="712" y="490">undefined</text>
</g>
</g>
<path d="M812 486a18 18 0 0 0 18 -18v-66a18 18 0 0 1 18 -18"></path>
</g>
<path d="M848 384h0"></path>
</g>
<path d="M848 384h36"></path>
</g>
</g>
<path d="M894 384a18 18 0 0 1 18 18v121a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 577h404.5"></path>
<path d="M489.5 577h404.5"></path>
<g class="comment ">
<path d="M472.5 577h0"></path>
<path d="M489.5 577h0"></path>
<text x="481" y="582" class="comment">)</text>
</g>
</g>
<path d="M894 577h18"></path>
<path d="M912 577h0"></path>
</g>
<path d="M912 577h10"></path>
<path d="M 922 577 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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