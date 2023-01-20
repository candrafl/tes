case 'randomcogan': {
    result = await getBuffer(`https://api.smkxt7.my.id/api/cogan/random?apikey=smkxt7`)
    client.sendMessage(m.chat, {image: result, mimetype: 'image/png'}, {quoted:m})
    }
    break