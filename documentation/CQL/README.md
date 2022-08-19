---
layout: plain
title:  Contextual Query Language
---

Polypheny's CQL implementation makes some changes and adds many extensions to the [CQL Specification](https://www.loc.gov/standards/sru/cql/spec.html). It does not have prefix assignments or search-term-only filters. It also introduces some more keywords to add more details in the query.

In the current design, the schema takes on the role of Context Set. The schema has tables which in-turn have columns. These two take on the role of index (as specified in the CQL standard spec). `Filters` are operations taking place on columns and `Relations` are the output of combine operation ( Joins or Set Operations ) on tables.

This implementation of CQL for Polypheny was part of [Vishal Dalwadi's](https://github.com/VishalDalwadi) Google Summer of Code 2021 project **Support for Contextual Query Language**.
{:.note}


* this unordered seed list will be replaced by toc as unordered list
{:toc}



## Basics

CQL can be executed using the query console provided by the Polypheny-UI. Additionally, Polypheny also supports an HTTP-Interface, which is able to handle CQL queries. After deploying the interface, CQL queries can be subnitted via HTTP POST request to the specified port (default: 13137) and the corresponding route (`/cql`). The query needs to be placed in the body of the POST request. The result is returned as JSON.

Polypheny's CQL implementation uses fully qualified names instead of indices. For example, column names like `public.emps.emp` and table names like `public.emps`.



## Syntax

Polypheny's CQL Implementation consists of four major parts: Filters, Relations, Sort Specifications and Projections.
The format of each of these is discussed later. The basic syntax of a query consisting of these four parts is shown
below. The parser is case-insensitive when it comes to keywords (such as modifiers, boolean operators or comparison
operators) but is case-sensitive when it comes to names and literals (such column names, table names or literal 
values in filters). 

{% highlight sql %}

{% endhighlight %}
### CQL Query:
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
<svg class="railroad-diagram" width="535" height="287" viewBox="0 0 535 287">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h10"></path>
<path d="M457 31h10"></path>
<g>
<path d="M78 31h0"></path>
<path d="M457 31h0"></path>
<g>
<path d="M78 31h0"></path>
<g>
<path d="M78 31h0"></path>
<path d="M457 31h0"></path>
<path d="M78 31h36"></path>
<g>
<path d="M114 31h112"></path>
<path d="M309 31h112"></path>
<g class="terminal ">
<path d="M226 31h0"></path>
<path d="M309 31h0"></path>
<rect x="226" y="20" width="83" height="22" rx="10" ry="10"></rect>
<text x="267.5" y="35">Filters</text>
</g>
</g>
<path d="M421 31h36"></path>
<path d="M78 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 67h51.5"></path>
<path d="M369.5 67h51.5"></path>
<g class="terminal ">
<path d="M165.5 67h0"></path>
<path d="M257.5 67h0"></path>
<rect x="165.5" y="56" width="92" height="22" rx="10" ry="10"></rect>
<text x="211.5" y="71">relation</text>
</g>
<path d="M257.5 67h10"></path>
<path d="M267.5 67h10"></path>
<g class="terminal ">
<path d="M277.5 67h0"></path>
<path d="M369.5 67h0"></path>
<rect x="277.5" y="56" width="92" height="22" rx="10" ry="10"></rect>
<text x="323.5" y="71">Relation</text>
</g>
</g>
<path d="M421 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M78 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 101h0"></path>
<path d="M421 101h0"></path>
<g class="terminal ">
<path d="M114 101h0"></path>
<path d="M197 101h0"></path>
<rect x="114" y="90" width="83" height="22" rx="10" ry="10"></rect>
<text x="155.5" y="105">Filters</text>
</g>
<path d="M197 101h10"></path>
<path d="M207 101h10"></path>
<g class="terminal ">
<path d="M217 101h0"></path>
<path d="M309 101h0"></path>
<rect x="217" y="90" width="92" height="22" rx="10" ry="10"></rect>
<text x="263" y="105">relation</text>
</g>
<path d="M309 101h10"></path>
<path d="M319 101h10"></path>
<g class="terminal ">
<path d="M329 101h0"></path>
<path d="M421 101h0"></path>
<rect x="329" y="90" width="92" height="22" rx="10" ry="10"></rect>
<text x="375" y="105">Relation</text>
</g>
</g>
<path d="M421 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M457 31h0"></path>
</g>
</g>
</g>
<path d="M467 31a18 18 0 0 1 18 18v57a18 18 0 0 1 -18 18h-399a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 172h20"></path>
<path d="M447 172h20"></path>
<g>
<path d="M88 172h0"></path>
<path d="M447 172h0"></path>
<path d="M88 172a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M124 136h287"></path>
</g>
<path d="M411 136a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M88 172h36"></path>
<g>
<path d="M124 172h0"></path>
<g>
<path d="M124 172h10"></path>
<path d="M401 172h10"></path>
<g class="terminal ">
<path d="M134 172h0"></path>
<path d="M208 172h0"></path>
<rect x="134" y="161" width="74" height="22" rx="10" ry="10"></rect>
<text x="171" y="176">sortby</text>
</g>
<path d="M208 172h10"></path>
<path d="M218 172h10"></path>
<g class="terminal ">
<path d="M228 172h0"></path>
<path d="M401 172h0"></path>
<rect x="228" y="161" width="173" height="22" rx="10" ry="10"></rect>
<text x="314.5" y="176">SortSpecification</text>
</g>
</g>
<path d="M411 172h0"></path>
</g>
<path d="M411 172h36"></path>
</g>
</g>
<path d="M467 172a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-399a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 256h47"></path>
<path d="M420 256h47"></path>
<g>
<path d="M115 256h0"></path>
<path d="M420 256h0"></path>
<path d="M115 256a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M151 220h233"></path>
</g>
<path d="M384 220a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M115 256h36"></path>
<g>
<path d="M151 256h0"></path>
<g>
<path d="M151 256h10"></path>
<path d="M374 256h10"></path>
<g class="terminal ">
<path d="M161 256h0"></path>
<path d="M244 256h0"></path>
<rect x="161" y="245" width="83" height="22" rx="10" ry="10"></rect>
<text x="202.5" y="260">project</text>
</g>
<path d="M244 256h10"></path>
<path d="M254 256h10"></path>
<g class="terminal ">
<path d="M264 256h0"></path>
<path d="M374 256h0"></path>
<rect x="264" y="245" width="110" height="22" rx="10" ry="10"></rect>
<text x="319" y="260">Projection</text>
</g>
</g>
<path d="M384 256h0"></path>
</g>
<path d="M384 256h36"></path>
</g>
</g>
<path d="M467 256h18"></path>
<path d="M485 256h0"></path>
</g>
<path d="M485 256h10"></path>
<path d="M 495 256 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### Filters:
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
<svg class="railroad-diagram" width="461" height="132" viewBox="0 0 461 132">
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
<path d="M86 31h93"></path>
<path d="M282 31h93"></path>
<g>
<path d="M179 31h0"></path>
<path d="M282 31h0"></path>
<g>
<path d="M179 31h0"></path>
<g>
<path d="M179 31h10"></path>
<path d="M272 31h10"></path>
<g class="terminal ">
<path d="M189 31h0"></path>
<path d="M272 31h0"></path>
<rect x="189" y="20" width="83" height="22" rx="10" ry="10"></rect>
<text x="230.5" y="35">Filters</text>
</g>
</g>
<path d="M282 31h0"></path>
</g>
</g>
</g>
<path d="M375 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h0"></path>
<path d="M375 67h0"></path>
<g class="terminal ">
<path d="M86 67h0"></path>
<path d="M160 67h0"></path>
<rect x="86" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="123" y="71">Filter</text>
</g>
<path d="M160 67h10"></path>
<path d="M170 67h10"></path>
<g class="terminal ">
<path d="M180 67h0"></path>
<path d="M281 67h0"></path>
<rect x="180" y="56" width="101" height="22" rx="10" ry="10"></rect>
<text x="230.5" y="71">BooleanOp</text>
</g>
<path d="M281 67h10"></path>
<path d="M291 67h10"></path>
<g class="terminal ">
<path d="M301 67h0"></path>
<path d="M375 67h0"></path>
<rect x="301" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="338" y="71">Filter</text>
</g>
</g>
<path d="M375 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 101h107.5"></path>
<path d="M267.5 101h107.5"></path>
<g class="terminal ">
<path d="M193.5 101h0"></path>
<path d="M267.5 101h0"></path>
<rect x="193.5" y="90" width="74" height="22" rx="10" ry="10"></rect>
<text x="230.5" y="105">Filter</text>
</g>
</g>
<path d="M375 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M411 31h0"></path>
</g>
<path d="M411 31h10"></path>
<path d="M 421 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### Relation:
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
<svg class="railroad-diagram" width="461" height="98" viewBox="0 0 461 98">
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
<path d="M86 31h0"></path>
<path d="M375 31h0"></path>
<g class="terminal ">
<path d="M86 31h0"></path>
<path d="M151 31h0"></path>
<rect x="86" y="20" width="65" height="22" rx="10" ry="10"></rect>
<text x="118.5" y="35">Table</text>
</g>
<path d="M151 31h10"></path>
<path d="M161 31h10"></path>
<g class="terminal ">
<path d="M171 31h0"></path>
<path d="M263 31h0"></path>
<rect x="171" y="20" width="92" height="22" rx="10" ry="10"></rect>
<text x="217" y="35">Combiner</text>
</g>
<path d="M263 31h10"></path>
<path d="M273 31h10"></path>
<g class="terminal ">
<path d="M283 31h0"></path>
<path d="M375 31h0"></path>
<rect x="283" y="20" width="92" height="22" rx="10" ry="10"></rect>
<text x="329" y="35">Relation</text>
</g>
</g>
<path d="M375 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h112"></path>
<path d="M263 67h112"></path>
<g class="terminal ">
<path d="M198 67h0"></path>
<path d="M263 67h0"></path>
<rect x="198" y="56" width="65" height="22" rx="10" ry="10"></rect>
<text x="230.5" y="71">Table</text>
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
</div></html>
{:/}

### SortSpecification:
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
<svg class="railroad-diagram" width="315" height="62" viewBox="0 0 315 62">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M255 31h10"></path>
<g class="terminal ">
<path d="M60 31h0"></path>
<path d="M134 31h0"></path>
<rect x="60" y="20" width="74" height="22" rx="10" ry="10"></rect>
<text x="97" y="35">Column</text>
</g>
<path d="M134 31h10"></path>
<path d="M144 31h10"></path>
<g class="terminal ">
<path d="M154 31h0"></path>
<path d="M255 31h0"></path>
<rect x="154" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="204.5" y="35">Modifiers</text>
</g>
</g>
<path d="M265 31h0"></path>
</g>
<path d="M265 31h10"></path>
<path d="M 275 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### Projection:
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
<svg class="railroad-diagram" width="315" height="62" viewBox="0 0 315 62">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M255 31h10"></path>
<g class="terminal ">
<path d="M60 31h0"></path>
<path d="M134 31h0"></path>
<rect x="60" y="20" width="74" height="22" rx="10" ry="10"></rect>
<text x="97" y="35">Column</text>
</g>
<path d="M134 31h10"></path>
<path d="M144 31h10"></path>
<g class="terminal ">
<path d="M154 31h0"></path>
<path d="M255 31h0"></path>
<rect x="154" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="204.5" y="35">Modifiers</text>
</g>
</g>
<path d="M265 31h0"></path>
</g>
<path d="M265 31h10"></path>
<path d="M 275 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### Filter:
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
<svg class="railroad-diagram" width="1027" height="98" viewBox="0 0 1027 98">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M967 31h10"></path>
<g class="terminal ">
<path d="M60 31h0"></path>
<path d="M134 31h0"></path>
<rect x="60" y="20" width="74" height="22" rx="10" ry="10"></rect>
<text x="97" y="35">Column</text>
</g>
<path d="M134 31h10"></path>
<path d="M144 31h10"></path>
<g class="terminal ">
<path d="M154 31h0"></path>
<path d="M282 31h0"></path>
<rect x="154" y="20" width="128" height="22" rx="10" ry="10"></rect>
<text x="218" y="35">ComparisonOp</text>
</g>
<path d="M282 31h10"></path>
<path d="M292 31h10"></path>
<g>
<path d="M302 31h0"></path>
<path d="M967 31h0"></path>
<g>
<path d="M302 31h0"></path>
<g>
<path d="M302 31h0"></path>
<path d="M967 31h0"></path>
<path d="M302 31h36"></path>
<g>
<path d="M338 31h259.5"></path>
<path d="M671.5 31h259.5"></path>
<g class="terminal ">
<path d="M597.5 31h0"></path>
<path d="M671.5 31h0"></path>
<rect x="597.5" y="20" width="74" height="22" rx="10" ry="10"></rect>
<text x="634.5" y="35">Column</text>
</g>
</g>
<path d="M931 31h36"></path>
<path d="M302 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M338 67h0"></path>
<path d="M931 67h0"></path>
<g class="terminal ">
<path d="M338 67h0"></path>
<path d="M421 67h0"></path>
<rect x="338" y="56" width="83" height="22" rx="10" ry="10"></rect>
<text x="379.5" y="71">Literal</text>
</g>
<path d="M421 67h10"></path>
<path d="M431 67h10"></path>
<g class="terminal ">
<path d="M441 67h0"></path>
<path d="M506 67h0"></path>
<rect x="441" y="56" width="65" height="22" rx="10" ry="10"></rect>
<text x="473.5" y="71">value</text>
</g>
<path d="M506 67h10"></path>
<path d="M516 67h10"></path>
<g class="terminal ">
<path d="M526 67h0"></path>
<path d="M582 67h0"></path>
<rect x="526" y="56" width="56" height="22" rx="10" ry="10"></rect>
<text x="554" y="71">with</text>
</g>
<path d="M582 67h10"></path>
<path d="M592 67h10"></path>
<g class="terminal ">
<path d="M602 67h0"></path>
<path d="M640 67h0"></path>
<rect x="602" y="56" width="38" height="22" rx="10" ry="10"></rect>
<text x="621" y="71">or</text>
</g>
<path d="M640 67h10"></path>
<path d="M650 67h10"></path>
<g class="terminal ">
<path d="M660 67h0"></path>
<path d="M743 67h0"></path>
<rect x="660" y="56" width="83" height="22" rx="10" ry="10"></rect>
<text x="701.5" y="71">without</text>
</g>
<path d="M743 67h10"></path>
<path d="M753 67h10"></path>
<g class="terminal ">
<path d="M763 67h0"></path>
<path d="M837 67h0"></path>
<rect x="763" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="800" y="71">double</text>
</g>
<path d="M837 67h10"></path>
<path d="M847 67h10"></path>
<g class="terminal ">
<path d="M857 67h0"></path>
<path d="M931 67h0"></path>
<rect x="857" y="56" width="74" height="22" rx="10" ry="10"></rect>
<text x="894" y="71">quotes</text>
</g>
</g>
<path d="M931 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M967 31h0"></path>
</g>
</g>
</g>
<path d="M977 31h0"></path>
</g>
<path d="M977 31h10"></path>
<path d="M 987 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### BooleanOp:
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
<svg class="railroad-diagram" width="284" height="225" viewBox="0 0 284 225">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h10"></path>
<path d="M206 31h10"></path>
<g>
<path d="M78 31h0"></path>
<path d="M206 31h0"></path>
<g>
<path d="M78 31h0"></path>
<g>
<path d="M78 31h0"></path>
<path d="M206 31h0"></path>
<path d="M78 31h36"></path>
<g>
<path d="M114 31h4.5"></path>
<path d="M165.5 31h4.5"></path>
<g class="non-terminal ">
<path d="M118.5 31h0"></path>
<path d="M165.5 31h0"></path>
<rect x="118.5" y="20" width="47" height="22"></rect>
<text x="142" y="35">AND</text>
</g>
</g>
<path d="M170 31h36"></path>
<path d="M78 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 67h9"></path>
<path d="M161 67h9"></path>
<g class="non-terminal ">
<path d="M123 67h0"></path>
<path d="M161 67h0"></path>
<rect x="123" y="56" width="38" height="22"></rect>
<text x="142" y="71">OR</text>
</g>
</g>
<path d="M170 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M78 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 101h4.5"></path>
<path d="M165.5 101h4.5"></path>
<g class="non-terminal ">
<path d="M118.5 101h0"></path>
<path d="M165.5 101h0"></path>
<rect x="118.5" y="90" width="47" height="22"></rect>
<text x="142" y="105">NOT</text>
</g>
</g>
<path d="M170 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M78 31a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 135h0"></path>
<path d="M170 135h0"></path>
<g class="non-terminal ">
<path d="M114 135h0"></path>
<path d="M170 135h0"></path>
<rect x="114" y="124" width="56" height="22"></rect>
<text x="142" y="139">PROX</text>
</g>
</g>
<path d="M170 135a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
</g>
<path d="M206 31h0"></path>
</g>
</g>
</g>
<path d="M216 31a18 18 0 0 1 18 18v91a18 18 0 0 1 -18 18h-148a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 194h23.5"></path>
<path d="M192.5 194h23.5"></path>
<g class="terminal ">
<path d="M91.5 194h0"></path>
<path d="M192.5 194h0"></path>
<rect x="91.5" y="183" width="101" height="22" rx="10" ry="10"></rect>
<text x="142" y="198">Modifiers</text>
</g>
</g>
<path d="M216 194h18"></path>
<path d="M234 194h0"></path>
</g>
<path d="M234 194h10"></path>
<path d="M 244 194 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### Combiner:
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
<svg class="railroad-diagram" width="275" height="157" viewBox="0 0 275 157">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h10"></path>
<path d="M197 31h10"></path>
<g>
<path d="M78 31h0"></path>
<path d="M197 31h0"></path>
<g>
<path d="M78 31h0"></path>
<g>
<path d="M78 31h0"></path>
<path d="M197 31h0"></path>
<path d="M78 31h36"></path>
<g>
<path d="M114 31h0"></path>
<path d="M161 31h0"></path>
<g class="non-terminal ">
<path d="M114 31h0"></path>
<path d="M161 31h0"></path>
<rect x="114" y="20" width="47" height="22"></rect>
<text x="137.5" y="35">AND</text>
</g>
</g>
<path d="M161 31h36"></path>
<path d="M78 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 67h4.5"></path>
<path d="M156.5 67h4.5"></path>
<g class="non-terminal ">
<path d="M118.5 67h0"></path>
<path d="M156.5 67h0"></path>
<rect x="118.5" y="56" width="38" height="22"></rect>
<text x="137.5" y="71">OR</text>
</g>
</g>
<path d="M161 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
</g>
<path d="M197 31h0"></path>
</g>
</g>
</g>
<path d="M207 31a18 18 0 0 1 18 18v23a18 18 0 0 1 -18 18h-139a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 126h19"></path>
<path d="M188 126h19"></path>
<g class="terminal ">
<path d="M87 126h0"></path>
<path d="M188 126h0"></path>
<rect x="87" y="115" width="101" height="22" rx="10" ry="10"></rect>
<text x="137.5" y="130">Modifiers</text>
</g>
</g>
<path d="M207 126h18"></path>
<path d="M225 126h0"></path>
</g>
<path d="M225 126h10"></path>
<path d="M 235 126 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### Column:
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
<svg class="railroad-diagram" width="579" height="62" viewBox="0 0 579 62">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M519 31h10"></path>
<g class="terminal ">
<path d="M60 31h0"></path>
<path d="M170 31h0"></path>
<rect x="60" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="115" y="35">SchemaName</text>
</g>
<path d="M170 31h10"></path>
<path d="M180 31h10"></path>
<g class="terminal ">
<path d="M190 31h0"></path>
<path d="M219 31h0"></path>
<rect x="190" y="20" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="204.5" y="35">.</text>
</g>
<path d="M219 31h10"></path>
<path d="M229 31h10"></path>
<g class="terminal ">
<path d="M239 31h0"></path>
<path d="M340 31h0"></path>
<rect x="239" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="289.5" y="35">TableName</text>
</g>
<path d="M340 31h10"></path>
<path d="M350 31h10"></path>
<g class="terminal ">
<path d="M360 31h0"></path>
<path d="M389 31h0"></path>
<rect x="360" y="20" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="374.5" y="35">.</text>
</g>
<path d="M389 31h10"></path>
<path d="M399 31h10"></path>
<g class="terminal ">
<path d="M409 31h0"></path>
<path d="M519 31h0"></path>
<rect x="409" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="464" y="35">ColumnName</text>
</g>
</g>
<path d="M529 31h0"></path>
</g>
<path d="M529 31h10"></path>
<path d="M 539 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### Modifiers:
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
<svg class="railroad-diagram" width="268" height="87" viewBox="0 0 268 87">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M208 31h10"></path>
<g>
<path d="M60 31h0"></path>
<path d="M208 31h0"></path>
<path d="M60 31h18"></path>
<g>
<path d="M78 31h0"></path>
<g>
<path d="M78 31h10"></path>
<path d="M180 31h10"></path>
<g class="terminal ">
<path d="M88 31h0"></path>
<path d="M180 31h0"></path>
<rect x="88" y="20" width="92" height="22" rx="10" ry="10"></rect>
<text x="134" y="35">Modifier</text>
</g>
</g>
<path d="M190 31h0"></path>
</g>
<path d="M190 31h18"></path>
<path d="M78 31a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M78 67h112"></path>
</g>
<path d="M190 67a18 18 0 0 0 18 -18v0a18 18 0 0 0 -18 -18"></path>
</g>
</g>
<path d="M218 31h0"></path>
</g>
<path d="M218 31h10"></path>
<path d="M 228 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### Modifier:
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
<svg class="railroad-diagram" width="533" height="146" viewBox="0 0 533 146">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h110"></path>
<path d="M355 31h110"></path>
<g class="terminal ">
<path d="M178 31h0"></path>
<path d="M207 31h0"></path>
<rect x="178" y="20" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="192.5" y="35">/</text>
</g>
<path d="M207 31h10"></path>
<path d="M217 31h10"></path>
<g class="terminal ">
<path d="M227 31h0"></path>
<path d="M355 31h0"></path>
<rect x="227" y="20" width="128" height="22" rx="10" ry="10"></rect>
<text x="291" y="35">ModifierName</text>
</g>
</g>
<path d="M465 31a18 18 0 0 1 18 18v0a18 18 0 0 1 -18 18h-397a18 18 0 0 0 -18 18v12a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 115h10"></path>
<path d="M455 115h10"></path>
<g>
<path d="M78 115h0"></path>
<path d="M455 115h0"></path>
<path d="M78 115a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<g>
<path d="M114 79h305"></path>
</g>
<path d="M419 79a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<path d="M78 115h36"></path>
<g>
<path d="M114 115h0"></path>
<g>
<path d="M114 115h10"></path>
<path d="M409 115h10"></path>
<g class="terminal ">
<path d="M124 115h0"></path>
<path d="M252 115h0"></path>
<rect x="124" y="104" width="128" height="22" rx="10" ry="10"></rect>
<text x="188" y="119">ComparisonOp</text>
</g>
<path d="M252 115h10"></path>
<path d="M262 115h10"></path>
<g class="terminal ">
<path d="M272 115h0"></path>
<path d="M409 115h0"></path>
<rect x="272" y="104" width="137" height="22" rx="10" ry="10"></rect>
<text x="340.5" y="119">ModifierValue</text>
</g>
</g>
<path d="M419 115h0"></path>
</g>
<path d="M419 115h36"></path>
</g>
</g>
<path d="M465 115h18"></path>
<path d="M483 115h0"></path>
</g>
<path d="M483 115h10"></path>
<path d="M 493 115 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### ComparisonOp:
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
<svg class="railroad-diagram" width="383" height="361" viewBox="0 0 383 361">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<path d="M50 31h18"></path>
<g>
<path d="M68 31h10"></path>
<path d="M305 31h10"></path>
<g>
<path d="M78 31h0"></path>
<path d="M305 31h0"></path>
<g>
<path d="M78 31h0"></path>
<g>
<path d="M78 31h0"></path>
<path d="M305 31h0"></path>
<path d="M78 31h36"></path>
<g>
<path d="M114 31h63"></path>
<path d="M206 31h63"></path>
<g class="terminal ">
<path d="M177 31h0"></path>
<path d="M206 31h0"></path>
<rect x="177" y="20" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="191.5" y="35">=</text>
</g>
</g>
<path d="M269 31h36"></path>
<path d="M78 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 67h58.5"></path>
<path d="M210.5 67h58.5"></path>
<g class="non-terminal ">
<path d="M172.5 67h0"></path>
<path d="M210.5 67h0"></path>
<rect x="172.5" y="56" width="38" height="22"></rect>
<text x="191.5" y="71">==</text>
</g>
</g>
<path d="M269 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M78 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 101h67.5"></path>
<path d="M201.5 101h67.5"></path>
<g class="terminal ">
<path d="M181.5 101h0"></path>
<path d="M201.5 101h0"></path>
<rect x="181.5" y="90" width="20" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="191.5" y="105"></text>
</g>
</g>
<path d="M269 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M78 31a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 135h63"></path>
<path d="M206 135h63"></path>
<g class="terminal ">
<path d="M177 135h0"></path>
<path d="M206 135h0"></path>
<rect x="177" y="124" width="29" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="191.5" y="139">&#60;</text>
</g>
</g>
<path d="M269 135a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
<path d="M78 31a18 18 0 0 1 18 18v102a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 169h63"></path>
<path d="M206 169h63"></path>
<g class="terminal ">
<path d="M177 169h0"></path>
<path d="M206 169h0"></path>
<rect x="177" y="158" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="191.5" y="173">></text>
</g>
</g>
<path d="M269 169a18 18 0 0 0 18 -18v-102a18 18 0 0 1 18 -18"></path>
<path d="M78 31a18 18 0 0 1 18 18v136a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 203h67.5"></path>
<path d="M201.5 203h67.5"></path>
<g class="terminal ">
<path d="M181.5 203h0"></path>
<path d="M201.5 203h0"></path>
<rect x="181.5" y="192" width="20" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="191.5" y="207"></text>
</g>
</g>
<path d="M269 203a18 18 0 0 0 18 -18v-136a18 18 0 0 1 18 -18"></path>
<path d="M78 31a18 18 0 0 1 18 18v170a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 237h58.5"></path>
<path d="M210.5 237h58.5"></path>
<g class="non-terminal ">
<path d="M172.5 237h0"></path>
<path d="M210.5 237h0"></path>
<rect x="172.5" y="226" width="38" height="22"></rect>
<text x="191.5" y="241">>=</text>
</g>
</g>
<path d="M269 237a18 18 0 0 0 18 -18v-170a18 18 0 0 1 18 -18"></path>
<path d="M78 31a18 18 0 0 1 18 18v204a18 18 0 0 0 18 18"></path>
<g>
<path d="M114 271h0"></path>
<path d="M269 271h0"></path>
<g class="terminal ">
<path d="M114 271h0"></path>
<path d="M269 271h0"></path>
<rect x="114" y="260" width="155" height="22" rx="10" ry="10"></rect>
<text x="191.5" y="275">NamedComparator</text>
</g>
</g>
<path d="M269 271a18 18 0 0 0 18 -18v-204a18 18 0 0 1 18 -18"></path>
</g>
<path d="M305 31h0"></path>
</g>
</g>
</g>
<path d="M315 31a18 18 0 0 1 18 18v227a18 18 0 0 1 -18 18h-247a18 18 0 0 0 -18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M68 330h73"></path>
<path d="M242 330h73"></path>
<g class="terminal ">
<path d="M141 330h0"></path>
<path d="M242 330h0"></path>
<rect x="141" y="319" width="101" height="22" rx="10" ry="10"></rect>
<text x="191.5" y="334">Modifiers</text>
</g>
</g>
<path d="M315 330h18"></path>
<path d="M333 330h0"></path>
</g>
<path d="M333 330h10"></path>
<path d="M 343 330 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}


{% highlight sql %}

NamedComparator:
    String containing only alphabets.

{% endhighlight %}
### Table:
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
<svg class="railroad-diagram" width="400" height="62" viewBox="0 0 400 62">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M340 31h10"></path>
<g class="terminal ">
<path d="M60 31h0"></path>
<path d="M170 31h0"></path>
<rect x="60" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="115" y="35">SchemaName</text>
</g>
<path d="M170 31h10"></path>
<path d="M180 31h10"></path>
<g class="terminal ">
<path d="M190 31h0"></path>
<path d="M219 31h0"></path>
<rect x="190" y="20" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="204.5" y="35">.</text>
</g>
<path d="M219 31h10"></path>
<path d="M229 31h10"></path>
<g class="terminal ">
<path d="M239 31h0"></path>
<path d="M340 31h0"></path>
<rect x="239" y="20" width="101" height="22" rx="10" ry="10"></rect>
<text x="289.5" y="35">TableName</text>
</g>
</g>
<path d="M350 31h0"></path>
</g>
<path d="M350 31h10"></path>
<path d="M 360 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}


{% highlight sql %}

SchemaName, TableName, ColumnName:
    String containing only alphabets or underscores (_).

ModifierName:
    String without double quotes, white spaces, escaped double quote, parenthesis, =, <, > or /.

ModifierValue:
    String value with or without double quotes.
{% endhighlight %}

### Filters
Filters are used to do comparisons on a column in the `Relation`. They are similar to SQL's WHERE clause.
If `Relation` is specified, the column must be from the relation specified. Comparisons can be between literal
values or columns; however, support for comparisons with columns is still underway. Comparisons like equals,
not equal, less than, greater than, less than or equals and greater than or equals can be done with support for
more (between, any, all, etc.) to be added later. Multiple filters can be separated by AND, OR, NOT or PROX boolean
operators; however, support for PROX is still underway. Boolean operators' precedence depend on their position; i.e.
First occurring boolean operator has higher precedence than those occurring later. However, this can be change by
using parenthesis.

### Relation
Relation is the final table that the query would be executed on. So the relation is a combination of
multiple tables. The combination operation can be a join, union, intersection, set-difference, etc; however, 
implementation of set operations as combiners is still underway. The actual combiner keyword used is AND or OR.
For joins, AND means a INNER join, whereas OR means a FULL, LEFT or RIGHT join. The combiner also takes modifiers
used to modify its execution. The two modifiers currently supported are: `null` and `on`.

The `null` modifier is to be used with OR combiner to specify which of the rows can be null. Possible values of
  `null` modifier are: `both` (FULL join), `right` (LEFT join) or `left` (RIGHT join).

The `on` modifier is used to specify the columns to join on. It only works if the column(s) belong to both the
tables. Possible values of `on` modifier are: `all` (finds the common columns between two tables; Default for AND),
`none` (Default for OR), comma-separated list of column names (for example, 'name,id').
  

### Sort Specification
Sort specification is used to specify a space separated column list on which to sort the query output. These columns must be projected if a projection clause is specified.

### Projection
Projection is used to specify the columns for the result. It is also used for aggregations and grouping.



## Example queries:

Consider a schema "public" with tables "employee" and "dept" defined as follows:

```
CREATE TABLE public.dept(
deptno TINYINT NOT NULL,
deptname VARCHAR(30) NOT NULL,
PRIMARY KEY (deptno) );

CREATE TABLE public.employee(
empno INTEGER NOT NULL,
empname VARCHAR(20) NOT NULL,
salary REAL NOT NULL,
deptno TINYINT NOT NULL,
married BOOLEAN NOT NULL,
dob DATE NOT NULL,
joining_date DATE NOT NULL,
PRIMARY KEY (empno) );
```

Then the following CQL queries can be executed on the schema.

Find employee named "Loki":
```
public.employee.empname == "Loki"
```


Find all employees in the HR department that are married:
```
public.dept.deptname == "HR" and public.employee.married == TRUE
```

Find all employees from the HR or IT department:
```
public.dept.deptname == "HR" or public.dept.deptname == "IT" relation public.employee and public.dept
```


Find all employees from all departments except HR:
```
public.employee.empno >= 1 NOT public.dept.deptname == "HR"
```


Count the number of employees:
```
relation public.employee project public.employee.empno/count
```


Get all the employee names sorted by date of birth:
```
relation public.employee sortby public.employee.dob project public.employee.empname
```


Count the number of employees in each department:
```
relation public.employee project public.employee.empno/count public.employee.deptno
```



## Future plans and nice-to-have features

- Optimize Combiner's `getCommonColumns` by creating a cache.
- Support for Column Filters.
- Support for Set Operations.
- Support for proximity boolean operator.
- Support for querying the result of a query.
- Modifiers for Sorting, Projection and Filtering.
- Increase test coverage.
