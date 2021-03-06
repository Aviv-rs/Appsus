import { storageService } from '../../../services/storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const emailService = {
  query,
  getById,
  markAsUnread,
  removeMail,
  sendMail,
  sortMail,
}

const KEY = 'emailDB'
const loggedinUser = {
  email: 'user@appsus.com',
  fullname: 'Mahatma Appsus',
}

function query(filterBy, folderBy) {
  let gMails = _loadFromStorage()
  if (!gMails) {
    gMails = _createMails()
    _saveToStorage(gMails)
  }
  if (!gMails) return
  if (filterBy) {
    gMails = gMails.filter(mail => {
      return mail.subject.includes(filterBy)
    })
  }
  if (folderBy) {
    gMails = gMails.filter(mail => {
      return mail.status === folderBy
    })
  }
  return Promise.resolve(gMails)
}

function getById(id) {
  let gMails = _loadFromStorage()
  const mail = gMails.find(mail => mail.id === id)
  if (!mail) return
  mail.isRead = true
  _saveToStorage(gMails)
  return mail
}

function markAsUnread(id) {
  let gMails = _loadFromStorage()
  if (!gMails || !gMails.length) return
  const mail = gMails.find(mail => mail.id === id)
  mail.isRead = !mail.isRead
  _saveToStorage(gMails)
  return Promise.resolve(gMails)
}

function removeMail(id) {
  let gMails = _loadFromStorage()
  if (!gMails) return
  const mailIdx = gMails.findIndex(mail => mail.id === id)
  gMails.splice(mailIdx, 1)
  _saveToStorage(gMails)
  return Promise.resolve(gMails)
}

function sendMail(to, subject, body) {
  let gMails = _loadFromStorage()
  const newMail = {
    id: utilService.makeId(),
    status: 'Sent Mail',
    subject,
    body,
    isRead: true,
    sentAt: Date.now(),
    from: loggedinUser.fullname,
    to,
    labels: ['important', 'romantic'],
  }
  gMails.push(newMail)
  _saveToStorage(gMails)
  return Promise.resolve(newMail)
}

function sortMail(sorter) {
  let gMails = _loadFromStorage()
  if (!gMails) return
  switch (sorter) {
    case 'Oldest to Newest':
      gMails.sort((a, b) =>
        a.sentAt > b.sentAt ? 1 : b.sentAt > a.sentAt ? -1 : 0
      )
      break
    case 'Newest to Oldest':
      gMails.sort((a, b) =>
        a.sentAt > b.sentAt ? -1 : b.sentAt > a.sentAt ? -1 : 0
      )
      break
    case 'A-Z':
      gMails.sort((a, b) =>
        a.subject.toLowerCase() > b.subject.toLowerCase()
          ? 1
          : b.subject.toLowerCase() > a.subject.toLowerCase()
          ? -1
          : 0
      )
      break
    case 'Z-A':
      gMails.sort((a, b) =>
        a.subject.toLowerCase() > b.subject.toLowerCase()
          ? -1
          : b.subject.toLowerCase() > a.subject.toLowerCase()
          ? 1
          : 0
      )
      break
  }

  _saveToStorage(gMails)
  return Promise.resolve(gMails)
}

function _createMails() {
  return [
    _createMail(
      utilService.makeLorem(3),
      utilService.makeLorem(),
      'me@me.com',
      1650622836006
    ),
    _createMail(
      utilService.makeLorem(1),
      utilService.makeLorem(),
      'me@me.com',
      1651236317628
    ),
    _createMail(
      utilService.makeLorem(2),
      utilService.makeLorem(),
      'me@me.com',
      1651236316628
    ),
    _createMail(
      utilService.makeLorem(4),
      utilService.makeLorem(),
      'me@me.com',
      1651054836216
    ),
    _createMail(
      utilService.makeLorem(2),
      utilService.makeLorem(),
      'me@me.com',
      1651141236146
    ),
    _createMail(
      utilService.makeLorem(1),
      utilService.makeLorem(),
      'me@me.com',
      1651141236458
    ),
    _createMail(
      utilService.makeLorem(5),
      utilService.makeLorem(),
      'me@me.com',
      1650622836458
    ),
    _createMail(
      utilService.makeLorem(4),
      utilService.makeLorem(),
      'me@me.com',
      1651054836125
    ),
    _createMail(
      utilService.makeLorem(2),
      utilService.makeLorem(),
      'me@me.com',
      1651236310628
    ),
    _createMail(
      utilService.makeLorem(3),
      utilService.makeLorem(),
      'me@me.com',
      1651141236565
    ),
    _createMail(
      utilService.makeLorem(3),
      utilService.makeLorem(),
      'me@me.com',
      1650622836455
    ),
    _createMail(
      utilService.makeLorem(1),
      utilService.makeLorem(),
      'me@me.com',
      1651054836569
    ),
    _createMail(
      utilService.makeLorem(3),
      utilService.makeLorem(),
      'me@me.com',
      1650622836006
    ),
    _createMail(
      utilService.makeLorem(1),
      utilService.makeLorem(),
      'me@me.com',
      1651236317628
    ),
    _createMail(
      utilService.makeLorem(2),
      utilService.makeLorem(),
      'me@me.com',
      1651236316628
    ),
    _createMail(
      utilService.makeLorem(4),
      utilService.makeLorem(),
      'me@me.com',
      1651054836216
    ),
    _createMail(
      utilService.makeLorem(2),
      utilService.makeLorem(),
      'me@me.com',
      1651141236146
    ),
    _createMail(
      utilService.makeLorem(1),
      utilService.makeLorem(),
      'me@me.com',
      1651141236458
    ),
    _createMail(
      utilService.makeLorem(5),
      utilService.makeLorem(),
      'me@me.com',
      1650622836458
    ),
    _createMail(
      utilService.makeLorem(4),
      utilService.makeLorem(),
      'me@me.com',
      1651054836125
    ),
    _createMail(
      utilService.makeLorem(2),
      utilService.makeLorem(),
      'me@me.com',
      1651236310628
    ),
    _createMail(
      utilService.makeLorem(3),
      utilService.makeLorem(),
      'me@me.com',
      1651141236565
    ),
    _createMail(
      utilService.makeLorem(3),
      utilService.makeLorem(),
      'me@me.com',
      1650622836455
    ),
    _createMail(
      utilService.makeLorem(1),
      utilService.makeLorem(),
      'me@me.com',
      1651054836569
    ),
  ]
}

function _createMail(
  subject,
  body = '',
  from = loggedinUser.email,
  sentAt = Date.now()
) {
  return {
    id: utilService.makeId(),
    status: 'Inbox',
    subject,
    body,
    isRead: false,
    sentAt,
    from,
    to: loggedinUser.email,
    labels: ['important', 'romantic'],
  }
}

function _saveToStorage(gMails) {
  storageService.saveToStorage(KEY, gMails)
}

function _loadFromStorage() {
  return storageService.loadFromStorage(KEY)
}
