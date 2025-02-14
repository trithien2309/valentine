    var canvas = document.getElementById("starfield");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var context = canvas.getContext("2d");
    var stars = 500;
    var colorrange = [0, 60, 240];
    var starArray = [];

    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Initialize stars with random opacity values
    for (var i = 0; i < stars; i++) {
        var x = Math.random() * canvas.offsetWidth;
        var y = Math.random() * canvas.offsetHeight;
        var radius = Math.random() * 1.2;
        var hue = colorrange[getRandom(0, colorrange.length - 1)];
        var sat = getRandom(50, 100);
        var opacity = Math.random();
        starArray.push({ x, y, radius, hue, sat, opacity });
    }

    var frameNumber = 0;
    var opacity = 0;
    var secondOpacity = 0;
    var thirdOpacity = 0;

    var baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

    function drawStars() {
        for (var i = 0; i < stars; i++) {
            var star = starArray[i];

            context.beginPath();
            context.arc(star.x, star.y, star.radius, 0, 360);
            context.fillStyle = "hsla(" + star.hue + ", " + star.sat + "%, 88%, " + star.opacity + ")";
            context.fill();
        }
    }

    function updateStars() {
        for (var i = 0; i < stars; i++) {
            if (Math.random() > 0.99) {
                starArray[i].opacity = Math.random();
            }
        }
    }


    function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
        lines.forEach((line, index) => {
            context.fillText(line, x, y + index * (fontSize + lineHeight));
        });
    }

function drawText() {
    var fontSize = Math.min(30, window.innerWidth / 24); // Điều chỉnh kích thước font dựa trên chiều rộng màn hình
    var lineHeight = 8;

    // Sử dụng font hỗ trợ tiếng Việt như Arial hoặc Verdana
    context.font = fontSize + "px Arial"; 
    context.textAlign = "center";
    
    // Hiệu ứng sáng
    context.shadowColor = "rgba(45, 45, 255, 1)";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    if(frameNumber < 250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Mỗi ngày thức dậy, điều đầu tiên anh nghĩ đến là em", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 250 && frameNumber < 500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Mỗi ngày thức dậy, điều đầu tiên anh nghĩ đến là em", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 500){
        opacity = 0;
    }
    if(frameNumber > 500 && frameNumber < 750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {           //shortens long sentence for mobile screens
            drawTextWithLineBreaks(["Giữa hàng tỷ và tỷ ngôi sao ngoài kia"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Giữa hàng tỷ và tỷ ngôi sao ngoài kia", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 750 && frameNumber < 1000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Giữa hàng tỷ và tỷ ngôi sao ngoài kia"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Giữa hàng tỷ và tỷ ngôi sao ngoài kia", canvas.width/2, canvas.height/2);
        }

        opacity = opacity - 0.01;
    }

    if(frameNumber == 1000){
        opacity = 0;
    }
    if(frameNumber > 1000 && frameNumber < 1250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Anh cảm thấy thật may mắn vì gặp được em", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1250 && frameNumber < 1500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Anh cảm thấy thật may mắn vì gặp được em", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 1500){
        opacity = 0;
    }
    if(frameNumber > 1500 && frameNumber < 1750){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Cảm ơn ông trời đã ban tặng cho anh một cô người yêu xinh đẹp", canvas.width/2, canvas.height/2);
        opacity = opacity + 0.01;
    }
    if(frameNumber >= 1750 && frameNumber < 2000){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        context.fillText("Cảm ơn ông trời đã ban tặng cho anh một cô người yêu xinh đẹp", canvas.width/2, canvas.height/2);
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2000){
        opacity = 0;
    }
    if(frameNumber > 2000 && frameNumber < 2250){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks([""], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Chúc cô gái của anh luôn vui vẻ, hạnh phúc", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    if(frameNumber >= 2250 && frameNumber < 2500){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Chúc cô gái của anh luôn vui vẻ, hạnh phúc"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Chúc cô gái của anh luôn vui vẻ, hạnh phúc", canvas.width/2, canvas.height/2);
        }
        
        opacity = opacity - 0.01;
    }

    if(frameNumber == 2500){
        opacity = 0;
    }
    if(frameNumber > 2500 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${opacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Chúc cho cuộc tình của chúng ta sẽ mãi như ngày đầu"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        } else {
            context.fillText("Chúc cho cuộc tình của chúng ta sẽ mãi như ngày đầu", canvas.width/2, canvas.height/2);
        }

        opacity = opacity + 0.01;
    }
    
    if(frameNumber >= 2750 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Yêu em nhiều lắm cô gái của anh!"], canvas.width / 2, (canvas.height/2 + 60), fontSize, lineHeight);
        } else {
            context.fillText("Yêu em nhiều lắm cô gái của anh!", canvas.width/2, (canvas.height/2 + 50));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${secondOpacity})`;
        if (window.innerWidth < 600) {
            drawTextWithLineBreaks(["Chúc Mừng Ngày Lễ Tình Nhân <3"], canvas.width / 2, (canvas.height/2 + 120), fontSize, lineHeight);
        } else {
            context.fillText("Chúc Mừng Ngày Lễ Tình Nhân <3", canvas.width/2, (canvas.height/2 + 100));
        }

        secondOpacity = secondOpacity + 0.01;
    }

    if(frameNumber >= 3000 && frameNumber < 99999){
        context.fillStyle = `rgba(45, 45, 255, ${thirdOpacity})`;
        context.fillText("Chúc Mừng Ngày Lễ Tình Nhân <3", canvas.width/2, (canvas.height/2 + 120));
        thirdOpacity = thirdOpacity + 0.01;

        button.style.display = "block";
    }   

     // Reset the shadow effect after drawing the text
     context.shadowColor = "transparent";
     context.shadowBlur = 0;
     context.shadowOffsetX = 0;
     context.shadowOffsetY = 0;
}

function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) {
        frameNumber++;
    }
    window.requestAnimationFrame(draw);
}

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

window.requestAnimationFrame(draw);
