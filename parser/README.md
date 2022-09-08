### JAIDITYA KHEMANI

# BNF MANUAL FOR POLYPHENY DOCUMENTATION

Any part of the documentation that should contain railroad diagrams should be between <!--- BNF start ---> and <!--- BNF end ---> tags. To run the parser in terminal for testing cd into the parser directory and run the command “node parser.js”.

  1. ## Titles of Diagrams
  
     1. ### They should start with a capital letter and end with a “ : ” (do not copy the quote marks).
     
  2. ## Content
  
     1. ### Content should be placed below the title and there should be a line left after the content and before the next title.
     2. ### Colour of the content can be changed by editing the colours in the styles tag in the “railroad.js” file in the Terminal2, Terminal3 elements.
     3. ### To change the Color of the main text in diagrams edit the colour of terminal in the commented CSS being added in both the “parser.js” and “railroad.js” files.

3. ## STYLES EXPLAINED

Elements of the content of BNF Syntax:

  1. #### *OR: It is represented by “|”. And should have a space on either side when being used.*
  2. #### *Elements that are full capitalized signify Terminal2 elements which are assigned a different colour.*
  3. #### *Any two elements with a space in between them are treated as a separate element.*
  4. #### *If you want elements like . , \* to be treated as a printable element just use it normally and leave spaces in between them so that they are printed separately.*
  5. #### *All elements which are of length 1 will be treated as NonTerminal type of element which has a different shape and colour.*
  6. #### *When brackets are put between commas they are treated as an element to be printed when they aren’t they are treated accordingly:*
     1. ##### *(  ), { } -> indicated a bunch of BNF syntax to be evaluated as a whole.*
     2. ##### *[ ] -> indicates a bunch of BNF syntax which is optional.*
     3. ##### *( )\* -> indicates a bunch of BNF syntax to be looped.*
     4. ##### *[, ]\* -> indicates comma separated optional BNF syntax.*
     5. ##### *<> -> text put in <> should not have a space following the bracket opening and before the bracket closes. It represents an element of Terminal3 type which is assigned a different colour itself.*
