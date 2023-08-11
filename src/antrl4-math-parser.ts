// import antlr from "antlr4";
import { CharStreams, CommonTokenStream, CommonToken } from 'antlr4ts';
import { styleTags, tags, Tag } from "@lezer/highlight";
import { StreamLanguage, /* HighlightStyle,*/ } from "@codemirror/language";
// import { tags } from "@lezer/highlight";
//import { CustomColumnExpressionsLexer } from './antrl4-lang-grammar/CustomColumnExpressionsLexer';
import { MathCalculatorLexer } from './MathCalculator/MathCalculatorLexer';
import {MathCalculatorParser} from "./MathCalculator/MathCalculatorParser";
function getStyleNameByTag(tag: Tag): string {
    for (let t in tags) {
        if ((tags as any)[t] === tag) {
            return t;
        }
    }

    return '';
}
function getTokenNameByTokenValue(tokenValue: number): string {
    const lexer = MathCalculatorLexer;
    for (let tokenName in lexer) {
        if (((lexer as any)[tokenName] as number) === tokenValue) {
            return tokenName;
        }
    }

    return '';
}

function getTokens(tokens: CommonToken[]) {
    return tokens.map((token) => {
        return { 
            tokenName: getTokenNameByTokenValue(token.type),
            text: token.text || '',
            type: token.type,
            startIndex: token.startIndex,
            stopIndex: token.stopIndex
        };
    });
}

export function getTokensForText(text: string) {
    var chars = CharStreams.fromString(text);
    var lexer = new MathCalculatorLexer(chars);
    var tokensStream = new CommonTokenStream(lexer);
    tokensStream.fill();
    return getTokens((tokensStream as any).tokens);
  }

export function getTokensStream(text: string) {
    var chars = CharStreams.fromString(text);
    var lexer = new MathCalculatorLexer(chars);
    return new CommonTokenStream(lexer);
}


// const myHighlightStyle = HighlightStyle.define([
//   { tag: tags.keyword, color: "#fc6" },
//   { tag: tags.comment, color: "#f5d", fontStyle: "italic" }
// ]);

  export const antrl4MathParser = StreamLanguage.define({
    token: (stream, state) => {
        console.log('stream', stream)
        const tokens = getTokensForText(stream.string);
        const tStream = getTokensStream(stream.string)
        const parser = new MathCalculatorParser(tStream)
        const nextToken = tokens.filter(t => t.startIndex >= stream.pos)[0];
        // we iterate over the stream and match the token text to advance the stream
        // returning the token type that is used for the styling
        if (nextToken.type !== MathCalculatorLexer.EOF && stream.match(nextToken.text)) {
            let valueClass = getStyleNameByTag(tags.keyword);

            console.log('nextToken.type', nextToken)
            switch (nextToken.type) {
                case MathCalculatorLexer.FUNCTIONS:
                    console.log('vvvvv')
                    valueClass = getStyleNameByTag(tags.string);
                    break;
                case MathCalculatorLexer.NUMBER:
                    valueClass = getStyleNameByTag(tags.number);
                    break;
                default: 
                    valueClass ='keyword';
                    break;
             }

            return valueClass;
        } else {
            stream.next();
            return null;
        }
    },
    tokenTable: {
        // Identifier: tags.keyword,
        // Boolean: tags.bool,
        // String: tags.string,
        // LineComment: tags.lineComment,
    }
});