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
<svg class="railroad-diagram" width="226" height="158" viewBox="0 0 226 158">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M186 31h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h0"></path>
<path d="M150 31h0"></path>
<g class="terminal ">
<path d="M76 31h0"></path>
<path d="M150 31h0"></path>
<rect x="76" y="20" width="74" height="22" rx="10" ry="10"></rect>
<text x="113" y="35">insert</text>
</g>
</g>
<path d="M150 31h36"></path>
<path d="M40 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 67h0"></path>
<path d="M150 67h0"></path>
<g class="terminal ">
<path d="M76 67h0"></path>
<path d="M150 67h0"></path>
<rect x="76" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="113" y="71">update</text>
</g>
</g>
<path d="M150 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v30a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 97h0"></path>
<path d="M150 97h0"></path>
<g class="terminal ">
<path d="M76 97h0"></path>
<path d="M150 97h0"></path>
<rect x="76" y="86" width="74" height="22" rx="10" ry="10"></rect>
<text x="113" y="101">delete</text>
</g>
</g>
<path d="M150 97a18 18 0 0 0 18 -18v-30a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v60a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 127h4.5"></path>
<path d="M145.5 127h4.5"></path>
<g class="terminal ">
<path d="M80.5 127h0"></path>
<path d="M145.5 127h0"></path>
<rect x="80.5" y="116" width="65" height="22" rx="10" ry="10"></rect>
<text x="113" y="131">query</text>
</g>
</g>
<path d="M150 127a18 18 0 0 0 18 -18v-60a18 18 0 0 1 18 -18"></path>
</g>
<path d="M 186 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="756" height="112" viewBox="0 0 756 112">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M321 56h0"></path>
<g class="non-terminal ">
<path d="M50 56h0"></path>
<path d="M124 56h0"></path>
<rect x="50" y="45" width="74" height="22"></rect>
<text x="87" y="60">INSERT</text>
</g>
<path d="M124 56h10"></path>
<path d="M134 56h10"></path>
<g class="non-terminal ">
<path d="M144 56h0"></path>
<path d="M200 56h0"></path>
<rect x="144" y="45" width="56" height="22"></rect>
<text x="172" y="60">INTO</text>
</g>
<path d="M200 56h10"></path>
<path d="M210 56h10"></path>
<g class="terminal ">
<path d="M220 56h0"></path>
<path d="M321 56h0"></path>
<rect x="220" y="45" width="101" height="22" rx="10" ry="10"></rect>
<text x="270.5" y="60">tableName</text>
</g>
</g>
<path d="M321 56h10"></path>
<path d="M331 56h10"></path>
<g>
<path d="M341 56h0"></path>
<path d="M621 56h0"></path>
<g>
<path d="M341 56h0"></path>
<path d="M621 56h0"></path>
<path d="M341 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M377 20h208"></path>
</g>
<path d="M585 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M341 56h36"></path>
<g>
<path d="M377 56h0"></path>
<path d="M585 56h0"></path>
<g class="terminal ">
<path d="M377 56h0"></path>
<path d="M406 56h0"></path>
<rect x="377" y="45" width="29" height="22" rx="10" ry="10"></rect>
<text x="391.5" y="60">(</text>
</g>
<path d="M406 56h10"></path>
<path d="M416 56h10"></path>
<g>
<path d="M426 56h0"></path>
<path d="M536 56h0"></path>
<path d="M426 56h18"></path>
<g>
<path d="M444 56h0"></path>
<path d="M518 56h0"></path>
<g class="terminal ">
<path d="M444 56h0"></path>
<path d="M518 56h0"></path>
<rect x="444" y="45" width="74" height="22" rx="10" ry="10"></rect>
<text x="481" y="60">column</text>
</g>
</g>
<path d="M518 56h18"></path>
<path d="M444 56a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M444 92h74"></path>
</g>
<path d="M518 92a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M536 56h10"></path>
<path d="M546 56h10"></path>
<g class="terminal ">
<path d="M556 56h0"></path>
<path d="M585 56h0"></path>
<rect x="556" y="45" width="29" height="22" rx="10" ry="10"></rect>
<text x="570.5" y="60">)</text>
</g>
</g>
<path d="M585 56h36"></path>
</g>
</g>
<path d="M621 56h10"></path>
<path d="M631 56h10"></path>
<g>
<path d="M641 56h0"></path>
<path d="M706 56h0"></path>
<g class="terminal ">
<path d="M641 56h0"></path>
<path d="M706 56h0"></path>
<rect x="641" y="45" width="65" height="22" rx="10" ry="10"></rect>
<text x="673.5" y="60">query</text>
</g>
</g>
<path d="M706 56h10"></path>
<path d="M 716 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="842" height="112" viewBox="0 0 842 112">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M245 56h0"></path>
<g class="non-terminal ">
<path d="M50 56h0"></path>
<path d="M124 56h0"></path>
<rect x="50" y="45" width="74" height="22"></rect>
<text x="87" y="60">UPDATE</text>
</g>
<path d="M124 56h10"></path>
<path d="M134 56h10"></path>
<g class="terminal ">
<path d="M144 56h0"></path>
<path d="M245 56h0"></path>
<rect x="144" y="45" width="101" height="22" rx="10" ry="10"></rect>
<text x="194.5" y="60">tableName</text>
</g>
</g>
<path d="M245 56h10"></path>
<path d="M255 56h10"></path>
<g>
<path d="M265 56h0"></path>
<path d="M442 56h0"></path>
<g class="non-terminal ">
<path d="M265 56h0"></path>
<path d="M312 56h0"></path>
<rect x="265" y="45" width="47" height="22"></rect>
<text x="288.5" y="60">SET</text>
</g>
<path d="M312 56h10"></path>
<path d="M322 56h10"></path>
<g>
<path d="M332 56h0"></path>
<path d="M442 56h0"></path>
<path d="M332 56h18"></path>
<g>
<path d="M350 56h0"></path>
<path d="M424 56h0"></path>
<g class="terminal ">
<path d="M350 56h0"></path>
<path d="M424 56h0"></path>
<rect x="350" y="45" width="74" height="22" rx="10" ry="10"></rect>
<text x="387" y="60">assign</text>
</g>
</g>
<path d="M424 56h18"></path>
<path d="M350 56a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M350 92h74"></path>
</g>
<path d="M424 92a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M442 56h10"></path>
<path d="M452 56h10"></path>
<g>
<path d="M462 56h0"></path>
<path d="M792 56h0"></path>
<g>
<path d="M462 56h0"></path>
<path d="M792 56h0"></path>
<path d="M462 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M498 20h258"></path>
</g>
<path d="M756 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M462 56h36"></path>
<g>
<path d="M498 56h0"></path>
<path d="M756 56h0"></path>
<g class="non-terminal ">
<path d="M498 56h0"></path>
<path d="M563 56h0"></path>
<rect x="498" y="45" width="65" height="22"></rect>
<text x="530.5" y="60">WHERE</text>
</g>
<path d="M563 56h10"></path>
<path d="M573 56h10"></path>
<g class="terminal ">
<path d="M583 56h0"></path>
<path d="M756 56h0"></path>
<rect x="583" y="45" width="173" height="22" rx="10" ry="10"></rect>
<text x="669.5" y="60">booleanExpression</text>
</g>
</g>
<path d="M756 56h36"></path>
</g>
</g>
<path d="M792 56h10"></path>
<path d="M 802 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="389" height="62" viewBox="0 0 389 62">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M339 31h0"></path>
<g class="terminal ">
<path d="M50 31h0"></path>
<path d="M160 31h0"></path>
<rect x="50" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="105" y="35">identifier</text>
</g>
<path d="M160 31h10"></path>
<path d="M170 31h10"></path>
<g class="terminal ">
<path d="M180 31h0"></path>
<path d="M209 31h0"></path>
<rect x="180" y="20" width="29" height="22" rx="10" ry="10"></rect>
<text x="194.5" y="35">=</text>
</g>
<path d="M209 31h10"></path>
<path d="M219 31h10"></path>
<g class="terminal ">
<path d="M229 31h0"></path>
<path d="M339 31h0"></path>
<rect x="229" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="284" y="35">expression</text>
</g>
</g>
<path d="M339 31h10"></path>
<path d="M 349 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="988" height="95" viewBox="0 0 988 95">
<g transform="translate(.5 .5)">
<g>
<path d="M20 54v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 64h10"></path>
<g>
<path d="M50 64h0"></path>
<path d="M588 64h0"></path>
<g class="non-terminal ">
<path d="M50 64h0"></path>
<path d="M124 64h0"></path>
<rect x="50" y="53" width="74" height="22"></rect>
<text x="87" y="68">DELETE</text>
</g>
<path d="M124 64h10"></path>
<path d="M134 64h10"></path>
<g class="non-terminal ">
<path d="M144 64h0"></path>
<path d="M200 64h0"></path>
<rect x="144" y="53" width="56" height="22"></rect>
<text x="172" y="68">FROM</text>
</g>
<path d="M200 64h10"></path>
<path d="M210 64h10"></path>
<g class="terminal ">
<path d="M220 64h0"></path>
<path d="M321 64h0"></path>
<rect x="220" y="53" width="101" height="22" rx="10" ry="10"></rect>
<text x="270.5" y="68">tableName</text>
</g>
<path d="M321 64h10"></path>
<g>
<path d="M331 64h0"></path>
<path d="M588 64h0"></path>
<path d="M331 64a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M367 20h185"></path>
</g>
<path d="M552 20a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M331 64h36"></path>
<g>
<path d="M367 64h0"></path>
<path d="M552 64h0"></path>
<g>
<path d="M367 64h0"></path>
<path d="M477 64h0"></path>
<path d="M367 64a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M403 28h38"></path>
</g>
<path d="M441 28a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M367 64h36"></path>
<g>
<path d="M403 64h0"></path>
<path d="M441 64h0"></path>
<g class="non-terminal ">
<path d="M403 64h0"></path>
<path d="M441 64h0"></path>
<rect x="403" y="53" width="38" height="22"></rect>
<text x="422" y="68">AS</text>
</g>
</g>
<path d="M441 64h36"></path>
</g>
<path d="M477 64h10"></path>
<g class="terminal ">
<path d="M487 64h0"></path>
<path d="M552 64h0"></path>
<rect x="487" y="53" width="65" height="22" rx="10" ry="10"></rect>
<text x="519.5" y="68">alias</text>
</g>
</g>
<path d="M552 64h36"></path>
</g>
</g>
<path d="M588 64h10"></path>
<path d="M598 64h10"></path>
<g>
<path d="M608 64h0"></path>
<path d="M938 64h0"></path>
<g>
<path d="M608 64h0"></path>
<path d="M938 64h0"></path>
<path d="M608 64a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M644 28h258"></path>
</g>
<path d="M902 28a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M608 64h36"></path>
<g>
<path d="M644 64h0"></path>
<path d="M902 64h0"></path>
<g class="non-terminal ">
<path d="M644 64h0"></path>
<path d="M709 64h0"></path>
<rect x="644" y="53" width="65" height="22"></rect>
<text x="676.5" y="68">WHERE</text>
</g>
<path d="M709 64h10"></path>
<path d="M719 64h10"></path>
<g class="terminal ">
<path d="M729 64h0"></path>
<path d="M902 64h0"></path>
<rect x="729" y="53" width="173" height="22" rx="10" ry="10"></rect>
<text x="815.5" y="68">booleanExpression</text>
</g>
</g>
<path d="M902 64h36"></path>
</g>
</g>
<path d="M938 64h10"></path>
<path d="M 948 64 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}


