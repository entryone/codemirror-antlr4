import {Decoration, DecorationSet, EditorView,
    ViewPlugin, ViewUpdate} from "@codemirror/view"
import {MatchDecorator, WidgetType} from "@codemirror/view"
import {codePointAt} from "@codemirror/state";

const placeholderMatcher = new MatchDecorator({
    regexp: /\[\[(\w+)\]\]/g,
    //decoration: match => Decoration.replace({
    //    widget: new PlaceholderWidget(),
    //}),
    decoration: (match, view, pos) => {
        let { doc } = view.state;
        let code = codePointAt(match[0], 0);
        return Decoration.replace({
            widget: new PlaceholderWidget(match[1])
        })
    }
})
export const placeholdersPlugin = ViewPlugin.fromClass(class {
    placeholders: DecorationSet
    constructor(view: EditorView) {
        this.placeholders = placeholderMatcher.createDeco(view)
    }
    update(update: ViewUpdate) {
        this.placeholders = placeholderMatcher.updateDeco(update, this.placeholders)
    }
}, {
    decorations: instance => instance.placeholders,
    provide: plugin => EditorView.atomicRanges.of(view => {
        return view.plugin(plugin)?.placeholders || Decoration.none
    })
})

const columns = [{
    id: '0',
    name: 'Male'
}, {
    id: '1',
    name: 'Female'
}]

class PlaceholderWidget extends WidgetType {
    //private value: string
    private column: any
    constructor(value: string) {
        super();
        this.column = columns.find(column => column.id === value)
    }
    toDOM(view: EditorView): HTMLElement {
        const el = document.createElement('span')
        el.style.border = '1px solid red'
        el.style.padding = '0 3px'
        el.title = this.column ? 'id = '+this.column.id : '#error'
        el.style.backgroundColor = '#ECECEC'
        el.innerText = this.column ? this.column.name : '#error'
        return el
    }
}

