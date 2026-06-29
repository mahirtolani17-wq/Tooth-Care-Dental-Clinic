import https from 'https';

function fetchUrl(url: string) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const match = data.match(/https:\/\/i\.ibb\.co\/[^"']+/g);
      console.log(match);
    });
  });
}

fetchUrl('https://ibb.co/JRML01Xc');
fetchUrl('https://ibb.co/q3ScBbNC');
fetchUrl('https://ibb.co/mCyvHnKh');
