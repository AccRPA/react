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
                        boxShadow: 'rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#c68625 0 -3px 0 inset',
                        transition: 'box-shadow .15s,transform .15s',
                        userSelect: 'none',
                        ":hover": {
                            backgroundColor: '#ea9515',
                            boxShadow: 'rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #c68625 0 -3px 0 inset',
                            transform: 'translateY(-2px);'
                        },
                        ":focus": {
                            boxShadow: '#c68625 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #c68625 0 -3px 0 inset'
                        },
                        ":active": {
                            boxShadow: '#c68625 0 3px 7px inset',
                            transform: 'translateY(2px)'
                        }
                    }
                }    
            ]
        },
    },
});