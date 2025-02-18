import {EditorView, Decoration, DecorationSet} from "@codemirror/view"
import {StateField, StateEffect} from "@codemirror/state"

const addUnderline = StateEffect.define<{from: number, to: number}>({
    map: ({from, to}, change) => ({from: change.mapPos(from), to: change.mapPos(to)})
})

const underlineField = StateField.define<DecorationSet>({
    create() {
        return Decoration.none
    },
    update(underlines, tr) {
        underlines = underlines.map(tr.changes)
        for (let e of tr.effects) if (e.is(addUnderline)) {
            underlines = underlines.update({
                add: [underlineMark.range(e.value.from, e.value.to)]
            })
        }
        return underlines
    },
    provide: f => EditorView.decorations.from(f)
})

const underlineMark = Decoration.mark({class: "cm-underline"})

const underlineTheme = EditorView.baseTheme({
    ".cm-underline": { textDecoration: "underline 1px black" }
})

export function underlineSelection(view: EditorView) {
    let effects: StateEffect<unknown>[] = view.state.selection.ranges
        .filter(r => !r.empty)
        .map(({from, to}) => addUnderline.of({from, to}))
    if (!effects.length) return false

    if (!view.state.field(underlineField, false))
        effects.push(StateEffect.appendConfig.of([underlineField,
            underlineTheme]))
    view.dispatch({effects})
    return true
}