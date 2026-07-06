/**
 * ============================================================================
 * 🌍 COUNTRY CONFIGURATION LIST
 * ============================================================================
 * 
 * HOW TO ADD A NEW COUNTRY:
 * 1. Copy an existing block (for example, the "dubai" block below).
 * 2. Paste it at the bottom of the list, right before the closing "};".
 * 3. Change the details inside the quotes ("").
 * 
 * EXPLANATION OF FIELDS:
 * - code: The text used in the URL. (e.g. if code is "egypt", URL is ?country=egypt)
 * - name: The actual name of the country. (e.g. "Egypt")
 * - adjective: The word used to describe something from there. (e.g. "Egyptian")
 * - city: The main city or capital. (e.g. "Cairo")
 * ============================================================================
 */

export interface Country {
  code: string;
  name: string;
  adjective: string;
  city: string;
}

export const COUNTRIES: Record<string, Country> = {
  
  india: {
    code: "india",
    name: "India",
    adjective: "Indian",
    city: "New Delhi",
  },
  
  qatar: {
    code: "qatar",
    name: "Qatar",
    adjective: "Qatari",
    city: "Doha",
  },
  
  dubai: {
    code: "dubai",
    name: "Dubai",
    adjective: "Emirati",
    city: "Dubai",
  },
  
  uae: {
    code: "uae",
    name: "UAE",
    adjective: "Emirati",
    city: "Dubai",
  },
  
  saudi: {
    code: "saudi",
    name: "Saudi Arabia",
    adjective: "Saudi",
    city: "Riyadh",
  },
  
  oman: {
    code: "oman",
    name: "Oman",
    adjective: "Omani",
    city: "Muscat",
  },
  
  bahrain: {
    code: "bahrain",
    name: "Bahrain",
    adjective: "Bahraini",
    city: "Manama",
  },
  
  kuwait: {
    code: "kuwait",
    name: "Kuwait",
    adjective: "Kuwaiti",
    city: "Kuwait City",
  },

};

// ----------------------------------------------------------------------------
// DO NOT EDIT BELOW THIS LINE (Technical setup for the website)
// ----------------------------------------------------------------------------

export const DEFAULT_COUNTRY = COUNTRIES.india;

export function getCountryByCode(code: string | null | undefined): Country | null {
  if (!code) return DEFAULT_COUNTRY;
  const normalizedCode = code.toLowerCase().trim();
  return COUNTRIES[normalizedCode] || null;
}
