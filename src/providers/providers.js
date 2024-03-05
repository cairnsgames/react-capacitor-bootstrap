import { ThemeProvider } from "./theme/themeprovider";

const Providers = ({children}) => {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}

export default Providers;