{% highlight sql %}

query:
      values
  |   WITH withItem [, withItem ]* query
  |   {
          select
      |   selectWithoutFrom
      |   query UNION [ ALL | DISTINCT ] query
      |   query EXCEPT [ ALL | DISTINCT ] query
      |   query MINUS [ ALL | DISTINCT ] query
      |   query INTERSECT [ ALL | DISTINCT ] query
      }
      [ ORDER BY orderItem [, orderItem ]* ]
      [ LIMIT { [ start, ] count | ALL } ]
      [ OFFSET start { ROW | ROWS } ]
      [ FETCH { FIRST | NEXT } count { ROW | ROWS } ONLY ]

{% endhighlight %}
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
<svg class="railroad-diagram" width="697" height="112" viewBox="0 0 697 112">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M106 56h0"></path>
<g class="terminal ">
<path d="M50 56h0"></path>
<path d="M106 56h0"></path>
<rect x="50" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="78" y="60">name</text>
</g>
</g>
<path d="M106 56h10"></path>
<path d="M116 56h10"></path>
<g>
<path d="M126 56h0"></path>
<path d="M406 56h0"></path>
<g>
<path d="M126 56h0"></path>
<path d="M406 56h0"></path>
<path d="M126 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M162 20h208"></path>
</g>
<path d="M370 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M126 56h36"></path>
<g>
<path d="M162 56h0"></path>
<path d="M370 56h0"></path>
<g class="terminal ">
<path d="M162 56h0"></path>
<path d="M191 56h0"></path>
<rect x="162" y="45" width="29" height="22" rx="10" ry="10"></rect>
<text x="176.5" y="60">(</text>
</g>
<path d="M191 56h10"></path>
<path d="M201 56h10"></path>
<g>
<path d="M211 56h0"></path>
<path d="M321 56h0"></path>
<path d="M211 56h18"></path>
<g>
<path d="M229 56h0"></path>
<path d="M303 56h0"></path>
<g class="terminal ">
<path d="M229 56h0"></path>
<path d="M303 56h0"></path>
<rect x="229" y="45" width="74" height="22" rx="10" ry="10"></rect>
<text x="266" y="60">column</text>
</g>
</g>
<path d="M303 56h18"></path>
<path d="M229 56a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M229 92h74"></path>
</g>
<path d="M303 92a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M321 56h10"></path>
<path d="M331 56h10"></path>
<g class="terminal ">
<path d="M341 56h0"></path>
<path d="M370 56h0"></path>
<rect x="341" y="45" width="29" height="22" rx="10" ry="10"></rect>
<text x="355.5" y="60">)</text>
</g>
</g>
<path d="M370 56h36"></path>
</g>
</g>
<path d="M406 56h10"></path>
<path d="M416 56h10"></path>
<g>
<path d="M426 56h0"></path>
<path d="M647 56h0"></path>
<g class="non-terminal ">
<path d="M426 56h0"></path>
<path d="M464 56h0"></path>
<rect x="426" y="45" width="38" height="22"></rect>
<text x="445" y="60">AS</text>
</g>
<path d="M464 56h10"></path>
<path d="M474 56h10"></path>
<g class="terminal ">
<path d="M484 56h0"></path>
<path d="M513 56h0"></path>
<rect x="484" y="45" width="29" height="22" rx="10" ry="10"></rect>
<text x="498.5" y="60">(</text>
</g>
<path d="M513 56h10"></path>
<path d="M523 56h10"></path>
<g class="terminal ">
<path d="M533 56h0"></path>
<path d="M598 56h0"></path>
<rect x="533" y="45" width="65" height="22" rx="10" ry="10"></rect>
<text x="565.5" y="60">query</text>
</g>
<path d="M598 56h10"></path>
<path d="M608 56h10"></path>
<g class="terminal ">
<path d="M618 56h0"></path>
<path d="M647 56h0"></path>
<rect x="618" y="45" width="29" height="22" rx="10" ry="10"></rect>
<text x="632.5" y="60">)</text>
</g>
</g>
<path d="M647 56h10"></path>
<path d="M 657 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="714" height="123" viewBox="0 0 714 123">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M664 56h0"></path>
<g class="terminal ">
<path d="M50 56h0"></path>
<path d="M160 56h0"></path>
<rect x="50" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="105" y="60">expression</text>
</g>
<path d="M160 56h10"></path>
<g>
<path d="M170 56h0"></path>
<path d="M370 56h0"></path>
<path d="M170 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M206 20h128"></path>
</g>
<path d="M334 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M170 56h36"></path>
<g>
<path d="M206 56h0"></path>
<path d="M334 56h0"></path>
<path d="M206 56h36"></path>
<g>
<path d="M242 56h4.5"></path>
<path d="M293.5 56h4.5"></path>
<g class="non-terminal ">
<path d="M246.5 56h0"></path>
<path d="M293.5 56h0"></path>
<rect x="246.5" y="45" width="47" height="22"></rect>
<text x="270" y="60">ASC</text>
</g>
</g>
<path d="M298 56h36"></path>
<path d="M206 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M242 92h0"></path>
<path d="M298 92h0"></path>
<g class="non-terminal ">
<path d="M242 92h0"></path>
<path d="M298 92h0"></path>
<rect x="242" y="81" width="56" height="22"></rect>
<text x="270" y="96">DESC</text>
</g>
</g>
<path d="M298 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M334 56h36"></path>
</g>
<g>
<path d="M370 56h0"></path>
<path d="M664 56h0"></path>
<path d="M370 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M406 20h222"></path>
</g>
<path d="M628 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M370 56h36"></path>
<g>
<path d="M406 56h0"></path>
<path d="M628 56h0"></path>
<path d="M406 56h36"></path>
<g>
<path d="M442 56h0"></path>
<path d="M592 56h0"></path>
<g class="non-terminal ">
<path d="M442 56h0"></path>
<path d="M507 56h0"></path>
<rect x="442" y="45" width="65" height="22"></rect>
<text x="474.5" y="60">NULLS</text>
</g>
<path d="M507 56h10"></path>
<path d="M517 56h10"></path>
<g class="non-terminal ">
<path d="M527 56h0"></path>
<path d="M592 56h0"></path>
<rect x="527" y="45" width="65" height="22"></rect>
<text x="559.5" y="60">FIRST</text>
</g>
</g>
<path d="M592 56h36"></path>
<path d="M406 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M442 92h4.5"></path>
<path d="M587.5 92h4.5"></path>
<g class="non-terminal ">
<path d="M446.5 92h0"></path>
<path d="M511.5 92h0"></path>
<rect x="446.5" y="81" width="65" height="22"></rect>
<text x="479" y="96">NULLS</text>
</g>
<path d="M511.5 92h10"></path>
<path d="M521.5 92h10"></path>
<g class="non-terminal ">
<path d="M531.5 92h0"></path>
<path d="M587.5 92h0"></path>
<rect x="531.5" y="81" width="56" height="22"></rect>
<text x="559.5" y="96">LAST</text>
</g>
</g>
<path d="M592 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M628 56h36"></path>
</g>
</g>
<path d="M664 56h10"></path>
<path d="M 674 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="2853" height="148" viewBox="0 0 2853 148">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M516 56h0"></path>
<g class="non-terminal ">
<path d="M50 56h0"></path>
<path d="M124 56h0"></path>
<rect x="50" y="45" width="74" height="22"></rect>
<text x="87" y="60">SELECT</text>
</g>
<path d="M124 56h10"></path>
<g>
<path d="M134 56h0"></path>
<path d="M280 56h0"></path>
<path d="M134 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M170 20h74"></path>
</g>
<path d="M244 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M134 56h36"></path>
<g>
<path d="M170 56h0"></path>
<path d="M244 56h0"></path>
<g class="non-terminal ">
<path d="M170 56h0"></path>
<path d="M244 56h0"></path>
<rect x="170" y="45" width="74" height="22"></rect>
<text x="207" y="60">STREAM</text>
</g>
</g>
<path d="M244 56h36"></path>
</g>
<g>
<path d="M280 56h0"></path>
<path d="M516 56h0"></path>
<path d="M280 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M316 20h164"></path>
</g>
<path d="M480 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M280 56h36"></path>
<g>
<path d="M316 56h0"></path>
<path d="M480 56h0"></path>
<path d="M316 56h36"></path>
<g>
<path d="M352 56h22.5"></path>
<path d="M421.5 56h22.5"></path>
<g class="non-terminal ">
<path d="M374.5 56h0"></path>
<path d="M421.5 56h0"></path>
<rect x="374.5" y="45" width="47" height="22"></rect>
<text x="398" y="60">ALL</text>
</g>
</g>
<path d="M444 56h36"></path>
<path d="M316 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M352 92h0"></path>
<path d="M444 92h0"></path>
<g class="non-terminal ">
<path d="M352 92h0"></path>
<path d="M444 92h0"></path>
<rect x="352" y="81" width="92" height="22"></rect>
<text x="398" y="96">DISTINCT</text>
</g>
</g>
<path d="M444 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M480 56h36"></path>
</g>
</g>
<path d="M516 56h10"></path>
<path d="M526 56h10"></path>
<g>
<path d="M536 56h0"></path>
<path d="M763 56h0"></path>
<g>
<path d="M536 56h0"></path>
<path d="M763 56h0"></path>
<g>
<path d="M536 56h0"></path>
<path d="M763 56h0"></path>
<path d="M536 56h36"></path>
<g>
<path d="M572 56h63"></path>
<path d="M664 56h63"></path>
<g class="terminal ">
<path d="M635 56h0"></path>
<path d="M664 56h0"></path>
<rect x="635" y="45" width="29" height="22" rx="10" ry="10"></rect>
<text x="649.5" y="60">&#42;</text>
</g>
</g>
<path d="M727 56h36"></path>
<path d="M536 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M572 92h0"></path>
<path d="M727 92h0"></path>
<g>
<path d="M572 92h0"></path>
<path d="M727 92h0"></path>
<path d="M572 92h18"></path>
<g>
<path d="M590 92h0"></path>
<path d="M709 92h0"></path>
<g class="terminal ">
<path d="M590 92h0"></path>
<path d="M709 92h0"></path>
<rect x="590" y="81" width="119" height="22" rx="10" ry="10"></rect>
<text x="649.5" y="96">projectItem</text>
</g>
</g>
<path d="M709 92h18"></path>
<path d="M590 92a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M590 128h119"></path>
</g>
<path d="M709 128a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M727 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
</g>
</g>
<path d="M763 56h10"></path>
<path d="M773 56h10"></path>
<g>
<path d="M783 56h0"></path>
<path d="M1014 56h0"></path>
<g class="non-terminal ">
<path d="M783 56h0"></path>
<path d="M839 56h0"></path>
<rect x="783" y="45" width="56" height="22"></rect>
<text x="811" y="60">FROM</text>
</g>
<path d="M839 56h10"></path>
<path d="M849 56h10"></path>
<g class="terminal ">
<path d="M859 56h0"></path>
<path d="M1014 56h0"></path>
<rect x="859" y="45" width="155" height="22" rx="10" ry="10"></rect>
<text x="936.5" y="60">tableExpression</text>
</g>
</g>
<path d="M1014 56h10"></path>
<path d="M1024 56h10"></path>
<g>
<path d="M1034 56h0"></path>
<path d="M1364 56h0"></path>
<g>
<path d="M1034 56h0"></path>
<path d="M1364 56h0"></path>
<path d="M1034 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1070 20h258"></path>
</g>
<path d="M1328 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1034 56h36"></path>
<g>
<path d="M1070 56h0"></path>
<path d="M1328 56h0"></path>
<g class="non-terminal ">
<path d="M1070 56h0"></path>
<path d="M1135 56h0"></path>
<rect x="1070" y="45" width="65" height="22"></rect>
<text x="1102.5" y="60">WHERE</text>
</g>
<path d="M1135 56h10"></path>
<path d="M1145 56h10"></path>
<g class="terminal ">
<path d="M1155 56h0"></path>
<path d="M1328 56h0"></path>
<rect x="1155" y="45" width="173" height="22" rx="10" ry="10"></rect>
<text x="1241.5" y="60">booleanExpression</text>
</g>
</g>
<path d="M1328 56h36"></path>
</g>
</g>
<path d="M1364 56h10"></path>
<path d="M1374 56h10"></path>
<g>
<path d="M1384 56h0"></path>
<path d="M1736 56h0"></path>
<g>
<path d="M1384 56h0"></path>
<path d="M1736 56h0"></path>
<path d="M1384 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1420 20h280"></path>
</g>
<path d="M1700 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1384 56h36"></path>
<g>
<path d="M1420 56h0"></path>
<path d="M1700 56h0"></path>
<g class="non-terminal ">
<path d="M1420 56h0"></path>
<path d="M1485 56h0"></path>
<rect x="1420" y="45" width="65" height="22"></rect>
<text x="1452.5" y="60">GROUP</text>
</g>
<path d="M1485 56h10"></path>
<path d="M1495 56h10"></path>
<g class="non-terminal ">
<path d="M1505 56h0"></path>
<path d="M1543 56h0"></path>
<rect x="1505" y="45" width="38" height="22"></rect>
<text x="1524" y="60">BY</text>
</g>
<path d="M1543 56h10"></path>
<path d="M1553 56h10"></path>
<g>
<path d="M1563 56h0"></path>
<path d="M1700 56h0"></path>
<g>
<path d="M1563 56h0"></path>
<path d="M1700 56h0"></path>
<g>
<path d="M1563 56h0"></path>
<path d="M1700 56h0"></path>
<path d="M1563 56h18"></path>
<g>
<path d="M1581 56h0"></path>
<path d="M1682 56h0"></path>
<g class="terminal ">
<path d="M1581 56h0"></path>
<path d="M1682 56h0"></path>
<rect x="1581" y="45" width="101" height="22" rx="10" ry="10"></rect>
<text x="1631.5" y="60">groupItem</text>
</g>
</g>
<path d="M1682 56h18"></path>
<path d="M1581 56a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M1581 92h101"></path>
</g>
<path d="M1682 92a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
</g>
</g>
<path d="M1700 56h36"></path>
</g>
</g>
<path d="M1736 56h10"></path>
<path d="M1746 56h10"></path>
<g>
<path d="M1756 56h0"></path>
<path d="M2095 56h0"></path>
<g>
<path d="M1756 56h0"></path>
<path d="M2095 56h0"></path>
<path d="M1756 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1792 20h267"></path>
</g>
<path d="M2059 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1756 56h36"></path>
<g>
<path d="M1792 56h0"></path>
<path d="M2059 56h0"></path>
<g class="non-terminal ">
<path d="M1792 56h0"></path>
<path d="M1866 56h0"></path>
<rect x="1792" y="45" width="74" height="22"></rect>
<text x="1829" y="60">HAVING</text>
</g>
<path d="M1866 56h10"></path>
<path d="M1876 56h10"></path>
<g class="terminal ">
<path d="M1886 56h0"></path>
<path d="M2059 56h0"></path>
<rect x="1886" y="45" width="173" height="22" rx="10" ry="10"></rect>
<text x="1972.5" y="60">booleanExpression</text>
</g>
</g>
<path d="M2059 56h36"></path>
</g>
</g>
<path d="M2095 56h10"></path>
<path d="M2105 56h10"></path>
<g>
<path d="M2115 56h0"></path>
<path d="M2803 56h0"></path>
<g>
<path d="M2115 56h0"></path>
<path d="M2803 56h0"></path>
<path d="M2115 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M2151 20h616"></path>
</g>
<path d="M2767 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M2115 56h36"></path>
<g>
<path d="M2151 56h0"></path>
<path d="M2767 56h0"></path>
<g class="non-terminal ">
<path d="M2151 56h0"></path>
<path d="M2225 56h0"></path>
<rect x="2151" y="45" width="74" height="22"></rect>
<text x="2188" y="60">WINDOW</text>
</g>
<path d="M2225 56h10"></path>
<path d="M2235 56h10"></path>
<g class="terminal ">
<path d="M2245 56h0"></path>
<path d="M2355 56h0"></path>
<rect x="2245" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="2300" y="60">windowName</text>
</g>
<path d="M2355 56h10"></path>
<path d="M2365 56h10"></path>
<g class="non-terminal ">
<path d="M2375 56h0"></path>
<path d="M2413 56h0"></path>
<rect x="2375" y="45" width="38" height="22"></rect>
<text x="2394" y="60">AS</text>
</g>
<path d="M2413 56h10"></path>
<path d="M2423 56h10"></path>
<g>
<path d="M2433 56h0"></path>
<path d="M2767 56h0"></path>
<path d="M2433 56h18"></path>
<g>
<path d="M2451 56h0"></path>
<path d="M2749 56h0"></path>
<g class="terminal ">
<path d="M2451 56h0"></path>
<path d="M2561 56h0"></path>
<rect x="2451" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="2506" y="60">windowName</text>
</g>
<path d="M2561 56h10"></path>
<path d="M2571 56h10"></path>
<g class="non-terminal ">
<path d="M2581 56h0"></path>
<path d="M2619 56h0"></path>
<rect x="2581" y="45" width="38" height="22"></rect>
<text x="2600" y="60">AS</text>
</g>
<path d="M2619 56h10"></path>
<path d="M2629 56h10"></path>
<g class="terminal ">
<path d="M2639 56h0"></path>
<path d="M2749 56h0"></path>
<rect x="2639" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="2694" y="60">windowSpec</text>
</g>
</g>
<path d="M2749 56h18"></path>
<path d="M2451 56a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M2451 92h298"></path>
</g>
<path d="M2749 92a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M2767 56h36"></path>
</g>
</g>
<path d="M2803 56h10"></path>
<path d="M 2813 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="667" height="148" viewBox="0 0 667 148">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M370 56h0"></path>
<g class="non-terminal ">
<path d="M50 56h0"></path>
<path d="M124 56h0"></path>
<rect x="50" y="45" width="74" height="22"></rect>
<text x="87" y="60">SELECT</text>
</g>
<path d="M124 56h10"></path>
<g>
<path d="M134 56h0"></path>
<path d="M370 56h0"></path>
<path d="M134 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M170 20h164"></path>
</g>
<path d="M334 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M134 56h36"></path>
<g>
<path d="M170 56h0"></path>
<path d="M334 56h0"></path>
<path d="M170 56h36"></path>
<g>
<path d="M206 56h22.5"></path>
<path d="M275.5 56h22.5"></path>
<g class="non-terminal ">
<path d="M228.5 56h0"></path>
<path d="M275.5 56h0"></path>
<rect x="228.5" y="45" width="47" height="22"></rect>
<text x="252" y="60">ALL</text>
</g>
</g>
<path d="M298 56h36"></path>
<path d="M170 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M206 92h0"></path>
<path d="M298 92h0"></path>
<g class="non-terminal ">
<path d="M206 92h0"></path>
<path d="M298 92h0"></path>
<rect x="206" y="81" width="92" height="22"></rect>
<text x="252" y="96">DISTINCT</text>
</g>
</g>
<path d="M298 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M334 56h36"></path>
</g>
</g>
<path d="M370 56h10"></path>
<path d="M380 56h10"></path>
<g>
<path d="M390 56h0"></path>
<path d="M617 56h0"></path>
<g>
<path d="M390 56h0"></path>
<path d="M617 56h0"></path>
<g>
<path d="M390 56h0"></path>
<path d="M617 56h0"></path>
<path d="M390 56h36"></path>
<g>
<path d="M426 56h63"></path>
<path d="M518 56h63"></path>
<g class="terminal ">
<path d="M489 56h0"></path>
<path d="M518 56h0"></path>
<rect x="489" y="45" width="29" height="22" rx="10" ry="10"></rect>
<text x="503.5" y="60">&#42;</text>
</g>
</g>
<path d="M581 56h36"></path>
<path d="M390 56a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M426 92h0"></path>
<path d="M581 92h0"></path>
<g>
<path d="M426 92h0"></path>
<path d="M581 92h0"></path>
<path d="M426 92h18"></path>
<g>
<path d="M444 92h0"></path>
<path d="M563 92h0"></path>
<g class="terminal ">
<path d="M444 92h0"></path>
<path d="M563 92h0"></path>
<rect x="444" y="81" width="119" height="22" rx="10" ry="10"></rect>
<text x="503.5" y="96">projectItem</text>
</g>
</g>
<path d="M563 92h18"></path>
<path d="M444 92a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M444 128h119"></path>
</g>
<path d="M563 128a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M581 92a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
</g>
</g>
<path d="M617 56h10"></path>
<path d="M 627 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="583" height="131" viewBox="0 0 583 131">
<g transform="translate(.5 .5)">
<g>
<path d="M20 54v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 64h0"></path>
<path d="M543 64h0"></path>
<path d="M40 64h36"></path>
<g>
<path d="M76 64h0"></path>
<path d="M507 64h0"></path>
<g class="terminal ">
<path d="M76 64h0"></path>
<path d="M186 64h0"></path>
<rect x="76" y="53" width="110" height="22" rx="10" ry="10"></rect>
<text x="131" y="68">expression</text>
</g>
<path d="M186 64h10"></path>
<g>
<path d="M196 64h0"></path>
<path d="M507 64h0"></path>
<path d="M196 64a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M232 20h239"></path>
</g>
<path d="M471 20a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M196 64h36"></path>
<g>
<path d="M232 64h0"></path>
<path d="M471 64h0"></path>
<g>
<path d="M232 64h0"></path>
<path d="M342 64h0"></path>
<path d="M232 64a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M268 28h38"></path>
</g>
<path d="M306 28a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M232 64h36"></path>
<g>
<path d="M268 64h0"></path>
<path d="M306 64h0"></path>
<g class="non-terminal ">
<path d="M268 64h0"></path>
<path d="M306 64h0"></path>
<rect x="268" y="53" width="38" height="22"></rect>
<text x="287" y="68">AS</text>
</g>
</g>
<path d="M306 64h36"></path>
</g>
<path d="M342 64h10"></path>
<g class="terminal ">
<path d="M352 64h0"></path>
<path d="M471 64h0"></path>
<rect x="352" y="53" width="119" height="22" rx="10" ry="10"></rect>
<text x="411.5" y="68">columnAlias</text>
</g>
</g>
<path d="M471 64h36"></path>
</g>
</g>
<path d="M507 64h36"></path>
<path d="M40 64a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 100h111.5"></path>
<path d="M395.5 100h111.5"></path>
<g class="terminal ">
<path d="M187.5 100h0"></path>
<path d="M297.5 100h0"></path>
<rect x="187.5" y="89" width="110" height="22" rx="10" ry="10"></rect>
<text x="242.5" y="104">tableAlias</text>
</g>
<path d="M297.5 100h10"></path>
<path d="M307.5 100h10"></path>
<g class="terminal ">
<path d="M317.5 100h0"></path>
<path d="M346.5 100h0"></path>
<rect x="317.5" y="89" width="29" height="22" rx="10" ry="10"></rect>
<text x="332" y="104">.</text>
</g>
<path d="M346.5 100h10"></path>
<path d="M356.5 100h10"></path>
<g class="terminal ">
<path d="M366.5 100h0"></path>
<path d="M395.5 100h0"></path>
<rect x="366.5" y="89" width="29" height="22" rx="10" ry="10"></rect>
<text x="381" y="104">&#42;</text>
</g>
</g>
<path d="M507 100a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M 543 64 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1364" height="307" viewBox="0 0 1364 307">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M1324 31h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h515"></path>
<path d="M773 31h515"></path>
<g>
<path d="M591 31h0"></path>
<path d="M773 31h0"></path>
<path d="M591 31h18"></path>
<g>
<path d="M609 31h0"></path>
<path d="M755 31h0"></path>
<g class="terminal ">
<path d="M609 31h0"></path>
<path d="M755 31h0"></path>
<rect x="609" y="20" width="146" height="22" rx="10" ry="10"></rect>
<text x="682" y="35">tableReference</text>
</g>
</g>
<path d="M755 31h18"></path>
<path d="M609 31a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M609 67h146"></path>
</g>
<path d="M755 67a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M1288 31h36"></path>
<path d="M40 31a18 18 0 0 1 18 18v52a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 119h0"></path>
<path d="M1288 119h0"></path>
<g class="terminal ">
<path d="M76 119h0"></path>
<path d="M231 119h0"></path>
<rect x="76" y="108" width="155" height="22" rx="10" ry="10"></rect>
<text x="153.5" y="123">tableExpression</text>
</g>
<path d="M231 119h10"></path>
<g>
<path d="M241 119h0"></path>
<path d="M396 119h0"></path>
<path d="M241 119a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M277 83h83"></path>
</g>
<path d="M360 83a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M241 119h36"></path>
<g>
<path d="M277 119h0"></path>
<path d="M360 119h0"></path>
<g class="non-terminal ">
<path d="M277 119h0"></path>
<path d="M360 119h0"></path>
<rect x="277" y="108" width="83" height="22"></rect>
<text x="318.5" y="123">NATURAL</text>
</g>
</g>
<path d="M360 119h36"></path>
</g>
<g>
<path d="M396 119h0"></path>
<path d="M828 119h0"></path>
<path d="M396 119a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M432 75h360"></path>
</g>
<path d="M792 75a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M396 119h36"></path>
<g>
<path d="M432 119h0"></path>
<path d="M792 119h0"></path>
<g>
<path d="M432 119h0"></path>
<path d="M645 119h0"></path>
<g>
<path d="M432 119h0"></path>
<path d="M645 119h0"></path>
<path d="M432 119h36"></path>
<g>
<path d="M468 119h42.5"></path>
<path d="M566.5 119h42.5"></path>
<g class="non-terminal ">
<path d="M510.5 119h0"></path>
<path d="M566.5 119h0"></path>
<rect x="510.5" y="108" width="56" height="22"></rect>
<text x="538.5" y="123">LEFT</text>
</g>
</g>
<path d="M609 119h36"></path>
<path d="M432 119a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M468 155h0"></path>
<path d="M609 155h0"></path>
<g class="non-terminal ">
<path d="M468 155h0"></path>
<path d="M533 155h0"></path>
<rect x="468" y="144" width="65" height="22"></rect>
<text x="500.5" y="159">RIGHT</text>
</g>
<path d="M533 155h10"></path>
<path d="M543 155h10"></path>
<g class="non-terminal ">
<path d="M553 155h0"></path>
<path d="M609 155h0"></path>
<rect x="553" y="144" width="56" height="22"></rect>
<text x="581" y="159">FULL</text>
</g>
</g>
<path d="M609 155a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
</g>
<path d="M645 119h10"></path>
<g>
<path d="M655 119h0"></path>
<path d="M792 119h0"></path>
<path d="M655 119a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M691 83h65"></path>
</g>
<path d="M756 83a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M655 119h36"></path>
<g>
<path d="M691 119h0"></path>
<path d="M756 119h0"></path>
<g class="non-terminal ">
<path d="M691 119h0"></path>
<path d="M756 119h0"></path>
<rect x="691" y="108" width="65" height="22"></rect>
<text x="723.5" y="123">OUTER</text>
</g>
</g>
<path d="M756 119h36"></path>
</g>
</g>
<path d="M792 119h36"></path>
</g>
<path d="M828 119h10"></path>
<g class="non-terminal ">
<path d="M838 119h0"></path>
<path d="M894 119h0"></path>
<rect x="838" y="108" width="56" height="22"></rect>
<text x="866" y="123">JOIN</text>
</g>
<path d="M894 119h10"></path>
<path d="M904 119h10"></path>
<g class="terminal ">
<path d="M914 119h0"></path>
<path d="M1069 119h0"></path>
<rect x="914" y="108" width="155" height="22" rx="10" ry="10"></rect>
<text x="991.5" y="123">tableExpression</text>
</g>
<path d="M1069 119h10"></path>
<g>
<path d="M1079 119h0"></path>
<path d="M1288 119h0"></path>
<path d="M1079 119a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M1115 83h137"></path>
</g>
<path d="M1252 83a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M1079 119h36"></path>
<g>
<path d="M1115 119h0"></path>
<path d="M1252 119h0"></path>
<g class="terminal ">
<path d="M1115 119h0"></path>
<path d="M1252 119h0"></path>
<rect x="1115" y="108" width="137" height="22" rx="10" ry="10"></rect>
<text x="1183.5" y="123">joinCondition</text>
</g>
</g>
<path d="M1252 119h36"></path>
</g>
</g>
<path d="M1288 119a18 18 0 0 0 18 -18v-52a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v118a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 185h360.5"></path>
<path d="M927.5 185h360.5"></path>
<g class="terminal ">
<path d="M436.5 185h0"></path>
<path d="M591.5 185h0"></path>
<rect x="436.5" y="174" width="155" height="22" rx="10" ry="10"></rect>
<text x="514" y="189">tableExpression</text>
</g>
<path d="M591.5 185h10"></path>
<path d="M601.5 185h10"></path>
<g class="non-terminal ">
<path d="M611.5 185h0"></path>
<path d="M676.5 185h0"></path>
<rect x="611.5" y="174" width="65" height="22"></rect>
<text x="644" y="189">CROSS</text>
</g>
<path d="M676.5 185h10"></path>
<path d="M686.5 185h10"></path>
<g class="non-terminal ">
<path d="M696.5 185h0"></path>
<path d="M752.5 185h0"></path>
<rect x="696.5" y="174" width="56" height="22"></rect>
<text x="724.5" y="189">JOIN</text>
</g>
<path d="M752.5 185h10"></path>
<path d="M762.5 185h10"></path>
<g class="terminal ">
<path d="M772.5 185h0"></path>
<path d="M927.5 185h0"></path>
<rect x="772.5" y="174" width="155" height="22" rx="10" ry="10"></rect>
<text x="850" y="189">tableExpression</text>
</g>
</g>
<path d="M1288 185a18 18 0 0 0 18 -18v-118a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v173a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 240h294"></path>
<path d="M994 240h294"></path>
<g class="terminal ">
<path d="M370 240h0"></path>
<path d="M525 240h0"></path>
<rect x="370" y="229" width="155" height="22" rx="10" ry="10"></rect>
<text x="447.5" y="244">tableExpression</text>
</g>
<path d="M525 240h10"></path>
<g>
<path d="M535 240h0"></path>
<path d="M744 240h0"></path>
<path d="M535 240a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M571 204h137"></path>
</g>
<path d="M708 204a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M535 240h36"></path>
<g>
<path d="M571 240h0"></path>
<path d="M708 240h0"></path>
<path d="M571 240h36"></path>
<g>
<path d="M607 240h0"></path>
<path d="M672 240h0"></path>
<g class="non-terminal ">
<path d="M607 240h0"></path>
<path d="M672 240h0"></path>
<rect x="607" y="229" width="65" height="22"></rect>
<text x="639.5" y="244">CROSS</text>
</g>
</g>
<path d="M672 240h36"></path>
<path d="M571 240a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M607 276h0"></path>
<path d="M672 276h0"></path>
<g class="non-terminal ">
<path d="M607 276h0"></path>
<path d="M672 276h0"></path>
<rect x="607" y="265" width="65" height="22"></rect>
<text x="639.5" y="280">OUTER</text>
</g>
</g>
<path d="M672 276a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M708 240h36"></path>
</g>
<path d="M744 240h10"></path>
<g class="non-terminal ">
<path d="M754 240h0"></path>
<path d="M819 240h0"></path>
<rect x="754" y="229" width="65" height="22"></rect>
<text x="786.5" y="244">APPLY</text>
</g>
<path d="M819 240h10"></path>
<path d="M829 240h10"></path>
<g class="terminal ">
<path d="M839 240h0"></path>
<path d="M994 240h0"></path>
<rect x="839" y="229" width="155" height="22" rx="10" ry="10"></rect>
<text x="916.5" y="244">tableExpression</text>
</g>
</g>
<path d="M1288 240a18 18 0 0 0 18 -18v-173a18 18 0 0 1 18 -18"></path>
</g>
<path d="M 1324 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="445" height="123" viewBox="0 0 445 123">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M405 31h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h31"></path>
<path d="M338 31h31"></path>
<g class="non-terminal ">
<path d="M107 31h0"></path>
<path d="M145 31h0"></path>
<rect x="107" y="20" width="38" height="22"></rect>
<text x="126" y="35">ON</text>
</g>
<path d="M145 31h10"></path>
<path d="M155 31h10"></path>
<g class="terminal ">
<path d="M165 31h0"></path>
<path d="M338 31h0"></path>
<rect x="165" y="20" width="173" height="22" rx="10" ry="10"></rect>
<text x="251.5" y="35">booleanExpression</text>
</g>
</g>
<path d="M369 31h36"></path>
<path d="M40 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 67h0"></path>
<path d="M369 67h0"></path>
<g class="non-terminal ">
<path d="M76 67h0"></path>
<path d="M141 67h0"></path>
<rect x="76" y="56" width="65" height="22"></rect>
<text x="108.5" y="71">USING</text>
</g>
<path d="M141 67h10"></path>
<path d="M151 67h10"></path>
<g class="terminal ">
<path d="M161 67h0"></path>
<path d="M190 67h0"></path>
<rect x="161" y="56" width="29" height="22" rx="10" ry="10"></rect>
<text x="175.5" y="71">(</text>
</g>
<path d="M190 67h10"></path>
<path d="M200 67h10"></path>
<g>
<path d="M210 67h0"></path>
<path d="M320 67h0"></path>
<path d="M210 67h18"></path>
<g>
<path d="M228 67h0"></path>
<path d="M302 67h0"></path>
<g class="terminal ">
<path d="M228 67h0"></path>
<path d="M302 67h0"></path>
<rect x="228" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="265" y="71">column</text>
</g>
</g>
<path d="M302 67h18"></path>
<path d="M228 67a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M228 103h74"></path>
</g>
<path d="M302 103a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M320 67h10"></path>
<path d="M330 67h10"></path>
<g class="terminal ">
<path d="M340 67h0"></path>
<path d="M369 67h0"></path>
<rect x="340" y="56" width="29" height="22" rx="10" ry="10"></rect>
<text x="354.5" y="71">)</text>
</g>
</g>
<path d="M369 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M 405 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1051" height="120" viewBox="0 0 1051 120">
<g transform="translate(.5 .5)">
<g>
<path d="M20 54v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 64h10"></path>
<g>
<path d="M50 64h0"></path>
<path d="M151 64h0"></path>
<g class="terminal ">
<path d="M50 64h0"></path>
<path d="M151 64h0"></path>
<rect x="50" y="53" width="101" height="22" rx="10" ry="10"></rect>
<text x="100.5" y="68">tableName</text>
</g>
</g>
<path d="M151 64h10"></path>
<path d="M161 64h10"></path>
<g>
<path d="M171 64h0"></path>
<path d="M389 64h0"></path>
<g>
<path d="M171 64h0"></path>
<path d="M389 64h0"></path>
<path d="M171 64a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M207 28h146"></path>
</g>
<path d="M353 28a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M171 64h36"></path>
<g>
<path d="M207 64h0"></path>
<path d="M353 64h0"></path>
<g class="terminal ">
<path d="M207 64h0"></path>
<path d="M353 64h0"></path>
<rect x="207" y="53" width="146" height="22" rx="10" ry="10"></rect>
<text x="280" y="68">matchRecognize</text>
</g>
</g>
<path d="M353 64h36"></path>
</g>
</g>
<path d="M389 64h10"></path>
<path d="M399 64h10"></path>
<g>
<path d="M409 64h0"></path>
<path d="M1001 64h0"></path>
<g>
<path d="M409 64h0"></path>
<path d="M1001 64h0"></path>
<path d="M409 64a18 18 0 0 0 18 -18v-8a18 18 0 0 1 18 -18"></path>
<g>
<path d="M445 20h520"></path>
</g>
<path d="M965 20a18 18 0 0 1 18 18v8a18 18 0 0 0 18 18"></path>
<path d="M409 64h36"></path>
<g>
<path d="M445 64h0"></path>
<path d="M965 64h0"></path>
<g>
<path d="M445 64h0"></path>
<path d="M555 64h0"></path>
<path d="M445 64a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M481 28h38"></path>
</g>
<path d="M519 28a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M445 64h36"></path>
<g>
<path d="M481 64h0"></path>
<path d="M519 64h0"></path>
<g class="non-terminal ">
<path d="M481 64h0"></path>
<path d="M519 64h0"></path>
<rect x="481" y="53" width="38" height="22"></rect>
<text x="500" y="68">AS</text>
</g>
</g>
<path d="M519 64h36"></path>
</g>
<path d="M555 64h10"></path>
<g class="terminal ">
<path d="M565 64h0"></path>
<path d="M630 64h0"></path>
<rect x="565" y="53" width="65" height="22" rx="10" ry="10"></rect>
<text x="597.5" y="68">alias</text>
</g>
<path d="M630 64h10"></path>
<g>
<path d="M640 64h0"></path>
<path d="M965 64h0"></path>
<path d="M640 64a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M676 28h253"></path>
</g>
<path d="M929 28a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M640 64h36"></path>
<g>
<path d="M676 64h0"></path>
<path d="M929 64h0"></path>
<g class="terminal ">
<path d="M676 64h0"></path>
<path d="M705 64h0"></path>
<rect x="676" y="53" width="29" height="22" rx="10" ry="10"></rect>
<text x="690.5" y="68">(</text>
</g>
<path d="M705 64h10"></path>
<path d="M715 64h10"></path>
<g>
<path d="M725 64h0"></path>
<path d="M880 64h0"></path>
<path d="M725 64h18"></path>
<g>
<path d="M743 64h0"></path>
<path d="M862 64h0"></path>
<g class="terminal ">
<path d="M743 64h0"></path>
<path d="M862 64h0"></path>
<rect x="743" y="53" width="119" height="22" rx="10" ry="10"></rect>
<text x="802.5" y="68">columnAlias</text>
</g>
</g>
<path d="M862 64h18"></path>
<path d="M743 64a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M743 100h119"></path>
</g>
<path d="M862 100a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M880 64h10"></path>
<path d="M890 64h10"></path>
<g class="terminal ">
<path d="M900 64h0"></path>
<path d="M929 64h0"></path>
<rect x="900" y="53" width="29" height="22" rx="10" ry="10"></rect>
<text x="914.5" y="68">)</text>
</g>
</g>
<path d="M929 64h36"></path>
</g>
</g>
<path d="M965 64h36"></path>
</g>
</g>
<path d="M1001 64h10"></path>
<path d="M 1011 64 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="1056" height="412" viewBox="0 0 1056 412">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 56h0"></path>
<path d="M1016 56h0"></path>
<path d="M40 56h36"></path>
<g>
<path d="M76 56h281"></path>
<path d="M699 56h281"></path>
<g>
<path d="M357 56h0"></path>
<path d="M588 56h0"></path>
<path d="M357 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M393 20h159"></path>
</g>
<path d="M552 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M357 56h36"></path>
<g>
<path d="M393 56h0"></path>
<path d="M552 56h0"></path>
<g class="terminal ">
<path d="M393 56h0"></path>
<path d="M503 56h0"></path>
<rect x="393" y="45" width="110" height="22" rx="10" ry="10"></rect>
<text x="448" y="60">schemaName</text>
</g>
<path d="M503 56h10"></path>
<path d="M513 56h10"></path>
<g class="terminal ">
<path d="M523 56h0"></path>
<path d="M552 56h0"></path>
<rect x="523" y="45" width="29" height="22" rx="10" ry="10"></rect>
<text x="537.5" y="60">.</text>
</g>
</g>
<path d="M552 56h36"></path>
</g>
<path d="M588 56h10"></path>
<g class="terminal ">
<path d="M598 56h0"></path>
<path d="M699 56h0"></path>
<rect x="598" y="45" width="101" height="22" rx="10" ry="10"></rect>
<text x="648.5" y="60">tableName</text>
</g>
</g>
<path d="M980 56h36"></path>
<path d="M40 56a18 18 0 0 1 18 18v19a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 111h194.5"></path>
<path d="M785.5 111h194.5"></path>
<g class="terminal ">
<path d="M270.5 111h0"></path>
<path d="M299.5 111h0"></path>
<rect x="270.5" y="100" width="29" height="22" rx="10" ry="10"></rect>
<text x="285" y="115">(</text>
</g>
<path d="M299.5 111h10"></path>
<path d="M309.5 111h10"></path>
<g class="non-terminal ">
<path d="M319.5 111h0"></path>
<path d="M384.5 111h0"></path>
<rect x="319.5" y="100" width="65" height="22"></rect>
<text x="352" y="115">TABLE</text>
</g>
<path d="M384.5 111h10"></path>
<g>
<path d="M394.5 111h0"></path>
<path d="M625.5 111h0"></path>
<path d="M394.5 111a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M430.5 75h159"></path>
</g>
<path d="M589.5 75a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M394.5 111h36"></path>
<g>
<path d="M430.5 111h0"></path>
<path d="M589.5 111h0"></path>
<g class="terminal ">
<path d="M430.5 111h0"></path>
<path d="M540.5 111h0"></path>
<rect x="430.5" y="100" width="110" height="22" rx="10" ry="10"></rect>
<text x="485.5" y="115">schemaName</text>
</g>
<path d="M540.5 111h10"></path>
<path d="M550.5 111h10"></path>
<g class="terminal ">
<path d="M560.5 111h0"></path>
<path d="M589.5 111h0"></path>
<rect x="560.5" y="100" width="29" height="22" rx="10" ry="10"></rect>
<text x="575" y="115">.</text>
</g>
</g>
<path d="M589.5 111h36"></path>
</g>
<path d="M625.5 111h10"></path>
<g class="terminal ">
<path d="M635.5 111h0"></path>
<path d="M736.5 111h0"></path>
<rect x="635.5" y="100" width="101" height="22" rx="10" ry="10"></rect>
<text x="686" y="115">tableName</text>
</g>
<path d="M736.5 111h10"></path>
<path d="M746.5 111h10"></path>
<g class="terminal ">
<path d="M756.5 111h0"></path>
<path d="M785.5 111h0"></path>
<rect x="756.5" y="100" width="29" height="22" rx="10" ry="10"></rect>
<text x="771" y="115">)</text>
</g>
</g>
<path d="M980 111a18 18 0 0 0 18 -18v-19a18 18 0 0 1 18 -18"></path>
<path d="M40 56a18 18 0 0 1 18 18v74a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 166h196.5"></path>
<path d="M783.5 166h196.5"></path>
<g class="terminal ">
<path d="M272.5 166h0"></path>
<path d="M373.5 166h0"></path>
<rect x="272.5" y="155" width="101" height="22" rx="10" ry="10"></rect>
<text x="323" y="170">tableName</text>
</g>
<path d="M373.5 166h10"></path>
<g>
<path d="M383.5 166h0"></path>
<path d="M529.5 166h0"></path>
<path d="M383.5 166a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M419.5 130h74"></path>
</g>
<path d="M493.5 130a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M383.5 166h36"></path>
<g>
<path d="M419.5 166h0"></path>
<path d="M493.5 166h0"></path>
<g class="non-terminal ">
<path d="M419.5 166h0"></path>
<path d="M493.5 166h0"></path>
<rect x="419.5" y="155" width="74" height="22"></rect>
<text x="456.5" y="170">EXTEND</text>
</g>
</g>
<path d="M493.5 166h36"></path>
</g>
<path d="M529.5 166h10"></path>
<g class="terminal ">
<path d="M539.5 166h0"></path>
<path d="M568.5 166h0"></path>
<rect x="539.5" y="155" width="29" height="22" rx="10" ry="10"></rect>
<text x="554" y="170">(</text>
</g>
<path d="M568.5 166h10"></path>
<path d="M578.5 166h10"></path>
<g>
<path d="M588.5 166h0"></path>
<path d="M734.5 166h0"></path>
<path d="M588.5 166h18"></path>
<g>
<path d="M606.5 166h0"></path>
<path d="M716.5 166h0"></path>
<g class="terminal ">
<path d="M606.5 166h0"></path>
<path d="M716.5 166h0"></path>
<rect x="606.5" y="155" width="110" height="22" rx="10" ry="10"></rect>
<text x="661.5" y="170">columnDecl</text>
</g>
</g>
<path d="M716.5 166h18"></path>
<path d="M606.5 166a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M606.5 202h110"></path>
</g>
<path d="M716.5 202a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M734.5 166h10"></path>
<path d="M744.5 166h10"></path>
<g class="terminal ">
<path d="M754.5 166h0"></path>
<path d="M783.5 166h0"></path>
<rect x="754.5" y="155" width="29" height="22" rx="10" ry="10"></rect>
<text x="769" y="170">)</text>
</g>
</g>
<path d="M980 166a18 18 0 0 0 18 -18v-74a18 18 0 0 1 18 -18"></path>
<path d="M40 56a18 18 0 0 1 18 18v154a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 246h288"></path>
<path d="M692 246h288"></path>
<g>
<path d="M364 246h0"></path>
<path d="M519 246h0"></path>
<path d="M364 246a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M400 210h83"></path>
</g>
<path d="M483 210a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M364 246h36"></path>
<g>
<path d="M400 246h0"></path>
<path d="M483 246h0"></path>
<g class="non-terminal ">
<path d="M400 246h0"></path>
<path d="M483 246h0"></path>
<rect x="400" y="235" width="83" height="22"></rect>
<text x="441.5" y="250">LATERAL</text>
</g>
</g>
<path d="M483 246h36"></path>
</g>
<path d="M519 246h10"></path>
<g class="terminal ">
<path d="M529 246h0"></path>
<path d="M558 246h0"></path>
<rect x="529" y="235" width="29" height="22" rx="10" ry="10"></rect>
<text x="543.5" y="250">(</text>
</g>
<path d="M558 246h10"></path>
<path d="M568 246h10"></path>
<g class="terminal ">
<path d="M578 246h0"></path>
<path d="M643 246h0"></path>
<rect x="578" y="235" width="65" height="22" rx="10" ry="10"></rect>
<text x="610.5" y="250">query</text>
</g>
<path d="M643 246h10"></path>
<path d="M653 246h10"></path>
<g class="terminal ">
<path d="M663 246h0"></path>
<path d="M692 246h0"></path>
<rect x="663" y="235" width="29" height="22" rx="10" ry="10"></rect>
<text x="677.5" y="250">)</text>
</g>
</g>
<path d="M980 246a18 18 0 0 0 18 -18v-154a18 18 0 0 1 18 -18"></path>
<path d="M40 56a18 18 0 0 1 18 18v209a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 301h167"></path>
<path d="M813 301h167"></path>
<g class="non-terminal ">
<path d="M243 301h0"></path>
<path d="M317 301h0"></path>
<rect x="243" y="290" width="74" height="22"></rect>
<text x="280" y="305">UNNEST</text>
</g>
<path d="M317 301h10"></path>
<path d="M327 301h10"></path>
<g class="terminal ">
<path d="M337 301h0"></path>
<path d="M366 301h0"></path>
<rect x="337" y="290" width="29" height="22" rx="10" ry="10"></rect>
<text x="351.5" y="305">(</text>
</g>
<path d="M366 301h10"></path>
<path d="M376 301h10"></path>
<g class="terminal ">
<path d="M386 301h0"></path>
<path d="M496 301h0"></path>
<rect x="386" y="290" width="110" height="22" rx="10" ry="10"></rect>
<text x="441" y="305">expression</text>
</g>
<path d="M496 301h10"></path>
<path d="M506 301h10"></path>
<g class="terminal ">
<path d="M516 301h0"></path>
<path d="M545 301h0"></path>
<rect x="516" y="290" width="29" height="22" rx="10" ry="10"></rect>
<text x="530.5" y="305">)</text>
</g>
<path d="M545 301h10"></path>
<g>
<path d="M555 301h0"></path>
<path d="M813 301h0"></path>
<path d="M555 301a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M591 265h186"></path>
</g>
<path d="M777 265a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M555 301h36"></path>
<g>
<path d="M591 301h0"></path>
<path d="M777 301h0"></path>
<g class="non-terminal ">
<path d="M591 301h0"></path>
<path d="M647 301h0"></path>
<rect x="591" y="290" width="56" height="22"></rect>
<text x="619" y="305">WITH</text>
</g>
<path d="M647 301h10"></path>
<path d="M657 301h10"></path>
<g class="non-terminal ">
<path d="M667 301h0"></path>
<path d="M777 301h0"></path>
<rect x="667" y="290" width="110" height="22"></rect>
<text x="722" y="305">ORDINALITY</text>
</g>
</g>
<path d="M777 301h36"></path>
</g>
</g>
<path d="M980 301a18 18 0 0 0 18 -18v-209a18 18 0 0 1 18 -18"></path>
<path d="M40 56a18 18 0 0 1 18 18v264a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 356h0"></path>
<path d="M980 356h0"></path>
<g>
<path d="M76 356h0"></path>
<path d="M231 356h0"></path>
<path d="M76 356a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M112 320h83"></path>
</g>
<path d="M195 320a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M76 356h36"></path>
<g>
<path d="M112 356h0"></path>
<path d="M195 356h0"></path>
<g class="non-terminal ">
<path d="M112 356h0"></path>
<path d="M195 356h0"></path>
<rect x="112" y="345" width="83" height="22"></rect>
<text x="153.5" y="360">LATERAL</text>
</g>
</g>
<path d="M195 356h36"></path>
</g>
<path d="M231 356h10"></path>
<g class="non-terminal ">
<path d="M241 356h0"></path>
<path d="M306 356h0"></path>
<rect x="241" y="345" width="65" height="22"></rect>
<text x="273.5" y="360">TABLE</text>
</g>
<path d="M306 356h10"></path>
<path d="M316 356h10"></path>
<g class="terminal ">
<path d="M326 356h0"></path>
<path d="M355 356h0"></path>
<rect x="326" y="345" width="29" height="22" rx="10" ry="10"></rect>
<text x="340.5" y="360">(</text>
</g>
<path d="M355 356h10"></path>
<g>
<path d="M365 356h0"></path>
<path d="M529 356h0"></path>
<path d="M365 356a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M401 320h92"></path>
</g>
<path d="M493 320a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M365 356h36"></path>
<g>
<path d="M401 356h0"></path>
<path d="M493 356h0"></path>
<g class="non-terminal ">
<path d="M401 356h0"></path>
<path d="M493 356h0"></path>
<rect x="401" y="345" width="92" height="22"></rect>
<text x="447" y="360">SPECIFIC</text>
</g>
</g>
<path d="M493 356h36"></path>
</g>
<path d="M529 356h10"></path>
<g class="terminal ">
<path d="M539 356h0"></path>
<path d="M667 356h0"></path>
<rect x="539" y="345" width="128" height="22" rx="10" ry="10"></rect>
<text x="603" y="360">functionName</text>
</g>
<path d="M667 356h10"></path>
<path d="M677 356h10"></path>
<g class="terminal ">
<path d="M687 356h0"></path>
<path d="M716 356h0"></path>
<rect x="687" y="345" width="29" height="22" rx="10" ry="10"></rect>
<text x="701.5" y="360">(</text>
</g>
<path d="M716 356h10"></path>
<path d="M726 356h10"></path>
<g>
<path d="M736 356h0"></path>
<path d="M882 356h0"></path>
<path d="M736 356h18"></path>
<g>
<path d="M754 356h0"></path>
<path d="M864 356h0"></path>
<g class="terminal ">
<path d="M754 356h0"></path>
<path d="M864 356h0"></path>
<rect x="754" y="345" width="110" height="22" rx="10" ry="10"></rect>
<text x="809" y="360">expression</text>
</g>
</g>
<path d="M864 356h18"></path>
<path d="M754 356a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M754 392h110"></path>
</g>
<path d="M864 392a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M882 356h10"></path>
<path d="M892 356h10"></path>
<g class="terminal ">
<path d="M902 356h0"></path>
<path d="M931 356h0"></path>
<rect x="902" y="345" width="29" height="22" rx="10" ry="10"></rect>
<text x="916.5" y="360">)</text>
</g>
<path d="M931 356h10"></path>
<path d="M941 356h10"></path>
<g class="terminal ">
<path d="M951 356h0"></path>
<path d="M980 356h0"></path>
<rect x="951" y="345" width="29" height="22" rx="10" ry="10"></rect>
<text x="965.5" y="360">)</text>
</g>
</g>
<path d="M980 356a18 18 0 0 0 18 -18v-264a18 18 0 0 1 18 -18"></path>
</g>
<path d="M 1016 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="455" height="87" viewBox="0 0 455 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 46v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 56h10"></path>
<g>
<path d="M50 56h0"></path>
<path d="M405 56h0"></path>
<g class="terminal ">
<path d="M50 56h0"></path>
<path d="M124 56h0"></path>
<rect x="50" y="45" width="74" height="22" rx="10" ry="10"></rect>
<text x="87" y="60">column</text>
</g>
<path d="M124 56h10"></path>
<path d="M134 56h10"></path>
<g class="terminal ">
<path d="M144 56h0"></path>
<path d="M200 56h0"></path>
<rect x="144" y="45" width="56" height="22" rx="10" ry="10"></rect>
<text x="172" y="60">type</text>
</g>
<path d="M200 56h10"></path>
<g>
<path d="M210 56h0"></path>
<path d="M405 56h0"></path>
<path d="M210 56a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M246 20h123"></path>
</g>
<path d="M369 20a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M210 56h36"></path>
<g>
<path d="M246 56h0"></path>
<path d="M369 56h0"></path>
<g class="non-terminal ">
<path d="M246 56h0"></path>
<path d="M293 56h0"></path>
<rect x="246" y="45" width="47" height="22"></rect>
<text x="269.5" y="60">NOT</text>
</g>
<path d="M293 56h10"></path>
<path d="M303 56h10"></path>
<g class="non-terminal ">
<path d="M313 56h0"></path>
<path d="M369 56h0"></path>
<rect x="313" y="45" width="56" height="22"></rect>
<text x="341" y="60">NULL</text>
</g>
</g>
<path d="M369 56h36"></path>
</g>
</g>
<path d="M405 56h10"></path>
<path d="M 415 56 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="340" height="87" viewBox="0 0 340 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M290 31h0"></path>
<g class="non-terminal ">
<path d="M50 31h0"></path>
<path d="M124 31h0"></path>
<rect x="50" y="20" width="74" height="22"></rect>
<text x="87" y="35">VALUES</text>
</g>
<path d="M124 31h10"></path>
<path d="M134 31h10"></path>
<g>
<path d="M144 31h0"></path>
<path d="M290 31h0"></path>
<path d="M144 31h18"></path>
<g>
<path d="M162 31h0"></path>
<path d="M272 31h0"></path>
<g class="terminal ">
<path d="M162 31h0"></path>
<path d="M272 31h0"></path>
<rect x="162" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="217" y="35">expression</text>
</g>
</g>
<path d="M272 31h18"></path>
<path d="M162 31a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M162 67h110"></path>
</g>
<path d="M272 67a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M290 31h10"></path>
<path d="M 300 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="575" height="318" viewBox="0 0 575 318">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M535 31h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h156.5"></path>
<path d="M342.5 31h156.5"></path>
<g class="terminal ">
<path d="M232.5 31h0"></path>
<path d="M342.5 31h0"></path>
<rect x="232.5" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="287.5" y="35">expression</text>
</g>
</g>
<path d="M499 31h36"></path>
<path d="M40 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 67h172.5"></path>
<path d="M326.5 67h172.5"></path>
<g class="terminal ">
<path d="M248.5 67h0"></path>
<path d="M277.5 67h0"></path>
<rect x="248.5" y="56" width="29" height="22" rx="10" ry="10"></rect>
<text x="263" y="71">(</text>
</g>
<path d="M277.5 67h10"></path>
<path d="M287.5 67h10"></path>
<g class="terminal ">
<path d="M297.5 67h0"></path>
<path d="M326.5 67h0"></path>
<rect x="297.5" y="56" width="29" height="22" rx="10" ry="10"></rect>
<text x="312" y="71">)</text>
</g>
</g>
<path d="M499 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v30a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 97h89.5"></path>
<path d="M409.5 97h89.5"></path>
<g class="terminal ">
<path d="M165.5 97h0"></path>
<path d="M194.5 97h0"></path>
<rect x="165.5" y="86" width="29" height="22" rx="10" ry="10"></rect>
<text x="180" y="101">(</text>
</g>
<path d="M194.5 97h10"></path>
<path d="M204.5 97h10"></path>
<g>
<path d="M214.5 97h0"></path>
<path d="M360.5 97h0"></path>
<path d="M214.5 97h18"></path>
<g>
<path d="M232.5 97h0"></path>
<path d="M342.5 97h0"></path>
<g class="terminal ">
<path d="M232.5 97h0"></path>
<path d="M342.5 97h0"></path>
<rect x="232.5" y="86" width="110" height="22" rx="10" ry="10"></rect>
<text x="287.5" y="101">expression</text>
</g>
</g>
<path d="M342.5 97h18"></path>
<path d="M232.5 97a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M232.5 133h110"></path>
</g>
<path d="M342.5 133a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M360.5 97h10"></path>
<path d="M370.5 97h10"></path>
<g class="terminal ">
<path d="M380.5 97h0"></path>
<path d="M409.5 97h0"></path>
<rect x="380.5" y="86" width="29" height="22" rx="10" ry="10"></rect>
<text x="395" y="101">)</text>
</g>
</g>
<path d="M499 97a18 18 0 0 0 18 -18v-30a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v85a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 152h51.5"></path>
<path d="M447.5 152h51.5"></path>
<g class="non-terminal ">
<path d="M127.5 152h0"></path>
<path d="M183.5 152h0"></path>
<rect x="127.5" y="141" width="56" height="22"></rect>
<text x="155.5" y="156">CUBE</text>
</g>
<path d="M183.5 152h10"></path>
<path d="M193.5 152h10"></path>
<g class="terminal ">
<path d="M203.5 152h0"></path>
<path d="M232.5 152h0"></path>
<rect x="203.5" y="141" width="29" height="22" rx="10" ry="10"></rect>
<text x="218" y="156">(</text>
</g>
<path d="M232.5 152h10"></path>
<path d="M242.5 152h10"></path>
<g>
<path d="M252.5 152h0"></path>
<path d="M398.5 152h0"></path>
<path d="M252.5 152h18"></path>
<g>
<path d="M270.5 152h0"></path>
<path d="M380.5 152h0"></path>
<g class="terminal ">
<path d="M270.5 152h0"></path>
<path d="M380.5 152h0"></path>
<rect x="270.5" y="141" width="110" height="22" rx="10" ry="10"></rect>
<text x="325.5" y="156">expression</text>
</g>
</g>
<path d="M380.5 152h18"></path>
<path d="M270.5 152a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M270.5 188h110"></path>
</g>
<path d="M380.5 188a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M398.5 152h10"></path>
<path d="M408.5 152h10"></path>
<g class="terminal ">
<path d="M418.5 152h0"></path>
<path d="M447.5 152h0"></path>
<rect x="418.5" y="141" width="29" height="22" rx="10" ry="10"></rect>
<text x="433" y="156">)</text>
</g>
</g>
<path d="M499 152a18 18 0 0 0 18 -18v-85a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v140a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 207h42.5"></path>
<path d="M456.5 207h42.5"></path>
<g class="non-terminal ">
<path d="M118.5 207h0"></path>
<path d="M192.5 207h0"></path>
<rect x="118.5" y="196" width="74" height="22"></rect>
<text x="155.5" y="211">ROLLUP</text>
</g>
<path d="M192.5 207h10"></path>
<path d="M202.5 207h10"></path>
<g class="terminal ">
<path d="M212.5 207h0"></path>
<path d="M241.5 207h0"></path>
<rect x="212.5" y="196" width="29" height="22" rx="10" ry="10"></rect>
<text x="227" y="211">(</text>
</g>
<path d="M241.5 207h10"></path>
<path d="M251.5 207h10"></path>
<g>
<path d="M261.5 207h0"></path>
<path d="M407.5 207h0"></path>
<path d="M261.5 207h18"></path>
<g>
<path d="M279.5 207h0"></path>
<path d="M389.5 207h0"></path>
<g class="terminal ">
<path d="M279.5 207h0"></path>
<path d="M389.5 207h0"></path>
<rect x="279.5" y="196" width="110" height="22" rx="10" ry="10"></rect>
<text x="334.5" y="211">expression</text>
</g>
</g>
<path d="M389.5 207h18"></path>
<path d="M279.5 207a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M279.5 243h110"></path>
</g>
<path d="M389.5 243a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M407.5 207h10"></path>
<path d="M417.5 207h10"></path>
<g class="terminal ">
<path d="M427.5 207h0"></path>
<path d="M456.5 207h0"></path>
<rect x="427.5" y="196" width="29" height="22" rx="10" ry="10"></rect>
<text x="442" y="211">)</text>
</g>
</g>
<path d="M499 207a18 18 0 0 0 18 -18v-140a18 18 0 0 1 18 -18"></path>
<path d="M40 31a18 18 0 0 1 18 18v195a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 262h0"></path>
<path d="M499 262h0"></path>
<g class="non-terminal ">
<path d="M76 262h0"></path>
<path d="M168 262h0"></path>
<rect x="76" y="251" width="92" height="22"></rect>
<text x="122" y="266">GROUPING</text>
</g>
<path d="M168 262h10"></path>
<path d="M178 262h10"></path>
<g class="non-terminal ">
<path d="M188 262h0"></path>
<path d="M244 262h0"></path>
<rect x="188" y="251" width="56" height="22"></rect>
<text x="216" y="266">SETS</text>
</g>
<path d="M244 262h10"></path>
<path d="M254 262h10"></path>
<g class="terminal ">
<path d="M264 262h0"></path>
<path d="M293 262h0"></path>
<rect x="264" y="251" width="29" height="22" rx="10" ry="10"></rect>
<text x="278.5" y="266">(</text>
</g>
<path d="M293 262h10"></path>
<path d="M303 262h10"></path>
<g>
<path d="M313 262h0"></path>
<path d="M450 262h0"></path>
<path d="M313 262h18"></path>
<g>
<path d="M331 262h0"></path>
<path d="M432 262h0"></path>
<g class="terminal ">
<path d="M331 262h0"></path>
<path d="M432 262h0"></path>
<rect x="331" y="251" width="101" height="22" rx="10" ry="10"></rect>
<text x="381.5" y="266">groupItem</text>
</g>
</g>
<path d="M432 262h18"></path>
<path d="M331 262a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M331 298h101"></path>
</g>
<path d="M432 298a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
<path d="M450 262h10"></path>
<path d="M460 262h10"></path>
<g class="terminal ">
<path d="M470 262h0"></path>
<path d="M499 262h0"></path>
<rect x="470" y="251" width="29" height="22" rx="10" ry="10"></rect>
<text x="484.5" y="266">)</text>
</g>
</g>
<path d="M499 262a18 18 0 0 0 18 -18v-195a18 18 0 0 1 18 -18"></path>
</g>
<path d="M 535 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
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
<svg class="railroad-diagram" width="262" height="98" viewBox="0 0 262 98">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<g>
<path d="M40 31h0"></path>
<path d="M222 31h0"></path>
<path d="M40 31h36"></path>
<g>
<path d="M76 31h0"></path>
<path d="M186 31h0"></path>
<g class="terminal ">
<path d="M76 31h0"></path>
<path d="M186 31h0"></path>
<rect x="76" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="131" y="35">windowName</text>
</g>
</g>
<path d="M186 31h36"></path>
<path d="M40 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M76 67h0"></path>
<path d="M186 67h0"></path>
<g class="terminal ">
<path d="M76 67h0"></path>
<path d="M186 67h0"></path>
<rect x="76" y="56" width="110" height="22" rx="10" ry="10"></rect>
<text x="131" y="71">windowSpec</text>
</g>
</g>
<path d="M186 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M 222 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</html>
{:/}


{% highlight sql %}

windowSpec:
      [ windowName ]
      '('
      [ ORDER BY orderItem [, orderItem ]* ]
      [ PARTITION BY expression [, expression ]* ]
      [
          RANGE numericOrIntervalExpression { PRECEDING | FOLLOWING }
      |   ROWS numericExpression { PRECEDING | FOLLOWING }
      ]
      ')'

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