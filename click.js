const ballCount = 12; // 球数
const texts = ["Rock~"]; //字

document.addEventListener('click', (e) => {
    // 生成字
    texts.forEach((text) => {
        const textElement = document.createElement('div');
        textElement.className = 'text-effect';
        textElement.style.left = `${e.pageX}px`;
        textElement.style.top = `${e.pageY}px`;

        // 字rgb
        const hue = Date.now() / 40 % 360;
        textElement.style.color = `hsl(${hue}, 100%, 65%)`;

        textElement.textContent = text;
        document.body.appendChild(textElement);
          const textWidth = textElement.offsetWidth;
          const offset = textWidth / 2;

        // 位置微调
        const rightOffset = 10;
        textElement.style.transform = `translateX(-${offset}px) translateX(${rightOffset}px)`;

        textElement.addEventListener('animationend', () => {
            textElement.remove();
        });
    });

    // 生成球
    for (let i = 0; i < ballCount; i++) {
        const ballElement = document.createElement('div');
        ballElement.className = 'ball-effect';

        // 环形
        const radius = 50; // 半径
        const angleStep = (2 * Math.PI) / ballCount;
        const currentAngle = angleStep * i;

        // 球位置
        const x = e.pageX + Math.cos(currentAngle) * radius - 10; 
        const y = e.pageY + Math.sin(currentAngle) * radius - 10; 

        ballElement.style.left = `${x}px`;
        ballElement.style.top = `${y}px`;

        // 球rgb
        const ballHue = (Date.now() / 40 + i * (360 / ballCount)) % 360;
        ballElement.style.backgroundColor = `hsl(${ballHue}, 100%, 65%)`;

        // 球移动
        const moveX = Math.cos(currentAngle) * radius * 2;
        const moveY = Math.sin(currentAngle) * radius * 2;

        // 自定义
        ballElement.style.setProperty('--move-x', `${moveX}px`);
        ballElement.style.setProperty('--move-y', `${moveY}px`);

        ballElement.addEventListener('animationend', () => {
            ballElement.remove();
        });

        document.body.appendChild(ballElement);
    }
});