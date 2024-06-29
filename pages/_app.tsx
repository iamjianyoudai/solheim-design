import { AppProps } from "next/app";
import { Maven_Pro } from "next/font/google";
import "../styles/globals.css"; // Ensure this path is correct

// Load the Roboto font globally
const mavenPro = Maven_Pro({
  weight: "400",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={mavenPro.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
