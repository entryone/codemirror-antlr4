// Our list of completions (can be static, since the editor
/// will do filtering based on context).
import { autocompletion } from "@codemirror/autocomplete";
import {getSuggestions} from "./parser";

/*const completionsList = [
  { label: "panic", type: "keyword" },
  { label: "park", type: "constant", info: "Test completion" },
  { label: "password", type: "variable" },
  {label: "male", type: "text", apply: "[[0]]", detail: "var"},
  {label: "female", type: "text", apply: "[[1]]", detail: "var"}
];*/

function langCompletions(context: any) {
  const suggestions = getSuggestions(context)
  //console.log('context', getSuggestions(context))
  let before = context.matchBefore(/\w+/);
  console.log('before', before)
  console.log('suggestions', suggestions)
  // If completion wasn't explicitly started and there
  // is no word before the cursor, don't open completions.
  //TODO REMOVE if (!context.explicit && !before) return null;
  return {
    from: /*before ? before.from : */context.pos,
    options:  suggestions, //completionsList,
    validFor: /^\w*$/,
  };
}

export const completions = autocompletion({ override: [langCompletions] });
