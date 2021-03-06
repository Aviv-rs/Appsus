import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
  query,
  addNote,
  deleteNote,
  toggleTodo,
  changeStyle,
  duplicateNote,
  togglePin,
  addMailAsNote,
  getById,
  updateNoteInfo,
}

const NOTES_KEY = 'noteDB'

function query(filterBy) {
  let notes = _loadFromStorage()

  if (!notes) {
    notes = _createNotes()
    _saveToStorage(notes)
  }
  if (filterBy) {
    let { txt, type } = filterBy

    notes = notes.filter(note => {
      let { txt: noteTxt = '', title = '' } = note.info
      console.log(title)
      if (note.type === 'note-todos') {
        noteTxt = note.info.todos.map(note => note.txt).join(' ')
      }

      return (
        noteTxt.toLowerCase().includes(txt.toLowerCase()) &&
        noteTxt.toLowerCase().includes(title.toLowerCase()) &&
        note.type.includes(type)
      )
    })
  }
  return Promise.resolve(notes)
}

function _createNotes() {
  return [
    _createNote('note-txt', true, { txt: 'Learn React' }),
    _createNote('note-txt', false, { txt: 'NOTEice me senpai' }),
    _createNote('note-todos', false, {
      todos: [
        { id: utilService.makeId(), txt: 'Ace this sprint', isDone: false },
        {
          id: utilService.makeId(),
          txt: 'Make Tommy proud',
          isDone: false,
        },
      ],
    }),
    _createNote('note-video', false, {
      url: 'https://www.youtube.com/watch?v=IYnsfV5N2n8&ab_channel=TomSka',
    }),
    _createNote('note-img', false, {
      url: 'https://files.slack.com/files-pri/T02SFLQBMS9-F03C5UWCJPM/memeking__1_.png?pub_secret=cde5f56c52',
    }),
    _createNote('note-txt', false, { txt: 'Call puki' }),
    _createNote('note-video', false, {
      url: 'https://www.youtube.com/watch?v=Dc2HrGjWwos&ab_channel=UchihaSasuke327',
    }),
    _createNote('note-txt', false, { txt: 'Add duplication button' }),
  ]
}

function addNote(note) {
  let notes = _loadFromStorage()
  note.id = utilService.makeId()
  if (note.type === 'note-todos') {
    note.info.todos = note.info.todos
      .split(',')
      .map(todo => ({ txt: todo, isDone: false, id: utilService.makeId() }))
  }
  notes = [note, ...notes]
  _saveToStorage(notes)
  return Promise.resolve()
}

function updateNoteInfo(noteId, info) {
  let notes = _loadFromStorage()
  const note = notes.find(note => note.id === noteId)
  note.info = info
  _saveToStorage(notes)
  return Promise.resolve()
}

function addMailAsNote(mail) {
  let notes = _loadFromStorage()
  const note = _createNote(
    'note-txt',
    false,
    { title: mail.subject, txt: mail.body },
    undefined,
    'mail'
  )
  note.id = mail.id

  notes = [note, ...notes]
  _saveToStorage(notes)
  return Promise.resolve()
}

function duplicateNote(noteId) {
  let notes = _loadFromStorage()

  const noteIdx = notes.findIndex(note => note.id === noteId)
  const note = { ...notes[noteIdx] }
  note.id = utilService.makeId()
  notes.splice(noteIdx, 0, note)
  _saveToStorage(notes)
  return Promise.resolve()
}

function togglePin(noteId) {
  let notes = _loadFromStorage()
  const note = notes.find(note => note.id === noteId)
  note.isPinned = !note.isPinned
  _saveToStorage(notes)
  return Promise.resolve()
}

function toggleTodo(todoId, noteId) {
  let notes = _loadFromStorage()
  const note = notes.find(note => note.id === noteId)
  const todo = note.info.todos.find(todo => todo.id === todoId)
  todo.isDone = !todo.isDone
  _saveToStorage(notes)
  return Promise.resolve()
}

function deleteNote(noteId) {
  let notes = _loadFromStorage()
  notes = notes.filter(note => note.id !== noteId)
  _saveToStorage(notes)
  return Promise.resolve()
}

function changeStyle(noteId, style) {
  let notes = _loadFromStorage()
  const note = notes.find(note => note.id === noteId)
  note.style = style
  _saveToStorage(notes)
  return Promise.resolve()
}

function getById(noteId) {
  let notes = _loadFromStorage()
  return Promise.resolve(notes.find(note => note.id === noteId))
}

function _createNote(type, isPinned, info, style = {}, label = '') {
  return {
    id: utilService.makeId(),
    type,
    isPinned,
    info,
    style,
    label,
  }
}

function _saveToStorage(notes) {
  storageService.saveToStorage(NOTES_KEY, notes)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(NOTES_KEY)
}
