import {syntaxTree} from "@codemirror/language"
import {linter, Diagnostic} from "@codemirror/lint"
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {MathCalculatorLexer} from "./MathCalculator/MathCalculatorLexer";
import {Interval} from "antlr4ts/misc/Interval";

export const simpleLinter = linter(view => {
    let diagnostics: Diagnostic[] = []
    //console.log('view.state', view.state)
    //console.log('erros', getErrors(view.state.doc.toString()))
    getErrors(view.state.doc.toString()).forEach(error => {
        diagnostics.push({
            from: error.startIndex,
            to: error.endIndex === error.startIndex ? error.endIndex + 1 : error.endIndex,
            severity: "warning",
            message: error.msg,
            actions: [{
                name: "Remove",
                apply(view, from, to) { view.dispatch({changes: {from, to}}) }
            }]
        })
    })
    syntaxTree(view.state).cursor().iterate(node => {
        //console.log('node.name', node)
        if (node.name == "RegExp") diagnostics.push({
            from: node.from,
            to: node.to,
            severity: "warning",
            message: "Regular expressions are FORBIDDEN",
            actions: [{
                name: "Remove",
                apply(view, from, to) { view.dispatch({changes: {from, to}}) }
            }]
        })
    })
    return diagnostics
})


export function getErrors(text: string) {
    var chars = CharStreams.fromString(text);
    //console.log('chars', chars)
    var lexer = new MathCalculatorLexer(chars);
    const errors: any[] = []
    lexer.notifyListeners = (e) => {
        //console.log('eerr', e)
        //debugger
        let text = lexer.inputStream.getText(Interval.of(lexer._tokenStartCharIndex, lexer._input.index));
        let msg = lexer._tokenStartCharIndex + ":" + lexer._input.index + ": token recognition error at: '" +
            lexer.getErrorDisplay(text) + "'";
        console.log('error', msg)
        errors.push({
            msg,
            startIndex: lexer._tokenStartCharIndex,
            endIndex: lexer._input.index
        })
        //let listener = lexer.getErrorListenerDispatch();
        //if (listener.syntaxError) {
        //    listener.syntaxError(lexer, undefined, lexer._tokenStartLine, lexer._tokenStartCharPositionInLine, msg, e);
        //}
    }
    //console.log('errors', errors)
    var tokensStream = new CommonTokenStream(lexer);
    tokensStream.fill();
    //return getTokens((tokensStream as any).tokens);
    return errors
}
