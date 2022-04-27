import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

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
  return [_createNote('note-txt', false, { txt: 'first note 😄' })]
}

function _createNote(type, isPinned, info, style) {
  return {
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
