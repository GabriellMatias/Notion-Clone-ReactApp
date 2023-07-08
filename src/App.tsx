import { Editor } from './Components/Editor'

function App() {
  return (
    <div className="min-h-screen text-zinc-900 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-8">
      <div className="bg-white w-[1100px] mx-auto rounded-xl overflow-hidden grid grid-cols-[16rem_1fr] min-h-[720px] shadow-sm border border-black/20">
        <aside className="bg-zinc-50 border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-red-500" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-yellow-500" />
            <button className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-green-500" />
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}

export default App
