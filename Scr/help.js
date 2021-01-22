const help = (prefix) => {
	return `> *Comandos de adesivos* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : convert image/gif/video to sticker
desc: converter imagem / gif / vídeo em adesivo
uso: responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : convert image to sticker while removing the background
desc: ubah gambar menjadi stiker sambil menghapus latar belakang
desc: converte imagem em adesivo enquanto remove o fundo
uso: responder imagem ou enviar imagem com legenda\n
command : *${prefix}toimg*
desc : convert sticker to image
mengubah stiker menjadi gambar
converter adesivo em imagem
uso: adesivo de resposta\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
usage : *${prefix}texto do adesivo aqui *\n
> *Comandos Meme* <
command : *${prefix}meme*
desc : random meme images [english]
gambar meme acak [bahasa inggris]
imagens aleatórias de meme [inglês]
uso: basta enviar o comando\n
command : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
uso: basta enviar o comando\n
> *Outros Comandos* <
command : *${prefix}gtts*
desc : convert text to speech/audio
mengonversi teks menjadi ucapan / audio
converter texto em fala / áudio
uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
command : *${prefix}loli*
desc : imagens aleatórias de loli
uso : apenas envie o comando\n
comando : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
uso : apenas envie o comando\n
comando : *${prefix}url2img*
desc : tirar screenshots da web
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
uso : *${prefix}simi yourmessage*\n
comando : *${prefix}ocr*
desc : take the text in the picture
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}wait*
desc : pesquisar anime com imagem [What Anime Is This / That]
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [text|optional]*\nexemplo : *${prefix}setprefix ?*
Nota : Este comando só pode ser usado pelo proprietário do bot\n
> *Comandos de Grupo* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
uso : *${prefix}add 62813xxxxx*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}kick*
desc: expulsar membros do grupo
uso : *${prefix}kick @tagmember*\n
Nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
uso : *${prefix}memajukan @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
uso : *${prefix}demote @tagmember*\n
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}linkgroup*
usage : just send the command
penggunaan: kirim saja perintahnya
uso: basta enviar o comando
nota: só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}leave*
desc : Faça o bot sair do grupo
uso : apenas envie o comando
nota: só pode ser usado por administradores de grupo e proprietário de bot\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
uso : apenas envie o comando
nota: este comando pode ser usado se você for um administrador de grupo\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
nota: este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
