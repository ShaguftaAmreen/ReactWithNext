import  {myContext} from "@/Helper/Context";

export const metadata = {
  title: "Home page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <myContext>{children}</myContext>
        </body>
    </html>
  );
}
