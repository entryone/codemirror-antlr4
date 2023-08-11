import {ANTLRErrorStrategy, ANTLRInputStream, CommonTokenStream} from 'antlr4ts';
import {MathCalculatorLexer} from "./MathCalculator/MathCalculatorLexer";
import {MathCalculatorParser} from "./MathCalculator/MathCalculatorParser";

import { MathCalculatorListener } from './MathCalculator/MathCalculatorListener'
import {Parser} from "antlr4ts/Parser";
import {RecognitionException} from "antlr4ts/RecognitionException";
import {Token} from "antlr4ts/Token";
import * as c3 from "antlr4-c3";

class EnterFunctionListener implements MathCalculatorListener {
    // Assuming a parser rule with name: `functionDeclaration`
    //enterR (context: RegularContext) {
    //    console.log(`Function start line number ${context._start.line}`)
    //    // ...
    //}

    // other enterX functions...
    enterRegular () {
        console.log('enter reh')
    }
}

export const parse = (text: string) => {
    let inputStream = new ANTLRInputStream(text);
    let lexer = new MathCalculatorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    //tokenStream.fill()
    let parser = new MathCalculatorParser(tokenStream);
    //parser.state = 1
    //console.log('expected', parser.getExpectedTokens())
    //parser.errorHandler = new MyErrorStrategy()
    let tree = parser.expr();
    let core = new c3.CodeCompletionCore(parser);
    let candidates = core.collectCandidates(2);
    console.log('candidates', candidates)
    console.log('36', parser.vocabulary.getDisplayName(36))
    //let tree = parser.start();
    //console.log('tree', tree)

    //const listener: MathCalculatorListener = new EnterFunctionListener();
    //ParseTreeWalker.DEFAULT.walk(listener, tree)
}

class MyErrorStrategy implements ANTLRErrorStrategy {
    reportError (recognizer: Parser, e: RecognitionException) {
        console.log('errrr', recognizer, e)
    }

    inErrorRecoveryMode(recognizer: Parser): boolean {
        return false;
    }

    recover(recognizer: Parser, e: RecognitionException): void {
    }

    recoverInline(recognizer: Parser): Token {
        return {} as Token;
    }

    reportMatch(recognizer: Parser): void {
    }

    reset(recognizer: Parser): void {
    }

    sync(recognizer: Parser): void {
    }
    reportNoViableAlternative(recognizer: Parser, e: any) {
        console.log('NoViable')
    }
}

export function getSuggestions (context: any) {
    const text = context.state.doc.toString();
    let inputStream = new ANTLRInputStream(text);
    let lexer = new MathCalculatorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    //tokenStream.fill()
    let parser = new MathCalculatorParser(tokenStream);
    //parser.state = 1
    //console.log('expected', parser.getExpectedTokens())
    //parser.errorHandler = new MyErrorStrategy()
    let tree = parser.expr();
    let core = new c3.CodeCompletionCore(parser);
    const candidates = core.collectCandidates(2)

    //candidates.tokens
    const items: any[] = []
    Array.from(candidates.tokens.keys()).forEach((it) => {
        //console.log('it', it)
        items.push({
            label: parser.vocabulary.getDisplayName(it).replace(/'/g, ''),
            type: "keyword"
        })
    })
    Object.entries(candidates.tokens).forEach((item, key) => {
        console.log('key', key)
        items.push({
            label: parser.vocabulary.getDisplayName(key),
            type: "keyword"
        })
    })
    return items
    //console.log('candidates', candidates)
    //console.log('36', parser.vocabulary.getDisplayName(36))
    //let tree = parser.start();
    //console.log('tree', tree)

    //const listener: MathCalculatorListener = new EnterFunctionListener();
    //ParseTreeWalker.DEFAULT.walk(listener, tree)

}