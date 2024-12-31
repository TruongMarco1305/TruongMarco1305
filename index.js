import { writeFile } from "fs";
import markdownit from "markdown-it";
const md = markdownit({
  html: true, // Enable HTML tags in source
  breaks: false, // Convert '\n' in paragraphs into <br>
});

const TIMEZONE_OFFSET = 7;

(async () => {
  const { today, hour } = getCurrentTime();
  const greetings = generateGreetings(hour);

  const text = `
<!-- RAINBOW LINE TOP -->
<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">

<h3 align="center">
  ${greetings}
</h3>
<p align="center">
  <a href="https://github.com/CodeWhiteWeb/CodeWhiteWeb"><img src="https://readme-typing-svg.herokuapp.com?color=%2336BCF7&center=true&vCenter=true&lines=Welcome+to+my+Github+page;I+am+Nam;I+am+a+HCMUT-er;Full-steak+Developer;Fessior+Member;Community+of+GDSC"></a>
</p>

<!-- GIF HEADER
<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/banner-header.gif"> -->
<h1> 👨🏻‍💻 &nbsp;About Me </h1>

💡 &nbsp;I like to explore new technologies and develop software solutions and quick hacks.\
🎓 &nbsp;I'm currently studying Computer Science at the Ho Chi Minh University of Technology.\
💻 &nbsp;I'm software developer of <a href="https://github.com/fessior">Fessior Community</a>, part of Google Developers Student Clubs Ho Chi Minh University of Technology.\
🌱 &nbsp;I'm on track for learning more about Software Engineer, focusing on Frontend and Backend development.\
🏸 &nbsp;In my free time, I pursue Badminton as hobbies. I'm also a fan of football and enjoy a cup of coffee with friends\
💬 &nbsp;Feel free to reach out to me for pro bono consulting and volunteering, or just for some interesting discussion.\
✉️ &nbsp;You can shoot me an email at nam.truonggiaky@hcmut.edu.vn! I'll try to respond as soon as I can.
<!-- 📄 &nbsp;Please have a look at my Résumé for more details about me. I'm open to feedback and suggestions! -->


<h1>🎨 &nbsp;Some of my Projects!</h1>
<div align="center">

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=TruongMarco1305&repo=Demo_Authentication&theme=tokyonight)](https://github.com/TruongMarco1305/Demo_Authentication)
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=TruongMarco1305&repo=Data_Structure_ANN&theme=tokyonight)](https://github.com/TruongMarco1305/Data_Structure_ANN)
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=TruongMarco1305&repo=2D_Cutting_Stocks&theme=tokyonight)](https://github.com/TruongMarco1305/2D_Cutting_Stocks)
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=TruongMarco1305&repo=TSP_BellmanFord&theme=tokyonight)](https://github.com/TruongMarco1305/TSP_BellmanFord)
</div>
<h1>⌨️ &nbsp;Leetcode Process</h1>

<div align="center">

![abc](https://leetcard.jacoblin.cool/tgknam2005?animation=true&cache=3600)
</div>

<h1>⚙️ &nbsp;GitHub Analytics</h1>

<div align="center">
<a href="https://github.com/TruongMarco1305">
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api?username=TruongMarco1305&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=TruongMarco1305&layout=compact&langs_count=8&theme=tokyonight"/>
</a>
</div>
<h1>🙋‍♀️ Let's Connect</h1>
<div align="center">
  <!-- <a href="https://candida-noronha.web.app/"><img src="https://img.icons8.com/bubbles/50/000000/web.png" alt="Website"/></a> -->
	<a href="mailto:tgknam2005@gmail.com"><img src="https://img.icons8.com/bubbles/50/000000/gmail.png" alt="Gmail"/></a>
	<a href="https://github.com/TruongMarco1305"><img src="https://img.icons8.com/bubbles/50/000000/github.png" alt="GitHub"/></a>
	<a href="https://www.linkedin.com/in/nam-truong-290a221a2/"><img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" alt="LinkedIn"/></a>
	<a href="https://www.facebook.com/TruongGiaKyNam"><img src="https://img.icons8.com/bubbles/50/000000/facebook-new.png" alt="Facebook"/></a>
</div>
<!-- RAINBOW LINE BOT -->
<img src="https://github.com/AnderMendoza/AnderMendoza/raw/main/assets/line-neon.gif" width="100%">
`;

  const content = md.renderInline(text);
  generateFile(content);

  /* Timestamp */
  console.log(`⏳ Running at ${today} UTC +0${TIMEZONE_OFFSET}:00`);
})();

function getCurrentTime() {
  const today = new Date();
  today.setHours(today.getHours() + TIMEZONE_OFFSET);
  const hour = today.getHours();
  const minute = today.getMinutes();
  // check if the hour >= 24
  if (hour >= 24) {
    return Math.abs(24 - hour);
  }
  return {
    today,
    hour,
    minute
  };
}

function isWeekend(date = getCurrentTime().today) {
  return date.getDay() === 6 || date.getDay() === 0;
}

function generateGreetings(time) {
  const goodMorning = "Good morning ☀️";
  const goodAfternoon = "Good afternoon 👋";
  const goodEvening = "Good evening ☕";
  const goodNight = "Good night 😴";
  const happyWeekend = "Happy weekend 🏝️";

  if (isWeekend()) {
    return happyWeekend;
  }
  if (time >= 4 && time < 11) {
    return goodMorning;
  }
  if (time >= 11 && time < 16) {
    return goodAfternoon;
  }
  if (time >= 16 && time < 23) {
    return goodEvening;
  }
  return goodNight;
}

function generateFile(contents) {
  const targetFile = "README.md";
  writeFile(targetFile, contents, function (err) {
    if (err) return console.log(`⛔ [FAILED]: ${err}`);
    console.log("✅ [SUCCESS]: README.md has been generated.");
  });
}
