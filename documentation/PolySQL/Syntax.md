---
layout: plain
title: PolySQL Syntax
---

This page describes the SQL dialect recognized by Polypheny-DB's default SQL parser in a [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form)-like form.

{% highlight sql %}
statement:
      insert
  |   update
  |   delete
  |   query

insert:
      INSERT INTO tableName
      [ '(' column [, column ]* ')' ]
      query

update:
      UPDATE tableName
      SET assign [, assign ]*
      [ WHERE booleanExpression ]

assign:
      identifier '=' expression

delete:
      DELETE FROM tableName [ [ AS ] alias ]
      [ WHERE booleanExpression ]

query:
      values
  |   WITH withItem [ , withItem ]* query
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

withItem:
      name
      [ '(' column [, column ]* ')' ]
      AS '(' query ')'

orderItem:
      expression [ ASC | DESC ] [ NULLS FIRST | NULLS LAST ]

select:
      SELECT [ STREAM ] [ ALL | DISTINCT ]
          { *| projectItem [, projectItem ]* }
      FROM tableExpression
      [ WHERE booleanExpression ]
      [ GROUP BY { groupItem [, groupItem ]* } ]
      [ HAVING booleanExpression ]
      [ WINDOW windowName AS windowSpec [, windowName AS windowSpec ]* ]

selectWithoutFrom:
      SELECT [ ALL | DISTINCT ]
          { *| projectItem [, projectItem ]* }

projectItem:
      expression [ [ AS ] columnAlias ]
  |   tableAlias . *

tableExpression:
      tableReference [, tableReference ]*
  |   tableExpression [ NATURAL ] [ ( LEFT | RIGHT | FULL ) [ OUTER ] ] JOIN tableExpression [ joinCondition ]
  |   tableExpression CROSS JOIN tableExpression
  |   tableExpression [ CROSS | OUTER ] APPLY tableExpression

joinCondition:
      ON booleanExpression
  |   USING '(' column [, column ]* ')'

tableReference:
      tableName
      [ matchRecognize ]
      [ [ AS ] alias [ '(' columnAlias [, columnAlias ]* ')' ] ]

tableName:
      [ schemaName . ] tableName
      '(' TABLE [ schemaName . ] tableName ')'
  |   tableName [ EXTEND ] '(' columnDecl [, columnDecl ]*')'
  |   [ LATERAL ] '(' query ')'
  |   UNNEST '(' expression ')' [ WITH ORDINALITY ]
  |   [ LATERAL ] TABLE '(' [ SPECIFIC ] functionName '(' expression [, expression ]* ')' ')'

columnDecl:
      column type [ NOT NULL ]

values:
{% endhighlight %}
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
       /* stroke-dasharray: 10 5;
       fill: none; */
     }
     svg.railroad-diagram path.diagram-text {
       /* stroke-width: 1.5;
       stroke: black;
       fill: white;
       cursor: help; */
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
{% highlight sql %}
groupItem:
{% endhighlight %}
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
{% highlight sql %}
windowRef:
{% endhighlight %}
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