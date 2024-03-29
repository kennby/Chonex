
export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        await this.reply(m.chat, `
> Alquiler vencido

Finalizo su alquiler, para seguir usando mis servicios contacte a ${numero}`)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}
