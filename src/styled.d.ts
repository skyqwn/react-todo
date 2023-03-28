// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    accentColor: string;
    cardColor: string;
    textColor: string;
  }
}
