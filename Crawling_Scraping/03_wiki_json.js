// Error: Cannot find module 'axios'
// npm install axios 명령어를 이용해서 node_modules 에 axios 에 관련된 프로젝트 기능을 추가
const axios = require("axios");
const fs = require("fs");

async function fetchWikipediaSummary(searchTerm) {
  const endpoint = "https://ko.wikipedia.org/w/api.php";

  try {
    const response = await axios.get(endpoint, {
      params: {
        action: "query",
        format: "json",
        prop: "extracts",
        exintro: true,
        explaintext: true,
        redirects: 1,
        titles: searchTerm,
      },
    });

    const pages = response.data.query.pages;
    const page = Object.values(pages)[0]; // 첫 번째 결과 가져오기

    if (page.missing === "") {
      console.log(`"${searchTerm}" 문서를 찾을 수 없습니다.`);
      return;
    }

    const result = {
      title: page.title,
      summary: page.extract,
    };

    // JSON 파일로 저장
    fs.writeFileSync(
      `${searchTerm}.json`,
      JSON.stringify(result, null, 2),
      "utf-8"
    );
    console.log(`"${searchTerm}.json" 파일이 저장되었습니다.`);
  } catch (error) {
    console.error("에러 발생:", error.message);
  }
}

fetchWikipediaSummary("컴퓨터");
