import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme();

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "white",
                    color: 'rgba(0, 0, 0, .87)'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: `${defaultTheme.spacing(1)} ${defaultTheme.spacing(2)}`
                }
            }
        }
    },

    layouts: {
        dashboard: {
            bottomNavigationHeight: '48px',
            drawerWidth: '90px',
            topAppBarHeight: '48px'
        },
        singleColumn: {
            columnWidth: '800px'
        }
    },

    typography: {
        fontFamily: [
            'Roboto',
            'Arial',
            'sans-serif',
        ].join(','),

        h1: {
            fontFamily: [
                'Roboto Slab',
                'serif'
            ].join(','),
            fontSize: '3.188rem',
            fontWeight: 700
        },

        h2: {
            fontFamily: [
                'Roboto Slab',
                'serif'
            ].join(','),
            fontSize: '2.75rem',
            fontWeight: 600
        },

        h3: {
            fontFamily: [
                'Roboto Slab',
                'serif'
            ].join(','),
            fontSize: '2.25rem',
            fontWeight: 600
        },

        h4: {
            fontSize: '2rem',
            fontWeight: 700,
            color: grey[900]
        },

        h5: {
            fontSize: '1.875rem',
            fontWeight: 500,
            color: grey[800]
        },

        h6: {
            fontSize: '1.5rem',
            fontWeight: 400,
            color: grey[800]
        },

        displayLarge: {
            fontFamily: [
                'Roboto Slab'
            ].join(','),
            fontSize: '3.188rem',
            fontWeight: 700,
            color: defaultTheme.palette.primary.main
        },

        displayMedium: {
            fontFamily: [
                'Roboto Slab'
            ].join(','),
            fontSize: '2.75rem',
            fontWeight: 600,
            color: defaultTheme.palette.primary.main
        },

        displaySmall: {
            fontFamily: [
                'Roboto Slab'
            ].join(','),
            fontSize: '2.25rem',
            fontWeight: 600,
            color: defaultTheme.palette.primary.main
        },

        headlineMedium: {
            fontSize: '2rem',
            fontWeight: 700,
            color: grey[900]
        },

        headlineSmall: {
            fontSize: '1.875rem',
            fontWeight: 500,
            color: grey[900]
        },

        subheadlineMedium: {
            fontSize: '1.5rem',
            fontWeight: 400,
            color: grey[800]
        },

        subheadlineSmall: {
            fontSize: '1.313rem',
            fontWeight: 500,
            color: grey[800]
        },

        titleMedium: {
            fontSize: '1.375rem',
            fontWeight: 700
        },

        titleSmall: {
            fontSize: '1.25rem',
            fontWeight: 700
        },

        subtitleMedium: {
            fontSize: '1.125rem',
            fontWeight: 500,
            color: grey[800]
        },

        subtitleSmall: {
            fontSize: '1.125rem',
            fontWeight: 400,
            color: grey[800]
        },

        labelMedium: {
            fontSize: '1rem',
            fontWeight: 500
        },

        labelSmall: {
            fontSize: '1rem',
            fontWeight: 400
        },

        body: {
            fontSize: '1rem',
            fontWeight: 400
        },

        bodySmall: {
            fontSize: '0.875rem',
            fontWeight: 400
        },

        bodySecondary: {
            fontSize: '1rem',
            fontWeight: 400,
            color: grey[800]
        },

        bodySmallSecondary: {
            fontSize: '0.875rem',
            fontWeight: 400,
            color: grey[800]
        },

        bodyStrong: {
            fontSize: '1rem',
            fontWeight: 500
        },

        bodySmallStrong: {
            fontSize: '0.875rem',
            fontWeight: 500
        },

        bodyItalic: {
            fontSize: '1rem',
            fontWeight: 400,
            fontStyle: 'italic'
        },

        bodySmallItalic: {
            fontSize: '0.875rem',
            fontWeight: 400,
            fontStyle: 'italic'
        },

        caption: {
            fontSize: '0.875rem',
            fontWeight: 500
        },

        captionItalic: {
            fontSize: '0.875rem',
            fontWeight: 400,
            fontStyle: 'italic'
        },

        overline: {
            fontSize: '0.875rem',
            fontWeight: 500,
            textTransform: 'uppercase'
        },

        th: {
            fontSize: '0.875rem',
            fontWeight: 500,
            textTransform: 'uppercase'
        },

        fabLabel: {
            fontSize: '0.875rem',
            fontWeight: 500
        },

        navLabel: {
            fontSize: '1rem',
            fontWeight: 500,
            color: grey[800]
        },
    }
});


export default theme;