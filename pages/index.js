import Head from 'next/head'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nutrition Facts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  >

        <body className="label">
           
          <header>
            <h1 className="bold">Nutrition Facts</h1>
            <div className="divider"></div>
            <p>8 servings per container</p>
            <p className="bold">Serving size <span className="right">2/3 cup (55g)</span></p>
          </header>
          <div className="divider lg"></div>
          <div className="calories-info">
            <p className="bold sm-text">Amount per serving</p>
            <h1>Calories <span className="right">230</span></h1>
          </div>
          <div className="divider md"></div>
          <div className="daily-value sm-text">
            <p className="right bold no-divider">% Daily Value *</p>
            <div className="divider"></div>
            <p><span className="bold">Total Fat</span> 8g <span className="bold right">10%</span></p>
            <p className="indent no-divider">Saturated Fat 1g <span className="bold right">5%</span></p>
            <div className="divider"></div>
            <p className="indent no-divider"><i>Trans</i> Fat 0g</p>
            <div className="divider"></div>
            <p><span className="bold">Cholesterol</span> 0mg <span className="right bold">0%</span></p>
            <p><span className="bold">Sodium</span> 160mg <span className="right bold">7%</span></p>
            <p><span className="bold">Total Carbohydrate</span> 37g <span className="right bold">13%</span></p>
            <p className="indent no-divider">Dietary Fiber 4g</p>
            <div className="divider"></div>
            <p className="indent no-divider">Total Sugars 12g</p>
            <div className="divider dbl-indent"></div>
            <p className="dbl-indent no-divider">Includes 10g Added Sugars <span className="right bold">20%</span></p>
            <div className="divider"></div>
            <p className="no-divider"><span className="bold">Protein</span> 3g</p>
            <div className="divider lg"></div>
            <p>Vitamin D 2mcg <span className="right">10%</span></p>
            <p>Calcium 260mg <span className="right">20%</span></p>
            <p>Iron 8mg <span className="right">45%</span></p>
            <p className="no-divider">Potassium 235mg <span className="right">6%</span></p>

            <div className="divider md"></div>
            <p className="note">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
          </div>
        </body>


      </main>

      <Footer />
    </div>
  )
}
