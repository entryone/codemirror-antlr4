grammar MathCalculator;

start : expr EOF;
SUM: 'SUM';
AVG: 'AVG';
AVG_INC: 'AVG.INC';
FUNCTIONS: SUM | AVG;
expr  : INT #index
      | NUMBER #doubleValue
      | name='REF' LP DIM_REF RP             #sameRef
      | name='REF_O' LP DIM_REF RP           #oppositeRef
      | name=(SUM | AVG | AVG_INC |'AVG.EXC'|'MIN'|'MAX'|'CUMULATE') LP expr (COMMA expr)* RP #regular
      | name=('ABS'|'XXX'|'VPT'|'CNT'|'HPT'|'VOL'|'MEAN'|'CUMULATE'|'BASE'|'UBASE'|'RANK'|'PERCENTRANK') LP expr RP #single
      | name=('SUM'|'AVG'|'AVG.P'|'COUNT'|'MAX'|'MIN'|'Max.Label'|'Stat.Base'|'Unweighted.Base'|'Weighted.Avg') #legacy
      | name='ROUND' LP expr (';'|',') sign='-'? precision=INT RP #round
      | name='CORR' LP CELL_LOCATOR_O RP #corr
      | name='CELL' LP row=CELL_LOCATOR_S ',' col=CELL_LOCATOR_O RP #cell
      | LP inner=expr RP #paren
      | left=expr op=('*'|'/') right=expr #math
      | left=expr op=('+'|'-') right=expr #math
      ;

LP: '(';
RP: ')';
COMMA: ',';


NUMBER: [0-9]+'.'[0-9]* ;
INT   : [0-9]+ ;
DIM_BY_NAME   : '"' ~('\r' | '\n' | '"' | '('| ')'| ','| ';')+ '"' ;
DIM_REF   : '\\[\\[' ~('\r'| '[' | ']' | '\n' | '"' | '('| ')'| ','| ';')+ '\\]\\]' ;
CELL_LOCATOR_S: ('FIRST'|'LAST'|'REF' LP DIM_REF RP | DIM_REF) ;
CELL_LOCATOR_O: ('FIRST'|'LAST'|'REF_O' LP DIM_REF RP | DIM_REF) ;

WS    : [ \t\r\n]+ -> skip ;