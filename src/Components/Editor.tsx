import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { InitialContent } from './InitialContent'
import 'highlight.js/styles/atom-one-dark.css'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from 'react-icons/rx'
import { BubbleButton } from './BubbleButton'

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
    <>
      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-invert "
      />
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg flex overflow-hidden divide-x divide-zinc-600"
          editor={editor}
        >
          <BubbleButton>
            <RxChevronDown className="w-4 h-4" />
            Text
          </BubbleButton>
          <BubbleButton>
            <RxChatBubble className="w-4 h-4" />
            Comment
          </BubbleButton>
          <div className="items-center flex">
            <BubbleButton>
              <RxFontBold className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxFontItalic className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxStrikethrough className="w-4 h-4" />
            </BubbleButton>
            <BubbleButton>
              <RxCode className="w-4 h-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  )
}
