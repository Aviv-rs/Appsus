import {storageService} from '../../../services/storage.service.js'
import {utilService} from '../../../services/util.service.js'


export const emailService={
    query,
    getById,
    markAsUnread,
    removeMail,
}

const KEY = 'emailDB'
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
   }
let gMails;

function query(filterBy=0){
    gMails = _loadFromStorage()
    if (!gMails || !gMails.length){
        gMails = _createMails()
        _saveToStorage(gMails)
    }
    if (filterBy){}
    return Promise.resolve(gMails)
}

function getById(id){
    if (!gMails || !gMails.length) {
        gMails = _loadFromStorage()
    }
    const mail = gMails.find(mail=> mail.id === id)
    mail.isRead = true
    _saveToStorage(gMails)
    return Promise.resolve(mail)
}

function markAsUnread(id){
    if (!gMails || !gMails.length) {
        gMails = _loadFromStorage()
    }
    const mail = gMails.find(mail=> mail.id === id)
    mail.isRead = false
    _saveToStorage(gMails)
    return Promise.resolve(mail)
}

function removeMail(id){
    if (!gMails || !gMails.length) {
        gMails = _loadFromStorage()
    }
    const mailIdx = gMails.findIndex(mail=> mail.id === id)
    gMails.splice(mailIdx, 1)
    _saveToStorage(gMails)
    return Promise.resolve(mailIdx)
}



function _createMails(){
    return [
        _createMail(utilService.makeLorem(3), utilService.makeLorem(), 'me@me.com'),
        _createMail(utilService.makeLorem(1), utilService.makeLorem(), 'me@me.com'),
        _createMail(utilService.makeLorem(2), utilService.makeLorem(), 'me@me.com'),
        _createMail(utilService.makeLorem(5), utilService.makeLorem(), 'me@me.com'),
    ]

}

function _createMail(subject, body='', from){
    return{
            id: utilService.makeId(),
            status: 'inbox',
            subject,
            body,
            isRead: false,
            sentAt : utilService.getDateIntl(Date.now()),
            from,
            labels:['important', 'romantic']
    }
}

function _saveToStorage(gMails) {
    storageService.saveToStorage(KEY, gMails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}