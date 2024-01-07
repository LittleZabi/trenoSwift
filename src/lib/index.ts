import database from "./database"
import { Products, Configurations, CategoryTypes, Categories} from "./models"
await database.connect()
export const getConfig = async (projection:any) => 
    await Configurations.findOne({}, projection);
const createPipeline = (coll:string, limit:number) => [
		{ $match: {isActive: true, asDraft: false} },
		{
			$lookup: coll  === 'products' ? {
				from: 'categories',
				localField: 'category',
				foreignField: '_id',
				as: 'cat'
			} : {}
		},
		{
			$unwind: coll === 'products' ? {
				path: '$cat',
				preserveNullAndEmptyArrays: true
			} : {}
		},
		{
			$facet: {
				results: [
					{ $limit: limit},
					{ $sort: { _id: -1 } },
					{
						$project: coll === 'products' ? {
							is_new: 1,
							title: 1,
							images: 1,
                            rating: 1,
                            views: 1,
                            _id: 0,
                            slug: 1,
                            price: 1,
                            discount: 1,
							'cat.category': 1,
						} : {}
					}
				]
			}
		}
	];
export const getHomeContent = async () => {
    let config = await getConfig({
            new_arrivals_products_limit: 1,
            cat_types_limit:1, 
            popular_products_limit: 1,
            categories_limit: 1, 
            recommended_for_user_limit: 1
        })
	const prList = await Products.aggregate(createPipeline('products', config.new_arrivals_products_limit.limit)).exec();
    const catTypes  = await CategoryTypes.find({}, {title: 1, image: 1, _id: 0, slug: 1}).sort('-_id').limit(config.cat_types_limit.limit)
    const getPopularItems = await Products.find({}, {_id: 0, title: 1, images: 1, price: 1, loves: 1}).sort({views: -1}).limit(config.popular_products_limit)
    const getCategories = await Categories.find({}, {category: 1, image: 1, _id: 0})
    let productList = [];
    for(let item of prList[0].results){
        productList.push({
            ...item, images: item.images[0], cat: item?.cat?.category
        })
    }
    return {
        productList,
        catTypes,
        getPopularItems,
        getCategories
    }
}
export const getSettings = async () => {
    const setting = await Configurations.findOne(); 
    return setting
}