import {storageService} from '../../../services/storage.service.js'
import {utilService} from '../../../services/util.service.js'


export const emailService={
    query,
}

const KEY = 'emailDB'
const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
   }
let gMails;

function query(filterBy=0){
    gMails = _loadFromStorage()
    if (!gMails){
        gMails = _crateMails()
        _saveToStorage(gMails)
    }
    if (filterBy){}
    return Promise.resolve(gMails)
}

function _crateMails(){
    return [
        _crateMail(utilService.makeLorem(3), utilService.makeLorem(), 'me@me.com'),
        _crateMail(utilService.makeLorem(1), utilService.makeLorem(), 'me@me.com'),
        _crateMail(utilService.makeLorem(2), utilService.makeLorem(), 'me@me.com'),
        _crateMail(utilService.makeLorem(5), utilService.makeLorem(), 'me@me.com'),
    ]

}

function _crateMail(subject, body='', to){
    return{
            id: utilService.makeId(),
            subject,
            body,
            isRead: false,
            sentAt : utilService.getDateIntl(Date.now()),
            to,
    }
}

function _saveToStorage(gMails) {
    storageService.saveToStorage(KEY, gMails)
}

function _loadFromStorage() {
    return storageService.loadFromStorage(KEY)
}