/**
 * This file contains the configuration used for customising the website, such as the folder to share,
 * the title, used Google fonts, site icons, contact info, etc.
 */
module.exports = {
  // This is what we use to identify who you are when you are initialising the website for the first time.
  // Make sure this is exactly the same as the email address you use to sign into your Microsoft account.
  // You can also put this in your Vercel's environment variable 'NEXT_PUBLIC_USER_PRINCIPLE_NAME' if you worry about
  // your email being exposed in public.
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'tkfans@tkfans.tk',

  // [OPTIONAL] This is the website icon to the left of the title inside the navigation bar. It should be placed under the
  // /public directory of your GitHub project (not your OneDrive folder!), and referenced here by its relative path to /public.
  icon: '/icons/128.png',

  // The name of your website. Present alongside your icon.
  title: "Tetsuya Komuro OneDrive",

  // The folder that you are to share publicly with onedrive-vercel-index. Use '/' if you want to share your root folder.
  baseDirectory: '/Public',

  // [OPTIONAL] This represents the maximum number of items that one directory lists, pagination supported.
  // Do note that this is limited up to 200 items by the upstream OneDrive API.
  maxItems: 100,

  // [OPTIONAL] We use Google Fonts natively for font customisations.
  // You can check and generate the required links and names at https://fonts.google.com.
  // googleFontSans - the sans serif font used in onedrive-vercel-index.
  googleFontSans: 'Inter',
  // googleFontMono - the monospace font used in onedrive-vercel-index.
  googleFontMono: 'Fira Mono',
  // googleFontLinks -  an array of links for referencing the google font assets.
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  // footer:
  //   '<center><a href="https://komuro.cf"><img src="https://img.shields.io/badge/Tetsuya%20Komuro%20One%20Drive-000000?logo=Apple&logoColor=FFFFFF" alt="\tkfans\"></a> <a href="https://avex.jp/tk/"><img src="https://img.shields.io/badge/Tetsuya%20Komuro%20Official-000000?logo=Apple&logoColor=FFFFFF" alt="tk"></a></center>',

  footer: "<center><a href=\"https://komuro.cf/\" target=\"_blank\" rel=\"noopener noreferrer\"><img style=\"display: inline-block\" src=\"https://img.shields.io/badge/Tetsuya%20Komuro%20One%20Drive-000000?logo=Apple&logoColor=FFFFFF\" alt=\"tkfans\"</a> <a href=\"https://avex.jp/tk\" target=\"_blank\" rel=\"noopener noreferrer\"><img style=\"display: inline-block\" src=\"https://img.shields.io/badge/Tetsuya%20Komuro%20Official-000000?logo=Apple&logoColor=FFFFFF\" alt=\"tk\"</a></center>",
  
  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/Music', '/Video'],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: 'mailto:tkfanswind@gmail.com',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/spencerwooo/onedrive-vercel-index',
    },
    {
      name: 'Telegram',
      link: 'https://t.me/tkomuro',
    },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
