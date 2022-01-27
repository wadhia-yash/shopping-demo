import {rest} from 'msw';

const productItems = [
    {
        id: 1,
        product_name: 'Decor de Maison',
        product_description: 'Shiny Gold Poulsen Triple Adjustable Study Lamp',
        product_cost: 3000,
        product_image: 'https://ii2.pepperfry.com/media/catalog/product/p/o/494x544/poulsen-pharmacy-adjustable-study-lamp-with-shiny-gold-base-by-decor-de-maison-poulsen-pharmacy-adju-x56wi4.jpg',
    },
    {
        id: 2,
        product_name: 'Kapoor E Illuminations',
        product_description: 'Green Glass Shade Study Lamp with Silver Base',
        product_cost: 5822,
        product_image: 'https://ii3.pepperfry.com/media/catalog/product/g/r/494x544/green-glass-study-lamp-by-kapoor-e-illuminations-green-glass-study-lamp-by-kapoor-e-illuminations-pczbjx.jpg',
    },
    {
        id: 3,
        product_name: 'Spacewood',
        product_description: 'Winner Hutch Table with Cabinet & Bookshelf in Rigato Walnut Finish',
        product_cost: 7249,
        product_image: 'https://ii3.pepperfry.com/media/catalog/product/w/i/494x544/winner-hutch-table-in-rigato-walnut-finish-by-spacewood-winner-hutch-table-in-rigato-walnut-finish-b-mncmxs.jpg',
    },
    {
        id: 4,
        product_name: 'WoodenMood',
        product_description: 'Sheesham Wood Book shelf in Honey Oak Finish',
        product_cost: 2129,
        product_image: 'https://ii3.pepperfry.com/media/catalog/product/e/n/494x544/engineered-wood-wallshelf-in-oak-finish-engineered-wood-wallshelf-in-oak-finish-6qrrgy.jpg',
    },
    {
        id: 5,
        product_name: 'Sattva',
        product_description: 'Combo Muddha XXXL Bean Bag & Round Pouffe with Beans in Black Colour with Pink Piping',
        product_cost: 2564,
        product_image: 'https://ii3.pepperfry.com/media/catalog/product/c/o/494x544/combo-muddha-xxxl-bean-bag---round-pouffe-with-beans-in-black-colour-with-pink-piping-by-sattva-comb-fz1nlf.jpg',
    },
    {
        id: 6,
        product_name: 'Dolphin Bean Bags',
        product_description: 'Premium XL Size Bean Bag & Foot Stool with Beans in Black Colour',
        product_cost: 2964,
        product_image: 'https://ii3.pepperfry.com/media/catalog/product/p/r/494x544/premium-xl-size-bean-bag---foot-stool-with-beans-in-black-colour-by-dolphin-bean-bags-premium-xl-siz-j2cuqs.jpg',
    },
    {
        id: 7,
        product_name: 'ValueWud',
        product_description: 'Gin Ergonomic Chair In Grey & Black Colour',
        product_cost: 3450,
        product_image: 'https://ii2.pepperfry.com/media/catalog/product/g/i/494x544/gin-ergonomic-chair-in-grey---black-colour---valuewud-gin-ergonomic-chair-in-grey---black-colour---v-1a1ihk.jpg',
    },
    {
        id: 1,
        product_name: 'Decor de Maison',
        product_description: 'Shiny Gold Poulsen Triple Adjustable Study Lamp',
        product_cost: 3000,
        product_image: 'https://ii2.pepperfry.com/media/catalog/product/p/o/494x544/poulsen-pharmacy-adjustable-study-lamp-with-shiny-gold-base-by-decor-de-maison-poulsen-pharmacy-adju-x56wi4.jpg',
    }
]

interface IProductResponse {
    [index: number]: {id: number, product_name: string, product_description: string, product_cost: number, product_image: string};
}

export const handlers = [
    rest.get<IProductResponse>("https://made.up/api/shoppingItems", (req, res, ctx) => {
        return res (
            ctx.status(200),
            ctx.delay(500),
            ctx.json(productItems)
        )
    })
]
