# QA report

Generated 2026-08-30T11:31:14.983Z against brand kit **v3.0.0** on win32, Node v24.14.0.

**213 of 354 tests failed.** 57 distinct blocking findings, 157 warnings and 24 informational items, from 3452 recorded occurrences.

Every failure below is a real defect in the site or a real deviation from the brand kit. Nothing has been masked, no threshold was raised, and no rule was disabled to produce this result.

## Passed checks

| Suite | Passed | Result |
|---|---|---|
| `a11y` | 40 / 40 | pass |
| `brand` | 21 / 48 | 27 failed |
| `crossbrowser-firefox` | 12 / 15 | 3 failed |
| `crossbrowser-webkit` | 12 / 15 | 3 failed |
| `functional` | 56 / 65 | 9 failed |
| `responsive` | 0 / 171 | 171 failed |


## Failed checks

| Suite | Test | First error |
|---|---|---|
| `brand` | brand\typography.spec.js › typography › home at desktop-1440 holds the v3 type contract | Error: 2 typography failure(s) on / at desktop-1440 |
| `brand` | brand\typography.spec.js › typography › 404 at desktop-1440 holds the v3 type contract | Error: 1 typography failure(s) on /404.html at desktop-1440 |
| `brand` | brand\typography.spec.js › typography › contact at desktop-1440 holds the v3 type contract | Error: 2 typography failure(s) on /contact/ at desktop-1440 |
| `brand` | brand\typography.spec.js › typography › expertise at desktop-1440 holds the v3 type contract | Error: 1 typography failure(s) on /expertise/ at desktop-1440 |
| `brand` | brand\typography.spec.js › typography › journal at desktop-1440 holds the v3 type contract | Error: 2 typography failure(s) on /journal/ at desktop-1440 |
| `brand` | brand\typography.spec.js › typography › journal-looking-south-to-antarctica at desktop-1440 holds the v3 type  | Error: 1 typography failure(s) on /journal/looking-south-to-antarctica/ at desktop-1440 |
| `brand` | brand\typography.spec.js › typography › privacy at desktop-1440 holds the v3 type contract | Error: 1 typography failure(s) on /privacy/ at desktop-1440 |
| `brand` | brand\typography.spec.js › typography › virtuoso at desktop-1440 holds the v3 type contract | Error: 2 typography failure(s) on /virtuoso/ at desktop-1440 |
| `brand` | brand\typography.spec.js › typography › who-we-are at desktop-1440 holds the v3 type contract | Error: 2 typography failure(s) on /who-we-are/ at desktop-1440 |
| `brand` | brand\typography.spec.js › typography › home at ipad-portrait holds the v3 type contract | Error: 2 typography failure(s) on / at ipad-portrait |
| `brand` | brand\typography.spec.js › typography › 404 at ipad-portrait holds the v3 type contract | Error: 1 typography failure(s) on /404.html at ipad-portrait |
| `brand` | brand\typography.spec.js › typography › contact at ipad-portrait holds the v3 type contract | Error: 2 typography failure(s) on /contact/ at ipad-portrait |
| `brand` | brand\typography.spec.js › typography › expertise at ipad-portrait holds the v3 type contract | Error: 1 typography failure(s) on /expertise/ at ipad-portrait |
| `brand` | brand\typography.spec.js › typography › journal at ipad-portrait holds the v3 type contract | Error: 2 typography failure(s) on /journal/ at ipad-portrait |
| `brand` | brand\typography.spec.js › typography › journal-looking-south-to-antarctica at ipad-portrait holds the v3 type | Error: 1 typography failure(s) on /journal/looking-south-to-antarctica/ at ipad-portrait |
| `brand` | brand\typography.spec.js › typography › privacy at ipad-portrait holds the v3 type contract | Error: 1 typography failure(s) on /privacy/ at ipad-portrait |
| `brand` | brand\typography.spec.js › typography › virtuoso at ipad-portrait holds the v3 type contract | Error: 2 typography failure(s) on /virtuoso/ at ipad-portrait |
| `brand` | brand\typography.spec.js › typography › who-we-are at ipad-portrait holds the v3 type contract | Error: 2 typography failure(s) on /who-we-are/ at ipad-portrait |
| `brand` | brand\typography.spec.js › typography › home at mobile-390 holds the v3 type contract | Error: 2 typography failure(s) on / at mobile-390 |
| `brand` | brand\typography.spec.js › typography › 404 at mobile-390 holds the v3 type contract | Error: 1 typography failure(s) on /404.html at mobile-390 |
| `brand` | brand\typography.spec.js › typography › contact at mobile-390 holds the v3 type contract | Error: 2 typography failure(s) on /contact/ at mobile-390 |
| `brand` | brand\typography.spec.js › typography › expertise at mobile-390 holds the v3 type contract | Error: 1 typography failure(s) on /expertise/ at mobile-390 |
| `brand` | brand\typography.spec.js › typography › journal at mobile-390 holds the v3 type contract | Error: 2 typography failure(s) on /journal/ at mobile-390 |
| `brand` | brand\typography.spec.js › typography › journal-looking-south-to-antarctica at mobile-390 holds the v3 type co | Error: 1 typography failure(s) on /journal/looking-south-to-antarctica/ at mobile-390 |
| `brand` | brand\typography.spec.js › typography › privacy at mobile-390 holds the v3 type contract | Error: 1 typography failure(s) on /privacy/ at mobile-390 |
| `brand` | brand\typography.spec.js › typography › virtuoso at mobile-390 holds the v3 type contract | Error: 2 typography failure(s) on /virtuoso/ at mobile-390 |
| `brand` | brand\typography.spec.js › typography › who-we-are at mobile-390 holds the v3 type contract | Error: 2 typography failure(s) on /who-we-are/ at mobile-390 |
| `crossbrowser-firefox` | crossbrowser\smoke.spec.js › desktop-1440 › home renders without layout failures | Error: firefox at desktop-1440 |
| `crossbrowser-webkit` | crossbrowser\smoke.spec.js › desktop-1440 › home renders without layout failures | Error: webkit at desktop-1440 |
| `crossbrowser-firefox` | crossbrowser\smoke.spec.js › ipad-pro-portrait › home renders without layout failures | Error: firefox at ipad-pro-portrait |
| `crossbrowser-webkit` | crossbrowser\smoke.spec.js › ipad-pro-portrait › home renders without layout failures | Error: webkit at ipad-pro-portrait |
| `crossbrowser-firefox` | crossbrowser\smoke.spec.js › mobile-390 › home renders without layout failures | Error: firefox at mobile-390 |
| `crossbrowser-webkit` | crossbrowser\smoke.spec.js › mobile-390 › home renders without layout failures | Error: webkit at mobile-390 |
| `functional` | functional\journal-and-pages.spec.js › enquiry dialog › is present but unreachable through the interface | Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBeGreaterThan[2m([22m[32mexpected |
| `functional` | functional\mobile-menu.spec.js › overlay menu at ipad-portrait › closes on Escape | Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected |
| `functional` | functional\mobile-menu.spec.js › overlay menu at ipad-portrait › closes on a click outside the panel | Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected |
| `functional` | functional\mobile-menu.spec.js › overlay menu at ipad-portrait › traps focus inside the open panel | Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m)  |
| `functional` | functional\mobile-menu.spec.js › overlay menu at ipad-portrait › releases the scroll lock when widened past th | Error: [2mexpect([22m[31mlocator[39m[2m).not.[22mtoHaveClass[2m([22m[32mexpected |
| `functional` | functional\mobile-menu.spec.js › overlay menu at mobile-390 › closes on Escape | Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected |
| `functional` | functional\mobile-menu.spec.js › overlay menu at mobile-390 › closes on a click outside the panel | Error: [2mexpect([22m[31mlocator[39m[2m).[22mtoHaveAttribute[2m([22m[32mexpected |
| `functional` | functional\mobile-menu.spec.js › overlay menu at mobile-390 › traps focus inside the open panel | Error: [2mexpect([22m[31mreceived[39m[2m).[22mtoBe[2m([22m[32mexpected[39m[2m)  |
| `functional` | functional\mobile-menu.spec.js › overlay menu at mobile-390 › releases the scroll lock when widened past the b | Error: [2mexpect([22m[31mlocator[39m[2m).not.[22mtoHaveClass[2m([22m[32mexpected |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-2560 › home at 2560x1440 | Error: 4 layout failure(s) on / at desktop-2560 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-2560 › 404 at 2560x1440 | Error: 4 layout failure(s) on /404.html at desktop-2560 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-2560 › contact at 2560x1440 | Error: 4 layout failure(s) on /contact/ at desktop-2560 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-2560 › expertise at 2560x1440 | Error: 4 layout failure(s) on /expertise/ at desktop-2560 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-2560 › journal at 2560x1440 | Error: 4 layout failure(s) on /journal/ at desktop-2560 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-2560 › journal-looking-south-to-antarctica at 2560x144 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at desktop-2560 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-2560 › privacy at 2560x1440 | Error: 4 layout failure(s) on /privacy/ at desktop-2560 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-2560 › virtuoso at 2560x1440 | Error: 5 layout failure(s) on /virtuoso/ at desktop-2560 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-2560 › who-we-are at 2560x1440 | Error: 4 layout failure(s) on /who-we-are/ at desktop-2560 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1920 › home at 1920x1080 | Error: 4 layout failure(s) on / at desktop-1920 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1920 › 404 at 1920x1080 | Error: 4 layout failure(s) on /404.html at desktop-1920 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1920 › contact at 1920x1080 | Error: 4 layout failure(s) on /contact/ at desktop-1920 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1920 › expertise at 1920x1080 | Error: 4 layout failure(s) on /expertise/ at desktop-1920 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1920 › journal at 1920x1080 | Error: 4 layout failure(s) on /journal/ at desktop-1920 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1920 › journal-looking-south-to-antarctica at 1920x108 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at desktop-1920 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1920 › privacy at 1920x1080 | Error: 4 layout failure(s) on /privacy/ at desktop-1920 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1920 › virtuoso at 1920x1080 | Error: 5 layout failure(s) on /virtuoso/ at desktop-1920 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1920 › who-we-are at 1920x1080 | Error: 4 layout failure(s) on /who-we-are/ at desktop-1920 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1680 › home at 1680x1050 | Error: 4 layout failure(s) on / at desktop-1680 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1680 › 404 at 1680x1050 | Error: 4 layout failure(s) on /404.html at desktop-1680 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1680 › contact at 1680x1050 | Error: 4 layout failure(s) on /contact/ at desktop-1680 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1680 › expertise at 1680x1050 | Error: 4 layout failure(s) on /expertise/ at desktop-1680 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1680 › journal at 1680x1050 | Error: 4 layout failure(s) on /journal/ at desktop-1680 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1680 › journal-looking-south-to-antarctica at 1680x105 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at desktop-1680 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1680 › privacy at 1680x1050 | Error: 4 layout failure(s) on /privacy/ at desktop-1680 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1680 › virtuoso at 1680x1050 | Error: 5 layout failure(s) on /virtuoso/ at desktop-1680 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1680 › who-we-are at 1680x1050 | Error: 4 layout failure(s) on /who-we-are/ at desktop-1680 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1440 › home at 1440x900 | Error: 4 layout failure(s) on / at desktop-1440 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1440 › 404 at 1440x900 | Error: 4 layout failure(s) on /404.html at desktop-1440 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1440 › contact at 1440x900 | Error: 4 layout failure(s) on /contact/ at desktop-1440 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1440 › expertise at 1440x900 | Error: 4 layout failure(s) on /expertise/ at desktop-1440 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1440 › journal at 1440x900 | Error: 4 layout failure(s) on /journal/ at desktop-1440 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1440 › journal-looking-south-to-antarctica at 1440x900 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at desktop-1440 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1440 › privacy at 1440x900 | Error: 4 layout failure(s) on /privacy/ at desktop-1440 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1440 › virtuoso at 1440x900 | Error: 5 layout failure(s) on /virtuoso/ at desktop-1440 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1440 › who-we-are at 1440x900 | Error: 4 layout failure(s) on /who-we-are/ at desktop-1440 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1366 › home at 1366x768 | Error: 4 layout failure(s) on / at desktop-1366 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1366 › 404 at 1366x768 | Error: 4 layout failure(s) on /404.html at desktop-1366 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1366 › contact at 1366x768 | Error: 4 layout failure(s) on /contact/ at desktop-1366 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1366 › expertise at 1366x768 | Error: 4 layout failure(s) on /expertise/ at desktop-1366 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1366 › journal at 1366x768 | Error: 4 layout failure(s) on /journal/ at desktop-1366 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1366 › journal-looking-south-to-antarctica at 1366x768 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at desktop-1366 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1366 › privacy at 1366x768 | Error: 4 layout failure(s) on /privacy/ at desktop-1366 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1366 › virtuoso at 1366x768 | Error: 5 layout failure(s) on /virtuoso/ at desktop-1366 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1366 › who-we-are at 1366x768 | Error: 4 layout failure(s) on /who-we-are/ at desktop-1366 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1280 › home at 1280x800 | Error: 4 layout failure(s) on / at desktop-1280 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1280 › 404 at 1280x800 | Error: 4 layout failure(s) on /404.html at desktop-1280 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1280 › contact at 1280x800 | Error: 4 layout failure(s) on /contact/ at desktop-1280 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1280 › expertise at 1280x800 | Error: 4 layout failure(s) on /expertise/ at desktop-1280 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1280 › journal at 1280x800 | Error: 4 layout failure(s) on /journal/ at desktop-1280 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1280 › journal-looking-south-to-antarctica at 1280x800 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at desktop-1280 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1280 › privacy at 1280x800 | Error: 4 layout failure(s) on /privacy/ at desktop-1280 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1280 › virtuoso at 1280x800 | Error: 5 layout failure(s) on /virtuoso/ at desktop-1280 |
| `responsive` | responsive\layout.spec.js › responsive layout › desktop-1280 › who-we-are at 1280x800 | Error: 4 layout failure(s) on /who-we-are/ at desktop-1280 |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-landscape › home at 1366x1024 | Error: 4 layout failure(s) on / at ipad-pro-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-landscape › 404 at 1366x1024 | Error: 4 layout failure(s) on /404.html at ipad-pro-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-landscape › contact at 1366x1024 | Error: 4 layout failure(s) on /contact/ at ipad-pro-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-landscape › expertise at 1366x1024 | Error: 4 layout failure(s) on /expertise/ at ipad-pro-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-landscape › journal at 1366x1024 | Error: 4 layout failure(s) on /journal/ at ipad-pro-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-landscape › journal-looking-south-to-antarctica at 13 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at ipad-pro-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-landscape › privacy at 1366x1024 | Error: 4 layout failure(s) on /privacy/ at ipad-pro-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-landscape › virtuoso at 1366x1024 | Error: 5 layout failure(s) on /virtuoso/ at ipad-pro-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-landscape › who-we-are at 1366x1024 | Error: 4 layout failure(s) on /who-we-are/ at ipad-pro-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-portrait › home at 1024x1366 | Error: 4 layout failure(s) on / at ipad-pro-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-portrait › 404 at 1024x1366 | Error: 4 layout failure(s) on /404.html at ipad-pro-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-portrait › contact at 1024x1366 | Error: 4 layout failure(s) on /contact/ at ipad-pro-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-portrait › expertise at 1024x1366 | Error: 4 layout failure(s) on /expertise/ at ipad-pro-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-portrait › journal at 1024x1366 | Error: 4 layout failure(s) on /journal/ at ipad-pro-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-portrait › journal-looking-south-to-antarctica at 102 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at ipad-pro-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-portrait › privacy at 1024x1366 | Error: 4 layout failure(s) on /privacy/ at ipad-pro-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-portrait › virtuoso at 1024x1366 | Error: 5 layout failure(s) on /virtuoso/ at ipad-pro-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-pro-portrait › who-we-are at 1024x1366 | Error: 4 layout failure(s) on /who-we-are/ at ipad-pro-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-landscape › home at 1180x820 | Error: 4 layout failure(s) on / at ipad-air-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-landscape › 404 at 1180x820 | Error: 4 layout failure(s) on /404.html at ipad-air-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-landscape › contact at 1180x820 | Error: 4 layout failure(s) on /contact/ at ipad-air-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-landscape › expertise at 1180x820 | Error: 4 layout failure(s) on /expertise/ at ipad-air-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-landscape › journal at 1180x820 | Error: 4 layout failure(s) on /journal/ at ipad-air-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-landscape › journal-looking-south-to-antarctica at 11 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at ipad-air-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-landscape › privacy at 1180x820 | Error: 4 layout failure(s) on /privacy/ at ipad-air-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-landscape › virtuoso at 1180x820 | Error: 5 layout failure(s) on /virtuoso/ at ipad-air-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-landscape › who-we-are at 1180x820 | Error: 4 layout failure(s) on /who-we-are/ at ipad-air-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-portrait › home at 820x1180 | Error: 4 layout failure(s) on / at ipad-air-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-portrait › 404 at 820x1180 | Error: 4 layout failure(s) on /404.html at ipad-air-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-portrait › contact at 820x1180 | Error: 4 layout failure(s) on /contact/ at ipad-air-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-portrait › expertise at 820x1180 | Error: 4 layout failure(s) on /expertise/ at ipad-air-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-portrait › journal at 820x1180 | Error: 4 layout failure(s) on /journal/ at ipad-air-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-portrait › journal-looking-south-to-antarctica at 820 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at ipad-air-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-portrait › privacy at 820x1180 | Error: 4 layout failure(s) on /privacy/ at ipad-air-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-portrait › virtuoso at 820x1180 | Error: 5 layout failure(s) on /virtuoso/ at ipad-air-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-air-portrait › who-we-are at 820x1180 | Error: 4 layout failure(s) on /who-we-are/ at ipad-air-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-landscape › home at 1024x768 | Error: 4 layout failure(s) on / at ipad-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-landscape › 404 at 1024x768 | Error: 4 layout failure(s) on /404.html at ipad-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-landscape › contact at 1024x768 | Error: 4 layout failure(s) on /contact/ at ipad-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-landscape › expertise at 1024x768 | Error: 4 layout failure(s) on /expertise/ at ipad-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-landscape › journal at 1024x768 | Error: 4 layout failure(s) on /journal/ at ipad-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-landscape › journal-looking-south-to-antarctica at 1024x7 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at ipad-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-landscape › privacy at 1024x768 | Error: 4 layout failure(s) on /privacy/ at ipad-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-landscape › virtuoso at 1024x768 | Error: 5 layout failure(s) on /virtuoso/ at ipad-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-landscape › who-we-are at 1024x768 | Error: 4 layout failure(s) on /who-we-are/ at ipad-landscape |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-portrait › home at 768x1024 | Error: 4 layout failure(s) on / at ipad-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-portrait › 404 at 768x1024 | Error: 4 layout failure(s) on /404.html at ipad-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-portrait › contact at 768x1024 | Error: 4 layout failure(s) on /contact/ at ipad-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-portrait › expertise at 768x1024 | Error: 4 layout failure(s) on /expertise/ at ipad-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-portrait › journal at 768x1024 | Error: 4 layout failure(s) on /journal/ at ipad-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-portrait › journal-looking-south-to-antarctica at 768x102 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at ipad-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-portrait › privacy at 768x1024 | Error: 4 layout failure(s) on /privacy/ at ipad-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-portrait › virtuoso at 768x1024 | Error: 5 layout failure(s) on /virtuoso/ at ipad-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › ipad-portrait › who-we-are at 768x1024 | Error: 4 layout failure(s) on /who-we-are/ at ipad-portrait |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › home at 430x932 | Error: 4 layout failure(s) on / at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › 404 at 430x932 | Error: 4 layout failure(s) on /404.html at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › contact at 430x932 | Error: 4 layout failure(s) on /contact/ at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › expertise at 430x932 | Error: 5 layout failure(s) on /expertise/ at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › journal at 430x932 | Error: 4 layout failure(s) on /journal/ at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › journal-looking-south-to-antarctica at 430x932 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › privacy at 430x932 | Error: 4 layout failure(s) on /privacy/ at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › virtuoso at 430x932 | Error: 5 layout failure(s) on /virtuoso/ at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-430 › who-we-are at 430x932 | Error: 5 layout failure(s) on /who-we-are/ at mobile-430 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › home at 414x896 | Error: 4 layout failure(s) on / at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › 404 at 414x896 | Error: 4 layout failure(s) on /404.html at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › contact at 414x896 | Error: 4 layout failure(s) on /contact/ at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › expertise at 414x896 | Error: 5 layout failure(s) on /expertise/ at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › journal at 414x896 | Error: 4 layout failure(s) on /journal/ at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › journal-looking-south-to-antarctica at 414x896 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › privacy at 414x896 | Error: 4 layout failure(s) on /privacy/ at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › virtuoso at 414x896 | Error: 5 layout failure(s) on /virtuoso/ at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-414 › who-we-are at 414x896 | Error: 5 layout failure(s) on /who-we-are/ at mobile-414 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › home at 393x852 | Error: 4 layout failure(s) on / at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › 404 at 393x852 | Error: 4 layout failure(s) on /404.html at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › contact at 393x852 | Error: 4 layout failure(s) on /contact/ at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › expertise at 393x852 | Error: 5 layout failure(s) on /expertise/ at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › journal at 393x852 | Error: 4 layout failure(s) on /journal/ at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › journal-looking-south-to-antarctica at 393x852 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › privacy at 393x852 | Error: 4 layout failure(s) on /privacy/ at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › virtuoso at 393x852 | Error: 5 layout failure(s) on /virtuoso/ at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-393 › who-we-are at 393x852 | Error: 5 layout failure(s) on /who-we-are/ at mobile-393 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › home at 390x844 | Error: 4 layout failure(s) on / at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › 404 at 390x844 | Error: 4 layout failure(s) on /404.html at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › contact at 390x844 | Error: 4 layout failure(s) on /contact/ at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › expertise at 390x844 | Error: 5 layout failure(s) on /expertise/ at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › journal at 390x844 | Error: 4 layout failure(s) on /journal/ at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › journal-looking-south-to-antarctica at 390x844 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › privacy at 390x844 | Error: 4 layout failure(s) on /privacy/ at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › virtuoso at 390x844 | Error: 5 layout failure(s) on /virtuoso/ at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-390 › who-we-are at 390x844 | Error: 5 layout failure(s) on /who-we-are/ at mobile-390 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › home at 375x812 | Error: 4 layout failure(s) on / at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › 404 at 375x812 | Error: 4 layout failure(s) on /404.html at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › contact at 375x812 | Error: 5 layout failure(s) on /contact/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › expertise at 375x812 | Error: 5 layout failure(s) on /expertise/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › journal at 375x812 | Error: 4 layout failure(s) on /journal/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › journal-looking-south-to-antarctica at 375x812 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › privacy at 375x812 | Error: 4 layout failure(s) on /privacy/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › virtuoso at 375x812 | Error: 5 layout failure(s) on /virtuoso/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-375 › who-we-are at 375x812 | Error: 5 layout failure(s) on /who-we-are/ at mobile-375 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › home at 360x800 | Error: 5 layout failure(s) on / at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › 404 at 360x800 | Error: 4 layout failure(s) on /404.html at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › contact at 360x800 | Error: 5 layout failure(s) on /contact/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › expertise at 360x800 | Error: 5 layout failure(s) on /expertise/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › journal at 360x800 | Error: 4 layout failure(s) on /journal/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › journal-looking-south-to-antarctica at 360x800 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › privacy at 360x800 | Error: 4 layout failure(s) on /privacy/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › virtuoso at 360x800 | Error: 5 layout failure(s) on /virtuoso/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-360 › who-we-are at 360x800 | Error: 5 layout failure(s) on /who-we-are/ at mobile-360 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › home at 320x568 | Error: 5 layout failure(s) on / at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › 404 at 320x568 | Error: 4 layout failure(s) on /404.html at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › contact at 320x568 | Error: 5 layout failure(s) on /contact/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › expertise at 320x568 | Error: 5 layout failure(s) on /expertise/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › journal at 320x568 | Error: 4 layout failure(s) on /journal/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › journal-looking-south-to-antarctica at 320x568 | Error: 5 layout failure(s) on /journal/looking-south-to-antarctica/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › privacy at 320x568 | Error: 4 layout failure(s) on /privacy/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › virtuoso at 320x568 | Error: 6 layout failure(s) on /virtuoso/ at mobile-320 |
| `responsive` | responsive\layout.spec.js › responsive layout › mobile-320 › who-we-are at 320x568 | Error: 5 layout failure(s) on /who-we-are/ at mobile-320 |


## Brand-kit deviations

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `line-height-off-scale` | h2 line-height is 1.080 against a specified 1.16 | 27 | 9 routes; ipad-portrait, desktop-1440, mobile-390 |
| `line-height-off-scale` | h3 line-height is 1.080 against a specified 1.25 | 12 | 4 routes; ipad-portrait, desktop-1440, mobile-390 |
| `unapproved-font-weight` | weight 700 on 1 element(s); the loaded face carries 400 to 600, so this is synthesised | 3 | /contact/; desktop-1440, mobile-390, ipad-portrait |


Warnings, reported not enforced:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `token-derived-colour-uncertified` | oklch(0.851756 0.0347718 268.509) on p (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.872933 0.0298115 268.509) on a (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.761755 0.0558531 268.509) on span (a color-mix of tokens; no certified contrast figure) | 9 | 9 routes; desktop-1440 |
| `unapproved-font-family` | monospace on code (inside a tracked placeholder) | 3 | /contact/; desktop-1440, mobile-390, ipad-portrait |
| `token-derived-colour-uncertified` | oklch(0.841168 0.037252 268.509) on p (a color-mix of tokens; no certified contrast figure) | 2 | /virtuoso/, /who-we-are/; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.883521 0.0273314 268.509) on p.page-hero-lede (a color-mix of tokens; no certified contrast figure) | 1 | /journal/; desktop-1440 |
| `token-derived-colour-uncertified` | oklch(0.883521 0.0273314 268.509) on p (a color-mix of tokens; no certified contrast figure) | 1 | /; desktop-1440 |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:116 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:198 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:63 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:69 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:141 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:180 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:190 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:201 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/blocks.css:242 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-val | 1 | site-wide |
| `stylelint-no-duplicate-selectors` | src/styles/blocks.css:120 Duplicate selector ".newsletter h2", first used at line 114 (no-duplicate-selectors) | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:32 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:96 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:223 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:317 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:353 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:386 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:517 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |
| `stylelint-scale-unlimited/declaration-strict-value` | src/styles/pages.css:613 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-valu | 1 | site-wide |


## Responsive layout failures

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_2i7xPB.webp stretched 11% (natural 2.464, rendered 2.189, box 123x56, object-fit fill, aspect-ratio auto 138 / 56) | 90 | 9 routes; 10 viewports |
| `image-aspect-distorted` | atia.BgIArYcT_Z1iOyaK.webp stretched 15% (natural 3.179, rendered 2.699, box 151x56, object-fit fill, aspect-ratio auto 178 / 56) | 90 | 9 routes; 10 viewports |
| `image-aspect-distorted` | clia.BvTwra-l_1YA1dH.webp stretched 14% (natural 2.929, rendered 2.520, box 141x56, object-fit fill, aspect-ratio auto 164 / 56) | 90 | 9 routes; 10 viewports |
| `image-aspect-distorted` | alatus.BLgmakCj_ZemtDr.webp stretched 15% (natural 3.250, rendered 2.750, box 154x56, object-fit fill, aspect-ratio auto 182 / 56) | 90 | 9 routes; 10 viewports |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_2i7xPB.webp stretched 14% (natural 2.464, rendered 2.114, box 93x44, object-fit fill, aspect-ratio auto 138 / 56) | 81 | 9 routes; 9 viewports |
| `image-aspect-distorted` | atia.BgIArYcT_Z1iOyaK.webp stretched 19% (natural 3.179, rendered 2.568, box 113x44, object-fit fill, aspect-ratio auto 178 / 56) | 81 | 9 routes; 9 viewports |
| `image-aspect-distorted` | clia.BvTwra-l_1YA1dH.webp stretched 18% (natural 2.929, rendered 2.409, box 106x44, object-fit fill, aspect-ratio auto 164 / 56) | 81 | 9 routes; 9 viewports |
| `image-aspect-distorted` | alatus.BLgmakCj_ZemtDr.webp stretched 20% (natural 3.250, rendered 2.614, box 115x44, object-fit fill, aspect-ratio auto 182 / 56) | 81 | 9 routes; 9 viewports |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_18wd0o.webp stretched 11% (natural 2.458, rendered 2.186, box 260x119, object-fit fill, aspect-ratio auto 376 / 153) | 12 | /virtuoso/; 12 viewports |
| `hero-heading-lines` | h1 renders 3 lines at 34px: "Travelling with Sienna: looking south to Antarctica" | 7 | /journal/looking-south-to-antarctica/; 7 viewports |
| `hero-heading-lines` | h1 renders 3 lines at 34px: "People who know travel. People who know you." | 6 | /who-we-are/; 6 viewports |
| `hero-heading-lines` | h1 renders 3 lines at 56px: "Travelling with Sienna: looking south to Antarctica" | 6 | /journal/looking-south-to-antarctica/; 6 viewports |
| `hero-heading-lines` | h1 renders 3 lines at 34px: "Travel is personal. Planning should be too." | 6 | /expertise/; 6 viewports |
| `hero-heading-lines` | h1 renders 3 lines at 43.008px: "Travelling with Sienna: looking south to Antarctica" | 2 | /journal/looking-south-to-antarctica/; ipad-landscape, ipad-pro-portrait |
| `hero-heading-lines` | h1 renders 3 lines at 34px: "Tell us where your imagination is going." | 2 | /contact/; mobile-375, mobile-360 |
| `hero-heading-lines` | h1 renders 3 lines at 34px: "Your world, beautifully planned." | 2 | /; mobile-360, mobile-320 |
| `hero-heading-lines` | h1 renders 3 lines at 49.56px: "Travelling with Sienna: looking south to Antarctica" | 1 | /journal/looking-south-to-antarctica/; ipad-air-landscape |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_18wd0o.webp stretched 16% (natural 2.458, rendered 2.076, box 176x85, object-fit fill, aspect-ratio auto 376 / 153) | 1 | /virtuoso/; mobile-320 |
| `hero-heading-lines` | h1 renders 3 lines at 34px: "Connections that make travel richer." | 1 | /virtuoso/; mobile-320 |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_18wd0o.webp stretched 12% (natural 2.458, rendered 2.152, box 228x106, object-fit fill, aspect-ratio auto 376 / 153) | 1 | /virtuoso/; mobile-414 |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_18wd0o.webp stretched 13% (natural 2.458, rendered 2.136, box 215x100, object-fit fill, aspect-ratio auto 376 / 153) | 1 | /virtuoso/; mobile-390 |
| `hero-heading-lines` | h1 renders 4 lines at 34px: "People who know travel. People who know you." | 1 | /who-we-are/; mobile-320 |
| `hero-heading-lines` | h1 renders 3 lines at 34.44px: "Travelling with Sienna: looking south to Antarctica" | 1 | /journal/looking-south-to-antarctica/; ipad-air-portrait |
| `hero-heading-lines` | h1 renders 4 lines at 34px: "Travel is personal. Planning should be too." | 1 | /expertise/; mobile-320 |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_18wd0o.webp stretched 14% (natural 2.458, rendered 2.125, box 206x97, object-fit fill, aspect-ratio auto 376 / 153) | 1 | /virtuoso/; mobile-375 |
| `hero-heading-lines` | h1 renders 3 lines at 53.76px: "Travelling with Sienna: looking south to Antarctica" | 1 | /journal/looking-south-to-antarctica/; desktop-1280 |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_18wd0o.webp stretched 14% (natural 2.458, rendered 2.112, box 198x94, object-fit fill, aspect-ratio auto 376 / 153) | 1 | /virtuoso/; mobile-360 |
| `hero-heading-lines` | h1 renders 4 lines at 34px: "Travelling with Sienna: looking south to Antarctica" | 1 | /journal/looking-south-to-antarctica/; mobile-320 |
| `hero-heading-lines` | h1 renders 4 lines at 34px: "Tell us where your imagination is going." | 1 | /contact/; mobile-320 |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_18wd0o.webp stretched 12% (natural 2.458, rendered 2.162, box 237x109, object-fit fill, aspect-ratio auto 376 / 153) | 1 | /virtuoso/; mobile-430 |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_18wd0o.webp stretched 13% (natural 2.458, rendered 2.138, box 216x101, object-fit fill, aspect-ratio auto 376 / 153) | 1 | /virtuoso/; mobile-393 |


Warnings:

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `touch-target-small` | a.text-link.secondary-link "Our Virtuoso profile" is 145.3x26.4 | 171 | 9 routes; 19 viewports |
| `touch-target-small` | a "Expertise" is 63.8x24.3 | 171 | 9 routes; 19 viewports |
| `touch-target-small` | a "Who we are" is 79x24.3 | 171 | 9 routes; 19 viewports |
| `touch-target-small` | a "Journal" is 51.1x24.3 | 171 | 9 routes; 19 viewports |
| `touch-target-small` | a "Contact" is 52.5x24.3 | 171 | 9 routes; 19 viewports |
| `touch-target-small` | a "Privacy" is 49.2x24.3 | 171 | 9 routes; 19 viewports |
| `touch-target-small` | a "Instagram" is 64.5x22.4 | 171 | 9 routes; 19 viewports |
| `touch-target-small` | a "Facebook" is 59.9x22.4 | 171 | 9 routes; 19 viewports |
| `touch-target-small` | a "Home" is 83.2x42.9 | 81 | 9 routes; 9 viewports |
| `touch-target-small` | a "Expertise" is 125.1x42.9 | 81 | 9 routes; 9 viewports |
| `touch-target-small` | a "Virtuoso" is 114.5x42.9 | 81 | 9 routes; 9 viewports |
| `touch-target-small` | a "Who we are" is 158.2x42.9 | 81 | 9 routes; 9 viewports |
| `touch-target-small` | a "Journal" is 97.1x42.9 | 81 | 9 routes; 9 viewports |
| `touch-target-small` | a "Home" is 39.9x24.3 | 72 | 9 routes; 8 viewports |
| `touch-target-small` | a "Virtuoso" is 56.6x24.3 | 72 | 9 routes; 8 viewports |


## Accessibility failures

_None._


Moderate and minor, reported in full rather than filtered:

_None._


## Functional failures

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `menu-no-escape-close` | The overlay menu has no keydown handler, so Escape does not close it. | 2 | ipad-portrait, mobile-390 |
| `menu-no-focus-trap` | Focus leaves the full-screen overlay into the page behind it, which is still present in the tab order. | 2 | mobile-390, ipad-portrait |
| `menu-no-outside-click-close` | Only the toggle and the nav links close the menu. A click outside does nothing. | 2 | mobile-390, ipad-portrait |
| `menu-no-resize-handling` | Opening the menu below 940px then widening past it leaves body.menu-open set, so the page renders a desktop nav with scrolling still locked. | 2 | mobile-390, ipad-portrait |
| `dialog-unreachable` | The enquiry dialog is rendered on every non-contact page but nothing emits data-open-enquiry, so no user can open it. Either wire an opener or stop sh | 1 | / |


## Cross-browser

| Finding | Detail | Occurrences | Where |
|---|---|---|---|
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_Z1w0CNO.webp stretched 11% (natural 2.464, rendered 2.189, box 123x56, object-fit fill, aspect-ratio auto 138 / 56) | 2 | /; desktop-1440, ipad-pro-portrait |
| `image-aspect-distorted` | atia.BgIArYcT_Z1VIyLx.webp stretched 15% (natural 3.179, rendered 2.699, box 151x56, object-fit fill, aspect-ratio auto 178 / 56) | 2 | /; desktop-1440, ipad-pro-portrait |
| `image-aspect-distorted` | clia.BvTwra-l_Z2uY8xA.webp stretched 14% (natural 2.929, rendered 2.520, box 141x56, object-fit fill, aspect-ratio auto 164 / 56) | 2 | /; desktop-1440, ipad-pro-portrait |
| `image-aspect-distorted` | alatus.BLgmakCj_ZuhpXt.webp stretched 15% (natural 3.250, rendered 2.750, box 154x56, object-fit fill, aspect-ratio auto 182 / 56) | 2 | /; desktop-1440, ipad-pro-portrait |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_2i7xPB.webp stretched 11% (natural 2.464, rendered 2.189, box 123x56, object-fit fill, aspect-ratio auto 138 / 56) | 2 | /; ipad-pro-portrait, desktop-1440 |
| `image-aspect-distorted` | atia.BgIArYcT_Z1iOyaK.webp stretched 15% (natural 3.179, rendered 2.699, box 151x56, object-fit fill, aspect-ratio auto 178 / 56) | 2 | /; ipad-pro-portrait, desktop-1440 |
| `image-aspect-distorted` | clia.BvTwra-l_1YA1dH.webp stretched 14% (natural 2.929, rendered 2.521, box 141x56, object-fit fill, aspect-ratio auto 164 / 56) | 2 | /; ipad-pro-portrait, desktop-1440 |
| `image-aspect-distorted` | alatus.BLgmakCj_ZemtDr.webp stretched 15% (natural 3.250, rendered 2.750, box 154x56, object-fit fill, aspect-ratio auto 182 / 56) | 2 | /; ipad-pro-portrait, desktop-1440 |
| `image-failed-to-load` | /_astro/virtuoso-member.BX5lHYDf_18wd0o.webp | 1 | /; desktop-1440 |
| `image-failed-to-load` | /_astro/gina-storey.CCZhAhPw_ZfuUaY.webp | 1 | /; desktop-1440 |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_Z1w0CNO.webp stretched 14% (natural 2.464, rendered 2.114, box 93x44, object-fit fill, aspect-ratio auto 138 / 56) | 1 | /; mobile-390 |
| `image-aspect-distorted` | atia.BgIArYcT_Z1VIyLx.webp stretched 19% (natural 3.179, rendered 2.568, box 113x44, object-fit fill, aspect-ratio auto 178 / 56) | 1 | /; mobile-390 |
| `image-aspect-distorted` | clia.BvTwra-l_Z2uY8xA.webp stretched 18% (natural 2.929, rendered 2.409, box 106x44, object-fit fill, aspect-ratio auto 164 / 56) | 1 | /; mobile-390 |
| `image-aspect-distorted` | alatus.BLgmakCj_ZuhpXt.webp stretched 20% (natural 3.250, rendered 2.614, box 115x44, object-fit fill, aspect-ratio auto 182 / 56) | 1 | /; mobile-390 |
| `image-aspect-distorted` | virtuoso-member.BX5lHYDf_2i7xPB.webp stretched 14% (natural 2.464, rendered 2.114, box 93x44, object-fit fill, aspect-ratio auto 138 / 56) | 1 | /; mobile-390 |
| `image-aspect-distorted` | atia.BgIArYcT_Z1iOyaK.webp stretched 19% (natural 3.179, rendered 2.568, box 113x44, object-fit fill, aspect-ratio auto 178 / 56) | 1 | /; mobile-390 |
| `image-aspect-distorted` | clia.BvTwra-l_1YA1dH.webp stretched 18% (natural 2.929, rendered 2.409, box 106x44, object-fit fill, aspect-ratio auto 164 / 56) | 1 | /; mobile-390 |
| `image-aspect-distorted` | alatus.BLgmakCj_ZemtDr.webp stretched 20% (natural 3.250, rendered 2.614, box 115x44, object-fit fill, aspect-ratio auto 182 / 56) | 1 | /; mobile-390 |
| `touch-target-small` | a "Expertise" is 63.8x24.3 | 6 | /; desktop-1440, mobile-390, ipad-pro-portrait; webkit/firefox |
| `touch-target-small` | a "Who we are" is 79x24.3 | 6 | /; desktop-1440, mobile-390, ipad-pro-portrait; webkit/firefox |
| `touch-target-small` | a "Journal" is 51.1x24.3 | 6 | /; desktop-1440, mobile-390, ipad-pro-portrait; webkit/firefox |
| `touch-target-small` | a.text-link "Meet the whole team" is 155.7x26.4 | 6 | /; desktop-1440, mobile-390, ipad-pro-portrait; webkit/firefox |
| `touch-target-small` | a.text-link "Read the story" is 107.3x26.4 | 6 | /; desktop-1440, mobile-390, ipad-pro-portrait; webkit/firefox |
| `touch-target-small` | a.text-link.secondary-link "Our Virtuoso profile" is 145.3x26.4 | 6 | /; desktop-1440, mobile-390, ipad-pro-portrait; webkit/firefox |
| `touch-target-small` | a "Facebook" is 59.9x22.4 | 6 | /; desktop-1440, mobile-390, ipad-pro-portrait; webkit/firefox |
| `touch-target-small` | a.text-link.text-link--onDark "Explore our expertise" is 158.6x26.4 | 5 | /; desktop-1440, mobile-390, ipad-pro-portrait; webkit/firefox |
| `touch-target-small` | a "Privacy" is 49.2x24.3 | 4 | /; desktop-1440, mobile-390, ipad-pro-portrait; webkit/firefox |
| `touch-target-small` | a.text-link "Meet Gina and the team" is 176.4x26.4 | 3 | /; desktop-1440, mobile-390, ipad-pro-portrait |
| `touch-target-small` | a "Contact" is 52.5x24.3 | 3 | /; desktop-1440, mobile-390, ipad-pro-portrait |
| `touch-target-small` | a "Instagram" is 64.5x22.4 | 3 | /; desktop-1440, mobile-390, ipad-pro-portrait |
| `touch-target-small` | a.text-link "Meet Gina and the team" is 176.5x26.4 | 3 | /; ipad-pro-portrait, mobile-390, desktop-1440 |
| `touch-target-small` | a "Contact" is 52.4x24.3 | 3 | /; ipad-pro-portrait, mobile-390, desktop-1440 |
| `touch-target-small` | a "Instagram" is 64.4x22.4 | 3 | /; ipad-pro-portrait, mobile-390, desktop-1440 |
| `touch-target-small` | a "Home" is 39.9x24.3 | 2 | /; desktop-1440; webkit/firefox |
| `touch-target-small` | a "Expertise" is 125.1x42.9 | 2 | /; mobile-390; webkit/firefox |
| `touch-target-small` | a "Virtuoso" is 114.5x42.9 | 2 | /; mobile-390; webkit/firefox |
| `touch-target-small` | a "Who we are" is 158.9x42.9 | 2 | /; mobile-390; webkit/firefox |
| `touch-target-small` | a "Journal" is 97.1x42.9 | 2 | /; mobile-390; webkit/firefox |
| `touch-target-small` | a "07 5545 1600" is 350x26.4 | 2 | /; mobile-390; webkit/firefox |
| `touch-target-small` | a "Home" is 36.9x22.4 | 2 | /; ipad-pro-portrait; firefox/webkit |
| `touch-target-small` | a "Expertise" is 59x22.4 | 2 | /; ipad-pro-portrait; firefox/webkit |
| `touch-target-small` | a "Virtuoso" is 52.3x22.4 | 2 | /; ipad-pro-portrait; firefox/webkit |
| `touch-target-small` | a "Who we are" is 73x22.4 | 2 | /; ipad-pro-portrait; firefox/webkit |
| `touch-target-small` | a "Journal" is 47.2x22.4 | 2 | /; ipad-pro-portrait; firefox/webkit |
| `touch-target-small` | a "07 5545 1600" is 674.1x26.4 | 2 | /; ipad-pro-portrait; firefox/webkit |
| `touch-target-small` | a "Privacy" is 49.1x24.3 | 2 | /; mobile-390, desktop-1440 |
| `touch-target-small` | a "Virtuoso" is 56.6x24.3 | 1 | /; desktop-1440 |
| `touch-target-small` | a "07 5545 1600" is 462.4x26.4 | 1 | /; desktop-1440 |
| `touch-target-small` | a "Home" is 83.2x42.9 | 1 | /; mobile-390 |
| `touch-target-small` | a.text-link.text-link--onDark "Explore our expertise" is 158.5x26.4 | 1 | /; ipad-pro-portrait |
| `touch-target-small` | a "Home" is 83.1x42.9 | 1 | /; mobile-390 |
| `touch-target-small` | a "Virtuoso" is 56.5x24.3 | 1 | /; desktop-1440 |
| `touch-target-small` | a "07 5545 1600" is 462.5x26.4 | 1 | /; desktop-1440 |


## Items requiring human visual judgement

These cannot be settled by measurement. A person has to look.

- **Visual baselines are unapproved.** See `qa/visual/BASELINE-STATUS.md`. The first reference set records what the site looks like today; it is not evidence the design is correct.
- **Photograph quality.** The team images are 1037x853 and 904x853 originals and are visibly soft in a full-bleed hero. No code change fixes that.
- **Hero crops.** Each hero carries a hand-set `object-position`. A crop that is measurably in-bounds can still be badly composed.
- **Copy and tone.** The suite checks punctuation and casing rules, not whether a sentence is good.
- **Colour mixes.** Text set with `color-mix()` of two tokens has no certified contrast figure in the kit's approved pair table, though axe reports no contrast violations at AA.
- **Accepted risks recorded in the kit.** The carousel has no pause control; brand kit v3 records this with four mitigations and a known WCAG 2.2.2 residual.

## Suggested fixes, ranked

| # | Severity | Finding | Occurrences | Fix |
|---|---|---|---|---|
| 1 | fail | `image-aspect-distorted` | 727 | Footer logo wall. The ul is flex and squeezes each li below the mark's natural width; Astro's max-width: 100% then clamps the image while .logo-wall img holds height: 56px, and object-fit defaults to fill. Add `object-fit: contain` to `.logo-wall img` (blocks. |
| 2 | fail | `line-height-off-scale` | 39 | site.css sets line-height 1.08 on h1, h2 and h3 together. Split it so h2 gets 1.16 and h3 gets 1.25. |
| 3 | fail | `hero-heading-lines` | 39 | Shorten the copy or widen the measure. The kit caps display headings at two lines. |
| 4 | fail | `unapproved-font-weight` | 3 | Style strong and b to weight 600. The loaded face carries 400 to 600, so 700 is synthesised bold. |
| 5 | fail | `menu-no-escape-close` | 2 | Add a keydown handler closing the overlay on Escape. WCAG 2.1.2 adjacent, and the single most common expectation for a full-screen menu. |
| 6 | fail | `menu-no-focus-trap` | 2 | Trap Tab within [data-nav] while open, and restore focus to the toggle on close. |
| 7 | fail | `menu-no-outside-click-close` | 2 | Close the overlay on a click landing outside the panel. |
| 8 | fail | `menu-no-resize-handling` | 2 | Clear body.menu-open on a resize past 940px, or the page stays scroll-locked behind a desktop nav. |
| 9 | fail | `image-failed-to-load` | 2 | /_astro/virtuoso-member.BX5lHYDf_18wd0o.webp |
| 10 | fail | `dialog-unreachable` | 1 | Either wire a [data-open-enquiry] control or stop rendering EnquiryDialog on every page. |
| 11 | warn | `touch-target-small` | 2501 | a.text-link.secondary-link "Our Virtuoso profile" is 145.3x26.4 |
| 12 | warn | `stylelint-scale-unlimited/declaration-strict-value` | 50 | src/styles/blocks.css:116 Use a brand token here, not a raw value. Tokens live in brand-kit/styles/tokens.css. (scale-unlimited/declaration-strict-value) |
| 13 | warn | `token-derived-colour-uncertified` | 31 | oklch(0.851756 0.0347718 268.509) on p (a color-mix of tokens; no certified contrast figure) |
| 14 | warn | `container-width-inconsistent` | 8 | .shell renders at 1200, 980px on one page |
| 15 | warn | `stylelint-no-duplicate-selectors` | 5 | src/styles/blocks.css:120 Duplicate selector ".newsletter h2", first used at line 114 (no-duplicate-selectors) |
| 16 | warn | `unapproved-font-family` | 3 | monospace on code (inside a tracked placeholder) |
| 17 | warn | `menu-no-initial-focus-move` | 2 | Opening the overlay leaves focus on the toggle rather than moving it into the panel, so a screen-reader user must tab past the header to reach the menu. |
| 18 | warn | `line-length-long` | 1 | p measures about 94ch against a 68ch guide |
| 19 | warn | `button-wraps` | 1 | a.button.button-outline "Send an enquiry instead" wraps to 2 lines |
| 20 | warn | `css-colour-off-palette` | 1 | 8 value(s) outside the kit: oklch(20% .03 264 / .55), oklch(18% .03 264 / .82), oklch(18% .03 264 / .45), oklch(18% .03 264 / .28), rgb(17 23 43 / 80%), rgb(17 23 43 / 38%), #f6f3ef, #ece7e2 |


## How to reproduce

```bash
corepack pnpm build
corepack pnpm test:qa
```

Machine-readable form of everything above: `qa/reports/results.json`.
