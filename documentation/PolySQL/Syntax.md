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
<svg class="railroad-diagram" width="476" height="239" viewBox="0 0 476 239">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h34.5"></path>
<path d="M373.5 31h34.5"></path>
<g class="non-terminal ">
<path d="M102.5 31h0"></path>
<path d="M176.5 31h0"></path>
<rect x="102.5" y="20" width="74" height="22"></rect>
<text x="139.5" y="35">INSERT</text>
</g>
<path d="M176.5 31h10"></path>
<path d="M186.5 31h10"></path>
<g class="non-terminal ">
<path d="M196.5 31h0"></path>
<path d="M252.5 31h0"></path>
<rect x="196.5" y="20" width="56" height="22"></rect>
<text x="224.5" y="35">INTO</text>
</g>
<path d="M252.5 31h10"></path>
<path d="M262.5 31h10"></path>
<g class="terminal ">
<path d="M272.5 31h0"></path>
<path d="M373.5 31h0"></path>
<rect x="272.5" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="323" y="35">tableName</text>
</g>
</g>
<path d="M408 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-340a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 115h10"></path>
<path d="M398 115h10"></path>
<g>
<path d="M78 115h0"></path>
<path d="M398 115h0"></path>
<path d="M78 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 79h248"></path>
</g>
<path d="M362 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 115h36"></path>
<g>
<path d="M114 115h0"></path>
<g>
<path d="M114 115h10"></path>
<path d="M352 115h10"></path>
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
<path d="M303 115h0"></path>
<path d="M173 115h18"></path>
<g>
<path d="M191 115h0"></path>
<g>
<path d="M191 115h10"></path>
<path d="M275 115h10"></path>
<g class="terminal ">
<path d="M201 115h0"></path>
<path d="M275 115h0"></path>
<rect x="201" y="104" width="74" height="22" rx="10" ry="10"></rect>
<text x="238" y="119">column</text>
</g>
</g>
<path d="M285 115h0"></path>
</g>
<path d="M285 115h18"></path>
<path d="M191 115a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M191 151h32.5"></path>
<path d="M252.5 151h32.5"></path>
<rect x="223.5" y="140" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="238" y="155">,</text>
</g>
<path d="M285 151a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M303 115h10"></path>
<path d="M313 115h10"></path>
<g class="terminal ">
<path d="M323 115h0"></path>
<path d="M352 115h0"></path>
<rect x="323" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="337.5" y="119">)</text>
</g>
</g>
<path d="M362 115h0"></path>
</g>
<path d="M362 115h36"></path>
</g>
</g>
<path d="M408 115a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-340a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 208h137.5"></path>
<path d="M270.5 208h137.5"></path>
<g class="terminal ">
<path d="M205.5 208h0"></path>
<path d="M270.5 208h0"></path>
<rect x="205.5" y="197" width="65" height="22" rx="10" ry="10"></rect>
<text x="238" y="212">query</text>
</g>
</g>
<path d="M408 208h18"></path>
<path d="M426 208h0"></path>
</g>
<path d="M426 208h10"></path>
<path d="M 436 208 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="506" height="239" viewBox="0 0 506 239">
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
<g class="terminal ">
<path d="M239.5 139h32.5"></path>
<path d="M301 139h32.5"></path>
<rect x="272" y="128" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="286.5" y="143">,</text>
</g>
<path d="M333.5 139a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M438 103a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-370a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 208h10"></path>
<path d="M428 208h10"></path>
<g>
<path d="M78 208h0"></path>
<path d="M428 208h0"></path>
<path d="M78 208a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 172h278"></path>
</g>
<path d="M392 172a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 208h36"></path>
<g>
<path d="M114 208h0"></path>
<g>
<path d="M114 208h10"></path>
<path d="M382 208h10"></path>
<g class="non-terminal ">
<path d="M124 208h0"></path>
<path d="M189 208h0"></path>
<rect x="124" y="197" width="65" height="22"></rect>
<text x="156.5" y="212">WHERE</text>
</g>
<path d="M189 208h10"></path>
<path d="M199 208h10"></path>
<g class="terminal ">
<path d="M209 208h0"></path>
<path d="M382 208h0"></path>
<rect x="209" y="197" width="173" height="22" rx="10" ry="10"></rect>
<text x="295.5" y="212">booleanExpression</text>
</g>
</g>
<path d="M392 208h0"></path>
</g>
<path d="M392 208h36"></path>
</g>
</g>
<path d="M438 208h18"></path>
<path d="M456 208h0"></path>
</g>
<path d="M456 208h10"></path>
<path d="M 466 208 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="908" height="1042" viewBox="0 0 908 1042">
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
<g class="terminal ">
<path d="M393.5 103h41.5"></path>
<path d="M464 103h41.5"></path>
<rect x="435" y="92" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="449.5" y="107">,</text>
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
<path d="M68 31a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M104 135h0"></path>
<path d="M804 135h0"></path>
<g>
<path d="M104 135h0"></path>
<path d="M804 135h0"></path>
<g>
<path d="M104 135h0"></path>
<g>
<path d="M104 135h0"></path>
<path d="M804 135h0"></path>
<path d="M104 135h36"></path>
<g>
<path d="M140 135h263.5"></path>
<path d="M504.5 135h263.5"></path>
<g class="terminal ">
<path d="M403.5 135h0"></path>
<path d="M504.5 135h0"></path>
<rect x="403.5" y="124" width="101" height="22" rx="10" ry="10"></rect>
<text x="454" y="139">undefined</text>
</g>
</g>
<path d="M768 135h36"></path>
<path d="M104 135a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 171h216.5"></path>
<path d="M551.5 171h216.5"></path>
<g class="terminal ">
<path d="M356.5 171h0"></path>
<path d="M430.5 171h0"></path>
<rect x="356.5" y="160" width="74" height="22" rx="10" ry="10"></rect>
<text x="393.5" y="175">select</text>
</g>
<path d="M430.5 171h10"></path>
<path d="M440.5 171h10"></path>
<g class="terminal ">
<path d="M450.5 171h0"></path>
<path d="M551.5 171h0"></path>
<rect x="450.5" y="160" width="101" height="22" rx="10" ry="10"></rect>
<text x="501" y="175">undefined</text>
</g>
</g>
<path d="M768 171a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M104 135a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 205h167"></path>
<path d="M601 205h167"></path>
<g class="terminal ">
<path d="M307 205h0"></path>
<path d="M480 205h0"></path>
<rect x="307" y="194" width="173" height="22" rx="10" ry="10"></rect>
<text x="393.5" y="209">selectWithoutFrom</text>
</g>
<path d="M480 205h10"></path>
<path d="M490 205h10"></path>
<g class="terminal ">
<path d="M500 205h0"></path>
<path d="M601 205h0"></path>
<rect x="500" y="194" width="101" height="22" rx="10" ry="10"></rect>
<text x="550.5" y="209">undefined</text>
</g>
</g>
<path d="M768 205a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M104 135a18 18 0 0 1 18 18v93a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 264h18"></path>
<path d="M750 264h18"></path>
<g class="terminal ">
<path d="M158 264h0"></path>
<path d="M223 264h0"></path>
<rect x="158" y="253" width="65" height="22" rx="10" ry="10"></rect>
<text x="190.5" y="268">query</text>
</g>
<path d="M223 264h10"></path>
<path d="M233 264h10"></path>
<g class="non-terminal ">
<path d="M243 264h0"></path>
<path d="M308 264h0"></path>
<rect x="243" y="253" width="65" height="22"></rect>
<text x="275.5" y="268">UNION</text>
</g>
<path d="M308 264h10"></path>
<g>
<path d="M318 264h0"></path>
<path d="M554 264h0"></path>
<path d="M318 264a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M354 228h164"></path>
</g>
<path d="M518 228a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M318 264h36"></path>
<g>
<path d="M354 264h0"></path>
<g>
<path d="M354 264h0"></path>
<path d="M518 264h0"></path>
<path d="M354 264h36"></path>
<g>
<path d="M390 264h22.5"></path>
<path d="M459.5 264h22.5"></path>
<g class="non-terminal ">
<path d="M412.5 264h0"></path>
<path d="M459.5 264h0"></path>
<rect x="412.5" y="253" width="47" height="22"></rect>
<text x="436" y="268">ALL</text>
</g>
</g>
<path d="M482 264h36"></path>
<path d="M354 264a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M390 300h0"></path>
<path d="M482 300h0"></path>
<g class="non-terminal ">
<path d="M390 300h0"></path>
<path d="M482 300h0"></path>
<rect x="390" y="289" width="92" height="22"></rect>
<text x="436" y="304">DISTINCT</text>
</g>
</g>
<path d="M482 300a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M518 264h0"></path>
</g>
<path d="M518 264h36"></path>
</g>
<path d="M554 264h10"></path>
<g class="terminal ">
<path d="M564 264h0"></path>
<path d="M629 264h0"></path>
<rect x="564" y="253" width="65" height="22" rx="10" ry="10"></rect>
<text x="596.5" y="268">query</text>
</g>
<path d="M629 264h10"></path>
<path d="M639 264h10"></path>
<g class="terminal ">
<path d="M649 264h0"></path>
<path d="M750 264h0"></path>
<rect x="649" y="253" width="101" height="22" rx="10" ry="10"></rect>
<text x="699.5" y="268">undefined</text>
</g>
</g>
<path d="M768 264a18 18 0 0 0 18 -18v-93a18 18 0 0 1 18 -18"></path>
<path d="M104 135a18 18 0 0 1 18 18v188a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 359h13.5"></path>
<path d="M754.5 359h13.5"></path>
<g class="terminal ">
<path d="M153.5 359h0"></path>
<path d="M218.5 359h0"></path>
<rect x="153.5" y="348" width="65" height="22" rx="10" ry="10"></rect>
<text x="186" y="363">query</text>
</g>
<path d="M218.5 359h10"></path>
<path d="M228.5 359h10"></path>
<g class="non-terminal ">
<path d="M238.5 359h0"></path>
<path d="M312.5 359h0"></path>
<rect x="238.5" y="348" width="74" height="22"></rect>
<text x="275.5" y="363">EXCEPT</text>
</g>
<path d="M312.5 359h10"></path>
<g>
<path d="M322.5 359h0"></path>
<path d="M558.5 359h0"></path>
<path d="M322.5 359a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M358.5 323h164"></path>
</g>
<path d="M522.5 323a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M322.5 359h36"></path>
<g>
<path d="M358.5 359h0"></path>
<g>
<path d="M358.5 359h0"></path>
<path d="M522.5 359h0"></path>
<path d="M358.5 359h36"></path>
<g>
<path d="M394.5 359h22.5"></path>
<path d="M464 359h22.5"></path>
<g class="non-terminal ">
<path d="M417 359h0"></path>
<path d="M464 359h0"></path>
<rect x="417" y="348" width="47" height="22"></rect>
<text x="440.5" y="363">ALL</text>
</g>
</g>
<path d="M486.5 359h36"></path>
<path d="M358.5 359a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M394.5 395h0"></path>
<path d="M486.5 395h0"></path>
<g class="non-terminal ">
<path d="M394.5 395h0"></path>
<path d="M486.5 395h0"></path>
<rect x="394.5" y="384" width="92" height="22"></rect>
<text x="440.5" y="399">DISTINCT</text>
</g>
</g>
<path d="M486.5 395a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M522.5 359h0"></path>
</g>
<path d="M522.5 359h36"></path>
</g>
<path d="M558.5 359h10"></path>
<g class="terminal ">
<path d="M568.5 359h0"></path>
<path d="M633.5 359h0"></path>
<rect x="568.5" y="348" width="65" height="22" rx="10" ry="10"></rect>
<text x="601" y="363">query</text>
</g>
<path d="M633.5 359h10"></path>
<path d="M643.5 359h10"></path>
<g class="terminal ">
<path d="M653.5 359h0"></path>
<path d="M754.5 359h0"></path>
<rect x="653.5" y="348" width="101" height="22" rx="10" ry="10"></rect>
<text x="704" y="363">undefined</text>
</g>
</g>
<path d="M768 359a18 18 0 0 0 18 -18v-188a18 18 0 0 1 18 -18"></path>
<path d="M104 135a18 18 0 0 1 18 18v283a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 454h18"></path>
<path d="M750 454h18"></path>
<g class="terminal ">
<path d="M158 454h0"></path>
<path d="M223 454h0"></path>
<rect x="158" y="443" width="65" height="22" rx="10" ry="10"></rect>
<text x="190.5" y="458">query</text>
</g>
<path d="M223 454h10"></path>
<path d="M233 454h10"></path>
<g class="non-terminal ">
<path d="M243 454h0"></path>
<path d="M308 454h0"></path>
<rect x="243" y="443" width="65" height="22"></rect>
<text x="275.5" y="458">MINUS</text>
</g>
<path d="M308 454h10"></path>
<g>
<path d="M318 454h0"></path>
<path d="M554 454h0"></path>
<path d="M318 454a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M354 418h164"></path>
</g>
<path d="M518 418a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M318 454h36"></path>
<g>
<path d="M354 454h0"></path>
<g>
<path d="M354 454h0"></path>
<path d="M518 454h0"></path>
<path d="M354 454h36"></path>
<g>
<path d="M390 454h22.5"></path>
<path d="M459.5 454h22.5"></path>
<g class="non-terminal ">
<path d="M412.5 454h0"></path>
<path d="M459.5 454h0"></path>
<rect x="412.5" y="443" width="47" height="22"></rect>
<text x="436" y="458">ALL</text>
</g>
</g>
<path d="M482 454h36"></path>
<path d="M354 454a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M390 490h0"></path>
<path d="M482 490h0"></path>
<g class="non-terminal ">
<path d="M390 490h0"></path>
<path d="M482 490h0"></path>
<rect x="390" y="479" width="92" height="22"></rect>
<text x="436" y="494">DISTINCT</text>
</g>
</g>
<path d="M482 490a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M518 454h0"></path>
</g>
<path d="M518 454h36"></path>
</g>
<path d="M554 454h10"></path>
<g class="terminal ">
<path d="M564 454h0"></path>
<path d="M629 454h0"></path>
<rect x="564" y="443" width="65" height="22" rx="10" ry="10"></rect>
<text x="596.5" y="458">query</text>
</g>
<path d="M629 454h10"></path>
<path d="M639 454h10"></path>
<g class="terminal ">
<path d="M649 454h0"></path>
<path d="M750 454h0"></path>
<rect x="649" y="443" width="101" height="22" rx="10" ry="10"></rect>
<text x="699.5" y="458">undefined</text>
</g>
</g>
<path d="M768 454a18 18 0 0 0 18 -18v-283a18 18 0 0 1 18 -18"></path>
<path d="M104 135a18 18 0 0 1 18 18v378a18 18 0 0 0 18 18"></path>
<g>
<path d="M140 549h0"></path>
<path d="M768 549h0"></path>
<g class="terminal ">
<path d="M140 549h0"></path>
<path d="M205 549h0"></path>
<rect x="140" y="538" width="65" height="22" rx="10" ry="10"></rect>
<text x="172.5" y="553">query</text>
</g>
<path d="M205 549h10"></path>
<path d="M215 549h10"></path>
<g class="non-terminal ">
<path d="M225 549h0"></path>
<path d="M326 549h0"></path>
<rect x="225" y="538" width="101" height="22"></rect>
<text x="275.5" y="553">INTERSECT</text>
</g>
<path d="M326 549h10"></path>
<g>
<path d="M336 549h0"></path>
<path d="M572 549h0"></path>
<path d="M336 549a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M372 513h164"></path>
</g>
<path d="M536 513a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M336 549h36"></path>
<g>
<path d="M372 549h0"></path>
<g>
<path d="M372 549h0"></path>
<path d="M536 549h0"></path>
<path d="M372 549h36"></path>
<g>
<path d="M408 549h22.5"></path>
<path d="M477.5 549h22.5"></path>
<g class="non-terminal ">
<path d="M430.5 549h0"></path>
<path d="M477.5 549h0"></path>
<rect x="430.5" y="538" width="47" height="22"></rect>
<text x="454" y="553">ALL</text>
</g>
</g>
<path d="M500 549h36"></path>
<path d="M372 549a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M408 585h0"></path>
<path d="M500 585h0"></path>
<g class="non-terminal ">
<path d="M408 585h0"></path>
<path d="M500 585h0"></path>
<rect x="408" y="574" width="92" height="22"></rect>
<text x="454" y="589">DISTINCT</text>
</g>
</g>
<path d="M500 585a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M536 549h0"></path>
</g>
<path d="M536 549h36"></path>
</g>
<path d="M572 549h10"></path>
<g class="terminal ">
<path d="M582 549h0"></path>
<path d="M647 549h0"></path>
<rect x="582" y="538" width="65" height="22" rx="10" ry="10"></rect>
<text x="614.5" y="553">query</text>
</g>
<path d="M647 549h10"></path>
<path d="M657 549h10"></path>
<g class="terminal ">
<path d="M667 549h0"></path>
<path d="M768 549h0"></path>
<rect x="667" y="538" width="101" height="22" rx="10" ry="10"></rect>
<text x="717.5" y="553">undefined</text>
</g>
</g>
<path d="M768 549a18 18 0 0 0 18 -18v-378a18 18 0 0 1 18 -18"></path>
</g>
<path d="M804 135h0"></path>
</g>
</g>
</g>
<path d="M804 135a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
<path d="M68 31a18 18 0 0 1 18 18v577a18 18 0 0 0 18 18"></path>
<g>
<path d="M104 644h154"></path>
<path d="M650 644h154"></path>
<g>
<path d="M258 644h0"></path>
<path d="M650 644h0"></path>
<path d="M258 644a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M294 608h320"></path>
</g>
<path d="M614 608a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M258 644h36"></path>
<g>
<path d="M294 644h0"></path>
<g>
<path d="M294 644h10"></path>
<path d="M604 644h10"></path>
<g class="non-terminal ">
<path d="M304 644h0"></path>
<path d="M369 644h0"></path>
<rect x="304" y="633" width="65" height="22"></rect>
<text x="336.5" y="648">ORDER</text>
</g>
<path d="M369 644h10"></path>
<path d="M379 644h10"></path>
<g class="non-terminal ">
<path d="M389 644h0"></path>
<path d="M427 644h0"></path>
<rect x="389" y="633" width="38" height="22"></rect>
<text x="408" y="648">BY</text>
</g>
<path d="M427 644h10"></path>
<path d="M437 644h10"></path>
<g>
<path d="M447 644h0"></path>
<path d="M604 644h0"></path>
<path d="M447 644h18"></path>
<g>
<path d="M465 644h0"></path>
<g>
<path d="M465 644h10"></path>
<path d="M576 644h10"></path>
<g class="terminal ">
<path d="M475 644h0"></path>
<path d="M576 644h0"></path>
<rect x="475" y="633" width="101" height="22" rx="10" ry="10"></rect>
<text x="525.5" y="648">orderItem</text>
</g>
</g>
<path d="M586 644h0"></path>
</g>
<path d="M586 644h18"></path>
<path d="M465 644a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M465 680h46"></path>
<path d="M540 680h46"></path>
<rect x="511" y="669" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="525.5" y="684">,</text>
</g>
<path d="M586 680a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M614 644h0"></path>
</g>
<path d="M614 644h36"></path>
</g>
</g>
<path d="M804 644a18 18 0 0 0 18 -18v-577a18 18 0 0 1 18 -18"></path>
</g>
<path d="M840 31a18 18 0 0 1 18 18v634a18 18 0 0 1 -18 18h-772a18 18 0 0 0 -18 18v24a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 761h141"></path>
<path d="M699 761h141"></path>
<g>
<path d="M209 761h0"></path>
<path d="M699 761h0"></path>
<path d="M209 761a18 18 0 0 0 18 -18v-12a18 18 0 0 1 18 -18"></path>
<g>
<path d="M245 713h418"></path>
</g>
<path d="M663 713a18 18 0 0 1 18 18v12a18 18 0 0 0 18 18"></path>
<path d="M209 761h36"></path>
<g>
<path d="M245 761h0"></path>
<g>
<path d="M245 761h10"></path>
<path d="M653 761h10"></path>
<g class="non-terminal ">
<path d="M255 761h0"></path>
<path d="M320 761h0"></path>
<rect x="255" y="750" width="65" height="22"></rect>
<text x="287.5" y="765">LIMIT</text>
</g>
<path d="M320 761h10"></path>
<path d="M330 761h10"></path>
<g>
<path d="M340 761h0"></path>
<path d="M653 761h0"></path>
<g>
<path d="M340 761h0"></path>
<g>
<path d="M340 761h0"></path>
<path d="M653 761h0"></path>
<path d="M340 761h36"></path>
<g>
<path d="M376 761h0"></path>
<path d="M617 761h0"></path>
<g>
<path d="M376 761h0"></path>
<path d="M542 761h0"></path>
<path d="M376 761a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M412 725h94"></path>
</g>
<path d="M506 725a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M376 761h36"></path>
<g>
<path d="M412 761h0"></path>
<g>
<path d="M412 761h10"></path>
<path d="M496 761h10"></path>
<g class="terminal ">
<path d="M422 761h0"></path>
<path d="M496 761h0"></path>
<rect x="422" y="750" width="74" height="22" rx="10" ry="10"></rect>
<text x="459" y="765">start,</text>
</g>
</g>
<path d="M506 761h0"></path>
</g>
<path d="M506 761h36"></path>
</g>
<path d="M542 761h10"></path>
<g class="terminal ">
<path d="M552 761h0"></path>
<path d="M617 761h0"></path>
<rect x="552" y="750" width="65" height="22" rx="10" ry="10"></rect>
<text x="584.5" y="765">count</text>
</g>
</g>
<path d="M617 761h36"></path>
<path d="M340 761a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M376 797h97"></path>
<path d="M520 797h97"></path>
<g class="non-terminal ">
<path d="M473 797h0"></path>
<path d="M520 797h0"></path>
<rect x="473" y="786" width="47" height="22"></rect>
<text x="496.5" y="801">ALL</text>
</g>
</g>
<path d="M617 797a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M653 761h0"></path>
</g>
</g>
</g>
<path d="M663 761h0"></path>
</g>
<path d="M663 761h36"></path>
</g>
</g>
<path d="M840 761a18 18 0 0 1 18 18v23a18 18 0 0 1 -18 18h-772a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 868h186.5"></path>
<path d="M653.5 868h186.5"></path>
<g>
<path d="M254.5 868h0"></path>
<path d="M653.5 868h0"></path>
<path d="M254.5 868a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M290.5 832h327"></path>
</g>
<path d="M617.5 832a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M254.5 868h36"></path>
<g>
<path d="M290.5 868h0"></path>
<g>
<path d="M290.5 868h10"></path>
<path d="M607.5 868h10"></path>
<g class="non-terminal ">
<path d="M300.5 868h0"></path>
<path d="M374.5 868h0"></path>
<rect x="300.5" y="857" width="74" height="22"></rect>
<text x="337.5" y="872">OFFSET</text>
</g>
<path d="M374.5 868h10"></path>
<path d="M384.5 868h10"></path>
<g class="terminal ">
<path d="M394.5 868h0"></path>
<path d="M459.5 868h0"></path>
<rect x="394.5" y="857" width="65" height="22" rx="10" ry="10"></rect>
<text x="427" y="872">start</text>
</g>
<path d="M459.5 868h10"></path>
<path d="M469.5 868h10"></path>
<g>
<path d="M479.5 868h0"></path>
<path d="M607.5 868h0"></path>
<g>
<path d="M479.5 868h0"></path>
<g>
<path d="M479.5 868h0"></path>
<path d="M607.5 868h0"></path>
<path d="M479.5 868h36"></path>
<g>
<path d="M515.5 868h4.5"></path>
<path d="M567 868h4.5"></path>
<g class="non-terminal ">
<path d="M520 868h0"></path>
<path d="M567 868h0"></path>
<rect x="520" y="857" width="47" height="22"></rect>
<text x="543.5" y="872">ROW</text>
</g>
</g>
<path d="M571.5 868h36"></path>
<path d="M479.5 868a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M515.5 904h0"></path>
<path d="M571.5 904h0"></path>
<g class="non-terminal ">
<path d="M515.5 904h0"></path>
<path d="M571.5 904h0"></path>
<rect x="515.5" y="893" width="56" height="22"></rect>
<text x="543.5" y="908">ROWS</text>
</g>
</g>
<path d="M571.5 904a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M607.5 868h0"></path>
</g>
</g>
</g>
<path d="M617.5 868h0"></path>
</g>
<path d="M617.5 868h36"></path>
</g>
</g>
<path d="M840 868a18 18 0 0 1 18 18v23a18 18 0 0 1 -18 18h-772a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 975h74.5"></path>
<path d="M765.5 975h74.5"></path>
<g>
<path d="M142.5 975h0"></path>
<path d="M765.5 975h0"></path>
<path d="M142.5 975a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M178.5 939h551"></path>
</g>
<path d="M729.5 939a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M142.5 975h36"></path>
<g>
<path d="M178.5 975h0"></path>
<g>
<path d="M178.5 975h10"></path>
<path d="M719.5 975h10"></path>
<g class="non-terminal ">
<path d="M188.5 975h0"></path>
<path d="M253.5 975h0"></path>
<rect x="188.5" y="964" width="65" height="22"></rect>
<text x="221" y="979">FETCH</text>
</g>
<path d="M253.5 975h10"></path>
<path d="M263.5 975h10"></path>
<g>
<path d="M273.5 975h0"></path>
<path d="M410.5 975h0"></path>
<g>
<path d="M273.5 975h0"></path>
<g>
<path d="M273.5 975h0"></path>
<path d="M410.5 975h0"></path>
<path d="M273.5 975h36"></path>
<g>
<path d="M309.5 975h0"></path>
<path d="M374.5 975h0"></path>
<g class="non-terminal ">
<path d="M309.5 975h0"></path>
<path d="M374.5 975h0"></path>
<rect x="309.5" y="964" width="65" height="22"></rect>
<text x="342" y="979">FIRST</text>
</g>
</g>
<path d="M374.5 975h36"></path>
<path d="M273.5 975a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M309.5 1011h4.5"></path>
<path d="M370 1011h4.5"></path>
<g class="non-terminal ">
<path d="M314 1011h0"></path>
<path d="M370 1011h0"></path>
<rect x="314" y="1000" width="56" height="22"></rect>
<text x="342" y="1015">NEXT</text>
</g>
</g>
<path d="M374.5 1011a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M410.5 975h0"></path>
</g>
</g>
<path d="M410.5 975h10"></path>
<path d="M420.5 975h10"></path>
<g class="terminal ">
<path d="M430.5 975h0"></path>
<path d="M495.5 975h0"></path>
<rect x="430.5" y="964" width="65" height="22" rx="10" ry="10"></rect>
<text x="463" y="979">count</text>
</g>
<path d="M495.5 975h10"></path>
<path d="M505.5 975h10"></path>
<g>
<path d="M515.5 975h0"></path>
<path d="M643.5 975h0"></path>
<g>
<path d="M515.5 975h0"></path>
<g>
<path d="M515.5 975h0"></path>
<path d="M643.5 975h0"></path>
<path d="M515.5 975h36"></path>
<g>
<path d="M551.5 975h4.5"></path>
<path d="M603 975h4.5"></path>
<g class="non-terminal ">
<path d="M556 975h0"></path>
<path d="M603 975h0"></path>
<rect x="556" y="964" width="47" height="22"></rect>
<text x="579.5" y="979">ROW</text>
</g>
</g>
<path d="M607.5 975h36"></path>
<path d="M515.5 975a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M551.5 1011h0"></path>
<path d="M607.5 1011h0"></path>
<g class="non-terminal ">
<path d="M551.5 1011h0"></path>
<path d="M607.5 1011h0"></path>
<rect x="551.5" y="1000" width="56" height="22"></rect>
<text x="579.5" y="1015">ROWS</text>
</g>
</g>
<path d="M607.5 1011a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M643.5 975h0"></path>
</g>
</g>
<path d="M643.5 975h10"></path>
<path d="M653.5 975h10"></path>
<g class="non-terminal ">
<path d="M663.5 975h0"></path>
<path d="M719.5 975h0"></path>
<rect x="663.5" y="964" width="56" height="22"></rect>
<text x="691.5" y="979">ONLY</text>
</g>
</g>
<path d="M729.5 975h0"></path>
</g>
<path d="M729.5 975h36"></path>
</g>
</g>
<path d="M840 975h18"></path>
<path d="M858 975h0"></path>
</g>
<path d="M858 975h10"></path>
<path d="M 868 975 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="476" height="239" viewBox="0 0 476 239">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h142"></path>
<path d="M266 31h142"></path>
<g class="terminal ">
<path d="M210 31h0"></path>
<path d="M266 31h0"></path>
<rect x="210" y="20" width="56" height="22" rx="10" ry="10"></rect>
<text x="238" y="35">name</text>
</g>
</g>
<path d="M408 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-340a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 115h10"></path>
<path d="M398 115h10"></path>
<g>
<path d="M78 115h0"></path>
<path d="M398 115h0"></path>
<path d="M78 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 79h248"></path>
</g>
<path d="M362 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 115h36"></path>
<g>
<path d="M114 115h0"></path>
<g>
<path d="M114 115h10"></path>
<path d="M352 115h10"></path>
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
<path d="M303 115h0"></path>
<path d="M173 115h18"></path>
<g>
<path d="M191 115h0"></path>
<g>
<path d="M191 115h10"></path>
<path d="M275 115h10"></path>
<g class="terminal ">
<path d="M201 115h0"></path>
<path d="M275 115h0"></path>
<rect x="201" y="104" width="74" height="22" rx="10" ry="10"></rect>
<text x="238" y="119">column</text>
</g>
</g>
<path d="M285 115h0"></path>
</g>
<path d="M285 115h18"></path>
<path d="M191 115a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M191 151h32.5"></path>
<path d="M252.5 151h32.5"></path>
<rect x="223.5" y="140" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="238" y="155">,</text>
</g>
<path d="M285 151a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M303 115h10"></path>
<path d="M313 115h10"></path>
<g class="terminal ">
<path d="M323 115h0"></path>
<path d="M352 115h0"></path>
<rect x="323" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="337.5" y="119">)</text>
</g>
</g>
<path d="M362 115h0"></path>
</g>
<path d="M362 115h36"></path>
</g>
</g>
<path d="M408 115a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-340a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 208h59.5"></path>
<path d="M348.5 208h59.5"></path>
<g class="non-terminal ">
<path d="M127.5 208h0"></path>
<path d="M165.5 208h0"></path>
<rect x="127.5" y="197" width="38" height="22"></rect>
<text x="146.5" y="212">AS</text>
</g>
<path d="M165.5 208h10"></path>
<path d="M175.5 208h10"></path>
<g class="terminal ">
<path d="M185.5 208h0"></path>
<path d="M214.5 208h0"></path>
<rect x="185.5" y="197" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="200" y="212">(</text>
</g>
<path d="M214.5 208h10"></path>
<path d="M224.5 208h10"></path>
<g class="terminal ">
<path d="M234.5 208h0"></path>
<path d="M299.5 208h0"></path>
<rect x="234.5" y="197" width="65" height="22" rx="10" ry="10"></rect>
<text x="267" y="212">query</text>
</g>
<path d="M299.5 208h10"></path>
<path d="M309.5 208h10"></path>
<g class="terminal ">
<path d="M319.5 208h0"></path>
<path d="M348.5 208h0"></path>
<rect x="319.5" y="197" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="334" y="212">)</text>
</g>
</g>
<path d="M408 208h18"></path>
<path d="M426 208h0"></path>
</g>
<path d="M426 208h10"></path>
<path d="M 436 208 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="884" height="702" viewBox="0 0 884 702">
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
<path d="M68 151h250.5"></path>
<path d="M565.5 151h250.5"></path>
<g>
<path d="M318.5 151h0"></path>
<path d="M565.5 151h0"></path>
<g>
<path d="M318.5 151h0"></path>
<g>
<path d="M318.5 151h0"></path>
<path d="M565.5 151h0"></path>
<path d="M318.5 151h36"></path>
<g>
<path d="M354.5 151h73"></path>
<path d="M456.5 151h73"></path>
<g class="terminal ">
<path d="M427.5 151h0"></path>
<path d="M456.5 151h0"></path>
<rect x="427.5" y="140" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="442" y="155">&#42;</text>
</g>
</g>
<path d="M529.5 151h36"></path>
<path d="M318.5 151a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M354.5 187h0"></path>
<path d="M529.5 187h0"></path>
<g>
<path d="M354.5 187h0"></path>
<path d="M529.5 187h0"></path>
<path d="M354.5 187h18"></path>
<g>
<path d="M372.5 187h0"></path>
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
<path d="M511.5 187h0"></path>
</g>
<path d="M511.5 187h18"></path>
<path d="M372.5 187a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M372.5 223h55"></path>
<path d="M456.5 223h55"></path>
<rect x="427.5" y="212" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="442" y="227">,</text>
</g>
<path d="M511.5 223a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M529.5 187a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M565.5 151h0"></path>
</g>
</g>
</g>
<path d="M816 151a18 18 0 0 1 18 18v57a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 280h258.5"></path>
<path d="M557.5 280h258.5"></path>
<g class="non-terminal ">
<path d="M326.5 280h0"></path>
<path d="M382.5 280h0"></path>
<rect x="326.5" y="269" width="56" height="22"></rect>
<text x="354.5" y="284">FROM</text>
</g>
<path d="M382.5 280h10"></path>
<path d="M392.5 280h10"></path>
<g class="terminal ">
<path d="M402.5 280h0"></path>
<path d="M557.5 280h0"></path>
<rect x="402.5" y="269" width="155" height="22" rx="10" ry="10"></rect>
<text x="480" y="284">tableExpression</text>
</g>
</g>
<path d="M816 280a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 364h199"></path>
<path d="M617 364h199"></path>
<g>
<path d="M267 364h0"></path>
<path d="M617 364h0"></path>
<path d="M267 364a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M303 328h278"></path>
</g>
<path d="M581 328a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M267 364h36"></path>
<g>
<path d="M303 364h0"></path>
<g>
<path d="M303 364h10"></path>
<path d="M571 364h10"></path>
<g class="non-terminal ">
<path d="M313 364h0"></path>
<path d="M378 364h0"></path>
<rect x="313" y="353" width="65" height="22"></rect>
<text x="345.5" y="368">WHERE</text>
</g>
<path d="M378 364h10"></path>
<path d="M388 364h10"></path>
<g class="terminal ">
<path d="M398 364h0"></path>
<path d="M571 364h0"></path>
<rect x="398" y="353" width="173" height="22" rx="10" ry="10"></rect>
<text x="484.5" y="368">booleanExpression</text>
</g>
</g>
<path d="M581 364h0"></path>
</g>
<path d="M581 364h36"></path>
</g>
</g>
<path d="M816 364a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 448h168"></path>
<path d="M648 448h168"></path>
<g>
<path d="M236 448h0"></path>
<path d="M648 448h0"></path>
<path d="M236 448a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M272 412h340"></path>
</g>
<path d="M612 412a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M236 448h36"></path>
<g>
<path d="M272 448h0"></path>
<g>
<path d="M272 448h10"></path>
<path d="M602 448h10"></path>
<g class="non-terminal ">
<path d="M282 448h0"></path>
<path d="M347 448h0"></path>
<rect x="282" y="437" width="65" height="22"></rect>
<text x="314.5" y="452">GROUP</text>
</g>
<path d="M347 448h10"></path>
<path d="M357 448h10"></path>
<g class="non-terminal ">
<path d="M367 448h0"></path>
<path d="M405 448h0"></path>
<rect x="367" y="437" width="38" height="22"></rect>
<text x="386" y="452">BY</text>
</g>
<path d="M405 448h10"></path>
<path d="M415 448h10"></path>
<g>
<path d="M425 448h0"></path>
<path d="M602 448h0"></path>
<g>
<path d="M425 448h0"></path>
<g>
<path d="M425 448h10"></path>
<path d="M592 448h10"></path>
<g>
<path d="M435 448h0"></path>
<path d="M592 448h0"></path>
<path d="M435 448h18"></path>
<g>
<path d="M453 448h0"></path>
<g>
<path d="M453 448h10"></path>
<path d="M564 448h10"></path>
<g class="terminal ">
<path d="M463 448h0"></path>
<path d="M564 448h0"></path>
<rect x="463" y="437" width="101" height="22" rx="10" ry="10"></rect>
<text x="513.5" y="452">groupItem</text>
</g>
</g>
<path d="M574 448h0"></path>
</g>
<path d="M574 448h18"></path>
<path d="M453 448a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M453 484h46"></path>
<path d="M528 484h46"></path>
<rect x="499" y="473" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="513.5" y="488">,</text>
</g>
<path d="M574 484a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M602 448h0"></path>
</g>
</g>
</g>
<path d="M612 448h0"></path>
</g>
<path d="M612 448h36"></path>
</g>
</g>
<path d="M816 448a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 553h194.5"></path>
<path d="M621.5 553h194.5"></path>
<g>
<path d="M262.5 553h0"></path>
<path d="M621.5 553h0"></path>
<path d="M262.5 553a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M298.5 517h287"></path>
</g>
<path d="M585.5 517a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M262.5 553h36"></path>
<g>
<path d="M298.5 553h0"></path>
<g>
<path d="M298.5 553h10"></path>
<path d="M575.5 553h10"></path>
<g class="non-terminal ">
<path d="M308.5 553h0"></path>
<path d="M382.5 553h0"></path>
<rect x="308.5" y="542" width="74" height="22"></rect>
<text x="345.5" y="557">HAVING</text>
</g>
<path d="M382.5 553h10"></path>
<path d="M392.5 553h10"></path>
<g class="terminal ">
<path d="M402.5 553h0"></path>
<path d="M575.5 553h0"></path>
<rect x="402.5" y="542" width="173" height="22" rx="10" ry="10"></rect>
<text x="489" y="557">booleanExpression</text>
</g>
</g>
<path d="M585.5 553h0"></path>
</g>
<path d="M585.5 553h36"></path>
</g>
</g>
<path d="M816 553a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-748a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 637h10"></path>
<path d="M806 637h10"></path>
<g>
<path d="M78 637h0"></path>
<path d="M806 637h0"></path>
<path d="M78 637a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 601h656"></path>
</g>
<path d="M770 601a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 637h36"></path>
<g>
<path d="M114 637h0"></path>
<g>
<path d="M114 637h10"></path>
<path d="M760 637h10"></path>
<g class="non-terminal ">
<path d="M124 637h0"></path>
<path d="M198 637h0"></path>
<rect x="124" y="626" width="74" height="22"></rect>
<text x="161" y="641">WINDOW</text>
</g>
<path d="M198 637h10"></path>
<path d="M208 637h10"></path>
<g class="terminal ">
<path d="M218 637h0"></path>
<path d="M328 637h0"></path>
<rect x="218" y="626" width="110" height="22" rx="10" ry="10"></rect>
<text x="273" y="641">windowName</text>
</g>
<path d="M328 637h10"></path>
<path d="M338 637h10"></path>
<g class="non-terminal ">
<path d="M348 637h0"></path>
<path d="M386 637h0"></path>
<rect x="348" y="626" width="38" height="22"></rect>
<text x="367" y="641">AS</text>
</g>
<path d="M386 637h10"></path>
<path d="M396 637h10"></path>
<g>
<path d="M406 637h0"></path>
<path d="M760 637h0"></path>
<path d="M406 637h18"></path>
<g>
<path d="M424 637h0"></path>
<g>
<path d="M424 637h10"></path>
<path d="M732 637h10"></path>
<g class="terminal ">
<path d="M434 637h0"></path>
<path d="M544 637h0"></path>
<rect x="434" y="626" width="110" height="22" rx="10" ry="10"></rect>
<text x="489" y="641">windowName</text>
</g>
<path d="M544 637h10"></path>
<path d="M554 637h10"></path>
<g class="non-terminal ">
<path d="M564 637h0"></path>
<path d="M602 637h0"></path>
<rect x="564" y="626" width="38" height="22"></rect>
<text x="583" y="641">AS</text>
</g>
<path d="M602 637h10"></path>
<path d="M612 637h10"></path>
<g class="terminal ">
<path d="M622 637h0"></path>
<path d="M732 637h0"></path>
<rect x="622" y="626" width="110" height="22" rx="10" ry="10"></rect>
<text x="677" y="641">windowSpec</text>
</g>
</g>
<path d="M742 637h0"></path>
</g>
<path d="M742 637h18"></path>
<path d="M424 637a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M424 673h144.5"></path>
<path d="M597.5 673h144.5"></path>
<rect x="568.5" y="662" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="583" y="677">,</text>
</g>
<path d="M742 673a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M770 637h0"></path>
</g>
<path d="M770 637h36"></path>
</g>
</g>
<path d="M816 637h18"></path>
<path d="M834 637h0"></path>
</g>
<path d="M834 637h10"></path>
<path d="M 844 637 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="476" height="252" viewBox="0 0 476 252">
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
<path d="M68 151h46.5"></path>
<path d="M361.5 151h46.5"></path>
<g>
<path d="M114.5 151h0"></path>
<path d="M361.5 151h0"></path>
<g>
<path d="M114.5 151h0"></path>
<g>
<path d="M114.5 151h0"></path>
<path d="M361.5 151h0"></path>
<path d="M114.5 151h36"></path>
<g>
<path d="M150.5 151h73"></path>
<path d="M252.5 151h73"></path>
<g class="terminal ">
<path d="M223.5 151h0"></path>
<path d="M252.5 151h0"></path>
<rect x="223.5" y="140" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="238" y="155">&#42;</text>
</g>
</g>
<path d="M325.5 151h36"></path>
<path d="M114.5 151a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M150.5 187h0"></path>
<path d="M325.5 187h0"></path>
<g>
<path d="M150.5 187h0"></path>
<path d="M325.5 187h0"></path>
<path d="M150.5 187h18"></path>
<g>
<path d="M168.5 187h0"></path>
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
<path d="M307.5 187h0"></path>
</g>
<path d="M307.5 187h18"></path>
<path d="M168.5 187a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M168.5 223h55"></path>
<path d="M252.5 223h55"></path>
<rect x="223.5" y="212" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="238" y="227">,</text>
</g>
<path d="M307.5 223a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M325.5 187a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M361.5 151h0"></path>
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
<svg class="railroad-diagram" width="1388" height="366" viewBox="0 0 1388 366">
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
<g class="terminal ">
<path d="M611 67h68.5"></path>
<path d="M708.5 67h68.5"></path>
<rect x="679.5" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="694" y="71">,</text>
</g>
<path d="M777 67a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M1302 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v69a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 136h0"></path>
<path d="M1302 136h0"></path>
<g class="terminal ">
<path d="M86 136h0"></path>
<path d="M241 136h0"></path>
<rect x="86" y="125" width="155" height="22" rx="10" ry="10"></rect>
<text x="163.5" y="140">tableExpression</text>
</g>
<path d="M241 136h10"></path>
<g>
<path d="M251 136h0"></path>
<path d="M426 136h0"></path>
<path d="M251 136a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M287 100h103"></path>
</g>
<path d="M390 100a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M251 136h36"></path>
<g>
<path d="M287 136h0"></path>
<g>
<path d="M287 136h10"></path>
<path d="M380 136h10"></path>
<g class="non-terminal ">
<path d="M297 136h0"></path>
<path d="M380 136h0"></path>
<rect x="297" y="125" width="83" height="22"></rect>
<text x="338.5" y="140">NATURAL</text>
</g>
</g>
<path d="M390 136h0"></path>
</g>
<path d="M390 136h36"></path>
</g>
<g>
<path d="M426 136h0"></path>
<path d="M822 136h0"></path>
<path d="M426 136a18 18 0 0 0 18 -18v-12a18 18 0 0 1 18 -18"></path>
<g>
<path d="M462 88h324"></path>
</g>
<path d="M786 88a18 18 0 0 1 18 18v12a18 18 0 0 0 18 18"></path>
<path d="M426 136h36"></path>
<g>
<path d="M462 136h0"></path>
<g>
<path d="M462 136h10"></path>
<path d="M776 136h10"></path>
<g>
<path d="M472 136h0"></path>
<path d="M609 136h0"></path>
<g>
<path d="M472 136h0"></path>
<g>
<path d="M472 136h0"></path>
<path d="M609 136h0"></path>
<path d="M472 136h36"></path>
<g>
<path d="M508 136h4.5"></path>
<path d="M568.5 136h4.5"></path>
<g class="non-terminal ">
<path d="M512.5 136h0"></path>
<path d="M568.5 136h0"></path>
<rect x="512.5" y="125" width="56" height="22"></rect>
<text x="540.5" y="140">LEFT</text>
</g>
</g>
<path d="M573 136h36"></path>
<path d="M472 136a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M508 172h0"></path>
<path d="M573 172h0"></path>
<g class="non-terminal ">
<path d="M508 172h0"></path>
<path d="M573 172h0"></path>
<rect x="508" y="161" width="65" height="22"></rect>
<text x="540.5" y="176">RIGHT</text>
</g>
</g>
<path d="M573 172a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M472 136a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M508 206h4.5"></path>
<path d="M568.5 206h4.5"></path>
<g class="non-terminal ">
<path d="M512.5 206h0"></path>
<path d="M568.5 206h0"></path>
<rect x="512.5" y="195" width="56" height="22"></rect>
<text x="540.5" y="210">FULL</text>
</g>
</g>
<path d="M573 206a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M609 136h0"></path>
</g>
</g>
<path d="M609 136h10"></path>
<g>
<path d="M619 136h0"></path>
<path d="M776 136h0"></path>
<path d="M619 136a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M655 100h85"></path>
</g>
<path d="M740 100a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M619 136h36"></path>
<g>
<path d="M655 136h0"></path>
<g>
<path d="M655 136h10"></path>
<path d="M730 136h10"></path>
<g class="non-terminal ">
<path d="M665 136h0"></path>
<path d="M730 136h0"></path>
<rect x="665" y="125" width="65" height="22"></rect>
<text x="697.5" y="140">OUTER</text>
</g>
</g>
<path d="M740 136h0"></path>
</g>
<path d="M740 136h36"></path>
</g>
</g>
<path d="M786 136h0"></path>
</g>
<path d="M786 136h36"></path>
</g>
<path d="M822 136h10"></path>
<g class="non-terminal ">
<path d="M832 136h0"></path>
<path d="M888 136h0"></path>
<rect x="832" y="125" width="56" height="22"></rect>
<text x="860" y="140">JOIN</text>
</g>
<path d="M888 136h10"></path>
<path d="M898 136h10"></path>
<g class="terminal ">
<path d="M908 136h0"></path>
<path d="M1063 136h0"></path>
<rect x="908" y="125" width="155" height="22" rx="10" ry="10"></rect>
<text x="985.5" y="140">tableExpression</text>
</g>
<path d="M1063 136h10"></path>
<g>
<path d="M1073 136h0"></path>
<path d="M1302 136h0"></path>
<path d="M1073 136a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1109 100h157"></path>
</g>
<path d="M1266 100a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1073 136h36"></path>
<g>
<path d="M1109 136h0"></path>
<g>
<path d="M1109 136h10"></path>
<path d="M1256 136h10"></path>
<g class="terminal ">
<path d="M1119 136h0"></path>
<path d="M1256 136h0"></path>
<rect x="1119" y="125" width="137" height="22" rx="10" ry="10"></rect>
<text x="1187.5" y="140">joinCondition</text>
</g>
</g>
<path d="M1266 136h0"></path>
</g>
<path d="M1266 136h36"></path>
</g>
</g>
<path d="M1302 136a18 18 0 0 0 18 -18v-69a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v173a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 240h362.5"></path>
<path d="M939.5 240h362.5"></path>
<g class="terminal ">
<path d="M448.5 240h0"></path>
<path d="M603.5 240h0"></path>
<rect x="448.5" y="229" width="155" height="22" rx="10" ry="10"></rect>
<text x="526" y="244">tableExpression</text>
</g>
<path d="M603.5 240h10"></path>
<path d="M613.5 240h10"></path>
<g class="non-terminal ">
<path d="M623.5 240h0"></path>
<path d="M688.5 240h0"></path>
<rect x="623.5" y="229" width="65" height="22"></rect>
<text x="656" y="244">CROSS</text>
</g>
<path d="M688.5 240h10"></path>
<path d="M698.5 240h10"></path>
<g class="non-terminal ">
<path d="M708.5 240h0"></path>
<path d="M764.5 240h0"></path>
<rect x="708.5" y="229" width="56" height="22"></rect>
<text x="736.5" y="244">JOIN</text>
</g>
<path d="M764.5 240h10"></path>
<path d="M774.5 240h10"></path>
<g class="terminal ">
<path d="M784.5 240h0"></path>
<path d="M939.5 240h0"></path>
<rect x="784.5" y="229" width="155" height="22" rx="10" ry="10"></rect>
<text x="862" y="244">tableExpression</text>
</g>
</g>
<path d="M1302 240a18 18 0 0 0 18 -18v-173a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v232a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 299h296"></path>
<path d="M1006 299h296"></path>
<g class="terminal ">
<path d="M382 299h0"></path>
<path d="M537 299h0"></path>
<rect x="382" y="288" width="155" height="22" rx="10" ry="10"></rect>
<text x="459.5" y="303">tableExpression</text>
</g>
<path d="M537 299h10"></path>
<g>
<path d="M547 299h0"></path>
<path d="M756 299h0"></path>
<path d="M547 299a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M583 263h137"></path>
</g>
<path d="M720 263a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M547 299h36"></path>
<g>
<path d="M583 299h0"></path>
<g>
<path d="M583 299h0"></path>
<path d="M720 299h0"></path>
<path d="M583 299h36"></path>
<g>
<path d="M619 299h0"></path>
<path d="M684 299h0"></path>
<g class="non-terminal ">
<path d="M619 299h0"></path>
<path d="M684 299h0"></path>
<rect x="619" y="288" width="65" height="22"></rect>
<text x="651.5" y="303">CROSS</text>
</g>
</g>
<path d="M684 299h36"></path>
<path d="M583 299a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M619 335h0"></path>
<path d="M684 335h0"></path>
<g class="non-terminal ">
<path d="M619 335h0"></path>
<path d="M684 335h0"></path>
<rect x="619" y="324" width="65" height="22"></rect>
<text x="651.5" y="339">OUTER</text>
</g>
</g>
<path d="M684 335a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M720 299h0"></path>
</g>
<path d="M720 299h36"></path>
</g>
<path d="M756 299h10"></path>
<g class="non-terminal ">
<path d="M766 299h0"></path>
<path d="M831 299h0"></path>
<rect x="766" y="288" width="65" height="22"></rect>
<text x="798.5" y="303">APPLY</text>
</g>
<path d="M831 299h10"></path>
<path d="M841 299h10"></path>
<g class="terminal ">
<path d="M851 299h0"></path>
<path d="M1006 299h0"></path>
<rect x="851" y="288" width="155" height="22" rx="10" ry="10"></rect>
<text x="928.5" y="303">tableExpression</text>
</g>
</g>
<path d="M1302 299a18 18 0 0 0 18 -18v-232a18 18 0 0 1 18 -18"></path>
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
<svg class="railroad-diagram" width="485" height="132" viewBox="0 0 485 132">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M435 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h41"></path>
<path d="M358 31h41"></path>
<g class="non-terminal ">
<path d="M127 31h0"></path>
<path d="M165 31h0"></path>
<rect x="127" y="20" width="38" height="22"></rect>
<text x="146" y="35">ON</text>
</g>
<path d="M165 31h10"></path>
<path d="M175 31h10"></path>
<g class="terminal ">
<path d="M185 31h0"></path>
<path d="M358 31h0"></path>
<rect x="185" y="20" width="173" height="22" rx="10" ry="10"></rect>
<text x="271.5" y="35">booleanExpression</text>
</g>
</g>
<path d="M399 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h0"></path>
<path d="M399 67h0"></path>
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
<path d="M350 67h0"></path>
<path d="M220 67h18"></path>
<g>
<path d="M238 67h0"></path>
<g>
<path d="M238 67h10"></path>
<path d="M322 67h10"></path>
<g class="terminal ">
<path d="M248 67h0"></path>
<path d="M322 67h0"></path>
<rect x="248" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="285" y="71">column</text>
</g>
</g>
<path d="M332 67h0"></path>
</g>
<path d="M332 67h18"></path>
<path d="M238 67a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M238 103h32.5"></path>
<path d="M299.5 103h32.5"></path>
<rect x="270.5" y="92" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="285" y="107">,</text>
</g>
<path d="M332 103a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M350 67h10"></path>
<path d="M360 67h10"></path>
<g class="terminal ">
<path d="M370 67h0"></path>
<path d="M399 67h0"></path>
<rect x="370" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="384.5" y="71">)</text>
</g>
</g>
<path d="M399 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M435 31h0"></path>
</g>
<path d="M435 31h10"></path>
<path d="M 445 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="828" height="276" viewBox="0 0 828 276">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h295.5"></path>
<path d="M464.5 31h295.5"></path>
<g class="terminal ">
<path d="M363.5 31h0"></path>
<path d="M464.5 31h0"></path>
<rect x="363.5" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="414" y="35">tableName</text>
</g>
</g>
<path d="M760 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-692a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 115h227"></path>
<path d="M533 115h227"></path>
<g>
<path d="M295 115h0"></path>
<path d="M533 115h0"></path>
<path d="M295 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M331 79h166"></path>
</g>
<path d="M497 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M295 115h36"></path>
<g>
<path d="M331 115h0"></path>
<g>
<path d="M331 115h10"></path>
<path d="M487 115h10"></path>
<g class="terminal ">
<path d="M341 115h0"></path>
<path d="M487 115h0"></path>
<rect x="341" y="104" width="146" height="22" rx="10" ry="10"></rect>
<text x="414" y="119">matchRecognize</text>
</g>
</g>
<path d="M497 115h0"></path>
</g>
<path d="M497 115h36"></path>
</g>
</g>
<path d="M760 115a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-692a18 18 0 0 0 -18 18v24a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 211h10"></path>
<path d="M750 211h10"></path>
<g>
<path d="M78 211h0"></path>
<path d="M750 211h0"></path>
<path d="M78 211a18 18 0 0 0 18 -18v-12a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 163h600"></path>
</g>
<path d="M714 163a18 18 0 0 1 18 18v12a18 18 0 0 0 18 18"></path>
<path d="M78 211h36"></path>
<g>
<path d="M114 211h0"></path>
<g>
<path d="M114 211h10"></path>
<path d="M704 211h10"></path>
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
<path d="M704 211h0"></path>
<path d="M339 211a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M375 175h293"></path>
</g>
<path d="M668 175a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M339 211h36"></path>
<g>
<path d="M375 211h0"></path>
<g>
<path d="M375 211h10"></path>
<path d="M658 211h10"></path>
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
<path d="M609 211h0"></path>
<path d="M434 211h18"></path>
<g>
<path d="M452 211h0"></path>
<g>
<path d="M452 211h10"></path>
<path d="M581 211h10"></path>
<g class="terminal ">
<path d="M462 211h0"></path>
<path d="M581 211h0"></path>
<rect x="462" y="200" width="119" height="22" rx="10" ry="10"></rect>
<text x="521.5" y="215">columnAlias</text>
</g>
</g>
<path d="M591 211h0"></path>
</g>
<path d="M591 211h18"></path>
<path d="M452 211a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M452 247h55"></path>
<path d="M536 247h55"></path>
<rect x="507" y="236" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="521.5" y="251">,</text>
</g>
<path d="M591 247a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M609 211h10"></path>
<path d="M619 211h10"></path>
<g class="terminal ">
<path d="M629 211h0"></path>
<path d="M658 211h0"></path>
<rect x="629" y="200" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="643.5" y="215">)</text>
</g>
</g>
<path d="M668 211h0"></path>
</g>
<path d="M668 211h36"></path>
</g>
</g>
<path d="M714 211h0"></path>
</g>
<path d="M714 211h36"></path>
</g>
</g>
<path d="M760 211h18"></path>
<path d="M778 211h0"></path>
</g>
<path d="M778 211h10"></path>
<path d="M 788 211 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1136" height="450" viewBox="0 0 1136 450">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h0"></path>
<path d="M1086 56h0"></path>
<path d="M50 56h36"></path>
<g>
<path d="M86 56h301"></path>
<path d="M749 56h301"></path>
<g>
<path d="M387 56h0"></path>
<path d="M638 56h0"></path>
<path d="M387 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M423 20h179"></path>
</g>
<path d="M602 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M387 56h36"></path>
<g>
<path d="M423 56h0"></path>
<g>
<path d="M423 56h10"></path>
<path d="M592 56h10"></path>
<g class="terminal ">
<path d="M433 56h0"></path>
<path d="M543 56h0"></path>
<rect x="433" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="488" y="60">schemaName</text>
</g>
<path d="M543 56h10"></path>
<path d="M553 56h10"></path>
<g class="terminal ">
<path d="M563 56h0"></path>
<path d="M592 56h0"></path>
<rect x="563" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="577.5" y="60">.</text>
</g>
</g>
<path d="M602 56h0"></path>
</g>
<path d="M602 56h36"></path>
</g>
<path d="M638 56h10"></path>
<g class="terminal ">
<path d="M648 56h0"></path>
<path d="M749 56h0"></path>
<rect x="648" y="45" width="101" height="22" rx="10" ry="10"></rect>
<text x="698.5" y="60">tableName</text>
</g>
</g>
<path d="M1050 56h36"></path>
<path d="M50 56a18 18 0 0 1 18 18v23a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 115h214.5"></path>
<path d="M835.5 115h214.5"></path>
<g class="terminal ">
<path d="M300.5 115h0"></path>
<path d="M329.5 115h0"></path>
<rect x="300.5" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="315" y="119">(</text>
</g>
<path d="M329.5 115h10"></path>
<path d="M339.5 115h10"></path>
<g class="non-terminal ">
<path d="M349.5 115h0"></path>
<path d="M414.5 115h0"></path>
<rect x="349.5" y="104" width="65" height="22"></rect>
<text x="382" y="119">TABLE</text>
</g>
<path d="M414.5 115h10"></path>
<g>
<path d="M424.5 115h0"></path>
<path d="M675.5 115h0"></path>
<path d="M424.5 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M460.5 79h179"></path>
</g>
<path d="M639.5 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M424.5 115h36"></path>
<g>
<path d="M460.5 115h0"></path>
<g>
<path d="M460.5 115h10"></path>
<path d="M629.5 115h10"></path>
<g class="terminal ">
<path d="M470.5 115h0"></path>
<path d="M580.5 115h0"></path>
<rect x="470.5" y="104" width="110" height="22" rx="10" ry="10"></rect>
<text x="525.5" y="119">schemaName</text>
</g>
<path d="M580.5 115h10"></path>
<path d="M590.5 115h10"></path>
<g class="terminal ">
<path d="M600.5 115h0"></path>
<path d="M629.5 115h0"></path>
<rect x="600.5" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="615" y="119">.</text>
</g>
</g>
<path d="M639.5 115h0"></path>
</g>
<path d="M639.5 115h36"></path>
</g>
<path d="M675.5 115h10"></path>
<g class="terminal ">
<path d="M685.5 115h0"></path>
<path d="M786.5 115h0"></path>
<rect x="685.5" y="104" width="101" height="22" rx="10" ry="10"></rect>
<text x="736" y="119">tableName</text>
</g>
<path d="M786.5 115h10"></path>
<path d="M796.5 115h10"></path>
<g class="terminal ">
<path d="M806.5 115h0"></path>
<path d="M835.5 115h0"></path>
<rect x="806.5" y="104" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="821" y="119">)</text>
</g>
</g>
<path d="M1050 115a18 18 0 0 0 18 -18v-23a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v82a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 174h206.5"></path>
<path d="M843.5 174h206.5"></path>
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
<path d="M794.5 174h0"></path>
<path d="M628.5 174h18"></path>
<g>
<path d="M646.5 174h0"></path>
<g>
<path d="M646.5 174h10"></path>
<path d="M766.5 174h10"></path>
<g class="terminal ">
<path d="M656.5 174h0"></path>
<path d="M766.5 174h0"></path>
<rect x="656.5" y="163" width="110" height="22" rx="10" ry="10"></rect>
<text x="711.5" y="178">columnDecl</text>
</g>
</g>
<path d="M776.5 174h0"></path>
</g>
<path d="M776.5 174h18"></path>
<path d="M646.5 174a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M646.5 210h50.5"></path>
<path d="M726 210h50.5"></path>
<rect x="697" y="199" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="711.5" y="214">,</text>
</g>
<path d="M776.5 210a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M794.5 174h10"></path>
<path d="M804.5 174h10"></path>
<g class="terminal ">
<path d="M814.5 174h0"></path>
<path d="M843.5 174h0"></path>
<rect x="814.5" y="163" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="829" y="178">)</text>
</g>
</g>
<path d="M1050 174a18 18 0 0 0 18 -18v-82a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v175a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 267h308"></path>
<path d="M742 267h308"></path>
<g>
<path d="M394 267h0"></path>
<path d="M569 267h0"></path>
<path d="M394 267a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M430 231h103"></path>
</g>
<path d="M533 231a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M394 267h36"></path>
<g>
<path d="M430 267h0"></path>
<g>
<path d="M430 267h10"></path>
<path d="M523 267h10"></path>
<g class="non-terminal ">
<path d="M440 267h0"></path>
<path d="M523 267h0"></path>
<rect x="440" y="256" width="83" height="22"></rect>
<text x="481.5" y="271">LATERAL</text>
</g>
</g>
<path d="M533 267h0"></path>
</g>
<path d="M533 267h36"></path>
</g>
<path d="M569 267h10"></path>
<g class="terminal ">
<path d="M579 267h0"></path>
<path d="M608 267h0"></path>
<rect x="579" y="256" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="593.5" y="271">(</text>
</g>
<path d="M608 267h10"></path>
<path d="M618 267h10"></path>
<g class="terminal ">
<path d="M628 267h0"></path>
<path d="M693 267h0"></path>
<rect x="628" y="256" width="65" height="22" rx="10" ry="10"></rect>
<text x="660.5" y="271">query</text>
</g>
<path d="M693 267h10"></path>
<path d="M703 267h10"></path>
<g class="terminal ">
<path d="M713 267h0"></path>
<path d="M742 267h0"></path>
<rect x="713" y="256" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="727.5" y="271">)</text>
</g>
</g>
<path d="M1050 267a18 18 0 0 0 18 -18v-175a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v234a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 326h187"></path>
<path d="M863 326h187"></path>
<g class="non-terminal ">
<path d="M273 326h0"></path>
<path d="M347 326h0"></path>
<rect x="273" y="315" width="74" height="22"></rect>
<text x="310" y="330">UNNEST</text>
</g>
<path d="M347 326h10"></path>
<path d="M357 326h10"></path>
<g class="terminal ">
<path d="M367 326h0"></path>
<path d="M396 326h0"></path>
<rect x="367" y="315" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="381.5" y="330">(</text>
</g>
<path d="M396 326h10"></path>
<path d="M406 326h10"></path>
<g class="terminal ">
<path d="M416 326h0"></path>
<path d="M526 326h0"></path>
<rect x="416" y="315" width="110" height="22" rx="10" ry="10"></rect>
<text x="471" y="330">expression</text>
</g>
<path d="M526 326h10"></path>
<path d="M536 326h10"></path>
<g class="terminal ">
<path d="M546 326h0"></path>
<path d="M575 326h0"></path>
<rect x="546" y="315" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="560.5" y="330">)</text>
</g>
<path d="M575 326h10"></path>
<g>
<path d="M585 326h0"></path>
<path d="M863 326h0"></path>
<path d="M585 326a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M621 290h206"></path>
</g>
<path d="M827 290a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M585 326h36"></path>
<g>
<path d="M621 326h0"></path>
<g>
<path d="M621 326h10"></path>
<path d="M817 326h10"></path>
<g class="non-terminal ">
<path d="M631 326h0"></path>
<path d="M687 326h0"></path>
<rect x="631" y="315" width="56" height="22"></rect>
<text x="659" y="330">WITH</text>
</g>
<path d="M687 326h10"></path>
<path d="M697 326h10"></path>
<g class="non-terminal ">
<path d="M707 326h0"></path>
<path d="M817 326h0"></path>
<rect x="707" y="315" width="110" height="22"></rect>
<text x="762" y="330">ORDINALITY</text>
</g>
</g>
<path d="M827 326h0"></path>
</g>
<path d="M827 326h36"></path>
</g>
</g>
<path d="M1050 326a18 18 0 0 0 18 -18v-234a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v293a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 385h0"></path>
<path d="M1050 385h0"></path>
<g>
<path d="M86 385h0"></path>
<path d="M261 385h0"></path>
<path d="M86 385a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M122 349h103"></path>
</g>
<path d="M225 349a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M86 385h36"></path>
<g>
<path d="M122 385h0"></path>
<g>
<path d="M122 385h10"></path>
<path d="M215 385h10"></path>
<g class="non-terminal ">
<path d="M132 385h0"></path>
<path d="M215 385h0"></path>
<rect x="132" y="374" width="83" height="22"></rect>
<text x="173.5" y="389">LATERAL</text>
</g>
</g>
<path d="M225 385h0"></path>
</g>
<path d="M225 385h36"></path>
</g>
<path d="M261 385h10"></path>
<g class="non-terminal ">
<path d="M271 385h0"></path>
<path d="M336 385h0"></path>
<rect x="271" y="374" width="65" height="22"></rect>
<text x="303.5" y="389">TABLE</text>
</g>
<path d="M336 385h10"></path>
<path d="M346 385h10"></path>
<g class="terminal ">
<path d="M356 385h0"></path>
<path d="M385 385h0"></path>
<rect x="356" y="374" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="370.5" y="389">(</text>
</g>
<path d="M385 385h10"></path>
<g>
<path d="M395 385h0"></path>
<path d="M579 385h0"></path>
<path d="M395 385a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M431 349h112"></path>
</g>
<path d="M543 349a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M395 385h36"></path>
<g>
<path d="M431 385h0"></path>
<g>
<path d="M431 385h10"></path>
<path d="M533 385h10"></path>
<g class="non-terminal ">
<path d="M441 385h0"></path>
<path d="M533 385h0"></path>
<rect x="441" y="374" width="92" height="22"></rect>
<text x="487" y="389">SPECIFIC</text>
</g>
</g>
<path d="M543 385h0"></path>
</g>
<path d="M543 385h36"></path>
</g>
<path d="M579 385h10"></path>
<g class="terminal ">
<path d="M589 385h0"></path>
<path d="M717 385h0"></path>
<rect x="589" y="374" width="128" height="22" rx="10" ry="10"></rect>
<text x="653" y="389">functionName</text>
</g>
<path d="M717 385h10"></path>
<path d="M727 385h10"></path>
<g class="terminal ">
<path d="M737 385h0"></path>
<path d="M766 385h0"></path>
<rect x="737" y="374" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="751.5" y="389">(</text>
</g>
<path d="M766 385h10"></path>
<path d="M776 385h10"></path>
<g>
<path d="M786 385h0"></path>
<path d="M952 385h0"></path>
<path d="M786 385h18"></path>
<g>
<path d="M804 385h0"></path>
<g>
<path d="M804 385h10"></path>
<path d="M924 385h10"></path>
<g class="terminal ">
<path d="M814 385h0"></path>
<path d="M924 385h0"></path>
<rect x="814" y="374" width="110" height="22" rx="10" ry="10"></rect>
<text x="869" y="389">expression</text>
</g>
</g>
<path d="M934 385h0"></path>
</g>
<path d="M934 385h18"></path>
<path d="M804 385a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M804 421h50.5"></path>
<path d="M883.5 421h50.5"></path>
<rect x="854.5" y="410" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="869" y="425">,</text>
</g>
<path d="M934 421a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M952 385h10"></path>
<path d="M962 385h10"></path>
<g class="terminal ">
<path d="M972 385h0"></path>
<path d="M1001 385h0"></path>
<rect x="972" y="374" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="986.5" y="389">)</text>
</g>
<path d="M1001 385h10"></path>
<path d="M1011 385h10"></path>
<g class="terminal ">
<path d="M1021 385h0"></path>
<path d="M1050 385h0"></path>
<rect x="1021" y="374" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1035.5" y="389">)</text>
</g>
</g>
<path d="M1050 385a18 18 0 0 0 18 -18v-293a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1086 56h0"></path>
</g>
<path d="M1086 56h10"></path>
<path d="M 1096 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="380" height="96" viewBox="0 0 380 96">
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
<g class="terminal ">
<path d="M172 67h50.5"></path>
<path d="M251.5 67h50.5"></path>
<rect x="222.5" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="237" y="71">,</text>
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
<svg class="railroad-diagram" width="615" height="370" viewBox="0 0 615 370">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M565 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h166.5"></path>
<path d="M362.5 31h166.5"></path>
<g class="terminal ">
<path d="M252.5 31h0"></path>
<path d="M362.5 31h0"></path>
<rect x="252.5" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="307.5" y="35">expression</text>
</g>
</g>
<path d="M529 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h182.5"></path>
<path d="M346.5 67h182.5"></path>
<g class="terminal ">
<path d="M268.5 67h0"></path>
<path d="M297.5 67h0"></path>
<rect x="268.5" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="283" y="71">(</text>
</g>
<path d="M297.5 67h10"></path>
<path d="M307.5 67h10"></path>
<g class="terminal ">
<path d="M317.5 67h0"></path>
<path d="M346.5 67h0"></path>
<rect x="317.5" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="332" y="71">)</text>
</g>
</g>
<path d="M529 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 101h89.5"></path>
<path d="M439.5 101h89.5"></path>
<g class="terminal ">
<path d="M175.5 101h0"></path>
<path d="M204.5 101h0"></path>
<rect x="175.5" y="90" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="190" y="105">(</text>
</g>
<path d="M204.5 101h10"></path>
<path d="M214.5 101h10"></path>
<g>
<path d="M224.5 101h0"></path>
<path d="M390.5 101h0"></path>
<path d="M224.5 101h18"></path>
<g>
<path d="M242.5 101h0"></path>
<g>
<path d="M242.5 101h10"></path>
<path d="M362.5 101h10"></path>
<g class="terminal ">
<path d="M252.5 101h0"></path>
<path d="M362.5 101h0"></path>
<rect x="252.5" y="90" width="110" height="22" rx="10" ry="10"></rect>
<text x="307.5" y="105">expression</text>
</g>
</g>
<path d="M372.5 101h0"></path>
</g>
<path d="M372.5 101h18"></path>
<path d="M242.5 101a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M242.5 137h50.5"></path>
<path d="M322 137h50.5"></path>
<rect x="293" y="126" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="307.5" y="141">,</text>
</g>
<path d="M372.5 137a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M390.5 101h10"></path>
<path d="M400.5 101h10"></path>
<g class="terminal ">
<path d="M410.5 101h0"></path>
<path d="M439.5 101h0"></path>
<rect x="410.5" y="90" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="425" y="105">)</text>
</g>
</g>
<path d="M529 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v102a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 169h51.5"></path>
<path d="M477.5 169h51.5"></path>
<g class="non-terminal ">
<path d="M137.5 169h0"></path>
<path d="M193.5 169h0"></path>
<rect x="137.5" y="158" width="56" height="22"></rect>
<text x="165.5" y="173">CUBE</text>
</g>
<path d="M193.5 169h10"></path>
<path d="M203.5 169h10"></path>
<g class="terminal ">
<path d="M213.5 169h0"></path>
<path d="M242.5 169h0"></path>
<rect x="213.5" y="158" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="228" y="173">(</text>
</g>
<path d="M242.5 169h10"></path>
<path d="M252.5 169h10"></path>
<g>
<path d="M262.5 169h0"></path>
<path d="M428.5 169h0"></path>
<path d="M262.5 169h18"></path>
<g>
<path d="M280.5 169h0"></path>
<g>
<path d="M280.5 169h10"></path>
<path d="M400.5 169h10"></path>
<g class="terminal ">
<path d="M290.5 169h0"></path>
<path d="M400.5 169h0"></path>
<rect x="290.5" y="158" width="110" height="22" rx="10" ry="10"></rect>
<text x="345.5" y="173">expression</text>
</g>
</g>
<path d="M410.5 169h0"></path>
</g>
<path d="M410.5 169h18"></path>
<path d="M280.5 169a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M280.5 205h50.5"></path>
<path d="M360 205h50.5"></path>
<rect x="331" y="194" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="345.5" y="209">,</text>
</g>
<path d="M410.5 205a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M428.5 169h10"></path>
<path d="M438.5 169h10"></path>
<g class="terminal ">
<path d="M448.5 169h0"></path>
<path d="M477.5 169h0"></path>
<rect x="448.5" y="158" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="463" y="173">)</text>
</g>
</g>
<path d="M529 169a18 18 0 0 0 18 -18v-102a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v170a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 237h42.5"></path>
<path d="M486.5 237h42.5"></path>
<g class="non-terminal ">
<path d="M128.5 237h0"></path>
<path d="M202.5 237h0"></path>
<rect x="128.5" y="226" width="74" height="22"></rect>
<text x="165.5" y="241">ROLLUP</text>
</g>
<path d="M202.5 237h10"></path>
<path d="M212.5 237h10"></path>
<g class="terminal ">
<path d="M222.5 237h0"></path>
<path d="M251.5 237h0"></path>
<rect x="222.5" y="226" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="237" y="241">(</text>
</g>
<path d="M251.5 237h10"></path>
<path d="M261.5 237h10"></path>
<g>
<path d="M271.5 237h0"></path>
<path d="M437.5 237h0"></path>
<path d="M271.5 237h18"></path>
<g>
<path d="M289.5 237h0"></path>
<g>
<path d="M289.5 237h10"></path>
<path d="M409.5 237h10"></path>
<g class="terminal ">
<path d="M299.5 237h0"></path>
<path d="M409.5 237h0"></path>
<rect x="299.5" y="226" width="110" height="22" rx="10" ry="10"></rect>
<text x="354.5" y="241">expression</text>
</g>
</g>
<path d="M419.5 237h0"></path>
</g>
<path d="M419.5 237h18"></path>
<path d="M289.5 237a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M289.5 273h50.5"></path>
<path d="M369 273h50.5"></path>
<rect x="340" y="262" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="354.5" y="277">,</text>
</g>
<path d="M419.5 273a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M437.5 237h10"></path>
<path d="M447.5 237h10"></path>
<g class="terminal ">
<path d="M457.5 237h0"></path>
<path d="M486.5 237h0"></path>
<rect x="457.5" y="226" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="472" y="241">)</text>
</g>
</g>
<path d="M529 237a18 18 0 0 0 18 -18v-170a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v238a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 305h0"></path>
<path d="M529 305h0"></path>
<g class="non-terminal ">
<path d="M86 305h0"></path>
<path d="M178 305h0"></path>
<rect x="86" y="294" width="92" height="22"></rect>
<text x="132" y="309">GROUPING</text>
</g>
<path d="M178 305h10"></path>
<path d="M188 305h10"></path>
<g class="non-terminal ">
<path d="M198 305h0"></path>
<path d="M254 305h0"></path>
<rect x="198" y="294" width="56" height="22"></rect>
<text x="226" y="309">SETS</text>
</g>
<path d="M254 305h10"></path>
<path d="M264 305h10"></path>
<g class="terminal ">
<path d="M274 305h0"></path>
<path d="M303 305h0"></path>
<rect x="274" y="294" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="288.5" y="309">(</text>
</g>
<path d="M303 305h10"></path>
<path d="M313 305h10"></path>
<g>
<path d="M323 305h0"></path>
<path d="M480 305h0"></path>
<path d="M323 305h18"></path>
<g>
<path d="M341 305h0"></path>
<g>
<path d="M341 305h10"></path>
<path d="M452 305h10"></path>
<g class="terminal ">
<path d="M351 305h0"></path>
<path d="M452 305h0"></path>
<rect x="351" y="294" width="101" height="22" rx="10" ry="10"></rect>
<text x="401.5" y="309">groupItem</text>
</g>
</g>
<path d="M462 305h0"></path>
</g>
<path d="M462 305h18"></path>
<path d="M341 305a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M341 341h46"></path>
<path d="M416 341h46"></path>
<rect x="387" y="330" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="401.5" y="345">,</text>
</g>
<path d="M462 341a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M480 305h10"></path>
<path d="M490 305h10"></path>
<g class="terminal ">
<path d="M500 305h0"></path>
<path d="M529 305h0"></path>
<rect x="500" y="294" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="514.5" y="309">)</text>
</g>
</g>
<path d="M529 305a18 18 0 0 0 18 -18v-238a18 18 0 0 1 18 -18"></path>
</g>
<path d="M565 31h0"></path>
</g>
<path d="M565 31h10"></path>
<path d="M 575 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="962" height="654" viewBox="0 0 962 654">
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
<path d="M68 212h217"></path>
<path d="M677 212h217"></path>
<g>
<path d="M285 212h0"></path>
<path d="M677 212h0"></path>
<path d="M285 212a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M321 176h320"></path>
</g>
<path d="M641 176a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M285 212h36"></path>
<g>
<path d="M321 212h0"></path>
<g>
<path d="M321 212h10"></path>
<path d="M631 212h10"></path>
<g class="non-terminal ">
<path d="M331 212h0"></path>
<path d="M396 212h0"></path>
<rect x="331" y="201" width="65" height="22"></rect>
<text x="363.5" y="216">ORDER</text>
</g>
<path d="M396 212h10"></path>
<path d="M406 212h10"></path>
<g class="non-terminal ">
<path d="M416 212h0"></path>
<path d="M454 212h0"></path>
<rect x="416" y="201" width="38" height="22"></rect>
<text x="435" y="216">BY</text>
</g>
<path d="M454 212h10"></path>
<path d="M464 212h10"></path>
<g>
<path d="M474 212h0"></path>
<path d="M631 212h0"></path>
<path d="M474 212h18"></path>
<g>
<path d="M492 212h0"></path>
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
<path d="M613 212h0"></path>
</g>
<path d="M613 212h18"></path>
<path d="M492 212a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M492 248h46"></path>
<path d="M567 248h46"></path>
<rect x="538" y="237" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="552.5" y="252">,</text>
</g>
<path d="M613 248a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M641 212h0"></path>
</g>
<path d="M641 212h36"></path>
</g>
</g>
<path d="M894 212a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 317h194.5"></path>
<path d="M699.5 317h194.5"></path>
<g>
<path d="M262.5 317h0"></path>
<path d="M699.5 317h0"></path>
<path d="M262.5 317a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M298.5 281h365"></path>
</g>
<path d="M663.5 281a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M262.5 317h36"></path>
<g>
<path d="M298.5 317h0"></path>
<g>
<path d="M298.5 317h10"></path>
<path d="M653.5 317h10"></path>
<g class="non-terminal ">
<path d="M308.5 317h0"></path>
<path d="M409.5 317h0"></path>
<rect x="308.5" y="306" width="101" height="22"></rect>
<text x="359" y="321">PARTITION</text>
</g>
<path d="M409.5 317h10"></path>
<path d="M419.5 317h10"></path>
<g class="non-terminal ">
<path d="M429.5 317h0"></path>
<path d="M467.5 317h0"></path>
<rect x="429.5" y="306" width="38" height="22"></rect>
<text x="448.5" y="321">BY</text>
</g>
<path d="M467.5 317h10"></path>
<path d="M477.5 317h10"></path>
<g>
<path d="M487.5 317h0"></path>
<path d="M653.5 317h0"></path>
<path d="M487.5 317h18"></path>
<g>
<path d="M505.5 317h0"></path>
<g>
<path d="M505.5 317h10"></path>
<path d="M625.5 317h10"></path>
<g class="terminal ">
<path d="M515.5 317h0"></path>
<path d="M625.5 317h0"></path>
<rect x="515.5" y="306" width="110" height="22" rx="10" ry="10"></rect>
<text x="570.5" y="321">expression</text>
</g>
</g>
<path d="M635.5 317h0"></path>
</g>
<path d="M635.5 317h18"></path>
<path d="M505.5 317a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M505.5 353h50.5"></path>
<path d="M585 353h50.5"></path>
<rect x="556" y="342" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="570.5" y="357">,</text>
</g>
<path d="M635.5 353a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M663.5 317h0"></path>
</g>
<path d="M663.5 317h36"></path>
</g>
</g>
<path d="M894 317a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 422h10"></path>
<path d="M884 422h10"></path>
<g>
<path d="M78 422h0"></path>
<path d="M884 422h0"></path>
<path d="M78 422a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 386h734"></path>
</g>
<path d="M848 386a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 422h36"></path>
<g>
<path d="M114 422h0"></path>
<g>
<path d="M114 422h0"></path>
<path d="M848 422h0"></path>
<path d="M114 422h36"></path>
<g>
<path d="M150 422h280.5"></path>
<path d="M531.5 422h280.5"></path>
<g class="terminal ">
<path d="M430.5 422h0"></path>
<path d="M531.5 422h0"></path>
<rect x="430.5" y="411" width="101" height="22" rx="10" ry="10"></rect>
<text x="481" y="426">undefined</text>
</g>
</g>
<path d="M812 422h36"></path>
<path d="M114 422a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M150 458h0"></path>
<path d="M812 458h0"></path>
<g class="non-terminal ">
<path d="M150 458h0"></path>
<path d="M215 458h0"></path>
<rect x="150" y="447" width="65" height="22"></rect>
<text x="182.5" y="462">RANGE</text>
</g>
<path d="M215 458h10"></path>
<path d="M225 458h10"></path>
<g class="terminal ">
<path d="M235 458h0"></path>
<path d="M498 458h0"></path>
<rect x="235" y="447" width="263" height="22" rx="10" ry="10"></rect>
<text x="366.5" y="462">numericOrIntervalExpression</text>
</g>
<path d="M498 458h10"></path>
<path d="M508 458h10"></path>
<g>
<path d="M518 458h0"></path>
<path d="M691 458h0"></path>
<g>
<path d="M518 458h0"></path>
<g>
<path d="M518 458h0"></path>
<path d="M691 458h0"></path>
<path d="M518 458h36"></path>
<g>
<path d="M554 458h0"></path>
<path d="M655 458h0"></path>
<g class="non-terminal ">
<path d="M554 458h0"></path>
<path d="M655 458h0"></path>
<rect x="554" y="447" width="101" height="22"></rect>
<text x="604.5" y="462">PRECEDING</text>
</g>
</g>
<path d="M655 458h36"></path>
<path d="M518 458a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M554 494h0"></path>
<path d="M655 494h0"></path>
<g class="non-terminal ">
<path d="M554 494h0"></path>
<path d="M655 494h0"></path>
<rect x="554" y="483" width="101" height="22"></rect>
<text x="604.5" y="498">FOLLOWING</text>
</g>
</g>
<path d="M655 494a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M691 458h0"></path>
</g>
</g>
<path d="M691 458h10"></path>
<path d="M701 458h10"></path>
<g class="terminal ">
<path d="M711 458h0"></path>
<path d="M812 458h0"></path>
<rect x="711" y="447" width="101" height="22" rx="10" ry="10"></rect>
<text x="761.5" y="462">undefined</text>
</g>
</g>
<path d="M812 458a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M114 422a18 18 0 0 1 18 18v70a18 18 0 0 0 18 18"></path>
<g>
<path d="M150 528h49.5"></path>
<path d="M762.5 528h49.5"></path>
<g class="non-terminal ">
<path d="M199.5 528h0"></path>
<path d="M255.5 528h0"></path>
<rect x="199.5" y="517" width="56" height="22"></rect>
<text x="227.5" y="532">ROWS</text>
</g>
<path d="M255.5 528h10"></path>
<path d="M265.5 528h10"></path>
<g class="terminal ">
<path d="M275.5 528h0"></path>
<path d="M448.5 528h0"></path>
<rect x="275.5" y="517" width="173" height="22" rx="10" ry="10"></rect>
<text x="362" y="532">numericExpression</text>
</g>
<path d="M448.5 528h10"></path>
<path d="M458.5 528h10"></path>
<g>
<path d="M468.5 528h0"></path>
<path d="M641.5 528h0"></path>
<g>
<path d="M468.5 528h0"></path>
<g>
<path d="M468.5 528h0"></path>
<path d="M641.5 528h0"></path>
<path d="M468.5 528h36"></path>
<g>
<path d="M504.5 528h0"></path>
<path d="M605.5 528h0"></path>
<g class="non-terminal ">
<path d="M504.5 528h0"></path>
<path d="M605.5 528h0"></path>
<rect x="504.5" y="517" width="101" height="22"></rect>
<text x="555" y="532">PRECEDING</text>
</g>
</g>
<path d="M605.5 528h36"></path>
<path d="M468.5 528a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M504.5 564h0"></path>
<path d="M605.5 564h0"></path>
<g class="non-terminal ">
<path d="M504.5 564h0"></path>
<path d="M605.5 564h0"></path>
<rect x="504.5" y="553" width="101" height="22"></rect>
<text x="555" y="568">FOLLOWING</text>
</g>
</g>
<path d="M605.5 564a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M641.5 528h0"></path>
</g>
</g>
<path d="M641.5 528h10"></path>
<path d="M651.5 528h10"></path>
<g class="terminal ">
<path d="M661.5 528h0"></path>
<path d="M762.5 528h0"></path>
<rect x="661.5" y="517" width="101" height="22" rx="10" ry="10"></rect>
<text x="712" y="532">undefined</text>
</g>
</g>
<path d="M812 528a18 18 0 0 0 18 -18v-70a18 18 0 0 1 18 -18"></path>
</g>
<path d="M848 422h0"></path>
</g>
<path d="M848 422h36"></path>
</g>
</g>
<path d="M894 422a18 18 0 0 1 18 18v129a18 18 0 0 1 -18 18h-826a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 623h398.5"></path>
<path d="M495.5 623h398.5"></path>
<g class="terminal ">
<path d="M466.5 623h0"></path>
<path d="M495.5 623h0"></path>
<rect x="466.5" y="612" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="481" y="627">)</text>
</g>
</g>
<path d="M894 623h18"></path>
<path d="M912 623h0"></path>
</g>
<path d="M912 623h10"></path>
<path d="M 922 623 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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