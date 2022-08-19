---
layout: plain
title: MongoDB Query Language Syntax
---

This page describes the MongoDB Query Language dialect supported by Polypheny in a [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form)-like form.

{% highlight mql %}

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
<svg class="railroad-diagram" width="1087" height="408" viewBox="0 0 1087 408">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M1037 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h389"></path>
<path d="M612 31h389"></path>
<g class="terminal ">
<path d="M475 31h0"></path>
<path d="M612 31h0"></path>
<rect x="475" y="20" width="137" height="22" rx="10" ry="10"></rect>
<text x="543.5" y="35">db.collection</text>
</g>
</g>
<path d="M1001 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h384.5"></path>
<path d="M616.5 67h384.5"></path>
<g>
<path d="M470.5 67h0"></path>
<path d="M616.5 67h0"></path>
<g>
<path d="M470.5 67h0"></path>
<g>
<path d="M470.5 67h0"></path>
<path d="M616.5 67h0"></path>
<path d="M470.5 67h36"></path>
<g>
<path d="M506.5 67h4.5"></path>
<path d="M576 67h4.5"></path>
<g class="terminal ">
<path d="M511 67h0"></path>
<path d="M576 67h0"></path>
<rect x="511" y="56" width="65" height="22" rx="10" ry="10"></rect>
<text x="543.5" y="71">query</text>
</g>
</g>
<path d="M580.5 67h36"></path>
<path d="M470.5 67a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M506.5 103h0"></path>
<path d="M580.5 103h0"></path>
<g class="terminal ">
<path d="M506.5 103h0"></path>
<path d="M580.5 103h0"></path>
<rect x="506.5" y="92" width="74" height="22" rx="10" ry="10"></rect>
<text x="543.5" y="107">insert</text>
</g>
</g>
<path d="M580.5 103a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M470.5 67a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M506.5 137h0"></path>
<path d="M580.5 137h0"></path>
<g class="terminal ">
<path d="M506.5 137h0"></path>
<path d="M580.5 137h0"></path>
<rect x="506.5" y="126" width="74" height="22" rx="10" ry="10"></rect>
<text x="543.5" y="141">update</text>
</g>
</g>
<path d="M580.5 137a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M470.5 67a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M506.5 171h0"></path>
<path d="M580.5 171h0"></path>
<g class="terminal ">
<path d="M506.5 171h0"></path>
<path d="M580.5 171h0"></path>
<rect x="506.5" y="160" width="74" height="22" rx="10" ry="10"></rect>
<text x="543.5" y="175">delete</text>
</g>
</g>
<path d="M580.5 171a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
<path d="M470.5 67a18 18 0 0 1 18 18v102a18 18 0 0 0 18 18"></path>
<g>
<path d="M506.5 205h9"></path>
<path d="M571.5 205h9"></path>
<g class="terminal ">
<path d="M515.5 205h0"></path>
<path d="M571.5 205h0"></path>
<rect x="515.5" y="194" width="56" height="22" rx="10" ry="10"></rect>
<text x="543.5" y="209">drop</text>
</g>
</g>
<path d="M580.5 205a18 18 0 0 0 18 -18v-102a18 18 0 0 1 18 -18"></path>
</g>
<path d="M616.5 67h0"></path>
</g>
</g>
</g>
<path d="M1001 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v172a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 239h0"></path>
<path d="M1001 239h0"></path>
<g class="terminal ">
<path d="M86 239h0"></path>
<path d="M124 239h0"></path>
<rect x="86" y="228" width="38" height="22" rx="10" ry="10"></rect>
<text x="105" y="243">db</text>
</g>
<path d="M124 239h10"></path>
<path d="M134 239h10"></path>
<g>
<path d="M144 239h0"></path>
<path d="M1001 239h0"></path>
<g>
<path d="M144 239h0"></path>
<g>
<path d="M144 239h0"></path>
<path d="M1001 239h0"></path>
<path d="M144 239h36"></path>
<g>
<path d="M180 239h214.5"></path>
<path d="M750.5 239h214.5"></path>
<g class="terminal ">
<path d="M394.5 239h0"></path>
<path d="M540.5 239h0"></path>
<rect x="394.5" y="228" width="146" height="22" rx="10" ry="10"></rect>
<text x="467.5" y="243">.getCollection</text>
</g>
<path d="M540.5 239h10"></path>
<path d="M550.5 239h10"></path>
<g class="non-terminal ">
<path d="M560.5 239h0"></path>
<path d="M607.5 239h0"></path>
<rect x="560.5" y="228" width="47" height="22"></rect>
<text x="584" y="243">"("</text>
</g>
<path d="M607.5 239h10"></path>
<path d="M617.5 239h10"></path>
<g class="terminal ">
<path d="M627.5 239h0"></path>
<path d="M683.5 239h0"></path>
<rect x="627.5" y="228" width="56" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="655.5" y="243">name</text>
</g>
<path d="M683.5 239h10"></path>
<path d="M693.5 239h10"></path>
<g class="non-terminal ">
<path d="M703.5 239h0"></path>
<path d="M750.5 239h0"></path>
<rect x="703.5" y="228" width="47" height="22"></rect>
<text x="727" y="243">")"</text>
</g>
</g>
<path d="M965 239h36"></path>
<path d="M144 239a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M180 275h125"></path>
<path d="M840 275h125"></path>
<g class="terminal ">
<path d="M305 275h0"></path>
<path d="M478 275h0"></path>
<rect x="305" y="264" width="173" height="22" rx="10" ry="10"></rect>
<text x="391.5" y="279">.createCollection</text>
</g>
<path d="M478 275h10"></path>
<path d="M488 275h10"></path>
<g class="non-terminal ">
<path d="M498 275h0"></path>
<path d="M545 275h0"></path>
<rect x="498" y="264" width="47" height="22"></rect>
<text x="521.5" y="279">"("</text>
</g>
<path d="M545 275h10"></path>
<path d="M555 275h10"></path>
<g class="terminal ">
<path d="M565 275h0"></path>
<path d="M621 275h0"></path>
<rect x="565" y="264" width="56" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="593" y="279">name</text>
</g>
<path d="M621 275h10"></path>
<path d="M631 275h10"></path>
<g class="terminal ">
<path d="M641 275h0"></path>
<path d="M670 275h0"></path>
<rect x="641" y="264" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="655.5" y="279">,</text>
</g>
<path d="M670 275h10"></path>
<path d="M680 275h10"></path>
<g class="terminal ">
<path d="M690 275h0"></path>
<path d="M773 275h0"></path>
<rect x="690" y="264" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="731.5" y="279">options</text>
</g>
<path d="M773 275h10"></path>
<path d="M783 275h10"></path>
<g class="non-terminal ">
<path d="M793 275h0"></path>
<path d="M840 275h0"></path>
<rect x="793" y="264" width="47" height="22"></rect>
<text x="816.5" y="279">")"</text>
</g>
</g>
<path d="M965 275a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M144 239a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M180 309h0"></path>
<path d="M965 309h0"></path>
<g class="terminal ">
<path d="M180 309h0"></path>
<path d="M299 309h0"></path>
<rect x="180" y="298" width="119" height="22" rx="10" ry="10"></rect>
<text x="239.5" y="313">.createView</text>
</g>
<path d="M299 309h10"></path>
<path d="M309 309h10"></path>
<g class="non-terminal ">
<path d="M319 309h0"></path>
<path d="M366 309h0"></path>
<rect x="319" y="298" width="47" height="22"></rect>
<text x="342.5" y="313">"("</text>
</g>
<path d="M366 309h10"></path>
<path d="M376 309h10"></path>
<g class="terminal ">
<path d="M386 309h0"></path>
<path d="M442 309h0"></path>
<rect x="386" y="298" width="56" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="414" y="313">view</text>
</g>
<path d="M442 309h10"></path>
<path d="M452 309h10"></path>
<g class="terminal ">
<path d="M462 309h0"></path>
<path d="M491 309h0"></path>
<rect x="462" y="298" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="476.5" y="313">,</text>
</g>
<path d="M491 309h10"></path>
<path d="M501 309h10"></path>
<g class="terminal ">
<path d="M511 309h0"></path>
<path d="M585 309h0"></path>
<rect x="511" y="298" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="548" y="313">source</text>
</g>
<path d="M585 309h10"></path>
<path d="M595 309h10"></path>
<g class="terminal ">
<path d="M605 309h0"></path>
<path d="M634 309h0"></path>
<rect x="605" y="298" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="619.5" y="313">,</text>
</g>
<path d="M634 309h10"></path>
<path d="M644 309h10"></path>
<g class="terminal ">
<path d="M654 309h0"></path>
<path d="M746 309h0"></path>
<rect x="654" y="298" width="92" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="700" y="313">pipeline</text>
</g>
<path d="M746 309h10"></path>
<path d="M756 309h10"></path>
<g class="terminal ">
<path d="M766 309h0"></path>
<path d="M795 309h0"></path>
<rect x="766" y="298" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="780.5" y="313">,</text>
</g>
<path d="M795 309h10"></path>
<path d="M805 309h10"></path>
<g class="terminal ">
<path d="M815 309h0"></path>
<path d="M898 309h0"></path>
<rect x="815" y="298" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="856.5" y="313">options</text>
</g>
<path d="M898 309h10"></path>
<path d="M908 309h10"></path>
<g class="non-terminal ">
<path d="M918 309h0"></path>
<path d="M965 309h0"></path>
<rect x="918" y="298" width="47" height="22"></rect>
<text x="941.5" y="313">")"</text>
</g>
</g>
<path d="M965 309a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M144 239a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M180 343h257"></path>
<path d="M708 343h257"></path>
<g class="terminal ">
<path d="M437 343h0"></path>
<path d="M574 343h0"></path>
<rect x="437" y="332" width="137" height="22" rx="10" ry="10"></rect>
<text x="505.5" y="347">.dropDatabase</text>
</g>
<path d="M574 343h10"></path>
<path d="M584 343h10"></path>
<g class="non-terminal ">
<path d="M594 343h0"></path>
<path d="M641 343h0"></path>
<rect x="594" y="332" width="47" height="22"></rect>
<text x="617.5" y="347">"("</text>
</g>
<path d="M641 343h10"></path>
<path d="M651 343h10"></path>
<g class="non-terminal ">
<path d="M661 343h0"></path>
<path d="M708 343h0"></path>
<rect x="661" y="332" width="47" height="22"></rect>
<text x="684.5" y="347">")"</text>
</g>
</g>
<path d="M965 343a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1001 239h0"></path>
</g>
</g>
</g>
<path d="M1001 239a18 18 0 0 0 18 -18v-172a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v310a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 377h360"></path>
<path d="M641 377h360"></path>
<g class="terminal ">
<path d="M446 377h0"></path>
<path d="M493 377h0"></path>
<rect x="446" y="366" width="47" height="22" rx="10" ry="10"></rect>
<text x="469.5" y="381">use</text>
</g>
<path d="M493 377h10"></path>
<path d="M503 377h10"></path>
<g class="terminal ">
<path d="M513 377h0"></path>
<path d="M641 377h0"></path>
<rect x="513" y="366" width="128" height="22" rx="10" ry="10"></rect>
<text x="577" y="381">databaseName</text>
</g>
</g>
<path d="M1001 377a18 18 0 0 0 18 -18v-310a18 18 0 0 1 18 -18"></path>
</g>
<path d="M1037 31h0"></path>
</g>
<path d="M1037 31h10"></path>
<path d="M 1047 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
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
<div style="overflow: auto;">
<svg class="railroad-diagram" width="510" height="132" viewBox="0 0 510 132">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M460 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h38"></path>
<path d="M386 31h38"></path>
<g class="terminal ">
<path d="M124 31h0"></path>
<path d="M207 31h0"></path>
<rect x="124" y="20" width="83" height="22" rx="10" ry="10"></rect>
<text x="165.5" y="35">.insert</text>
</g>
<path d="M207 31h10"></path>
<path d="M217 31h10"></path>
<g class="non-terminal ">
<path d="M227 31h0"></path>
<path d="M274 31h0"></path>
<rect x="227" y="20" width="47" height="22"></rect>
<text x="250.5" y="35">"("</text>
</g>
<path d="M274 31h10"></path>
<path d="M284 31h10"></path>
<g class="terminal ">
<path d="M294 31h0"></path>
<path d="M386 31h0"></path>
<rect x="294" y="20" width="92" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="340" y="35">document</text>
</g>
</g>
<path d="M424 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h103"></path>
<path d="M321 67h103"></path>
<g class="terminal ">
<path d="M189 67h0"></path>
<path d="M254 67h0"></path>
<rect x="189" y="56" width="65" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="221.5" y="71">array</text>
</g>
<path d="M254 67h10"></path>
<path d="M264 67h10"></path>
<g class="non-terminal ">
<path d="M274 67h0"></path>
<path d="M321 67h0"></path>
<rect x="274" y="56" width="47" height="22"></rect>
<text x="297.5" y="71">")"</text>
</g>
</g>
<path d="M424 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 101h0"></path>
<path d="M424 101h0"></path>
<g class="terminal ">
<path d="M86 101h0"></path>
<path d="M205 101h0"></path>
<rect x="86" y="90" width="119" height="22" rx="10" ry="10"></rect>
<text x="145.5" y="105">.insertMany</text>
</g>
<path d="M205 101h10"></path>
<path d="M215 101h10"></path>
<g class="non-terminal ">
<path d="M225 101h0"></path>
<path d="M272 101h0"></path>
<rect x="225" y="90" width="47" height="22"></rect>
<text x="248.5" y="105">"("</text>
</g>
<path d="M272 101h10"></path>
<path d="M282 101h10"></path>
<g class="terminal ">
<path d="M292 101h0"></path>
<path d="M357 101h0"></path>
<rect x="292" y="90" width="65" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="324.5" y="105">array</text>
</g>
<path d="M357 101h10"></path>
<path d="M367 101h10"></path>
<g class="non-terminal ">
<path d="M377 101h0"></path>
<path d="M424 101h0"></path>
<rect x="377" y="90" width="47" height="22"></rect>
<text x="400.5" y="105">")"</text>
</g>
</g>
<path d="M424 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M460 31h0"></path>
</g>
<path d="M460 31h10"></path>
<path d="M 470 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
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
<div style="overflow: auto;">
<svg class="railroad-diagram" width="922" height="302" viewBox="0 0 922 302">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M872 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h188"></path>
<path d="M648 31h188"></path>
<g class="terminal ">
<path d="M274 31h0"></path>
<path d="M420 31h0"></path>
<rect x="274" y="20" width="146" height="22" rx="10" ry="10"></rect>
<text x="347" y="35">.findAndModify</text>
</g>
<path d="M420 31h10"></path>
<path d="M430 31h10"></path>
<g class="non-terminal ">
<path d="M440 31h0"></path>
<path d="M487 31h0"></path>
<rect x="440" y="20" width="47" height="22"></rect>
<text x="463.5" y="35">"("</text>
</g>
<path d="M487 31h10"></path>
<path d="M497 31h10"></path>
<g class="terminal ">
<path d="M507 31h0"></path>
<path d="M581 31h0"></path>
<rect x="507" y="20" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="544" y="35">filter</text>
</g>
<path d="M581 31h10"></path>
<path d="M591 31h10"></path>
<g class="non-terminal ">
<path d="M601 31h0"></path>
<path d="M648 31h0"></path>
<rect x="601" y="20" width="47" height="22"></rect>
<text x="624.5" y="35">")"</text>
</g>
</g>
<path d="M836 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h0"></path>
<path d="M836 67h0"></path>
<g class="terminal ">
<path d="M86 67h0"></path>
<path d="M268 67h0"></path>
<rect x="86" y="56" width="182" height="22" rx="10" ry="10"></rect>
<text x="177" y="71">.findOneAndReplace</text>
</g>
<path d="M268 67h10"></path>
<path d="M278 67h10"></path>
<g class="non-terminal ">
<path d="M288 67h0"></path>
<path d="M335 67h0"></path>
<rect x="288" y="56" width="47" height="22"></rect>
<text x="311.5" y="71">"("</text>
</g>
<path d="M335 67h10"></path>
<path d="M345 67h10"></path>
<g class="terminal ">
<path d="M355 67h0"></path>
<path d="M429 67h0"></path>
<rect x="355" y="56" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="392" y="71">filter</text>
</g>
<path d="M429 67h10"></path>
<path d="M439 67h10"></path>
<g class="terminal ">
<path d="M449 67h0"></path>
<path d="M478 67h0"></path>
<rect x="449" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="463.5" y="71">,</text>
</g>
<path d="M478 67h10"></path>
<path d="M488 67h10"></path>
<g class="terminal ">
<path d="M498 67h0"></path>
<path d="M617 67h0"></path>
<rect x="498" y="56" width="119" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="557.5" y="71">replacement</text>
</g>
<path d="M617 67h10"></path>
<path d="M627 67h10"></path>
<g class="terminal ">
<path d="M637 67h0"></path>
<path d="M666 67h0"></path>
<rect x="637" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="651.5" y="71">,</text>
</g>
<path d="M666 67h10"></path>
<path d="M676 67h10"></path>
<g class="terminal ">
<path d="M686 67h0"></path>
<path d="M769 67h0"></path>
<rect x="686" y="56" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="727.5" y="71">options</text>
</g>
<path d="M769 67h10"></path>
<path d="M779 67h10"></path>
<g class="non-terminal ">
<path d="M789 67h0"></path>
<path d="M836 67h0"></path>
<rect x="789" y="56" width="47" height="22"></rect>
<text x="812.5" y="71">")"</text>
</g>
</g>
<path d="M836 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 101h4.5"></path>
<path d="M831.5 101h4.5"></path>
<g class="terminal ">
<path d="M90.5 101h0"></path>
<path d="M263.5 101h0"></path>
<rect x="90.5" y="90" width="173" height="22" rx="10" ry="10"></rect>
<text x="177" y="105">.findOneAndUpdate</text>
</g>
<path d="M263.5 101h10"></path>
<path d="M273.5 101h10"></path>
<g class="non-terminal ">
<path d="M283.5 101h0"></path>
<path d="M330.5 101h0"></path>
<rect x="283.5" y="90" width="47" height="22"></rect>
<text x="307" y="105">"("</text>
</g>
<path d="M330.5 101h10"></path>
<path d="M340.5 101h10"></path>
<g class="terminal ">
<path d="M350.5 101h0"></path>
<path d="M424.5 101h0"></path>
<rect x="350.5" y="90" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="387.5" y="105">filter</text>
</g>
<path d="M424.5 101h10"></path>
<path d="M434.5 101h10"></path>
<g class="terminal ">
<path d="M444.5 101h0"></path>
<path d="M473.5 101h0"></path>
<rect x="444.5" y="90" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="459" y="105">,</text>
</g>
<path d="M473.5 101h10"></path>
<path d="M483.5 101h10"></path>
<g class="terminal ">
<path d="M493.5 101h0"></path>
<path d="M612.5 101h0"></path>
<rect x="493.5" y="90" width="119" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="553" y="105">replacement</text>
</g>
<path d="M612.5 101h10"></path>
<path d="M622.5 101h10"></path>
<g class="terminal ">
<path d="M632.5 101h0"></path>
<path d="M661.5 101h0"></path>
<rect x="632.5" y="90" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="647" y="105">,</text>
</g>
<path d="M661.5 101h10"></path>
<path d="M671.5 101h10"></path>
<g class="terminal ">
<path d="M681.5 101h0"></path>
<path d="M764.5 101h0"></path>
<rect x="681.5" y="90" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="723" y="105">options</text>
</g>
<path d="M764.5 101h10"></path>
<path d="M774.5 101h10"></path>
<g class="non-terminal ">
<path d="M784.5 101h0"></path>
<path d="M831.5 101h0"></path>
<rect x="784.5" y="90" width="47" height="22"></rect>
<text x="808" y="105">")"</text>
</g>
</g>
<path d="M836 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 135h31.5"></path>
<path d="M804.5 135h31.5"></path>
<g class="terminal ">
<path d="M117.5 135h0"></path>
<path d="M236.5 135h0"></path>
<rect x="117.5" y="124" width="119" height="22" rx="10" ry="10"></rect>
<text x="177" y="139">.replaceOne</text>
</g>
<path d="M236.5 135h10"></path>
<path d="M246.5 135h10"></path>
<g class="non-terminal ">
<path d="M256.5 135h0"></path>
<path d="M303.5 135h0"></path>
<rect x="256.5" y="124" width="47" height="22"></rect>
<text x="280" y="139">"("</text>
</g>
<path d="M303.5 135h10"></path>
<path d="M313.5 135h10"></path>
<g class="terminal ">
<path d="M323.5 135h0"></path>
<path d="M397.5 135h0"></path>
<rect x="323.5" y="124" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="360.5" y="139">filter</text>
</g>
<path d="M397.5 135h10"></path>
<path d="M407.5 135h10"></path>
<g class="terminal ">
<path d="M417.5 135h0"></path>
<path d="M446.5 135h0"></path>
<rect x="417.5" y="124" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="432" y="139">,</text>
</g>
<path d="M446.5 135h10"></path>
<path d="M456.5 135h10"></path>
<g class="terminal ">
<path d="M466.5 135h0"></path>
<path d="M585.5 135h0"></path>
<rect x="466.5" y="124" width="119" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="526" y="139">replacement</text>
</g>
<path d="M585.5 135h10"></path>
<path d="M595.5 135h10"></path>
<g class="terminal ">
<path d="M605.5 135h0"></path>
<path d="M634.5 135h0"></path>
<rect x="605.5" y="124" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="620" y="139">,</text>
</g>
<path d="M634.5 135h10"></path>
<path d="M644.5 135h10"></path>
<g class="terminal ">
<path d="M654.5 135h0"></path>
<path d="M737.5 135h0"></path>
<rect x="654.5" y="124" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="696" y="139">options</text>
</g>
<path d="M737.5 135h10"></path>
<path d="M747.5 135h10"></path>
<g class="non-terminal ">
<path d="M757.5 135h0"></path>
<path d="M804.5 135h0"></path>
<rect x="757.5" y="124" width="47" height="22"></rect>
<text x="781" y="139">")"</text>
</g>
</g>
<path d="M836 135a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v102a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 169h76.5"></path>
<path d="M759.5 169h76.5"></path>
<g class="terminal ">
<path d="M162.5 169h0"></path>
<path d="M245.5 169h0"></path>
<rect x="162.5" y="158" width="83" height="22" rx="10" ry="10"></rect>
<text x="204" y="173">.update</text>
</g>
<path d="M245.5 169h10"></path>
<path d="M255.5 169h10"></path>
<g class="non-terminal ">
<path d="M265.5 169h0"></path>
<path d="M312.5 169h0"></path>
<rect x="265.5" y="158" width="47" height="22"></rect>
<text x="289" y="173">"("</text>
</g>
<path d="M312.5 169h10"></path>
<path d="M322.5 169h10"></path>
<g class="terminal ">
<path d="M332.5 169h0"></path>
<path d="M397.5 169h0"></path>
<rect x="332.5" y="158" width="65" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="365" y="173">query</text>
</g>
<path d="M397.5 169h10"></path>
<path d="M407.5 169h10"></path>
<g class="terminal ">
<path d="M417.5 169h0"></path>
<path d="M446.5 169h0"></path>
<rect x="417.5" y="158" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="432" y="173">,</text>
</g>
<path d="M446.5 169h10"></path>
<path d="M456.5 169h10"></path>
<g class="terminal ">
<path d="M466.5 169h0"></path>
<path d="M540.5 169h0"></path>
<rect x="466.5" y="158" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="503.5" y="173">update</text>
</g>
<path d="M540.5 169h10"></path>
<path d="M550.5 169h10"></path>
<g class="terminal ">
<path d="M560.5 169h0"></path>
<path d="M589.5 169h0"></path>
<rect x="560.5" y="158" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="575" y="173">,</text>
</g>
<path d="M589.5 169h10"></path>
<path d="M599.5 169h10"></path>
<g class="terminal ">
<path d="M609.5 169h0"></path>
<path d="M692.5 169h0"></path>
<rect x="609.5" y="158" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="651" y="173">options</text>
</g>
<path d="M692.5 169h10"></path>
<path d="M702.5 169h10"></path>
<g class="non-terminal ">
<path d="M712.5 169h0"></path>
<path d="M759.5 169h0"></path>
<rect x="712.5" y="158" width="47" height="22"></rect>
<text x="736" y="173">")"</text>
</g>
</g>
<path d="M836 169a18 18 0 0 0 18 -18v-102a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v136a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 203h58.5"></path>
<path d="M777.5 203h58.5"></path>
<g class="terminal ">
<path d="M144.5 203h0"></path>
<path d="M254.5 203h0"></path>
<rect x="144.5" y="192" width="110" height="22" rx="10" ry="10"></rect>
<text x="199.5" y="207">.updateOne</text>
</g>
<path d="M254.5 203h10"></path>
<path d="M264.5 203h10"></path>
<g class="non-terminal ">
<path d="M274.5 203h0"></path>
<path d="M321.5 203h0"></path>
<rect x="274.5" y="192" width="47" height="22"></rect>
<text x="298" y="207">"("</text>
</g>
<path d="M321.5 203h10"></path>
<path d="M331.5 203h10"></path>
<g class="terminal ">
<path d="M341.5 203h0"></path>
<path d="M415.5 203h0"></path>
<rect x="341.5" y="192" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="378.5" y="207">filter</text>
</g>
<path d="M415.5 203h10"></path>
<path d="M425.5 203h10"></path>
<g class="terminal ">
<path d="M435.5 203h0"></path>
<path d="M464.5 203h0"></path>
<rect x="435.5" y="192" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="450" y="207">,</text>
</g>
<path d="M464.5 203h10"></path>
<path d="M474.5 203h10"></path>
<g class="terminal ">
<path d="M484.5 203h0"></path>
<path d="M558.5 203h0"></path>
<rect x="484.5" y="192" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="521.5" y="207">update</text>
</g>
<path d="M558.5 203h10"></path>
<path d="M568.5 203h10"></path>
<g class="terminal ">
<path d="M578.5 203h0"></path>
<path d="M607.5 203h0"></path>
<rect x="578.5" y="192" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="593" y="207">,</text>
</g>
<path d="M607.5 203h10"></path>
<path d="M617.5 203h10"></path>
<g class="terminal ">
<path d="M627.5 203h0"></path>
<path d="M710.5 203h0"></path>
<rect x="627.5" y="192" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="669" y="207">options</text>
</g>
<path d="M710.5 203h10"></path>
<path d="M720.5 203h10"></path>
<g class="non-terminal ">
<path d="M730.5 203h0"></path>
<path d="M777.5 203h0"></path>
<rect x="730.5" y="192" width="47" height="22"></rect>
<text x="754" y="207">")"</text>
</g>
</g>
<path d="M836 203a18 18 0 0 0 18 -18v-136a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v170a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 237h54"></path>
<path d="M782 237h54"></path>
<g class="terminal ">
<path d="M140 237h0"></path>
<path d="M259 237h0"></path>
<rect x="140" y="226" width="119" height="22" rx="10" ry="10"></rect>
<text x="199.5" y="241">.updateMany</text>
</g>
<path d="M259 237h10"></path>
<path d="M269 237h10"></path>
<g class="non-terminal ">
<path d="M279 237h0"></path>
<path d="M326 237h0"></path>
<rect x="279" y="226" width="47" height="22"></rect>
<text x="302.5" y="241">"("</text>
</g>
<path d="M326 237h10"></path>
<path d="M336 237h10"></path>
<g class="terminal ">
<path d="M346 237h0"></path>
<path d="M420 237h0"></path>
<rect x="346" y="226" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="383" y="241">filter</text>
</g>
<path d="M420 237h10"></path>
<path d="M430 237h10"></path>
<g class="terminal ">
<path d="M440 237h0"></path>
<path d="M469 237h0"></path>
<rect x="440" y="226" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="454.5" y="241">,</text>
</g>
<path d="M469 237h10"></path>
<path d="M479 237h10"></path>
<g class="terminal ">
<path d="M489 237h0"></path>
<path d="M563 237h0"></path>
<rect x="489" y="226" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="526" y="241">update</text>
</g>
<path d="M563 237h10"></path>
<path d="M573 237h10"></path>
<g class="terminal ">
<path d="M583 237h0"></path>
<path d="M612 237h0"></path>
<rect x="583" y="226" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="597.5" y="241">,</text>
</g>
<path d="M612 237h10"></path>
<path d="M622 237h10"></path>
<g class="terminal ">
<path d="M632 237h0"></path>
<path d="M715 237h0"></path>
<rect x="632" y="226" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="673.5" y="241">options</text>
</g>
<path d="M715 237h10"></path>
<path d="M725 237h10"></path>
<g class="non-terminal ">
<path d="M735 237h0"></path>
<path d="M782 237h0"></path>
<rect x="735" y="226" width="47" height="22"></rect>
<text x="758.5" y="241">")"</text>
</g>
</g>
<path d="M836 237a18 18 0 0 0 18 -18v-170a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v204a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 271h85"></path>
<path d="M751 271h85"></path>
<g class="terminal ">
<path d="M171 271h0"></path>
<path d="M344 271h0"></path>
<rect x="171" y="260" width="173" height="22" rx="10" ry="10"></rect>
<text x="257.5" y="275">.renameCollection</text>
</g>
<path d="M344 271h10"></path>
<path d="M354 271h10"></path>
<g class="non-terminal ">
<path d="M364 271h0"></path>
<path d="M411 271h0"></path>
<rect x="364" y="260" width="47" height="22"></rect>
<text x="387.5" y="275">"("</text>
</g>
<path d="M411 271h10"></path>
<path d="M421 271h10"></path>
<g class="terminal ">
<path d="M431 271h0"></path>
<path d="M505 271h0"></path>
<rect x="431" y="260" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="468" y="275">target</text>
</g>
<path d="M505 271h10"></path>
<path d="M515 271h10"></path>
<g class="terminal ">
<path d="M525 271h0"></path>
<path d="M554 271h0"></path>
<rect x="525" y="260" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="539.5" y="275">,</text>
</g>
<path d="M554 271h10"></path>
<path d="M564 271h10"></path>
<g class="terminal ">
<path d="M574 271h0"></path>
<path d="M684 271h0"></path>
<rect x="574" y="260" width="110" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="629" y="275">dropTarget</text>
</g>
<path d="M684 271h10"></path>
<path d="M694 271h10"></path>
<g class="non-terminal ">
<path d="M704 271h0"></path>
<path d="M751 271h0"></path>
<rect x="704" y="260" width="47" height="22"></rect>
<text x="727.5" y="275">")"</text>
</g>
</g>
<path d="M836 271a18 18 0 0 0 18 -18v-204a18 18 0 0 1 18 -18"></path>
</g>
<path d="M872 31h0"></path>
</g>
<path d="M872 31h10"></path>
<path d="M 882 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
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
<div style="overflow: auto;">
<svg class="railroad-diagram" width="725" height="132" viewBox="0 0 725 132">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M675 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h107.5"></path>
<path d="M531.5 31h107.5"></path>
<g class="terminal ">
<path d="M193.5 31h0"></path>
<path d="M303.5 31h0"></path>
<rect x="193.5" y="20" width="110" height="22" rx="10" ry="10"></rect>
<text x="248.5" y="35">.deleteOne</text>
</g>
<path d="M303.5 31h10"></path>
<path d="M313.5 31h10"></path>
<g class="non-terminal ">
<path d="M323.5 31h0"></path>
<path d="M370.5 31h0"></path>
<rect x="323.5" y="20" width="47" height="22"></rect>
<text x="347" y="35">"("</text>
</g>
<path d="M370.5 31h10"></path>
<path d="M380.5 31h10"></path>
<g class="terminal ">
<path d="M390.5 31h0"></path>
<path d="M464.5 31h0"></path>
<rect x="390.5" y="20" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="427.5" y="35">filter</text>
</g>
<path d="M464.5 31h10"></path>
<path d="M474.5 31h10"></path>
<g class="non-terminal ">
<path d="M484.5 31h0"></path>
<path d="M531.5 31h0"></path>
<rect x="484.5" y="20" width="47" height="22"></rect>
<text x="508" y="35">")"</text>
</g>
</g>
<path d="M639 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h103"></path>
<path d="M536 67h103"></path>
<g class="terminal ">
<path d="M189 67h0"></path>
<path d="M308 67h0"></path>
<rect x="189" y="56" width="119" height="22" rx="10" ry="10"></rect>
<text x="248.5" y="71">.deleteMany</text>
</g>
<path d="M308 67h10"></path>
<path d="M318 67h10"></path>
<g class="non-terminal ">
<path d="M328 67h0"></path>
<path d="M375 67h0"></path>
<rect x="328" y="56" width="47" height="22"></rect>
<text x="351.5" y="71">"("</text>
</g>
<path d="M375 67h10"></path>
<path d="M385 67h10"></path>
<g class="terminal ">
<path d="M395 67h0"></path>
<path d="M469 67h0"></path>
<rect x="395" y="56" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="432" y="71">filter</text>
</g>
<path d="M469 67h10"></path>
<path d="M479 67h10"></path>
<g class="non-terminal ">
<path d="M489 67h0"></path>
<path d="M536 67h0"></path>
<rect x="489" y="56" width="47" height="22"></rect>
<text x="512.5" y="71">")"</text>
</g>
</g>
<path d="M639 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 101h0"></path>
<path d="M639 101h0"></path>
<g class="terminal ">
<path d="M86 101h0"></path>
<path d="M259 101h0"></path>
<rect x="86" y="90" width="173" height="22" rx="10" ry="10"></rect>
<text x="172.5" y="105">.findOneAndDelete</text>
</g>
<path d="M259 101h10"></path>
<path d="M269 101h10"></path>
<g class="non-terminal ">
<path d="M279 101h0"></path>
<path d="M326 101h0"></path>
<rect x="279" y="90" width="47" height="22"></rect>
<text x="302.5" y="105">"("</text>
</g>
<path d="M326 101h10"></path>
<path d="M336 101h10"></path>
<g class="terminal ">
<path d="M346 101h0"></path>
<path d="M420 101h0"></path>
<rect x="346" y="90" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="383" y="105">filter</text>
</g>
<path d="M420 101h10"></path>
<path d="M430 101h10"></path>
<g class="terminal ">
<path d="M440 101h0"></path>
<path d="M469 101h0"></path>
<rect x="440" y="90" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="454.5" y="105">,</text>
</g>
<path d="M469 101h10"></path>
<path d="M479 101h10"></path>
<g class="terminal ">
<path d="M489 101h0"></path>
<path d="M572 101h0"></path>
<rect x="489" y="90" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="530.5" y="105">options</text>
</g>
<path d="M572 101h10"></path>
<path d="M582 101h10"></path>
<g class="non-terminal ">
<path d="M592 101h0"></path>
<path d="M639 101h0"></path>
<rect x="592" y="90" width="47" height="22"></rect>
<text x="615.5" y="105">")"</text>
</g>
</g>
<path d="M639 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
</g>
<path d="M675 31h0"></path>
</g>
<path d="M675 31h10"></path>
<path d="M 685 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}

