import {
  drawSelection,
  EditorView,
  highlightActiveLine,
  highlightSpecialChars,
  keymap,
  highlightActiveLineGutter,
} from "@codemirror/view";
import {EditorState, RangeSet} from "@codemirror/state";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { completions } from "./completion";
import { wordHover } from "./hover-tooltip";

import {
  syntaxHighlighting,
  defaultHighlightStyle,
  indentOnInput,
} from "@codemirror/language";
import { antrl4Lang, getTokensForText } from "./antrl4-lang";
import {placeholdersPlugin} from "./atomicRanges";
import {antrl4MathLang} from "./antrl4-math-lang";
import {simpleLinter} from "./linter";

export function createView({ doc, parent }: { doc: string; parent: any }) {
  let firstUpdate = true;
  const extensions = [
    //lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    drawSelection(),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    syntaxHighlighting(defaultHighlightStyle),
    highlightActiveLine(),
    highlightSelectionMatches(),
    keymap.of([...defaultKeymap, ...searchKeymap, ...historyKeymap]),
    //antrl4Lang,
    antrl4MathLang,
    simpleLinter,
    //antrl4MathParser,
    wordHover,
    completions,
    placeholdersPlugin,
    EditorView.updateListener.of((update) => {
      if (update.docChanged || firstUpdate) {
        firstUpdate = false;
        //console.log("document has changed");
        const text = update.view.state.doc.toString();
        const tokens = getTokensForText(text);
        //console.log('tokens', tokens)
        //console.log('text', update.view.state.doc.toString())
        //parse(update.view.state.doc.toString())
        //console.log('parent', parent)
        //const parcer = new MathCalculatorParser()
      }
    }),
  ];

  const state = EditorState.create({ doc, extensions });

  return new EditorView({ state, parent});
}
