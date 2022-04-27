import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
  query,
  addNote,
}

const NOTES_KEY = 'noteDB'

function query(filterBy) {
  let notes = _loadFromStorage()

  if (!notes) {
    notes = _createNotes()
    _saveToStorage(notes)
  }
  //   if (filterBy) {
  //     let { title, minPrice, maxPrice } = filterBy
  //     if (!minPrice) minPrice = 0
  //     if (!maxPrice) maxPrice = Infinity
  //     notes = notes.filter(
  //       note =>
  //         note.listPrice.amount > minPrice &&
  //         note.listPrice.amount < maxPrice &&
  //         note.title.toLowerCase().includes(title.toLowerCase())
  //     )
  //   }
  return Promise.resolve(notes)
}

function _createNotes() {
  return [
    _createNote('note-txt', false, { txt: 'first note 😄' }),
    _createNote('note-txt', false, { txt: 'NOTEice me senpai' }),
  ]
}

function addNote(note) {
  let notes = _loadFromStorage()
  note.id = utilService.makeId()
  notes = [note, ...notes]
  _saveToStorage(notes)
  return Promise.resolve()
}

function _createNote(type, isPinned, info, style) {
  return {
    id: utilService.makeId(),
    type,
    isPinned,
    info,
    style,
  }
}

function _saveToStorage(notes) {
  storageService.saveToStorage(NOTES_KEY, notes)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(NOTES_KEY)
}
