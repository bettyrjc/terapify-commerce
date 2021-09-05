import { Provider } from "react-redux";
import Head from "next/head";
import store from "../src/store/reducers";
import { ToastContainer } from "react-toastify";
import useTranslation from "next-translate/useTranslation";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/tailwind.scss";

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  let { t } = useTranslation();
  const title = t("common:title");
  return (
    <Provider store={store}>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Add a shopping cart to your site in minutes. Works with any site builder, CMS, and framework. 20 000+ merchants trust our e-commerce solution for their website. Join them!"
        ></meta>
      </Head>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
  
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
