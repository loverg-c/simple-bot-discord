function getRandomArbitrary(min = 1, max = 7) {
  return Math.floor(Math.random() * (max - min) + min);
}

exports.run = (client, message, args) => {
    let min = args[0] || 1;
    let max = args[1] || 7;
    message.channel.send(`Je lance un dés entre ${min} et ${max} pour : ${message.author.username}`).catch(console.error);
    setTimeout(function () {
        message.channel.send(`Voici ton nombre ${message.author.username}: ` + getRandomArbitrary(min, max)).catch(console.error);
    }, 500)
}