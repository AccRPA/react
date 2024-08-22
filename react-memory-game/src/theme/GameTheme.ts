import { createTheme } from "@mui/material";
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        action: true;
    }
}

export const GameTheme = createTheme({
    typography: {
        "fontFamily": `"Nunito", sans-serif`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    },
    components: {
        // Name of the component
        MuiButton: {            
            variants: [  
                {
                    props: {
                        variant: 'action'
                    },
                    style: {
                        backgroundColor: '#EA9E2C',
                        padding: '0.6rem 3rem',
                        fontSize: '1.2rem',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        ":hover": {
                            backgroundColor: '#c68524',
                        }
                    }
                }    
            ]
        },
    },
});