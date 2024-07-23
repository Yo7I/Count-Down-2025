//สร้างตัวแปร 4 ตัว
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

//กำหนดค่าสำหรับหน่วยเวลา
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

//คำนวณและอัปเดตค่าเวลาที่เหลืออยู่
function updateCountDown() {
  const currentTime = new Date(); //เวลาปัจจุบัน
  const newYearTime = new Date(`January 01, ${new Date().getFullYear() + 1} 00:00:00`); //คำนวณหาเวลา
  const timeLeft = newYearTime - currentTime; //หาเวลาที่เหลือ = เวลาที่จะถึงปีใหม่ - เวลาปัจจุบัน
  
  
  const days = timeLeft / DAY | 0; // หาจำนวนวัน (เวลาที่เหลือ หาร "DAY")
  const hours = (timeLeft % DAY) / HOUR | 0; // หาจำนวนชั่วโมง (เศษจาก"DAY" หาร "HOUR")
  const minutes = (timeLeft % HOUR) / MINUTE | 0; // หาจำนวนนาที (เศษจาก"HOUR" หาร "MINUTE")
  const seconds = (timeLeft % MINUTE) / SECOND | 0; // หาจำนวนวินาที (เศษจาก"MINUTE" หาร "SECOND")

  //จัดรูปเเบบการเเสดงเวลา
  daysEl.textContent = days;
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountDown, 1000); //ใช้ฟังก์ชัน"updateCountDown"ทุกๆ 1 วินาที


/*
- const ย่อมาจาก "constant" หมายถึงตัวแปรที่ ไม่สามารถเปลี่ยนแปลงค่าได้
- "document.getElementById()" ใช้ดึงองค์ประกอบจาก HTML
- String ในนี้ทำหน้าที่แปลงตัวเลขให้เป็นสตริง
-padStart เติมตัวเลขให้มีความยาว 2 ตัว (เติมจากด้านซ้าย ถ้าเกินจะไม่เติมให้)
*/