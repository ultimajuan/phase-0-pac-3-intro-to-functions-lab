function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(shoutHello) {
    console.log(shoutHello.toUpperCase());
}

function logWhisper(whisperHello) {
    console.log(whisperHello.toLowerCase());
}

function sayHiToGrandma(grandmaString) {
    if (grandmaString === grandmaString.toLowerCase()) {
        return "I can't hear you!"
    } else if (grandmaString === grandmaString.toUpperCase()) {
        return "YES INDEED!"
    } else {
        return "I love you, too."
    }
    }