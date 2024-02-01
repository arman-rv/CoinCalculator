import { useEffect } from 'react';
import axios from 'axios';

const CoinPriceDisplay = () => {
  const coinSymbol = 'dogecoin';
  const vsCurrency = 'usd';
  const coinGeckoUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${coinSymbol}&vs_currencies=${vsCurrency}`;

  useEffect(() => {
    axios.get(coinGeckoUrl)
      .then(response => {
        console.log(`قیمت فعلی ${coinSymbol} به ${vsCurrency}: ${response.data[coinSymbol][vsCurrency]}`);
      })
      .catch(error => {
        console.error('خطا در درخواست اطلاعات: ', error.message);
      });
  }, []);

  return (
    <div>
      <h1>دریافت قیمت فعلی کوین</h1>
      {/* محتوای اضافی */}
    </div>
  );
};

export default CoinPriceDisplay;
