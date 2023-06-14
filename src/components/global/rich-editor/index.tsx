import './style.less'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'

interface RichEditorProps {
    value?: string,
    onChange?: (content: string) => void
}

const RichEditor: React.FC<RichEditorProps> = (props) => {
    const { value, onChange } = props
    const [editor, setEditor] = useState<IDomEditor | null>(null)
    const [html, setHtml] = useState(value || '')
    const toolbarConfig: Partial<IToolbarConfig> = {}
    const editorConfig: Partial<IEditorConfig> = {
        placeholder: '请输入内容...',
    }
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    useEffect(() => {
        onChange?.(html)
    }, [html])

    return (
        <div className='w-full h-full border flex flex-col'>
            <Toolbar
                editor={editor}
                defaultConfig={toolbarConfig}
                mode="default"
                className='border-b'
            />
            <Editor
                defaultConfig={editorConfig}
                value={html}
                onCreated={setEditor}
                onChange={editor => setHtml(editor.getHtml())}
                mode="default"
                className='flex-1 overflow-y-auto'
            />
        </div>
    )
}
export default RichEditor