import { useEffect, useRef } from "react";

import { createView } from "./codemirror";
import {EditorView} from "@codemirror/view";
import {underlineSelection} from "./toolbar";

export default function CodeMirrorEditor({ doc }: { doc: string }) {
  const ref = useRef(null);
  const editorView = useRef<EditorView>();

  useEffect(() => {
    const view = createView({
      doc,
      parent: ref.current,
    });
    editorView.current = view

    // Disabled because it steals focus from the CSB editor :)
    // view.focus();
    return () => {
      view.destroy();
    };
  }, [doc]);

  const onClick = () => {
    console.log('click', editorView.current)
    editorView.current && underlineSelection(editorView.current)
  }
  return <div>
    <button onClick={onClick} >underline</button>
    <div ref={ref} style={{ border: '1px solid black', height: 300, overflow: "auto" }}></div>;
  </div>
}
