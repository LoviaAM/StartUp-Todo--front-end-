import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({

  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.200",
      },
      
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
      },
    },
  },
  colors: {
      100: "#8ECAE6",
      200: "#219EBC",
      300: "#023047",
      400: "#FFB703",
      500: "#Fb8500",

},
});
export default theme;
