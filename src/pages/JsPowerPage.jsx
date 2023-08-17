import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function JsPowerPage() {
  return (
    <>
      <Box sx={{ maxWidth: "90%", margin: "auto" }}>
        <Typography variant="h2"> Сила JavaScript </Typography>
        <Typography sx={{ fontSize: "18px", mb: "10px" }}>
          Это достаточно простая активность, которая верусится с очень давних
          времен, но я думаю, что ее обязательно нужно попробовать, а именно,
          попробовать угадать, что выведет данный код?
        </Typography>
        <Box sx={{mb:"10px"}}>
          <Typography> console.log(Array(16).join("wat")); </Typography>
          <Typography>console.log(Array(16).join("wat" +1)); </Typography>
          <Typography>
            console.log(Array(16).join("wat" - 1) + " Batman!");{" "}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "18px", mb: "10px" }}>
         Возможно не силу, но особенности языка точно покажет
        </Typography>
      </Box>
    </>
  );
}

export default JsPowerPage;
