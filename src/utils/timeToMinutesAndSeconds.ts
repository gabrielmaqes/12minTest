export const millisToMinutesAndSeconds = (millis: number) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return (Number(seconds) == 60 ? (minutes+1) + ":00" : minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds);
}