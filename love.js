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
