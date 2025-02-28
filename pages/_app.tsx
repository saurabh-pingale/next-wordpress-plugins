import { PluginContext } from "../src/react/PluginContext";
import type { AppProps } from "next/app";

import pluginSystem from "../bootstrap";

import FeedbackWidget from "@/plugins/feedback-widget-plugin/FeedbackWidget";
import BookinPage from "@/plugins/rating-plugin/BookinPage";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PluginContext.Provider value={{ pluginSystem: pluginSystem }}>
      <Component {...pageProps} />
      <FeedbackWidget />
      <BookinPage />
    </PluginContext.Provider>
  );
}
