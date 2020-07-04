import React from 'react';
import './bonuses.scss';

const Bonuses = () => {
  return (
    <main>
      <div className="bonuses">
        <div className="container">
          <div className="bonuses-wrapper">
            <div className="bonuses-title">
              <h2>Бонуси</h2>
              <h4>(в розробці)</h4>
            </div>
            <div className="bonuses-image">
              <img src="https://decemberboys.com.ua/media/file_manager/allaround/zslide-bonus-uk.jpg" alt="bonuses"/>
            </div>
            <div className="bonuses-text">
              <p>
                Бонуси на Cardhouse - це система лояльності для наших клієнтів.
              </p>
              <p>
                Купуючи будь-який товар в нашому магазині або будь-навчальне відео, Ви отримуєте 5 бонусів.
              </p>
              <p>
                Таким чином, ви можете економити від 5 грн вже при вашому наступному замовленні.
              </p>
              <p>
                Наприклад, ви купили 10 колод Tally-Ho Fan Back і після успішної оплати і відправки вашого замовлення, вам автоматично нараховується 10 (одиниць товару) х 5 (бонусів / товар) = 50 бонусів. Це означає, що при вашій наступній покупці, ви зможете заощадити 50 грн, якщо вирішите витратити всі доступні бонуси.
              </p>
              <p>
                Бонуси накопичуються і ніколи не згоряють. Приємних покупок і повертайтеся до нас частіше!
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Bonuses;
