---
layout: page
title: PolySQL Syntax
---

The page describes the SQL dialect recognized by Polypheny-DB's default SQL parser in a [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form)-like form.


{% highlight sql %}
statement:
      alterStatement
  |   explain
  |   describe
  |   insert
  |   update
  |   merge
  |   delete
  |   query

alterStatement:
       ALTER ( SYSTEM | SESSION ) SET identifier '=' expression
     | ALTER ( SYSTEM | SESSION ) RESET identifier
     | ALTER ( SYSTEM | SESSION ) RESET ALL
     | ALTER SCHEMA [ databaseName . ] schemaName RENAME TO newSchemaName  
     | ALTER SCHEMA [ databaseName . ] schemaName OWNER TO userName  
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName RENAME TO newTableName  
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName OWNER TO userName
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName RENAME COLUMN columnName TO newColumnName
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName DROP COLUMN columnName
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName ADD COLUMN columnName type [ NULL | NOT NULL ] [DEFAULT defaultValue] [(BEFORE | AFTER) columnName]
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName MODIFY COLUMN columnName SET NOT NULL
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName MODIFY COLUMN columnName DROP NOT NULL
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName MODIFY COLUMN columnName SET COLLATION collation
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName MODIFY COLUMN columnName SET DEFAULT value
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName MODIFY COLUMN columnName DROP DEFAULT
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName MODIFY COLUMN columnName SET TYPE type
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName MODIFY COLUMN columnName SET POSITION ( BEFORE | AFTER ) columnName
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName ADD PRIMARY KEY ( columnName | '(' columnName [ , columnName ]* ')' )
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName DROP PRIMARY KEY
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName ADD CONSTRAINT constraintName UNIQUE ( columnName| '(' columnName [ , columnName ]* ')' )
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName DROP CONSTRAINT constraintName
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName ADD CONSTRAINT foreignKeyName FOREIGN KEY ( columnName | '(' columnName [ , columnName ]* ')' ) REFERENCES [ databaseName . ] [ schemaName . ] tableName '(' columnName [ , columnName ]* ')' [ ON UPDATE ( CASCADE | RESTRICT | SET NULL | SET DEFAULT ) ] [ ON DELETE ( CASCADE | RESTRICT | SET NULL | SET DEFAULT ) ]
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName DROP FOREIGN KEY foreignKeyName
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName ADD [UNIQUE] INDEX indexName ON ( columnName | '(' columnName [ , columnName ]* ')' ) [ USING indexType ]
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName DROP INDEX indexName
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName ADD PLACEMENT [( columnName | '(' columnName [ , columnName ]* ')' )] ON STORE storeUniqueName
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName MODIFY PLACEMENT ( ADD | DROP ) COLUMN columnName ON STORE storeUniqueName
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName MODIFY PLACEMENT '(' columnName [ , columnName ]* ')' ON STORE storeUniqueName 
     | ALTER TABLE [ databaseName . ] [ schemaName . ] tableName DROP PLACEMENT ON STORE storeUniqueName
     | ALTER CONFIG key SET value
     | ALTER STORES ADD storeName USING adapterClass WITH config 
     | ALTER STORES DROP storeName
     
explain:
      EXPLAIN PLAN
      [ WITH TYPE | WITH IMPLEMENTATION | WITHOUT IMPLEMENTATION ]
      [ EXCLUDING ATTRIBUTES | INCLUDING [ ALL ] ATTRIBUTES ]
      [ AS JSON | AS XML ]
      FOR ( query | insert | update | merge | delete )

describe:
      DESCRIBE DATABASE databaseName
   |  DESCRIBE CATALOG [ databaseName . ] catalogName
   |  DESCRIBE SCHEMA [ [ databaseName . ] catalogName ] . schemaName
   |  DESCRIBE [ TABLE ] [ [ [ databaseName . ] catalogName . ] schemaName . ] tableName [ columnName ]
   |  DESCRIBE [ STATEMENT ] ( query | insert | update | merge | delete )

insert:
      ( INSERT | UPSERT ) INTO tablePrimary
      [ '(' column [, column ]* ')' ]
      query

update:
      UPDATE tablePrimary
      SET assign [, assign ]*
      [ WHERE booleanExpression ]

assign:
      identifier '=' expression

merge:
      MERGE INTO tablePrimary [ [ AS ] alias ]
      USING tablePrimary
      ON booleanExpression
      [ WHEN MATCHED THEN UPDATE SET assign [, assign ]* ]
      [ WHEN NOT MATCHED THEN INSERT VALUES '(' value [ , value ]* ')' ]

delete:
      DELETE FROM tablePrimary [ [ AS ] alias ]
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
      [ LIMIT [ start, ] { count | ALL } ]
      [ OFFSET start { ROW | ROWS } ]
      [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]

withItem:
      name
      [ '(' column [, column ]* ')' ]
      AS '(' query ')'

orderItem:
      expression [ ASC | DESC ] [ NULLS FIRST | NULLS LAST ]

select:
      SELECT [ STREAM ] [ ALL | DISTINCT ]
          { * | projectItem [, projectItem ]* }
      FROM tableExpression
      [ WHERE booleanExpression ]
      [ GROUP BY { groupItem [, groupItem ]* } ]
      [ HAVING booleanExpression ]
      [ WINDOW windowName AS windowSpec [, windowName AS windowSpec ]* ]

selectWithoutFrom:
      SELECT [ ALL | DISTINCT ]
          { * | projectItem [, projectItem ]* }

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
      tablePrimary
      [ matchRecognize ]
      [ [ AS ] alias [ '(' columnAlias [, columnAlias ]* ')' ] ]

tablePrimary:
      [ [ catalogName . ] schemaName . ] tableName
      '(' TABLE [ [ catalogName . ] schemaName . ] tableName ')'
  |   tablePrimary [ EXTEND ] '(' columnDecl [, columnDecl ]* ')'
  |   [ LATERAL ] '(' query ')'
  |   UNNEST '(' expression ')' [ WITH ORDINALITY ]
  |   [ LATERAL ] TABLE '(' [ SPECIFIC ] functionName '(' expression [, expression ]* ')' ')'

columnDecl:
      column type [ NOT NULL ]

values:
      VALUES expression [, expression ]*

groupItem:
      expression
  |   '(' ')'
  |   '(' expression [, expression ]* ')'
  |   CUBE '(' expression [, expression ]* ')'
  |   ROLLUP '(' expression [, expression ]* ')'
  |   GROUPING SETS '(' groupItem [, groupItem ]* ')'

windowRef:
      windowName
  |   windowSpec

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