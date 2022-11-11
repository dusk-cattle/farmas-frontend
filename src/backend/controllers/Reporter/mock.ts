import { ReporterProps } from "./types";

export function mockReports(): ReporterProps[] {
   const mock: ReporterProps[] = [
      {
         id: "af2fceee-cbfe-4e9d-236b-08dac29dec7f",
         reporter: "7fe653f3-682d-4a3f-b424-5cb709a10c44",
         content:
            "\r\n        <html>\r\n            <head>\r\n                <style>\r\n                    * {\r\n                      font-family: arial, sans-serif;\r\n                      border: 0;\r\n                      margin: 0;\r\n                      padding: 0;\r\n                      box-sizing: border-box;\r\n                    }\r\n\r\n                    .title {\r\n                      display: flex;\r\n                      flex-direction: column;\r\n                      align-items: center;\r\n                      justify-content: center;\r\n                      margin-top: 10px;\r\n                    }\r\n\r\n                    .section {\r\n                      margin-top: 30px;\r\n                      display: flex;\r\n                      flex-direction: column;\r\n                      align-items: center;\r\n                      justify-content: center;\r\n                    }\r\n\r\n                    .section-name {\r\n                      margin-bottom: 5px;\r\n                    }\r\n\r\n                    table {\r\n                      border-collapse: collapse;\r\n                      width: 80%;\r\n                    }\r\n\r\n                    td, th {\r\n                      border: 1px solid #eeeeee;\r\n                      text-align: left;\r\n                      padding: 8px;\r\n                    }\r\n\r\n                    tr:nth-child(even) {\r\n                      background-color: #dddddd;\r\n                    }\r\n\r\n                    footer {\r\n                      display: flex;\r\n                      position: absolute;\r\n                      bottom: 0;  \r\n                      flex-direction: column;\r\n                      align-items: center;\r\n                      justify-content: center;\r\n                      width: 100%;\r\n                      padding: 10px;\r\n                    }\r\n                </style>\r\n            </head>\r\n\r\n            <body>\r\n                <div class='title'>\r\n                    <h1>F.A.R.M.A.S</h1>\r\n                    <br>\r\n                    <h2>Soil Report Analysis</h2>\r\n                </div>\r\n                \r\n                    <div class='section'>\r\n                        <h3 class='section-name'>Humidity</h3>\r\n\r\n                        <table>\r\n                            <tr>\r\n                                <th>Metric</th>\r\n                                <th>Value</th>\r\n                                <th>Reference</th>\r\n                            </tr>\r\n                                <tr>\r\n                                    <td>H2O</td>\r\n                                    <td>120mm</td>\r\n                                    <td>80mm ~ 140mm</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>CO2</td>\r\n                                    <td>20dg</td>\r\n                                    <td>40dg ~ 140dg</td>\r\n                                </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class='section'>\r\n                        <h3 class='section-name'>Acidity</h3>\r\n\r\n                        <table>\r\n                            <tr>\r\n                                <th>Metric</th>\r\n                                <th>Value</th>\r\n                                <th>Reference</th>\r\n                            </tr>\r\n                                <tr>\r\n                                    <td>Cu</td>\r\n                                    <td>1mg</td>\r\n                                    <td>0.02mg ~ 2mg</td>\r\n                                </tr>\r\n                        </table>\r\n                    </div>\r\n            \r\n                    \r\n                <footer>\r\n                    <h4>Reporter: 7fe653f3-682d-4a3f-b424-5cb709a10c44</h4>\r\n                    <h4>Report Date: 2019-01-06T17:16:40.0000000Z</h4>\r\n                </footer>\r\n            </body>\r\n        </html>\r\n    ",
         reportType: "SOIL_ANALYSIS",
         createdAt: "2022-11-09T22:00:56.1243811",
         status: "COMPLETE",
      },
   ];

   return mock;
}
