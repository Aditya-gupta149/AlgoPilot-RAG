require("dotenv").config();

const { askRAG } = require("./services/ragService");

async function run() {

  const answer =
    await askRAG(
      "dfs"
    );

  console.log(answer);

}

run();