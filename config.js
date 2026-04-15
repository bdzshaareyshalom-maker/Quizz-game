/*
  App access control
  ------------------
  Set any category or quiz to false to hide it from the home screen and block it from opening.
  Leave as true to allow it.

  Category keys:
    jewish, math, geography, common

    window.AUTH_CONFIG = {
  supabaseUrl: "https://moxcvzmpocvetcbigjur.supabase.co",
  supabaseAnonKey: "sb_publishable_UfJlfEg_0YVyGjIftRm3tw_sYO9joSt"
};
  

  To block an entire category, set it to false.
  To block a specific quiz, set that quiz id to false.
*/
window.APP_ACCESS_CONTROL = {
  categories: {
    jewish: true,
    math: true,
    geography: true,
    common: true
  },
  quizzes: {
    tanakh: true,
    shas: true,
    parashot: true,
    gematria: true,
    tannaim: true,
    chronology: true,
    relations: true,
    tenCommandments: true,
    holidaysMonths: true,
    whoSaidIt: true,
    halacha: true,

    mentalMathTF: true,
    equationCompletion: true,
    multiplication: true,
    fastMultiplication: true,
    fastAddition: true,
    romanNumerals: true,
    romanMath: true,

    worldCountries: true,
    worldCapitals: true,
    officialLanguages: true,
    countryFlags: true,
    scrambledCountries: true,
    continentQuiz: true,
    largestCountriesRanking: true,
    europeProfileMatch: true,
    europeCountryRanking: true,
    europeCountryFits: true,
    europeCorrectWrong: true,
    europeLandmarks: true,
    europeExportMatch: true,
    europeCompareCountries: true,

    solarSystem: true,
    agesHumanity: true,
    humanBody: true,
    inventionInventor: true,
    symptomOrgan: true
  }
};
