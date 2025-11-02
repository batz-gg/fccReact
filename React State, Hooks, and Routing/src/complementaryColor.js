export default function findComplementaryColor(hex) {
    // 1. # тэмдгийг арилгах
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }

    // Хэрэв Hex код 3 оронтой бол (жишээ нь: "f00" -> "ff0000")
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    // 2. Hex-ийг RGB утга руу хөрвүүлэх
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // 3. Эсрэг (Complementary) RGB утгыг олох
    // Эсрэг утга нь 255-аас тухайн утгыг хассантай тэнцэнэ (0 -> 255, 255 -> 0)
    const compR = 255 - r;
    const compG = 255 - g;
    const compB = 255 - b;

    // 4. Эсрэг RGB утгыг буцаан Hex код руу хөрвүүлэх
    // .toString(16) нь тоог 16-тын системд хөрвүүлнэ.
    // .padStart(2, '0') нь 1 оронтой Hex утгыг (жишээ нь: "a") "0a" болгож гүйцээнэ.
    const compHexR = compR.toString(16).padStart(2, '0');
    const compHexG = compG.toString(16).padStart(2, '0');
    const compHexB = compB.toString(16).padStart(2, '0');

    return `#${compHexR}${compHexG}${compHexB}`.toUpperCase();
}


// const red = '#FF0000';
// const complementaryRed = findComplementaryColor(red); // #00FFFF (Цэвэр Ногоон/Cyan)

// const blue = '#0000FF';
// const complementaryBlue = findComplementaryColor(blue); // #FFFF00 (Цэвэр Шар)

// const purple = '#800080';
// const complementaryPurple = findComplementaryColor(purple); // #7FFF7F (Цайвар Ногоон)

// console.log(`Улаан ${red} эсрэг өнгө: ${complementaryRed}`);
// console.log(`Хөх ${blue} эсрэг өнгө: ${complementaryBlue}`);
// console.log(`Нил ягаан ${purple} эсрэг өнгө: ${complementaryPurple}`);