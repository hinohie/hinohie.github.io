const WeekDay = {
  SUN: "일",
  MON: "월",
  TUE: "화",
  WED: "수",
  THU: "목",
  FRI: "금",
  SAT: "토",
  SUN: "일"
};
Object.freeze(WeekDay);

function generateCalendar(day, startWeekDay) {
  const $target = document.getElementsByClassName("calendar")[0];

  let text = "";
  let startOfWeek = 1;
  text += "<div class='Grid'>";

// text title
  text += "<div class='Line'>";
  Object.values(WeekDay).forEach((day) => {
      text += `<div class=WeekDay> <div class=Text> ${day}</div></div>`;
  });
  text += "</div>";

// day numbers
  let n = - Number(startOfWeek) + 1;

  const PREVIOUS_MAX_DAY_COUNT = 30;
  const MAX_DAY_COUNT = 31;

  while (n < MAX_DAY_COUNT)
  {
    text += "<div class='Line'>";
    Object.values(WeekDay).forEach((day) => {
      if(n <= 0)
      {
        text += `<div class=WeekDay><div class=HiddenNumber>${PREVIOUS_MAX_DAY_COUNT + n}</div></div>`;
      }
      else if(n > MAX_DAY_COUNT)
      {
        text += `<div class=WeekDay><div class=HiddenNumber>${n % MAX_DAY_COUNT}</div></div>`;
      }
      else
      {
        text += `<div class=WeekDay><div class=Number>${n}</div></div>`;
      }
      n++;
    });
    text += "</div>";//line
  }
  text += "</div>";// grid
  $target.innerHTML = text;
}

generateCalendar(13, WeekDay.MON);
