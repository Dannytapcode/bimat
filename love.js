document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.typing-text');
    const textLines = textElement.getAttribute('data-text').split('|');
    textElement.textContent = '';

    let lineIndex = 0;
    let charIndex = 0;

    function type() {
        if (lineIndex < textLines.length) {
            if (charIndex < textLines[lineIndex].length) {
                textElement.textContent += textLines[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Điều chỉnh thời gian để thay đổi tốc độ gõ chữ
            } else {
                textElement.textContent += '\n';
                charIndex = 0;
                lineIndex++;
                setTimeout(type, 500); // Thời gian dừng giữa các dòng
            }
        }
    }

    type();
});
document.addEventListener("DOMContentLoaded", function() {
    const text = `
    Sau một khoảng thời gian nhắn tin và chia sẻ cùng nhau, mình cảm thấy thật may mắn khi có cậu trong cuộc sống. Đã có lúc mình nghĩ rằng nên dừng lại, nhưng chính sự hiện diện và tình cảm của cậu đã khiến mình nhận ra rằng không thể thiếu cậu. Mình đã và đang thay đổi bản thân mỗi ngày vì cậu. Tình cảm của mình dành cho cậu không chỉ là những lời nói, mà còn là những hành động, những nỗ lực để trở thành một người tốt hơn. Mình muốn được cùng cậu chia sẻ những niềm vui, nỗi buồn và cả những ước mơ trong tương lai. Nguyễn Hồng, mình thật sự yêu cậu và mong muốn chúng ta có thể tiến xa hơn trên con đường này. Cậu có đồng ý cùng mình bước tiếp không?
    `;
    const typingText = document.getElementById("typing-text");
    let index = 0;
  
    function type() {
      if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 50); // Điều chỉnh tốc độ gõ ở đây (đơn vị: milliseconds)
      }
    }
  
    type();
  });
  
