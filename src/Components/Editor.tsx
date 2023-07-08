import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { InitialContent } from './InitialContent'
import 'highlight.js/styles/atom-one-dark.css'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

lowlight.registerLanguage('html', html)
lowlight.registerLanguage('ts', ts)

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: InitialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  })
  return (
    <EditorContent
      editor={editor}
      className="max-w-[700px] mx-auto pt-16 prose "
    />
  )
}
