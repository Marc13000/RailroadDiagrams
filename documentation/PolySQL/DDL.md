---
layout: plain
title: Schema Manipulation
---

Overview on the available statements for defining and altering the schema in a [BNF](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form)-like form.

{% highlight sql %}
<!--- BNF start --->
statement:
      alterStatement
  |   createSchemaStatement
  |   createTableStatement
  |   createViewStatement
  |   createMaterializedViewStatement
  |   dropSchemaStatement
  |   dropTableStatement
  |   dropViewStatement
  |   truncateTableStatement

createSchemaStatement:
      CREATE [ OR REPLACE ] SCHEMA [ IF NOT EXISTS ] name

createTableStatement:
      CREATE TABLE [ IF NOT EXISTS ] [ schemaName . ] name
      [ '(' tableElement [, tableElement ]* ')' ]
      [ ON STORE store ]
      [ PARTITION BY ( HASH | RANGE | LIST ) '(' columnName ')' [ PARTITIONS numberPartitions | with ( partitionName1, partitionName2 [, partitionNameN ]* ) ] ]

createViewStatement:
      CREATE VIEW [ OR REPLACE ] [ schemaName . ] name
      [ '(' tableElement [, tableElement ]* ')' ]
      [ AS query ]

createMaterializedViewStatement:
	CREATE MATERIALIZED VIEW [ IF NOT EXISTS ] [ schemaName . ] name
	[ '(' tableElement [, tableElement ]* ')' ]
	[ AS query ]
	[ <ON> <STORE> storeName ( <COMMA> storeName )* ]
	[ FRESHNESS (INTERVAL interval timeUnit | UPDATE interval | MANUAL ) ]

tableElement:
      columnName type [ NOT ] NULL [ DEFAULT value ]
  |   PRIMARY KEY '(' columnName [, columnName ]* ')'
  |   UNIQUE '(' columnName [, columnName ]* ')'

dropSchemaStatement:
      DROP SCHEMA [ IF EXISTS ] [ schemaName . ] name

dropTableStatement:
      DROP TABLE [ IF EXISTS ] [ schemaName . ] name

dropViewStatement:
      DROP [ MATERIALIZED ] VIEW [ IF EXISTS ] [ schemaName . ] name
      
truncateTableStatement:
      TRUNCATE TABLE [ schemaName . ] name
<!--- BNF end --->

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