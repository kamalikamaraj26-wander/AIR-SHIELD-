# AIR-SHIELD — Community Air Safety Dashboard

AIR-SHIELD is a responsive website prototype for presenting air-quality information, safety notices, and practical awareness tips in one dashboard. It is designed as a starter project that can later connect to trusted sensors or verified data providers through AWS.

> **Important:** This repository currently contains a front-end demo. The displayed AQI, PM2.5, temperature, and humidity readings are simulated examples, not live measurements, medical advice, or verified emergency alerts. Do not use the demo values to make real-world safety decisions.

## Features

- Responsive dashboard for desktop and mobile
- Air Quality Index (AQI), PM2.5, temperature, and humidity cards
- Demo scenarios changed with the **Refresh demo** button
- Safety notices and general awareness tips
- Clear disclosure that values are simulated
- No API keys, build tools, or external JavaScript libraries required

## Run locally

1. Download or clone this repository.
2. Open `index.html` in a browser.

Optional local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project files

- `index.html` — page structure and content
- `styles.css` — responsive layout and styling
- `script.js` — simulated readings and dashboard interactions

## AWS deployment: static website

A straightforward hosting path for this prototype is **Amazon S3 + Amazon CloudFront**.

1. Create an S3 bucket in your AWS account.
2. Upload `index.html`, `styles.css`, and `script.js`.
3. For a public-facing production site, prefer a private S3 bucket with CloudFront Origin Access Control (OAC), rather than making the bucket public.
4. Create a CloudFront distribution with the S3 bucket as its origin and configure `index.html` as the default root object.
5. Open the CloudFront distribution URL and test the site on desktop and mobile.
6. Review AWS costs, permissions, and security before sharing the URL.

AWS interfaces change over time. Follow the current AWS documentation for S3 static hosting and CloudFront OAC. Avoid placing secrets or private credentials in website files.

## Suggested future AWS architecture

```text
Verified sensor / data provider
          |
          v
Amazon API Gateway  --->  AWS Lambda
                              |
                              v
                    Amazon DynamoDB (optional)
                              |
                              v
                         Web dashboard

Static files: Amazon S3 (private origin) ---> Amazon CloudFront ---> visitors
```

This architecture is a **future extension**, not implemented in the current prototype. A real data integration should validate its data source, units, timestamps, regional AQI standard, error handling, rate limits, and permissions. Add monitoring and appropriate alerts only after testing.

## Suggested next improvements

- Connect an official, documented air-quality API or real sensor
- Add a backend endpoint with API Gateway and Lambda
- Store timestamped readings in DynamoDB if history is needed
- Show the source, location, and last-updated time for every real reading
- Add automated tests, accessibility checks, and error/loading states

## Technology stack

- HTML5
- CSS3
- Vanilla JavaScript
- AWS S3 and CloudFront (deployment plan)

## Demo checklist

1. Introduce the community air-safety problem and explain the dashboard.
2. Show the four metrics and the simulated-data disclaimer.
3. Click **Refresh demo** to demonstrate changing scenarios and guidance.
4. Explain the current stack: HTML, CSS, JavaScript.
5. Explain the proposed AWS hosting path: private S3 origin and CloudFront.
6. Clearly distinguish what is implemented from planned AWS backend features.

## License

MIT. See [`LICENSE`](LICENSE).
