const express = require('express');
const server = express();

server.all(`/`, (req, res) => {
    res.send(`Please connect me to a cron-job.org website in-order to work 24/7.`);
});

function keepAlive() {
    server.listen(3000, () => {
        console.log(`24/7 Activation Complete`)
        console.log(`Logged in as ${client.user.tag}.`)
        console.log(`linktr.ee/GDL___`);
    });
}

module.exports = keepAlive;
