import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

/*Fonts Google*/
import { useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';

/*Tema global do aplicativo*/
import theme from './src/theme';



export default function App(){
  
  /*Aqui tenho que trazer loading das fontes.*/
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  )

}