### drop:
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
<svg class="railroad-diagram" width="422" height="62" viewBox="0 0 422 62">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h10"></path>
<path d="M362 31h10"></path>
<g class="terminal ">
<path d="M60 31h0"></path>
<path d="M125 31h0"></path>
<rect x="60" y="20" width="65" height="22" rx="10" ry="10"></rect>
<text x="92.5" y="35">.drop</text>
</g>
<path d="M125 31h10"></path>
<path d="M135 31h10"></path>
<g class="non-terminal ">
<path d="M145 31h0"></path>
<path d="M192 31h0"></path>
<rect x="145" y="20" width="47" height="22"></rect>
<text x="168.5" y="35">"("</text>
</g>
<path d="M192 31h10"></path>
<path d="M202 31h10"></path>
<g class="terminal ">
<path d="M212 31h0"></path>
<path d="M295 31h0"></path>
<rect x="212" y="20" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="253.5" y="35">options</text>
</g>
<path d="M295 31h10"></path>
<path d="M305 31h10"></path>
<g class="non-terminal ">
<path d="M315 31h0"></path>
<path d="M362 31h0"></path>
<rect x="315" y="20" width="47" height="22"></rect>
<text x="338.5" y="35">")"</text>
</g>
</g>
<path d="M372 31h0"></path>
</g>
<path d="M372 31h10"></path>
<path d="M 382 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
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
<div style="overflow: auto;">
<svg class="railroad-diagram" width="707" height="234" viewBox="0 0 707 234">
<g transform="translate(.5 .5)">
<g>
<path d="M20 21v20m10 -20v20m-10 -10h20"></path>
</g>
<path d="M40 31h10"></path>
<g>
<path d="M50 31h0"></path>
<g>
<path d="M50 31h0"></path>
<path d="M657 31h0"></path>
<path d="M50 31h36"></path>
<g>
<path d="M86 31h31.5"></path>
<path d="M589.5 31h31.5"></path>
<g class="terminal ">
<path d="M117.5 31h0"></path>
<path d="M182.5 31h0"></path>
<rect x="117.5" y="20" width="65" height="22" rx="10" ry="10"></rect>
<text x="150" y="35">.find</text>
</g>
<path d="M182.5 31h10"></path>
<path d="M192.5 31h10"></path>
<g class="non-terminal ">
<path d="M202.5 31h0"></path>
<path d="M249.5 31h0"></path>
<rect x="202.5" y="20" width="47" height="22"></rect>
<text x="226" y="35">"("</text>
</g>
<path d="M249.5 31h10"></path>
<path d="M259.5 31h10"></path>
<g class="terminal ">
<path d="M269.5 31h0"></path>
<path d="M343.5 31h0"></path>
<rect x="269.5" y="20" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="306.5" y="35">filter</text>
</g>
<path d="M343.5 31h10"></path>
<path d="M353.5 31h10"></path>
<g class="terminal ">
<path d="M363.5 31h0"></path>
<path d="M392.5 31h0"></path>
<rect x="363.5" y="20" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="378" y="35">,</text>
</g>
<path d="M392.5 31h10"></path>
<path d="M402.5 31h10"></path>
<g class="terminal ">
<path d="M412.5 31h0"></path>
<path d="M522.5 31h0"></path>
<rect x="412.5" y="20" width="110" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="467.5" y="35">projection</text>
</g>
<path d="M522.5 31h10"></path>
<path d="M532.5 31h10"></path>
<g class="non-terminal ">
<path d="M542.5 31h0"></path>
<path d="M589.5 31h0"></path>
<rect x="542.5" y="20" width="47" height="22"></rect>
<text x="566" y="35">")"</text>
</g>
</g>
<path d="M621 31h36"></path>
<path d="M50 31a18 18 0 0 1 18 18v0a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 67h13.5"></path>
<path d="M607.5 67h13.5"></path>
<g class="terminal ">
<path d="M99.5 67h0"></path>
<path d="M209.5 67h0"></path>
<rect x="99.5" y="56" width="110" height="22" rx="10" ry="10"></rect>
<text x="154.5" y="71">.aggregate</text>
</g>
<path d="M209.5 67h10"></path>
<path d="M219.5 67h10"></path>
<g class="non-terminal ">
<path d="M229.5 67h0"></path>
<path d="M276.5 67h0"></path>
<rect x="229.5" y="56" width="47" height="22"></rect>
<text x="253" y="71">"("</text>
</g>
<path d="M276.5 67h10"></path>
<path d="M286.5 67h10"></path>
<g class="terminal ">
<path d="M296.5 67h0"></path>
<path d="M388.5 67h0"></path>
<rect x="296.5" y="56" width="92" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="342.5" y="71">pipeline</text>
</g>
<path d="M388.5 67h10"></path>
<path d="M398.5 67h10"></path>
<g class="terminal ">
<path d="M408.5 67h0"></path>
<path d="M437.5 67h0"></path>
<rect x="408.5" y="56" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="423" y="71">,</text>
</g>
<path d="M437.5 67h10"></path>
<path d="M447.5 67h10"></path>
<g class="terminal ">
<path d="M457.5 67h0"></path>
<path d="M540.5 67h0"></path>
<rect x="457.5" y="56" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="499" y="71">options</text>
</g>
<path d="M540.5 67h10"></path>
<path d="M550.5 67h10"></path>
<g class="non-terminal ">
<path d="M560.5 67h0"></path>
<path d="M607.5 67h0"></path>
<rect x="560.5" y="56" width="47" height="22"></rect>
<text x="584" y="71">")"</text>
</g>
</g>
<path d="M621 67a18 18 0 0 0 18 -18v0a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v34a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 101h18"></path>
<path d="M603 101h18"></path>
<g class="terminal ">
<path d="M104 101h0"></path>
<path d="M196 101h0"></path>
<rect x="104" y="90" width="92" height="22" rx="10" ry="10"></rect>
<text x="150" y="105">.findOne</text>
</g>
<path d="M196 101h10"></path>
<path d="M206 101h10"></path>
<g class="non-terminal ">
<path d="M216 101h0"></path>
<path d="M263 101h0"></path>
<rect x="216" y="90" width="47" height="22"></rect>
<text x="239.5" y="105">"("</text>
</g>
<path d="M263 101h10"></path>
<path d="M273 101h10"></path>
<g class="terminal ">
<path d="M283 101h0"></path>
<path d="M357 101h0"></path>
<rect x="283" y="90" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="320" y="105">filter</text>
</g>
<path d="M357 101h10"></path>
<path d="M367 101h10"></path>
<g class="terminal ">
<path d="M377 101h0"></path>
<path d="M406 101h0"></path>
<rect x="377" y="90" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="391.5" y="105">,</text>
</g>
<path d="M406 101h10"></path>
<path d="M416 101h10"></path>
<g class="terminal ">
<path d="M426 101h0"></path>
<path d="M536 101h0"></path>
<rect x="426" y="90" width="110" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="481" y="105">projection</text>
</g>
<path d="M536 101h10"></path>
<path d="M546 101h10"></path>
<g class="non-terminal ">
<path d="M556 101h0"></path>
<path d="M603 101h0"></path>
<rect x="556" y="90" width="47" height="22"></rect>
<text x="579.5" y="105">")"</text>
</g>
</g>
<path d="M621 101a18 18 0 0 0 18 -18v-34a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v68a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 135h40.5"></path>
<path d="M580.5 135h40.5"></path>
<g class="terminal ">
<path d="M126.5 135h0"></path>
<path d="M200.5 135h0"></path>
<rect x="126.5" y="124" width="74" height="22" rx="10" ry="10"></rect>
<text x="163.5" y="139">.count</text>
</g>
<path d="M200.5 135h10"></path>
<path d="M210.5 135h10"></path>
<g class="non-terminal ">
<path d="M220.5 135h0"></path>
<path d="M267.5 135h0"></path>
<rect x="220.5" y="124" width="47" height="22"></rect>
<text x="244" y="139">"("</text>
</g>
<path d="M267.5 135h10"></path>
<path d="M277.5 135h10"></path>
<g class="terminal ">
<path d="M287.5 135h0"></path>
<path d="M361.5 135h0"></path>
<rect x="287.5" y="124" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="324.5" y="139">filter</text>
</g>
<path d="M361.5 135h10"></path>
<path d="M371.5 135h10"></path>
<g class="terminal ">
<path d="M381.5 135h0"></path>
<path d="M410.5 135h0"></path>
<rect x="381.5" y="124" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="396" y="139">,</text>
</g>
<path d="M410.5 135h10"></path>
<path d="M420.5 135h10"></path>
<g class="terminal ">
<path d="M430.5 135h0"></path>
<path d="M513.5 135h0"></path>
<rect x="430.5" y="124" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="472" y="139">options</text>
</g>
<path d="M513.5 135h10"></path>
<path d="M523.5 135h10"></path>
<g class="non-terminal ">
<path d="M533.5 135h0"></path>
<path d="M580.5 135h0"></path>
<rect x="533.5" y="124" width="47" height="22"></rect>
<text x="557" y="139">")"</text>
</g>
</g>
<path d="M621 135a18 18 0 0 0 18 -18v-68a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v102a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 169h0"></path>
<path d="M621 169h0"></path>
<g class="terminal ">
<path d="M86 169h0"></path>
<path d="M241 169h0"></path>
<rect x="86" y="158" width="155" height="22" rx="10" ry="10"></rect>
<text x="163.5" y="173">.countDocuments</text>
</g>
<path d="M241 169h10"></path>
<path d="M251 169h10"></path>
<g class="non-terminal ">
<path d="M261 169h0"></path>
<path d="M308 169h0"></path>
<rect x="261" y="158" width="47" height="22"></rect>
<text x="284.5" y="173">"("</text>
</g>
<path d="M308 169h10"></path>
<path d="M318 169h10"></path>
<g class="terminal ">
<path d="M328 169h0"></path>
<path d="M402 169h0"></path>
<rect x="328" y="158" width="74" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="365" y="173">filter</text>
</g>
<path d="M402 169h10"></path>
<path d="M412 169h10"></path>
<g class="terminal ">
<path d="M422 169h0"></path>
<path d="M451 169h0"></path>
<rect x="422" y="158" width="29" height="22" rx="10" ry="10" style="fill: #D8F4D7; stroke: black; stroke-width: 2;"></rect>
<text x="436.5" y="173">,</text>
</g>
<path d="M451 169h10"></path>
<path d="M461 169h10"></path>
<g class="terminal ">
<path d="M471 169h0"></path>
<path d="M554 169h0"></path>
<rect x="471" y="158" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="512.5" y="173">options</text>
</g>
<path d="M554 169h10"></path>
<path d="M564 169h10"></path>
<g class="non-terminal ">
<path d="M574 169h0"></path>
<path d="M621 169h0"></path>
<rect x="574" y="158" width="47" height="22"></rect>
<text x="597.5" y="173">")"</text>
</g>
</g>
<path d="M621 169a18 18 0 0 0 18 -18v-102a18 18 0 0 1 18 -18"></path>
<path d="M50 31a18 18 0 0 1 18 18v136a18 18 0 0 0 18 18"></path>
<g>
<path d="M86 203h35.5"></path>
<path d="M585.5 203h35.5"></path>
<g class="terminal ">
<path d="M121.5 203h0"></path>
<path d="M348.5 203h0"></path>
<rect x="121.5" y="192" width="227" height="22" rx="10" ry="10"></rect>
<text x="235" y="207">.estimatedDocumentCount</text>
</g>
<path d="M348.5 203h10"></path>
<path d="M358.5 203h10"></path>
<g class="non-terminal ">
<path d="M368.5 203h0"></path>
<path d="M415.5 203h0"></path>
<rect x="368.5" y="192" width="47" height="22"></rect>
<text x="392" y="207">"("</text>
</g>
<path d="M415.5 203h10"></path>
<path d="M425.5 203h10"></path>
<g class="terminal ">
<path d="M435.5 203h0"></path>
<path d="M518.5 203h0"></path>
<rect x="435.5" y="192" width="83" height="22" rx="10" ry="10" style="fill: #ECECEC; stroke: black; stroke-width: 2;"></rect>
<text x="477" y="207">options</text>
</g>
<path d="M518.5 203h10"></path>
<path d="M528.5 203h10"></path>
<g class="non-terminal ">
<path d="M538.5 203h0"></path>
<path d="M585.5 203h0"></path>
<rect x="538.5" y="192" width="47" height="22"></rect>
<text x="562" y="207">")"</text>
</g>
</g>
<path d="M621 203a18 18 0 0 0 18 -18v-136a18 18 0 0 1 18 -18"></path>
</g>
<path d="M657 31h0"></path>
</g>
<path d="M657 31h10"></path>
<path d="M 667 31 h 20 m -10 -10 v 20 m 10 -20 v 20"></path>
</g>
</svg>
</div></html>
{:/}


{% highlight sql %}

filter: <document>
projection: <document>
replacement: <document>
pipeline: <array>
options: <document>
target: <string>
dropTarget: <boolean>
update: <array> | <document>
name: <string>
source: <string>
view: <strin>

{% endhighlight %}



<br>
_Parts of this documentation are based on [MongoDB Reference](https://docs.mongodb.com/manual/reference)._
