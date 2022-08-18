---
layout: plain
title: Schema Manipulation
---

Overview on the available statements for defining and altering the schema in a [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form)-like form.

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
<div style="overflow: auto;">
<svg class="railroad-diagram" width="471" height="336" viewBox="0 0 471 336">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M421 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h76.5"></path>
<path d="M308.5 31h76.5"></path>
<g class="terminal ">
<path d="M162.5 31h0"></path>
<path d="M308.5 31h0"></path>
<rect x="162.5" y="20" width="146" height="22" rx="10" ry="10"></rect>
<text x="235.5" y="35">alterStatement</text>
</g>
</g>
<path d="M385 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h45"></path>
<path d="M340 67h45"></path>
<g class="terminal ">
<path d="M131 67h0"></path>
<path d="M340 67h0"></path>
<rect x="131" y="56" width="209" height="22" rx="10" ry="10"></rect>
<text x="235.5" y="71">createSchemaStatement</text>
</g>
</g>
<path d="M385 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 101h49.5"></path>
<path d="M335.5 101h49.5"></path>
<g class="terminal ">
<path d="M135.5 101h0"></path>
<path d="M335.5 101h0"></path>
<rect x="135.5" y="90" width="200" height="22" rx="10" ry="10"></rect>
<text x="235.5" y="105">createTableStatement</text>
</g>
</g>
<path d="M385 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 135h54"></path>
<path d="M331 135h54"></path>
<g class="terminal ">
<path d="M140 135h0"></path>
<path d="M331 135h0"></path>
<rect x="140" y="124" width="191" height="22" rx="10" ry="10"></rect>
<text x="235.5" y="139">createViewStatement</text>
</g>
</g>
<path d="M385 135a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v102a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 169h0"></path>
<path d="M385 169h0"></path>
<g class="terminal ">
<path d="M86 169h0"></path>
<path d="M385 169h0"></path>
<rect x="86" y="158" width="299" height="22" rx="10" ry="10"></rect>
<text x="235.5" y="173">createMaterializedViewStatement</text>
</g>
</g>
<path d="M385 169a18 18 0 0 0 18 -18v-102a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v136a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 203h54"></path>
<path d="M331 203h54"></path>
<g class="terminal ">
<path d="M140 203h0"></path>
<path d="M331 203h0"></path>
<rect x="140" y="192" width="191" height="22" rx="10" ry="10"></rect>
<text x="235.5" y="207">dropSchemaStatement</text>
</g>
</g>
<path d="M385 203a18 18 0 0 0 18 -18v-136a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v170a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 237h58.5"></path>
<path d="M326.5 237h58.5"></path>
<g class="terminal ">
<path d="M144.5 237h0"></path>
<path d="M326.5 237h0"></path>
<rect x="144.5" y="226" width="182" height="22" rx="10" ry="10"></rect>
<text x="235.5" y="241">dropTableStatement</text>
</g>
</g>
<path d="M385 237a18 18 0 0 0 18 -18v-170a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v204a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 271h63"></path>
<path d="M322 271h63"></path>
<g class="terminal ">
<path d="M149 271h0"></path>
<path d="M322 271h0"></path>
<rect x="149" y="260" width="173" height="22" rx="10" ry="10"></rect>
<text x="235.5" y="275">dropViewStatement</text>
</g>
</g>
<path d="M385 271a18 18 0 0 0 18 -18v-204a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v238a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 305h40.5"></path>
<path d="M344.5 305h40.5"></path>
<g class="terminal ">
<path d="M126.5 305h0"></path>
<path d="M344.5 305h0"></path>
<rect x="126.5" y="294" width="218" height="22" rx="10" ry="10"></rect>
<text x="235.5" y="309">truncateTableStatement</text>
</g>
</g>
<path d="M385 305a18 18 0 0 0 18 -18v-238a18 18 0 0 1 18 -18"></path>
</g>
<path d="M421 31h0"></path>
</g>
<path d="M421 31h10"></path>
<path d="M 431 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### createSchemaStatement:
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
<svg class="railroad-diagram" width="888" height="87" viewBox="0 0 888 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M828 56h10"></path>
<g class="non-terminal ">
<path d="M60 56h0"></path>
<path d="M134 56h0"></path>
<rect x="60" y="45" width="74" height="22"></rect>
<text x="97" y="60">CREATE</text>
</g>
<path d="M134 56h10"></path>
<g>
<path d="M144 56h0"></path>
<path d="M377 56h0"></path>
<path d="M144 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M180 20h161"></path>
</g>
<path d="M341 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M144 56h36"></path>
<g>
<path d="M180 56h0"></path>
<g>
<path d="M180 56h10"></path>
<path d="M331 56h10"></path>
<g class="non-terminal ">
<path d="M190 56h0"></path>
<path d="M228 56h0"></path>
<rect x="190" y="45" width="38" height="22"></rect>
<text x="209" y="60">OR</text>
</g>
<path d="M228 56h10"></path>
<path d="M238 56h10"></path>
<g class="non-terminal ">
<path d="M248 56h0"></path>
<path d="M331 56h0"></path>
<rect x="248" y="45" width="83" height="22"></rect>
<text x="289.5" y="60">REPLACE</text>
</g>
</g>
<path d="M341 56h0"></path>
</g>
<path d="M341 56h36"></path>
</g>
<path d="M377 56h10"></path>
<g class="non-terminal ">
<path d="M387 56h0"></path>
<path d="M461 56h0"></path>
<rect x="387" y="45" width="74" height="22"></rect>
<text x="424" y="60">SCHEMA</text>
</g>
<path d="M461 56h10"></path>
<g>
<path d="M471 56h0"></path>
<path d="M762 56h0"></path>
<path d="M471 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M507 20h219"></path>
</g>
<path d="M726 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M471 56h36"></path>
<g>
<path d="M507 56h0"></path>
<g>
<path d="M507 56h10"></path>
<path d="M716 56h10"></path>
<g class="non-terminal ">
<path d="M517 56h0"></path>
<path d="M555 56h0"></path>
<rect x="517" y="45" width="38" height="22"></rect>
<text x="536" y="60">IF</text>
</g>
<path d="M555 56h10"></path>
<path d="M565 56h10"></path>
<g class="non-terminal ">
<path d="M575 56h0"></path>
<path d="M622 56h0"></path>
<rect x="575" y="45" width="47" height="22"></rect>
<text x="598.5" y="60">NOT</text>
</g>
<path d="M622 56h10"></path>
<path d="M632 56h10"></path>
<g class="non-terminal ">
<path d="M642 56h0"></path>
<path d="M716 56h0"></path>
<rect x="642" y="45" width="74" height="22"></rect>
<text x="679" y="60">EXISTS</text>
</g>
</g>
<path d="M726 56h0"></path>
</g>
<path d="M726 56h36"></path>
</g>
<path d="M762 56h10"></path>
<g class="terminal ">
<path d="M772 56h0"></path>
<path d="M828 56h0"></path>
<rect x="772" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="800" y="60">name</text>
</g>
</g>
<path d="M838 56h0"></path>
</g>
<path d="M838 56h10"></path>
<path d="M 848 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### createTableStatement:
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
<svg class="railroad-diagram" width="1419" height="442" viewBox="0 0 1419 442">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M50 56h18"></path>
<g>
<path d="M68 56h253"></path>
<path d="M1098 56h253"></path>
<g class="non-terminal ">
<path d="M321 56h0"></path>
<path d="M395 56h0"></path>
<rect x="321" y="45" width="74" height="22"></rect>
<text x="358" y="60">CREATE</text>
</g>
<path d="M395 56h10"></path>
<path d="M405 56h10"></path>
<g class="non-terminal ">
<path d="M415 56h0"></path>
<path d="M480 56h0"></path>
<rect x="415" y="45" width="65" height="22"></rect>
<text x="447.5" y="60">TABLE</text>
</g>
<path d="M480 56h10"></path>
<g>
<path d="M490 56h0"></path>
<path d="M781 56h0"></path>
<path d="M490 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M526 20h219"></path>
</g>
<path d="M745 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M490 56h36"></path>
<g>
<path d="M526 56h0"></path>
<g>
<path d="M526 56h10"></path>
<path d="M735 56h10"></path>
<g class="non-terminal ">
<path d="M536 56h0"></path>
<path d="M574 56h0"></path>
<rect x="536" y="45" width="38" height="22"></rect>
<text x="555" y="60">IF</text>
</g>
<path d="M574 56h10"></path>
<path d="M584 56h10"></path>
<g class="non-terminal ">
<path d="M594 56h0"></path>
<path d="M641 56h0"></path>
<rect x="594" y="45" width="47" height="22"></rect>
<text x="617.5" y="60">NOT</text>
</g>
<path d="M641 56h10"></path>
<path d="M651 56h10"></path>
<g class="non-terminal ">
<path d="M661 56h0"></path>
<path d="M735 56h0"></path>
<rect x="661" y="45" width="74" height="22"></rect>
<text x="698" y="60">EXISTS</text>
</g>
</g>
<path d="M745 56h0"></path>
</g>
<path d="M745 56h36"></path>
</g>
<g>
<path d="M781 56h0"></path>
<path d="M1032 56h0"></path>
<path d="M781 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M817 20h179"></path>
</g>
<path d="M996 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M781 56h36"></path>
<g>
<path d="M817 56h0"></path>
<g>
<path d="M817 56h10"></path>
<path d="M986 56h10"></path>
<g class="terminal ">
<path d="M827 56h0"></path>
<path d="M937 56h0"></path>
<rect x="827" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="882" y="60">schemaName</text>
</g>
<path d="M937 56h10"></path>
<path d="M947 56h10"></path>
<g class="terminal ">
<path d="M957 56h0"></path>
<path d="M986 56h0"></path>
<rect x="957" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="971.5" y="60">.</text>
</g>
</g>
<path d="M996 56h0"></path>
</g>
<path d="M996 56h36"></path>
</g>
<path d="M1032 56h10"></path>
<g class="terminal ">
<path d="M1042 56h0"></path>
<path d="M1098 56h0"></path>
<rect x="1042" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="1070" y="60">name</text>
</g>
</g>
<path d="M1351 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-1283a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 140h454.5"></path>
<path d="M896.5 140h454.5"></path>
<g>
<path d="M522.5 140h0"></path>
<path d="M896.5 140h0"></path>
<path d="M522.5 140a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M558.5 104h302"></path>
</g>
<path d="M860.5 104a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M522.5 140h36"></path>
<g>
<path d="M558.5 140h0"></path>
<g>
<path d="M558.5 140h10"></path>
<path d="M850.5 140h10"></path>
<g class="terminal ">
<path d="M568.5 140h0"></path>
<path d="M597.5 140h0"></path>
<rect x="568.5" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="583" y="144">(</text>
</g>
<path d="M597.5 140h10"></path>
<path d="M607.5 140h10"></path>
<g>
<path d="M617.5 140h0"></path>
<path d="M801.5 140h0"></path>
<path d="M617.5 140h18"></path>
<g>
<path d="M635.5 140h0"></path>
<g>
<path d="M635.5 140h10"></path>
<path d="M773.5 140h10"></path>
<g class="terminal ">
<path d="M645.5 140h0"></path>
<path d="M773.5 140h0"></path>
<rect x="645.5" y="129" width="128" height="22" rx="10" ry="10"></rect>
<text x="709.5" y="144">tableElement</text>
</g>
</g>
<path d="M783.5 140h0"></path>
</g>
<path d="M783.5 140h18"></path>
<path d="M635.5 140a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M635.5 176h59.5"></path>
<path d="M724 176h59.5"></path>
<rect x="695" y="165" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="709.5" y="180">,</text>
</g>
<path d="M783.5 176a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M801.5 140h10"></path>
<path d="M811.5 140h10"></path>
<g class="terminal ">
<path d="M821.5 140h0"></path>
<path d="M850.5 140h0"></path>
<rect x="821.5" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="836" y="144">)</text>
</g>
</g>
<path d="M860.5 140h0"></path>
</g>
<path d="M860.5 140h36"></path>
</g>
</g>
<path d="M1351 140a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-1283a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 245h491.5"></path>
<path d="M859.5 245h491.5"></path>
<g>
<path d="M559.5 245h0"></path>
<path d="M859.5 245h0"></path>
<path d="M559.5 245a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M595.5 209h228"></path>
</g>
<path d="M823.5 209a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M559.5 245h36"></path>
<g>
<path d="M595.5 245h0"></path>
<g>
<path d="M595.5 245h10"></path>
<path d="M813.5 245h10"></path>
<g class="non-terminal ">
<path d="M605.5 245h0"></path>
<path d="M643.5 245h0"></path>
<rect x="605.5" y="234" width="38" height="22"></rect>
<text x="624.5" y="249">ON</text>
</g>
<path d="M643.5 245h10"></path>
<path d="M653.5 245h10"></path>
<g class="non-terminal ">
<path d="M663.5 245h0"></path>
<path d="M728.5 245h0"></path>
<rect x="663.5" y="234" width="65" height="22"></rect>
<text x="696" y="249">STORE</text>
</g>
<path d="M728.5 245h10"></path>
<path d="M738.5 245h10"></path>
<g class="terminal ">
<path d="M748.5 245h0"></path>
<path d="M813.5 245h0"></path>
<rect x="748.5" y="234" width="65" height="22" rx="10" ry="10"></rect>
<text x="781" y="249">store</text>
</g>
</g>
<path d="M823.5 245h0"></path>
</g>
<path d="M823.5 245h36"></path>
</g>
</g>
<path d="M1351 245a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-1283a18 18 0 0 0 -18 18v24a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 341h10"></path>
<path d="M1341 341h10"></path>
<g>
<path d="M78 341h0"></path>
<path d="M1341 341h0"></path>
<path d="M78 341a18 18 0 0 0 18 -18v-12a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 293h1191"></path>
</g>
<path d="M1305 293a18 18 0 0 1 18 18v12a18 18 0 0 0 18 18"></path>
<path d="M78 341h36"></path>
<g>
<path d="M114 341h0"></path>
<g>
<path d="M114 341h10"></path>
<path d="M1295 341h10"></path>
<g class="non-terminal ">
<path d="M124 341h0"></path>
<path d="M225 341h0"></path>
<rect x="124" y="330" width="101" height="22"></rect>
<text x="174.5" y="345">PARTITION</text>
</g>
<path d="M225 341h10"></path>
<path d="M235 341h10"></path>
<g class="non-terminal ">
<path d="M245 341h0"></path>
<path d="M283 341h0"></path>
<rect x="245" y="330" width="38" height="22"></rect>
<text x="264" y="345">BY</text>
</g>
<path d="M283 341h10"></path>
<path d="M293 341h10"></path>
<g>
<path d="M303 341h0"></path>
<path d="M440 341h0"></path>
<g>
<path d="M303 341h0"></path>
<g>
<path d="M303 341h0"></path>
<path d="M440 341h0"></path>
<path d="M303 341h36"></path>
<g>
<path d="M339 341h4.5"></path>
<path d="M399.5 341h4.5"></path>
<g class="non-terminal ">
<path d="M343.5 341h0"></path>
<path d="M399.5 341h0"></path>
<rect x="343.5" y="330" width="56" height="22"></rect>
<text x="371.5" y="345">HASH</text>
</g>
</g>
<path d="M404 341h36"></path>
<path d="M303 341a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M339 377h0"></path>
<path d="M404 377h0"></path>
<g class="non-terminal ">
<path d="M339 377h0"></path>
<path d="M404 377h0"></path>
<rect x="339" y="366" width="65" height="22"></rect>
<text x="371.5" y="381">RANGE</text>
</g>
</g>
<path d="M404 377a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M303 341a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M339 411h4.5"></path>
<path d="M399.5 411h4.5"></path>
<g class="non-terminal ">
<path d="M343.5 411h0"></path>
<path d="M399.5 411h0"></path>
<rect x="343.5" y="400" width="56" height="22"></rect>
<text x="371.5" y="415">LIST</text>
</g>
</g>
<path d="M404 411a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M440 341h0"></path>
</g>
</g>
<path d="M440 341h10"></path>
<path d="M450 341h10"></path>
<g class="terminal ">
<path d="M460 341h0"></path>
<path d="M489 341h0"></path>
<rect x="460" y="330" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="474.5" y="345">(</text>
</g>
<path d="M489 341h10"></path>
<path d="M499 341h10"></path>
<g class="terminal ">
<path d="M509 341h0"></path>
<path d="M619 341h0"></path>
<rect x="509" y="330" width="110" height="22" rx="10" ry="10"></rect>
<text x="564" y="345">columnName</text>
</g>
<path d="M619 341h10"></path>
<path d="M629 341h10"></path>
<g class="terminal ">
<path d="M639 341h0"></path>
<path d="M668 341h0"></path>
<rect x="639" y="330" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="653.5" y="345">)</text>
</g>
<path d="M668 341h10"></path>
<g>
<path d="M678 341h0"></path>
<path d="M1295 341h0"></path>
<path d="M678 341a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M714 305h545"></path>
</g>
<path d="M1259 305a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M678 341h36"></path>
<g>
<path d="M714 341h0"></path>
<g>
<path d="M714 341h0"></path>
<path d="M1259 341h0"></path>
<path d="M714 341h36"></path>
<g>
<path d="M750 341h89.5"></path>
<path d="M1133.5 341h89.5"></path>
<g class="non-terminal ">
<path d="M839.5 341h0"></path>
<path d="M949.5 341h0"></path>
<rect x="839.5" y="330" width="110" height="22"></rect>
<text x="894.5" y="345">PARTITIONS</text>
</g>
<path d="M949.5 341h10"></path>
<path d="M959.5 341h10"></path>
<g class="terminal ">
<path d="M969.5 341h0"></path>
<path d="M1133.5 341h0"></path>
<rect x="969.5" y="330" width="164" height="22" rx="10" ry="10"></rect>
<text x="1051.5" y="345">numberPartitions</text>
</g>
</g>
<path d="M1223 341h36"></path>
<path d="M714 341a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M750 377h0"></path>
<path d="M1223 377h0"></path>
<g class="terminal ">
<path d="M750 377h0"></path>
<path d="M806 377h0"></path>
<rect x="750" y="366" width="56" height="22" rx="10" ry="10"></rect>
<text x="778" y="381">with</text>
</g>
<path d="M806 377h10"></path>
<path d="M816 377h10"></path>
<g>
<path d="M826 377h0"></path>
<path d="M1223 377h0"></path>
<g>
<path d="M826 377h0"></path>
<g>
<path d="M826 377h10"></path>
<path d="M1213 377h10"></path>
<g class="terminal ">
<path d="M836 377h0"></path>
<path d="M991 377h0"></path>
<rect x="836" y="366" width="155" height="22" rx="10" ry="10"></rect>
<text x="913.5" y="381">partitionName1,</text>
</g>
<path d="M991 377h10"></path>
<path d="M1001 377h10"></path>
<g>
<path d="M1011 377h0"></path>
<path d="M1213 377h0"></path>
<path d="M1011 377h18"></path>
<g>
<path d="M1029 377h0"></path>
<g>
<path d="M1029 377h10"></path>
<path d="M1185 377h10"></path>
<g class="terminal ">
<path d="M1039 377h0"></path>
<path d="M1185 377h0"></path>
<rect x="1039" y="366" width="146" height="22" rx="10" ry="10"></rect>
<text x="1112" y="381">partitionNameN</text>
</g>
</g>
<path d="M1195 377h0"></path>
</g>
<path d="M1195 377h18"></path>
<path d="M1029 377a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M1029 413h68.5"></path>
<path d="M1126.5 413h68.5"></path>
<rect x="1097.5" y="402" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="1112" y="417">,</text>
</g>
<path d="M1195 413a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M1223 377h0"></path>
</g>
</g>
</g>
<path d="M1223 377a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1259 341h0"></path>
</g>
<path d="M1259 341h36"></path>
</g>
</g>
<path d="M1305 341h0"></path>
</g>
<path d="M1305 341h36"></path>
</g>
</g>
<path d="M1351 341h18"></path>
<path d="M1369 341h0"></path>
</g>
<path d="M1369 341h10"></path>
<path d="M 1379 341 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

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
<svg class="railroad-diagram" width="866" height="276" viewBox="0 0 866 276">
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
<path d="M788 56h10"></path>
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
<g>
<path d="M471 56h0"></path>
<path d="M722 56h0"></path>
<path d="M471 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M507 20h179"></path>
</g>
<path d="M686 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M471 56h36"></path>
<g>
<path d="M507 56h0"></path>
<g>
<path d="M507 56h10"></path>
<path d="M676 56h10"></path>
<g class="terminal ">
<path d="M517 56h0"></path>
<path d="M627 56h0"></path>
<rect x="517" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="572" y="60">schemaName</text>
</g>
<path d="M627 56h10"></path>
<path d="M637 56h10"></path>
<g class="terminal ">
<path d="M647 56h0"></path>
<path d="M676 56h0"></path>
<rect x="647" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="661.5" y="60">.</text>
</g>
</g>
<path d="M686 56h0"></path>
</g>
<path d="M686 56h36"></path>
</g>
<path d="M722 56h10"></path>
<g class="terminal ">
<path d="M732 56h0"></path>
<path d="M788 56h0"></path>
<rect x="732" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="760" y="60">name</text>
</g>
</g>
<path d="M798 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-730a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 140h178"></path>
<path d="M620 140h178"></path>
<g>
<path d="M246 140h0"></path>
<path d="M620 140h0"></path>
<path d="M246 140a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M282 104h302"></path>
</g>
<path d="M584 104a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M246 140h36"></path>
<g>
<path d="M282 140h0"></path>
<g>
<path d="M282 140h10"></path>
<path d="M574 140h10"></path>
<g class="terminal ">
<path d="M292 140h0"></path>
<path d="M321 140h0"></path>
<rect x="292" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="306.5" y="144">(</text>
</g>
<path d="M321 140h10"></path>
<path d="M331 140h10"></path>
<g>
<path d="M341 140h0"></path>
<path d="M525 140h0"></path>
<path d="M341 140h18"></path>
<g>
<path d="M359 140h0"></path>
<g>
<path d="M359 140h10"></path>
<path d="M497 140h10"></path>
<g class="terminal ">
<path d="M369 140h0"></path>
<path d="M497 140h0"></path>
<rect x="369" y="129" width="128" height="22" rx="10" ry="10"></rect>
<text x="433" y="144">tableElement</text>
</g>
</g>
<path d="M507 140h0"></path>
</g>
<path d="M507 140h18"></path>
<path d="M359 140a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M359 176h59.5"></path>
<path d="M447.5 176h59.5"></path>
<rect x="418.5" y="165" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="433" y="180">,</text>
</g>
<path d="M507 176a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M525 140h10"></path>
<path d="M535 140h10"></path>
<g class="terminal ">
<path d="M545 140h0"></path>
<path d="M574 140h0"></path>
<rect x="545" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="559.5" y="144">)</text>
</g>
</g>
<path d="M584 140h0"></path>
</g>
<path d="M584 140h36"></path>
</g>
</g>
<path d="M798 140a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-730a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 245h257.5"></path>
<path d="M540.5 245h257.5"></path>
<g>
<path d="M325.5 245h0"></path>
<path d="M540.5 245h0"></path>
<path d="M325.5 245a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M361.5 209h143"></path>
</g>
<path d="M504.5 209a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M325.5 245h36"></path>
<g>
<path d="M361.5 245h0"></path>
<g>
<path d="M361.5 245h10"></path>
<path d="M494.5 245h10"></path>
<g class="non-terminal ">
<path d="M371.5 245h0"></path>
<path d="M409.5 245h0"></path>
<rect x="371.5" y="234" width="38" height="22"></rect>
<text x="390.5" y="249">AS</text>
</g>
<path d="M409.5 245h10"></path>
<path d="M419.5 245h10"></path>
<g class="terminal ">
<path d="M429.5 245h0"></path>
<path d="M494.5 245h0"></path>
<rect x="429.5" y="234" width="65" height="22" rx="10" ry="10"></rect>
<text x="462" y="249">query</text>
</g>
</g>
<path d="M504.5 245h0"></path>
</g>
<path d="M504.5 245h36"></path>
</g>
</g>
<path d="M798 245h18"></path>
<path d="M816 245h0"></path>
</g>
<path d="M816 245h10"></path>
<path d="M 826 245 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

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
<svg class="railroad-diagram" width="1072" height="514" viewBox="0 0 1072 514">
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
<path d="M994 56h10"></path>
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
<g>
<path d="M677 56h0"></path>
<path d="M928 56h0"></path>
<path d="M677 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M713 20h179"></path>
</g>
<path d="M892 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M677 56h36"></path>
<g>
<path d="M713 56h0"></path>
<g>
<path d="M713 56h10"></path>
<path d="M882 56h10"></path>
<g class="terminal ">
<path d="M723 56h0"></path>
<path d="M833 56h0"></path>
<rect x="723" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="778" y="60">schemaName</text>
</g>
<path d="M833 56h10"></path>
<path d="M843 56h10"></path>
<g class="terminal ">
<path d="M853 56h0"></path>
<path d="M882 56h0"></path>
<rect x="853" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="867.5" y="60">.</text>
</g>
</g>
<path d="M892 56h0"></path>
</g>
<path d="M892 56h36"></path>
</g>
<path d="M928 56h10"></path>
<g class="terminal ">
<path d="M938 56h0"></path>
<path d="M994 56h0"></path>
<rect x="938" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="966" y="60">name</text>
</g>
</g>
<path d="M1004 56a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-936a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 140h281"></path>
<path d="M723 140h281"></path>
<g>
<path d="M349 140h0"></path>
<path d="M723 140h0"></path>
<path d="M349 140a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M385 104h302"></path>
</g>
<path d="M687 104a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M349 140h36"></path>
<g>
<path d="M385 140h0"></path>
<g>
<path d="M385 140h10"></path>
<path d="M677 140h10"></path>
<g class="terminal ">
<path d="M395 140h0"></path>
<path d="M424 140h0"></path>
<rect x="395" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="409.5" y="144">(</text>
</g>
<path d="M424 140h10"></path>
<path d="M434 140h10"></path>
<g>
<path d="M444 140h0"></path>
<path d="M628 140h0"></path>
<path d="M444 140h18"></path>
<g>
<path d="M462 140h0"></path>
<g>
<path d="M462 140h10"></path>
<path d="M600 140h10"></path>
<g class="terminal ">
<path d="M472 140h0"></path>
<path d="M600 140h0"></path>
<rect x="472" y="129" width="128" height="22" rx="10" ry="10"></rect>
<text x="536" y="144">tableElement</text>
</g>
</g>
<path d="M610 140h0"></path>
</g>
<path d="M610 140h18"></path>
<path d="M462 140a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M462 176h59.5"></path>
<path d="M550.5 176h59.5"></path>
<rect x="521.5" y="165" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="536" y="180">,</text>
</g>
<path d="M610 176a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M628 140h10"></path>
<path d="M638 140h10"></path>
<g class="terminal ">
<path d="M648 140h0"></path>
<path d="M677 140h0"></path>
<rect x="648" y="129" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="662.5" y="144">)</text>
</g>
</g>
<path d="M687 140h0"></path>
</g>
<path d="M687 140h36"></path>
</g>
</g>
<path d="M1004 140a18 18 0 0 1 18 18v21a18 18 0 0 1 -18 18h-936a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 245h360.5"></path>
<path d="M643.5 245h360.5"></path>
<g>
<path d="M428.5 245h0"></path>
<path d="M643.5 245h0"></path>
<path d="M428.5 245a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M464.5 209h143"></path>
</g>
<path d="M607.5 209a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M428.5 245h36"></path>
<g>
<path d="M464.5 245h0"></path>
<g>
<path d="M464.5 245h10"></path>
<path d="M597.5 245h10"></path>
<g class="non-terminal ">
<path d="M474.5 245h0"></path>
<path d="M512.5 245h0"></path>
<rect x="474.5" y="234" width="38" height="22"></rect>
<text x="493.5" y="249">AS</text>
</g>
<path d="M512.5 245h10"></path>
<path d="M522.5 245h10"></path>
<g class="terminal ">
<path d="M532.5 245h0"></path>
<path d="M597.5 245h0"></path>
<rect x="532.5" y="234" width="65" height="22" rx="10" ry="10"></rect>
<text x="565" y="249">query</text>
</g>
</g>
<path d="M607.5 245h0"></path>
</g>
<path d="M607.5 245h36"></path>
</g>
</g>
<path d="M1004 245a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-936a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 329h135.5"></path>
<path d="M868.5 329h135.5"></path>
<g>
<path d="M203.5 329h0"></path>
<path d="M868.5 329h0"></path>
<path d="M203.5 329a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M239.5 293h593"></path>
</g>
<path d="M832.5 293a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M203.5 329h36"></path>
<g>
<path d="M239.5 329h0"></path>
<g>
<path d="M239.5 329h10"></path>
<path d="M822.5 329h10"></path>
<g class="non-terminal ">
<path d="M249.5 329h0"></path>
<path d="M305.5 329h0"></path>
<rect x="249.5" y="318" width="56" height="22"></rect>
<text x="277.5" y="333">&#60;ON></text>
</g>
<path d="M305.5 329h10"></path>
<path d="M315.5 329h10"></path>
<g class="non-terminal ">
<path d="M325.5 329h0"></path>
<path d="M408.5 329h0"></path>
<rect x="325.5" y="318" width="83" height="22"></rect>
<text x="367" y="333">&#60;STORE></text>
</g>
<path d="M408.5 329h10"></path>
<path d="M418.5 329h10"></path>
<g class="terminal ">
<path d="M428.5 329h0"></path>
<path d="M529.5 329h0"></path>
<rect x="428.5" y="318" width="101" height="22" rx="10" ry="10"></rect>
<text x="479" y="333">storeName</text>
</g>
<path d="M529.5 329h10"></path>
<path d="M539.5 329h10"></path>
<g>
<path d="M549.5 329h0"></path>
<path d="M773.5 329h0"></path>
<g>
<path d="M549.5 329h0"></path>
<g>
<path d="M549.5 329h10"></path>
<path d="M763.5 329h10"></path>
<g class="non-terminal ">
<path d="M559.5 329h0"></path>
<path d="M642.5 329h0"></path>
<rect x="559.5" y="318" width="83" height="22"></rect>
<text x="601" y="333">&#60;COMMA></text>
</g>
<path d="M642.5 329h10"></path>
<path d="M652.5 329h10"></path>
<g class="terminal ">
<path d="M662.5 329h0"></path>
<path d="M763.5 329h0"></path>
<rect x="662.5" y="318" width="101" height="22" rx="10" ry="10"></rect>
<text x="713" y="333">storeName</text>
</g>
</g>
<path d="M773.5 329h0"></path>
</g>
</g>
<path d="M773.5 329h10"></path>
<path d="M783.5 329h10"></path>
<g class="terminal ">
<path d="M793.5 329h0"></path>
<path d="M822.5 329h0"></path>
<rect x="793.5" y="318" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="808" y="333">&#42;</text>
</g>
</g>
<path d="M832.5 329h0"></path>
</g>
<path d="M832.5 329h36"></path>
</g>
</g>
<path d="M1004 329a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-936a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 413h153.5"></path>
<path d="M850.5 413h153.5"></path>
<g>
<path d="M221.5 413h0"></path>
<path d="M811.5 413h0"></path>
<path d="M221.5 413a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M257.5 377h518"></path>
</g>
<path d="M775.5 377a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M221.5 413h36"></path>
<g>
<path d="M257.5 413h0"></path>
<g>
<path d="M257.5 413h0"></path>
<path d="M775.5 413h0"></path>
<path d="M257.5 413h36"></path>
<g>
<path d="M293.5 413h0"></path>
<path d="M739.5 413h0"></path>
<g class="non-terminal ">
<path d="M293.5 413h0"></path>
<path d="M394.5 413h0"></path>
<rect x="293.5" y="402" width="101" height="22"></rect>
<text x="344" y="417">FRESHNESS</text>
</g>
<path d="M394.5 413h10"></path>
<path d="M404.5 413h10"></path>
<g class="non-terminal ">
<path d="M414.5 413h0"></path>
<path d="M515.5 413h0"></path>
<rect x="414.5" y="402" width="101" height="22"></rect>
<text x="465" y="417">(INTERVAL</text>
</g>
<path d="M515.5 413h10"></path>
<path d="M525.5 413h10"></path>
<g class="terminal ">
<path d="M535.5 413h0"></path>
<path d="M627.5 413h0"></path>
<rect x="535.5" y="402" width="92" height="22" rx="10" ry="10"></rect>
<text x="581.5" y="417">interval</text>
</g>
<path d="M627.5 413h10"></path>
<path d="M637.5 413h10"></path>
<g class="terminal ">
<path d="M647.5 413h0"></path>
<path d="M739.5 413h0"></path>
<rect x="647.5" y="402" width="92" height="22" rx="10" ry="10"></rect>
<text x="693.5" y="417">timeUnit</text>
</g>
</g>
<path d="M739.5 413h36"></path>
<path d="M257.5 413a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M293.5 449h130"></path>
<path d="M609.5 449h130"></path>
<g class="non-terminal ">
<path d="M423.5 449h0"></path>
<path d="M497.5 449h0"></path>
<rect x="423.5" y="438" width="74" height="22"></rect>
<text x="460.5" y="453">UPDATE</text>
</g>
<path d="M497.5 449h10"></path>
<path d="M507.5 449h10"></path>
<g class="terminal ">
<path d="M517.5 449h0"></path>
<path d="M609.5 449h0"></path>
<rect x="517.5" y="438" width="92" height="22" rx="10" ry="10"></rect>
<text x="563.5" y="453">interval</text>
</g>
</g>
<path d="M739.5 449a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M257.5 413a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M293.5 483h186"></path>
<path d="M553.5 483h186"></path>
<g class="non-terminal ">
<path d="M479.5 483h0"></path>
<path d="M553.5 483h0"></path>
<rect x="479.5" y="472" width="74" height="22"></rect>
<text x="516.5" y="487">MANUAL</text>
</g>
</g>
<path d="M739.5 483a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M775.5 413h0"></path>
</g>
<path d="M775.5 413h36"></path>
</g>
<path d="M811.5 413h10"></path>
<g class="terminal ">
<path d="M821.5 413h0"></path>
<path d="M850.5 413h0"></path>
<rect x="821.5" y="402" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="836" y="417">&#93;</text>
</g>
</g>
<path d="M1004 413h18"></path>
<path d="M1022 413h0"></path>
</g>
<path d="M1022 413h10"></path>
<path d="M 1032 413 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### tableElement:
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
<svg class="railroad-diagram" width="843" height="225" viewBox="0 0 843 225">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h0"></path>
<path d="M793 56h0"></path>
<path d="M50 56h36"></path>
<g>
<path d="M86 56h0"></path>
<path d="M757 56h0"></path>
<g class="terminal ">
<path d="M86 56h0"></path>
<path d="M196 56h0"></path>
<rect x="86" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="141" y="60">columnName</text>
</g>
<path d="M196 56h10"></path>
<path d="M206 56h10"></path>
<g class="terminal ">
<path d="M216 56h0"></path>
<path d="M272 56h0"></path>
<rect x="216" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="244" y="60">type</text>
</g>
<path d="M272 56h10"></path>
<g>
<path d="M282 56h0"></path>
<path d="M421 56h0"></path>
<path d="M282 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M318 20h67"></path>
</g>
<path d="M385 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M282 56h36"></path>
<g>
<path d="M318 56h0"></path>
<g>
<path d="M318 56h10"></path>
<path d="M375 56h10"></path>
<g class="non-terminal ">
<path d="M328 56h0"></path>
<path d="M375 56h0"></path>
<rect x="328" y="45" width="47" height="22"></rect>
<text x="351.5" y="60">NOT</text>
</g>
</g>
<path d="M385 56h0"></path>
</g>
<path d="M385 56h36"></path>
</g>
<path d="M421 56h10"></path>
<g class="non-terminal ">
<path d="M431 56h0"></path>
<path d="M487 56h0"></path>
<rect x="431" y="45" width="56" height="22"></rect>
<text x="459" y="60">NULL</text>
</g>
<path d="M487 56h10"></path>
<g>
<path d="M497 56h0"></path>
<path d="M757 56h0"></path>
<path d="M497 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M533 20h188"></path>
</g>
<path d="M721 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M497 56h36"></path>
<g>
<path d="M533 56h0"></path>
<g>
<path d="M533 56h10"></path>
<path d="M711 56h10"></path>
<g class="non-terminal ">
<path d="M543 56h0"></path>
<path d="M626 56h0"></path>
<rect x="543" y="45" width="83" height="22"></rect>
<text x="584.5" y="60">DEFAULT</text>
</g>
<path d="M626 56h10"></path>
<path d="M636 56h10"></path>
<g class="terminal ">
<path d="M646 56h0"></path>
<path d="M711 56h0"></path>
<rect x="646" y="45" width="65" height="22" rx="10" ry="10"></rect>
<text x="678.5" y="60">value</text>
</g>
</g>
<path d="M721 56h0"></path>
</g>
<path d="M721 56h36"></path>
</g>
</g>
<path d="M757 56h36"></path>
<path d="M50 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 92h118.5"></path>
<path d="M638.5 92h118.5"></path>
<g class="non-terminal ">
<path d="M204.5 92h0"></path>
<path d="M287.5 92h0"></path>
<rect x="204.5" y="81" width="83" height="22"></rect>
<text x="246" y="96">PRIMARY</text>
</g>
<path d="M287.5 92h10"></path>
<path d="M297.5 92h10"></path>
<g class="non-terminal ">
<path d="M307.5 92h0"></path>
<path d="M354.5 92h0"></path>
<rect x="307.5" y="81" width="47" height="22"></rect>
<text x="331" y="96">KEY</text>
</g>
<path d="M354.5 92h10"></path>
<path d="M364.5 92h10"></path>
<g class="terminal ">
<path d="M374.5 92h0"></path>
<path d="M403.5 92h0"></path>
<rect x="374.5" y="81" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="389" y="96">(</text>
</g>
<path d="M403.5 92h10"></path>
<path d="M413.5 92h10"></path>
<g>
<path d="M423.5 92h0"></path>
<path d="M589.5 92h0"></path>
<path d="M423.5 92h18"></path>
<g>
<path d="M441.5 92h0"></path>
<g>
<path d="M441.5 92h10"></path>
<path d="M561.5 92h10"></path>
<g class="terminal ">
<path d="M451.5 92h0"></path>
<path d="M561.5 92h0"></path>
<rect x="451.5" y="81" width="110" height="22" rx="10" ry="10"></rect>
<text x="506.5" y="96">columnName</text>
</g>
</g>
<path d="M571.5 92h0"></path>
</g>
<path d="M571.5 92h18"></path>
<path d="M441.5 92a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M441.5 128h50.5"></path>
<path d="M521 128h50.5"></path>
<rect x="492" y="117" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="506.5" y="132">,</text>
</g>
<path d="M571.5 128a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M589.5 92h10"></path>
<path d="M599.5 92h10"></path>
<g class="terminal ">
<path d="M609.5 92h0"></path>
<path d="M638.5 92h0"></path>
<rect x="609.5" y="81" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="624" y="96">)</text>
</g>
</g>
<path d="M757 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 56a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 160h156.5"></path>
<path d="M600.5 160h156.5"></path>
<g class="non-terminal ">
<path d="M242.5 160h0"></path>
<path d="M316.5 160h0"></path>
<rect x="242.5" y="149" width="74" height="22"></rect>
<text x="279.5" y="164">UNIQUE</text>
</g>
<path d="M316.5 160h10"></path>
<path d="M326.5 160h10"></path>
<g class="terminal ">
<path d="M336.5 160h0"></path>
<path d="M365.5 160h0"></path>
<rect x="336.5" y="149" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="351" y="164">(</text>
</g>
<path d="M365.5 160h10"></path>
<path d="M375.5 160h10"></path>
<g>
<path d="M385.5 160h0"></path>
<path d="M551.5 160h0"></path>
<path d="M385.5 160h18"></path>
<g>
<path d="M403.5 160h0"></path>
<g>
<path d="M403.5 160h10"></path>
<path d="M523.5 160h10"></path>
<g class="terminal ">
<path d="M413.5 160h0"></path>
<path d="M523.5 160h0"></path>
<rect x="413.5" y="149" width="110" height="22" rx="10" ry="10"></rect>
<text x="468.5" y="164">columnName</text>
</g>
</g>
<path d="M533.5 160h0"></path>
</g>
<path d="M533.5 160h18"></path>
<path d="M403.5 160a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g class="terminal ">
<path d="M403.5 196h50.5"></path>
<path d="M483 196h50.5"></path>
<rect x="454" y="185" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="468.5" y="200">,</text>
</g>
<path d="M533.5 196a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M551.5 160h10"></path>
<path d="M561.5 160h10"></path>
<g class="terminal ">
<path d="M571.5 160h0"></path>
<path d="M600.5 160h0"></path>
<rect x="571.5" y="149" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="586" y="164">)</text>
</g>
</g>
<path d="M757 160a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
</g>
<path d="M793 56h0"></path>
</g>
<path d="M793 56h10"></path>
<path d="M 803 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### dropSchemaStatement:
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
<svg class="railroad-diagram" width="821" height="87" viewBox="0 0 821 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M761 56h10"></path>
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
<path d="M210 56h0"></path>
<rect x="136" y="45" width="74" height="22"></rect>
<text x="173" y="60">SCHEMA</text>
</g>
<path d="M210 56h10"></path>
<g>
<path d="M220 56h0"></path>
<path d="M444 56h0"></path>
<path d="M220 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M256 20h152"></path>
</g>
<path d="M408 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M220 56h36"></path>
<g>
<path d="M256 56h0"></path>
<g>
<path d="M256 56h10"></path>
<path d="M398 56h10"></path>
<g class="non-terminal ">
<path d="M266 56h0"></path>
<path d="M304 56h0"></path>
<rect x="266" y="45" width="38" height="22"></rect>
<text x="285" y="60">IF</text>
</g>
<path d="M304 56h10"></path>
<path d="M314 56h10"></path>
<g class="non-terminal ">
<path d="M324 56h0"></path>
<path d="M398 56h0"></path>
<rect x="324" y="45" width="74" height="22"></rect>
<text x="361" y="60">EXISTS</text>
</g>
</g>
<path d="M408 56h0"></path>
</g>
<path d="M408 56h36"></path>
</g>
<g>
<path d="M444 56h0"></path>
<path d="M695 56h0"></path>
<path d="M444 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M480 20h179"></path>
</g>
<path d="M659 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M444 56h36"></path>
<g>
<path d="M480 56h0"></path>
<g>
<path d="M480 56h10"></path>
<path d="M649 56h10"></path>
<g class="terminal ">
<path d="M490 56h0"></path>
<path d="M600 56h0"></path>
<rect x="490" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="545" y="60">schemaName</text>
</g>
<path d="M600 56h10"></path>
<path d="M610 56h10"></path>
<g class="terminal ">
<path d="M620 56h0"></path>
<path d="M649 56h0"></path>
<rect x="620" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="634.5" y="60">.</text>
</g>
</g>
<path d="M659 56h0"></path>
</g>
<path d="M659 56h36"></path>
</g>
<path d="M695 56h10"></path>
<g class="terminal ">
<path d="M705 56h0"></path>
<path d="M761 56h0"></path>
<rect x="705" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="733" y="60">name</text>
</g>
</g>
<path d="M771 56h0"></path>
</g>
<path d="M771 56h10"></path>
<path d="M 781 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### dropTableStatement:
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
<svg class="railroad-diagram" width="812" height="87" viewBox="0 0 812 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M752 56h10"></path>
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
<path d="M201 56h0"></path>
<rect x="136" y="45" width="65" height="22"></rect>
<text x="168.5" y="60">TABLE</text>
</g>
<path d="M201 56h10"></path>
<g>
<path d="M211 56h0"></path>
<path d="M435 56h0"></path>
<path d="M211 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M247 20h152"></path>
</g>
<path d="M399 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M211 56h36"></path>
<g>
<path d="M247 56h0"></path>
<g>
<path d="M247 56h10"></path>
<path d="M389 56h10"></path>
<g class="non-terminal ">
<path d="M257 56h0"></path>
<path d="M295 56h0"></path>
<rect x="257" y="45" width="38" height="22"></rect>
<text x="276" y="60">IF</text>
</g>
<path d="M295 56h10"></path>
<path d="M305 56h10"></path>
<g class="non-terminal ">
<path d="M315 56h0"></path>
<path d="M389 56h0"></path>
<rect x="315" y="45" width="74" height="22"></rect>
<text x="352" y="60">EXISTS</text>
</g>
</g>
<path d="M399 56h0"></path>
</g>
<path d="M399 56h36"></path>
</g>
<g>
<path d="M435 56h0"></path>
<path d="M686 56h0"></path>
<path d="M435 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M471 20h179"></path>
</g>
<path d="M650 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M435 56h36"></path>
<g>
<path d="M471 56h0"></path>
<g>
<path d="M471 56h10"></path>
<path d="M640 56h10"></path>
<g class="terminal ">
<path d="M481 56h0"></path>
<path d="M591 56h0"></path>
<rect x="481" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="536" y="60">schemaName</text>
</g>
<path d="M591 56h10"></path>
<path d="M601 56h10"></path>
<g class="terminal ">
<path d="M611 56h0"></path>
<path d="M640 56h0"></path>
<rect x="611" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="625.5" y="60">.</text>
</g>
</g>
<path d="M650 56h0"></path>
</g>
<path d="M650 56h36"></path>
</g>
<path d="M686 56h10"></path>
<g class="terminal ">
<path d="M696 56h0"></path>
<path d="M752 56h0"></path>
<rect x="696" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="724" y="60">name</text>
</g>
</g>
<path d="M762 56h0"></path>
</g>
<path d="M762 56h10"></path>
<path d="M 772 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="969" height="87" viewBox="0 0 969 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M909 56h10"></path>
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
<path d="M282 56h0"></path>
<rect x="136" y="45" width="146" height="22"></rect>
<text x="209" y="60">&#91;MATERIALIZED&#93;</text>
</g>
<path d="M282 56h10"></path>
<path d="M292 56h10"></path>
<g class="non-terminal ">
<path d="M302 56h0"></path>
<path d="M358 56h0"></path>
<rect x="302" y="45" width="56" height="22"></rect>
<text x="330" y="60">VIEW</text>
</g>
<path d="M358 56h10"></path>
<g>
<path d="M368 56h0"></path>
<path d="M592 56h0"></path>
<path d="M368 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M404 20h152"></path>
</g>
<path d="M556 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M368 56h36"></path>
<g>
<path d="M404 56h0"></path>
<g>
<path d="M404 56h10"></path>
<path d="M546 56h10"></path>
<g class="non-terminal ">
<path d="M414 56h0"></path>
<path d="M452 56h0"></path>
<rect x="414" y="45" width="38" height="22"></rect>
<text x="433" y="60">IF</text>
</g>
<path d="M452 56h10"></path>
<path d="M462 56h10"></path>
<g class="non-terminal ">
<path d="M472 56h0"></path>
<path d="M546 56h0"></path>
<rect x="472" y="45" width="74" height="22"></rect>
<text x="509" y="60">EXISTS</text>
</g>
</g>
<path d="M556 56h0"></path>
</g>
<path d="M556 56h36"></path>
</g>
<g>
<path d="M592 56h0"></path>
<path d="M843 56h0"></path>
<path d="M592 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M628 20h179"></path>
</g>
<path d="M807 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M592 56h36"></path>
<g>
<path d="M628 56h0"></path>
<g>
<path d="M628 56h10"></path>
<path d="M797 56h10"></path>
<g class="terminal ">
<path d="M638 56h0"></path>
<path d="M748 56h0"></path>
<rect x="638" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="693" y="60">schemaName</text>
</g>
<path d="M748 56h10"></path>
<path d="M758 56h10"></path>
<g class="terminal ">
<path d="M768 56h0"></path>
<path d="M797 56h0"></path>
<rect x="768" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="782.5" y="60">.</text>
</g>
</g>
<path d="M807 56h0"></path>
</g>
<path d="M807 56h36"></path>
</g>
<path d="M843 56h10"></path>
<g class="terminal ">
<path d="M853 56h0"></path>
<path d="M909 56h0"></path>
<rect x="853" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="881" y="60">name</text>
</g>
</g>
<path d="M919 56h0"></path>
</g>
<path d="M919 56h10"></path>
<path d="M 929 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### truncateTableStatement:
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
<svg class="railroad-diagram" width="624" height="87" viewBox="0 0 624 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<g>
<path d="M50 56h10"></path>
<path d="M564 56h10"></path>
<g class="non-terminal ">
<path d="M60 56h0"></path>
<path d="M152 56h0"></path>
<rect x="60" y="45" width="92" height="22"></rect>
<text x="106" y="60">TRUNCATE</text>
</g>
<path d="M152 56h10"></path>
<path d="M162 56h10"></path>
<g class="non-terminal ">
<path d="M172 56h0"></path>
<path d="M237 56h0"></path>
<rect x="172" y="45" width="65" height="22"></rect>
<text x="204.5" y="60">TABLE</text>
</g>
<path d="M237 56h10"></path>
<g>
<path d="M247 56h0"></path>
<path d="M498 56h0"></path>
<path d="M247 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M283 20h179"></path>
</g>
<path d="M462 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M247 56h36"></path>
<g>
<path d="M283 56h0"></path>
<g>
<path d="M283 56h10"></path>
<path d="M452 56h10"></path>
<g class="terminal ">
<path d="M293 56h0"></path>
<path d="M403 56h0"></path>
<rect x="293" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="348" y="60">schemaName</text>
</g>
<path d="M403 56h10"></path>
<path d="M413 56h10"></path>
<g class="terminal ">
<path d="M423 56h0"></path>
<path d="M452 56h0"></path>
<rect x="423" y="45" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="437.5" y="60">.</text>
</g>
</g>
<path d="M462 56h0"></path>
</g>
<path d="M462 56h36"></path>
</g>
<path d="M498 56h10"></path>
<g class="terminal ">
<path d="M508 56h0"></path>
<path d="M564 56h0"></path>
<rect x="508" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="536" y="60">name</text>
</g>
</g>
<path d="M574 56h0"></path>
</g>
<path d="M574 56h10"></path>
<path d="M 584 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}


{% highlight sql %}

alterStatement:
       ALTER SCHEMA schemaName RENAME TO newSchemaName  
     | ALTER SCHEMA schemaName OWNER TO userName  
     | ALTER TABLE [ schemaName . ] tableName RENAME TO newTableName  
     | ALTER TABLE [ schemaName . ] tableName OWNER TO userName
     | ALTER TABLE [ schemaName . ] tableName RENAME COLUMN columnName TO newColumnName
     | ALTER TABLE [ schemaName . ] tableName DROP COLUMN columnName
     | ALTER TABLE [ schemaName . ] tableName ADD COLUMN columnName type [ NULL | NOT NULL ] [DEFAULT defaultValue] [ ( BEFORE | AFTER ) columnName ]
     | ALTER TABLE [ schemaName . ] tableName ADD COLUMN columnName physicalName AS name [DEFAULT defaultValue] [ ( BEFORE | AFTER ) columnName ]
     | ALTER TABLE [ schemaName . ] tableName MODIFY COLUMN columnName SET NOT NULL
     | ALTER TABLE [ schemaName . ] tableName MODIFY COLUMN columnName DROP NOT NULL
     | ALTER TABLE [ schemaName . ] tableName MODIFY COLUMN columnName SET COLLATION collation
     | ALTER TABLE [ schemaName . ] tableName MODIFY COLUMN columnName SET DEFAULT value
     | ALTER TABLE [ schemaName . ] tableName MODIFY COLUMN columnName DROP DEFAULT
     | ALTER TABLE [ schemaName . ] tableName MODIFY COLUMN columnName SET TYPE type
     | ALTER TABLE [ schemaName . ] tableName MODIFY COLUMN columnName SET POSITION ( BEFORE | AFTER ) columnName
     | ALTER TABLE [ schemaName . ] tableName ADD PRIMARY KEY ( columnName | '(' columnName [, columnName ]* ')' )
     | ALTER TABLE [ schemaName . ] tableName DROP PRIMARY KEY
     | ALTER TABLE [ schemaName . ] tableName ADD CONSTRAINT constraintName UNIQUE ( columnName| '(' columnName [, columnName ]* ')' )
     | ALTER TABLE [ schemaName . ] tableName DROP CONSTRAINT constraintName
     | ALTER TABLE [ schemaName . ] tableName ADD CONSTRAINT foreignKeyName FOREIGN KEY ( columnName | '(' columnName [, columnName ]* ')' ) REFERENCES [ schemaName . ] tableName '(' columnName [, columnName ]* ')' [ ON UPDATE ( NONE | RESTRICT ) ] [ ON DELETE ( NONE | RESTRICT ) ]
     | ALTER TABLE [ schemaName . ] tableName DROP FOREIGN KEY foreignKeyName
     | ALTER TABLE [ schemaName . ] tableName ADD [ UNIQUE ] INDEX indexName ON ( columnName | '(' columnName [, columnName ]* ')' ) [ USING indexMethod ] [ ON STORE storeUniqueName ]
     | ALTER TABLE [ schemaName . ] tableName DROP INDEX indexName
     | ALTER TABLE [ schemaName . ] tableName ADD PLACEMENT [ ( columnName | '(' columnName [ , columnName ]* ')' ) ] ON STORE storeUniqueName [ WITH PARTITIONS '(' partitionName [, partitionName ]* ')' ]
     | ALTER TABLE [ schemaName . ] tableName MODIFY PLACEMENT ( ADD | DROP ) COLUMN columnName ON STORE storeUniqueName
     | ALTER TABLE [ schemaName . ] tableName MODIFY PLACEMENT '(' columnName [, columnName ]* ')' ON STORE storeUniqueName [ WITH PARTITIONS '(' partitionName [, partitionName ]* ')' ]
     | ALTER TABLE [ schemaName . ] tableName DROP PLACEMENT ON STORE storeUniqueName
     | ALTER TABLE [ schemaName . ] tableName PARTITION BY ( HASH | RANGE | LIST) '(' columnName ')' [ PARTITIONS numPartitions | WITH '(' partitionName1 , partitionName2 [, partitionNameN ]* ')' ]
     | ALTER TABLE [ schemaName . ] tableName MERGE PARTITIONS
     | ALTER TABLE [ schemaName . ] tableName MODIFY PARTITIONS '(' partitionId [, partitionId ]* ')' ON STORE storeUniqueName
     | ALTER VIEW [ schemaName . ] viewName RENAME TO newViewName
     | ALTER VIEW [ schemaName . ] viewName RENAME COLUMN columnName TO newColumnName
     | ALTER MATERIALIZED VIEW [ schemaName . ] viewName RENAME TO newViewName
     | ALTER MATERIALIZED VIEW [ schemaName . ] viewName RENAME COLUMN columnName TO newColumnName
     | ALTER MATERIALIZED VIEW [ schemaName . ] viewName FRESHNESS MANUAL
     | ALTER MATERIALIZED VIEW [ schemaName . ] viewName ADD [UNIQUE] INDEX indexName ON ( columnName | '(' columnName [, columnName ]* ')' ) [ USING indexMethod ] [ ON STORE storeUniqueName ]
     | ALTER MATERIALIZED VIEW [ schemaName . ] viewName DROP INDEX indexName

{% endhighlight %}
