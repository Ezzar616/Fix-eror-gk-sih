const PhoneNumber = require('6287853163532')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Ezzar;;;'
                    + 'FN:Aliezzar Wijaya\n' // full name
                    + 'ORG:kalo mau masukin bot ini ke gc lu chat;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6287853163532:+62 878-5316-3532\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Ezzar', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
